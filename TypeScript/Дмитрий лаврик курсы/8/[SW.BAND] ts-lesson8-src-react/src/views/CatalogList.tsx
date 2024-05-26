import useApiRequest from "../hooks/useApiRequest"

export default function CatalogList(){
	const request = useApiRequest('products.all')

	return <div>
	{ !request.done && <div>loading...</div> }
	{ request.success && <>
		<h2>Items in catalog: { request.data.length }</h2>
		<ul className="list-group">
			{ request.data.map(pr => <li key={ pr.id } className="list-group-item">{ pr.title } : { pr.price }</li>) }
		</ul>
		<span className="totalBox">Sum: { request.data.reduce((t, pr) => t + pr.price, 0) }</span>
	</> }
</div>
}