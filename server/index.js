var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
import schema from './schema/root.js';

import {GRAPHQL_PORT, GRAPHQL_BASE_URL} from './config';

var app = express();
app.use(GRAPHQL_BASE_URL, graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(GRAPHQL_PORT, () => console.log(`Now browse to localhost:${GRAPHQL_PORT}${GRAPHQL_BASE_URL}`));
