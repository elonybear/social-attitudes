/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Skit_skit$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SkitList_skits$ref: FragmentReference;
export type SkitList_skits = {|
  +id: string,
  +skits: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: string,
        +created: ?string,
        +last_updated: ?string,
        +bots: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +botid: string
            |}
          |}>
        |},
        +messages: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string
            |}
          |}>
        |},
        +$fragmentRefs: Skit_skit$ref,
      |}
    |}>
  |},
  +$refType: SkitList_skits$ref,
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
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v3 = {
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
      {
        "count": "rows",
        "cursor": null,
        "direction": "forward",
        "path": null
      },
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
    v0,
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
                v0,
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
                  "alias": "bots",
                  "name": "__Skit_SkitList_bots_connection",
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
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "botid",
                              "args": null,
                              "storageKey": null
                            },
                            v1
                          ]
                        },
                        v2
                      ]
                    },
                    v3
                  ]
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
                            v0
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Skit_skit",
                  "args": null
                },
                v1
              ]
            },
            v2
          ]
        },
        v3
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6cffdf31f32c9d092ad1a9e0c846d29';
module.exports = node;
