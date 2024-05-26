function WaysToTeach(props) {

	return (
		<li>
			<p>
				<strong>{props.title}</strong>
			</p>
			{props.description}
		</li>
	);
}

export default WaysToTeach;