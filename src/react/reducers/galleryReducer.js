export default function gallery (state = [], action) {
    switch (action.type) {
        case 'GALLERY':
            return state=[...action.payload];
        case 'FILTER_BEER':
        const result = state.filter( el => el.srm > action.firstParam && el.srm < action.secondParam ? el : null );
            return state= [...result];
        default:
            return state;
    }
};