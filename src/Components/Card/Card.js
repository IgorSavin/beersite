import React from 'react';
import styles from './Card.css';
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