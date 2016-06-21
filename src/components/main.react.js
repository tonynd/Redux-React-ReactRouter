import React, {  Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/change_main.action";

class Main extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.change_main("Bye World");
  }

  _handleClick = () => {
    this.props.grab_data();
  }

  render(){
    console.log(this.props.data)
    return (
      <div>
        this is greeting
        <button onClick={this._handleClick}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.list
  };
}

export default connect(mapStateToProps, actions)(Main);
