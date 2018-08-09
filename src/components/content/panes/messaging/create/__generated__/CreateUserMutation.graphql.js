/**
 * @flow
 * @relayHash 02025e09a3b306cf876e3b4acdb52954
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {
  first_name: string,
  last_name: string,
  bot?: ?boolean,
  botOnly?: ?boolean,
  skit_id?: ?number,
  clientMutationId?: ?string,
};
export type CreateUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +newUserEdge: ?{|
      +node: ?{|
        +id: string,
        +user_id: ?number,
        +first_name: ?string,
        +last_name: ?string,
        +bot: ?boolean,
      |}
    |}
  |}
|};
*/


/*
mutation CreateUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    newUserEdge {
      node {
        id
        user_id
        first_name
        last_name
        bot
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateUserInput!"
      }
    ],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newUserEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "UserEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "user_id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "first_name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "last_name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bot",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateUserMutation",
  "id": null,
  "text": "mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    newUserEdge {\n      node {\n        id\n        user_id\n        first_name\n        last_name\n        bot\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateUserMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fec435fed3aad22db21e4d5063a3788';
module.exports = node;
