import React from 'react';
import './Landing.scss';
import preview from '../../assets/images/demo.gif';

const Landing = () => {
	return (
		<div className='wrapper'>
			<section id='welcome'>
				<h1>Contact Me</h1>
				<p>
					forward your bug reports, job offers and lottery numbers to{' '}
					<a href='#'>whmcheong@gmail.com</a>
				</p>
			</section>
			<div className='img-container'>
				<h2>In Action</h2>
				<img id='preview' src={preview} alt='preview' />
			</div>
		</div>
	);
};

export default Landing;
