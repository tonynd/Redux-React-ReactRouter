import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/post.action';

class PostIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  _renderPosts = () => {
    return this.props.posts.map(post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/post/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  };

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this._renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    posts: state.posts.all
  };
};

export default connect(mapPropsToState, {fetchPosts})(PostIndex);
