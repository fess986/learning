import { useParams } from "react-router-dom";
import AppLink from "../components/router/Link";
import useApiRequest from "../hooks/useApiRequest";

export default function CatalogItem(){
	const id = parseInt(useParams().id ?? '');
	const request = useApiRequest('products.one', id);

	return <div>
		<h1>Catalog Item</h1>
		{!request.done && <div>Loading...</div>}
		{request.success && <>
			<div>{request.data.reviews.length}</div>
			<AppLink to="catalog" className="btn btn-primary">1</AppLink>
			<AppLink to="catalog.item" params={{ id :1 }} className="btn btn-primary">1</AppLink>
			<AppLink to="home">11</AppLink>
			<AppLink to="catalog.item" params={{ id: 1 }}>1</AppLink>
		</>
		}
	</div>
}