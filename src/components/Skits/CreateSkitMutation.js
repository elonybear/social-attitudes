import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation CreateSkitMutation(
    $input: CreateSkitInput!
  ) {
    createSkit(input: $input) {
      newSkitEdge {
        node {
          id,
          title,
          created,
          description,
          last_updated,
          SkitList_users: users(first: 100) @connection(key: "Skit_SkitList_users") {
            edges {
              node {
                user_id
              }
            }
          },
          SkitList_messages: messages(first:100) @connection(key: "Skit_SkitList_messages") {
            edges {
              node {
                id,
              }
            }
          },
          ...Skit_skit
        }
      }
  }
}
`


export function createSkit(source, parentID, callback) {
  const variables = {
    input: source
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

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response.createSkit.newSkitEdge.node.id);
      },
      onError: err => console.error(err),
      // updater: (store) => {
      //   // Get the payload returned from the server
      //   const payload = store.getRootField('createSkit');
      //
      //   // Get the edge of the newly created Todo record
      //   const newNode = payload.getLinkedRecord('skit');
      //
      //   // Add it to the user's skit list
      //   sharedUpdater(store, parentID, newNode);
      // },
      configs
    },
  );
}
