const cartSelector = (state) => {
  console.log(state);
  return state.cart
};
export const productAmountSelector = (state, id) => cartSelector(state)[id] || 0 ;