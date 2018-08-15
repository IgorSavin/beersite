import React from 'react';
import styles from './Card.css';
import star from './star.svg'

const Card = (props) => {

    return (
        <div className={styles.beerCard}>

            
            <img src={star} alt="favourite" className={styles.star}/>
            <div className={styles.imgCont}>
                <img src={props.img} alt="beer" className={styles.bottleImg}/>
                <div className={styles.overlay}>
                    <p className={styles.desc}>
                    {props.description}</p>
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

export default Card;