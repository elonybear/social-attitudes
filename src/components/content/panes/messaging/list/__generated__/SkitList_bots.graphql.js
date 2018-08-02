/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CreateSkitForm_bots$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SkitList_bots$ref: FragmentReference;
export type SkitList_bots = {|
  +bots: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +botid: string,
        +name: string,
      |}
    |}>
  |},
  +$fragmentRefs: CreateSkitForm_bots$ref,
  +$refType: SkitList_bots$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SkitList_bots",
  "type": "BotList",
  "metadata": {
    "connection": [
      {
        "count": "rows",
        "cursor": null,
        "direction": "forward",
        "path": [
          "bots"
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
    {
      "kind": "LinkedField",
      "alias": "bots",
      "name": "__SkitList_bots_connection",
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
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
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
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
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
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "CreateSkitForm_bots",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '58e6df6ec6c6aaf5026b037eb4f558cd';
module.exports = node;
