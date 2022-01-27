import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

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
	return (
		<div>
			<Table striped bordered hover responsive="sm" variant="dark">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Gender</th>
						<th>Contact Number</th>
						<th>Email</th>
						<th>Pan Card No.</th>
						<th>DOB</th>
						<th>Address</th>
					</tr>
				</thead>
				<tbody>
					{empData.map((data) => (
						<tr key={data._id}>
							<td>{data.firstName}</td>
							<td>{data.lastName}</td>
							<td>{data.gender}</td>
							<td>{data.contactNumber}</td>
							<td>{data.email}</td>
							<td>{data.panCard}</td>
							<td>{data.dob}</td>
							<td>{data.address}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default EmployeeDetails;
