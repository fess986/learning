export type TProduct = {
	id: number,
	title: string,
	price: number,
	rest: number
}

export type TReview = {
	id: number,
	name: string,
	text: string,
	value: number
}

export type TProductFull = TProduct & {
	reviews: TReview[]
}

export type TCartItem = {
	id: number,
	cnt: number
}

export type TCart = {
	token: string,
	needUpdate: boolean,
	cart: TCartItem[]
}