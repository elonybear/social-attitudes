/**
 * @flow
 * @relayHash ce7812f612931cf114153a3478d134f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Dashboard_allUsers$ref = any;
type SkitList_skits$ref = any;
type SkitList_users$ref = any;
type UserList_users$ref = any;
export type Base_QueryVariables = {||};
export type Base_QueryResponse = {|
  +allUsers: ?{|
    +$fragmentRefs: Dashboard_allUsers$ref & UserList_users$ref
  |},
  +skits: ?{|
    +$fragmentRefs: SkitList_skits$ref
  |},
  +users: ?{|
    +$fragmentRefs: SkitList_users$ref
  |},
|};
*/


/*
query Base_Query {
  allUsers: users(type: USER) {
    ...Dashboard_allUsers
    ...UserList_users
    id
  }
  skits {
    ...SkitList_skits
    id
  }
  users(type: BOT) {
    ...SkitList_users
    id
  }
}

fragment Dashboard_allUsers on UserList {
  count
}

fragment UserList_users on UserList {
  userList(first: 5) {
    edges {
      node {
        id
        ...User_user
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment SkitList_skits on SkitList {
  id
  skits(first: 100) {
    edges {
      node {
        id
        skit_id
        title
        created
        last_updated
        SkitList_users: users(first: 100) {
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

fragment SkitList_users on UserList {
  id
  userList(first: 100) {
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
  ...CreateSkitForm_users
}

fragment CreateSkitForm_users on UserList {
  id
  userList(first: 100) {
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
}

fragment User_user on User {
  first_name
  last_name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "type",
    "value": "USER",
    "type": "UserCategory"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "type",
    "value": "BOT",
    "type": "UserCategory"
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
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100,
    "type": "Int"
  }
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    v8,
    v7
  ]
},
v11 = [
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "user_id",
            "args": null,
            "storageKey": null
          },
          v3,
          v4,
          v5
        ]
      },
      v6
    ]
  },
  v10
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "Base_Query",
  "id": null,
  "text": "query Base_Query {\n  allUsers: users(type: USER) {\n    ...Dashboard_allUsers\n    ...UserList_users\n    id\n  }\n  skits {\n    ...SkitList_skits\n    id\n  }\n  users(type: BOT) {\n    ...SkitList_users\n    id\n  }\n}\n\nfragment Dashboard_allUsers on UserList {\n  count\n}\n\nfragment UserList_users on UserList {\n  userList(first: 5) {\n    edges {\n      node {\n        id\n        ...User_user\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SkitList_skits on SkitList {\n  id\n  skits(first: 100) {\n    edges {\n      node {\n        id\n        skit_id\n        title\n        created\n        last_updated\n        SkitList_users: users(first: 100) {\n          edges {\n            node {\n              id\n              user_id\n              first_name\n              last_name\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        SkitList_messages: messages(first: 100) {\n          edges {\n            node {\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SkitList_users on UserList {\n  id\n  userList(first: 100) {\n    edges {\n      node {\n        id\n        user_id\n        first_name\n        last_name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...CreateSkitForm_users\n}\n\nfragment CreateSkitForm_users on UserList {\n  id\n  userList(first: 100) {\n    edges {\n      node {\n        id\n        user_id\n        first_name\n        last_name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment User_user on User {\n  first_name\n  last_name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "Base_Query",
    "type": "SocialAttitudesRootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "allUsers",
        "name": "users",
        "storageKey": "users(type:\"USER\")",
        "args": v0,
        "concreteType": "UserList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Dashboard_allUsers",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserList_users",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "skits",
        "storageKey": null,
        "args": null,
        "concreteType": "SkitList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SkitList_skits",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(type:\"BOT\")",
        "args": v1,
        "concreteType": "UserList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SkitList_users",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Base_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "allUsers",
        "name": "users",
        "storageKey": "users(type:\"USER\")",
        "args": v0,
        "concreteType": "UserList",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userList",
            "storageKey": "userList(first:5)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5,
                "type": "Int"
              }
            ],
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
                      v3,
                      v4,
                      v5
                    ]
                  },
                  v6
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
                  v7,
                  v8
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "userList",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5,
                "type": "Int"
              }
            ],
            "handle": "connection",
            "key": "UserList_userList",
            "filters": null
          },
          v2
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "skits",
        "storageKey": null,
        "args": null,
        "concreteType": "SkitList",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "skits",
            "storageKey": "skits(first:100)",
            "args": v9,
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
                      v2,
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
                        "name": "users",
                        "storageKey": "users(first:100)",
                        "args": v9,
                        "concreteType": "UserConnection",
                        "plural": false,
                        "selections": v11
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": "SkitList_users",
                        "name": "users",
                        "args": v9,
                        "handle": "connection",
                        "key": "Skit_SkitList_users",
                        "filters": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "SkitList_messages",
                        "name": "messages",
                        "storageKey": "messages(first:100)",
                        "args": v9,
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
                                  v5
                                ]
                              },
                              v6
                            ]
                          },
                          v10
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": "SkitList_messages",
                        "name": "messages",
                        "args": v9,
                        "handle": "connection",
                        "key": "Skit_SkitList_messages",
                        "filters": null
                      },
                      v5
                    ]
                  },
                  v6
                ]
              },
              v10
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "skits",
            "args": v9,
            "handle": "connection",
            "key": "SkitList_skits",
            "filters": []
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(type:\"BOT\")",
        "args": v1,
        "concreteType": "UserList",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userList",
            "storageKey": "userList(first:100)",
            "args": v9,
            "concreteType": "UserConnection",
            "plural": false,
            "selections": v11
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "userList",
            "args": v9,
            "handle": "connection",
            "key": "SkitList_userList",
            "filters": []
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "userList",
            "args": v9,
            "handle": "connection",
            "key": "CreateSkitForm_userList",
            "filters": []
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb11a63301aa5c0b463c1870ffb4f490';
module.exports = node;
