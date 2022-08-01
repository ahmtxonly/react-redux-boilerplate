import axios from 'axios';
import { BASE_URL } from 'Configs/config';
import { FetcherBodyTypes } from 'Types';

const fetcher = ({ method, url, body, baseUrl }: FetcherBodyTypes) => {
	return axios({
		method,
		baseURL: baseUrl !== '' ? baseUrl : BASE_URL,
		url,
		data: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' },
	});
};

export default fetcher;
