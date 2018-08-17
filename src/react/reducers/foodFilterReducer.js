export default function foodfilter (state = [], action) {
    switch (action.type) {
        case ('FOODAPIREADY'):
            return [...action.data];
        default:
            return state;
    }
}