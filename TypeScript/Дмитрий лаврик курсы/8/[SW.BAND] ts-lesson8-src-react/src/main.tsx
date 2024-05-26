import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import apiContext from './context/apiContext.ts'
import createApi from './api/index.ts'
import createHttp from './api/http.ts'
import './shared/fn.ts'

const http = createHttp(window.appServerData.apiUrl);
const api = createApi(http);

http.interceptors.response.use(r => r, e => {
	if(e.config.errSuppression){
		console.log('show err box to client');
		return { data: null };
	}
	else{
		return Promise.reject(e);
	}
})

api.products.all();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<apiContext.Provider value={api}>
				<App />
			</apiContext.Provider>
		</BrowserRouter>
	</React.StrictMode>,
)
