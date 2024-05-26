import Header from "./components/Header/Header";
import TeachingSection from "./components/TeatchingSection";
import DiferensesSection from "./components/DiferensesSection";
import IntroComponent from "./components/IntroComponent/IntroComponent";
import TabsSection from "./components/TabsSection";
import Feedback1 from "./Feedback1";
import Feedback2 from "./Feedback2";
import FeedbackRef from "./FeedbackRef";
import EffectSection from "./Effect";
import useInput from "./hooks/useInput";

import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
	const [currentPage, setCurrentPage] = useState("effects");
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const input1 = useInput('');

	// функцию феча ни в коем случае нельзя в самом коде вызывать, так как она будет запускаться при каждом рендеринге, поэтому следует это делать лишь в блоке useEffect с пустыми зависимостями
	// но создавать просто так такую функцию не корректно, так как при инициализации объекта она будет создаваться каждый раз. Правильно в таком случае или её создавать в том же юзэффекте, который её вызывает или же через useCallback
	// const fetchingUsers = async function() {
	// 	setLoading(true)
	// 	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	// 	const users = await response.json();
	// 	console.log(users)
	// 	setUsers(users)
	// 	setLoading(false)
	// }

	// объект функции создастся ровно один раз
	const fetchingUsersCallback = useCallback(async () => {
			setLoading(true)
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const users = await response.json();
			console.log(users)
			setUsers(users)
			setLoading(false)
	}, [])

	useEffect(() => {
		fetchingUsersCallback();
	}, [fetchingUsersCallback])


	// вариант с созданием функции и тут же её используем
	// useEffect(() => {
	// 	const fetchingUsers = async function() {
	// 		setLoading(true)
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/users')
	// 		const users = await response.json();
	// 		console.log(users)
	// 		setUsers(users)
	// 		setLoading(false)
	// 	}

	// 	fetchingUsers();
	// }, [])



	console.log("App rendered");

	return (
		<div>
			<Header />
			<main>
				<IntroComponent />
				<TabsSection currentPage={currentPage} onClick={(current) => setCurrentPage(current)} />

				{currentPage === "main" && (
					<>
						<TeachingSection />
						<DiferensesSection />

						{loading && <h3>Loading</h3> }

						{!loading && <input className="input" {...input1}></input>}
						{!loading && <h3>{input1.value}</h3>}

						{!loading && (
							<ul>
								{users.filter(user => user.name.toLowerCase().includes(input1.value.toLowerCase())).map(user => <li key={user.id}>{user.name}</li>)}
							</ul>
						)}
					</>
				)}

				{currentPage === "feedback1" && <Feedback1 />}
				{currentPage === "feedback2" && <Feedback2 />}
				{currentPage === "feedbackRef" && <FeedbackRef />}
				{currentPage === "effects" && <EffectSection />}

				{/* <Feedback /> */}
			</main>
		</div>
	);
}

export default App;
