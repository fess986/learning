import "materialize-css";
import useRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import useAuth from "./hooks/auth.hook";
// import useAuthContext from "./context/auth-context";
import { AuthContext } from "./context/auth-context";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
// import { AuthContextProvider } from "./context/auth-context";

function App() {
	const { login, logout, token, userId, isReady } = useAuth();
  const isAuth = !!token;
	const routes = useRoutes(isAuth);

	// переменная isReady нам нужна, чтобы избавиться от багов с отображением страниц при обновлении приложения. Она переходит в состояние true когда получен токен, без неё - приложение переходило бы в неавторизованный роутинг при перезагрузке страницы
	if (!isReady) {
		return <Loader />
	}

 // console.log(useAuthContext);
	// const AuthContext = useAuthContext();
  // console.log(AuthContext);
	
	return (
		<AuthContext.Provider value={{login, logout, token, userId, isAuth}}>
			<BrowserRouter>
				{isAuth && <Navbar />}
				<div className="container">{routes}</div>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
