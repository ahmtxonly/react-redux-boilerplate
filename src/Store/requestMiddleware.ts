import fetcher from 'Utils/fetcher';
import { requestMiddlewareTypes } from 'Types';

export default ({ getState }: any) =>
	(next: any) =>
	async (persist: any) => {
		const {
			body = null,
			label,
			method,
			transformData = (data: any) => data,
			callBack,
			errorHandler,
			url,
			baseUrl = '',
		} = (persist?.payload as requestMiddlewareTypes) || {};

		// TODO: Buna güvenmiyorum!!
		next(persist);

		if (persist.type !== 'HTTP_REQUEST') {
			return;
		}

		next({
			type: `${label}_REQUEST`,
		});

		try {
			const res = await fetcher({ method, url, body, baseUrl });

			if (res.status >= 400) {
				throw { ...res.data, response: { status: res.status } };
			}

			next({
				type: `${label}_SUCCESS`,
				payload: transformData(res.data),
			});

			if (typeof callBack === 'function') {
				callBack(res.data);
			}
		} catch (error: any) {
			const enhancedError = {
				...error,
				messages: error?.messages,
			};

			if (typeof errorHandler === 'function') {
				errorHandler(enhancedError);
			}

			return next({
				type: `${label}_FAILURE`,
				payload: enhancedError,
			});
		}
	};
