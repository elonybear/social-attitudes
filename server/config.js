import MySQLClient from './mysql.js';
import POSTGRESQLClient from './postgres';

module.exports = {
  //DB settings
  DB: POSTGRESQLClient,

  //GraphQL settings
  GRAPHQL_PORT: 4000,
  GRAPHQL_BASE_URL: '/graphql'
}
