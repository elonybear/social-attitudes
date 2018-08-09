/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CreateSkitForm_users$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SkitList_users$ref: FragmentReference;
export type SkitList_users = {|
  +id: string,
  +userList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +user_id: ?number,
        +first_name: ?string,
        +last_name: ?string,
      |}
    |}>
  |},
  +$fragmentRefs: CreateSkitForm_users$ref,
  +$refType: SkitList_users$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SkitList_users",
  "type": "UserList",
  "metadata": {
    "connection": [
      {
        "count": "rows",
        "cursor": null,
        "direction": "forward",
        "path": [
          "userList"
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
      "alias": "userList",
      "name": "__SkitList_userList_connection",
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
      "name": "CreateSkitForm_users",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '69dac414851540ac5289d8910bc5ca62';
module.exports = node;
