import React from "react";
import queryString from 'query-string'
import { searchByTags } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'

class Tags extends React.Component {

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true, page: 1 }
	}

	getImages(tagName) {
		searchByTags(tagName, this.state.page)
			.then(response => response.json())
			.then(data => {
				this.setState({
					images: data.photos,
					isLoading: false,
					search: tagName,
					// page: this.state.page + 1
				})
			})
	}

	componentDidMount() {
		const { t } = queryString.parse(this.props.location.search)
		return this.getImages(t)
	}

	componentDidUpdate(prevProps) {
		const { t } = queryString.parse(this.props.location.search)
		return this.getImages(t)
	}

	render() {
		const { isLoading, images } = this.state;

		if (!isLoading) {
			return (
				<>
					<div className="info">
						<span>
							{this.state.search ? `Você está visualizando a tag "${this.state.search}"` : ''}
						</span>
						<span>
							{this.state.search ? `Mostrando ${images.photo.length} imagens.` : ''}
						</span>
					</div>
					<div className="grid">
						<Grid images={images.photo} />
					</div>
				</>
			);
		}
		return <Loader className="grid" type="Bars" color="#00BFFF" height="100" width="100" />
	}
}

export default Tags;