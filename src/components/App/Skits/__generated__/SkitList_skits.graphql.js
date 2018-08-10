/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SkitList_skits$ref: FragmentReference;
export type SkitList_skits = {|
  +id: string,
  +skits: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +skit_id: number,
        +title: string,
        +created: ?string,
        +last_updated: ?string,
        +SkitList_users: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +user_id: ?number,
              +first_name: ?string,
              +last_name: ?string,
            |}
          |}>
        |},
        +SkitList_messages: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string
            |}
          |}>
        |},
      |}
    |}>
  |},
  +$refType: SkitList_skits$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "count": "rows",
  "cursor": null,
  "direction": "forward",
  "path": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
  "name": "SkitList_skits",
  "type": "SkitList",
  "metadata": {
    "connection": [
      v0,
      v0,
      {
        "count": "rows",
        "cursor": null,
        "direction": "forward",
        "path": [
          "skits"
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
    v1,
    {
      "kind": "LinkedField",
      "alias": "skits",
      "name": "__SkitList_skits_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "SkitConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "SkitEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Skit",
              "plural": false,
              "selections": [
                v1,
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
                  "alias": "SkitList_users",
                  "name": "__Skit_SkitList_users_connection",
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
                            v1,
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
                  "kind": "LinkedField",
                  "alias": "SkitList_messages",
                  "name": "__Skit_SkitList_messages_connection",
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
                            v2
                          ]
                        },
                        v3
                      ]
                    },
                    v4
                  ]
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
(node/*: any*/).hash = '247f35407b9af18df667fdf7a09cabe0';
module.exports = node;
