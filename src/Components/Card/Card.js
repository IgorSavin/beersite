import React from 'react';
import { NavLink } from 'react-router-dom';
import star from './star.svg';
import starActive from './starActive.svg';
import {toggleFavorite} from '../../react/actions/favoriteActions';
import {connect} from 'react-redux';
import styles from './Card.css';


const Card = (props) => {
    const toggleFav = () => {
       props.favouriteToggle([props.randomProduct, ...props.gallery].find(el => el.id === props.id));
    };

    const isFav = (id) => {
        return props.favorites.some(el => el.id === +id)
    };

    return (
        <div className={styles.beerCard}>

            {isFav(props.id)
                ? <img src={starActive} alt="favourite" className={styles.star} onClick={toggleFav}/> //favouriteOff
                : <img src={star} alt="favourite" className={styles.star} onClick={toggleFav}/> // favouriteOn
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
                <NavLink to={`/beerPage/${props.name}`}>
                    <button className={styles.moreBtn}>More...</button>
                </NavLink>
                <button className={styles.cartBtn}
                >ADD TO CART</button>
            </div>
        </div>
    );
};

function MSTP(state) {
    return {
        gallery: state.gallery,
        favorites: state.favorites,
        randomProduct: state.randomProduct,
    }
}

function MDTP (dispatch) {
    return {
        favouriteToggle: function(prod) {
            dispatch(toggleFavorite(prod))
        }
    }
}

export default  connect(MSTP, MDTP) (Card);