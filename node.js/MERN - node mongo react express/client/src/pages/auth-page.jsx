import { useContext, useEffect, useState } from "react";
import useHttp from "../hooks/http.hook";
import useErrorMessage from "../hooks/message.hook";
import { AuthContext } from "../context/auth-context";

export default function AuthPage() {

	const auth = useContext(AuthContext);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const {loading, request, error, clearError} = useHttp();

	const message = useErrorMessage(); // в объект message присваиваем функцию из кастомного хука, которая обрабатывает текст и выводит её в качастве ошибки

	// запускается, если меняется сообщение ошибки error - который является стейтом из хука useHttp
	useEffect(() => {
		message(error); // выводить будем только основную ошибку, можно ещё запариться и внутренние добавить. При этом изначально ошибки нет - и ничего не выведется, потому что прописана ошибка
		clearError(); // если не чистим ошибку, то она не обновится и мы не получим заново уведомление. При этом сущности, которые будут использоваться в виде зависимостей необходимо оборачивать в useCallback
	}, [error, message, clearError]);

	useEffect(() => {
		window.M.updateTextFields();  // по идее должен устранять баг с неправильным отображением текстовых полей при перезагрузки, но вроде и без этого норм
	}, [])

	const registerHandler = async () => {
		try {
			console.log('data..........................................');
			const data = await request("/api/auth/register", "POST", { ...form });
			// const data = await request("http://localhost:5000/api/auth/register", "POST", { ...form });  // чтобы перенаправить вызов в dev-режиме мы используем в package.json - proxy
			console.log('data');
			console.log(data);
			message(data.message);
			auth.login(data.token, data.userId)
		} catch (err) {
			console.log(err)
		}
	};

	const loginHandler = async () => {
		try {
			const data = await request("/api/auth/login", "POST", { ...form });
			// const data = await request("http://localhost:5000/api/auth/register", "POST", { ...form });  // чтобы перенаправить вызов в dev-режиме мы используем в package.json - proxy
			message(data?.message);
			auth.login(data.token, data.userId)

		} catch (err) {  // ошибка прилетает или из выбрашенной http.hook или из ошибки в самом скрипте - главное её поймать, чтобы не рухнул весь скрипт
			console.log(err)
		}
	};

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	return (
		<div className="row center">
			<div className="col s6 offset-s3">
				<h1>Сократи ссылку</h1>
				<div className="card blue darken-1">
					<div className="card-content white-text">
						<span className="card-title">Авторизация</span>
						<div>
							<div className="input-field">
								<label htmlFor="email" style={{ position: "relative" }}>
									Email
								</label>
								<input
									placeholder="Введите email"
									id="email"
									type="text"
									name="email"
									className="yellow-input"
									value={form.email}
									onChange={changeHandler}
								/>
							</div>

							<div className="input-field">
								<label htmlFor="password" style={{ position: "relative" }}>
									Введите пароль
								</label>
								<input
									placeholder="Введите password"
									id="password"
									type="password"
									name="password"
									className="yellow-input"
									value={form.password}
									onChange={changeHandler}
								/>
							</div>
						</div>
					</div>
					<div className="card-action">
						<button
							className="btn yellow darken-4"
							style={{ marginRight: 20 }}
							disabled={loading}
							onClick={loginHandler}
						>
							Войти
						</button>
						<button
							className="btn grey lingten-1 black-text"
							onClick={registerHandler}
							disabled={loading} // когда грузится, кнопки не активны
						>
							Регистрация
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
