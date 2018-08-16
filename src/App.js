import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import {getRandomProductAsync} from './react/actions/randomActions';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.getRandomProd();
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


// MSTP
function mapStateToProps(state) {
    return {
        randomProduct: state.randomProduct,
    }
}

// MDTP
function mapDispatchToProps(dispatch) {
    return {
        getRandomProd: function() {
            dispatch(getRandomProductAsync())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);