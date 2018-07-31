import { GraphQLObjectType } from 'graphql';

import {CreateSkitMutation} from './mutations/skits/create';

import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootMutation',
  fields: {
    createSkit: CreateSkitMutation
  }
});
