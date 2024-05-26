import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from './features/cart/cart';
import { logger } from './middlewares/logger';

export const store1 = configureStore({ reducer: {
  cart: cartSlice.reducer, 
}, 
// middleware: [logger] // так мы вызывали наш логгер
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]), // так мы вызываем такие дефолтные мидлвеиры как санки, при этом приклеивая к ним наш логгер
devTools: process.env.NODE_ENV !== 'production' // таким образом мы разрешаем использование девтулзов только в режиме теста и разработки, а в проде отключаем
});
