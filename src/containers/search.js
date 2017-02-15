import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'


class SearchBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      term:''
    }
  }
  handleChange(event) {
    this.setState({
      term:event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({
      term:''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="term-box">
        <h4>Input a city name</h4>
        <input value={this.state.term}
                  onChange={this.handleChange.bind(this)}
        />
        <div>
          <button action="submit">Search</button>
        </div>
      </form>
    )
  }
}

export default SearchBox = connect(null, actions)(SearchBox)

