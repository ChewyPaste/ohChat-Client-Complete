import axios from 'axios';
import store from '../store';
import { logout } from '../store/actions/auth';

const API = axios.create({
	//server url
	baseURL: 'https://ohchat-server.herokuapp.com/',
	// baseURL: 'http://localhost:3001/',

	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token') || ''}`
	}
});

API.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		if (err.response.status !== 401) {
			throw err;
		}

		if (typeof err.response.data.error.name !== 'undefined') {
			if (err.response.data.error.name === 'TokenExpiredError') {
				store.dispatch(logout());
				throw err;
			}
		}
	}
);

export default API;
