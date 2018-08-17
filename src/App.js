import React, {Component} from 'react';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import {connect}  from 'react-redux';
import  { getGalleryAsync } from './react/actions/galleryActions'
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.fetchGallery();
    }
    render() {
        return (
            <div className="App">
            <Header />
                <Main/>
            </div>
        );
    }
}

function MDTP(dispatch) {
    return {
        fetchGallery: function() {
            dispatch(getGalleryAsync())
        }
    }
}

export default connect(null, MDTP)(App);
