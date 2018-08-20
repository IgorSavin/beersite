import React from 'react';
import style from './Main.css';
import {history} from '../../react/store/store';
import {ConnectedRouter} from 'connected-react-router';
import {Switch, Route} from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Favorite from '../Favorite/Favorite';
import BeerPage from "../BeerPage/BeerPage";

const Main = () => {
    return (
        <div className={style.wrapper}>
            <ConnectedRouter history={history}>
                <div className={style.container}>
                    <Switch>
                        <Route exact path='/' component={MainContent}/>
                        <Route path='/favorites' component={Favorite}/>
                        <Route path={`/beerPage/:name`} component={BeerPage}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </div>

    );
};

export default Main;
