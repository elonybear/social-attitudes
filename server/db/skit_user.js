import {DB} from '../config';
import _ from 'underscore'


export var addUserToSkit = ({skit_id, user_id}) => {
  return DB.execute(
    `INSERT INTO skit_user_bridge
      (skit_id, user_id)
    VALUES
      ($1, $2)
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
  ` + user_ids.map((user, index) => `($${index * 2 + 1}, $${index * 2 + 2})`).join(","),
    _.flatten(user_ids.map(user_id => [skit_id, user_id]))
  ).then(_ => user_ids)
}

export var removeUserFromSkit = ({skit_id, user_id}) => {
  return DB.execute(
    `DELETE FROM
      skit_user_bridge
    WHERE
      skit_id = $1 AND
      user_id = $2`,
    [skit_id, user_id]
  ).then(_ => user_id)
}
