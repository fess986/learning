import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import apiContext from './context/apiContext.ts'
import createApi from './api/index.ts'
import createHttp from './api/http.ts'

const http = createHttp('https://faceprog.ru/reactcourseapi');
const api = createApi(http);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<apiContext.Provider value={api}>
				<App />
			</apiContext.Provider>
		</BrowserRouter>
	</React.StrictMode>,
)


class C {
  x = 0;
  y = 0;
}
 

type T0 = InstanceType<typeof C>;
     
// type T0 = C