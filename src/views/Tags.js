import React from "react";
import queryString from 'query-string'
import { searchByTags } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'

class Tags extends React.Component {
	// https://www.flickr.com/services/api/misc.urls.html

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true }
	}

	getImages(tagName) {
		searchByTags(tagName)
			.then(response => response.json())
			.then(data => {
				this.setState({
					images: data.photos,
					isLoading: false,
					search: tagName
				})
			})
	}

	componentDidMount() {
		const { t } = queryString.parse(this.props.location.search)
		this.getImages(t)
	}

	render() {
		const { isLoading, images } = this.state;

		return (
			<>
				<div className="info">
					<div>
						{this.state.search ? `Você está visualizando a tag "${this.state.search}"` : ''}
					</div>
					<div>
						{this.state.search ? `Mostrando "${images.photo.length}" imagens.` : ''}
					</div>
				</div>
				<div className="grid">
					{!isLoading ?
						<Grid images={images.photo} />
						:
						<Loader type="Puff" color="#00BFFF" height="100" width="100" />
					}
				</div>

			</>
		);
	}
}

export default Tags;