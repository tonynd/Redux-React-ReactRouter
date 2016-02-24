import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/apiWeather.action';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
  }

  _onInputChange = (event) =>{
    let term = event.target.value;
    this.setState({term});
  };

  _onFormSubmit = (event) =>{
    // this stops the form from sending stuff to the backend when user hits enter
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  };
  
  render(){
    return (
      <form onSubmit={this._onFormSubmit} className="input-group">
        <input type="text" className="form-control" placeholder="Get a five-day forecast in your favorite cities" value={this.state.term} onChange={this._onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
