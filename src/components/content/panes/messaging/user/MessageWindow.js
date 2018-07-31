import React from 'react';

import './css/window.css';

class Message {
  constructor(type, author, text, delay) {
    this.type = type;
    this.author = author;
    this.text = text;
    this.delay = delay;
  }
}

export default class MessageWindow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
        new Message(
          'receive',
          'Jim',
          "Hey, I know I forgot to bring a check. Don't worry, I'll bring one next time. 🙂",
          .5),
        new Message(
          'send',
          'You',
          "Ok, no problem. But don't forget about last weeks payment too.",
          1),
        new Message(
          'receive',
          'Tony',
          "Oh yeah! I'll include that too.",
          .75),
        new Message(
          'send',
          'You',
          "Great, are we still on for today?",
          1.4),
        new Message(
          'receive',
          'Jim',
          "🤷‍♂️ I forgot to tell you! I'm out of town so I need to cancel.",
          .9),
        new Message(
          'send',
          'You',
          "🤦‍♀️",
          1),
      ],
      toRender: [],
      startDelay: .5,
      userMessage: ""
    }
  }

  componentDidMount() {
    let delay = this.state.startDelay;

    for (let message of this.state.messages) {
      let toRender = this.state.toRender;
      console.log(delay);
      setTimeout(() => {
        toRender.push(message);
        this.setState({toRender});
      }, delay * 1000);
      delay += message.delay;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.messages.length - prevState.messages.length == 1) {
      var objDiv = document.getElementById("msg-content");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }

  handleChange(event) {
    this.setState({userMessage: event.target.value})
  }

  handleKeyPress(event) {
    if(event.key == 'Enter' && this.state.userMessage.length > 0){
      let messages = [...this.state.messages];
      messages.push(new Message('send', 'You', this.state.userMessage))
      this.setState({messages, userMessage: ""})
    }
  }

  renderMessages() {
    return this.state.toRender.map((message, index) => {
      return (
        <div className={`msg-wrapper`} key={index}>
          <div className={`msg-${message.type}`}>
            <div className="msg-author">
              <div className={`msg-author-inner-${message.type}`}>{message.author}</div>
            </div>
            <div className={`msg-text msg-${message.type}-text`}>
              {message.text}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="msg-container pv4 ph4 br3 center bg-white shadow-6">
        <div id="msg-content" className="msg-content w-100 relative">
          <p className="conversation-start">
            This is the start of your conversation with Jim and Tony.
            <br />
            07/03/18, 3:21 AM
          </p>
          {this.renderMessages()}
        </div>
        <div className="message-text-box">
          <input
            type="text"
            placeholder="Send message"
            value={this.state.userMessage}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)} />
        </div>
      </div>
    )
  }
}