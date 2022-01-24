import React from 'react';
import Sidebar from '../components/Sidebar';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from 'react-router-dom';
import EmploeeDetails from '../pages/EmploeeDetails';
import LeaveApplication from '../pages/LeaveApplication';
import SalaryDetails from '../pages/SalaryDetails';
import Header from '../components/Header';

const useStyles = makeStyles({
	container: {
		display: 'flex'
	}
});

const Homepage = () => {
	const classes = useStyles();
	return (
		<div>
			<div>
				<Sidebar />
			</div>
			<div style={{ marginLeft: '9em' }}>
				<Header />
			</div>
			<div style={{ marginLeft: '10em', marginRight: '10em', marginTop: '6em' }}>
				<Routes>
					<Route path="/employeedetails" element={<EmploeeDetails />} />
					<Route path="/leaveapplication" element={<LeaveApplication />} />
					<Route path="/salary" element={<SalaryDetails />} />
				</Routes>
			</div>
			Homepage
		</div>
	);
};

export default Homepage;
