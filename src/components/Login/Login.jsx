import { Field, Form } from 'react-final-form';
import style from './Login.module.scss';
import { Input } from '../common/FormControls/FormControls';
import {
	composeValidators,
	ultimateMinLength,
	required,
} from '../../Validators/validators';

let onSubmit = formData => {
	console.log(formData);
};

const LoginForm = props => {
	const minLengthToPass6 = ultimateMinLength(6);

	return (
		<Form onSubmit={onSubmit}>
			{props => (
				<form onSubmit={props.handleSubmit}>
					<div>
						<label>email</label>
						<Field
							name="login"
							type="email"
							component={Input}
							validate={required}
						/>
					</div>
					<div>
						<label>password</label>
						<Field
							name="password"
							component={Input}
							validate={composeValidators(required, minLengthToPass6)}
						/>
					</div>
					<div>
						<label>rememberMe</label>
						<Field
							type="checkbox"
							name="rememberMe"
							component={Input}
						/>
					</div>
					<button>Login</button>
				</form>
			)}
		</Form>
	);
};

const Login = props => {
	return (
		<>
			<h1 className={`${style.title}`}>LOGIN</h1>
			<LoginForm />
		</>
	);
};

export default Login;
