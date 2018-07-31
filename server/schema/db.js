import {DB} from '../config';
import SHA256 from "crypto-js/sha256";
import uuid from 'uuid4';

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

export function getSkits() {
  let skitsPromise = DB.execute('SELECT * FROM skits');
  let botsPromise = DB.execute('SELECT * FROM bots');

  return Promise.all([skitsPromise, botsPromise]).then(results => {
    let skits = results[0].rows;
    let bots = results[1].rows;
    console.log(bots);

    return skits.map(skit => {
      if (skit.messages == null) {
        return skit;
      }
      return {
        ...skit,
        messages: skit.messages.map(message => JSON.parse(message.toString('utf8'))).map(message => ({...message, authorName: bots.find(bot => bot.botid == message.author).name}))
      }
    })
  })
}

export function getSkit(skitid) {
  console.log('Getting: ' + skitid)
  return DB.execute('SELECT * FROM skits WHERE skitid = ?', [skitid])
    .then(skit => skit.rows[0])
}

export function createSkit({title, bots}) {
  let id = uuid();
  console.log(title)
  console.log(bots)
  return DB.execute("INSERT INTO skits (skitid, bots, created, last_updated, messages, title) VALUES (?, [" + bots.map(bot => `'${bot}'`).join(",") + "], dateof(now()), dateof(now()), [], ?)", [id, title]).then(_ => {
    console.log(id)
    return id;
  }).catch(e => console.log(e))
}

export function getBots() {
  return DB.execute('SELECT * FROM bots').then(results => results.rows)
}
