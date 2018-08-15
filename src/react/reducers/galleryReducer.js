export default function gallery (state = [], action) {
    switch (action.type) {
        case 'GALLERY':
            return state=[...action.payload];
        default:
            return state;
    }
};