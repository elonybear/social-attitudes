/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type MessageType = "RECEIVE" | "SEND" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Skit_skit$ref: FragmentReference;
export type Skit_skit = {|
  +id: string,
  +skit_id: number,
  +title: string,
  +created: ?string,
  +last_updated: ?string,
  +users: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +user_id: ?number,
        +first_name: ?string,
        +last_name: ?string,
      |}
    |}>
  |},
  +description: ?string,
  +messages: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +message_id: number,
        +text: string,
        +user_id: number,
        +delay: number,
        +type: MessageType,
        +position: number,
      |}
    |}>
  |},
  +$refType: Skit_skit$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "user_id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "Skit_skit",
  "type": "Skit",
  "metadata": {
    "connection": [
      {
        "count": "rows",
        "cursor": null,
        "direction": "forward",
        "path": [
          "users"
        ]
      },
      {
        "count": "rows",
        "cursor": null,
        "direction": "forward",
        "path": [
          "messages"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "rows",
      "type": "Int",
      "defaultValue": 100
    }
  ],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "skit_id",
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
      "name": "created",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "last_updated",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "users",
      "name": "__Skit_users_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "UserConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "UserEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [
                v0,
                v1,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "first_name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "last_name",
                  "args": null,
                  "storageKey": null
                },
                v2
              ]
            },
            v3
          ]
        },
        v4
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
      "alias": "messages",
      "name": "__Skit_messages_connection",
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
                v0,
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
                v1,
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
                },
                v2
              ]
            },
            v3
          ]
        },
        v4
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4bb6ab182b89321b7dcc7555cd3d6292';
module.exports = node;
