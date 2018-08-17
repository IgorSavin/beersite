import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { name, description, dishes, abvLength, ibuLength, srmLength, year, price, imageBottle } from '../../react/selectors/beerPageSelector';
import styles from './BeerPage.css';

function BeerPage({name, description, dishes, abvLength, ibuLength, srmLength, year, price, imageBottle}) {
    return (
        <div className={styles.beerPage__container}>
            <div className={styles.beerPage}>
                <div className={styles.beerPage__infoBox}>
                    <h2 className={styles.beerPage__name}>{name}</h2>
                    <span className={styles.beerPage__year}>First brewed: {year}</span>
                    <p className={styles.beerPage__descr}>{description}</p>
                    <h3 className={styles.beerPage__dishesHeader}>Food pairing:</h3>
                    <ul className={styles.beerPage__dishes}>
                        {dishes.map(el => <li className={styles.beerPage__dish} key={el}>{el}</li>)}
                    </ul>
                    <div className={styles.beerPage__progressBar}>
                        <div className={styles.beerPage__progressBarBG}><p className={`${styles.beerPage__Value} ${styles.beerPage__abvValue}`} style={{ width: `${abvLength*5}%` }}><span className={styles.beerPage__progressBar__text}>abv: {abvLength}</span></p></div>
                        <div className={styles.beerPage__progressBarBG}><p className={`${styles.beerPage__Value} ${styles.beerPage__ibuValue}`} style={{ width: `${ibuLength*1.08}%` }}><span className={styles.beerPage__progressBar__text}>ibu: {ibuLength}</span></p></div>
                        <div className={styles.beerPage__progressBarBG}><p className={`${styles.beerPage__Value} ${styles.beerPage__srmValue}`} style={{ width: `${srmLength*0.8}%` }}><span className={styles.beerPage__progressBar__text}>srm: {srmLength}</span></p></div>
                    </div>
                </div>
                <div className={styles.beerPage__pictureBox}>
                    {/*<span className={styles.beerPage__star}>&#9734;</span>*/}
                    {/*<span className={styles.beerPage__star}>&#9733;</span>*/}
                    <img src={imageBottle} alt="beer bottle"
                         className={styles.beerPage__img}/>
                    <span className={styles.beerPage__price}>{price} UAH</span>
                    <button className={styles.beerPage__btn}>add to cart</button>
                </div>
            </div>
        </div>
    );
}

function MSTP(state) {
    return {
        name: name(state),
        description: description(state),
        dishes: dishes(state),
        abvLength: abvLength(state),
        ibuLength: ibuLength(state),
        srmLength: srmLength(state),
        year: year(state),
        price: price(state),
        imageBottle: imageBottle(state),
    }
}

// BeerPage.propTypes = {};
// BeerPage.defaultProps = {};

export default connect (MSTP)(BeerPage);
