import axios from 'axios';

function addFoodAPI(data) {
    return {
        type: 'FOODAPIREADY',
        data,
    }
}

function getFoodAPI(value) {
    return axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80&food=${value}`)
        .then(data => data.status === 200 ? data.data : [])
        .catch(error => console.log('Getting data from server error: ' + error));
}

export const foodAPIAsync = (value) => dispatch => {
    getFoodAPI(value)
        .then(data => dispatch(addFoodAPI(data)));
}
