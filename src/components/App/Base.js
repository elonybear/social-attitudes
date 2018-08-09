import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const Header = () => <Async load={import(/* webpackChunkName: "Header" */ './Header')} />
const Dashboard = () => <Async load={import(/* webpackChunkName: "Dashboard" */ './../Dashboard/Dashboard')} />
const UserList = () => <Async load={import(/* webpackChunkName: "UserList" */ '../Users/UserList')} />
const NavigationMenu = () => <Async load={import(/* webpackChunkName: "NavigationMenu" */ '../Navigation/NavigationMenu')} />
const Pane = () => <Async load={import(/* webpackChunkName: "Pane" */ '../Common/Pane')} />
const SkitList = () => <Async load={import(/* webpackChunkName: "SkitList" */ '../Skits/SkitList')} />
import Async from '../Common/Async';

import { QueryRenderer } from 'react-relay';
import environment from '../../environment';

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
                          allUsers: users(type:USER) {
                            ...Dashboard_allUsers,
                            ...UserList_users,
                          },
                          skits {
                            ...SkitList_skits
                          },
                          users (type:BOT) {
                            ...SkitList_users
                          }
                        }
                      `}
                render={({error, props}) => {
                  if (error) {
                    return <div>{error.message}</div>;
                  } else if (props) {
                    return (
                      <div>
                        <Switch>
                          <Route exact path="/" render={this.renderPane.bind(this, Dashboard, props)} />
                          <Route path="/skits" render={this.renderPane.bind(this, SkitList, props)}/>
                        </Switch>
                      </div>
                    )
                  }
                  return <div>Loading</div>;
                }}
              />
            </div>
          </div>
        </div>
        <Route path="*/test" render={() => <div>Test</div>} />
      </div>
    )
  }
}
