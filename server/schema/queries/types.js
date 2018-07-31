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
  toGlobalId
} from 'graphql-relay';

import {User} from '../db';

export var {nodeInterface, nodeField} = nodeDefinitions(
  globalId => {
    var {type, id} = fromGlobalId(globalId);
    console.log("NodeDefinitions (globalId), id:", id);
    console.log("NodeDefinitions (globalId), type:", type);
    if (type === 'User') {
      return getUser(id);
    } else {
      return null;
    }
  },
  obj => {
    console.log("NodeDefinitions (obj), obj:", obj);
    if (obj instanceof User) {
      return UserType;
    } else if (obj instanceof UserList) {
      return UserListType;
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
    text: {
      type: GraphQLNonNull(GraphQLString)
    },
    authorName: {
      type: GraphQLNonNull(GraphQLString)
    },
    delay: {
      type: GraphQLNonNull(GraphQLFloat)
    }
  }
})

export var {connectionType: MessageConnection} =
  connectionDefinitions({name: 'Message', nodeType: MessageType});

export const SkitType = new GraphQLObjectType({
  name: 'Skit',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (root) => {
        return toGlobalId('Skit', root.skitid)
      }
    },
    title: {
      type: GraphQLNonNull(GraphQLString)
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
      type: new GraphQLNonNull(GraphQLList(GraphQLString)),
      resolve: (root) => {
        if (root.bots == null) return []
        return root.bots;
      }
    }
  }
})

export var {connectionType: SkitConnection} =
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
  }
})

const BotType = new GraphQLObjectType({
  name: 'Bot',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (root) => {
        return root.botid
      }
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});

export var {connectionType: BotConnection} =
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
  }
})
