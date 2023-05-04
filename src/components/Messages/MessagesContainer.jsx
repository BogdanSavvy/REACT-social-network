import { connect } from 'react-redux';
import { sendMessage, updateMessageTxt } from '../../redux/messagesReducer';

import Messages from './Messages';


//* MSTP => MapStateToProps
const MSTP = (state) => {
   return {
      branchesData: state.messagesP.branchesData,
      sentMessagesData: state.messagesP.sentMessagesData,
      newMessageTxt: state.messagesP.newMessageTxt,
   }
};


const MessagesContainer = connect( MSTP, {sendMessage, updateMessageTxt} )(Messages);


export default MessagesContainer;
