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
				<div className="photos">
					<img alt={image.title} src={image.url_n} key={index} title={image.description._content} />
					<div>
						<span>{image.title}</span>
						<span>{image.ownername}</span>
						<span>
							<TagList tags={image.tags.split(' ')} />
						</span>
					</div>
				</div>
			</>
		);
	}
}

export default Card;