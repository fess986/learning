import { TCart } from "../types/data";
import http from "./http"

export default {
	async load(token: string){
		return (await http.get<TCart>(`cart/load.php?token=${token}`)).data;
	},
	async add(token: string, id: number){
		return (await http.get<boolean>(`cart/add.php?token=${token}&id=${id}`)).data;
	}
}