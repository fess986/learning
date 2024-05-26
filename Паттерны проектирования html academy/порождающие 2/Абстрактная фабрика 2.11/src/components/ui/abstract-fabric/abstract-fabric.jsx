import ShopFeatureCard from "../shop-feature/shop-feature-card";
import FarmerFeatureCard from "../farmer-feature/farmer-feature-card";

export const AbstractFeatureCard = {
  title: null,
  factoryTitle(props) {
    switch (props.owner) {
      case 'Магазинные продукты':
        this.title = `${props.title} из магазина`;
        return this;
      default:
        this.title = `${props.title} с фермы`;
        return this;
    }
  },
  factoryCard(props) {
    switch (props.owner) {
      case 'Магазинные продукты':
        return <ShopFeatureCard {...props} title={this.title} />
      default:
        return <FarmerFeatureCard {...props} title={this.title} />
    }
  },
  create(props, type) {
    switch (type) {
      case 'title': 
        return this.factoryTitle(props);
      case 'card': 
      return this.factoryCard(props);
      default:
        return this; 
    }
  },

}