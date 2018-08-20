import React from 'react';
import Card from '../Card/Card'
import {connect} from 'react-redux'
import styles from '../Gallery/Gallery.css'

const Favorite = (props) => {
    console.log('Fav', props);
    // if (props.favorites.length === 0) return;
    return (
        <div className={styles.cardCont}>
            <h2>Favorite Beers</h2>
            {props.favorites.map(el => <Card
                img={el.image_url}
                name={el.name}
                abv={el.abv}
                price={el.attenuation_level}
                description={el.description}
                key={el.id}
                id={el.id}
                isActive={el.isActive}
            />)}
        </div>
    );
};

Favorite.propTypes = {};
Favorite.defaultProps = {};

function MSTP (state) {
    return {
        gallery: state.gallery,
        favorites: state.favorites,
    }
}

export default connect(MSTP, null) (Favorite);