import { useState, useEffect, useContext } from "react";
import useHttp from "../hooks/http.hook";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
	
	const [link, setLink] = useState("");
	const { request } = useHttp();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
		window.M.updateTextFields(); // по идее должен устранять баг с неправильным отображением текстовых полей при перезагрузки, но вроде и без этого норм
	}, []);

	const pressHandler = async (evt) => {
		if (evt.code === "Enter") {
      try {
				const data = await request("/api/link/generate", "POST", {
					from: link,
				}, {Authorization: `Baerer ${auth.token}`});  // передаём в headers.Authorization токен
        navigate(`/detail/${data.link._id}`)  // переходим на страницу детализации
			} catch (e) {}
		}
	};

	return (
		<div>
			<div className="row">
				<div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}></div>
				<h1>Сократи ссылку</h1>
				<div className="input-field">
					<label htmlFor="link" style={{ position: "relative" }}>
						Введите ссылку
					</label>
					<input
						placeholder="Вставьте ссылку"
						id="link"
						type="text"
						value={link}
						onChange={(e) => setLink(e.target.value)}
						onKeyDown={pressHandler}
					/>
				</div>
			</div>
		</div>
	);
}
