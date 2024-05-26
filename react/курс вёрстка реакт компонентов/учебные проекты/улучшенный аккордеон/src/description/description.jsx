import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription }) {
  return (
    <>
      {text}
      <DescriptionButton onClick={onShowMore}>
        {isShowAllDescription ? "Cкрыть" : "Подробнее"}
      </DescriptionButton>
    </>
  );
}

export default Description;
