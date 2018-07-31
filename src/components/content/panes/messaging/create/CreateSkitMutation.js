import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation CreateSkitMutation(
    $input: CreateSkitInput!
  ) {
    createSkit(input: $input) {
      skitid
  }
}
`

export function createSkit(source, parentID, callback) {
  const variables = {
    input: source,
  };

  const configs = [{
    type: 'RANGE_ADD',
    parentID: parentID,
    connectionInfo: [{
      key: 'SkitList_skits',
      rangeBehavior: 'append',
    }],
    edgeName: 'newSkitEdge',
  }];

  console.log(configs)

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
