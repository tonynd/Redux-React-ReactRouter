import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/post.action';

class PostShow extends Component {

  constructor(props) {
    super(props);
  }
  
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    const {params: {id}} = this.props;
    this.props.fetchPost(id);
  }

  _handleClick = () => {
    const {params: {id}} = this.props;
    this.props.deletePost(id)
      .then(() => {
        this.context.router.push('/');
      });
  };

  render() {
    const {post} = this.props;
    
    if(!post) {
      return <div>...Loading</div>;
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this._handleClick}>DeletePost</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);
