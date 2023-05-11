import { connect } from 'react-redux';
import { sendMessage, updateMessageTxt } from '../../redux/messagesReducer';

import Messages from './Messages';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


//* MSTP => MapStateToProps
const MSTP = (state) => {
   return {
      branchesData: state.messagesP.branchesData,
      sentMessagesData: state.messagesP.sentMessagesData,
      newMessageTxt: state.messagesP.newMessageTxt,
   }
};


export default compose(
   connect( MSTP, {sendMessage, updateMessageTxt} ),
   withAuthRedirect
)(Messages)