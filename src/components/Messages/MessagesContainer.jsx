import { sendMessageAC, updateMessageTxtAC } from '../../redux/messagesReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {

   let branchesData = props.store.getState().messagesP.branchesData;
   let sentMessagesData = props.store.getState().messagesP.sentMessagesData;
   let newMessageTxt = props.store.getState().messagesP.newMessageTxt;

   let sendMessage = () => {
      newMessageTxt === '' ? alert('You cant send "nothing"') : props.store.dispatch(sendMessageAC());
      props.store.dispatch(updateMessageTxtAC(''));
   };

   let onMessageChange = (txt) => {
      props.store.dispatch(updateMessageTxtAC(txt));
   };


   return (<Messages branchesData = {branchesData} 
                     sentMessagesData = {sentMessagesData}
                     newMessageTxt = {newMessageTxt}
                     sendMessage = {sendMessage}
                     updateMessageTxt = {onMessageChange} />)
};


export default MessagesContainer;
