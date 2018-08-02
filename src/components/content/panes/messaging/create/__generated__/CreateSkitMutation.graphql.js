/**
 * @flow
 * @relayHash 4e1596d032d839953246ae24c91e1f48
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSkitInput = {
  title: string,
  description: string,
  bots: $ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type CreateSkitMutationVariables = {|
  input: CreateSkitInput
|};
export type CreateSkitMutationResponse = {|
  +createSkit: ?{|
    +skit: ?{|
      +id: string,
      +title: string,
      +bots: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +botid: string,
            +name: string,
          |}
        |}>
      |},
      +description: ?string,
      +messages: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +text: string,
            +author: string,
          |}
        |}>
      |},
      +last_updated: ?string,
      +created: ?string,
    |}
  |}
|};
*/


/*
mutation CreateSkitMutation(
  $input: CreateSkitInput!
) {
  createSkit(input: $input) {
    skit {
      id
      title
      bots {
        edges {
          node {
            id
            botid
            name
          }
        }
      }
      description
      messages {
        edges {
          node {
            id
            text
            author
          }
        }
      }
      last_updated
      created
    }
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
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
        "kind": "LinkedField",
        "alias": null,
        "name": "skit",
        "storageKey": null,
        "args": null,
        "concreteType": "Skit",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "bots",
            "storageKey": null,
            "args": null,
            "concreteType": "BotConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BotEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Bot",
                    "plural": false,
                    "selections": [
                      v1,
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
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "messages",
            "storageKey": null,
            "args": null,
            "concreteType": "MessageConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "MessageEdge",
                "plural": true,
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
                      v1,
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
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "last_updated",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "created",
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
  "name": "CreateSkitMutation",
  "id": null,
  "text": "mutation CreateSkitMutation(\n  $input: CreateSkitInput!\n) {\n  createSkit(input: $input) {\n    skit {\n      id\n      title\n      bots {\n        edges {\n          node {\n            id\n            botid\n            name\n          }\n        }\n      }\n      description\n      messages {\n        edges {\n          node {\n            id\n            text\n            author\n          }\n        }\n      }\n      last_updated\n      created\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSkitMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSkitMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '401388aaffacc0b30b922c5ff4d041c5';
module.exports = node;
