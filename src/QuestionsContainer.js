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

  render() {
    return (
      <div>
        <div style={centerSingleContainer}>
          {generateQuestions(10).map(object => {
            return <Question key={object.id} data={object} change={this.changeQuestion} />
          })}
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