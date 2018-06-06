import {
  UserListType,
  UserType
} from './user';

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import {
  getUsers,
  getUser
} from './db';

export var UserListQuery = {
  type: UserListType,
  resolve: (root, args, context, info) => {
    return getUsers();
  }
}

export var UserQuery = {
  type: UserType,
  args: {
    userid: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args, context, info) => {
    const { userid } = args
    return getUser(userid)
  }
}
