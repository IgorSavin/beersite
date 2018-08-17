import React from 'react';
import styles from './Card.css';
<<<<<<< HEAD
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
=======
import star from './star.svg'
import starActive from './starActive.svg'
import {favourite, favouriteOff} from '../../react/actions/favoriteActions'
import {connect} from 'react-redux'

const Card = (props) => {

    const favouriteOn= () => {
        props.favouriteOn(props.id)
    }

    const favouriteOff = () => {
        props.favouriteOff(props.id)
    }

    return (
        <div className={styles.beerCard}>



            {props.isActive 
                ? <img src={starActive} alt="favourite" className={styles.star} onClick={favouriteOff}/>
                : <img src={star} alt="favourite" className={styles.star} onClick={favouriteOn}/>
            }
            
            

            <div className={styles.imgCont}>
                <img src={props.img} alt="beer" className={styles.bottleImg}/>
                <div className={styles.overlay}>
                    <p className={styles.desc}>
                    {props.description.substring(0,280)+ '...'}</p>
                </div>
            </div>

            <div className={styles.spanCont}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.abv}>ABV: {props.abv}%</span>
                <span className={styles.price}>{props.price} UAH</span>
            </div>

            <div className={styles.btnCont}>
                <button className={styles.moreBtn}>More...</button>
                <button className={styles.cartBtn}>ADD TO CART</button>
            </div>
        </div>
    );
};

function MDTP (dispatch) {
    return {
        favouriteOn: function(id) {
            dispatch(favourite(id))
        },

        favouriteOff: function(id) {
            dispatch(favouriteOff(id))
        }
    }
}

export default  connect(null, MDTP) (Card);
>>>>>>> origin/tony-br
