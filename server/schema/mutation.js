import { GraphQLObjectType } from 'graphql';

import {CreateSkitMutation} from './mutations/skits/create';
import {UpdateSkitMutation, RemoveBotMutation} from './mutations/skits/update';
import {CreateBotMutation} from './mutations/bots/create';

import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootMutation',
  fields: {
    createSkit: CreateSkitMutation,
    updateSkit: UpdateSkitMutation,
    removeBot: RemoveBotMutation,
    createBot: CreateBotMutation
  }
});
