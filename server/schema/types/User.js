import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

import {DB} from '../../config';

import SHA256 from "crypto-js/sha256";

export var UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID,
      resolve: (root, args, context, info) => {
        return SHA256(root.userid + root.first_name + root.last_name);
      }
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
  }
});

export function getUsers() {
  return DB.execute('SELECT * FROM users');
}

export function getUser(userid) {
  return DB.execute('SELECT * FROM users WHERE userid = ?', [userid])
    .then(result => result.rows[0]);
}
