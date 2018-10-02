import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import logo from '../assets/logo.svg';
import Footer from './footer';
import Checkboxicon from './icons/checkboxicon';
import Checkboxiconchecked from './icons/checkboxiconchecked';
import styles from '../style.css';

class SimpleCard extends Component {

	state = {
		user: '',
		password: '',
		showPassword: false,
		checkedRemember: true,
		toQuote: false,
		error: '',
	};

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	handleCheckboxChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		fetch('/login',{
			method: 'POST',
			body: JSON.stringify({
			  id: this.state.user,
			  password: this.state.password
			}),
			headers: {"Content-Type": "application/json"}
		  }).then((response) =>{
			if (response.ok) {
				this.setState(() => ({
					toQuote: true
				}));
			} else {
				this.setState(state => ({ error: 'User crendetials incorrect' }));				
			}
		  });
	}

	render() {
		
		if (this.state.toQuote === true) {
			return <Redirect to='/quote' />
		}
		
		const { classes } = this.props;

		return (
			
				<div className={classes.cardContainer}>
					<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					</header>
					<Card className={classes.card}>
						<CardContent>
							<Typography className={classes.title} color="textSecondary">
								Welcome at Qover
							</Typography>
							<form className={classes.container} onSubmit={this.handleSubmit}>
								<TextField
									id="user"
									label="user"
									value={this.state.user}
									onChange={this.handleChange('user')}
									type="user"
									className={classes.formControl}
									InputLabelProps={{shrink: true}}
								/>
								<TextField
									id="password"
									label="password"
									value={this.state.password}
									onChange={this.handleChange('password')}
									type="password"
									className={classes.formControl}
									InputLabelProps={{shrink: true}}
								/>
								<div className={classes.fullFlex}>
									<FormControlLabel
										className={classes.checkbox}
										control={
											<Checkbox
											checked={this.state.checkedRemember}
											icon={<Checkboxicon />}
											checkedIcon={<Checkboxiconchecked/>}
											onChange={this.handleCheckboxChange('checkedRemember')}
											value="checkedB"/>
										}
										label="Remember me"/>
									<a className={classes.link} href="#">Forgot your password ?</a>
								</div>
								<span className={classes.error}>{this.state.error}</span>
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}
									type="submit">
									Sign in to your account
								</Button>
							</form>
						</CardContent>
					</Card>
					<Button
						variant="contained"
						className={classes.buttonBorder}>
						Don't have an account ? <u>Ask access</u>
					</Button>
					<Footer />
				</div>
		)
	};
};

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
