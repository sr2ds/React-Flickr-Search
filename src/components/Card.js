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
					<div class="card">
						<div class="card-header">{image.title}</div>
						<div class="card-main">
							<img alt={image.title} src={image.url_n} key={index} title={image.description._content} />
							<div class="main-description">{image.ownername}</div>
							<TagList tags={image.tags.split(' ')} />
						</div>
					</div>
			</>
		);
	}
}

export default Card;