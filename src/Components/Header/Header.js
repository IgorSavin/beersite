import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Card from '../Card/Card';
import {toggleMobileMenu} from '../../react/actions/mobileMenuActions';
import styles from './Header.css';

const Header = (props) => {
    const rp = props.randomProduct;
    // console.log('rp', rp);

    return (
        <div className={styles.header__wrapper}>
            <div className={styles["header__container"]}>
                {!props.mobMenuExpanded
                    ? <span
                        className={styles["header__menu-icon"]}
                        onClick={props.toggleMobMenu}
                    >
                        <i className="fas fa-bars"></i>
                    </span>
                    : <ul
                        className={styles.header__menu}
                        onMouseLeave={()=>console.log('blur')}
                        onClick={props.toggleMobMenu}
                    >
                        <li className={styles["header__menu-item"]}>Home</li>
                        <li className={styles["header__menu-item"]}>Favorites</li>
                        <li className={styles["header__menu-item"]}>Featured</li>
                    </ul>
                }

                <span className={styles["header__basketicon"]}>
                    <span className={styles["header__basketcount"]}>
                    1 {/* TODO: add code to pull array length of props.busket*/}
                    </span>
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
        </div>
    );
};

// Header.propTypes = {};
// Header.defaultProps = {};

function MSTP (state) {
    return {
        randomProduct: state.randomProduct,
        mobMenuExpanded: state.mobMenuExpanded,
    }
}

function MDTP (dispatch) {
    return {
        toggleMobMenu: function() {
            dispatch(toggleMobileMenu());
        }
    }
}

export default connect(MSTP, MDTP)(Header);