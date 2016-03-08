import { combineReducers } from 'redux';
import PostReducer from './post.reducer';

const Reducers = combineReducers({
  posts: PostReducer
});

export default Reducers;
