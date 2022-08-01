import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'Hooks/reduxHook';
import { loginAction } from 'Actions';
import { Navigate } from 'react-router-dom';

function HomePage() {
	const dispatch = useAppDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { isAuthenticated, error } = useAppSelector((state: any) => state.auth);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(loginAction({ username, password }) as any);
	};

	if (isAuthenticated) {
		return <Navigate to="/" />;
	}

	return (
		<>
			<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<img
							className="mx-auto h-12 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt="Workflow"
						/>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
					</div>
					<form
						className="mt-8 space-y-6"
						action="#"
						method="POST"
						autoComplete="off"
						onSubmit={onSubmitHandler}>
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="username" className="sr-only">
									Username
								</label>
								<input
									id="username"
									name="username"
									type="username"
									autoComplete="chrome-off"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Username"
									role="presentation"
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="new-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
									role="presentation"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{error && <div className="text-red-500 text-sm">{error}</div>}
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default HomePage;
