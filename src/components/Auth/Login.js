import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';

import './Auth.scss';

const Login = ({ history }) => {
	const authError = useSelector((state) => state.authReducer.authError);
	const dispatch = useDispatch();

	const [email, setEmail] = useState('guest@gmail.com');
	const [password, setPassword] = useState('guest');

	const submitForm = async (e) => {
		e.preventDefault();

		dispatch(login({ email, password }, history));
	};

	return (
		<div id='auth-container'>
			<div id='auth-card'>
				<section id='auth-description'>
					<h1 className='hero-text-heading'>
						<span className='hero-color-text'>oh</span> another{' '}
						<span className='hero-color-text'>chat</span> app
					</h1>
					<p className='hero-text-description'>
						ohChat is a realtime messaging app clone with all your classic chat
						features. try it out by registering a new account or use the guest
						login, and feel free to shoot me a message!
					</p>
				</section>
				<div className='card-shadow'>
					<div id='form-section'>
						<h2>Start chatting!</h2>
						<form onSubmit={submitForm}>
							<div className='input-field mb-1'>
								<input
									onChange={(e) => setEmail(e.target.value)}
									value={email.toLowerCase()}
									required='required'
									type='text'
									placeholder='Email'
								/>
							</div>

							<div className='input-field mb-2'>
								<input
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									required='required'
									type='password'
									placeholder='Password'
								/>
							</div>

							<button>LOGIN</button>
						</form>
						{authError ? (
							<p id='auth-warning'>Incorrect username or password</p>
						) : (
							''
						)}
						<p>
							Don't have an account? <Link to='/register'>Register</Link>
						</p>
					</div>
				</div>
			</div>
			<Landing />
		</div>
	);
};

export default Login;
