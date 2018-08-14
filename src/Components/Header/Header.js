import React from 'react';
import styles from './Header.css';
import Busket from '../Busket/Busket';

const Header = () => {
    return (
        <div className={styles.container}>
            <button>Busket</button>
            <Busket/>
        </div>
    );
};

export default Header;