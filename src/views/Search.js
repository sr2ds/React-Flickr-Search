import React from "react";
import queryString from 'query-string'
import { searchByString } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true, page: 1 }
	}

	componentDidMount() {
		const { s } = queryString.parse(this.props.location.search)

		searchByString(s, this.state.page)
			.then(response => response.json())
			.then(data => {
				this.setState({
					images: data.photos,
					isLoading: false,
					search: s
				})
			})
	}

	componentDidUpdate(prevProps, newProps) {
		const { s } = queryString.parse(this.props.location.search)

		if (this.state.search !== s) {
			searchByString(s, this.state.page)
			.then(response => response.json())
			.then(data => {
				this.setState({
					images: data.photos,
					isLoading: false,
					search: s
				})
			})
		}
	}

	async handleLoadMore() {
		const { s } = queryString.parse(this.props.location.search)

		searchByString(s, this.state.page + 1)
			.then(response => response.json())
			.then(data => {
				data.photos.photo = this.state.images.photo.concat(data.photos.photo)
				this.setState({
					images: data.photos,
					isLoading: false,
					search: s,
					page: this.state.page + 1
				})
			})
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
					<div>
						<button className="load-more" onClick={this.handleLoadMore.bind(this)}>
							Load More
						</button>
					</div>
				</>
			);
		}

		return <Loader className="grid" type="Bars" color="#00BFFF" height="100" width="100" />
	}
}

export default Search;