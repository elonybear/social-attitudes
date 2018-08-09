import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation RemoveUserMutation(
    $input: RemoveUserInput!
  ) {
    removeUser(input: $input) {
      removedUserID
  }
}
`

export function removeUser(source, parentID, callback) {
  const variables = {
    input: source,
  };

  console.log(variables)

  const configs = [{
    type: 'RANGE_DELETE',
    parentID: parentID,
    connectionKeys: [{
      key: 'Skit_users',
    }, { key: 'Skit_SkitList_users'}],
    pathToConnection: ['skit', 'users'],
    deletedIDFieldName: 'removedUserID'
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
        callback(response.removeUser.removedUserID);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
