import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation DeleteMessageMutation(
    $input: DeleteMessageInput!
  ) {
    deleteMessage(input: $input) {
      deletedMessageID
  }
}
`

export function deleteMessage(source, parentID, callback) {
  const variables = {
    input: source,
  };

  console.log(variables)

  const configs = [{
    type: 'RANGE_DELETE',
    parentID: parentID,
    connectionKeys: [{
      key: 'Skit_messages',
    }, { key: 'Skit_SkitList_messages'}],
    pathToConnection: ['skit', 'messages'],
    deletedIDFieldName: 'deletedMessageID'
  }];

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(errors)
        console.log('Response received from server.')
        console.log(response);
        callback(response.deleteMessage.deletedMessageID);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
