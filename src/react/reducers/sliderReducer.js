export function sliderReducer (state = {}, action) {
    switch (action.type) {
        case 'SLIDER_DATA':
            return action.payload;
        default:
            return state;
    }
}