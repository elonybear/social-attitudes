import { GraphQLObjectType } from 'graphql';

import usersQuery from './queries/users';
import userQuery from './queries/user';
import greetingsQuery from './queries/greetings';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootQuery',
  fields: {
    users: usersQuery,
    user: userQuery,
    greetings: greetingsQuery
  }
})
