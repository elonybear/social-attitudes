import {DB} from '../../config';
import SHA256 from "crypto-js/sha256";

export class User {
  constructor(json) {
    if (json == null) return;
    for(let field in json) {
      this[field] = json[field];
    }
  }
}

export class UserList {}

export function getUsers() {
  return DB.execute('SELECT * FROM users');
}

export function getUserList() {
  return new UserList();
}

export function getUser(userid) {
  return DB.execute('SELECT * FROM users WHERE userid = ?', [userid])
    .then(result => new User(result.rows[0]));
}
