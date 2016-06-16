import React, {  Component } from 'react';
import CommentBox from './comment_box.react';
import CommentList from './comment_list.react';

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
