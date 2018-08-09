import {DB} from '../config';
import _ from 'underscore'


export var addUserToSkit = ({skit_id, user_id}) => {
  return DB.execute(
    `INSERT INTO skit_user_bridge
      (skit_id, user_id)
    VALUES
      (?, ?)
    `,
    [skit_id, user_id]
  ).then(_ => user_id)
}

export var addUsersToSkit = ({skit_id, user_ids}) => {
  console.log(user_ids);
  return DB.execute(
    `INSERT INTO skit_user_bridge
      (skit_id, user_id)
    VALUES
  ` + user_ids.map(user_id => "(?, ?)").join(","),
    _.flatten(user_ids.map(user_id => [skit_id, user_id]))
  ).then(_ => user_ids)
}

export var removeUserFromSkit = ({skit_id, user_id}) => {
  return DB.execute(
    `DELETE FROM
      skit_user_bridge
    WHERE
      skit_id = ? AND
      user_id = ?`,
    [skit_id, user_id]
  ).then(_ => user_id)
}
