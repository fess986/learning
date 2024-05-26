import FeatureCard from "../feature-card/feature-card";
import ShopFeatureCard from "../shop-feature-card/shop-feature-card";

function FabricFeatureCard(props) {
    switch(props.type) {
      case 'shop':
        return <ShopFeatureCard {...props}></ShopFeatureCard>
      default:
        return <FeatureCard {...props}></FeatureCard>
    }
}

export default FabricFeatureCard;