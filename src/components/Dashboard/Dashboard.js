import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Async from '../Common/Async';

// const Tile = () => <Async load={import(/* webpackChunkName: "Tile" */ './Tile')} />
import Tile from './Tile';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: []
    }

    this.state = {
      metrics: {
        unique_users: {
          subtitle:'unique users',
          value: props.allUsers.count,
          color: '#62b8ff',
          button: 'Users',
          component: <div></div>
        },
        skits_created: {
          subtitle: 'skits created',
          value: 8,
          color: 'rgb(126, 235, 105)',
          button: 'Skits',
          component: <div></div>
        },
        avg_msg_sent: {
          subtitle: 'messages sent on average',
          value: 13,
          color: 'rgb(255, 155, 98)',
          button: 'Graph',
          component: <div></div>
        },
        conversations_recorded: {
          subtitle: 'conversations recorded',
          value: 32,
          color: 'rgb(186, 98, 255)',
          button: 'Conversations',
          component: <div></div>
        },
        bots_created: {
          subtitle: 'robots created',
          value:3,
          color: '#e2eb4c',
          button: 'Robots',
          component: <div></div>
        },
        avg_time_to_initiate: {
          subtitle: 'seconds before first message',
          value:15.82,
          color: '#ff4747',
          button: 'Graph',
          component: <div></div>
        },
      }
    }
  }

  componentWillReceiveProps(newProps) {

  }

  renderMetrics() {

    let metrics = Object.keys(this.state.metrics)

    let metricsHtml = []

    for (let i = 0; i < metrics.length; i += 2) {
      metricsHtml.push(
        <div className="metricRow" key={metrics[i] + "_" + metrics[i + 1]}>
          <div className="row">
            <div className="col-md-6">
              <Tile name={metrics[i]} metric={this.state.metrics[metrics[i]]}/>
            </div>
            <div className="col-md-6">
              <Tile name={metrics[i + 1]} metric={this.state.metrics[metrics[i + 1]]}/>
            </div>
          </div>
        </div>
      )
    }

    return metricsHtml;
  }

  render() {
    return (
      <div>
        {this.renderMetrics()}
      </div>
    )
  }
}

export default createFragmentContainer(Dashboard, {
  allUsers: graphql`
    fragment Dashboard_allUsers on UserList {
      count
    }
  `
})
