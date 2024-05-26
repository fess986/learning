import { useEffect, useState } from "react"
import { TProduct } from "../types/data";
import useApi from "../hooks/useApi";

export default function CatalogList(){
	const api = useApi();
	const [ products, setProducts ] = useState<TProduct[]>([]);
	const [ loading, setLoading ] = useState<boolean>(true);
	
	useEffect(() => {
		api.products.all().then(products => {
			setProducts(products);
			setLoading(false);
		});
	}, [ api ]);

	return <div>
		{ loading && <div>loading...</div> }
		{ !loading && <>
			<h2>Items in catalog: { products.length }</h2>
			<ul className="list-group">
				{ products.map(pr => <li key={ pr.id } className="list-group-item">{ pr.title } : { pr.price }</li>) }
			</ul>
			<span className="totalBox">{ products.reduce((t, pr) => t + pr.price, 0) }</span>
		</> }
	</div>
}