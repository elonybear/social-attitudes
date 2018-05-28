import {ACTION_ENUMS} from '../utilities';

export default function selectedTopic(state = {}, action) {
  switch(action.type) {
    case ACTION_ENUMS.SET_DATA:
      return action.data;
    default:
      return state;
  }
}
