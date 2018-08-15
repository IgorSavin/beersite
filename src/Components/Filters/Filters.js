/*eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import styles from './Filters.css';
import {getGalleryAsync} from '../../react/actions/galleryActions'

const BeerFilter =(props)=>{
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
        <button onClick={props.fetchFunc}>TEST</button>
    </nav>
    )
};

function mapStateToProps (state) {
    return {
        gallery: state.gallery
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchFunc: function() {
            dispatch(getGalleryAsync())
        },
    }}
export default connect(mapStateToProps,mapDispatchToProps)(BeerFilter)

