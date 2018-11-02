import React from 'react'
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class QuestionModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.data.title,
      subtitle: props.data.subtitle,
      set: props.data.set
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps)
    this.setState({
      title: nextProps.data.title,
      subtitle: nextProps.data.subtitle,
      set: nextProps.data.set
    })
  }

  updateTitle(e) {
    this.setState({ title: e.target.value })
  }
  updateSubtitle(e) {
    this.setState({ subtitle: e.target.value })
  }
  updateSet(e) {
    const rexEx = /^[0-9\b]+$/;
    if (e.target.value === '' || rexEx.test(e.target.value)) {
      this.setState({ set: e.target.value })
    }
  }

  render() {
    return (
      <div className="static-modal" hidden={this.props.visible}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Update question</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.title}
                  placeholder='Title'
                  onChange={e => this.updateTitle(e)}
                />
              </FormGroup>
            </form>
            <form>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Subtitle</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  value={this.state.subtitle}
                  placeholder="Add a description if needed"
                  onChange={e => this.updateSubtitle(e)} />
              </FormGroup>
            </form>
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Set</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.set}
                  placeholder={`Include in a set e.g '1'`}
                  onChange={e => this.updateSet(e)}
                />
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
            <Button bsStyle="primary" onClick={this.props.updateQuestion}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}

export default QuestionModal