/*eslint-disable*/

import React from 'react';
import styles from './Busket.css';

const Busket = () => {
    return (
        <div className={styles.buy}>
    <div className={styles.busket}>
    <div className={styles.items}>
      <img src="https://placeimg.com/100/100/any" alt=""/>
      <div className={styles.text}>Three leg log
      <div>
          <button className={styles.add}>+</button>
          <span className={styles.value}>3</span>
          <button className={styles.unAdd}>-</button>
          </div>
          <span className={styles.price}>Price : $450</span>
        </div>
      </div>
      
     
      

    </div>
    <button>Buy</button>
    </div>
    );
}

export default Busket;
