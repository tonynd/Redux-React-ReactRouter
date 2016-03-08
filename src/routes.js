import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.react';
import PostIndex from './components/post_index.react';
import PostNew from './components/post_new.react';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ PostIndex } />
    <Route path="post/new" component={ PostNew } />
  </Route>
);
