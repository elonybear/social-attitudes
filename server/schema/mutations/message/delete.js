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
  GraphQLFloat,
  GraphQLInt
} from 'graphql';

import {
  SkitType,
  SkitEdge,
  BotType,
  BotConnection,
  MessageEdge
} from '../../queries/types'

import {
  Skit,
  SkitBotBridge,
  Bot,
  Message
} from '../../../db'

let deleteMessageInputFields = {
  'message_id': { type: new GraphQLNonNull(GraphQLInt) }
}

export var DeleteMessageMutation = mutationWithClientMutationId({
  name: 'DeleteMessage',
  inputFields: deleteMessageInputFields,
  outputFields: {
    deletedMessageID: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({message_id}) => toGlobalId('Message', message_id)
    }
  },
  mutateAndGetPayload: ({message_id}) => {
    return Message.deleteMessage(message_id).then(message_id => {
      return {
        message_id
      }
    })
  }
})
