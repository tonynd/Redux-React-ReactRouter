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

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
        </div>
        List of Blog posts!
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapPropsToState, { fetchPosts })(PostIndex);
