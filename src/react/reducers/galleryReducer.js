export default function galleryArr (state = [], action) {
    switch(action.type) {
        case 'GALLERY_FETCH': 
            const addIsActiveKey = action.data.map(el =>  ({...el, isActive: false}))
            return [...addIsActiveKey]

        case 'IS_ACTIVE': 
            return state.map(el => el.id === action.id ? {...el, isActive: true} : el)

        case 'DISACTIVE':
            return state.map(el => el.id === action.id ? {...el, isActive: false} : el)

        default: 
            return state 
    }
}