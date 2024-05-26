import { TProduct, TProductFull } from "../types/data"
import http from "./http"


export default {
	async all(){
		return (await http.get<TProduct[]>('products/index.php?delay')).data;
	},
	async one(id: number){
		return (await http.get<TProductFull>(`products/index.php?id=${id}`)).data;
	}
}