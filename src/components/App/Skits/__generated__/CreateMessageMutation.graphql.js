/**
 * @flow
 * @relayHash d375baf482978b3cf5e9ababee368dae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MessageType = "RECEIVE" | "SEND" | "%future added value";
export type CreateMessageInput = {
  skit_id: string,
  text: string,
  user_id: string,
  delay: number,
  type: string,
  position: number,
  clientMutationId?: ?string,
};
export type CreateMessageMutationVariables = {|
  input: CreateMessageInput
|};
export type CreateMessageMutationResponse = {|
  +createMessage: ?{|
    +newMessageEdge: ?{|
      +node: ?{|
        +id: string,
        +message_id: number,
        +text: string,
        +user_id: number,
        +delay: number,
        +type: MessageType,
        +position: number,
      |}
    |}
  |}
|};
export type CreateMessageMutation = {|
  variables: CreateMessageMutationVariables,
  response: CreateMessageMutationResponse,
|};
*/


/*
mutation CreateMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    newMessageEdge {
      node {
        id
        message_id
        text
        user_id
        delay
        type
        position
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
    "type": "CreateMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateMessageInput!"
      }
    ],
    "concreteType": "CreateMessagePayload",
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
                "name": "message_id",
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
                "name": "user_id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "delay",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "position",
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
  "name": "CreateMessageMutation",
  "id": null,
  "text": "mutation CreateMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    newMessageEdge {\n      node {\n        id\n        message_id\n        text\n        user_id\n        delay\n        type\n        position\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateMessageMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMessageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0327e770d5a0d8952fac6a421ce19402';
module.exports = node;
