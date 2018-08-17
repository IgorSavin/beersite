import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import {getRandomProductAsync} from './react/actions/randomActions';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.getRandomProd();
        this.props.galleryFetch();
    };

    render() {
        return (
            <div className="App">
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

