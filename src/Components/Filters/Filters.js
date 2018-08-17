/*eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import styles from './Filters.css';
import {getGalleryAsync} from '../../react/actions/galleryActions';
import {filterData} from '../../react/actions/filterDataActions';

const BeerFilter =(props)=>{
    console.log(props);
    const getBeer = (e)=> {
         props.getFilterBeer(props.gallery,e.target.dataset.first, e.target.dataset.second);

       // function handleMenuClick({target}){
       //     const arr = [...target.parentNode.children];
       //     console.log(arr);
       //
       //     arr.forEach(el=> {
       //         if (el === target) {
       //             target.className= styles.beer_menu__button;
       //             console.log(el);
       //         } else {
       //              target.className= `${styles.beer_menu__button} ${styles.is_active}`;
       //             console.log(el);
       //         }
       //     })
       // }
       //  handleMenuClick(e);
    };
    return (
    <nav className={styles.beer_menu}>
        <ul className={styles.beer_menu__buttons}>
            <li className={styles.beer_menu__button} data-first='1' data-second='6' onClick={getBeer}>Lager, Pilsner, Wheat Beer </li>
            <li className={styles.beer_menu__button} data-first='5' data-second='20' onClick={getBeer}>Pale Ale, IPA, Amber Ale</li>
            <li className={styles.beer_menu__button} data-first='19' data-second='500' onClick={getBeer}>Brown Ale, Porter, Stout</li>
        </ul>
        {/*<button onClick={props.fetchFunc}>TEST</button>*/}
    </nav>
    )
};

function mapStateToProps (state) {
    return {
        gallery: state.gallery,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchFunc: function(a,b) {
            dispatch(getGalleryAsync(a,b))
        },
        getFilterBeer: function(arr, first,second) {
            dispatch(filterData(arr, first,second))
        },
    }}
export default connect(mapStateToProps,mapDispatchToProps)(BeerFilter)

