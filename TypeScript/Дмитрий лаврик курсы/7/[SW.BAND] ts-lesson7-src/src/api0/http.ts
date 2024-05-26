import axios from 'axios'

const http = axios.create({
	baseURL: 'http://faceprog.ru/reactcourseapi',
	timeout: 10000
});

export default http;