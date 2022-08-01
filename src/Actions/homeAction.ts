import { HOME_DATA, HTTP_REQUEST } from 'Types';
import { AppDispatch } from 'Store/store';

export const getHomeData = () => (dispatch: AppDispatch) => {
	const url = `todos`;
	dispatch({
		type: HTTP_REQUEST,
		payload: {
			baseUrl: 'https://jsonplaceholder.typicode.com/',
			url,
			method: 'GET',
			label: HOME_DATA,
		},
	});
};
