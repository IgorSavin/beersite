import React, {Component} from 'react';
import {connect} from 'react-redux'
import {galleryAsync} from './react/actions/galleryActions'
import Main from './Components/Main/Main'
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.galleryFetch()
    }

    render() {
        return (
            <div className="App">
                <Main/>
            </div>
        );
    }
}

function MDTP (dispatch) {
    return {
        galleryFetch: function() {
            dispatch(galleryAsync())
        }
    }
}

export default connect(null, MDTP) (App);

