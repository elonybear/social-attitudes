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
  SkitType
} from '../../queries/types'

import {
  createSkit,
  getSkit
} from '../../db'

let inputFields = {
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'bots': { type: new GraphQLNonNull(GraphQLList(GraphQLString)) }
}

export var CreateSkitMutation = mutationWithClientMutationId({
  name: 'CreateSkit',
  inputFields: inputFields,
  outputFields: {
    skitid: {
      type: GraphQLString,
      resolve: ({skitid}) => skitid
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
