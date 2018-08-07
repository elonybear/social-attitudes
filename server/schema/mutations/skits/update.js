import {
  mutationWithClientMutationId,
  fromGlobalId,
  toGlobalId,
  connectionArgs,
  connectionFromArray,
  cursorForObjectInConnection
} from 'graphql-relay';

import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLFloat
} from 'graphql';

import {
  SkitType,
  SkitEdge,
  BotType,
  BotConnection,
  MessageEdge
} from '../../queries/types'

import {
  updateSkit,
  getSkit,
  updateSkitBots,
  getBots,
  addMessageToSkit,
  removeMessageFromSkit
} from '../../db'

let updateSkitInputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'description': { type: new GraphQLNonNull(GraphQLString) }
}

export var UpdateSkitMutation = mutationWithClientMutationId({
  name: 'UpdateSkit',
  inputFields: updateSkitInputFields,
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

let removeBotInputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'bots': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
  'victim': { type: new GraphQLNonNull(GraphQLString) }
}

export var RemoveBotMutation = mutationWithClientMutationId({
  name: 'RemoveBot',
  inputFields: removeBotInputFields,
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

let addBotsInputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'botids': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
  'newBots': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) }
}

export var AddBotsMutation = mutationWithClientMutationId({
  name: 'AddBots',
  inputFields: addBotsInputFields,
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

let addMessageInputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'text': { type: new GraphQLNonNull(GraphQLString) },
  'author': { type: new GraphQLNonNull(GraphQLString) },
  'delay': { type: new GraphQLNonNull(GraphQLFloat) }
}

export var AddMessageMutation = mutationWithClientMutationId({
  name: 'AddMessage',
  inputFields: addMessageInputFields,
  outputFields: {
    newMessageEdge: {
      type: MessageEdge,
      resolve: ({messageid, skitid}) => {
        return getSkit(skitid)
          .then(skit => {
            let node = skit.messages.find(message => message.messageid == messageid)
            console.log(node)
            return {
              node,
              cursor: cursorForObjectInConnection(skit.messages, node),
            }
          })
      }
    }
  },
  mutateAndGetPayload: ({skitid, text, author, delay}) => {
    return addMessageToSkit(skitid, {text, author, delay}).then(messageid => {
      return {
        messageid,
        skitid
      }
    })
  }
})

let removeMessageInputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'messageid': { type: new GraphQLNonNull(GraphQLString) }
}

export var RemoveMessageMutation = mutationWithClientMutationId({
  name: 'RemoveMessage',
  inputFields: removeMessageInputFields,
  outputFields: {
    removedMessageID: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({messageid}) => toGlobalId('Message', messageid)
    }
  },
  mutateAndGetPayload: ({skitid, messageid}) => {
    return removeMessageFromSkit(skitid, messageid).then(_ => {
      return {
        messageid
      }
    })
  }
})
