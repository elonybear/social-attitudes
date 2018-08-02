/**
 * @flow
 * @relayHash ced372c0fdb4e1a11cf0288058d10b46
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Dashboard_users$ref = any;
type SkitList_bots$ref = any;
type SkitList_skits$ref = any;
type UserList_users$ref = any;
export type Base_QueryVariables = {||};
export type Base_QueryResponse = {|
  +users: ?{|
    +$fragmentRefs: Dashboard_users$ref & UserList_users$ref
  |},
  +skits: ?{|
    +$fragmentRefs: SkitList_skits$ref
  |},
  +bots: ?{|
    +$fragmentRefs: SkitList_bots$ref
  |},
|};
*/


/*
query Base_Query {
  users {
    ...Dashboard_users
    ...UserList_users
    id
  }
  skits {
    ...SkitList_skits
    id
  }
  bots {
    ...SkitList_bots
    id
  }
}

fragment Dashboard_users on UserList {
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
        title
        created
        last_updated
        SkitList_bots: bots(first: 100) {
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
        messages {
          edges {
            node {
              id
            }
          }
        }
        ...Skit_skit
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

fragment SkitList_bots on BotList {
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
  ...CreateSkitForm_bots
}

fragment CreateSkitForm_bots on BotList {
  id
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

fragment User_user on User {
  first_name
  last_name
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100,
    "type": "Int"
  }
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    v4,
    v3
  ]
},
v7 = [
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
          v0,
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
          v1
        ]
      },
      v2
    ]
  },
  v6
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "bots",
  "storageKey": "bots(first:100)",
  "args": v5,
  "concreteType": "BotConnection",
  "plural": false,
  "selections": v7
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "Base_Query",
  "id": null,
  "text": "query Base_Query {\n  users {\n    ...Dashboard_users\n    ...UserList_users\n    id\n  }\n  skits {\n    ...SkitList_skits\n    id\n  }\n  bots {\n    ...SkitList_bots\n    id\n  }\n}\n\nfragment Dashboard_users on UserList {\n  count\n}\n\nfragment UserList_users on UserList {\n  userList(first: 5) {\n    edges {\n      node {\n        id\n        ...User_user\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SkitList_skits on SkitList {\n  id\n  skits(first: 100) {\n    edges {\n      node {\n        id\n        title\n        created\n        last_updated\n        SkitList_bots: bots(first: 100) {\n          edges {\n            node {\n              id\n              botid\n              name\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        messages {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n        ...Skit_skit\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SkitList_bots on BotList {\n  bots(first: 100) {\n    edges {\n      node {\n        id\n        botid\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...CreateSkitForm_bots\n}\n\nfragment CreateSkitForm_bots on BotList {\n  id\n  bots(first: 100) {\n    edges {\n      node {\n        id\n        botid\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Skit_skit on Skit {\n  id\n  skitid\n  title\n  created\n  last_updated\n  bots(first: 100) {\n    edges {\n      node {\n        id\n        botid\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  description\n  messages {\n    edges {\n      node {\n        id\n        text\n        author\n        delay\n      }\n    }\n  }\n}\n\nfragment User_user on User {\n  first_name\n  last_name\n}\n",
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
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "UserList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Dashboard_users",
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
        "name": "bots",
        "storageKey": null,
        "args": null,
        "concreteType": "BotList",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SkitList_bots",
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
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
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
                      v0,
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
                      v1
                    ]
                  },
                  v2
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
                  v3,
                  v4
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
          v0
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
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "skits",
            "storageKey": "skits(first:100)",
            "args": v5,
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
                        "alias": "SkitList_bots",
                        "name": "bots",
                        "storageKey": "bots(first:100)",
                        "args": v5,
                        "concreteType": "BotConnection",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": "SkitList_bots",
                        "name": "bots",
                        "args": v5,
                        "handle": "connection",
                        "key": "Skit_SkitList_bots",
                        "filters": null
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
                                  v0,
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "skitid",
                        "args": null,
                        "storageKey": null
                      },
                      v8,
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "bots",
                        "args": v5,
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
                      v1
                    ]
                  },
                  v2
                ]
              },
              v6
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "skits",
            "args": v5,
            "handle": "connection",
            "key": "SkitList_skits",
            "filters": []
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bots",
        "storageKey": null,
        "args": null,
        "concreteType": "BotList",
        "plural": false,
        "selections": [
          v8,
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "bots",
            "args": v5,
            "handle": "connection",
            "key": "SkitList_bots",
            "filters": []
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "bots",
            "args": v5,
            "handle": "connection",
            "key": "CreateSkitForm_bots",
            "filters": []
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fca50dcdd44732a54b0819c1320be5f6';
module.exports = node;
