import React from 'react';
import {Link} from 'react-router-dom'

import './css/navigationmenu.css';

export default class NavigationMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: [{
        'title': 'Dashboard',
        'route': '/dashboard'
      }, {
        'title': 'Recorded Conversations',
        'route': '/recorded'
      }, {
        'title': 'Users',
        'route': '/users'
      }, {
        'title': 'Skits',
        'route': '/skits'
      }, {
        'title': 'Settings',
        'route': '/settings'
      }],
    }

    console.log(this.props)

    this.state.active = this.state.tabs.findIndex(tab => this.props.location.pathname.indexOf(tab['route']) > -1)
  }

  handleClick(route, active) {
    if (this.state.active === active) return;
    this.setState({active})
    this.props.history.push(`${route}`)
  }

  renderTabs() {
    return this.state.tabs.map((tab, index) => {
      let classes = "nav-bar-item " + (index == this.state.active ? " active" : "")
      return (
        <div key={tab['title']} className={classes} onClick={this.handleClick.bind(this, tab['route'], index)}>
          {tab['title']}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="nav-bar rounded">
        {this.renderTabs()}
      </div>
    )
  }
}
