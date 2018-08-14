import {DB} from '../config';

let usersCreate = `
  CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    bot boolean
  )
`

export var initializeUsers = () => {
  return DB.execute(usersCreate)
}
