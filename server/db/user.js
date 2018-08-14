import {getWhereForUserType} from './util';

export class User {
  constructor(json) {
    if (json == null) return;
    for(let field in json) {
      this[field] = json[field];
    }
  }
}

export class UserList {}

import {DB} from '../config';

export var getUsers = (user_ids, type, skit_id) => {
  let where = getWhereForUserType(type);

  let query = `SELECT * FROM users AS u `;
  let args = []

  if (skit_id != null) {
    query += `
      JOIN
        skit_user_bridge AS sb
      ON
        u.user_id = sb.user_id AND
        skit_id = $1
    `
    args.push(skit_id)
  }

  query += where;

  if (user_ids != null) {
    query += ` AND u.user_id = any (array [${user_ids.join(",")}])`
  }

  return DB.execute(query, args).then(users => users.map(user => new User(user)))
}

export function getUser(user_id) {
  return DB.execute('SELECT * FROM users WHERE user_id = $1', [user_id])
    .then(users => new User(users[0]))
}

export var createUser = ({first_name, last_name, bot}) => {
  return DB.execute('INSERT INTO users (first_name, last_name, bot) VALUES ($1, $2, $3)', [first_name, last_name, bot])
    .then(result => result.insertId)
}

export var deleteUser = (user_id) => {
  return DB.execute('DELETE FROM users WHERE user_id = $1', [user_id])
    .then(_ => user_id)
}

export var updateUser = ({user_id, first_name, last_name}) => {
  return DB.execute(
    'UPDATE users SET first_name = $1, last_name = $2 WHERE user_id = $3',
    [first_name, last_name, user_id]
  ).then(_ => user_id)
}
