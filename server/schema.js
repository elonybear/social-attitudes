import { GraphQLSchema } from 'graphql';

import RootQuery from './schema/query';
import RootMutation from './schema/mutation'

var schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
