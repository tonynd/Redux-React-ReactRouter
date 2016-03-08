import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <div>List of Blog posts!</div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapPropsToState, {fetchPosts})(PostIndex);
