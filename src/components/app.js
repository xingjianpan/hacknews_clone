import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchWeather from '../actions/index'
import WeatherList from '../containers/weather_list'
import SearchBox from '../containers/search'




export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <WeatherList />
      </div>
    );
  }
}
