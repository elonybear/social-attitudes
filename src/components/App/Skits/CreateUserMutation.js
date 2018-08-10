import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../../../environment.js'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation CreateUserMutation(
    $input: CreateUserInput!
  ) {
    createUser(input: $input) {
      newUserEdge {
        node {
          id,
          user_id,
          first_name,
          last_name,
          bot
        }
      }
  }
}
`


export function createUser(source, parentID, callback) {
  const variables = {
    input: {
      ...source,
      botOnly: true,
      bot: true
    },
  };

  const configs = [{
    type: 'RANGE_ADD',
    parentID: parentID,
    connectionInfo: [{
      key: 'CreateSkitForm_userList',
      rangeBehavior: 'append',
    }, {
      key: 'SkitList_userList',
      rangeBehavior: 'append'
    }],
    edgeName: 'newUserEdge',
  }];

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
        console.log(response);
        callback(response.createUser.newUserEdge.node.user_id);
      },
      onError: err => console.error(err),
      configs
    },
  );
}
