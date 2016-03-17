import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPosts } from '../actions/post.action';

class PostNew extends Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    // you should only use context when you are doing something with react-router and routing
    router: PropTypes.object
  };

  _formClasses = (obj) => {
    return `form-group ${(obj.touched && obj.invalid ? 'has-danger' : '')}`
  };

  _displayError = (obj) => {
    return (obj.touched ? obj.error : '')
  };

  _handleSubmit = (props) => {
    this.props.createPosts(props)
      .then(() => {
        //blog post has been created, navigate user to index
        // we navigate by calling this.context.router.push
        this.context.router.push('/');
      });
  };

  render() {
    //same as const title = this.props.fields.title;
    const { fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this._handleSubmit)}>
        <h3>Create A New Post</h3>
        <div className={this._formClasses(title)}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{this._displayError(title)}</div>
        </div>
        <div className={this._formClasses(categories)}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">{this._displayError(categories)}</div>
        </div>
        <div className={this._formClasses(content)}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">{this._displayError(content)}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a username';
  }

  if(!values.categories) {
    errors.categories = 'Enter categories';
  }

  if(!values.content) {
    errors.content = 'Enter a content';
  }
  
  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPosts})(PostNew);
