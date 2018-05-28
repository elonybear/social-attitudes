import CassandraClient from './db/cql.js';
import MySQLClient from './db/mysql.js';

module.exports = {
  //DB settings
  DB: CassandraClient,

  //GraphQL settings
  GRAPHQL_PORT: 4000,
  GRAPHQL_BASE_URL: '/graphql'
}
