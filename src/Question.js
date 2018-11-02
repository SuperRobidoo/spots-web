import React from 'react'
import {
  Button
} from 'react-bootstrap'
import './css/Question.css'

class Question extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.data.id,
      set: props.data.set,
      type: props.data.type,
      title: props.data.title,
      subtitle: props.data.subtitle
    }
    this.updateQuestion = this.updateQuestion.bind(this)
  }

  updateQuestion() {
    this.props.change(this.state)
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='set'>
          Set: {this.props.data.set}
        </div>
        <div className='title'>
          <div>Title: {this.props.data.title}</div>
          <div>Subtitle: {this.props.data.subtitle}</div>
          <div>Type: {this.props.data.type}</div>
        </div>
        <div className='change'>
          <Button bsStyle="primary" onClick={this.updateQuestion}>Change</Button>
        </div>
      </div>
    )
  }
}

export default Question