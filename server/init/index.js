import {initializeSkits} from './skit';
import {initializeMessages} from './message';
import {initializeUsers} from './user';
import {initializeSkitUserBridge} from './skit_user';
import {DB} from '../config'

initializeSkits()
  .then(_ => initializeUsers())
  .then(_ => initializeMessages())
  .then(_ => initializeSkitUserBridge())
.then(_ => {
  console.log("It worked???")
  DB.close()
})
  .catch(e => console.log(e));
