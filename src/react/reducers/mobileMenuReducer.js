export default function mobMenuExpanded (state = false, action) {
    switch (action.type) {
        case 'EXPAND_MOBILE_MENU':
            return true;
        case 'COLLAPSE_MOBILE_MENU':
            return false;
        default:
            return state;
    }
}