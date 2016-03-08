import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post.reducer';

const Reducers = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default Reducers;
