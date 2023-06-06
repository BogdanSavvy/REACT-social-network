import style from '../Messages.module.scss';

import SentMessage from './SentMessage/SentMessage';

import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../common/FormControls/FormControls';
import {
	composeValidators,
	ultimateMaxLength,
	required,
} from '../../../Validators/validators';

const DialogWindow = props => {
	let newMessage = props.sentMessagesData.map(el => (
		<SentMessage key={el.id} message={el.message} id={el.id} sender={el.sender} />
	));

	let sendMessage = values => {
		props.sendMessage(values.messageField);
		values.messageField = '';
	};

	const maxLengthIs200 = ultimateMaxLength(200);

	return (
		<div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
			<div className={`${style.dialogWindow__messages}`}>{newMessage}</div>
			<div className={`${style.dialogWindow__input}`}>
				<Form onSubmit={sendMessage}>
					{props => (
						<form className={`${style.dialogWindow__form}`} onSubmit={props.handleSubmit}>
							<Field
								placeholder="Type your message..."
								name="messageField"
								component={Input}
								validate={composeValidators(required, maxLengthIs200)}
							/>
							<button>
								<FontAwesomeIcon icon={faPaperPlane} />
							</button>
						</form>
					)}
				</Form>
			</div>
		</div>
	);
};

export default DialogWindow;
