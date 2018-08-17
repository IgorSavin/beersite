export default function busket (state = [], action){
    switch(action.type){
        case 'ADD':
        const result = action.arr.find(el => el.id === action.id);
        const cartItem = {
            name: result.name,
            id: result.id,
            img: result.image_url,
            price: result.attenuation_level,
            count: 1,
        }
        console.log(state)
            return [...state, cartItem];
        
            case 'COUNTER_ADD':
            return  state.map(el => el.id === action.id ? {...el, count: el.count + 1  } : el );

            case 'COUNTER_UN_ADD':
            return  state.map(el => el.id === action.id && el.count > 1 ? {...el, count: el.count - 1  } : el);

            
            case 'COUNTER_DELL':
            const filter = state.filter(el => el.id !== action.id)
            // console.log(filter)
            return filter;

            default: return state;
    }
}