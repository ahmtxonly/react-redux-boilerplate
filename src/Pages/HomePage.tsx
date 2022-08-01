import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'Hooks/reduxHook';
import { Navigate } from 'react-router-dom';
import { getHomeData } from 'Actions';

function HomePage() {
	const dispatch = useAppDispatch();

	const { isAuthenticated } = useAppSelector((state: any) => state.auth);

	useEffect(() => {
		dispatch(getHomeData());
	}, []);

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-4">
			homepage
		</div>
	);
}

export default HomePage;
