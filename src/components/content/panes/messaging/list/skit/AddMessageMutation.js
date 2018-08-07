import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation AddMessageMutation(
    $input: AddMessageInput!
  ) {
    addMessage(input: $input) {
      newMessageEdge {
        node {
          id,
          messageid,
          text,
          author,
          delay
        }
      }
  }
}
`


export function addMessage(source, parentID, callback) {
  const variables = {
    input: source,
  };
  
  const configs = [{
    type: 'RANGE_ADD',
    parentID: parentID,
    connectionInfo: [{
      key: 'Skit_messages',
      rangeBehavior: 'append',
    }, {
      key: 'Skit_SkitList_messages',
      rangeBehavior: 'append',
    }],
    edgeName: 'newMessageEdge',
  }];

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response.addMessage.newMessageEdge.node.id);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
