import React from 'react';

import './css/header.css';

export default class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="pull-left company-title">Social Attitudes</div>
              <div className="pull-left service-title">Survey</div>
            </a>
            <a className="navbar-brand" href="#">
              <div className="tool-title">| Admin</div>
            </a>
          </div>
        </div>
      )
    }
}
