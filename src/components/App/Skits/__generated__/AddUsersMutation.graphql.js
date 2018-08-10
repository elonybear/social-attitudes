/**
 * @flow
 * @relayHash 8510587e2acde9d1d93008ba9c4b300a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserCategory = "ALL" | "BOT" | "USER" | "%future added value";
export type AddUsersInput = {
  skit_id: number,
  user_ids: $ReadOnlyArray<?number>,
  type: UserCategory,
  clientMutationId?: ?string,
};
export type AddUsersMutationVariables = {|
  input: AddUsersInput
|};
export type AddUsersMutationResponse = {|
  +addUsers: ?{|
    +users: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +user_id: ?number,
          +first_name: ?string,
          +last_name: ?string,
        |}
      |}>
    |}
  |}
|};
*/


/*
mutation AddUsersMutation(
  $input: AddUsersInput!
) {
  addUsers(input: $input) {
    users {
      edges {
        node {
          id
          user_id
          first_name
          last_name
        }
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
    "type": "AddUsersInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addUsers",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddUsersInput!"
      }
    ],
    "concreteType": "AddUsersPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "UserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
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
                  }
                ]
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
  "name": "AddUsersMutation",
  "id": null,
  "text": "mutation AddUsersMutation(\n  $input: AddUsersInput!\n) {\n  addUsers(input: $input) {\n    users {\n      edges {\n        node {\n          id\n          user_id\n          first_name\n          last_name\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddUsersMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddUsersMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c60175cab9e3f06811f6a3bc5a50750c';
module.exports = node;
