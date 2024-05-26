import { useState } from "react";
import Button from './Button/Button';
import ButtonContext from "./ButtonContext/ButtonContext";


export default function DiferensesSection() {
  	// let content = 'нажми на кнопку'
	const [content, setContent] = useState(null);

  const clickHandler = (type) => {
    console.log('click', type)
  }

	const clickHandlerContext = (type) => {

		setContent(type); // если нажимаем на ту же кнопку, приложение не ререндерится, видимо внутренняя оптимизация реакта понимает что ничего не изменилось
		// content = type
		console.log("clicked", content); // так писать неправильно, так как переменная  content - изменится только при следущем рендере+
		console.log("clicked", type);
	};

  let tabContent = null;  // вариант рендеринга когда параметры рассчитываются вне jsx-вёрстки
	if (content) {
		tabContent = <p>{content}</p>
	} else {
		tabContent = <p>Нажмите на кнопку</p>
	}


	return (
		<>
			<section>

				<Button
					onClick1={() =>
						clickHandler(
							"параметр передаём сверху вниз - параметры вызова в самом компоненте при этом игнорируется"
						)
					}
				>
					Передача параметров сверху-вниз
				</Button>

				<Button onClick1={clickHandler}>
					Передача параметров снизу-вверх
				</Button>

			</section>

			<section>
				<ButtonContext
					isActive={content === "easy"}
					onClick1={() => clickHandlerContext("easy")}
				>
					easy
				</ButtonContext>

				<ButtonContext
					isActive={content === "hard"}
					onClick1={() => clickHandlerContext("hard")}
				>
					hard
				</ButtonContext>

			</section>

			{/* <p>{content}</p> */}

			{/* {content ? content : <p>Нажмите на кнопку</p>} */}

			{!content && <p>Нажмите на кнопку</p>}
			{content && <p>{content}</p>}

			{tabContent}
		</>
	);
}
