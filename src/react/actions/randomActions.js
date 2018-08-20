import axios from 'axios';

export function getRandomProduct(data) {
    return {
        type: 'RANDOM_PROD',
        payload: data,
    }
}

function getRandom() {
    return axios.get('https://api.punkapi.com/v2/beers/random')
        // .then(result => {console.log(result.data[0]); return result})  // test
        .then(result => result.status === 200 ? result : null)
        .catch(err => console.log(err))
}

export const getRandomProductAsync = () => dispatch => {
    getRandom()
        .then(result => dispatch(getRandomProduct(result.data[0])))
        .catch(err => console.log(err))
};