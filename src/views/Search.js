import React from "react";
import queryString from 'query-string'
import { searchByString } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true }
	}

	getImages(string) {
		searchByString(string)
			.then(response => response.json())
			.then(data => {
				return this.setState({
					images: data.photos,
					isLoading: false,
					search: string
				})
			})
	}

	componentDidMount() {
		const { s } = queryString.parse(this.props.location.search)
		return this.getImages(s)
	}

	componentDidUpdate(prevProps) {
		const { s } = queryString.parse(this.props.location.search)
		return this.getImages(s)
	}

	render() {
		const { isLoading, images } = this.state;

		if (!isLoading) {
			return (
				<>
					<div className="info">
						<span>
							{this.state.search ? `Você buscou por "${this.state.search}"` : ''}
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

export default Search;