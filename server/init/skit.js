import {DB} from '../config';

let skitsLastUpdatedFunction = `
  CREATE OR REPLACE FUNCTION skits_trigger_set_timestamp()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
  END
  $$ LANGUAGE plpgsql;
`

let skitsCreate = `
  CREATE TABLE IF NOT EXISTS skits (
    skit_id SERIAL PRIMARY KEY,
    title varchar(255),
    description varchar(511),
    created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`

let skitsDropLastUpdatedTrigger = `
  drop trigger if exists skits_set_timestamp on skits;
`

let skitsCreateLastUpdatedTrigger = `
  CREATE TRIGGER skits_set_timestamp
  BEFORE UPDATE ON skits
  FOR EACH ROW
  EXECUTE PROCEDURE skits_trigger_set_timestamp();
`

export var initializeSkits = () => {
  return DB.execute(skitsLastUpdatedFunction)
    .then(_ => DB.execute(skitsCreate))
    .then(_ => DB.execute(skitsDropLastUpdatedTrigger))
    .then(_ => DB.execute(skitsCreateLastUpdatedTrigger))
}
