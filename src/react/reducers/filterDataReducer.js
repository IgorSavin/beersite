export default function filterData (state = [], action) {
    switch (action.type) {
        case 'FILTER_DATA':
            const result = action.dataArr.filter( el => el.srm > action.firstParam && el.srm < action.secondParam ? el : null );
            return state= [...result];
        default:
            return state;
    }
};