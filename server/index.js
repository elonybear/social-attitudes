var express = require('express');
import fallback from 'express-history-api-fallback'
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
import schema from './schema.js';
import path from 'path'

import {GRAPHQL_PORT, GRAPHQL_BASE_URL} from './config';

var app = express();

var root = path.join(__dirname, 'dist')

app.use('/', express.static(root))
app.use(fallback('index.html', { root }))


app.use(GRAPHQL_BASE_URL, graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

var port = process.env.PORT || GRAPHQL_PORT;

app.listen(port, () => console.log(`Now browse to localhost:${port}${GRAPHQL_BASE_URL}`));
