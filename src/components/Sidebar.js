import { Drawer, ListItem, ListItemIcon, ListItemText, List, Divider } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaWpforms } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
	drawer: {
		width: '100px'
	},
	paper: {
		background: '#3CB371'
	}
});

const Sidebar = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const itemsList = [
		{
			text: 'User',
			icon: <FaUserTie />,
			onClick: () => navigate('/home')
		},
		{
			text: 'Salary',
			icon: <HiCurrencyRupee />,
			onClick: () => navigate('/salary')
		},
		{
			text: 'Leave Application',
			icon: <FaWpforms />,
			onClick: () => navigate('/leaveapplication')
		},
		{
			text: 'Add Employee',
			icon: <FiUserPlus />,
			onClick: () => navigate('/addemployee')
		}
	];
	return (
		<Drawer variant="permanent" classes={{ paper: classes.paper }}>
			<List>
				<ListItem>
					<ListItemIcon>
						<FaUserAlt />
					</ListItemIcon>
					<ListItemText>HR</ListItemText>
				</ListItem>
			</List>
			<Divider />
			<List>
				{itemsList.map((item, index) => {
					const { text, icon, onClick } = item;
					return (
						<ListItem button key={text} onClick={onClick}>
							{icon && <ListItemIcon>{icon}</ListItemIcon>}
							<ListItemText primary={text} />
						</ListItem>
					);
				})}
			</List>
		</Drawer>
	);
};

export default Sidebar;
