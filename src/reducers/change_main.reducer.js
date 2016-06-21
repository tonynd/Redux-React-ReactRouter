import { CHANGE, GRAB } from "../actions/constants";

const initial_state = {
  data: ""
};

export default function(state = initial_state, action) {
  switch(action.type) {
    case CHANGE:
      return {...state, data: action.payload};
    case GRAB:
      return {...state, data: action.payload.data.data};
    default:
      return state
  }
}
