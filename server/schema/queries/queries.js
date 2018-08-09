import {
  UserListType,
  UserType,
  SkitListType,
  SkitType
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
    botOnly: {
      type: GraphQLBoolean,
      defaultValue: false
    },
    skit_id: {
      type: GraphQLInt
    }
  },
  resolve: (root, {user_ids, botOnly, skit_id}, context, info) => {
    return User.getUsers(user_ids, botOnly, skit_id);
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
    botOnly: {
      type: GraphQLBoolean,
      defaultValue: false
    }
  },
  resolve: (_, {skit_id, botOnly}) => {
    return Skit.getSkit(skit_id, botOnly)
  }
}

export var SkitListQuery = {
  type: SkitListType,
  args: {
    botOnly: {
      type: GraphQLBoolean,
      defaultValue: false
    }
  },
  resolve: (_, {botOnly}) => {
    return Skit.getSkits(botOnly)
  }
}
