import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {createSkit} from './CreateSkitMutation'
import {createBot} from './CreateBotMutation'

import './css/createskit.css';

var NUM_BOTS_PER_ROW = 4;

Array.prototype.diff = function(other) {
  let result = [...this];
  for (let elem of other) {
    let index = result.indexOf(elem);
    if (index > -1) {
      result.splice(index, 1);
    }
  }

  return result;
}

class CreateSkitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      availableBotsSelected: [],
      addedBotsSelected: [],
      name: "",
      addedBots: []
    }
  }

  componentDidMount() {

  }

  handleCancelClick() {
    this.props.history.push("/skits")
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

  handleSaveClick() {
    createSkit({
      'title': this.state.title,
      'description': this.state.description,
      bots: this.state.addedBots
    }, this.props.parentID, (id) => this.props.history.push(`/skits`))
  }

  handleCreateBot() {
    createBot({
      name: this.state.name
    }, this.props.bots.id, (botid) => {
      let bots = [...this.state.addedBots, botid];
      this.setState({addedBots: bots, name: ""})
      this.toggleCreateBot();
    })
  }

  handleCancelBot() {
    this.handleInputChange('name', {target: {value: ""}})
    this.toggleCreateBot();
  }

  addBot() {
    let bots = [...this.state.addedBots, ...this.state.availableBotsSelected];
    this.setState({addedBots: bots, availableBotsSelected: []})
  }

  removeBot() {
    let bots = [...this.state.addedBots];
    let finalBots = bots.diff(this.state.addedBotsSelected);
    this.setState({addedBots: finalBots, addedBotsSelected: []})
  }

  renderAddedBots() {

    if (this.state.addedBots.length == 0) {
      return <div className="muted">Selected bots will appear here.</div>
    }

    let bots =
      this.state.addedBots
        .map(bot => this.props.bots.bots.edges.find(edge => edge.node.botid == bot).node)
        .map(bot => {
          let classes = this.state.addedBotsSelected.indexOf(bot.botid) > -1 ? "selected" : "";
          return (
            <div className={classes} onClick={this.handleSelectChange.bind(this, bot.botid, 'addedBotsSelected')} key={bot.botid}>
              {bot.name}
            </div>)
        })

    return (
      <div>
        <div className="select-bots-wrapper inset">
          {bots}
        </div>
        <div
          className={"button button-danger" + (this.state.addedBotsSelected.length == 0 ? " disabled" : "")}
          onClick={(this.state.addedBotsSelected.length > 0 ? this.removeBot.bind(this) : () => {})}>
          <i className="fas fa-minus-circle m-r-5"></i>Remove
        </div>
      </div>
    )
  }

  renderAvailableBots() {
    let bots = [...this.props.bots.bots.edges];
    bots.sort((edgeA, edgeB) => edgeB.node.name.toUpperCase() < edgeA.node.name.toUpperCase())
    return bots
      .filter(edge => this.state.addedBots.indexOf(edge.node.id) == -1)
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

  render() {
    return (
      <div>
        <div className="outset create-form-wrapper rounded">
          <div className="content-title rounded m-b-md">
            Create Skit
            <span
              className="button button-danger pull-right outset m-l-10"
              onClick={this.handleCancelClick.bind(this)}>
              <i className="fas fa-ban m-r-5"></i>Cancel</span>
              <span
                className="button button-success pull-right outset"
                onClick={this.handleSaveClick.bind(this)}>
                <i className="fas fa-save m-r-5"></i>Save
              </span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group title-input">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="titleHelp"
                      placeholder="Enter a title."
                      value={this.state.title}
                      onChange={this.handleInputChange.bind(this, 'title')} />
                    <small id="titleHelp" className="form-text text-muted">Try to make this descriptive.</small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group description-input">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      placeholder="What are you trying to test?"
                      onChange={this.handleInputChange.bind(this, 'description')}></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Bots Available</label>
                    <div className="select-bots-wrapper inset">
                      {this.renderAvailableBots()}
                    </div>
                    <div
                      className={"button button-success" + (this.state.availableBotsSelected.length == 0 ? " disabled" : "")}
                      onClick={(this.state.availableBotsSelected.length > 0 ? this.addBot.bind(this) : () => {})}>
                      <i className="fas fa-plus-circle m-r-5"></i>Add
                    </div>
                    <span
                      className="m-l-10"
                      onClick={this.toggleCreateBot.bind(this)}>
                      Don't see the one you want? <span className="text-button text-success">Create it here.</span>
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
                    className={"button button-success m-l-10 m-t-25"}
                    onClick={this.handleCreateBot.bind(this)}>
                    <i className="fas fa-check"></i>
                  </div>
                  <div
                    className={"button button-danger m-l-10 m-t-25"}
                    onClick={this.handleCancelBot.bind(this)}>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <div className="bot-list">
                  <label htmlFor="exampleSelect1">Bots Added</label>
                  <br />
                  {this.renderAddedBots()}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(CreateSkitForm, {
  bots: graphql`
    fragment CreateSkitForm_bots on BotList @argumentDefinitions(
        rows: {type: "Int", defaultValue: 100}
      ) {
      id,
      bots (first: $rows) @connection(key: "CreateSkitForm_bots", filters: []){
        edges {
          node {
            id,
            botid,
            name
          }
        }
      }
    }
  `
})
