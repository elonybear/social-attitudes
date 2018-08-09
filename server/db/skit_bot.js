import {DB} from '../config';
import _ from 'underscore';

export var addBotsToSkit = ({skit_id, bot_ids}) => {
  return DB.execute(
    `INSERT INTO skit_bot_bridge
      (skit_id, bot_id)
    VALUES
  ` + bot_ids.map(bot_id => "(?, ?)").join(","),
    _.flatten(bot_ids.map(bot_id => [skit_id, bot_id]))
  ).then(_ => bot_ids)
}

export var removeBotFromSkit = ({skit_id, bot_id}) => {
  return DB.execute(
    `DELETE FROM
      skit_bot_bridge
    WHERE
      skit_id = ? AND
      bot_id = ?`,
    [skit_id, bot_id]
  ).then(_ => bot_id)
}
