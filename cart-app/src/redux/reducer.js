import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("AddToCart", (state, action) => {
      const item = action.payload;
      const isItemPresent = state.cartItems.find((i) => i.id === item.id);

      if (isItemPresent) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    })

    .addCase("Increment", (state, action) => {
      const isItemPresent = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (isItemPresent) {
        state.cartItems.forEach((i) => {
          if (i.id === action.payload) {
            i.quantity += 1;
          }
        });
      }
    })

    .addCase("Decreement", (state, action) => {
      const isItemPresent = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (isItemPresent.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === action.payload) {
            i.quantity -= 1;
          }
        });
      }
    })

    .addCase("Delete", (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);

    })

    .addCase("Calc", (state) => {
      let sum = 0;
       state.cartItems.forEach(i=> sum += i.price * i.quantity);
       state.subtotal = sum;
      state.shipping = state.subtotal > 1000 || state.cartItems.some(i=> i.quantity === 0)  ? 0 : 200;
      state.tax = +(state.subtotal * 0.18).toFixed();
      state.total = state.shipping + state.subtotal + state.tax;

    })
});
