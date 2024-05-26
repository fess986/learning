import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import ShopFeatureCard from "../../ui/shop-feature-card/shop-feature-card";
import FabricFeatureCard from "../../ui/fabric-feature-card/fabric-feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features, StyledButton, StyledTitle } from "./styles";
import { AppRoute } from "/src/const";

// список преимуществ
function FeaturesList({
  features // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FabricFeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
