export default function gallery (state = [], action) {
    switch(action.type) {
        case 'GALLERY_FETCH': 
            const addIsActiveKey = action.data.map(el =>  ({...el, isActive: false}));
            return [...addIsActiveKey];

        case 'IS_ACTIVE':
            return state.map(el => el.id === action.id ? {...el, isActive: true} : el);

        case 'DISACTIVE':
            return state.map(el => el.id === action.id ? {...el, isActive: false} : el);

        case 'ABV_SORT':
            return [...state.sort((a,b) => b.abv - a.abv)];

        case 'IBU_SORT':
            return [...state.sort((a,b) => b.ibu - a.ibu)];

        case 'EBC_SORT':
            return [...state.sort((a,b) => b.ebc - a.ebc)];

        case 'PRICE_SORT':
            return [...state.sort((a,b) => b.attenuation_level - a.attenuation_level)];

        case 'RESET_SORT':
            return [...state.sort((a,b) =>a.id - b.id)];

        case 'FILTER_DATA':
            const result = state.filter( el => el.srm > action.firstParam && el.srm < action.secondParam ? el : null );
            return state= [...result];

        case ('FOODAPIREADY'):
            return [...action.data];



        default: 
            return state 
    }
}