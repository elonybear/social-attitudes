import {DB} from '../config';

let skitUserBridgeCreate = `
  CREATE TABLE IF NOT EXISTS skit_user_bridge (
    skit_id int,
    user_id int,
    FOREIGN KEY (skit_id) REFERENCES skits(skit_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  )
`

export var initializeSkitUserBridge = () => {
  return DB.execute(skitUserBridgeCreate)
}
