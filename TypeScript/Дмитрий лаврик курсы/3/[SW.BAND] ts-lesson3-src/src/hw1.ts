export default {}

type TProduct = {
	id: number
	title: string
	price: number
	rest: number
}

type TProductDetailed = TProduct & {
	reviews: TReview[]
}

type TReview = {
	id :number,
	name: string,
	text: string,
	value: number
}

type GetJsonSuccess<T> = {
	res: true,
	data: T
}

type GetJsonError = {
	res: false,
	data: Error
}

type GetJsonResult<T> = GetJsonSuccess<T> | GetJsonError;

async function getJSON<T>(url: string) : Promise<GetJsonResult<T>>{
	try{
		const response = await fetch(url);

		if(!response.ok){
			throw new Error(`${response.status} ${await response.text()}`);
		}

		return {
			res: true,
			data: await response.json() as T
		}
	}
	catch(e){
		return {
			res: false,
			data: e as Error
		}
	}
}

(async () => {
	const productsResponse = await getJSON<TProduct[]>('https://faceprog.ru/reactcourseapi/products/index.php');
	
	if(productsResponse.res){
		productsResponse.data.forEach(pr => { console.log(pr.price) });
	}
	else{
		productsResponse.data
	}
	

	const productResponse = await getJSON<TProductDetailed>('https://faceprog.ru/reactcourseapi/products/index.php?id=10330');
	
	if(productResponse.res){
		console.log(productResponse.data.title);
	}
	else{
		console.log(productResponse.data);
	}
	
})();

