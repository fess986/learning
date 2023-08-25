'use client'

import React from "react";

import { Provider } from "react-redux";
import { store1 } from "./store";

export default function ReduxProvider({children}) {
  return (
    <Provider store={store1}>{children}</Provider>
  )
}