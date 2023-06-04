import style from './Login.module.scss';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Field, Form } from 'react-final-form';
import { Input } from '../common/FormControls/FormControls';
import {
	composeValidators,
	ultimateMinLength,
	required,
} from '../../Validators/validators';
import { Navigate } from 'react-router-dom';

const MTSP = state => ({
	isAuth: state.auth.isAuth,
});

const Login = props => {
	let onSubmit = formData => {
		console.log(formData);
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	const minLengthToPass6 = ultimateMinLength(6);

	//*Redirecting to home page if authorised
	if (props.isAuth) return <Navigate to="/" />;

	return (
		<>
			<h1 className={`${style.title}`}>LOGIN</h1>
			<Form onSubmit={onSubmit}>
				{props => (
					<form onSubmit={props.handleSubmit}>
						<div>
							<label>Email</label>
							<Field name="email" type="email" component={Input} validate={required} />
						</div>
						<div>
							<label>Password</label>
							<Field
								name="password"
								type="password"
								component={Input}
								validate={composeValidators(required, minLengthToPass6)}
							/>
						</div>
						<div>
							<label>RememberMe</label>
							<Field name="rememberMe" type="checkbox" component={Input} />
						</div>
						<button>Login</button>
					</form>
				)}
			</Form>
		</>
	);
};

export default connect(MTSP, { login })(Login);
