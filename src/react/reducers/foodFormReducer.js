export default function foodform (state='', action) {
    switch (action.type) {
        case ('INPUTCHANGED'):
            return action.payload;
        default:
            return state;
    }
}