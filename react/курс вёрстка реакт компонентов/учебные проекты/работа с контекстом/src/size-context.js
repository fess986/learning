import React from "react";

export const SizeContext = React.createContext({
  height: 30,
  width: 200,
  display: "block"
});

export const SizeProvider = SizeContext.Provider;
