export default function favorites (state = [], action) {
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            console.log(action.data);
            return state.some(el => el.id === +action.data.id)
            ? state.filter(el => el.id !== +action.data.id)
            : [action.data, ...state];
        default:
            return state;
    }
}