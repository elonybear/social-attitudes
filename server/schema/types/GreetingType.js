import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql';

import {DB} from '../../config';

export var GreetingType = new GraphQLObjectType({
  name: 'Greeting',
  fields: {
    title: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLInt,
    },
    delayafter: {
      type: GraphQLInt,
    },
    delaybefore: {
      type: GraphQLInt
    },
    type: {
      type: GraphQLString
    }
  }
});

export function getGreetings() {
  return DB.execute('SELECT * FROM greetings');
}
