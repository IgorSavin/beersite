import React from 'react';
import styles from './Card.css';
import {connect} from 'react-redux';
import {addToBasket, countAdd, countUnAdd, price, countDelete, total} from '../../react/actions/busketActions';
import {priceBusket} from '../../react/actions/priceBusketAction';

// import {totals} from '../../react/actions/totalBusketActions';


const Card = ({name, img, price, count, countUnAdd, countAdd, priceBusket, priceBuskets, totalPriceBusket, countDelete}) => {
    return (
        <div className={styles.items}>
            {/* {priceBusket(price, count)} */}
            {/* {totals(priceBuskets)} */}
        <div className={styles.first}>
        <button onClick={() => countDelete(81)} className={styles.delete}>Dell</button> 
            <img src={img} className={styles.img}/>
            <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.second}>
            <button onClick={() => countUnAdd(81)}>-</button>
            <span>{count}</span>
            <button onClick={() => countAdd(81)}>+</button>
            {/* <p className={styles.price}>Price : ${busketTotal}</p> */}
         </div>   
        </div>
    );
}


function MSTP (state) {
    return {
        beers: state.gallery,
        busket: state.busket,
        priceBuskets: state.priceBusket,
        // totals: state.totalBusket,
    }
}

function MDTP (dispatch) {
    return {
        
        countAdd: function (id) {
            dispatch(countAdd(id))
        },
        countUnAdd : function (id) {
            dispatch(countUnAdd(id))
        },
        priceBusket: function (price, count){
            dispatch(priceBusket(price, count))
        },
        countDelete : function(id) {
            dispatch(countDelete(id))
        },
        // totals: function (price) {
        //     dispatch(totals(price))
        // }
       
       
    }
}
export default connect(MSTP, MDTP)(Card);
