/**
 * @flow
 * @relayHash e573dfe7551825de71842333184a22dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAndAddBotInput = {
  name: string,
  skitid: string,
  botids: $ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type CreateAndAddBotMutationVariables = {|
  input: CreateAndAddBotInput
|};
export type CreateAndAddBotMutationResponse = {|
  +createAndAddBot: ?{|
    +newBot: ?{|
      +id: string,
      +name: string,
      +botid: string,
    |}
  |}
|};
*/


/*
mutation CreateAndAddBotMutation(
  $input: CreateAndAddBotInput!
) {
  createAndAddBot(input: $input) {
    newBot {
      id
      name
      botid
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateAndAddBotInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createAndAddBot",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateAndAddBotInput!"
      }
    ],
    "concreteType": "CreateAndAddBotPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newBot",
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "botid",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateAndAddBotMutation",
  "id": null,
  "text": "mutation CreateAndAddBotMutation(\n  $input: CreateAndAddBotInput!\n) {\n  createAndAddBot(input: $input) {\n    newBot {\n      id\n      name\n      botid\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateAndAddBotMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAndAddBotMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0acdc7df5a52af467c52742222c5302a';
module.exports = node;
