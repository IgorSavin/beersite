export default function galleryArr (state = [], action) {
    switch(action.type) {
        case 'GALLERY_FETCH': 
            return [...action.data]

        default: 
            return state 
    }
}