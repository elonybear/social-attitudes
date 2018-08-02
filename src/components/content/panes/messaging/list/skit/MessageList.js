import React from 'react';

export default class MessageList extends React.Component {

  handleAddMessage() {

  }

  renderMessages() {
    let skit = this.props.skit;
    if (skit.messages.edges.length == 0) {
      return (
        <div>
          <div className="no-results">
            <div className="italic m-b-5">There are no messages in this conversation.</div>
            <div className="text-button text-success">
              <i className="fas fa-plus-circle m-r-5"></i>Add one now.
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="outset skit-table">
        <div className="table-header">
          Messages
        </div>
        <div className="row table-headers m-lr-5">
          <div className="col-md-6">MESSAGE</div>
          <div className="col-md-4">BOT</div>
          <div className="col-md-2">DELAY</div>
        </div>
        <div className="row table-cells">
          {this.renderMessages()}
        </div>
      </div>
    )
  }
}
