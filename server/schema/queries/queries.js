import {
  UserListType,
  UserType,
  SkitListType,
  SkitType,
  UserCategoryType
} from './types';

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

import {
  Skit,
  Bot,
  User
} from '../../db'


export var UserListQuery = {
  type: UserListType,
  args: {
    user_ids: {
      type: GraphQLList(GraphQLInt)
    },
    type: {
      type: UserCategoryType,
      defaultValue: 'ALL'
    },
    skit_id: {
      type: GraphQLInt
    }
  },
  resolve: (root, {user_ids, type, skit_id}, context, info) => {
    return User.getUsers(user_ids, type, skit_id);
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
    return User.getUser(userid)
  }
}

export var SkitQuery = {
  type: SkitType,
  args: {
    skit_id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    type: {
      type: UserCategoryType,
      defaultValue: 'ALL'
    }
  },
  resolve: (_, {skit_id, type}) => {
    return Skit.getSkit(skit_id, type)
  }
}

export var SkitListQuery = {
  type: SkitListType,
  args: {
    type: {
      type: UserCategoryType,
      defaultValue: 'ALL'
    }
  },
  resolve: (_, {type}) => {
    return Skit.getSkits(type)
  }
}
