import {
  mutationWithClientMutationId,
  fromGlobalId,
  toGlobalId,
  connectionArgs,
  connectionFromArray
} from 'graphql-relay';

import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import {
  SkitType,
  SkitEdge,
  BotType,
  BotConnection
} from '../../queries/types'

import {
  updateSkit,
  getSkit,
  updateSkitBots,
  getBots,
} from '../../db'

let inputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'description': { type: new GraphQLNonNull(GraphQLString) }
}

export var UpdateSkitMutation = mutationWithClientMutationId({
  name: 'UpdateSkit',
  inputFields: inputFields,
  outputFields: {
    skit: {
      type: SkitType,
      resolve: ({skitid}) => getSkit(skitid)
    }
  },
  mutateAndGetPayload: (input) => {
    return updateSkit(input).then(id => {
      console.log('Updated: ' + id)
      return {
        skitid: id
      }
    })
  }
})

export var RemoveBotMutation = mutationWithClientMutationId({
  name: 'RemoveBot',
  inputFields: {
    'skitid': { type: new GraphQLNonNull(GraphQLString) },
    'bots': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
    'victim': { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    removedBotID: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({botid}) => toGlobalId('Bot', botid)
    }
  },
  mutateAndGetPayload: ({skitid, bots, victim}) => {
    return updateSkitBots(skitid, bots).then(_ => {
      console.log("Updated!")
        return {
          botid: victim
        }
    });
  }
})

export var AddBotsMutation = mutationWithClientMutationId({
  name: 'AddBots',
  inputFields: {
    'skitid': { type: new GraphQLNonNull(GraphQLString) },
    'botids': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
    'newBots': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) }
  },
  outputFields: {
    bots: {
      type: BotConnection,
      resolve: ({bots}) => connectionFromArray(bots, connectionArgs)
    }
  },
  mutateAndGetPayload: ({skitid, botids, newBots}) => {
    let updatePromise = updateSkitBots(skitid, botids);
    let botsPromise = getBots(newBots);
    return Promise.all([updatePromise, botsPromise]).then(results => {
      return {
        bots: results[1]
      }
    })
  }
})
