/**
 * @flow
 * @relayHash 26c2c33990a23e18ec803b3b7e99941d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteMessageInput = {
  message_id: number,
  clientMutationId?: ?string,
};
export type DeleteMessageMutationVariables = {|
  input: DeleteMessageInput
|};
export type DeleteMessageMutationResponse = {|
  +deleteMessage: ?{|
    +deletedMessageID: string
  |}
|};
export type DeleteMessageMutation = {|
  variables: DeleteMessageMutationVariables,
  response: DeleteMessageMutationResponse,
|};
*/


/*
mutation DeleteMessageMutation(
  $input: DeleteMessageInput!
) {
  deleteMessage(input: $input) {
    deletedMessageID
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteMessageInput!"
      }
    ],
    "concreteType": "DeleteMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedMessageID",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteMessageMutation",
  "id": null,
  "text": "mutation DeleteMessageMutation(\n  $input: DeleteMessageInput!\n) {\n  deleteMessage(input: $input) {\n    deletedMessageID\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteMessageMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteMessageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b59e570102a08554db5f6d13f151c4a9';
module.exports = node;
