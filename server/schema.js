import { GraphQLSchema } from 'graphql';

import RootQuery from './schema/query';

var schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
