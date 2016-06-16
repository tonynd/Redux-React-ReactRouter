import { combineReducers } from 'redux';
import List from './list.reducer';

const rootReducer = combineReducers({
  comments: List
});

export default rootReducer;
