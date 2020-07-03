import { createSelector } from 'reselect';

// input selector, it selects from state
const selectCart = (state) => state.cart;

// output selector using createSelector from reselect lib, it will check if any change occur in state.cart

export const selectCartItems = createSelector(
  [selectCart], // collection of input selector, it can be multiple
  // selectCart as cart
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  //selectCartItems as cartItems
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);
