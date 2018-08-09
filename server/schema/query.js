import { GraphQLObjectType } from 'graphql';

import {
  UserListQuery,
  UserQuery,
  SkitListQuery,
  BotListQuery,
  SkitQuery
} from './queries/queries';
import {nodeField} from './queries/types';

import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootQuery',
  fields: {
    node: nodeField,
    skit: SkitQuery,
    users: UserListQuery,
    user: UserQuery,
    skits: SkitListQuery,
  }
});
