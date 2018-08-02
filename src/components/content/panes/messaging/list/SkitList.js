import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {createFragmentContainer, graphql, QueryRenderer} from 'react-relay';
import CreateSkitForm from '../create/CreateSkitForm';
import Skit from './Skit';
import environment from '../../../../../environment'


import './css/skitlist.css';

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

  handleItemClick(skit) {
    this.props.history.push(this.props.match.url + `/${skit.id}`)
  }

  militaryToStandard(time) {
    time = time.split(':'); // convert to array

    // fetch
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var seconds = Number(time[2]);

    // calculate
    var timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue= "" + hours;
    } else if (hours > 12) {
      timeValue= "" + (hours - 12);
    } else if (hours == 0) {
      timeValue= "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM
    return timeValue;
  }

  formatDate(fullDate) {
    let d = new Date(fullDate);
    let time = this.militaryToStandard(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    let date = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
    return `${time} ${date}`
  }

  renderSkits() {

    let edges = [...this.props.skits.skits.edges];

    edges.sort((edgeA, edgeB) => new Date(edgeB.node.last_updated) - new Date(edgeA.node.last_updated));

    return edges.map(edge => {
      let botNodes = edge.node.SkitList_bots.edges.map(bot => bot.node)
      return (
        <div key={edge.node.id} className="skit-list-item clickable" onClick={this.handleItemClick.bind(this, edge.node)}>
          <div className="col-md-3"><span className="table-datum">{edge.node.title}</span></div>
          <div className="col-md-2"><span className="table-datum">{edge.node.messages.edges.length}</span></div>
          <div className="col-md-3">{botNodes.map(bot => <div key={bot.id}>{bot.name}</div>)}</div>
          <div className="col-md-2"><div className="">{this.formatDate(edge.node.created)}</div></div>
          <div className="col-md-2"><span className="table-datum">{this.formatDate(edge.node.last_updated)}</span></div>
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
            <div className="col-md-2"># MESSAGES</div>
            <div className="col-md-3">BOTS</div>
            <div className="col-md-2">CREATED</div>
            <div className="col-md-2">LAST UPDATED</div>
          </div>
          <div className="row table-cells h-600 scrollbar">
            {this.renderSkits()}
          </div>
        </div>
      </div>
    )
  }

  renderQueryRenderer(routeProps) {
    console.log(routeProps)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
                query SkitList_Query($skitid: ID!) {
                  node(id: $skitid) {
                    ...Skit_skit
                  }
                }
              `}
        variables={{
          skitid: routeProps.match.params.id,
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <Skit {...routeProps} skit={props.node} bots={this.props.bots.bots}/>
            )
          }
          return <div>Loading</div>;
        }}
      />
    )
  }

  render() {

    return (
      <div className="">
        <div className="clearfix"></div>
        <Switch>
          <Route exact path={this.props.match.url} render={this.renderSkitList.bind(this)}/>
          <Route
            path={this.props.match.url + "/create"}
            render={(props) =>
              <CreateSkitForm {...this.props} parentID={this.props.skits.id} {...props} />} />
          <Route
            path={this.props.match.url + "/:id"}
            render={this.renderQueryRenderer.bind(this)} />
        </Switch>
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
            SkitList_bots: bots(first: $rows) @connection(key: "Skit_SkitList_bots") {
              edges {
                node {
                  id,
                  botid,
                  name
                }
              }
            },
            messages {
              edges {
                node {
                  id,
                }
              }
            },
            ...Skit_skit
          }
        }
      }
    }
  `,
  bots: graphql`
    fragment SkitList_bots on BotList @argumentDefinitions(
        rows: {type: "Int", defaultValue: 100}
      ){
      bots (first: $rows) @connection(key: "SkitList_bots", filters: []){
        edges {
          node {
            id,
            botid,
            name
          }
        }
      },
      ...CreateSkitForm_bots
    }
  `
})
