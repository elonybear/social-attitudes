/**
 * @flow
 * @relayHash f02d37901354ded64bcfbde9071ef948
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveUserInput = {
  skit_id: number,
  user_id: $ReadOnlyArray<?number>,
  clientMutationId?: ?string,
};
export type RemoveUserMutationVariables = {|
  input: RemoveUserInput
|};
export type RemoveUserMutationResponse = {|
  +removeUser: ?{|
    +removedUserID: ?string
  |}
|};
*/


/*
mutation RemoveUserMutation(
  $input: RemoveUserInput!
) {
  removeUser(input: $input) {
    removedUserID
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RemoveUserInput!"
      }
    ],
    "concreteType": "RemoveUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "removedUserID",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveUserMutation",
  "id": null,
  "text": "mutation RemoveUserMutation(\n  $input: RemoveUserInput!\n) {\n  removeUser(input: $input) {\n    removedUserID\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveUserMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0db728f1d74957cc00fd3043dca46673';
module.exports = node;
