import React from 'react';
import bottle from './bottle.jpg';
import styles from './Card.css';
import star from './star.svg'

const Card = () => {

    return (
        <div className={styles.beerCard}>

            
            <img src={star} alt="favourite" className={styles.star}/>
            <div className={styles.imgCont}>
                <img src={bottle} alt="" className={styles.bottleImg}/>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.spanCont}>
                <span className={styles.name}>INDIA PALE ALE</span>
                <span className={styles.abv}>ABV: 4.5%</span>
                <span className={styles.price}>$5</span>
            </div>
            <div className={styles.btnCont}>
                <button className={styles.moreBtn}>More...</button>
                <button className={styles.cartBtn}>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Card;