import {DB} from '../config';

export var getMessages = ({skit_id, type}) => {
  switch(type) {
    case 'ALL':
      return DB.execute(
        `SELECT
          *
        FROM
          messages
        WHERE
          skit_id = $1`,
        [skit_id]
      ).then(result => result.rows)
    default:
      return DB.execute(
        `SELECT
          *
        FROM messages
        WHERE
          skit_id = $1 AND
          type = $2
        ORDER BY
          position`,
        [skit_id, type]
      ).then(result => result.rows)
  }
}

export var createMessage = ({text, delay, skit_id, user_id, type, position}) => {
  return DB.execute(`
    INSERT INTO
      messages
      (text, delay, skit_id, user_id, type, position)
    VALUES
      ($1, $2, $3, $4, $5, $6)
    RETURNING message_id
  `, [text, delay, skit_id, user_id, type, position])
    .then(result => result.rows[0].message_id)
}

export var deleteMessage = (message_id) => {
  return DB.execute(`
    DELETE FROM messages WHERE message_id = $1
  `, [message_id])
    .then(_ => message_id)
}

export var updateMessage = ({message_id, text, delay, user_id, order}) => {
  return DB.execute(`
    UPDATE messages
    SET
      text = $1,
      delay = $2,
      user_id = $3,
      order = $4
    WHERE
      message_id = $5
  `, [text, delay, user_id, order, message_id]).then(_ => message_id)
}
