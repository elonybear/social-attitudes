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
          skit_id = ?`,
        [skit_id]
      )
    default:
      return DB.execute(
        `SELECT
          *
        FROM messages
        WHERE
          skit_id = ? AND
          type = ?
        ORDER BY
          position`,
        [skit_id, type]
      )
  }
}

export var createMessage = ({text, delay, skit_id, user_id, type, position}) => {
  return DB.execute(`
    INSERT INTO
      messages
      (text, delay, skit_id, user_id, type, position)
    VALUES
      (?, ?, ?, ?, ?, ?)
  `, [text, delay, skit_id, user_id, type, position])
    .then(result => result.insertId)
}

export var deleteMessage = (message_id) => {
  return DB.execute(`
    DELETE FROM messages WHERE message_id = ?
  `, [message_id])
    .then(_ => message_id)
}

export var updateMessage = ({message_id, text, delay, user_id, order}) => {
  return DB.execute(`
    UPDATE messages
    SET
      text = ?,
      delay = ?,
      user_id = ?,
      order = ?
    WHERE
      message_id = ?
  `, [text, delay, user_id, order, message_id]).then(_ => message_id)
}
