import { useState } from "react";
import ButtonContext from "./components/ButtonContext/ButtonContext";

export default function Feedback1() {
  // тут мы отдельно меняем все стейты
	const [name, setName] = useState("");
	const [hasName, setHasName] = useState(true);
	const [reason, setReason] = useState("second");

  // теперь сделаем тоже самое через объект-состояния формы. Главная особенность будет состоять в том, что при смене каких либо полей, необходимо основываться на предыдущем состоянии объекта и переписывать только нужные поля, чтобы не потерять их значение

	const onChangeHandler = (evt) => {
		// console.log(evt)
		setName(evt.target.value);
		setHasName(evt.target.value.trim().length !== 0); // при этом есть нюанс, что мы не можем проверять переменную name - так как она на текущем цикле рендеринга всё ещё будет хранить текущее состояние и поменяется только в следущем цикле, а нам нужно уже сейчас корректно отображать значение
	};

	function onClickHandler() {

		// setHasName(!hasName);  // двойное отрицание не сработает
		// setHasName(!hasName);  // по идее должно остаться то же значение, но так как состояние не меняется сразу, то идея функционала не будет работать

    setHasName((prev) => !prev)
    // console.log(hasName) // тут всё равно будет предыдущее значение
    // setHasName((prev) => !prev) // а вот так действительно состояние поменяется сразу
    // console.log(hasName) // тут всё равно будет предыдущее значение

	}

	return (
		<section>

			<hr />
			<br />

			<ButtonContext onClick1={onClickHandler}>Переключить состояние</ButtonContext>

			<form action="post" className="form">
				<label htmlFor="name">Ваше имя</label>
				<input
					type="text"
					id="name"
					className="input"
					value={name}
					onChange={onChangeHandler}
					style={{
						border: hasName ? "4px double green" : "4px double red",
					}}
				/>

				<label htmlFor="reason">Отправьте сообщение об ошибке</label>
				<select
					name="reason"
					id="reason"
					value={reason}
					onChange={(evt) => setReason(evt.target.value)}
				>
					<option value="first">первая ошибка</option>
					<option value="second">вторая ошибка</option>
					<option value="third">третья ошибка</option>
				</select>

				<ButtonContext isActive={hasName} disabled={!hasName}>
					Отправить заявку
				</ButtonContext>

				<pre>
					name: {name}
					<br />
					reason: {reason}
				</pre>
			</form>
		</section>
	);
}
