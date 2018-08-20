import React from 'react';
import styles from './Sort.css';
import {connect} from 'react-redux';
import TooltipsObj from '../Tooltips/TooltipsObj';
import {sortByAbv, sortByIbu, sortByEbc, sortByPrice, resetSort} from '../../react/actions/sortActions';

const Sort = (props) => {
    return (
        <div className={styles.sortBtnCont}>
            <p className={styles.sortBy}>Sort beer by:</p>
            <button className={styles.sortBtn} 
                    onClick={props.sortByAbv} data-for='svgTooltip' data-tip={TooltipsObj.ABV}>ABV</button>
            
            <button className={styles.sortBtn} 
                    onClick={props.sortByIbu} data-for='svgTooltip' data-tip={TooltipsObj.IBU}>IBU</button>

            <button className={styles.sortBtn}
                    onClick={props.sortByEbc} data-for='svgTooltip' data-tip={TooltipsObj.EBC}>EBC</button>

            <button className={styles.sortBtn}
                    onClick={props.sortByPrice} data-for='svgTooltip' data-tip={TooltipsObj.Price}
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