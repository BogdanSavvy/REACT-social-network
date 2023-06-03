export const required = value => (!value ? 'This feild is required*' : undefined);

export const ultimateMaxLength = maxLength => value =>
	value.length > maxLength ? `Max length ${maxLength} symbols` : undefined;

export const composeValidators =
	(...validators) =>
	value =>
		validators.reduce((error, validator) => error || validator(value), undefined);
