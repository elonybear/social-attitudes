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

export class Skit {
  constructor(json) {
    if (json == null) return;
    for (let field in json) {
      this[field] = json[field];
    }
  }
}

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

    return skits.map(skit => {
      if (skit.messages == null) {
        skit.messages = [];
      }

      if (skit.bots == null) {
        skit.bots = [];
      }

      return {
        ...skit,
        bots: skit.bots.map(botid => bots.find(bot => bot.botid == botid)),
        messages: skit.messages.map(message => JSON.parse(message.toString('utf8')))
      }
    })
  })
}

export function getSkit(skitid) {
  console.log('Getting: ' + skitid)
  let botsPromise = DB.execute('SELECT * FROM bots');
  let skitPromise = DB.execute('SELECT * FROM skits WHERE skitid = ?', [skitid]);
  return Promise.all([skitPromise, botsPromise]).then(results => {
    let skit = results[0].rows[0];
    let bots = results[1].rows;
    if (skit.messages == null) {
      skit.messages = [];
    }

    if (skit.bots == null) {
      skit.bots = [];
    }

    return new Skit({
      ...skit,
      bots: skit.bots.map(botid => bots.find(bot => bot.botid == botid)),
      messages: skit.messages.map(message => JSON.parse(message.toString('utf8')))
    })
  })
}

export function createSkit({title, bots, description}) {
  let id = uuid();
  let botsString = `[${bots.map(bot => `'${bot}'`).join(",")}]`
  console.log(botsString)
  return DB.execute(`INSERT INTO skits (skitid, bots, created, description, last_updated, messages, title) VALUES (?, ${botsString}, dateof(now()), ?, dateof(now()), [], ?)`, [id, description, title]).then(_ => {
    console.log(id)
    return id;
  }).catch(e => console.log(e))
}

export function updateSkit({skitid, title, description}) {
  console.log('Updating ' + skitid)
  return DB.execute(`UPDATE skits SET title = ?, description = ?, last_updated = dateof(now()) WHERE skitid = ? IF EXISTS`, [title, description, skitid]).then(skit => {
    return skitid;
  })
}

export function getBots(botids) {
  if (botids == null)
    return DB.execute('SELECT * FROM bots').then(results => results.rows);

  return DB.execute(`SELECT * FROM bots WHERE botid in (${botids.join(",")})`).then(results => results.rows)
}

export function getBot(botid) {
  return DB.execute('SELECT * FROM bots WHERE botid = ?', [botid]).then(bot => bot.rows[0])
}

export function updateSkitBots(skitid, bots) {
  let botsString = `[${bots.map(bot => `'${bot}'`).join(",")}]`
  return DB.execute(`UPDATE skits SET bots = ${botsString} where skitid = ? IF EXISTS`, [skitid]);
}

export function addMessageToSkit(skitid, message) {
  return getSkit(skitid).then(skit => {
    let messageid = uuid();
    let messages = [...skit.messages, {...message, messageid}].map(JSON.stringify)
    return updateSkitMessages(skitid, messages)
      .then(_ => messageid)
  })
}

export function removeMessageFromSkit(skitid, messageid) {
  return getSkit(skitid).then(skit => {
    let index = skit.messages.findIndex(message => message.messageid === messageid);
    skit.messages.splice(index, 1);
    let messages = skit.messages.map(JSON.stringify);
    return updateSkitMessages(skitid, messages).then(_ => messageid);
  })
}

export function updateSkitMessages(skitid, messages) {
  return DB.execute(`UPDATE skits SET messages = ? WHERE skitid = ?`, [messages, skitid]);
}

export function createBot(name) {
  let id = uuid();

  return DB.execute('INSERT INTO bots (botid, name) VALUES (?, ?)', [id, name]).then(_ => id)
}
