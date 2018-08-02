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
      skit {
        id,
        title,
        bots {
          edges {
            node {
              id
              botid,
              name
            }
          }
        },
        description,
        messages {
          edges {
            node {
              id,
              text,
              author
            }
          }
        },
        last_updated,
        created
      }
  }
}
`

function sharedUpdater(store, parentID, newNode){
  console.log(newNode);
  const parentProxy = store.get(parentID);
  
  const conn = ConnectionHandler.getConnection(
    parentProxy,
    'SkitList_skits',
  );

  const newEdge = ConnectionHandler.createEdge(
    store,
    conn,
    newNode,
    'SkitEdge'
  );

  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}


export function createSkit(source, parentID, callback) {
  const variables = {
    input: source,
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response.createSkit.skit.id);
      },
      onError: err => console.error(err),
      updater: (store) => {
        // Get the payload returned from the server
        const payload = store.getRootField('createSkit');

        // Get the edge of the newly created Todo record
        const newNode = payload.getLinkedRecord('skit');

        // Add it to the user's skit list
        sharedUpdater(store, parentID, newNode);
      },
    },
  );
}
