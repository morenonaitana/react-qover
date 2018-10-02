import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import store from '../store';
import { updateQuote } from '../store/actions/quoteUpdate';
import styles from '../style.css';
import { carBrands, cars } from '../fake-data/cars';
import { conditions } from '../fake-data/conditions';

class Quote extends React.Component {

    state = {
        toPriceList: false,
        age: '',
        car: cars[1].brand,
        price: '',
        error: {
            risk: false,
            price: false,
            age: false,
        },
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
    }

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
    };

    // Check if the user is not too young
    checkAge = async () => {
        if (parseInt(this.state.age) >= conditions.AGE_MIN) {
            this.state.error.age === true;
            await this.setStateAsync({
                error: { ...this.state.error, age: false }
              });
        } else {
            await this.setStateAsync({
                error: { ...this.state.error, age: true }
              });
              return false;
        }
    }
    
    // Check if the price is valid or invalid to go to next step
    checkPrice = async () => {
        if (parseInt(this.state.price) >= conditions.PRICE_MIN) {
            this.state.error.price === true;
            await this.setStateAsync({
                error: { ...this.state.error, price: false }
              });
        } else {
            await this.setStateAsync({
                error: { ...this.state.error, price: true }
              });
              return false;
        }
    }

    // Check if there is a risk  
    checkRisk = async () => {
        if (parseInt(this.state.age) < conditions.AGE_MIN_EXOTIC_CAR && this.state.car === carBrands.PORSCHE) {
            this.state.error.price === true;
            await this.setStateAsync({
                error: { ...this.state.error, risk: true }
              });
        } else {
            await this.setStateAsync({
                error: { ...this.state.error, risk: false }
              });
              return false;
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await this.checkAge();
        await this.checkPrice();
        await this.checkRisk();

        const err = this.state.error;

        if (!err.age && !err.price && !err.risk) {
            store.dispatch(updateQuote({
                age: this.state.age,
                car: this.state.car,
                price: this.state.price,
            }))
            this.setState({ toPriceList: true });
        }
      }

    render() {
        if (this.state.toPriceList === true) {
            return <Redirect to='/priceList' />
        }
        
        const { classes } = this.props;
        let errorPrice, errorAge, errorRisk;

        if (this.state.error.price) {
            errorPrice = <span className={classNames(classes.error, classes.quoteError)}>
            Sorry! The price of the car is too low</span>;
        }

        if (this.state.error.age) {
            errorAge = <span className={classNames(classes.error, classes.quoteError)}>
            Sorry! The driver is too young</span>;
        }

        if (this.state.error.risk) {
            errorRisk = <span className={classNames(classes.error, classes.quoteError)}>
            Sorry! We can not accept this particular risk</span>;
        }

        return (
            <div className={classes.quote}>
                <Card>
                    <CardContent className={classes.quoteContent}>
                        <form onSubmit={this.handleSubmit}>
                            <div className={classes.flexRow}>
                                <p className={classes.inputLabel}>Age of the driver</p>
                                <TextField
                                    id="outlined-age"
                                    error={this.state.error.age}
                                    label=""
                                    className={classNames(classes.textFieldBorder, classes.inputNumber)}
                                    value={this.state.age}
                                    onChange={this.handleChange('age')}
                                    variant="outlined"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            { errorAge }
                            <div className={classes.flexRow}>
                                <p className={classes.inputLabel}>Car</p>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label=""
                                    variant="outlined"
                                    className={classNames(classes.textFieldBorder, classes.select)}
                                    value={this.state.car}
                                    onChange={this.handleChange('car')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.select,
                                        },
                                    }}
                                    >
                                    {cars.map(option => (
                                        <MenuItem key={option.brand} value={option.brand}>
                                        {option.brand}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className={classes.flexRow}>
                                <p className={classes.inputLabel}>Purchase Price</p>
                                <TextField
                                    error={this.state.error.price}
                                    id="outlined-price"
                                    label=""
                                    type="number"
                                    className={classNames(classes.textFieldBorder, classes.inputNumber)}
                                    value={this.state.price}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleChange('price')}
                                    variant="outlined"
                                />
                                <p className={this.state.error.price ? classes.alert : ''}>€</p>
                            </div>
							{ errorPrice }
							{ errorRisk }
                            <Button
                                variant="contained"
                                color="primary"
                                className={classNames(classes.buttonPrimary, classes.quoteButton)}
                                type="submit">
                                Get a price
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

Quote.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quote);