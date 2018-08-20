/*eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {getGalleryAsync} from '../../react/actions/galleryActions';
import {filterData} from '../../react/actions/filterDataActions';
import Tooltips from '../Tooltips/Tooltips';
import ReactTooltip from 'react-tooltip';
import styles from './Filters.css';

const BeerFilter = (props) => {
    console.log(props);
    const getBeer = (e) => {
        props.getFilterBeer(props.gallery, e.target.dataset.first, e.target.dataset.second);

    };
    return (
        <nav className={styles.beer_menu}>
            <ul className={styles.beer_menu__buttons}>
                <li className={styles.beer_menu__button} data-first='1' data-second='6' onClick={getBeer}>Lager,
                    Pilsner, Wheat Beer
                    <Tooltips tooltipId = 'Lager' data-for='svgTooltip'/>
                </li>
                <li className={styles.beer_menu__button} data-first='5' data-second='20' onClick={getBeer}>Pale Ale,
                    IPA, Amber Ale
                    <Tooltips tooltipId = 'Ale' data-for='svgTooltip'/>
                </li>
                <li className={styles.beer_menu__button} data-first='19' data-second='500' onClick={getBeer} data-for='svgTooltip'>Brown Ale,
                    Porter, Stout
                    <Tooltips tooltipId = 'indianPaleAle' data-for='svgTooltip'/>
                </li>
                <ReactTooltip id='svgTooltip' delayShow={1000} type= 'info' html={true} offset={{bottom: 0}}/>
            </ul>
            {/*<button onClick={props.fetchFunc}>TEST</button>*/}
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
            dispatch(getGalleryAsync(a, b))
        },
        getFilterBeer: function (arr, first, second) {
            dispatch(filterData(arr, first, second))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerFilter)

