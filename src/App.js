import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignInSide from './components/Login';

const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<SignInSide />} />
				<Route exact path="/*" element={<Homepage />} />
			</Routes>
		</div>
	);
};

export default App;
