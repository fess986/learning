import { useCallback, useEffect, useState } from "react";

const USER_DATA = "userData";

export default function useAuth() {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [isReady, setIsReady] = useState(false)  // состояние приложения

  // метод логина, который по полученному токену и айдишнику юзера, которые присылает нам сервер в ответ на успешную авторизацию - записывает в стейты токен и айдишник, а так же пишет их в локал сторадж, для сохранения данных об авторизации
	const login = useCallback(
		(jwtToken, id) => {
			setToken(jwtToken);
			setUserId(id);

			localStorage.setItem(
				USER_DATA,
				JSON.stringify({
					token : jwtToken,
					userId : id,
				})
			);
		},
		[] 
	);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		// setIsReady(false);

		localStorage.removeItem(USER_DATA);
	}, []);

	// если в хранилище есть данные регистрации - подсовываем их по умолчанию вместо обычного логина
	// так как запрос токена происходит в useEffect - то есть асинхронно, получается, что мы его получаем с задержкой и приложение изначально грузится в неавторизованном режиме, для того чтобы избавиться от этого бага добавим ещё одно состояние приложения - isReady
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(USER_DATA));

		if (data && data.token) {
			login(data.token, data.id)
		}
		setIsReady(true)
	}, [login])

	return {login, logout, token, userId, isReady};
}
