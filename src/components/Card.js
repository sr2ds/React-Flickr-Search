import React from "react";
import TagList from './TagList'

class Card extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { image, index } = this.props

		return (
			<>
				<div className="card">
					<div className="card-header">{image.title ? image.title : "No name"}</div>
					<div className="card-main">
						<img alt={image.title} src={image.url_n} key={index} title={image.description._content} />
						<div className="owner">{image.ownername}</div>
						<div className="tag-list">
							<TagList tags={image.tags.split(' ')} />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Card;