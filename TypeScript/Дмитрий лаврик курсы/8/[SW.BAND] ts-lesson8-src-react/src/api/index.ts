import { HttpPlugin } from './http.ts';

import createCartApi from './cart.ts'
import createProductsApi from './products.ts'
import { FlattenKeys } from '../types/utility.ts';

export default function createApi(http: HttpPlugin){
	const api = {
		cart: createCartApi(http),
		products: createProductsApi(http)
	}

	return api;
}

export type TApi = ReturnType<typeof createApi>
export type TApiKeys = FlattenKeys<TApi, true>