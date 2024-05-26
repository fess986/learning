import { useState } from "react";
import ButtonContext from "./components/ButtonContext/ButtonContext";

export default function Feedback2() {
	// теперь сделаем тоже самое через объект-состояния формы. Главная особенность будет состоять в том, что при смене каких либо полей, необходимо основываться на предыдущем состоянии объекта и переписывать только нужные поля, чтобы не потерять их значение
	const [form, setForm] = useState({
		name: '',
		hasName: true,
		reason: 'second',
	})

	const onChangeHandler = (evt) => {

		// prev => ({}) - необходимо ставить круглые скобки чтобы сгруппировать контент
		setForm(prev => ({
			...prev, 
			name: evt.target.value,
			hasName: evt.target.value.trim().length !== 0,
		}))
	};

	function onClickHandler() {
		setForm((prev) => ({
			...prev,
			hasName: !form.hasName,
		}));
	}

	return (
		<section>
			<hr />
      <br />

			<ButtonContext onClick1={onClickHandler}>
				Переключить состояние
			</ButtonContext>

			<form action="post" className="form">
				<label htmlFor="name">Ваше имя</label>
				<input
					type="text"
					id="name"
					className="input"
					value={form.name}
					onChange={onChangeHandler}
					style={{
						border: form.hasName ? "4px double green" : "4px double red",
					}}
				/>

				<label htmlFor="reason">Отправьте сообщение об ошибке</label>
				<select
					name="reason"
					id="reason"
					value={form.reason}
					onChange={(evt) => setForm(prev => ({
						...prev,
						reason: evt.target.value,
					}))}
				>
					<option value="first">первая ошибка</option>
					<option value="second">вторая ошибка</option>
					<option value="third">третья ошибка</option>
				</select>

				<ButtonContext isActive={form.hasName} disabled={!form.hasName}>
					Отправить заявку
				</ButtonContext>

				<pre>
					{JSON.stringify(form, null, 2)}
				</pre>
			</form>
		</section>
	);
}
