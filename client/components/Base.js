import React from 'react';

import '../css/base.css';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="hello">
        {this.props.message}
      </div>
    )
  }
}
