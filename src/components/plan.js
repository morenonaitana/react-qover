import React from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import store from '../store';
import formatNumber from '../methods/formatNumber';
import styles from '../style.css.js';
import { updatePlan } from '../store/actions/planUpdate';

class Plan extends React.Component {

    handleSelect = async (event) => {
        event.preventDefault();

        store.dispatch(updatePlan({
            plan: this.props.name,
        }));
      }

    render() {
        const { classes } = this.props;
        const selected = this.props.selectedPlan === this.props.name;
        const price = this.props.yearly ? this.props.price : this.props.price / 12;

        return (
            <div className={classNames(classes.plan, selected ? classes.planSelected: '')}>
                <h2>{ this.props.name }</h2>
                <h3>
                    { formatNumber(price) }
                    <sup>€</sup>
                    <br /><span>{ this.props.yearly ? 'yearly' : 'monthly' } incl. taxes</span>
                </h3>
                <p><b>Maximum duration travel</b> of <b>{ this.props.duration } days</b></p>
                <p><b>Medical expenses reimbursment</b> up to <b>{ formatNumber(this.props.medical) }</b></p>
                <p><b>Personnal assistance abroad</b> up to <b>{ formatNumber(this.props.personnal) }</b></p>
                <p><b>Travel assistance abroad</b> up to <b>{ formatNumber(this.props.travel) }</b>
                    <br />per insured per Travel
                </p>
                <p><b>Coverage duration: { this.props.coverage }</b></p>
                <Button
                    variant="contained"
                    color="primary"
                    className={classNames(classes.button, selected ? classes.buttonSelected : '')}
                    onClick={this.handleSelect}
                    type="submit">
                    { selected ? <CheckCircle /> : '' }
                    { selected ? 'Plan selected' : 'Choose this plan' }
                </Button>
            </div>
        )
    }
}

Plan.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.number,
    medical: PropTypes.number,
    personnal: PropTypes.number,
    travel: PropTypes.number,
    coverage: PropTypes.number,
};

function mapStateToProps(state){
    return {
        selectedPlan: state.plan.selectedPlan,
        yearly: state.plan.yearly,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Plan));
