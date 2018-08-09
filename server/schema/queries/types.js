import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLBoolean
} from 'graphql';

import {
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
  globalIdField,
  nodeDefinitions,
  toGlobalId,
  fromGlobalId
} from 'graphql-relay';

import {Skit, User} from '../../db';

export var {nodeInterface, nodeField} = nodeDefinitions(
  globalId => {
    var {type, id} = fromGlobalId(globalId);
    console.log("NodeDefinitions (globalId), id:", id);
    console.log("NodeDefinitions (globalId), type:", type);
    switch(type) {
      case 'Skit':
        return Skit.getSkit(id);
      default:
        return null;
    }
  },
  obj => {
    console.log("NodeDefinitions (obj), obj:", obj);
    if (obj instanceof User.User) {
      return UserType;
    } else if (obj instanceof User.UserList) {
      return UserListType;
    } else if (obj instanceof Skit.Skit) {
      return SkitType;
    } else {
      return null;
    }
  }
);

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve:(root) => toGlobalId('User', root.user_id)
    },
    user_id: {
      type: GraphQLInt
    },
    first_name: {
      type: GraphQLString
    },
    last_name: {
      type: GraphQLString
    },
    bot: {
      type: GraphQLBoolean
    }
  },
  interfaces: [nodeInterface],
});

export var {connectionType: UserConnection, edgeType: UserEdge} =
  connectionDefinitions({name: 'User', nodeType: UserType});

export const UserListType = new GraphQLObjectType({
  name: 'UserList',
  fields: {
    id: globalIdField('UserList'),
    userList: {
      type: UserConnection,
      description: 'List of users',
      args: connectionArgs,
      resolve: (root, args, context, info) => {
        console.log('getting users')
        return connectionFromArray(root, args)
      }
    },
    count: {
      type: GraphQLInt,
      resolve: (root, args, context, info) => {
        console.log('getting user count')
        return root.length;
      }
    }
  },
  interfaces: [nodeInterface],
});

var MessageType = new GraphQLEnumType({
  name: 'MessageType',
  values: {
    RECEIVE: { value: 'RECEIVE' },
    SEND: { value: 'SEND' }
  }
});

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (root) => {
        return toGlobalId('Message', root.message_id)
      }
    },
    message_id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    text: {
      type: GraphQLNonNull(GraphQLString)
    },
    user_id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    delay: {
      type: GraphQLNonNull(GraphQLFloat)
    },
    type: {
      type: GraphQLNonNull(MessageType)
    },
    position: {
      type: GraphQLNonNull(GraphQLInt)
    }
  },
  interfaces: [nodeInterface],
})

export var {connectionType: MessageConnection, edgeType: MessageEdge} =
  connectionDefinitions({name: 'Message', nodeType: MessageType});

export const SkitType = new GraphQLObjectType({
  name: 'Skit',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (root) => {
        return toGlobalId('Skit', root.skit_id)
      }
    },
    skit_id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    messages: {
      type: MessageConnection,
      args: connectionArgs,
      resolve: (root, args) => {
        return connectionFromArray(root.messages == null ? [] : root.messages, args)
      }
    },
    created: {
      type: GraphQLString
    },
    last_updated: {
      type: GraphQLString
    },
    users: {
      type: UserConnection,
      args: connectionArgs,
      resolve: (root, args) => {
        return connectionFromArray(root.users == null ? [] : root.users, args)
      }
    }
  },
  interfaces: [nodeInterface],
})

export var {connectionType: SkitConnection, edgeType: SkitEdge} =
  connectionDefinitions({name: 'Skit', nodeType: SkitType});

export const SkitListType = new GraphQLObjectType({
  name: 'SkitList',
  fields: {
    id: globalIdField('SkitList'),
    skits: {
      type: SkitConnection,
      args: connectionArgs,
      resolve: (root, args) => connectionFromArray(root, args)
    }
  },
  interfaces: [nodeInterface],
})
