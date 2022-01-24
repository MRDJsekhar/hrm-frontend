import { makeStyles } from '@mui/styles';
import React from 'react';
import { Route, Routes } from 'react-router';
import Sidebar from '../components/Sidebar';
import EmploeeDetails from '../pages/EmploeeDetails';
import Homepage from '../pages/Homepage';
import LeaveApplication from '../pages/LeaveApplication';
import SalaryDetails from '../pages/SalaryDetails';

const useStyles = makeStyles({
	container: {
		display: 'flex'
	}
});

const Utility = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Sidebar />
			
		</div>
	);
};

export default Utility;
