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

let addUsersInputFields = {
  'skit_id': { type: new GraphQLNonNull(GraphQLInt) },
  'user_ids': { type: new GraphQLNonNull(GraphQLList(GraphQLInt)) },
  'botOnly': { type: new GraphQLNonNull(GraphQLBoolean) }
}

export var AddUsersMutation = mutationWithClientMutationId({
  name: 'AddUsers',
  inputFields: addUsersInputFields,
  outputFields: {
    users: {
      type: UserConnection,
      resolve: ({user_ids, botOnly, skit_id}) =>
        User.getUsers(user_ids, botOnly, skit_id)
          .then(users => {
            console.log(users)
            return connectionFromArray(users, connectionArgs)
          })
    }
  },
  mutateAndGetPayload: (input) => {
    let updatePromise = SkitUserBridge.addUsersToSkit(input);
    return updatePromise.then(user_ids => {
      return {
        ...input
      }
    })
  }
})
