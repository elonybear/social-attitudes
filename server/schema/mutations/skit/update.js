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

let updateSkitInputFields = {
  'skit_id': { type: new GraphQLNonNull(GraphQLInt) },
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'description': { type: new GraphQLNonNull(GraphQLString) }
}

export var UpdateSkitMutation = mutationWithClientMutationId({
  name: 'UpdateSkit',
  inputFields: updateSkitInputFields,
  outputFields: {
    skit: {
      type: SkitType,
      resolve: ({skit_id}) => Skit.getSkit(skit_id)
    }
  },
  mutateAndGetPayload: (input) => {
    return Skit.updateSkit(input).then(id => {
      console.log('Updated: ' + id)
      return {
        skit_id: id
      }
    })
  }
})
