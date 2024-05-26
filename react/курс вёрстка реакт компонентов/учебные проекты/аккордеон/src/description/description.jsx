import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text }) {
  return (
    <>
      {text}
      <DescriptionButton>Подробнее</DescriptionButton>
    </>
  );
}

export default Description;
