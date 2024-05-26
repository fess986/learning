import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {productAmountSelector} from '../redux/selectors/cartSelectors'
import { cartSlice } from "../redux/features/cart/cart";

const PRODUCT_ID = 'Охуенные грибы';

export default function Redux() {
  const productAmount = useSelector((state) => productAmountSelector(state, PRODUCT_ID));
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(cartSlice.actions.increment(PRODUCT_ID))}>+</button>
      <button onClick={() => dispatch(cartSlice.actions.decrement(PRODUCT_ID))}>-</button>
      <div>{productAmount}</div>
    </>
    
  )
}