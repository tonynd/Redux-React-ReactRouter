import React, {Component} from 'react';
import SearchBar from '../containers/search-bar.react';
import WeatherList from '../containers/weather-list.react';

export default class App extends Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
