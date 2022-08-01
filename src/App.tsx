import React from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import LoginPage from 'Pages/LoginPage';
import { useAppSelector } from 'Hooks/reduxHook';

function App() {
	const { isAuthenticated } = useAppSelector((state: any) => state.auth);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App;
