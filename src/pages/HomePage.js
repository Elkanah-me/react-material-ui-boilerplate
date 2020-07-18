import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: '1rem',
		textAlign: 'center',
		height: '100vh'
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	menuButton: {
		marginRight: '1rem'
	},
	title: {
		flexGrow: 1
	},
	buttonsBox: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		marginTop: '2rem',
		padding: '1rem'
	},
	buttonContained: {
		marginRight: '1rem'
	}
})

export default function HomePage() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<IconButton edge='start' className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6'>Home</Typography>
				</Toolbar>
			</AppBar>
			<main className={classes.content}>
				<Slide direction='down' timeout={700} in mountOnEnter unmountOnExit>
					<div>
						<Typography variant='h2'>Create something awesome!</Typography>
						<div className={classes.buttonsBox}>
							<Button
								variant='contained'
								color='primary'
								className={classes.buttonContained}
							>
								Sign me up
							</Button>
							<Button variant='outlined' color='secondary'>
								Take me back
							</Button>
						</div>
					</div>
				</Slide>
			</main>
		</div>
	)
}
