/**
 * @flow
 * @relayHash 7b0f3d60d8e314b44521f785f336cba8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveBotInput = {
  skitid: string,
  botid: string,
  clientMutationId?: ?string,
};
export type RemoveBotMutationVariables = {|
  input: RemoveBotInput
|};
export type RemoveBotMutationResponse = {|
  +removeBot: ?{|
    +skit: ?{|
      +bots: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string
          |}
        |}>
      |}
    |}
  |}
|};
*/


/*
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
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveBotInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveBotInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "bots",
  "storageKey": null,
  "args": null,
  "concreteType": "BotConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BotEdge",
      "plural": true,
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
            v2
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveBotMutation",
  "id": null,
  "text": "mutation RemoveBotMutation(\n  $input: RemoveBotInput!\n) {\n  removeBot(input: $input) {\n    skit {\n      bots {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveBotMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeBot",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveBotPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "skit",
            "storageKey": null,
            "args": null,
            "concreteType": "Skit",
            "plural": false,
            "selections": [
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveBotMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeBot",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveBotPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "skit",
            "storageKey": null,
            "args": null,
            "concreteType": "Skit",
            "plural": false,
            "selections": [
              v3,
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '823868cd39dc96e5cdfcd82f4cff817f';
module.exports = node;
