import _ from 'underscore';
import {DB} from '../config';
import {getWhereForUserType} from './util';

export class Skit {
  constructor(json) {
    if (json == null) return;
    for (let field in json) {
      this[field] = json[field];
    }
  }
}

export var getSkits = (type) => {
  console.log(type)
  let skitsPromise =
    DB.execute(
      `SELECT
        *
      FROM
        skits AS s
      `);

  let where = getWhereForUserType(type);

  let usersPromise =
    DB.execute(
      `SELECT
          u.user_id,
          u.first_name,
          u.last_name,
          u.bot,
          su.skit_id
        FROM
          users AS u
        JOIN
          skit_user_bridge AS su
        ON
          u.user_id = su.user_id
      ` + where)

  let messagesPromise =
    DB.execute(
      `SELECT
        *
      FROM
        messages AS m
      JOIN
        users AS u
      ON u.user_id = m.user_id
    ` + where)

  return Promise.all([skitsPromise, usersPromise, messagesPromise]).then(results => {
    let skits = results[0];
    let users = results[1];
    let messages = results[2];
    let usersBySkit = _.groupBy(users, (user) => user.skit_id)
    let messagesBySkit = _.groupBy(messages, (message) => message.skit_id)
    return skits.map(skit => {
      return {
        ...skit,
        users: usersBySkit[skit.skit_id],
        messages: messagesBySkit[skit.skit_id]
      }
    })
  })
}

export var getSkit = (skit_id, type) => {
  let skitPromise =
    DB.execute(
      `SELECT
        *
      FROM
        skits AS s
      WHERE
        skit_id = $1
      `, skit_id);

  let where = getWhereForUserType(type)

  where += " AND skit_id = $1"

  let usersPromise =
    DB.execute(
      `SELECT
          u.user_id,
          u.first_name,
          u.last_name,
          su.skit_id
        FROM
          users AS u
        JOIN
          skit_user_bridge AS su
        ON
          u.user_id = su.user_id
      ` + where, [skit_id])

  let messagesPromise =
    DB.execute(
      `SELECT
        *
      FROM
        messages AS m
      JOIN
        users AS u
      ON u.user_id = m.user_id
    ` + where, [skit_id])

  return Promise.all([skitPromise, usersPromise, messagesPromise]).then(results => {
    let skit = results[0][0];
    let users = results[1];
    let messages = results[2];

    return new Skit({
      ...skit,
      users,
      messages
    })
  })
}

export var createSkit = ({title, description, users}) => {
  return DB.transact()
    .then(_ => {
      let createTableSQL = `
        INSERT INTO skits (title, description)
        VALUES ($1, $2)
      `
      return DB.execute(createTableSQL, [title, description])
        .then(result => result.insertId);
    })
    .then(skit_id => {
      let createSkitUserBridgesSQL = `
        INSERT INTO skit_user_bridge
          (skit_id, user_id)
        VALUES
      ` + users.map((user, index) => `($${index * 2 + 1}, ${index * 2 + 2})`).join(",");
      let args = _.flatten(users.map(user => [skit_id, user]));
      return DB.execute(createSkitUserBridgesSQL, args)
        .then(_ => skit_id)
    })
    .then(skit_id => {
      return DB.commit()
        .then(_ => skit_id);
    })
    .catch( (err, action) => {
      console.log("Error", err)
      if (action != 'transact') {
        return DB.rollback();
      }

      return null;
    })
}

export var deleteSkit = (skit_id) => {
  let deleteSQL = `
    DELETE FROM
      skits
    WHERE skit_id = $1
  `

  return DB.query(deleteSQL, [skit_id])
    .then(_ => skit_id)
}

export var updateSkit = ({skit_id, title, description}) => {
  return DB.execute(
    `UPDATE skits SET title = $1, description = $2 WHERE skit_id = $3`,
    [title, description, skit_id]
  ).then(_ => skit_id)
}
