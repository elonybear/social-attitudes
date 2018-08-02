import {
  mutationWithClientMutationId,
  fromGlobalId
} from 'graphql-relay';

import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import {
  BotType
} from '../../queries/types'

import {
  createBot,
  getBot
} from '../../db'

let inputFields = {
  'name': { type: new GraphQLNonNull(GraphQLString) }
}

export var CreateBotMutation = mutationWithClientMutationId({
  name: 'CreateBot',
  inputFields: inputFields,
  outputFields: {
    bot: {
      type: BotType,
      resolve: ({botid}) => getBot(botid)
    }
  },
  mutateAndGetPayload: ({name}) => {
    return createBot(name).then(id => {
      console.log('Created: ' + id)
      return {
        botid: id
      }
    })
  }
})
