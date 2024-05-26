import React from "react";
import SpecialStarCard from "../special-star-card/special-star-card";
import StarCard from "../star-card/star-card";

// Фабрика для производства карточек с котами
function FactoryStarCard(props) {
  switch (props.type) {
    case "special":
      return <SpecialStarCard {...props} />;
    default:
      return <StarCard {...props} />;
  }
}

export default FactoryStarCard;
