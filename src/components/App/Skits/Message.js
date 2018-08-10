import React from 'react';

export default class Message extends React.Component {
  render() {

    let message = this.props.message;

    let pull = message['source'] == 'bot' ? 'pull-left' : 'pull-right';

    return (
      <div className="full-width">
        <div className={"message " + pull}>
          {this.props.message.text}
        </div>
      </div>
    )
  }
}
