import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class TagList extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		const { tags } = this.props

		return (
			<>
				{tags.map((tag, index) => {
					if (tag && index < 4) {
						return <Link to={`/tags?t=${tag}`}
							key={index}
							tag={tag}
							onClick={() => this.props.dispatch({ type: 'CLEAR_RESULT' })}
						> {tag} </Link>
					}
				})}
			</>
		);

	}
}


function mapStateToProps(state) {
	return {
		...state
	}
}

export default connect(mapStateToProps)(TagList);
