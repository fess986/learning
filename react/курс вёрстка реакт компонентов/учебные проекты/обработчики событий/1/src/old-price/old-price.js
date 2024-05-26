import React from "react";
import { StyledOldPrice } from "./styled";

function OldPrice({ value }) {
  return <StyledOldPrice>{value} ₽</StyledOldPrice>;
}

export default OldPrice;
