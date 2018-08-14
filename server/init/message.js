import {DB} from '../config';

let messagesDelete = `
  DROP TABLE IF EXISTS messages
`

let typeEnumDrop = `
  DROP TYPE IF EXISTS MessageType
`

let typeEnumCreate = `
  CREATE TYPE MessageType AS ENUM ('SEND', 'RECEIVE');
`

let messagesCreate = `
  CREATE TABLE IF NOT EXISTS messages (
    message_id SERIAL PRIMARY KEY,
    text varchar(511),
    delay float(3),
    skit_id integer,
    user_id integer,
    type MessageType,
    position integer,
    FOREIGN KEY (skit_id) REFERENCES skits (skit_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
  )
`

export var initializeMessages = () => {
  return DB.execute(messagesDelete)
    .then(_ => DB.execute(typeEnumDrop))
    .then(_ => DB.execute(typeEnumCreate))
    .then(_ => DB.execute(messagesCreate))
}
