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
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt
} from 'graphql';

import {
  UserType,
  UserEdge,
  UserCategoryType
} from '../../queries/types'

import {
  User
} from '../../../db'

let inputFields = {
  'first_name': { type: new GraphQLNonNull(GraphQLString) },
  'last_name': {type: new GraphQLNonNull(GraphQLString)},
  'bot': {
    type: GraphQLBoolean,
    defaultValue: false
  },
  'type': {
    type: UserCategoryType,
    defaultValue: 'BOT'
  },
  'skit_id': {
    type: GraphQLInt
  }
}

export var CreateUserMutation = mutationWithClientMutationId({
  name: 'CreateUser',
  inputFields: inputFields,
  outputFields: {
    newUserEdge: {
      type: UserEdge,
      resolve: ({user_id, type, skit_id}) => {
        let userPromise = User.getUser(user_id);
        let usersPromise = User.getUsers(null, type, skit_id);
        return Promise.all([userPromise, usersPromise])
          .then(results => {
            let user = results[0];
            let users = results[1]
            return {
              node: user,
              cursor: cursorForObjectInConnection(users, user),
            }
          })
      }
    }
  },
  mutateAndGetPayload: (input) => {
    return User.createUser(input).then(id => {
      console.log('Created user: ' + id)
      return {
        user_id: id,
        type: input.type,
        skit_id: input.skit_id
      }
    })
  }
})
