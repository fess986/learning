export default {}

declare global {
	interface Window{
		appServerData: {
			apiUrl: string,
			timestamp: number
		}
	}
}

declare module 'axios' {
	export interface AxiosRequestConfig{
		errSuppression?: {
			text: string,
			fallback?: unknown
		}
	}
}