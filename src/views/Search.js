import React from "react";
import queryString from 'query-string'
import { searchByString } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true }
	}

	setSearch(string, page) {
		// this.props.dispatch({ type: 'LOADING' })
		searchByString(string, page)
			.then(response => response.json())
			.then(data => {
				if (page > 1) {
					const { photo } = this.props.images
					data.photos.photo = photo.concat(data.photos.photo)
				}
				this.props.dispatch({ type: 'SET_RESULT', loading: false, images: data.photos, page: page, search_term: string })
			})
	}

	componentDidMount() {
		const { s } = queryString.parse(this.props.location.search)
		this.setSearch(s, this.props.page)
	}

	componentDidUpdate(prevProps, newProps) {
		const { s } = queryString.parse(this.props.location.search)
		// Impedir reload intermitente -> REVISAR
		if (this.props.history.action !== "POP" || this.props.search_term !== s) {
			this.setSearch(s, this.props.page)
		}
	}

	async handleLoadMore() {
		const { s } = queryString.parse(this.props.location.search)
		this.setSearch(s, this.props.page + 1)
	}

	render() {
		if (this.props.loading) {
			return <Loader className="grid" type="Bars" color="#00BFFF" height="100" width="100" />
		}
		return (
			<>
				<div className="info">
					<span>
						{this.props.search_term ? `Você buscou por "${this.props.search_term}"` : ''}
					</span>
					<span>
						{this.props.search_term ? `Mostrando ${this.props.images.photo.length} imagens.` : ''}
					</span>
				</div>
				<div className="grid">
					<Grid />
				</div>
				<div>
					<button className="load-more" onClick={this.handleLoadMore.bind(this)}>
						Load More
						</button>
				</div>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state
	}
}

export default connect(mapStateToProps)(Search);
