import { Routes, Route, Navigate } from "react-router-dom";
import LinksPage from "./pages/links-page";
import CreatePage from "./pages/create-page";
import DetailPage from "./pages/detail-page";
import AuthPage from "./pages/auth-page";

export default function useRoutes(isAuth) {
	if (isAuth) {
		return (
			<Routes>
				<Route path="/">
					<Route index element={<CreatePage />} />
					<Route path="links" element={<LinksPage />} />
					<Route path="create" element={<CreatePage />} />
					<Route path="detail/:id" element={<DetailPage />} />
				</Route>
				{/* <Route path="*"	element={<h1>Ошибка 404. Страница не существует.</h1>}/> */}
				<Route path="*" element={<Navigate to="/create" replace />} />
				{/* параметр replace нужен для того чтобы переписать историю с неправильного пути на /create */}
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/">
				<Route index element={<AuthPage />} />
				<Route path="AuthPage" element={<AuthPage />} />
			</Route>
			<Route path="*" element={<Navigate to="/AuthPage" replace />} />
		</Routes>
	);
}
