import {
  mutationWithClientMutationId,
  fromGlobalId,
  cursorForObjectInConnection
} from 'graphql-relay';

import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import {
  BotType,
  BotEdge
} from '../../queries/types'

import {
  createBot,
  getBot,
  getBots,
  updateSkitBots
} from '../../db'

let inputFields = {
  'name': { type: new GraphQLNonNull(GraphQLString) },
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'botids': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) }
}

export var CreateAndAddBotMutation = mutationWithClientMutationId({
  name: 'CreateAndAddBot',
  inputFields: inputFields,
  outputFields: {
    newBot: {
      type: BotType,
      resolve: ({botid}) => getBot(botid)
    }
  },
  mutateAndGetPayload: ({name, skitid, botids}) => {
    return createBot(name).then(id => {
      let finalBots = [...botids, id];
      return updateSkitBots(skitid, finalBots).then(_ => {
        return {
          botid: id
        }
      })
    })
  }
})
