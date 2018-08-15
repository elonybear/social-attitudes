/**
 * @flow
 * @relayHash 9de1ac2f0b824406b944fad81d6edde0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Skit_skit$ref = any;
export type SkitList_QueryVariables = {|
  skit_id: number
|};
export type SkitList_QueryResponse = {|
  +skit: ?{|
    +$fragmentRefs: Skit_skit$ref
  |}
|};
export type SkitList_Query = {|
  variables: SkitList_QueryVariables,
  response: SkitList_QueryResponse,
|};
*/


/*
query SkitList_Query(
  $skit_id: Int!
) {
  skit(skit_id: $skit_id, type: BOT) {
    ...Skit_skit
    id
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
    "name": "skit_id",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "skit_id",
    "variableName": "skit_id",
    "type": "Int!"
  },
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
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100,
    "type": "Int"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "user_id",
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
  "kind": "Request",
  "operationKind": "query",
  "name": "SkitList_Query",
  "id": null,
  "text": "query SkitList_Query(\n  $skit_id: Int!\n) {\n  skit(skit_id: $skit_id, type: BOT) {\n    ...Skit_skit\n    id\n  }\n}\n\nfragment Skit_skit on Skit {\n  id\n  skit_id\n  title\n  created\n  last_updated\n  users(first: 100) {\n    edges {\n      node {\n        id\n        user_id\n        first_name\n        last_name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  description\n  messages(first: 100) {\n    edges {\n      node {\n        id\n        message_id\n        text\n        user_id\n        delay\n        type\n        position\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
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
        "name": "skit",
        "storageKey": null,
        "args": v1,
        "concreteType": "Skit",
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
        "name": "skit",
        "storageKey": null,
        "args": v1,
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
            "alias": null,
            "name": "users",
            "storageKey": "users(first:100)",
            "args": v3,
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
                      v4,
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
                      v5
                    ]
                  },
                  v6
                ]
              },
              v7
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "users",
            "args": v3,
            "handle": "connection",
            "key": "Skit_users",
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
            "args": v3,
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
                      v4,
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
                      v5
                    ]
                  },
                  v6
                ]
              },
              v7
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "messages",
            "args": v3,
            "handle": "connection",
            "key": "Skit_messages",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '095e669a9298116724ca1098a5989d1e';
module.exports = node;
