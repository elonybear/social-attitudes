import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLInt
} from 'graphql';

import {
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
  globalIdField,
  nodeDefinitions,
  toGlobalId
} from 'graphql-relay';

import {User} from './db';

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
