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
  updateSkit,
  getSkit
} from '../../db'

let inputFields = {
  'skitid': { type: new GraphQLNonNull(GraphQLString) },
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'description': { type: new GraphQLNonNull(GraphQLString) }
}

export var UpdateSkitMutation = mutationWithClientMutationId({
  name: 'UpdateSkit',
  inputFields: inputFields,
  outputFields: {
    skit: {
      type: SkitType,
      resolve: ({skitid}) => getSkit(skitid)
    }
  },
  mutateAndGetPayload: (input) => {
    return updateSkit(input).then(id => {
      console.log('Updated: ' + id)
      return {
        skitid: id
      }
    })
  }
})

export var RemoveBotMutation = mutationWithClientMutationId({
  name: 'RemoveBot',
  inputFields: {
    'skitid': { type: new GraphQLNonNull(GraphQLString) },
    'botid': { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    skit: {
      type: SkitType,
      resolve: ({skitid}) => getSkit(skitid)
    }
  },
  mutateAndGetPayload: (input) => {
    return removeBotFromSkit(input).then(id => {
        console.log('Removed bot from ' + id);
        return {
          skitid: id
        }
    });
  }
})
