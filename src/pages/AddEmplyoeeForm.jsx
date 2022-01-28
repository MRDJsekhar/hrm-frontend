import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const AddEmployeeForm = () => {
	const navigate = useNavigate();

	const initialData = {
		firstName: '',
		middleName: '',
		lastName: '',
		gender: '',
		contactNumber: '',
		email: '',
		panCard: '',
		dob: '',
		address: ''
	};

	const [ details, setDetails ] = useState(initialData);

	const handleData = (e) => {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value
		});
		
	};

	const submitData = async (e) => {
		e.preventDefault();
		console.log('Inputdata', details);
		const res = await axios.post('/employeedetails', details);
		const data = await res.data;
		console.log(data);
		setDetails({
			firstName: '',
			middleName: '',
			lastName: '',
			gender: '',
			contactNumber: '',
			email: '',
			panCard: '',
			dob: '',
			address: ''
		});
		navigate('/home');
	};

	return (
		<div>
			<h3 id="role-form-title">Add Employee Details</h3>
			<div id="role-form-outer-div">
				<Form id="form" onSubmit={submitData}>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							First Name
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.firstName}
								name="firstName"
								type="text"
								placeholder="First Name"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							Middle Name
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.middleName}
								name="middleName"
								type="text"
								placeholder="Middle Name"
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							Last Name
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.lastName}
								name="lastName"
								type="text"
								placeholder="Last Name"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label as="legend" column sm={3}>
							Gender
						</Form.Label>
						<Col sm={9}>
							<Form.Check
								inline
								onChange={handleData}
								type="radio"
								label="Male"
								id="g1"
								value="male"
								name="gender"
								required
							/>
							<Form.Check
								inline
								onChange={handleData}
								value="female"
								type="radio"
								id="g2"
								label="Female"
								name="gender"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							Contact No
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.contactNumber}
								name="contactNumber"
								type="text"
								placeholder="Contact No"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							Email ID
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.email}
								name="email"
								type="email"
								placeholder="Email"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							Pan No.
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.panCard}
								name="panCard"
								type="text"
								placeholder="Pan No"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							DOB
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.dob}
								name="dob"
								type="date"
								placeholder="DOB"
								required
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={3}>
							Address
						</Form.Label>
						<Col sm={9} className="form-input">
							<Form.Control
								onChange={handleData}
								value={details.address}
								name="address"
								type="text"
								placeholder="Address"
								required
							/>
						</Col>
					</Form.Group>
					<div class="form-group">
						<button class="btn btn-success btn-lg float-right" type="submit">
							Submit
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default AddEmployeeForm;
