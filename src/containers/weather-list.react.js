import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.react';

class WeatherList extends Component {

  constructor(props){
    super(props);
  }
  
  _renderWeather = (cityData) => {
    let temps = cityData.list.map(weather => weather.main.temp);
    let pressures = cityData.list.map(weather => weather.main.pressure);
    let humidities = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="red" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  };
  
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  // line 30 is the same as const weather = state.weather
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
