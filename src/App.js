import React, { Component } from 'react'
import './css/App.css'
import QuestionsContainer from './QuestionsContainer'
import axios from 'axios'
import config from './config'

class App extends Component {

  constructor() {
    super()
    this.state = {
      questions: []
    }
    this.getQuestions = this.getQuestions.bind(this)
  }
  
  componentWillMount() {
    this.getQuestions()
  }

  getQuestions() {
    axios.get(config.backendUrl + 'questions')
    .then(response => {
      this.setState({
        questions: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <QuestionsContainer questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
