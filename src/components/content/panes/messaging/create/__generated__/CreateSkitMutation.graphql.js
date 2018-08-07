/**
 * @flow
 * @relayHash 260c608b6a1be8c1a460115afc5de0f4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Skit_skit$ref = any;
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
    +newSkitEdge: ?{|
      +node: ?{|
        +id: string,
        +title: string,
        +created: ?string,
        +last_updated: ?string,
        +SkitList_bots: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +botid: string
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
        +$fragmentRefs: Skit_skit$ref,
      |}
    |}
  |}
|};
*/


/*
mutation CreateSkitMutation(
  $input: CreateSkitInput!
) {
  createSkit(input: $input) {
    newSkitEdge {
      node {
        id
        title
        created
        last_updated
        SkitList_bots: bots(first: 100) {
          edges {
            node {
              botid
              id
              __typename
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
        SkitList_messages: messages(first: 100) {
          edges {
            node {
              id
              __typename
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
        ...Skit_skit
      }
    }
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
  messages(first: 100) {
    edges {
      node {
        id
        messageid
        text
        author
        delay
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateSkitInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_updated",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "botid",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v9 = {
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
},
v10 = [
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
          v2,
          v7
        ]
      },
      v8
    ]
  },
  v9
],
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateSkitMutation",
  "id": null,
  "text": "mutation CreateSkitMutation(\n  $input: CreateSkitInput!\n) {\n  createSkit(input: $input) {\n    newSkitEdge {\n      node {\n        id\n        title\n        created\n        last_updated\n        SkitList_bots: bots(first: 100) {\n          edges {\n            node {\n              botid\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        SkitList_messages: messages(first: 100) {\n          edges {\n            node {\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        ...Skit_skit\n      }\n    }\n  }\n}\n\nfragment Skit_skit on Skit {\n  id\n  skitid\n  title\n  created\n  last_updated\n  bots(first: 100) {\n    edges {\n      node {\n        id\n        botid\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  description\n  messages(first: 100) {\n    edges {\n      node {\n        id\n        messageid\n        text\n        author\n        delay\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "createSkit",
          "newSkitEdge",
          "node",
          "SkitList_bots"
        ]
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "createSkit",
          "newSkitEdge",
          "node",
          "SkitList_messages"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSkitMutation",
    "type": "SocialAttitudesRootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSkit",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateSkitPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "newSkitEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "SkitEdge",
            "plural": false,
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
                  v2,
                  v3,
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": "SkitList_bots",
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
                              v6,
                              v7
                            ]
                          },
                          v8
                        ]
                      },
                      v9
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
                    "selections": v10
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "Skit_skit",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSkitMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSkit",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateSkitPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "newSkitEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "SkitEdge",
            "plural": false,
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
                  v2,
                  v3,
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": "SkitList_bots",
                    "name": "bots",
                    "storageKey": "bots(first:100)",
                    "args": v11,
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
                              v6,
                              v2,
                              v7
                            ]
                          },
                          v8
                        ]
                      },
                      v9
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": "SkitList_bots",
                    "name": "bots",
                    "args": v11,
                    "handle": "connection",
                    "key": "Skit_SkitList_bots",
                    "filters": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "SkitList_messages",
                    "name": "messages",
                    "storageKey": "messages(first:100)",
                    "args": v11,
                    "concreteType": "MessageConnection",
                    "plural": false,
                    "selections": v10
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": "SkitList_messages",
                    "name": "messages",
                    "args": v11,
                    "handle": "connection",
                    "key": "Skit_SkitList_messages",
                    "filters": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "skitid",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "bots",
                    "storageKey": "bots(first:100)",
                    "args": v11,
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
                              v2,
                              v6,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "name",
                                "args": null,
                                "storageKey": null
                              },
                              v7
                            ]
                          },
                          v8
                        ]
                      },
                      v9
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "bots",
                    "args": v11,
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
                    "storageKey": "messages(first:100)",
                    "args": v11,
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
                              v2,
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
                              },
                              v7
                            ]
                          },
                          v8
                        ]
                      },
                      v9
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "messages",
                    "args": v11,
                    "handle": "connection",
                    "key": "Skit_messages",
                    "filters": null
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
(node/*: any*/).hash = 'f7b4f2bc0b3d7c770a6f93df15f30788';
module.exports = node;
