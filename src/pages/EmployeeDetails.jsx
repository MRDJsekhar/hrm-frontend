import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
//import { Table } from 'react-bootstrap';

const EmployeeDetails = () => {
	const [ empData, setEmpData ] = useState([]);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		const response = await axios.get('/employeedetails');
		const data = await response.data;
		console.log(data);
		setEmpData(data);
	};
	return (
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<div class="card my-2">
						<div class="card-header p-0 position-relative mt-n4 mx-1 z-index-2">
							<div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
								<h5 class="text-black text-uppercase ps-3 font-weight-bolder">Employee Information</h5>
							</div>
						</div>
						<div class="card-body px-0 pb-2">
							<div class="table-responsive p-0">
								<table class="table align-items-center mb-0">
									<thead>
										<tr>
											<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Employee ID
											</th>
											<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												First Name
											</th>
											<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Middle Name
											</th>
											<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
												Last Name
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Gender
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Contact Number
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Email
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Pan Card No.
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												DOB
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Address
											</th>
										</tr>
									</thead>
									<tbody>
										{empData.map((data) => (
											<tr key={data._id}>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.employeeId}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.firstName}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.middleName}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.lastName}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.gender}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.contactNumber}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.email}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.panCard}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.dob}</h6>
														</div>
													</div>
												</td>
												<td>
													<div class="d-flex px-2 py-1">
														<div class="d-flex flex-column justify-content-center">
															<h6 class="mb-0 text-xs">{data.address}</h6>
														</div>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeeDetails;
