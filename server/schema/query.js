import { GraphQLObjectType } from 'graphql';

import {UserListQuery, UserQuery} from './queries/queries';

import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootQuery',
  fields: {
    users: UserListQuery,
    user: UserQuery
  }
});
