import { Field, Form } from 'react-final-form';
import style from './Login.module.scss';

let onSubmit = formData => {
	console.log(formData);
};

const LoginForm = props => {
	return (
		<Form onSubmit={onSubmit}>
			{props => (
				<form onSubmit={props.handleSubmit}>
					<div>
						<p>email</p>
						<Field
							name="login"
							component={'input'}
						/>
					</div>
					<div>
						<p>password</p>
						<Field
							name="password"
							component={'input'}
						/>
					</div>
					<div>
						<p>rememberMe</p>
						<Field
							type="checkbox"
							name="rememberMe"
							component={'input'}
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
