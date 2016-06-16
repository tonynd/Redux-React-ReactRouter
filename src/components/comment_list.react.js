import React, { Component } from 'react';
import { connect } from "react-redux";

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map(comment => <li key={comment}>{comment}</li>)}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
