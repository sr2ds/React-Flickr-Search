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
					{images.map(function (image, index) {
						return (
							<Card image={image} key={index} {...index} />
						)
					})}
			</>
		);
	}
}

export default Grid;