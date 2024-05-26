import { useRoutes } from 'react-router-dom';
import { routesNative } from './router';
import AppLink from './components/router/Link';

export default function App(){
	const element = useRoutes(routesNative);

	const menuItems = [
		{ to: 'home', text: 'Home' },
		{ to: 'catalog', text: 'Catalog' }
	] as const;

	return <div>
		<header>
			<div className="container">
				header
				{ menuItems.map(item => <AppLink to={item.to}>{item.text}</AppLink>) }
			</div>
		</header>
		<main>
			<div className="container">
				{element}
			</div>
		</main>
		<footer>
			<div className="container">
				footer
			</div>
		</footer>
	</div>
}