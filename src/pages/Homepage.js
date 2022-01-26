import React from 'react';
import Sidebar from '../components/Sidebar';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from 'react-router-dom';
import AddEmployeeForm from './AddEmplyoeeForm';
import SalaryDetails from './SalaryDetails';
import Header from '../components/Header';
import EmployeeDetails from './EmployeeDetails';
import EmployeeLeaveApplication from './EmployeeLeaveApplication';
import { useState } from 'react';

const useStyles = makeStyles({
	container: {
		display: 'flex'
	}
});

const Homepage = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.container}>
				<Sidebar />
			</div>
			<div>
				<Header />
			</div>
			<div style={{ marginLeft: '15em', marginRight: '10em', marginTop: '6em' }}>
				<Routes>
					<Route exact path="/home" element={<EmployeeDetails />} />
					<Route path="/addemployee" element={<AddEmployeeForm />} />
					<Route path="/leaveapplication" element={<EmployeeLeaveApplication />} />
					<Route path="/salary" element={<SalaryDetails />} />
				</Routes>
			</div>
			Homepage
		</div>
	);
};

export default Homepage;
