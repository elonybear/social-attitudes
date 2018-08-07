import React from 'react';

import {addMessage} from './AddMessageMutation';
import {removeMessage} from './RemoveMessageMutation'

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showForm: false,
      botSelected: "",
      delay: "",
      availableBotsSelected: []
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
    addMessage({
      skitid: this.props.skit.skitid,
      text: this.state.message,
      author:this.state.botSelected,
      delay:parseFloat(this.state.delay)
    }, this.props.skit.id, () => this.handleCancelClick())
  }

  handleCancelClick() {
    $('.message-form').slideUp();
    setTimeout(() => this.messageFormToggle(), 330)
  }

  handleRemoveMessage(messageid) {
    removeMessage({
      skitid: this.props.skit.skitid,
      messageid: messageid
    }, this.props.skit.id, () => console.log("It worked???"))
  }

  messageFormToggle() {
    this.setState({showForm: !this.state.showForm, message: "", botSelected: "", delay: ""});
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

    console.log(skit.messages)

    return skit.messages.edges
      .map(message => {
        return (
          <div key={message.node.messageid} className="skit-list-item">
            <div className="col-md-5"><span className="table-datum">{message.node.text}</span></div>
            <div className="col-md-3"><span className="table-datum">{this.props.bots.bots.edges.find(bot => bot.node.botid === message.node.author).node.name}</span></div>
            <div className="col-md-2"><span className="table-datum">{message.node.delay}</span></div>
            <div className="col-md-1" style={{color: '#EB1E32'}}>
              <span onClick={this.handleRemoveMessage.bind(this, message.node.messageid)}><i className="fas fa-minus-circle clickable" ></i></span>
            </div>
            <div className="col-md-3"></div>
          </div>
        )
      })
  }

  renderAvailableBots() {
    let bots = [...this.props.skit.bots.edges]
    bots.sort((edgeA, edgeB) => edgeB.node.name.toUpperCase() < edgeA.node.name.toUpperCase())
    return bots
      .map(edge => {
          let classes = this.state.availableBotsSelected.indexOf(edge.node.botid) > -1 ? "selected" : "";
          return (
            <option key={edge.node.id} value={edge.node.botid}>
              {edge.node.name}
            </option>)
      })
  }

  renderBotSelect() {
    return (
      <div className="form-group m-t-10">
        <select selected={this.state.botSelected} className="form-control" onChange={this.handleInputChange.bind(this, 'botSelected')}>
          <option value="">Select a bot</option>
          {this.renderAvailableBots()}
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
        <div key="add-bot" className="skit-list-item">
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
              {this.renderBotSelect()}
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
