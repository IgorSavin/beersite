import React from 'react';
import styles from './Sort.css';
import {connect} from 'react-redux';
import {sortByAbv, sortByIbu, sortByEbc, sortByPrice, resetSort} from '../../react/actions/sortActions';
import FoodForm from '../../Components/FoodForm/FoodForm';

const Sort = (props) => {
    return (
        <div className={styles.sortBtnCont}>
            <p className={styles.sortBy}>Tell us what you're eating to get your perfect beer</p>
            <FoodForm/>
            <p className={styles.sortBy}>Sort beer by:</p>
            <button className={styles.sortBtn} 
                    onClick={props.sortByAbv}>ABV</button>
            
            <button className={styles.sortBtn} 
                    onClick={props.sortByIbu}>IBU</button>

            <button className={styles.sortBtn}
                    onClick={props.sortByEbc}>EBC</button>

            <button className={styles.sortBtn}
                    onClick={props.sortByPrice}
            >Price</button>

            <button className={styles.sortBtn}
                    onClick={props.resetSort}
            >Reset</button>
        </div>
    );
};

function MDTP (dispatch) {
    return {
        sortByAbv: function() {
            dispatch(sortByAbv())
        },
        sortByIbu: function() {
            dispatch(sortByIbu())
        },
        sortByEbc: function() {
            dispatch(sortByEbc())
        },
        sortByPrice: function() {
            dispatch(sortByPrice())
        },
        resetSort: function() {
            dispatch(resetSort())
        }
    }
}

export default connect (null, MDTP) (Sort);