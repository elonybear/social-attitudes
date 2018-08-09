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
  Bot
} from '../../../db'

let inputFields = {
  'name': { type: new GraphQLNonNull(GraphQLString) }
}

export var CreateBotMutation = mutationWithClientMutationId({
  name: 'CreateBot',
  inputFields: inputFields,
  outputFields: {
    newBotEdge: {
      type: BotEdge,
      resolve: ({bot_id}) => {
        let botPromise = Bot.getBot(bot_id);
        let botsPromise = Bot.getBots();
        return Promise.all([botPromise, botsPromise])
          .then(results => {
            let bot = results[0];
            let bots = results[1]
            return {
              node: bot,
              cursor: cursorForObjectInConnection(bots, bot),
            }
          })
      }
    }
  },
  mutateAndGetPayload: ({name}) => {
    return Bot.createBot(name).then(id => {
      console.log('Created: ' + id)
      return {
        bot_id: id
      }
    })
  }
})
