export const addToBasket =(arr ,id) => {
    return {
        type: 'ADD',
        id,
        arr,
    }
}

export const countAdd = (id) => ({
    type: 'COUNTER_ADD',
    id,
})

export const countUnAdd = (id) => ({
    type: 'COUNTER_UN_ADD',
    id,
})

export const price = (id) => ({
    type: 'PRICE',
    id,
})

export const countDelete = (id) => ({
    type: 'COUNTER_DELL',
    id,
})


