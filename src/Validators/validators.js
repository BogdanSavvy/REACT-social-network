export const required = value => (!value ? 'This feild is required*' : undefined);

export const ultimateMaxLength = maxLength => value =>
	value.length > maxLength ? `Max length ${maxLength} symbols` : undefined;

export const ultimateMinLength = minLength => value =>
	value.length < minLength ? `Min length ${minLength} symbols` : undefined;

export const isValidEmail = email =>
	/[^|\w](\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/.test(email);

export const isValidPass = password =>
	/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
		password
	);
export const composeValidators =
	(...validators) =>
	value =>
		validators.reduce((error, validator) => error || validator(value), undefined);
