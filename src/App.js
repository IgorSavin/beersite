import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getGalleryAsync} from './react/actions/galleryActions';
import Main from './Components/Main/Main';
import styles from './App.css';
import Header from './Components/Header/Header';
import {getRandomProductAsync} from './react/actions/randomActions';
import {loadSliderData} from "./react/actions/sliderActions";
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.getRandomProd();
        // this.props.loadSliderData();
        this.props.galleryFetch();
    };

    render() {
        return (
            <div className={styles.App}>
                <Header/>
                <Main/>
            </div>
        );
    }
}

function MSTP(state) {
    return {
        randomProduct: state.randomProduct,
        sliderData: state.sliderData,
    }
}

function MDTP (dispatch) {
    return {
        getRandomProd: function() {
            dispatch(getRandomProductAsync())
        },
        loadSliderData: function() {
            dispatch(loadSliderData())
        },
        galleryFetch: function() {
            dispatch(getGalleryAsync())
        },
    }
}

export default connect(MSTP, MDTP) (App);