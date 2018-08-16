export default function busketActive (state = false, action){
    switch(action.type){
        case 'IS_ACTIVE':
        return !state;
        default: return state;
    }
}