import {
  mutationWithClientMutationId,
  fromGlobalId
} from 'graphql-relay';

import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import {
  SkitType,
  SkitEdge
} from '../../queries/types'

import {
  createSkit,
  getSkit
} from '../../db'

let inputFields = {
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'description': { type: new GraphQLNonNull(GraphQLString) },
  'bots': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) }
}

export var CreateSkitMutation = mutationWithClientMutationId({
  name: 'CreateSkit',
  inputFields: inputFields,
  outputFields: {
    skit: {
      type: SkitType,
      resolve: ({skitid}) => getSkit(skitid)
    }
  },
  mutateAndGetPayload: (input) => {
    return createSkit(input).then(id => {
      console.log('Created: ' + id)
      return {
        skitid: id
      }
    })
  }
})
