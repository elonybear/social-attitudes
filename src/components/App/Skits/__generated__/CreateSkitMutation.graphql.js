/**
 * @flow
 * @relayHash 634b68a7562af6b04259a5fb1535e67a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Skit_skit$ref = any;
export type CreateSkitInput = {
  title: string,
  description: string,
  users: $ReadOnlyArray<?number>,
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
        +description: ?string,
        +last_updated: ?string,
        +SkitList_users: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +user_id: ?number
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
export type CreateSkitMutation = {|
  variables: CreateSkitMutationVariables,
  response: CreateSkitMutationResponse,
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
        description
        last_updated
        SkitList_users: users(first: 100) {
          edges {
            node {
              user_id
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
  skit_id
  title
  created
  last_updated
  users(first: 100) {
    edges {
      node {
        id
        user_id
        first_name
        last_name
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
        message_id
        text
        user_id
        delay
        type
        position
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_updated",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "user_id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v10 = {
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
v11 = [
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
          v8
        ]
      },
      v9
    ]
  },
  v10
],
v12 = [
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
  "text": "mutation CreateSkitMutation(\n  $input: CreateSkitInput!\n) {\n  createSkit(input: $input) {\n    newSkitEdge {\n      node {\n        id\n        title\n        created\n        description\n        last_updated\n        SkitList_users: users(first: 100) {\n          edges {\n            node {\n              user_id\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        SkitList_messages: messages(first: 100) {\n          edges {\n            node {\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        ...Skit_skit\n      }\n    }\n  }\n}\n\nfragment Skit_skit on Skit {\n  id\n  skit_id\n  title\n  created\n  last_updated\n  users(first: 100) {\n    edges {\n      node {\n        id\n        user_id\n        first_name\n        last_name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  description\n  messages(first: 100) {\n    edges {\n      node {\n        id\n        message_id\n        text\n        user_id\n        delay\n        type\n        position\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
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
          "SkitList_users"
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
                  v6,
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
                              v7,
                              v8
                            ]
                          },
                          v9
                        ]
                      },
                      v10
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
                    "selections": v11
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
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": "SkitList_users",
                    "name": "users",
                    "storageKey": "users(first:100)",
                    "args": v12,
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
                              v7,
                              v2,
                              v8
                            ]
                          },
                          v9
                        ]
                      },
                      v10
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": "SkitList_users",
                    "name": "users",
                    "args": v12,
                    "handle": "connection",
                    "key": "Skit_SkitList_users",
                    "filters": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "SkitList_messages",
                    "name": "messages",
                    "storageKey": "messages(first:100)",
                    "args": v12,
                    "concreteType": "MessageConnection",
                    "plural": false,
                    "selections": v11
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": "SkitList_messages",
                    "name": "messages",
                    "args": v12,
                    "handle": "connection",
                    "key": "Skit_SkitList_messages",
                    "filters": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "skit_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "users",
                    "storageKey": "users(first:100)",
                    "args": v12,
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
                              v2,
                              v7,
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
                              v8
                            ]
                          },
                          v9
                        ]
                      },
                      v10
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "users",
                    "args": v12,
                    "handle": "connection",
                    "key": "Skit_users",
                    "filters": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "messages",
                    "storageKey": "messages(first:100)",
                    "args": v12,
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
                              v7,
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
                              v8
                            ]
                          },
                          v9
                        ]
                      },
                      v10
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "messages",
                    "args": v12,
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
(node/*: any*/).hash = 'ca7bbfb7fdf10c8ee813c8a04be7c48c';
module.exports = node;
