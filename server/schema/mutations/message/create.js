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

let CreateMessageInputFields = {
  'skit_id': { type: new GraphQLNonNull(GraphQLString) },
  'text': { type: new GraphQLNonNull(GraphQLString) },
  'user_id': { type: new GraphQLNonNull(GraphQLString) },
  'delay': { type: new GraphQLNonNull(GraphQLFloat) },
  'type': { type: new GraphQLNonNull(GraphQLString) },
  'position': { type: new GraphQLNonNull(GraphQLInt)}
}

export var CreateMessageMutation = mutationWithClientMutationId({
  name: 'CreateMessage',
  inputFields: CreateMessageInputFields,
  outputFields: {
    newMessageEdge: {
      type: MessageEdge,
      resolve: ({message_id, skit_id, type}) => {
        return Message.getMessages({skit_id, type})
          .then(messages => {
            console.log(messages);
            let node = messages.find(message => message.message_id == message_id)
            return {
              node,
              cursor: cursorForObjectInConnection(messages, node),
            }
          })
      }
    }
  },
  mutateAndGetPayload: (input) => {
    return Message.createMessage(input).then(message_id => {
      return {
        message_id,
        skit_id: input.skit_id,
        type: input.type
      }
    })
  }
})
