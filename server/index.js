var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
import schema from './schema.js';
import path from 'path'

import {GRAPHQL_PORT, GRAPHQL_BASE_URL} from './config';

var app = express();

app.use('/', express.static(path.join(__dirname, 'dist')))

app.use(GRAPHQL_BASE_URL, graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

var port = process.env.PORT || GRAPHQL_PORT;

app.listen(port, () => console.log(`Now browse to localhost:${port}${GRAPHQL_BASE_URL}`));
