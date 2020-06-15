import React from "react";
import { connect } from "react-redux";
import { submitMessage } from "../actions";

export class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  handleMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  clearMessage() {
    this.setState({
      message: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.message === "") {
      return;
    }

    let messageObj = {
      message: this.state.message,
      messageTime: new Date().toString(),
    };

    this.clearMessage();

    this.props.submitMessage(messageObj);
  }

  render() {
    return (
      <div>
        <form id="text_messages" onSubmit= {this.handleSubmit}>
          <textarea
            id="messages"
            placeholder="Type your message here !"
            value = {this.state.message}
            onChange = {this.handleMessage}
          ></textarea>
          <input className="text_button" type="submit" value="Submit" />
          <input
            className="text_button"
            type="button"
            value="Clear"
            onClick= {this.clearMessage}
          />
        </form>
      </div>
    );
  }
}

export default connect (null, { submitMessage })(InputMessage);
