import React from 'react';
// import PropTypes from 'prop-types';
import Gallery from '../Gallery/Gallery';
import Sort from '../Sort/Sort';
import style from './MainContent.css';

const MainContent = () => {
    return (
        <div className={style.content}>
            <Sort/>
            <Gallery/>
        </div>
    );
};

export default MainContent;
