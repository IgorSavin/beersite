import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import {getRandomProductAsync} from './react/actions/randomActions';
import {galleryAsync} from './react/actions/galleryActions'
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.getRandomProd();
        this.props.galleryFetch();
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
            </div>
        );
    }
}

function MSTP(state) {
    return {
        randomProduct: state.randomProduct,
    }
}

function MDTP (dispatch) {
    return {
        getRandomProd: function() {
            dispatch(getRandomProductAsync())
        },
        galleryFetch: function() {
            dispatch(galleryAsync())
        }
    }
}

export default connect(MSTP, MDTP) (App);