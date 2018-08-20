import React from 'react';
import style from './Main.css'
import Gallery from '../Gallery/Gallery';
import Sort from '../Sort/Sort'
import Favorite from '../Favorite/Favorite';

const Main = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>

            <div className={style.content}>
               <Sort/>
               <Gallery/>
            </div> 
            </div>
        </div>

    );
};

export default Main;
