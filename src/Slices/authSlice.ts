import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AUTH } from 'Types';
import fetcher from 'Utils/fetcher';

interface LoginActionTypes {
	username: any;
	password: any;
}

export const loginAction = createAsyncThunk(
	`${AUTH}/login`,
	async ({ username, password }: LoginActionTypes) => {
		const res = await fetcher({
			method: 'POST',
			url: 'login',
			body: { username, password },
		});
		return res.data;
	}
);

interface AuthState {
	isLoading: boolean;
	error: any;
	isAuthenticated: boolean;
}

const initialState = {
	isLoading: false,
	error: null,
	isAuthenticated: false,
} as AuthState;

const authSlice = createSlice({
	name: AUTH,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginAction.pending, (state, action) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(loginAction.fulfilled, (state, action) => {
			state.isAuthenticated = true;
			state.isLoading = false;
		});
		builder.addCase(loginAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isAuthenticated = false;
			state.error = 'Login Failed';
		});
	},
});

// export const {increment} = authSlice.actions
export default authSlice.reducer;
