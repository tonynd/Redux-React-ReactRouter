import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.react';
import PostIndex from './components/post_index.react';
import PostNew from './components/post_new.react';
import PostShow from './components/post_show.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="post/new" component={PostNew} />
    <Route path="post/:id" component={PostShow} />
  </Route>
);
