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
  UserEdge
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
  'botOnly': {
    type: GraphQLBoolean,
    defaultValue: false
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
      resolve: ({user_id, botOnly, skit_id}) => {
        let userPromise = User.getUser(user_id);
        let usersPromise = User.getUsers(null, botOnly, skit_id);
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
        botOnly: input.botOnly,
        skit_id: input.skit_id
      }
    })
  }
})
