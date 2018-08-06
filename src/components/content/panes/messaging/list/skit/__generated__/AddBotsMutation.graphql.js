/**
 * @flow
 * @relayHash 48b265330c39db3d1c53790950384a98
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBotsInput = {
  skitid: string,
  botids: $ReadOnlyArray<?string>,
  newBots: $ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type AddBotsMutationVariables = {|
  input: AddBotsInput
|};
export type AddBotsMutationResponse = {|
  +addBots: ?{|
    +bots: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +botid: string,
          +name: string,
        |}
      |}>
    |}
  |}
|};
*/


/*
mutation AddBotsMutation(
  $input: AddBotsInput!
) {
  addBots(input: $input) {
    bots {
      edges {
        node {
          id
          botid
          name
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
    "type": "AddBotsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addBots",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddBotsInput!"
      }
    ],
    "concreteType": "AddBotsPayload",
    "plural": false,
    "selections": [
      {
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
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddBotsMutation",
  "id": null,
  "text": "mutation AddBotsMutation(\n  $input: AddBotsInput!\n) {\n  addBots(input: $input) {\n    bots {\n      edges {\n        node {\n          id\n          botid\n          name\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddBotsMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBotsMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fef0d60ad3a4e91baeee5877cc50a60d';
module.exports = node;
