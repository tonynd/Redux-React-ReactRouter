import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: ""
    };
  }

  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      textarea: ""
    });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit} className="comment-box">
        <textarea name="textarea" value={this.state.textarea} onChange={this._handleChange} />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}
