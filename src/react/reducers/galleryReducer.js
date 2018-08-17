export default function gallery (state = [], action) {
    switch(action.type) {
        case 'GALLERY_FETCH': 
            const addIsActiveKey = action.data.map(el =>  ({...el, isActive: false}));
            return [...addIsActiveKey];
        default:
            return state;
    }
}