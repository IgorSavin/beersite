import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Card from '../Card/Card';
import {expandMobileMenu, collapseMobileMenu} from '../../react/actions/mobileMenuActions';
import styles from './Header.css';

const Header = (props) => {
    const rp = props.randomProduct;
    // console.log('rp', rp);

    const closeMobMenu = (e) => {
        if (!e.target.classList.contains('fas') && !e.target.classList.contains('fa-bars')) {
            props.collapseMobMenu();
        }
    };

    return <div className={styles.header__wrapper}>
        <div
            className={styles["header__container"]}
            onClick={closeMobMenu}
        >
            {!props.mobMenuExpanded // mobile menu
                ? <span
                    className={styles["header__burger-icon"]}
                    onClick={props.expandMobMenu}
                >
                        <i className="fas fa-bars"></i>
                    </span>
                : <ul
                    className={styles["header__mobile-menu"]}
                >
                    <li className={styles["header__menu-item"]}>Home</li>
                    <li className={styles["header__menu-item"]}>Favorites</li>
                    <li className={styles["header__menu-item"]}>Featured</li>
                </ul>
            }
            <ul className={styles.header__menu}>
                <li className={styles["header__menu-item"]}><NavLink exact to='/'>Home</NavLink></li>
                <li className={styles["header__menu-item"]}><NavLink to='/favorites'>Favorites</NavLink></li>
                <li className={styles["header__menu-item"]}><NavLink to='/'>Featured</NavLink></li>
            </ul>

            <span className={styles["header__basketicon"]}>
                {props.busketItems > 0
                    ? <span className={styles["header__basketcount"]}>
                    {props.busketItems}
                    </span>
                    : null
                }
                <i className="fas fa-shopping-cart"></i>
                </span>

            <div className={styles["header__content"]}>
                <div className={styles.slide}>
                    <div className={styles["slide-inner"]}>
                        <h1 className={styles["slide-quote"]}>Ah, beer! The cause of and the solution to all of
                            life’s problems.</h1>
                        <h3 className={styles["slide-quote-author"]}>- Homer Simpson</h3>
                    </div>
                </div>
                <div className={styles["header__random-product"]}>
                    {rp.hasOwnProperty('id') ?
                        <Card
                            img={rp.image_url}
                            name={rp.name}
                            abv={rp.abv}
                            price={rp.attenuation_level}
                            description={rp.description}
                            key={rp.id}
                            id={rp.id}
                        /> : null
                    }
                </div>
            </div>
        </div>
    </div>;
};

// Header.propTypes = {};
// Header.defaultProps = {};

function MSTP (state) {
    return {
        randomProduct: state.randomProduct,
        sliderData: state.sliderData,
        mobMenuExpanded: state.mobMenuExpanded,
        // busketItems: state.busket.length,
        busketItems: 3,
    }
}

function MDTP (dispatch) {
    return {
        expandMobMenu: function() {
            dispatch(expandMobileMenu());
        },
        collapseMobMenu: function() {
            dispatch(collapseMobileMenu());
        },
    }
}

export default connect(MSTP, MDTP)(Header);