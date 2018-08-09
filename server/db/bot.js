import {DB} from '../config';

export var getBots = (bot_ids) => {
  if (bot_ids == null)
    return DB.execute('SELECT * FROM bots');

  return DB.execute(`SELECT * FROM bots WHERE bot_id in (${bot_ids.join(",")})`)
}

export function getBot(bot_id) {
  return DB.execute('SELECT * FROM bots WHERE bot_id = ?', [bot_id]).then(bot => bot[0])
}

export var createBot = (name) => {
  return DB.execute('INSERT INTO bots (name) VALUES (?)', [name])
    .then(result => result.insertId)
}

export var deleteBot = (bot_id) => {
  return DB.execute('DELETE FROM bots WHERE bot_id = ?', [bot_id])
    .then(_ => bot_id)
}

export var updateBot = ({bot_id, name}) => {
  return DB.execute(
    'UPDATE bots SET name = ? WHERE bot_id = ?',
    [name, bot_id]
  ).then(_ => bot_id)
}
