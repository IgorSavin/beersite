export default function mobMenuExpanded (state = false, action) {
    switch (action.type) {
        case 'TOGGLE_MOBILE_MENU':
            // console.log('mobMenuExpanded', state);
            return !state;
        default:
            return state;
    }
}