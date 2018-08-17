import React from 'react';
import './Main.css';
import Gallery from '../Gallery/Gallery';
import Favorite from '../Favorite/Favorite';


const Main = () => {
    return (
        <div className="wrapper">
            <div className='container'>
                {/*<Favorite/>*/}
                <Gallery/>
            </div>
        </div>
    );
};

export default Main;
