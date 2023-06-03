import style from './FormControls.module.scss';

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div>
			{hasError && <span className={`${style.errorMessage}`}>{meta.error}</span>}
			<textarea
				{...input}
				{...props}
				className={`${style.textarea} ${hasError ? `${style.error}` : ''}`}
				placeholder="Start typing to create new post..."
			/>
		</div>
	);
};

export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div>
			{hasError && <span className={`${style.errorMessage}`}>{meta.error}</span>}
			<input
				{...input}
				{...props}
				className={`${style.input} ${hasError ? `${style.error}` : ''}`}
				placeholder="Type your message..."
			/>
		</div>
	);
};
