import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation CreateMessageMutation(
    $input: CreateMessageInput!
  ) {
    createMessage(input: $input) {
      newMessageEdge {
        node {
          id,
          message_id,
          text,
          user_id,
          delay,
          type,
          position
        }
      }
  }
}
`


export function createMessage(source, parentID, callback) {
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
        callback(response.createMessage.newMessageEdge.node.id);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
