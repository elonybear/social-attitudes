import { GraphQLObjectType } from 'graphql';

import {CreateSkitMutation} from './mutations/skits/create';
import {UpdateSkitMutation, RemoveBotMutation, AddBotsMutation} from './mutations/skits/update';
import {CreateBotMutation} from './mutations/bots/create';
import {CreateAndAddBotMutation} from './mutations/bots/createAndAdd';

import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootMutation',
  fields: {
    createSkit: CreateSkitMutation,
    updateSkit: UpdateSkitMutation,
    addBots: AddBotsMutation,
    removeBot: RemoveBotMutation,
    createBot: CreateBotMutation,
    createAndAddBot: CreateAndAddBotMutation
  }
});
