import { connect } from 'react-redux';
import { sendMessage } from '../../redux/messagesReducer';

import Messages from './Messages';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

//* MSTP => MapStateToProps
const MSTP = state => {
	return {
		branchesData: state.messagesP.branchesData,
		sentMessagesData: state.messagesP.sentMessagesData,
	};
};

export default compose(connect(MSTP, { sendMessage }), withAuthRedirect)(Messages);
