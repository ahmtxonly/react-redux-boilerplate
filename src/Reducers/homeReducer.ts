import {
	HOME_DATA_FAILURE,
	HOME_DATA_REQUEST,
	HOME_DATA_SUCCESS,
} from 'Types/actionTypes';

const initialState = {
	isLoading: false,
	error: null,
	data: [],
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case HOME_DATA_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case HOME_DATA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				error: null,
				data: action.payload,
			};
		}
		case HOME_DATA_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: 'Error',
			};
		}
		default:
			return state;
	}
};
