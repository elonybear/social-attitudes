/**
 * @flow
 * @relayHash ca2dd52d7c7e814b3080ad278eaa61f5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveBotInput = {
  skitid: string,
  bots: $ReadOnlyArray<?string>,
  victim: string,
  clientMutationId?: ?string,
};
export type RemoveBotMutationVariables = {|
  input: RemoveBotInput
|};
export type RemoveBotMutationResponse = {|
  +removeBot: ?{|
    +removedBotID: string
  |}
|};
*/


/*
mutation RemoveBotMutation(
  $input: RemoveBotInput!
) {
  removeBot(input: $input) {
    removedBotID
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
    "kind": "LinkedField",
    "alias": null,
    "name": "removeBot",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RemoveBotInput!"
      }
    ],
    "concreteType": "RemoveBotPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "removedBotID",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveBotMutation",
  "id": null,
  "text": "mutation RemoveBotMutation(\n  $input: RemoveBotInput!\n) {\n  removeBot(input: $input) {\n    removedBotID\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveBotMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveBotMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b8ff4477d4fc1d705e32c24fc562a4c2';
module.exports = node;
