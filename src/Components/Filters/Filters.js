/*eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {filterData} from '../../react/actions/galleryActions';
import {getGalleryAsync} from '../../react/actions/galleryActions';
import Tooltips from '../Tooltips/Tooltips';
import ReactTooltip from 'react-tooltip';
import styles from './Filters.css';

const BeerFilter = (props) => {
    console.log(props);
    const getBeer = (e) => {
        props.fetchFunc(e.target.dataset.first, e.target.dataset.second);

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
                <ReactTooltip id='svgTooltip' delayShow={500} type='info' html={true} offset={{bottom: 0}}/>
                <li className={styles.beer_menu__button} data-first='0' data-second='500' onClick={getBeer}>ALL BEERS

                </li>
                <li className={styles.beer_menu__button} data-first='1' data-second='6' onClick={getBeer}>Lager,
                    Pilsner, Wheat Beer
                    <Tooltips tooltipId='Lager' data-for='svgTooltip'/>
                </li>
                <li className={styles.beer_menu__button} data-first='5' data-second='20' onClick={getBeer}>Pale Ale,
                    IPA, Amber Ale
                    <Tooltips tooltipId='Ale' data-for='svgTooltip'/>
                </li>
                <li className={styles.beer_menu__button} data-first='19' data-second='500' onClick={getBeer}>Brown Ale,
                    Porter, Stout
                    <Tooltips tooltipId='indianPaleAle' data-for='svgTooltip'/>
                </li>
            </ul>
        </nav>
    )
};

function mapStateToProps(state) {
    return {
        gallery: state.gallery,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFunc: function (a, b) {
            dispatch(filterData(a, b))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerFilter)

