/*eslint-disable */
import React from 'react';
import styles from './Filters.css';
import img from './beer_glass_s.png'

const BeerFilter =()=>{
    return (
    <nav className={styles.beer_menu}>
        <ul className={styles.beer_menu__buttons}>
            <li className={styles.beer_menu__button}>Lager</li>
            <li className={styles.beer_menu__button}>Pilsner</li>
            <li className={styles.beer_menu__button}>Wheat Beer</li>
            <li className={styles.beer_menu__button}>Pale Ale</li>
            <li className={styles.beer_menu__button}>Amber Ale</li>
            <li className={styles.beer_menu__button}>Brown Ale</li>
            <li className={styles.beer_menu__button}>Porter</li>
            <li className={styles.beer_menu__button}>Stout</li>
        </ul>
    </nav>
    )
};

export default BeerFilter;

