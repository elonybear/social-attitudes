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
  +$fragmentRefs: CreateSkitForm_bots$ref,
  +$refType: SkitList_bots$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SkitList_bots",
  "type": "BotList",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CreateSkitForm_bots",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e90bff9270f64619e73e7184eaf7ee3f';
module.exports = node;
