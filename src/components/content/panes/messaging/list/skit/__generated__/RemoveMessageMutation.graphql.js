/**
 * @flow
 * @relayHash 060a3e889b8fd38ef44f1695e89e5171
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveMessageInput = {
  skitid: string,
  messageid: string,
  clientMutationId?: ?string,
};
export type RemoveMessageMutationVariables = {|
  input: RemoveMessageInput
|};
export type RemoveMessageMutationResponse = {|
  +removeMessage: ?{|
    +removedMessageID: string
  |}
|};
*/


/*
mutation RemoveMessageMutation(
  $input: RemoveMessageInput!
) {
  removeMessage(input: $input) {
    removedMessageID
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RemoveMessageInput!"
      }
    ],
    "concreteType": "RemoveMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "removedMessageID",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveMessageMutation",
  "id": null,
  "text": "mutation RemoveMessageMutation(\n  $input: RemoveMessageInput!\n) {\n  removeMessage(input: $input) {\n    removedMessageID\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveMessageMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveMessageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5611725492136cc6b96534f053254a55';
module.exports = node;
