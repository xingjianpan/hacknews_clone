import React, { Component } from 'react';
import WeatherList from '../containers/weather_list'
import SearchBox from '../containers/search'

export default () => {
  return (
    <div>
      Super Special Recipe
      <ul>
        <li>1 cup Sugar</li>
        <li>1 cup pepper</li>
        <li>1 cup salt</li>
      </ul>
        <SearchBox />
        <WeatherList />
    </div>
    )
}
