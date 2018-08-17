export default function price (state = 0, action){
    switch(action.type){
        case 'PRICES':
        return Math.floor(action.price);
        // case 'TOTAL':
        // return [action.price];
        default: return state;
    }
}