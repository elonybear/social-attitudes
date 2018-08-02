import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation RemoveBotMutation(
    $input: RemoveBotInput!
  ) {
    removeBot(input: $input) {
      removedBotID
  }
}
`

// function sharedUpdater(store, parentID, victim) {
//   console.log(parentID);
//   console.log(victim);
//   const parentProxy = store.get(parentID);
//
//   const connSkit= ConnectionHandler.getConnection(
//     parentProxy,
//     'Skit_bots',
//   );
//
//   console.log(connSkit)
//
//   ConnectionHandler.deleteNode(connSkit, victim);
// }

export function removeBot(source, parentID, callback) {
  const variables = {
    input: source,
  };

  console.log(variables)

  const configs = [{
    type: 'RANGE_DELETE',
    parentID: parentID,
    connectionKeys: [{
      key: 'Skit_bots',
    }, { key: 'Skit_SkitList_bots'}],
    pathToConnection: ['skit', 'bots'],
    deletedIDFieldName: 'removedBotID'
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
        callback(response.removeBot.removedBotID);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
