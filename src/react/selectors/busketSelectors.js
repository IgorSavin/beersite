export const busket = (state) => state.busket;
export const totalBusketSelectors = (state) => busket(state).reduce((acc, el) => acc + el.price * el.count ,0)