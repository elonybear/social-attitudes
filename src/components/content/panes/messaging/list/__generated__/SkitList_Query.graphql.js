/**
 * @flow
 * @relayHash 48ffa04db5be66f35571abb2e2436b0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Skit_skit$ref = any;
export type SkitList_QueryVariables = {|
  skitid: string
|};
export type SkitList_QueryResponse = {|
  +node: ?{|
    +$fragmentRefs: Skit_skit$ref
  |}
|};
*/


/*
query SkitList_Query(
  $skitid: ID!
) {
  node(id: $skitid) {
    __typename
    ...Skit_skit
    id
  }
}

fragment Skit_skit on Skit {
  id
  skitid
  title
  created
  last_updated
  bots(first: 100) {
    edges {
      node {
        id
        botid
        name
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  description
  messages {
    edges {
      node {
        id
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
    "name": "skitid",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "skitid",
    "type": "ID!"
  }
],
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SkitList_Query",
  "id": null,
  "text": "query SkitList_Query(\n  $skitid: ID!\n) {\n  node(id: $skitid) {\n    __typename\n    ...Skit_skit\n    id\n  }\n}\n\nfragment Skit_skit on Skit {\n  id\n  skitid\n  title\n  created\n  last_updated\n  bots(first: 100) {\n    edges {\n      node {\n        id\n        botid\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  description\n  messages {\n    edges {\n      node {\n        id\n        text\n        author\n        delay\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SkitList_Query",
    "type": "SocialAttitudesRootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Skit_skit",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SkitList_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "InlineFragment",
            "type": "Skit",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "skitid",
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
                "alias": null,
                "name": "bots",
                "storageKey": "bots(first:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100,
                    "type": "Int"
                  }
                ],
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
                          v3,
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
                          v2
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
                "kind": "LinkedHandle",
                "alias": null,
                "name": "bots",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "Skit_bots",
                "filters": null
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
                          v3,
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
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1a26e45c70e51ae11c0f16813bf9f85';
module.exports = node;
