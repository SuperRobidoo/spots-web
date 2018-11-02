
import React from 'react'
import Question from './Question'
import { generateQuestions } from './stubs/data'
import QuestionModal from './QuestionModal'

const centerSingleContainer = {
  display: 'flex',
  flexDirection: 'column',
  margin: '50px 50px 50px 50px'
}

class QuestionsContainer extends React.Component {

  constructor(props) {
    super(props)
    console.log('2sadasd', props)
    this.state = {
      modalHidden: true,
      modalQuestion: {
        title: '',
        subtitle: '',
        set: ''
      }
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.changeQuestion = this.changeQuestion.bind(this)
    this.updateQuestion = this.updateQuestion.bind(this)
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps', props)
  }

  showModal() {
    this.setState({
      modalHidden: false
    })
  }

  hideModal() {
    this.setState({
      modalHidden: true
    })
  }

  changeQuestion(question) {
    this.setState({
      modalQuestion: {
        title: question.title,
        subtitle: question.subtitle,
        set: question.set
      }
    })
    this.showModal()
  }

  updateQuestion() {
    // send call to backend to update question in database
    this.setState({
      modalQuestion: {
        title: '',
        subtitle: '',
        set: ''
      }
    })
    this.hideModal()
  }

  renderQuestions() {
    if (this.props.questions) {
      return (
        this.props.questions.map(object => {
          return <Question key={object.id} data={object} change={this.changeQuestion} />
        })
      )
    }
  }

  render() {
    return (
      <div>
        <div style={centerSingleContainer}>
          {this.renderQuestions()}
        </div>
        <QuestionModal
          data={this.state.modalQuestion}
          visible={this.state.modalHidden}
          hideModal={this.hideModal}
          updateQuestion={this.updateQuestion} />
      </div>
    )
  }
}

export default QuestionsContainer