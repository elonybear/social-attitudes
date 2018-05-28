import {
  GraphQLList
} from 'graphql';

import {
  GreetingType,
  getGreetings
} from '../../types/GreetingType';

export default {
  type: GraphQLList(GreetingType),
  resolve: (root, args, context, info) => {
    return getGreetings();
  }
}
