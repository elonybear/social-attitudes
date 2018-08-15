/**
 * @flow
 * @relayHash c7915b2b7aadc04d81dd248ac5b2172c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateSkitInput = {
  skit_id: number,
  title: string,
  description: string,
  clientMutationId?: ?string,
};
export type UpdateSkitMutationVariables = {|
  input: UpdateSkitInput
|};
export type UpdateSkitMutationResponse = {|
  +updateSkit: ?{|
    +skit: ?{|
      +id: string,
      +title: string,
      +description: ?string,
      +last_updated: ?string,
    |}
  |}
|};
export type UpdateSkitMutation = {|
  variables: UpdateSkitMutationVariables,
  response: UpdateSkitMutationResponse,
|};
*/


/*
mutation UpdateSkitMutation(
  $input: UpdateSkitInput!
) {
  updateSkit(input: $input) {
    skit {
      id
      title
      description
      last_updated
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateSkitInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateSkit",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateSkitInput!"
      }
    ],
    "concreteType": "UpdateSkitPayload",
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
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "last_updated",
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
  "name": "UpdateSkitMutation",
  "id": null,
  "text": "mutation UpdateSkitMutation(\n  $input: UpdateSkitInput!\n) {\n  updateSkit(input: $input) {\n    skit {\n      id\n      title\n      description\n      last_updated\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSkitMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSkitMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a542ef22ac9163ebee954572a9ed9bc0';
module.exports = node;
