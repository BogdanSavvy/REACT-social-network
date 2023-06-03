import style from '../../UserProfile.module.scss';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Textarea } from '../../../common/FormControls/FormControls';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import {
	required,
	ultimateMaxLength,
	composeValidators,
} from '../../../../Validators/validators';

const PostCreator = props => {
	let addPost = values => {
		props.addPost(values.postField);
		values.postField = '';
	};

	const maxLengthIs500 = ultimateMaxLength(500);

	return (
		<div className={`${style.page__postCreator} ${style.postCreator}`}>
			<div className={`${style.postCreator__form}`}>
				<Form onSubmit={addPost}>
					{props => (
						<form onSubmit={props.handleSubmit}>
							<Field
								name="postField"
								component={Textarea}
								placeholder="Start typing to create new post..."
								validate={composeValidators(required, maxLengthIs500)}
							/>
							<button>
								<FontAwesomeIcon icon={faShare} />
							</button>
						</form>
					)}
				</Form>
			</div>
		</div>
	);
};

export default PostCreator;
