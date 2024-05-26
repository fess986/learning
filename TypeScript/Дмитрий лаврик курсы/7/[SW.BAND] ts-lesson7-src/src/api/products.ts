import { TProduct, TProductFull } from "../types/data"
import { HttpPlugin } from "./http";

export default function createProductsApi(http: HttpPlugin){
	return {
		async all(){
			return (await http.get<TProduct[]>('products/index.php?delay')).data;
		},
		async one(id: number){
			return (await http.get<TProductFull>(`products/index.php?id=${id}`)).data;
		}
	}
}