import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation CreateBotMutation(
    $input: CreateBotInput!
  ) {
    createBot(input: $input) {
      newBotEdge {
        node {
          id,
          botid,
          name
        }
      }
  }
}
`


export function createBot(source, parentID, callback) {
  const variables = {
    input: source,
  };

  const configs = [{
    type: 'RANGE_ADD',
    parentID: parentID,
    connectionInfo: [{
      key: 'CreateSkitForm_bots',
      rangeBehavior: 'append',
    }, {
      key: 'SkitList_bots',
      rangeBehavior: 'append'
    }],
    edgeName: 'newBotEdge',
  }];

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response.createBot.newBotEdge.node.botid);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
