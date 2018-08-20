/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import styles from './Busket.css';
import {addToBasket, price, countDelete} from '../../react/actions/busketActions';
import Card from '../Card/Card';
import {busketActive} from '../../react/actions/isActiveAction';
import {totalBusketSelectors} from '../../react/selectors/busketSelectors';

const Busket = (props) => {
    // let classReact = React.createClass({color: 'white'})
    return (
        <div className={styles.position}>
            <button onClick={props.busketActive}>Title</button>
                      
            
            <div className={styles.container}>
             <ul className={props.isActiveBusket ? styles.aside  : styles.asideShow}><li className={styles.items}>{props.busket.map(el => 
            <Card name={el.name} img={el.img} price={el.price} count={el.count} key={el.id}/>)}</li> 
                
            {/* <div className={styles.buys}> */}
                <span className={styles.buttonBuy}>Total: {props.busketTotal}₴</span>
                {/* <button className={styles.buttonBuy}>Buy</button> */}
            {/* </div> */}
            </ul>
            
            
            </div>
             <button onClick={() => props.addItem(props.beers, 81)}>ADD</button>
        </div>
    );
}

function MSTP (state) {
    return {
        beers: state.gallery,
        busket: state.busket,
        isActiveBusket: state.isActiveBusket,
        busketTotal: totalBusketSelectors(state),
    }
}

function MDTP (dispatch) {
    return {
        addItem : function(arr, id) {
            dispatch(addToBasket(arr, id))
        },
        
        price: function (id) {
            dispatch(price(id))
        },
        busketActive: function () {
            dispatch(busketActive())
        }
    }
}

export default connect(MSTP, MDTP)(Busket)
