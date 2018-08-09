import React from 'react';

import {createMessage} from './CreateMessageMutation';
import {deleteMessage} from './DeleteMessageMutation'

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showForm: false,
      userSelected: -1,
      delay: "",
      availableUsersSelected: []
    }
  }

  handleInputChange(field, event) {
    let value = event.target.value;
    if (field == 'delay' && event.target.value <= 0) {
      value = "";
    }

    this.setState({[field]: value});
  }

  handleCreateMessage() {
    createMessage({
      skit_id: this.props.skit.skit_id,
      text: this.state.message,
      user_id:this.state.userSelected,
      delay:parseFloat(this.state.delay),
      type: 'RECEIVE',
      position: this.props.skit.messages.edges.length
    }, this.props.skit.id, () => this.handleCancelClick())
  }

  handleCancelClick() {
    $('.message-form').slideUp();
    setTimeout(() => this.messageFormToggle(), 330)
  }

  handleRemoveMessage(message_id) {
    deleteMessage({
      message_id: message_id
    }, this.props.skit.id, () => console.log("It worked???"))
  }

  messageFormToggle() {
    this.setState({showForm: !this.state.showForm, message: "", userSelected: -1, delay: ""});
  }

  renderMessages() {
    let skit = this.props.skit;
    if (skit.messages.edges.length == 0 && !this.state.showForm) {
      return (
        <div>
          <div className="no-results">
            <div className="italic m-b-5">There are no messages in this skit.</div>
            <div className="text-button text-success" onClick={this.handleAddMessage.bind(this)}>
              <i className="fas fa-plus-circle m-r-5"></i>Add one now.
            </div>
          </div>
        </div>
      )
    }

    return skit.messages.edges
      .map(message => {
        let user = this.props.users.userList.edges.find(user => user.node.user_id === message.node.user_id).node
        return (
          <div key={message.node.id} className="skit-list-item">
            <div className="col-md-5"><span className="table-datum">{message.node.text}</span></div>
            <div className="col-md-3"><span className="table-datum">{user.first_name} {user.last_name}</span></div>
            <div className="col-md-2"><span className="table-datum">{message.node.delay}</span></div>
            <div className="col-md-1" style={{color: '#EB1E32'}}>
              <span onClick={this.handleRemoveMessage.bind(this, message.node.message_id)}><i className="fas fa-minus-circle clickable" ></i></span>
            </div>
            <div className="col-md-3"></div>
          </div>
        )
      })
  }

  renderAvailableUsers() {
    let users = [...this.props.skit.users.edges]
    users.sort((edgeA, edgeB) => (`${edgeB.node.first_name} ${edgeB.node.last_name}`).toUpperCase() < (`${edgeA.node.first_name} ${edgeA.node.last_name}`).toUpperCase())
    return users
      .map(edge => {
          let classes = this.state.availableUsersSelected.indexOf(edge.node.user_id) > -1 ? "selected" : "";
          return (
            <option key={edge.node.id} value={edge.node.user_id}>
              {edge.node.first_name} {edge.node.last_name}
            </option>)
      })
  }

  renderUserSelect() {
    return (
      <div className="form-group m-t-10">
        <select value={this.state.userSelected} className="form-control" onChange={this.handleInputChange.bind(this, 'userSelected')}>
          <option value="">Select a user</option>
          {this.renderAvailableUsers()}
        </select>
      </div>
    )
  }

  handleAddMessage() {
    $('.message-form').slideDown();
    this.messageFormToggle();
  }

  renderAddButton() {
    return (
      <div className="">
        <div key="add-user" className="skit-list-item">
          <div className="col-md-5" onClick={this.handleAddMessage.bind(this)}>
            {!this.state.showForm && <span className="text-button text-success">
              <i className="fas fa-plus-circle m-r-5"></i>Add Message
            </span>}
          </div>
        </div>
      </div>
    )
  }

  renderMessageForm() {
    return (
      <div className="message-form" style={{display: "none"}}>
        <div className="row create-message m-t-5">
          <div className="col-md-12">
            <div className="col-md-5">
              <div className="">
                <textarea
                  type="text"
                  className="form-control"
                  id="text"
                  rows="2"
                  placeholder="Enter a message."
                  value={this.state.message}
                  onChange={this.handleInputChange.bind(this, 'message')}></textarea>
              </div>
            </div>
            <div className="col-md-3">
              {this.renderUserSelect()}
            </div>
            <div className="col-md-1">
              <input
                type="number"
                step="0.1"
                className="form-control m-t-10"
                placeholder="0.0"
                min="0"
                value={this.state.delay}
                onChange={this.handleInputChange.bind(this, 'delay')} />
            </div>
            <div className="col-md-3" style={{marginTop: "3px"}}>
              <span
                className="button button-danger outset m-l-10 rounded pull-right"
                onClick={this.handleCancelClick.bind(this)}>
                <i className="fas fa-ban m-r-5"></i>Cancel</span>
              <div
                className={"button button-success outset rounded pull-right"}
                onClick={this.handleCreateMessage.bind(this)}>
                <i className="fas fa-plus-circle m-r-5"></i>Create
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="outset skit-table">
        <div className="table-header">
          Messages
        </div>
        <div className="row table-headers m-lr-5">
          <div className="col-md-5">MESSAGE</div>
          <div className="col-md-3">AUTHOR</div>
          <div className="col-md-1">DELAY (sec)</div>
          <div className="col-md-3"></div>
        </div>
        <div className="row table-cells">
          {this.renderMessages()}
          {this.props.skit.messages.edges.length > 0 && this.renderAddButton()}
          {this.renderMessageForm()}
        </div>
      </div>
    )
  }
}
