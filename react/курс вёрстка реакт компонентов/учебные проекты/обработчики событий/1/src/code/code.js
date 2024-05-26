import React from "react";
import { StyledCode } from "./styled";

function Code({ children }) {
  return <StyledCode>Артикул: {children}</StyledCode>;
}

export default Code;
