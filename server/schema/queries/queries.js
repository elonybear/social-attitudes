import {
  UserListType,
  UserType,
  SkitListType,
  BotListType
} from './types';

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql';

import {
  getUsers,
  getUser,
  getSkits,
  getBots
} from '../db';

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

export var SkitListQuery = {
  type: SkitListType,
  resolve: () => {
    return getSkits()
  }
}

export var BotListQuery = {
  type: BotListType,
  resolve: () => {
    return getBots()
  }
}
