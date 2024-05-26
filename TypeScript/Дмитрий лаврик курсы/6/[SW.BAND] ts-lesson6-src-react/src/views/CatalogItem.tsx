import AppLink from "../components/router/Link";

export default function CatalogItem(){
	return <div>
		<h1>Catalog Item</h1>
		<AppLink to="catalog" className="btn btn-primary">1</AppLink>
		<AppLink to="catalog.item" params={{ id :1 }} className="btn btn-primary">1</AppLink>
		<AppLink to="home">11</AppLink>
		<AppLink to="catalog.item" params={{ id: 1 }}>1</AppLink>
	</div>
}