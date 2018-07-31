import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {createSkit} from './CreateSkitMutation'

import './css/createskit.css';

var NUM_BOTS_PER_ROW = 4;

class CreateSkitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      selectedBot: "",
      name: "",
      bots: []
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

  handleSelectChange(field, event) {
    this.setState({[field]: event.target.value})
  }

  handleSaveClick() {
    createSkit({
      'title': this.state.title,
      bots: this.state.bots
    }, this.props.parentID, (id) => this.props.history.push(`/skits`))
  }

  handleCreateBot() {

  }

  handleCancelBot() {
    this.handleInputChange('name', {target: {value: ""}})
    this.renderCreate();
  }

  addBot() {
    let bots = [...this.state.bots, this.state.selectedBot];
    this.setState({bots, selectedBot: ""})
  }

  renderSelectedBots() {

    if (this.state.bots.length == 0) {
      return <div className="muted">Selected bots will appear here.</div>
    }

    return this.state.bots.map(bot => this.props.bots.bots.edges.find(edge => edge.node.id == bot).node.name).join(" | ");
  }

  renderCreate() {
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
            <div className="col-md-6">
              <div className="form-group description-input">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="Enter a description."
                  onChange={this.handleInputChange.bind(this, 'description')}></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleSelect1">Bots Available</label>
                <select
                  selected={this.state.selectedBot}
                  className="form-control"
                  id="exampleSelect1"
                  onChange={this.handleSelectChange.bind(this, 'selectedBot')}>
                  <option value="">Select a bot</option>
                  {this.props.bots.bots.edges.filter(edge => this.state.bots.indexOf(edge.node.id) == -1).map(edge =>
                    <option key={edge.node.id} value={edge.node.id}>{edge.node.name}</option>)}
                </select>
                <div
                  className={"button button-success" + (this.state.selectedBot.length == 0 ? " disabled" : "")}
                  onClick={(this.state.selectedBot.length > 0 ? this.addBot.bind(this) : () => {})}>
                  <i className="fas fa-plus m-r-5"></i> Add Bot
                </div>
                <span
                  className="m-l-10"
                  onClick={this.renderCreate.bind(this)}>
                  Don't see the one you want? <span className="text-button text-success">Create it here.</span>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bot-list">
                <label htmlFor="exampleSelect1">Bots Added</label>
                <br />
                {this.renderSelectedBots()}
              </div>
            </div>
          </div>
          <div className="row create-bot" style={{display:"none"}}>
            <div className="col-md-6">
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
          <br />
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(CreateSkitForm, {
  bots: graphql`
    fragment CreateSkitForm_bots on BotList {
      bots {
        edges {
          node {
            id,
            name
          }
        }
      }
    }
  `
})
