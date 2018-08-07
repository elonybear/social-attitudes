import React from 'react';

import {removeBot} from './RemoveBotMutation'
import {addBots} from './AddBotsMutation.js';
import {createAndAddBot} from './CreateAndAddBotMutation';

export default class BotList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      availableBotsSelected: [],
      name: ""
    }
  }

  componentDidMount() {
    tippy('.warning', {
      arrow: true,
      size: 'large',
      placement: 'top'
    })

    tippy('.healthy', {
      arrow: true,
      size: 'large',
      placement: 'top'
    })
  }

  handleAddBot() {
    this.setState({adding: true})
    $('.add-form').slideDown();
  }

  handleCancelClick() {
    $('.add-form').slideUp();
    setTimeout(() => this.setState({adding: false, availableBotsSelected: []}), 330)
  }

  getMessagesForBot(botid) {
    return this.props.skit.messages.edges.filter(edge => edge.node.author == botid)
  }

  handleInputChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  handleSelectChange(botid, field) {
    let botsSelected = [...this.state[field]];
    let index = botsSelected.indexOf(botid);
    if (index > -1) {
      botsSelected.splice(index, 1);
    } else {
      botsSelected.push(botid);
    }
    this.setState({[field]: botsSelected});
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
    let bots = this.props.bots.bots

    if (skit.bots.edges.length == 0) {
      return (
        <div>
          {!this.state.adding && <div className="no-results">
            <div className="italic m-b-5">There are no bots in this skit.</div>
            <div className="text-button text-success"  onClick={this.handleAddBot.bind(this)}>
              <i className="fas fa-plus-circle m-r-5"></i>Add one now.
            </div>
          </div>}
        </div>
      )
    }

    return skit.bots.edges
      .map(bot => {
        let numMessages = this.getMessagesForBot(bot.node.botid).length;

        let icon = null

        if (bot.node.botid == "225dd6d0-1ae9-4ced-a493-61520547a5b7") {
          console.log(JSON.stringify(numMessages));
        }

        if (numMessages > 0) {
          icon = <div title="This bot is a part of the conversation!" className="healthy"><i style={{color: '#1ED760'}} className="fas fa-check-circle"></i></div>
        } else {
          icon = <div title="This bot is feeling left out!" className="warning"><i style={{color: '#F59B23'}} className="fas fa-exclamation-triangle"></i></div>
        }

        return (
          <div key={bot.node.botid} className="skit-list-item">
            {/* <div className="col-md-1">{icon}</div> */}
            <div className="col-md-5"><span className="table-datum">{bot.node.name}</span></div>
            <div className="col-md-4"><span className="table-datum">{numMessages}</span></div>
            <div className="col-md-1" style={{color: '#EB1E32'}}>
              <span onClick={this.handleRemoveBot.bind(this, bot.node.botid)}><i className="fas fa-minus-circle clickable" ></i></span>
            </div>
          </div>
        )
      })
  }

  addBot() {
    addBots({
      skitid: this.props.skit.skitid,
      botids: [...this.state.availableBotsSelected, ...this.props.skit.bots.edges.map(edge => edge.node.botid)],
      newBots: this.state.availableBotsSelected
    }, this.props.skit.id, () => console.log('It WORKS!'))
  }

  renderAddButton() {
    return (
      <div className="row">
        <div key="add-bot" className="skit-list-item">
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-5" onClick={this.handleAddBot.bind(this)}>
            {!this.state.adding && <span className="text-button text-success">
              <i className="fas fa-plus-circle m-r-5"></i>Add Bot
            </span>}
          </div>
        </div>
      </div>
    )
  }

  renderAvailableBots() {
    let bots = [...this.props.bots.bots.edges];
    bots.sort((edgeA, edgeB) => edgeB.node.name.toUpperCase() < edgeA.node.name.toUpperCase())
    let skitBotIds = this.props.skit.bots.edges.map(bot => bot.node.id);
    return bots
      .filter(edge => skitBotIds.indexOf(edge.node.id) == -1)
      .map(edge => {
          let classes = this.state.availableBotsSelected.indexOf(edge.node.botid) > -1 ? "selected" : "";
          return (
            <div
              className={classes}
              onClick={this.handleSelectChange.bind(this, edge.node.botid, 'availableBotsSelected')}
              key={edge.node.botid}
              value={edge.node.botid}>
              {edge.node.name}
            </div>)
      })
  }

  toggleCreateBot() {
    if($('.create-bot').css('display') == 'none') {
        $('.create-bot').slideDown();
    } else {
      $('.create-bot').slideUp();
    }

  }

  handleCreateBot() {
    createAndAddBot({
      name: this.state.name,
      skitid: this.props.skit.skitid,
      botids: this.props.skit.bots.edges.map(edge => edge.node.botid)
    }, this.props.bots.id, this.props.skit.id, () => console.log('It worked???'))
  }

  handleCancelBot() {
    this.handleInputChange('name', {target: {value: ""}})
    this.toggleCreateBot();
  }

  renderAddForm() {
    return (
      <div className="add-form" style={{display:"none"}}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group p-10">
              <div className="select-bots-wrapper inset">
                {this.renderAvailableBots()}
              </div>
              <div
                className={"rounded button button-success" + (this.state.availableBotsSelected.length == 0 ? " disabled" : "")}
                onClick={(this.state.availableBotsSelected.length > 0 ? this.addBot.bind(this) : () => {})}>
                <i className="fas fa-plus-circle m-r-5"></i>Add
              </div>
              <span
                className="rounded button button-danger outset m-l-10"
                onClick={this.handleCancelClick.bind(this)}>
                <i className="fas fa-ban m-r-5"></i>Cancel</span>
              <span
                className="m-l-10">
                Don't see the one you want? <span onClick={this.toggleCreateBot.bind(this)} className="text-button text-success">Create it here.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row create-bot" style={{display:"none"}}>
          <div className="col-md-12">
            <div className="col-md-8">
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter a name."
                  value={this.state.name}
                  onChange={this.handleInputChange.bind(this, 'name')} />
                <small id="titleHelp" className="form-text text-muted">It helps for it to be unique.</small>
              </div>
            </div>
            <div
              className={"rounded button button-success m-l-10 m-t-25"}
              onClick={this.handleCreateBot.bind(this)}>
              <i className="fas fa-check"></i>
            </div>
            <div
              className={"rounded button button-danger m-l-10 m-t-25"}
              onClick={this.handleCancelBot.bind(this)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="outset skit-table">
          <div className="table-header">
            Bots
          </div>
          <div className="row table-headers m-lr-5">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-5">NAME</div>
            <div className="col-md-4"># MESSAGES</div>
          </div>
          <div className="row table-cells">
            {this.renderBots()}
          </div>
          {this.props.skit.bots.edges.length > 0 && this.renderAddButton()}
          {this.renderAddForm()}
        </div>
      </div>
    )
  }
}
