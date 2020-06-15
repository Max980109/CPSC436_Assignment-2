import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../actions";
import { clearList } from "../actions";

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
    this.clearList = this.clearList.bind(this);
  }

  deleteMessage(index) {
    this.props.deleteMessage(index);
  }

  clearList () {
    this.props.clearList();
  }

  initialization() {
    let flag = this.state.wantToShow;
    
    if (flag) {
      return null;
    } else {
      this.setState({wantToShow: true});
      this.createStateArray();
    }
  }

  createStateArray() {
    let ary = [];
    for (let i = 0; i < this.props.messageArray.length; i++) {
      ary.push(false);
    }
    this.setState({ details: ary });
  }

  showDetail(index) {
    let details = this.state.details;
    details[index] = !details[index];
    this.setState({ details: details });
  }

  
  render() {
    this.initialization();
    let messageArray = this.props.messageArray;

    const MessagesToShow = messageArray.map((messageItem, index) =>
      <li key={index}>
        {messageItem.message}
        <button className='delete' onClick={() => this.showDetail(index)}>Detail</button>
        <button className='delete' onClick={() => this.deleteMessage(index)}>Delete</button>
        {this.state.details[index] ? <div> Created at: {messageItem.messageTime} </div> : null}
      </li>);

    return (
        <div>
          <div id="message_container">
          <ul id="message_list">{MessagesToShow}</ul>
        </div>
        <button id = "clear_list" onClick={() => this.clearList()} >Clear List</button>
        </div>
    );
  }
}

const mapState = (state) => {
    return {
        messageArray: state.messageArray
    };
};

export default connect(mapState, {deleteMessage,clearList})(MessageList);
