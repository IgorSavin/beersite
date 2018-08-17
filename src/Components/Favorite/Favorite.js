import React from 'react';
import Card from '../Card/Card'
import {connect} from 'react-redux'
import styles from '../Gallery/Gallery.css'

const Favorite = (props) => {
    return (
        <div className={styles.cardCont}>
            {props.galleryArr.map(el => <Card
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
        galleryArr: state.galleryArr
    }
}

export default connect(MSTP, null) (Favorite);
