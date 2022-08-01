import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from 'Types/actionTypes';

const initialState = {
	isLoading: false,
	error: null,
	isAuthenticated: false,
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case LOGIN_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				error: null,
				isAuthenticated: true,
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				error: 'Login Failed',
			};
		}
		default:
			return state;
	}
};
