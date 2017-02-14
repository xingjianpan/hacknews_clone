import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchWeather from '../actions/index'
import * as actions from '../actions/index'


const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json'
console.log(TOP_STORIES)

const ArticleList = (props) => {
  return (
    <ul>
      <li> article 1</li>
    </ul>
    )
}


class CommentBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      comment:''
    }
  }
  handleChange(event) {
    this.setState({
      comment:event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.comment)
    this.setState({
      comment:''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment}
                  onChange={this.handleChange.bind(this)}
        />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    )
  }
}

CommentBox = connect(null, actions)(CommentBox)



export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />

      </div>
    );
  }
}
