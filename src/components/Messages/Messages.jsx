import style from './Messages.module.scss';

import DialogList from './DialogsList/DialogsList';
import DialogWindow from './DialogWindow/DialogWindow';

const Messages = props => {
	return (
		<section className={`${style.page}`}>
			<div className={`${style.page__container}`}>
				<DialogList branchesData={props.branchesData} />
				<DialogWindow
					sentMessagesData={props.sentMessagesData}
					sendMessage={props.sendMessage}
				/>
			</div>
		</section>
	);
};

export default Messages;
