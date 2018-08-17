/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import styles from './Busket.css';
import {addToBasket, price, countDelete} from '../../react/actions/busketActions';
import Card from '../Card/Card';
import {busketActive} from '../../react/actions/isActiveAction';

const Busket = (props) => {
    return (
        <div>
            <h2 onClick={props.busketActive}>Title</h2>
            {/* {console.log(props.busket.id)} */}
           
            <ul>

            <li className={styles.items}>{props.isActiveBusket ? props.busket.map(el => <Card name={el.name} img={el.img} price={el.price} count={el.count}/>) : null}</li>
                
            

            <span onClick={() => props.addItem(props.beers, 81)}>Total</span>
            <button onClick={() => props.countDelete(81)}>Dell</button>
            </ul>

        </div>
    );
}

function MSTP (state) {
    return {
        beers: state.gallery,
        busket: state.busket,
        isActiveBusket: state.isActiveBusket,
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
        countDelete : function(id) {
            dispatch(countDelete(id))
        },
        

        busketActive: function () {
            dispatch(busketActive())
        }
    }
}

export default connect(MSTP, MDTP)(Busket)
