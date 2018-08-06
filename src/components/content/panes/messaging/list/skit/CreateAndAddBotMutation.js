import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation CreateAndAddBotMutation(
    $input: CreateAndAddBotInput!
  ) {
    createAndAddBot(input: $input) {
      newBot {
        id,
        name,
        botid
      }
    }
  }
`

function sharedUpdater(store, botListParentID, skitBotListParentID, newNode) {
  const skitBotListParentProxy = store.get(skitBotListParentID);
  const botListParentProxy = store.get(botListParentID)

  const allBotsConnection = ConnectionHandler.getConnection(
    botListParentProxy,
    'SkitList_bots',
  );

  const skitListBotsConnection = ConnectionHandler.getConnection(
    skitBotListParentProxy,
    'Skit_SkitList_bots',
  );

  const skitBotsConnection = ConnectionHandler.getConnection(
    skitBotListParentProxy,
    'Skit_bots',
  );

  const newEdgeAll = ConnectionHandler.createEdge(
    store,
    allBotsConnection,
    newNode,
    'BotEdge'
  );

  const newEdgeSkitList = ConnectionHandler.createEdge(
    store,
    skitListBotsConnection,
    newNode,
    'BotEdge'
  );

  const newEdgeSkit = ConnectionHandler.createEdge(
    store,
    skitBotsConnection,
    newNode,
    'BotEdge'
  );

  ConnectionHandler.insertEdgeAfter(allBotsConnection, newEdgeAll);
  ConnectionHandler.insertEdgeAfter(skitListBotsConnection, newEdgeSkitList);
  ConnectionHandler.insertEdgeAfter(skitBotsConnection, newEdgeSkit);

}


export function createAndAddBot(source, botListParentID, skitBotListParentID, callback) {
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
        callback(response.createAndAddBot.newBot.botid);
      },
      onError: err => console.error(err),
      updater: (store) => {
        // Get the payload returned from the server
        const payload = store.getRootField('createAndAddBot');

        // Get the edge of the newly created Todo record
        const newBot =
          payload
            .getLinkedRecord('newBot')

        // Add it to the user's todo list
        sharedUpdater(store, botListParentID, skitBotListParentID, newBot);
      },
    },
  );
}
