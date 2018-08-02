import React from 'react';

import {removeBot} from './RemoveBotMutation'

export default class BotList extends React.Component {

  componentDidMount() {
    tippy('.warning', {
      arrow: true,
      size: 'large',
      placement: 'top'
    })
  }

  handleAddBot() {
    // this.props.history.push(`${this.props.match.url}/test`, this.props.location.state)
  }

  getMessagesForBot(botName) {
    return this.props.skit.messages.edges.filter(edge => edge.node.authorName == botName)
  }

  handleRemoveBot(botid) {
    removeBot({
      skitid: this.props.skit.skitid,
      bots: this.props.skit.bots.edges
        .filter(edge => edge.node.botid != botid)
        .map(edge => edge.node.botid),
      victim: botid
    }, this.props.skit.id, (id) => console.log("Successfully removed " + id));
  }

  renderBots() {
    let skit = this.props.skit
    let bots = this.props.bots

    if (skit.bots.length == 0) {
      return (
        <div className="no-results">
          There are no bots in this conversation.
        </div>
      )
    }

    console.log(bots)

    return skit.bots.edges
      .map(bot => {
        let numMessages = this.getMessagesForBot(bot.node.name).length;

        let icon = null

        if (numMessages > 0) {
          icon = <div className="healthy"><i style={{color: '#1ED760'}} className="fas fa-check-circle"></i></div>
        } else {
          icon = <div title="This bot doesn't have any messages!" className="warning"><i style={{color: '#F59B23'}} className="fas fa-exclamation-triangle"></i></div>
        }

        return (
          <div key={bot.node.id} className="skit-list-item">
            <div className="col-md-1">{icon}</div>
            <div className="col-md-5"><span className="table-datum">{bot.node.name}</span></div>
            <div className="col-md-4"><span className="table-datum">{numMessages}</span></div>
            <div className="col-md-1" style={{color: '#EB1E32'}}>
              <span onClick={this.handleRemoveBot.bind(this, bot.node.botid)}><i className="fas fa-minus-circle clickable" ></i></span>
            </div>
          </div>
        )
      })
  }

  render() {
    return (
      <div>
        <div className="outset skit-table">
          <div className="table-header">
            Bots
          </div>
          <div className="row table-headers m-lr-5">
            <div className="col-md-1"></div>
            <div className="col-md-5">NAME</div>
            <div className="col-md-4"># MESSAGES</div>
          </div>
          <div className="row table-cells">
            {this.renderBots()}
            <div key="add-bot" className="skit-list-item">
              <div className="col-md-1"></div>
              <div className="col-md-5" onClick={this.handleAddBot.bind(this)}>
                <span className="table-datum text-button text-success">
                  <i className="fas fa-plus-circle m-r-5"></i>Add Bot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
