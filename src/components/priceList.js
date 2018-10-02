import React from 'react';
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';
import store from '../store';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { cars, carBrands } from '../fake-data/cars';
import percentage from '../methods/percentage';
import ComparisonIcon from '../components/icons/comparisonIcon';
import BackgroundSvg from '../components/backgroundSvg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { plans } from '../store/reducers/planReducer';
import { updateYearly } from '../store/actions/planUpdate';
import Plan from './plan';
import styles from '../style.css.js';

class PriceList extends React.Component {

    selectedCar = cars.find(el => el.brand === this.props.quote.car);

    handleChange = name => event => {
        store.dispatch(updateYearly({
            [name]: event.target.checked,
        }));
      };

    render() {
        if (!this.selectedCar) {
			return <Redirect to='/quote' />
        }

        const { classes } = this.props;
        const globalPrice = parseInt(this.selectedCar.price);
        let universePrice;
        
        switch(this.selectedCar.brand) {
            case carBrands.AUDI:
                universePrice = globalPrice + percentage(this.props.quote.price, 0.3);
                break;
            case carBrands.BMW:
                universePrice = globalPrice + percentage(this.props.quote.price, 0.4);
                break;
            case carBrands.PORSCHE:
                universePrice = globalPrice + percentage(this.props.quote.price, 0.7);
                break;
        }
        
        return (
            <div className={classes.priceList}>
                <div className={classNames(classes.flexColumn, classes.absoluteFullWidth)}>
                    <BackgroundSvg className={classes.backgroundSvg} />
                    <div className={classes.absoluteFullWidth}>
                            <h1 className={classes.titleBig}>Select a plan</h1>
                            <div className={classes.toggle}>
                                <p className={!this.props.yearly ? classes.toggleSelected : ''}>
                                    Pay Monthly
                                </p>
                                <FormControlLabel
                                    control={
                                        <Switch
                                        checked={this.props.yearly}
                                        onChange={this.handleChange('yearly')}
                                        value="yearly"
                                        classes={{
                                            switchBase: classes.iOSSwitchBase,
                                            bar: classes.iOSBar,
                                            icon: classes.iOSIcon,
                                            iconChecked: classes.iOSIconChecked,
                                            checked: classes.iOSChecked,
                                          }}
                                        />
                                    }/>
                                <p className={this.props.yearly ? classes.toggleSelected : ''}>
                                    Pay Yearly
                                </p>                                
                            </div>
                            <div className={classNames(classes.flexRow, classes.contentCenter)}>
                                <Plan
                                    name={plans.GLOBAL}
                                    price={globalPrice}
                                    duration={90}
                                    medical={1000000}
                                    personnal={5000}
                                    travel={1000}
                                    coverage={1}/>
                                <Plan
                                    name={plans.UNIVERSE}
                                    price={universePrice}
                                    duration={180}
                                    medical={3000000}
                                    personnal={10000}
                                    travel={2500}
                                    coverage={1}/>
                            </div>
                            <a href="#" className={classes.linkPrimary}>
                                <span>Show me the full comparison table</span>
                                <ComparisonIcon />
                            </a>
                    </div>
                </div>
            </div>

        )
    }
}

PriceList.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
    return {
        quote: state.quote,
        yearly: state.plan.yearly,
    }
}

export { plans }
export default connect(mapStateToProps)(withStyles(styles)(PriceList));
