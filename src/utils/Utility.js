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
		<div class="container-fluid py-4">
			<div class="row">
				<div class="col-12">
					<div class="card my-4">
						<div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
							<div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
								<h6 class="text-white text-capitalize ps-3">Authors table</h6>
							</div>
						</div>
						<div class="card-body px-0 pb-2">
							<div class="table-responsive p-0">
								<table class="table align-items-center mb-0">
									<thead>
										<tr>
											<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Author
											</th>
											<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
												Function
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Status
											</th>
											<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
												Employed
											</th>
											<th class="text-secondary opacity-7" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="d-flex px-2 py-1">
													<div class="d-flex flex-column justify-content-center">
														<h6 class="mb-0 text-sm">John Michael</h6>
														<p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
													</div>
												</div>
											</td>
											<td>
												<p class="text-xs font-weight-bold mb-0">Manager</p>
												<p class="text-xs text-secondary mb-0">Organization</p>
											</td>
											<td class="align-middle text-center text-sm">
												<span class="badge badge-sm bg-gradient-success">Online</span>
											</td>
											<td class="align-middle text-center">
												<span class="text-secondary text-xs font-weight-bold">23/04/18</span>
											</td>
											<td class="align-middle">
												<a
													href="javascript:;"
													class="text-secondary font-weight-bold text-xs"
													data-toggle="tooltip"
													data-original-title="Edit user"
												>
													Edit
												</a>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex px-2 py-1">
													<div class="d-flex flex-column justify-content-center">
														<h6 class="mb-0 text-sm">Alexa Liras</h6>
														<p class="text-xs text-secondary mb-0">
															alexa@creative-tim.com
														</p>
													</div>
												</div>
											</td>
											<td>
												<p class="text-xs font-weight-bold mb-0">Programator</p>
												<p class="text-xs text-secondary mb-0">Developer</p>
											</td>
											<td class="align-middle text-center text-sm">
												<span class="badge badge-sm bg-gradient-secondary">Offline</span>
											</td>
											<td class="align-middle text-center">
												<span class="text-secondary text-xs font-weight-bold">11/01/19</span>
											</td>
											<td class="align-middle">
												<a
													href="javascript:;"
													class="text-secondary font-weight-bold text-xs"
													data-toggle="tooltip"
													data-original-title="Edit user"
												>
													Edit
												</a>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex px-2 py-1">
													<div class="d-flex flex-column justify-content-center">
														<h6 class="mb-0 text-sm">Laurent Perrier</h6>
														<p class="text-xs text-secondary mb-0">
															laurent@creative-tim.com
														</p>
													</div>
												</div>
											</td>
											<td>
												<p class="text-xs font-weight-bold mb-0">Executive</p>
												<p class="text-xs text-secondary mb-0">Projects</p>
											</td>
											<td class="align-middle text-center text-sm">
												<span class="badge badge-sm bg-gradient-success">Online</span>
											</td>
											<td class="align-middle text-center">
												<span class="text-secondary text-xs font-weight-bold">19/09/17</span>
											</td>
											<td class="align-middle">
												<a
													href="javascript:;"
													class="text-secondary font-weight-bold text-xs"
													data-toggle="tooltip"
													data-original-title="Edit user"
												>
													Edit
												</a>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex px-2 py-1">
													<div class="d-flex flex-column justify-content-center">
														<h6 class="mb-0 text-sm">Michael Levi</h6>
														<p class="text-xs text-secondary mb-0">
															michael@creative-tim.com
														</p>
													</div>
												</div>
											</td>
											<td>
												<p class="text-xs font-weight-bold mb-0">Programator</p>
												<p class="text-xs text-secondary mb-0">Developer</p>
											</td>
											<td class="align-middle text-center text-sm">
												<span class="badge badge-sm bg-gradient-success">Online</span>
											</td>
											<td class="align-middle text-center">
												<span class="text-secondary text-xs font-weight-bold">24/12/08</span>
											</td>
											<td class="align-middle">
												<a
													href="javascript:;"
													class="text-secondary font-weight-bold text-xs"
													data-toggle="tooltip"
													data-original-title="Edit user"
												>
													Edit
												</a>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex px-2 py-1">
													<div class="d-flex flex-column justify-content-center">
														<h6 class="mb-0 text-sm">Richard Gran</h6>
														<p class="text-xs text-secondary mb-0">
															richard@creative-tim.com
														</p>
													</div>
												</div>
											</td>
											<td>
												<p class="text-xs font-weight-bold mb-0">Manager</p>
												<p class="text-xs text-secondary mb-0">Executive</p>
											</td>
											<td class="align-middle text-center text-sm">
												<span class="badge badge-sm bg-gradient-secondary">Offline</span>
											</td>
											<td class="align-middle text-center">
												<span class="text-secondary text-xs font-weight-bold">04/10/21</span>
											</td>
											<td class="align-middle">
												<a
													href="javascript:;"
													class="text-secondary font-weight-bold text-xs"
													data-toggle="tooltip"
													data-original-title="Edit user"
												>
													Edit
												</a>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex px-2 py-1">
													<div class="d-flex flex-column justify-content-center">
														<h6 class="mb-0 text-sm">Miriam Eric</h6>
														<p class="text-xs text-secondary mb-0">
															miriam@creative-tim.com
														</p>
													</div>
												</div>
											</td>
											<td>
												<p class="text-xs font-weight-bold mb-0">Programator</p>
												<p class="text-xs text-secondary mb-0">Developer</p>
											</td>
											<td class="align-middle text-center text-sm">
												<span class="badge badge-sm bg-gradient-secondary">Offline</span>
											</td>
											<td class="align-middle text-center">
												<span class="text-secondary text-xs font-weight-bold">14/09/20</span>
											</td>
											<td class="align-middle" />
										</tr>
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

export default Utility;
