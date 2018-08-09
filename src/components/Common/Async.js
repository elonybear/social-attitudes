import React from 'react';

export default class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }


  componentWillMount() {
    this.props.load.then(Component => {
      this.setState({ module: Component.default })
    })
  }
  render() {
    const { module: Component } = this.state;
    return <div>{Component && <Component />}</div>
  }
}
