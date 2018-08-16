export function randomProduct (state = {}, action) {
    switch (action.type) {
        case 'DOWNLOADED':
            return {...action.payload};
        default:
            return state;
    }
}