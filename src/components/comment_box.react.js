import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment-box">
        <textarea></textarea>
        <button>Submit Comment</button>
      </div>
    );
  }
}
