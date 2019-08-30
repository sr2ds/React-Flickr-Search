import React from "react";
import { Link } from "react-router-dom";

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
						return <Link to={`/tags?t=${tag}`} key={index} tag={tag}> {tag} </Link>
					}
				})}
			</>
		);
		
	}
}

export default TagList;