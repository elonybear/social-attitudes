import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import {
  UserType,
  getUser
} from '../../types/User';

export default {
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
