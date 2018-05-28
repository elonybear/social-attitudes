import { GraphQLSchema } from 'graphql';

import RootQuery from './roots/query';

var schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
