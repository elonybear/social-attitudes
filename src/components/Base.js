import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import Dashboard from './content/panes/dashboard/Dashboard';
import UserList from './content/panes/users/UserList';
import NavigationMenu from './navigation/NavigationMenu';
import Message from './content/panes/messaging/user/Message';
import MessageWindow from './content/panes/messaging/user/MessageWindow';
import Pane from './content/Pane';
import SkitList from './content/panes/messaging/list/SkitList'

import { QueryRenderer } from 'react-relay';
import environment from '../environment';

import './css/base.css';

export default class Base extends React.Component {

  componentWillMount() {
    // this.props.history.push('/skits');
  }

  renderPane(Component, queryProps, routerProps) {
    return <Component {...queryProps} {...routerProps} />
  }

  render() {
    return (
      <div className="base">
        <Route path="/" component={Header} />
        <div className="main-wrapper">
          <div className="">
            <div className="col-md-2">
              <Route path="/" component={NavigationMenu} />
            </div>
            <div className="col-md-10">
              <QueryRenderer
                environment={environment}
                query={graphql`
                        query Base_Query {
                          users {
                            ...Dashboard_users,
                            ...UserList_users,
                          },
                          skits {
                            ...SkitList_skits
                          },
                          bots {
                            ...SkitList_bots
                          }
                        }
                      `}
                render={({error, props}) => {
                  if (error) {
                    return <div>{error.message}</div>;
                  } else if (props) {
                    return (
                      <Switch>
                        <Route path="/dashboard" render={this.renderPane.bind(this, Dashboard, props)} />
                        <Route path="/skits" render={this.renderPane.bind(this, SkitList, props)}/>
                      </Switch>
                    )
                  }
                  return <div>Loading</div>;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
