import React from "react";
import Button from "../../../components/ui/button/button";
import Title from "../../../components/ui/title/title";

import FactoryStarCard from "../../ui/factory-star-card/factory-star-card";

import { AppRoute } from "../../../const";
import { StarItem, StarList, StyledStarsList } from "./styles";

// список известных котов
function StarsList({
  stars, // коты
  level // уровень заголовка списка.
}) {
  return (
    <StyledStarsList>
      {stars && stars.length ? (
        <>
          <Title level={level}>Наши звёзды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <FactoryStarCard {...star} />
              </StarItem>
            ))}
          </StarList>
        </>
      ) : null}
      <Button minWidth={353} link={AppRoute.BUY}>
        Купить билет
      </Button>
    </StyledStarsList>
  );
}

export default StarsList;
