import React from 'react';

export default class Async extends React.Component {
  componentWillMount() {
    this.props.load.then(Component => {
      this.Component = Component
      this.forceUpdate()
    })
  }
  render() {
    return this.Component ? <this.Component.default /> : null
  }
}
