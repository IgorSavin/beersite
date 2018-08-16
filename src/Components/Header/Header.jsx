import React from 'react';
import styles from './Header.css';
import Busket from '../Busket/Busket';
import { connect } from 'react-redux';
import { busketActive } from '../../react/actions/isActiveAction';
import { massItemsFun, counters } from '../../react/actions/busketActions';

const Header = ({isActive, busketActive, massItems, mass, counters}) => {
    console.log(mass)
    return (
        
        <div className={styles.container}>
        
        {
            mass.map(el => console.log(el.id) )}
        <button onClick={busketActive}>Busket</button>
           
            {/* {massItems.map(el => <li>{el}</li> )} */}
            {isActive ? 
             <div className={styles.buy}> 
              <div className={styles.busket}>
             {mass.map(el =><Busket name={el.name} price={el.attenuation_level} img={el.image_url} />)}
                
            </div> 
            <div className={styles.resultsTotal}>
                    <span className={styles.total}>Total price : $600</span>
                    <button className={styles.buttonBuy}>Buy</button>
                </div>
            </div>

              : null
            }
            <button onClick={massItems}>GET</button>
            <button onClick={counters}>counter</button>
          
        </div>
    );
};

function mSTP (store) {
    return {
        isActive: store.isActiveBusket,
        mass: store.massItems,
    }
}
function mSDP (dispath) {
    return {
        busketActive: function () {
            dispath(busketActive())
        },
        massItems: function () {
            dispath(massItemsFun())
        }, 
        counters: function () {
            dispath(counters())
        }
    }
}

export default connect(mSTP, mSDP)(Header);