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
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

import {
  SkitType,
  SkitEdge,
  BotType,
  BotConnection,
  MessageEdge,
  UserConnection
} from '../../queries/types'

import {
  SkitUserBridge,
  Bot,
  User
} from '../../../db'

let removeUserInputFields = {
  'skit_id': { type: new GraphQLNonNull(GraphQLInt) },
  'user_id': { type: new GraphQLNonNull(GraphQLList(GraphQLInt)) }
}

export var RemoveUserMutation = mutationWithClientMutationId({
  name: 'RemoveUser',
  inputFields: removeUserInputFields,
  outputFields: {
    removedUserID: {
      type: GraphQLID,
      resolve: ({user_id}) => toGlobalId('User', user_id)

    }
  },
  mutateAndGetPayload: (input) => {
    let updatePromise = SkitUserBridge.removeUserFromSkit(input);
    return updatePromise.then(user_id => {
      return {
        user_id
      }
    })
  }
})
