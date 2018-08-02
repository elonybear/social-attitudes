/**
 * @flow
 * @relayHash 134e88a34425a35ed3ca741f3107bda1
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
    +bot: ?{|
      +id: string,
      +botid: string,
      +name: string,
    |}
  |}
|};
*/


/*
mutation CreateBotMutation(
  $input: CreateBotInput!
) {
  createBot(input: $input) {
    bot {
      id
      botid
      name
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
        "name": "bot",
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateBotMutation",
  "id": null,
  "text": "mutation CreateBotMutation(\n  $input: CreateBotInput!\n) {\n  createBot(input: $input) {\n    bot {\n      id\n      botid\n      name\n    }\n  }\n}\n",
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
(node/*: any*/).hash = 'e94ec04ddc76bc8973e4131fa99ad6fe';
module.exports = node;
