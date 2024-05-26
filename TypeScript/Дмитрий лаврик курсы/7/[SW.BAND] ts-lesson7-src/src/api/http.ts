import axios from 'axios'

export type HttpPlugin = ReturnType<typeof axios.create>;

export default function createHttp(baseURL: string){
	return axios.create({
		baseURL,
		timeout: 10000
	});
}