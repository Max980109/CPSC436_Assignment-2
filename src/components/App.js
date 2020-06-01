import React from "react";
import MessageList from "./messageList";
import InputMessage from "./inputMessage";
import { connect } from "react-redux";
import "../index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul id="nav_bar">
            <li className="nav_item">
              <a className="active" href="index.html">Application</a></li>
            <li className="nav_item"><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <InputMessage />
        <MessageList />
      </div>
    );
  }
}

export default connect()(App);
