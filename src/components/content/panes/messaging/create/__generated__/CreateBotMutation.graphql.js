/**
 * @flow
 * @relayHash 1e992a6cf15bafcfbf976f39b90d975c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateBotInput = {
  name: string,
  clientMutationId?: ?string,
};
export type CreateBotMutationVariables = {|
  input: CreateBotInput
|};
export type CreateBotMutationResponse = {|
  +createBot: ?{|
    +newBotEdge: ?{|
      +node: ?{|
        +id: string,
        +botid: string,
        +name: string,
      |}
    |}
  |}
|};
*/


/*
mutation CreateBotMutation(
  $input: CreateBotInput!
) {
  createBot(input: $input) {
    newBotEdge {
      node {
        id
        botid
        name
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
    "type": "CreateBotInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createBot",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateBotInput!"
      }
    ],
    "concreteType": "CreateBotPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newBotEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "BotEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Bot",
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
                "name": "botid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
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
  "name": "CreateBotMutation",
  "id": null,
  "text": "mutation CreateBotMutation(\n  $input: CreateBotInput!\n) {\n  createBot(input: $input) {\n    newBotEdge {\n      node {\n        id\n        botid\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateBotMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateBotMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5c9377defc0be26df43551e43c8b17c';
module.exports = node;
