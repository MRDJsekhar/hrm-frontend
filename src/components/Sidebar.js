import { Drawer, ListItem, ListItemIcon, ListItemText, List } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	drawer: {
		width : '100%',
	}
});

const Sidebar = () => {
    const classes = useStyles()
	return (
		<Drawer open variant="permanent" className={classes.drawer}>
			<List>
				{[ 'All mail', 'Trash', 'Spam', 'inbox' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
