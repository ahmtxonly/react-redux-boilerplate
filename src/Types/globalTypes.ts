export type requestMiddlewareTypes = {
	body?: any;
	label: string;
	method: string;
	transformData?: (data: any) => any;
	callBack?: (data: any) => void;
	errorHandler?: (error: any) => void;
	url: string;
	baseUrl?: string;
};

export type FetcherBodyTypes = {
	method: string;
	url: string;
	body?: any;
	baseUrl?: string;
};
