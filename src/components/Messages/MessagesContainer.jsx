import { connect } from 'react-redux';
import { sendMessageAC, updateMessageTxtAC } from '../../redux/messagesReducer';

import Messages from './Messages';


//?_____ function "mapStateToProps" _____
const func1 = (state) => {
   return {
      branchesData: state.messagesP.branchesData,
      sentMessagesData: state.messagesP.sentMessagesData,
      newMessageTxt: state.messagesP.newMessageTxt,
   }
};

//?_____ function "mapDispatchToProps" _____
const func2 = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageAC());
      },
      updateMessageTxt: (txt) => {
         dispatch(updateMessageTxtAC(txt));
      },
   }
};

const MessagesContainer = connect(func1, func2)(Messages);


export default MessagesContainer;
