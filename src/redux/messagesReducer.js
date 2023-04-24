const sendMessage = 'SEND-MESSAGE';
const upMessageTxt = 'UPDATE-MESSAGE-TEXT';


const messagesReducer = (state, action) => {
   switch (action.type) {
      case sendMessage :
         let newMessage = {
            id: 7,
            message: state.newMessageTxt,
            sender: 'me',
         };
         state.sentMessagesData.push(newMessage);
         return state;
      case upMessageTxt :
         state.newMessageTxt = action.newTxt;
         return state;
      default: return state;
   };
};

//*abbreviation "AC" => "ActionCreator"
export const sendMessageAC = () => ({ type: sendMessage });
export const updateMessageTxtAC = txt => ({type: upMessageTxt, newTxt: txt });

export default messagesReducer;