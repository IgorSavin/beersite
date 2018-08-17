import React from 'react';
import style from './Main.css'
import Gallery from '../Gallery/Gallery';
import BeerFilter from '../Filters/Filters';
import Sort from '../Sort/Sort'


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
