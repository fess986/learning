import { TCart } from "../types/data";
import { HttpPlugin } from "./http";

export default function createCartApi(http: HttpPlugin){
	return {
		async load(token: string){
			return (await http.get<TCart>(`cart/load.php?token=${token}`)).data;
		},
		async add(token: string, id: number){
			return (await http.get<boolean>(`cart/add.php?token=${token}&id=${id}`)).data;
		}
	}
}