import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation AddUsersMutation(
    $input: AddUsersInput!
  ) {
    addUsers(input: $input) {
      users {
        edges {
          node {
            id,
            user_id,
            first_name,
            last_name
          }
        }
      }
  }
}
`

function sharedUpdater(store, parentID, newNodes) {
  const parentProxy = store.get(parentID);

  const skitUsers = ConnectionHandler.getConnection(
    parentProxy,
    'Skit_users',
  );

  const skitListUsers = ConnectionHandler.getConnection(
    parentProxy,
    'Skit_SkitList_users',
  );
  for (let node of newNodes) {
      const newEdge = ConnectionHandler.createEdge(
        store,
        parentProxy,
        node,
        'UserEdge'
      );
      ConnectionHandler.insertEdgeAfter(skitUsers, newEdge);
      ConnectionHandler.insertEdgeAfter(skitListUsers, newEdge);
  }
}


export function addUsers(source, parentID, callback) {
  const variables = {
    input: {...source, type: 'BOT'},
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response.addUsers.users.edges);
      },
      onError: err => console.error(err),
      updater: (store) => {
        // Get the payload returned from the server
        const payload = store.getRootField('addUsers');

        // Get the edge of the newly created Todo record
        const newUsers =
          payload
            .getLinkedRecord('users')
            .getLinkedRecords('edges')
            .map(edge => edge.getLinkedRecord('node'));

        // Add it to the user's todo list
        sharedUpdater(store, parentID, newUsers);
      },
    },
  );
}
