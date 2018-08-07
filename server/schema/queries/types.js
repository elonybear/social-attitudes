import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat
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

import {User, UserList, Skit, getSkit} from '../db';

export var {nodeInterface, nodeField} = nodeDefinitions(
  globalId => {
    var {type, id} = fromGlobalId(globalId);
    console.log("NodeDefinitions (globalId), id:", id);
    console.log("NodeDefinitions (globalId), type:", type);
    switch(type) {
      case 'Skit':
        return getSkit(id);
      default:
        return null;
    }
  },
  obj => {
    console.log("NodeDefinitions (obj), obj:", obj);
    if (obj instanceof User) {
      return UserType;
    } else if (obj instanceof UserList) {
      return UserListType;
    } else if (obj instanceof Skit) {
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
      resolve:(root) => toGlobalId('User', root.userid)
    },
    userid: {
      type: GraphQLString
    },
    first_name: {
      type: GraphQLString
    },
    last_name: {
      type: GraphQLString
    }
  },
  interfaces: [nodeInterface],
});

export var {connectionType: UserConnection} =
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
        return connectionFromArray(root.rows.map(user => new User(user)), args)
      }
    },
    count: {
      type: GraphQLInt,
      resolve: (root, args, context, info) => {
        console.log('getting user count')
        return root.rows.length;
      }
    }
  },
  interfaces: [nodeInterface],
});

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (root) => {
        return toGlobalId('Message', root.messageid)
      }
    },
    messageid: {
      type: GraphQLNonNull(GraphQLString)
    },
    text: {
      type: GraphQLNonNull(GraphQLString)
    },
    author: {
      type: GraphQLNonNull(GraphQLString)
    },
    delay: {
      type: GraphQLNonNull(GraphQLFloat)
    }
  },
  interfaces: [nodeInterface],
})

export var {connectionType: MessageConnection, edgeType: MessageEdge} =
  connectionDefinitions({name: 'Message', nodeType: MessageType});

  export const BotType = new GraphQLObjectType({
    name: 'Bot',
    fields: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        resolve: (root) => {
          return toGlobalId('Bot', root.botid)
        }
      },
      botid: {
        type: GraphQLNonNull(GraphQLString)
      },
      name: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    interfaces: [nodeInterface],
  });

  export var {connectionType: BotConnection, edgeType: BotEdge} =
    connectionDefinitions({name: 'Bot', nodeType: BotType})

  export const BotListType = new GraphQLObjectType({
    name: 'BotList',
    fields: {
      id: globalIdField('BotList'),
      bots: {
        type: BotConnection,
        args: connectionArgs,
        resolve: (root, args) => connectionFromArray(root, args)
      }
    },
    interfaces: [nodeInterface],
  })

export const SkitType = new GraphQLObjectType({
  name: 'Skit',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (root) => {
        return toGlobalId('Skit', root.skitid)
      }
    },
    skitid: {
      type: GraphQLNonNull(GraphQLString)
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
    bots: {
      type: BotConnection,
      args: connectionArgs,
      resolve: (root, args) => {
        return connectionFromArray(root.bots == null ? [] : root.bots, args)
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
