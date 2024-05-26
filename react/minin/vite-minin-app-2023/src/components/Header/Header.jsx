import { useState } from 'react';
import logo from '/logo-name.svg'  // мы можем импортировать картинки напрямую из папки public, при этом прописывать эту папку не нужно
// import './Header.css'
import {styled} from 'styled-components'
import { useEffect } from 'react';

// console.log(styled)

// прописываем стили для тега header и оборачиваем полученным компонентом наш выходной компонент. если мы выберем вместо styled.header какой-нить див, то в вёрстку попадет именно див
const StyledHeader = styled.header`
	height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`
// console.log(StyledHeader)

export default function Header() {

	const [now, setNow] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000)

		return ( // будет вызываться только при уничтожения компонента
			clearInterval(interval)
		)
		
	}, []) // так как пустые зависимости то запустится один раз


	setInterval(() => setNow(new Date()), 1000)  // при этом будет перерисовываться только этот компонент
  // const now = new Date() 

	return (
		<StyledHeader>
			{/* <h3>Заголовок h3</h3> */}

      <img src={logo} alt="ass" />

			<span>текущее время: { now.toLocaleTimeString() } </span>
		</StyledHeader>
	);
}