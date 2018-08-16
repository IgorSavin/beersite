/*eslint-disable*/

import React from 'react';
import styles from './Busket.css';
import { connect } from 'react-redux';

const Busket = ({massItems, name, props, price, img}) => {
    return (
        
        <div>
        {console.log(props)}    
        
           
                    <div className={styles.items}>
                        <img src={img} alt="" className={styles.imageSize}/>
                    <div className={styles.text}>
                        <span className={styles.title}>{name}</span>
                            <div className={styles.click}>
                                <button className={styles.add}>+</button>
                                <span className={styles.value}>3</span>
                                <button className={styles.unAdd}>-</button>
                                </div>
                        <span className={styles.price}>Price : ${price}</span>
                        </div>
                    </div>
            
            
            

    
    
   
    </div>
    );
}

function mSTP (store) {
    return {
        massItems: store.massItems,
    }
}

export default connect(mSTP, null)(Busket);
