import { configureStore, Middleware } from '@reduxjs/toolkit';
import { createTransform, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from 'Reducers';
import storageMiddleware from 'Store/storageMiddleware';
import requestMiddleware from './requestMiddleware';

const SetTransform = createTransform(
	// transform state on its way to being serialized and persisted.
	(inboundState: any, key) => {
		return { ...inboundState, error: inboundState.error };
	}, // transform state being rehydrated
	(outboundState, key) => {
		return { ...outboundState, error: null };
	}, // define which reducers this transform gets called for.
	{ whitelist: ['auth'] }
);

const persistConfig = {
	key: 'root',
	storage,
	transforms: [SetTransform],
	blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] = [thunk, requestMiddleware, storageMiddleware];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
