import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {Route} from 'react-router-dom';
import SkitUserList from './SkitUserList'
import MessageList from './MessageList'
import MessageWindow from './MessageWindow'

import {updateSkit} from './UpdateSkitMutation'

import './css/skit.css';

class Message {
  constructor(json) {
    if (json == null) return;
    for (let field in json) {
      this[field] = json[field];
    }
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
    document.getElementById(this.props.skit.skit_id + "-title").addEventListener("click", this.handleTextClick.bind(this, null));
    document.getElementById(this.props.skit.skit_id + "-title").addEventListener("keyup", this.handleKeypress.bind(this));
  }

  handlePreviewClick() {
    this.props.history.push(this.props.match.url + "/preview")
  }

  handleExitClick() {
    this.props.history.push(this.props.match.url)
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
        skit_id: this.props.skit.skit_id
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

  getBotForMessage(bot_id) {
    return this.props.bots.bots.edges.find(bot => bot.node.bot_id == bot_id).node;
  }

  processMessages() {
    return this.props.skit.messages.edges.map(message => {
      return new Message(message.node)
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

  renderSkitContent() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="skit-bots col-md-12">
              <SkitUserList {...this.props} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <MessageList {...this.props} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let skit = this.props.skit
    return (
      <div id="skit" className="skit-wrapper outset rounded">
        <div onClick={this.handleBackButton.bind(this)} className="clickable inline">
          <i className="fas fa-chevron-left m-r-5"></i>Back to list
        </div>
        <div id={this.props.skit.skit_id + "-title"} className="row content-title rounded m-b-md">
          <div className="col-md-8">
            {!this.state.editingTitle && this.renderTitle(skit)}
            {this.state.editingTitle && this.renderTitleForm(skit)}
            <span className="skit-description clickable m-t-10">
              {!this.state.editingDescription && this.renderDescription(skit)}
              {this.state.editingDescription && this.renderDescriptionForm()}
            </span>
          </div>
          <div className="col-md-4">
            <Route exact path={this.props.match.url} render={(props) => <span
              className="rounded button button-success pull-right outset button-large"
              onClick={this.handlePreviewClick.bind(this)}><i className="fas fa-search m-r-5"></i> Preview</span>} />
            <Route path={this.props.match.url + "/preview"} render={(props) => <span
              className="rounded button button-danger pull-right outset button-large"
              onClick={this.handleExitClick.bind(this)}><i className="fas fa-sign-out-alt m-r-5"></i> Exit</span>} />
          </div>
        </div>
        <Route path={this.props.match.url + "/preview"} render={(props) => <MessageWindow messages={this.processMessages()} users={this.props.skit.users} {...props} />} />
        <Route exact path={this.props.match.url} component={this.renderSkitContent.bind(this)} />
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
      skit_id,
      title,
      created,
      last_updated,
      users(first:$rows) @connection(key: "Skit_users"){
        edges {
          node {
            id,
            user_id,
            first_name,
            last_name
          }
        }
      },
      description,
      messages(first:$rows) @connection(key: "Skit_messages") {
        edges {
          node {
            id,
            message_id,
            text,
            user_id
            delay,
            type,
            position
          }
        }
      }
    }
  `
})
