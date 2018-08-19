import React from 'react';
import { connect } from 'react-redux';
import { inpChange } from '../../react/actions/foodFormActions';
import { foodAPIAsync } from '../../react/actions/foodFilterActions';
import {getGalleryAsync} from '../../react/actions/galleryActions';

import styles from './FoodForm.css';

// import PropTypes from 'prop-types';

function FoodForm(props) {

    function changingInput(e) {
        if (e.target.value !== '') {
            props.setData(e.target.value)
        } else {
            props.setData(e.target.value)
            props.galleryFetch();
        }

    }


    function foodSearch(e) {
        e.preventDefault();
        const reg = /^\s+/;
        if (!reg.test(props.inpData) && props.inpData !=='') {
            props.foodRequest(props.inpData);
        } else {
            props.galleryFetch();
        }
    }

    return (
        <div className={styles.foodFrom}>
        <p className={styles.sortBy}>Tell us what you're eating to get your perfect beer</p>
            <form className={styles.foodFrom__form} onSubmit={foodSearch}>
                <input className={styles.foodFrom__input} type="text" name="foodInput" id="foodInput"
                       placeholder='I am eating' value={props.inpData} onChange={changingInput} />
                <input className={styles.foodFrom__btn} type="submit" name="foodSubmit" id="foodSubmit" value='Find beer'/>
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
        galleryFetch: function() {
            dispatch(getGalleryAsync())
        },
    }
}

// FoodForm.propTypes = {};
// FoodForm.defaultProps = {};

export default connect(MSTP, MDTP)(FoodForm);
