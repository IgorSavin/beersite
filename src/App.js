import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getGalleryAsync} from './react/actions/galleryActions';
import Main from './Components/Main/Main';
// import {filterData} from '../../react/actions/filterDataActions';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.galleryFetch();
        // this.props.getFilterBeer();
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
            dispatch(getGalleryAsync())
        },
        // getFilterBeer: function(arr, first,second) {
        //     dispatch(filterData(arr, first,second))
        // },

    }
}

export default connect(null, MDTP) (App);

