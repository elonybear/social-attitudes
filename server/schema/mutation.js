import { GraphQLObjectType } from 'graphql';

import {CreateSkitMutation} from './mutations/skit/create';
import {UpdateSkitMutation} from './mutations/skit/update';
import {CreateMessageMutation} from './mutations/message/create';
import {DeleteMessageMutation} from './mutations/message/delete'
import {CreateUserMutation} from './mutations/user/create';
import {AddUsersMutation} from './mutations/skit_user/create';
import {RemoveUserMutation} from './mutations/skit_user/delete';

import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'SocialAttitudesRootMutation',
  fields: {
    createSkit: CreateSkitMutation,
    updateSkit: UpdateSkitMutation,
    createMessage: CreateMessageMutation,
    deleteMessage: DeleteMessageMutation,
    createUser: CreateUserMutation,
    addUsers: AddUsersMutation,
    removeUser: RemoveUserMutation
  }
});
