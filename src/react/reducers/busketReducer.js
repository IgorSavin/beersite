export default function busket (state = [], action){
    switch(action.type){
        case 'ADD':
        return [action.data, ...state];
        case 'COUNTER':
        return [action.counter, ...state];
        default: return state;
    }
}