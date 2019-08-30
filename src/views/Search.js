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
		this.getImages(s)
	}

	render() {
		const { isLoading, images } = this.state;

		return (
			<>
				<div className="info">
					<div>
						{this.state.search ? `Você buscou por "${this.state.search}"` : ''}
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

export default Search;