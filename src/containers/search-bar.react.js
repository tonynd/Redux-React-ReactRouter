import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <form className="input-group">
        <input type="text" />
      </form>
    );
  }
}
