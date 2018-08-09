import MySQLClient from './mysql.js';

module.exports = {
  //DB settings
  DB: MySQLClient,

  //GraphQL settings
  GRAPHQL_PORT: 4000,
  GRAPHQL_BASE_URL: '/graphql'
}
