/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Dashboard_allUsers$ref: FragmentReference;
export type Dashboard_allUsers = {|
  +count: ?number,
  +$refType: Dashboard_allUsers$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Dashboard_allUsers",
  "type": "UserList",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "count",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b0fa00c4a5f84c583c0f07e146a3eacb';
module.exports = node;
