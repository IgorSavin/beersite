export function randomProduct (state = {}, action) {
    switch (action.type) {
        case 'RANDOM_PROD':
            return {...action.payload};
        default:
            return state;
    }
}