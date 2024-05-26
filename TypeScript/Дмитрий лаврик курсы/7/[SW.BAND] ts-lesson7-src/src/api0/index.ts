import cart from './cart.ts'
import products from './products.ts'

const api = {
	cart,
	products
}

export default api;
export type TApi = typeof api;