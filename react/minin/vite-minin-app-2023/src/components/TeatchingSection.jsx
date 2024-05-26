import WaysToTeach from "./WaysToTeach";
import { ways } from "../data";

export default function TeachingSection() {
	return (
		<section>
			<ul>
				{ways.map((way) => (
					<WaysToTeach {...way} key={Math.random()} />
				))}

				{/* <WaysToTeach
							title={ways[0].title}
							description={ways[0].description}
						/> */}
				{/* разворачиваем объект и получаем значения */}
				{/* <WaysToTeach {...ways[1]} />
						<WaysToTeach {...ways[2]} />
						<WaysToTeach {...ways[3]} />  */}
			</ul>
		</section>
	);
}
