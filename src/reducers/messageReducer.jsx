import {DELETE_MSG, SUBMIT_MSG, CLEAR_LIST } from '../actions';

function generateTime () {
    let date = new Date();
    return date.toString();
}

const initialState = [
    {message: 'welcome to A2!', messageTime: generateTime()},
    {message: 'I built this with React and Redux!', messageTime: generateTime()},
    {message: 'Hope you enjoy it!', messageTime: generateTime()}
]

const messageReducer = (state = initialState, action) => {
    let copyArray = [...initialState];
    if (action.type === DELETE_MSG) {
        copyArray.splice(action.ind, 1);
        return copyArray;

    } else if (action.type === SUBMIT_MSG) {
        let newMsg = {
            message: action.msg.message,
            messageTime: generateTime()
        }
        copyArray.push(newMsg);
        return copyArray;
    } else if (action.type === CLEAR_LIST) {
        copyArray = [];
        return copyArray;
    } else {
        return state;
    }
};

export default messageReducer;