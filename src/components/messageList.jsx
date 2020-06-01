import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../actions";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantToShow: false,
      details: [],
    };
    this.deleteMessage = this.deleteMessage.bind(this);
    this.initialization = this.initialization.bind(this);
    this.createStateArray = this.createStateArray.bind(this);
    this.showDetail = this.showDetail.bind(this);
    //this.clearList = this.clearList.bind(this);
  }

  deleteMessage(index) {
    this.props.deleteMessage(index);
  }

  initialization() {
    let flag = this.state.wantToShow;
    
    if (flag) {
      this.setState({ wantToShow: false });
      this.createStateArray();
    } else {
      return null;
    }
  }

  createStateArray() {
    let ary = [];
    for (let i = 0; i < this.props.messageArray.length; i++) {
      ary.push(true);
    }
    this.setState({ details: ary });
  }

  showDetail(index) {
    let details = this.state.details;
    details[index] = !details[index];
    this.setState({ details: details });
  }

//   clearList (event) {
//       this.props.messageArray = [];
//       this.setState();
//   }



  render() {
    this.initialization();
    let messageArray = this.props.messageArray;
    const MessagesTOShow = [];
    for (let index = 0; index < messageArray.length; index++) {
      let temp = (
        <li key={index}>
          <button className="delete" onClick={() => this.showDetail(index)}>
            Detail
          </button>
          <button className="delete" onClick={() => this.deleteMessage(index)}>
            Delete
          </button>
          {messageArray[index].message}
          {this.state.details[index] ? (
            <div> created time: {messageArray[index].messageTime}</div>
          ) : null}
        </li>
      );
      MessagesTOShow.push(temp);
    }

    return (
        <div id="message_container">
          <ul id="message_list">{MessagesTOShow}</ul>
        </div>
    );
  }
}

const mapState = (state) => {
    return {
        messageArray: state.messageArray
    };
};

export default connect(mapState, {deleteMessage})(MessageList);
