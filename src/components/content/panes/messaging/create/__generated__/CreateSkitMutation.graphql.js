/**
 * @flow
 * @relayHash 77c06d7d781cfe6e79d9556d5ed60fe5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSkitInput = {
  title: string,
  bots: $ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type CreateSkitMutationVariables = {|
  input: CreateSkitInput
|};
export type CreateSkitMutationResponse = {|
  +createSkit: ?{|
    +skitid: ?string
  |}
|};
*/


/*
mutation CreateSkitMutation(
  $input: CreateSkitInput!
) {
  createSkit(input: $input) {
    skitid
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSkitInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createSkit",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateSkitInput!"
      }
    ],
    "concreteType": "CreateSkitPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "skitid",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateSkitMutation",
  "id": null,
  "text": "mutation CreateSkitMutation(\n  $input: CreateSkitInput!\n) {\n  createSkit(input: $input) {\n    skitid\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSkitMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSkitMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f2ade57ce9f2df53ef0be5ac4a07f71c';
module.exports = node;
