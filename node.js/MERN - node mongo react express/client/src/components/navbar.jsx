import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export default function Navbar() {

  const auth = useContext(AuthContext)

	const logoffHandler = (evt) => {
		evt.preventDefault();
    auth.logout()  // удаляем данные регистрации
	};

	return (
		<nav>
			<div className="nav-wrapper blue darken-1" style={{padding: "0 2rem"}}>
				<span className="brand-logo">Ссылки</span>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<NavLink to="/create">Создание ссылок</NavLink>
					</li>
					<li>
						<NavLink to="/links">Ссылки</NavLink>
					</li>
					<li>
						{/* <a href="/" onClick={logoffHandler}> */}
						<NavLink to="/" onClick={logoffHandler}>
							Выйти
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
