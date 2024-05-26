import { useState } from "react";
import ButtonContext from "./components/ButtonContext/ButtonContext";
import { useRef } from "react";

export default function FeedbackRef() {
	const [show, setShow] = useState(false);
	const input = useRef();
	// console.log(input)

	const handlerKeyDown = function (evt) {
		if (evt.key === "Enter") {
			console.log(input.current.value);
			setShow((prev) => true);
		}
	};

	return (
		<section>
			<h1>{input.current?.value}</h1>
			{/* так как input не сразу инициализируется, мы можем получитьошибки в отображении если не будем проверять наличие свойств. Он получает видимо асинхронно это значение */}

			<hr />
			<br />

			<label htmlFor="name" style={{ display: "block" }}>
				Ваше имя: {show && input.current.value}{" "}
			</label>
			<input
				ref={input}
				type="text"
				id="name"
				className="input"
				onKeyDown={handlerKeyDown}
			/>

			{/* <h1>{input.current?.value}</h1>  */}
			{/* тут тоже будет ошибка, даже не смотря на то что мы раньше объявили реф */}

			<pre></pre>
		</section>
	);
}
