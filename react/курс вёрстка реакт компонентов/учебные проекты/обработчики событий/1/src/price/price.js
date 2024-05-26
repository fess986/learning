import React from "react";
import { StyledPrice } from "./styled";

function Price({ value, className }) {
  return <StyledPrice className={className}>{value} ₽</StyledPrice>;
}

export default Price;
