import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = (props) => {

    return (
    <div className={styles.header__wrapper}>
        <div className={styles.header__container}>
            <div className={styles["header__basketicon"]}><span><i className="fas fa-shopping-cart"></i></span></div>

            <div className={styles.slide}>
                <div className={styles["slide-inner"]}>
                    <h1 className={styles["slide-quote"]}>Ah, beer! The cause of and the solution to all of life’s problems.</h1>
                    <h3 className={styles["slide-quote-author"]}>- Homer Simpson</h3>
                </div>

            </div>
        </div>
    </div>
    );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;