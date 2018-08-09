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
  GraphQLList,
  GraphQLInt
} from 'graphql';

import {
  SkitType,
  SkitEdge
} from '../../queries/types'

import {
  Skit
} from '../../../db'

let inputFields = {
  'title': { type: new GraphQLNonNull(GraphQLString) },
  'description': { type: new GraphQLNonNull(GraphQLString) },
  'users': { type: new GraphQLNonNull(GraphQLList(GraphQLInt)) }
}

export var CreateSkitMutation = mutationWithClientMutationId({
  name: 'CreateSkit',
  inputFields: inputFields,
  outputFields: {
    newSkitEdge: {
      type: SkitEdge,
      resolve: ({skit_id}) => {
        let skitPromise = Skit.getSkit(skit_id, true);
        let skitsPromise = Skit.getSkits(true);
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
    return Skit.createSkit(input).then(id => {
      console.log('Created: ' + id)
      return {
        skit_id: id
      }
    })
  }
})
