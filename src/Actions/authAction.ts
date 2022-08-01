import { HTTP_REQUEST, LOGIN } from 'Types';
import { AppDispatch } from 'Store/store';

interface LoginActionTypes {
	username: any;
	password: any;
}

export const loginAction =
	({ username, password }: LoginActionTypes) =>
	(dispatch: AppDispatch) => {
		const url = `login`;
		dispatch({
			type: HTTP_REQUEST,
			payload: {
				url,
				method: 'POST',
				label: LOGIN,
				body: {
					username,
					password,
				},
			},
		});
	};
