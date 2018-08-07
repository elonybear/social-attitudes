import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import BotList from './skit/BotList'
import MessageList from './skit/MessageList'
import environment from '../../../../../environment'
import MessageWindow from './skit/MessageWindow'

import {updateSkit} from './skit/UpdateSkitMutation'

import './css/skit.css';

class Message {
  constructor(type, author, text, delay) {
    this.type = type;
    this.author = author;
    this.text = text;
    this.delay = delay;
  }
}

class Skit extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      originalTitle: props.skit.title,
      originalDescription: props.skit.description,
      title: props.skit.title,
      description: props.skit.description,
      editingTitle: false,
      editingDescription: false,
      preview: false
    }
  }

  componentDidMount() {
    document.getElementById("skit").addEventListener("click", this.handleTextClick.bind(this, null));
    document.getElementById("skit").addEventListener("keyup", this.handleKeypress.bind(this));
  }

  handlePreviewClick() {
    this.setState({preview: !this.state.preview})
  }

  handleBackButton() {
    this.props.history.push("/skits")
  }

  handleKeypress(event) {
    if (event.keyCode != 13) return;
    let field
    if (this.state.editingTitle) {
      field = 'editingTitle';
    } else if (this.state.editingDescription) {
      field = 'editingDescription';
    }

    if (this.state.editingTitle || this.state.editingDescription) {
      updateSkit({
        title: this.state.title,
        description: this.state.description,
        skitid: this.props.skit.skitid
      }, (skit) => this.setState({[field]: false}))
    }
  }

  handleTextClick(field, event) {
    if (this.state.editingTitle) {
      field = 'editingTitle';
      if (event.target == document.getElementById("title")) {
        return;
      }

      field = 'editingTitle';
    } else if (this.state.editingDescription) {
      if (event.target == document.getElementById("description")) {
        return;
      }

      field = 'editingDescription';
    }

    this.setState({[field]: !this.state[field]})
  }

  handleInputChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  getBotForMessage(botid) {
    return this.props.bots.bots.edges.find(bot => bot.node.botid == botid).node;
  }

  processMessages() {
    return this.props.skit.messages.edges.map(message => {
      return new Message(
        'receive',
        this.getBotForMessage(message.node.author).name,
        message.node.text,
        message.node.delay
      )
    })
  }

  renderTitle(skit) {
    return (
      <span
        className="clickable col-md-12" onClick={this.handleTextClick.bind(this, 'editingTitle')}>
        {skit.title}
      </span>
    )
  }

  renderTitleForm() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group title-input">
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Enter a title."
              value={this.state.title}
              onChange={this.handleInputChange.bind(this, 'title')} />
          </div>
        </div>
      </div>
    )
  }

  renderDescription(skit) {
    return <div className="col-md-12" onClick={this.handleTextClick.bind(this, 'editingDescription')}>{skit.description}</div>
  }

  renderDescriptionForm() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group description-input">
            <textarea
              type="text"
              className="form-control"
              id="description"
              aria-describedby="titleHelp"
              placeholder="Enter a description."
              value={this.state.description}
              onChange={this.handleInputChange.bind(this, 'description')}></textarea>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let skit = this.props.skit
    return (
      <div id="skit" className="skit-wrapper outset rounded">
        <div onClick={this.handleBackButton.bind(this)} className="clickable">
          <i className="fas fa-chevron-left m-r-5"></i>Back to list
        </div>
        <div className="row content-title rounded m-b-md">
          <div className="col-md-8">
            {!this.state.editingTitle && this.renderTitle(skit)}
            {this.state.editingTitle && this.renderTitleForm(skit)}
            <span className="skit-description clickable m-t-10">
              {!this.state.editingDescription && this.renderDescription(skit)}
              {this.state.editingDescription && this.renderDescriptionForm()}
            </span>
          </div>
          <div className="col-md-4">
            {!this.state.preview && <span
              className="rounded button button-success pull-right outset button-large"
              onClick={this.handlePreviewClick.bind(this)}><i className="fas fa-search m-r-5"></i> Preview</span>}
            {this.state.preview && <span
              className="rounded button button-danger pull-right outset button-large"
              onClick={this.handlePreviewClick.bind(this)}><i class="fas fa-sign-out-alt m-r-5"></i> Exit</span>}
          </div>
        </div>

        {this.state.preview && <MessageWindow messages={this.processMessages()}/>}
        {!this.state.preview && <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="skit-bots col-md-12">
                <BotList {...this.props} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <MessageList {...this.props} />
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default createFragmentContainer(Skit, {
  skit: graphql`
    fragment Skit_skit on Skit @argumentDefinitions(
        rows: {type: "Int", defaultValue: 100}
      ){
      id,
      skitid,
      title,
      created,
      last_updated,
      bots(first:$rows) @connection(key: "Skit_bots"){
        edges {
          node {
            id,
            botid,
            name
          }
        }
      },
      description,
      messages(first:$rows) @connection(key: "Skit_messages") {
        edges {
          node {
            id,
            messageid,
            text,
            author
            delay
          }
        }
      }
    }
  `
})
