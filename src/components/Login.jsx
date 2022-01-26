import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from '../images/st.jpg';
import { Card, CardMedia, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router';

const theme = createTheme();

const SignInSide = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password')
		});
		navigate('/home');
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid item xs={12} sm={4} md={7}>
					<Card sx={{ maxWidth: 750 }}>
						<CardMedia
							component="img"
							height="615"
							sx={{ height: '600', width: '600' }}
							image={image}
							alt="hr"
						/>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<Avatar sx={{ m: 4, mt: 5, bgcolor: 'darkgreen' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
							<TextField
								margin="dense"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									)
								}}
								autoFocus
								variant="filled"
								color="success"
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<LockIcon />
										</InputAdornment>
									)
								}}
								variant="filled"
								color="success"
							/>
							<Button type="submit" color="success" variant="contained" sx={{ mt: 4 }}>
								Sign In
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
export default SignInSide;
