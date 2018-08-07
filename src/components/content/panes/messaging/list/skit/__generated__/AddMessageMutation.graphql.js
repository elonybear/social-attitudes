/**
 * @flow
 * @relayHash 4faf53434037cece10769b4f8ce5a8a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddMessageInput = {
  skitid: string,
  text: string,
  author: string,
  delay: number,
  clientMutationId?: ?string,
};
export type AddMessageMutationVariables = {|
  input: AddMessageInput
|};
export type AddMessageMutationResponse = {|
  +addMessage: ?{|
    +newMessageEdge: ?{|
      +node: ?{|
        +id: string,
        +messageid: string,
        +text: string,
        +author: string,
        +delay: number,
      |}
    |}
  |}
|};
*/


/*
mutation AddMessageMutation(
  $input: AddMessageInput!
) {
  addMessage(input: $input) {
    newMessageEdge {
      node {
        id
        messageid
        text
        author
        delay
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
    "type": "AddMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddMessageInput!"
      }
    ],
    "concreteType": "AddMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newMessageEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "MessageEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Message",
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
                "name": "messageid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "text",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "author",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "delay",
                "args": null,
                "storageKey": null
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
  "name": "AddMessageMutation",
  "id": null,
  "text": "mutation AddMessageMutation(\n  $input: AddMessageInput!\n) {\n  addMessage(input: $input) {\n    newMessageEdge {\n      node {\n        id\n        messageid\n        text\n        author\n        delay\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddMessageMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddMessageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '42889f9e8b09aa47b625abe6757cbf58';
module.exports = node;
