import React from "react";
import Card from './Card'

class Grid extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { images } = this.props
		
		return (
			<>
				<div className="container">
					{images.map(function (image, index) {
						return (
							<Card image={image} key={index} {...index} />
						)
					})}
				</div>
			</>
		);
	}
}

export default Grid;