import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const EmployeeDetails = () => {
	const [ empData, setEmpData ] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const response = await axios.get('/employeeDetails');
			const data = await response.data;
			console.log(data);
			setEmpData(data);
		};
		getData();
	}, []);
	return <div>EmployeeDetails</div>;
};

export default EmployeeDetails;
