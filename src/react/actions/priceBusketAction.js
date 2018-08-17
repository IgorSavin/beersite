export const priceBusket = (price, count) => ({
    type: 'PRICES',
    price: price * count,
})
