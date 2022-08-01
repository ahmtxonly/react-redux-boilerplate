const syncLocalStorage =
	({ getState, dispatch }: any) =>
	(next: any) =>
	(action: any) => {
		const returnValue = next(action);

		console.log('hello');

		return returnValue;
	};

export default syncLocalStorage;
