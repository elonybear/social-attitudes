import React from 'react';
import {Route} from 'react-router-dom';
import {createFragmentContainer, graphql} from 'react-relay';
import CreateSkitForm from '../create/CreateSkitForm';


import './css/conversationlist.css';

Array.prototype.flatMap = function(callback) {
  let result = []

  for (let i of this) {
    result = result.concat(callback(i))
  }

  return result;
}

class SkitList extends React.Component {

  handleCreateClick() {
    this.props.history.push(this.props.match.url + "/create")
  }

  renderConversations() {

    let edges = this.props.skits.skits.edges;
    let allBots = edges.flatMap(edge => edge.node.messages.edges.map(message => message.node.authorName));
    let bots = new Set(["john", "elon"])

    return edges.map(edge => {
      return (
        <div key={edge.node.id} className="row conversation-list-item">
          <div className="col-md-3"><span className="table-datum">{edge.node.title}</span></div>
          <div className="col-md-2"><span className="table-datum">{edge.node.messages.edges.length}</span></div>
          <div className="col-md-1">{Array.from(bots).map(bot => <div key={bot}>{bot}</div>)}</div>
          <div className="col-md-3"><div className="">{edge.node.created}</div></div>
          <div className="col-md-3"><span className="table-datum">{edge.node.last_updated}</span></div>
        </div>
      )
    })
  }

  renderSkitList() {
    return (
      <div>
        <div className="conversation-list-wrapper outset rounded">
          <div className="content-title rounded m-b-md">
            Skits
            <span
              className="button button-success pull-right outset"
              onClick={this.handleCreateClick.bind(this)}><i className="fas fa-plus m-r-5"></i> Create New Skit</span>
          </div>
          <div className="row table-headers m-lr-5">
            <div className="col-md-3">TITLE</div>
            <div className="col-md-2">LENGTH (# MESSAGES)</div>
            <div className="col-md-1">BOTS</div>
            <div className="col-md-3">CREATED</div>
            <div className="col-md-3">LAST UPDATED</div>
          </div>
          <div className="table-cells">
            {this.renderConversations()}
          </div>
        </div>
      </div>
    )
  }

  render() {

    console.log(this.props)

    return (
      <div className="">
        <div className="clearfix"></div>
        <Route exact path={this.props.match.url} render={this.renderSkitList.bind(this)}/>
        <Route exact path={this.props.match.url + "/create"} render={(props) => <CreateSkitForm {...this.props} parentID={this.props.skits.id} {...props} />} />
      </div>
    )
  }
}

export default createFragmentContainer(SkitList, {
  skits: graphql`
    fragment SkitList_skits on SkitList @argumentDefinitions(
        rows: {type: "Int", defaultValue: 100}
      ){
      id,
      skits(first: $rows) @connection(key: "SkitList_skits", filters: []) {
        edges {
          node {
            id,
            title,
            created,
            last_updated,
            messages {
              edges {
                node {
                  text,
                  authorName
                  delay
                }
              }
            }
          }
        }
      }
    }
  `,
  bots: graphql`
    fragment SkitList_bots on BotList {
      ...CreateSkitForm_bots
    }
  `
})
