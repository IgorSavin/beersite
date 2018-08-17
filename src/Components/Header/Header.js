import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Card from '../Card/Card';
import styles from './Header.css';

const Header = ({randomProduct: rp}) => {
    console.log('rp', rp);

    return (
        <div className={styles.header__wrapper}>
            <div className={[styles.container, styles.header__container].join(' ')}>
                <span className={styles["header__menu-icon"]}>
                    <i className="fas fa-bars"></i>
                </span>
                <ul className={styles.header__menu}>
                    <li className={styles["header__menu-item"]}>Home</li>
                    <li className={styles["header__menu-item"]}>Favorites</li>
                    <li className={styles["header__menu-item"]}>Featured</li>
                </ul>
                <span className={styles["header__basketicon"]}>
                    <span className={styles["header__basketcount"]}>
                    1
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
                                className={styles["beerCard--random"]}
                                img={rp.image_url}
                                name={rp.name}
                                abv={rp.abv}
                                price={rp.attenuation_level}
                                description={rp.description}
                                key={rp.id}
                                id={rp.id}
                                isActive={false}
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

function MSTP(state) {
    return {
        randomProduct: state.randomProduct,
    }
}

export default connect(MSTP, null)(Header);