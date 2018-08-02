import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation RemoveBotMutation(
    $input: RemoveBotInput!
  ) {
    removeBot(input: $input) {
      skit {
        bots {
          edges {
            node {
              id
            }
          }
        }
      }
  }
}
`

function sharedUpdater(store, parentID, newNode) {
  const parentProxy = store.get(parentID);

  const connSkit= ConnectionHandler.getConnection(
    parentProxy,
    'Skit_bots',
  );

  ConnectionHandler.deleteNode(connSkit, newEdge);

  const connList = ConnectionHandler.getConnection(
    parentProxy,
    'Skit_SkitList_bots',
  );

  ConnectionHandler.insertEdgeAfter(connList, newEdge);
}


export function createBot(source, parentID, callback) {
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
        callback(response.createBot.bot.id);
      },
      onError: err => console.error(err),
      updater: (store) => {
        // Get the payload returned from the server
        const payload = store.getRootField('createBot');

        // Get the edge of the newly created Todo record
        const newNode = payload.getLinkedRecord('bot');

        // Add it to the user's todo list
        sharedUpdater(store, parentID, newNode);
      },
    },
  );
}