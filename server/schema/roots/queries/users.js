import {
  GraphQLList
} from 'graphql'

import {
  UserType,
  getUsers
} from '../../types/User';

export default {
  type: GraphQLList(UserType),
  resolve: (root, args, context, info) => {
    return getUsers();
  }
}
