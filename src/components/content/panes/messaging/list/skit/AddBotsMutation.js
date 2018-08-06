import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation AddBotsMutation(
    $input: AddBotsInput!
  ) {
    addBots(input: $input) {
      bots {
        edges {
          node {
            id,
            botid,
            name
          }
        }
      }
  }
}
`

function sharedUpdater(store, parentID, newNodes) {
  const parentProxy = store.get(parentID);

  const skitBots = ConnectionHandler.getConnection(
    parentProxy,
    'Skit_bots',
  );

  const skitListBots = ConnectionHandler.getConnection(
    parentProxy,
    'Skit_SkitList_bots',
  );
  for (let node of newNodes) {
      const newEdge = ConnectionHandler.createEdge(
        store,
        parentProxy,
        node,
        'BotEdge'
      );
      ConnectionHandler.insertEdgeAfter(skitBots, newEdge);
      ConnectionHandler.insertEdgeAfter(skitListBots, newEdge);
  }
}


export function addBots(source, parentID, callback) {
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
        callback(response.addBots.bots.edges);
      },
      onError: err => console.error(err),
      updater: (store) => {
        // Get the payload returned from the server
        const payload = store.getRootField('addBots');

        // Get the edge of the newly created Todo record
        const newBots =
          payload
            .getLinkedRecord('bots')
            .getLinkedRecords('edges')
            .map(edge => edge.getLinkedRecord('node'));

        // Add it to the user's todo list
        sharedUpdater(store, parentID, newBots);
      },
    },
  );
}
