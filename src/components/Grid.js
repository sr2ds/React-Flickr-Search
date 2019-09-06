import React from "react";
import Card from './Card'
import { connect } from 'react-redux';

class Grid extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { photo } = this.props.images
		if (photo) {
			return (
				<>
					{photo.map(function (image, index) {
						return (
							<Card image={image} key={index} {...index} />
						)
					})}
				</>
			)
		}
		return <></>

	}
}

function mapStateToProps(state) {
	return {
		...state
	}
}

export default connect(mapStateToProps)(Grid);
