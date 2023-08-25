import { createSlice } from "@reduxjs/toolkit";

const initial = {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initial,
  reducers: {
    increment: (state, action) => {
      const count = state[action.payload] || 0;

      state[action.payload] = count + 1;

    },

    decrement: (state,action) => {
      const count = state[action.payload];

      if (!count) {
        return
      }

      if (count === 1) {
        delete state[action.payload];
        return
      }

      state[action.payload] = count - 1;
    },

    reset: () => initial, // просто возвращаем начальное состояние

  }

})

console.log(cartSlice);