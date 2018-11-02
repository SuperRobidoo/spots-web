import React, { Component } from 'react';
import './css/App.css';
import SpotContainer from './SpotContainer'
import QuestionsContainer from './QuestionsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
