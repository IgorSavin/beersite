import React from 'react';
import bottle from './bottle.jpg';
import styles from './Card.css'

const Card = () => {

    return (
        <div className='beer_card'>
            <figure>
                <img src={bottle} alt="" className={styles.bottle}/>
                <figcaption>
                    <span>description</span>
                    <span>abv</span>
                    <span>price</span>
                </figcaption>
            </figure>

            <button>More</button>
            <button>ADD TO CART</button>
        </div>
    );
};

export default Card;