import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import { Text, Figure, Image, StyledStarCard, StyledStarIcon } from "./styles";

// Карточка кота

function SpecialStarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  return (
    <StyledStarCard>
      <h4>Редкий</h4>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
        {name}
      </Title>
      <Text
        className="star__about"
        dangerouslySetInnerHTML={{ __html: about }}
      />
      <hr />
      <Figure>
        <Image src={image} width={313} height={320} alt="изображение кота" />
      </Figure>
    </StyledStarCard>
  );
}

export default SpecialStarCard;
