import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { Link } from 'react-router-dom'

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
	buttonsBox: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		marginTop: '2rem',
		padding: '1rem'
	},
	link: {
		textDecoration: 'none'
	}
})

export default function ErrorPage() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<CssBaseline />
			<main className={classes.content}>
				<Slide direction='down' timeout={700} in mountOnEnter unmountOnExit>
					<div>
						<Typography variant='h2'>Oh, we could not find that...</Typography>
						<div className={classes.buttonsBox}>
							<Link to='/' className={classes.link}>
								<Button variant='contained' color='primary'>
									Take me back
								</Button>
							</Link>
						</div>
					</div>
				</Slide>
			</main>
		</div>
	)
}
