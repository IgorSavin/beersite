import React from 'react';
import { connect } from 'react-redux';
import { inpChange } from '../../react/actions/foodFormActions';
import { foodAPIAsync } from '../../react/actions/foodFilterActions';
import styles from './FoodForm.css';

// import PropTypes from 'prop-types';

function FoodForm(props) {

    function changingInput(e) {
        props.setData(e.target.value);
    }


    function foodSearch(e) {
        e.preventDefault();
        const reg = /^\s+/;
        if (!reg.test(props.inpData) && props.inpData !=='') {
            props.foodRequest(props.inpData);
        } else {
            return;
        }
    }

    return (
        <div className={styles.foodFrom}>
            <form className={styles.foodFrom__form} onSubmit={foodSearch}>
                <input className={styles.foodFrom__input} type="text" name="foodInput" id="foodInput"
                       placeholder='enter food' value={props.inpData} onChange={changingInput} />
                <input className={styles.foodFrom__btn} type="submit" name="foodSubmit" id="foodSubmit" value='go'/>
            </form>
        </div>
    );
}

function MSTP(store) {
    return {
        inpData: store.foodform,
    }
}

function MDTP(dispatch) {
    return {
        setData: function (step) {
            dispatch(inpChange(step))
        },
        foodRequest: function (value) {
            dispatch(foodAPIAsync(value))
        },
    }
}

// FoodForm.propTypes = {};
// FoodForm.defaultProps = {};

export default connect(MSTP, MDTP)(FoodForm);
