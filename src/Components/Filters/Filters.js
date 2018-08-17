/*eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import styles from './Filters.css';
import {getGalleryAsync, getFilterBeer} from '../../react/actions/galleryActions';


const BeerFilter =(props)=>{
    console.log(props);
    const getBeer =  (e)=> {
         props.fetchFunc(e.target.dataset.first,e.target.dataset.second);
         // props.getFilterBeer(e.target.dataset.first, e.target.dataset.second);
    };
    return (
    <nav className={styles.beer_menu}>
        <ul className={styles.beer_menu__buttons}>
            <li className={styles.beer_menu__button} data-first='1' data-second='3' onClick={getBeer}>Lager</li>
            <li className={styles.beer_menu__button} data-first='2' data-second='4' onClick={getBeer}>Pilsner</li>
            <li className={styles.beer_menu__button} data-first='3' data-second='6' onClick={getBeer}>Wheat Beer</li>
            <li className={styles.beer_menu__button} data-first='5' data-second='12' onClick={getBeer}>Pale Ale</li>
            <li className={styles.beer_menu__button} data-first='11' data-second='15' onClick={getBeer}>IPA</li>
            <li className={styles.beer_menu__button} data-first='14' data-second='20' onClick={getBeer}>Amber Ale</li>
            <li className={styles.beer_menu__button} data-first='19' data-second='28' onClick={getBeer}>Brown Ale</li>
            <li className={styles.beer_menu__button} data-first='28' data-second='35' onClick={getBeer}>Porter</li>
            <li className={styles.beer_menu__button} data-first='34' data-second='500' onClick={getBeer}>Stout</li>
        </ul>
        <button onClick={props.fetchFunc}>TEST</button>
    </nav>
    )
};

function mapStateToProps (state) {
    return {
        // gallery: state.gallery,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchFunc: function(a,b) {
            dispatch(getGalleryAsync(a,b))
        },
        getFilterBeer: function(first,second) {
            dispatch(getFilterBeer(first,second))
        },
    }}
export default connect(mapStateToProps,mapDispatchToProps)(BeerFilter)

