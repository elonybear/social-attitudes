import {
  mutationWithClientMutationId,
  fromGlobalId,
  cursorForObjectInConnection
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
  getSkit,
  getSkits
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
    newSkitEdge: {
      type: SkitEdge,
      resolve: ({skitid}) => {
        let skitPromise = getSkit(skitid);
        let skitsPromise = getSkits();
        return Promise.all([skitPromise, skitsPromise])
          .then(results => {
            let skit = results[0];
            let skits = results[1];
            return {
              node: skit,
              cursor: cursorForObjectInConnection(skits, skit),
            }
          })
      }
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
