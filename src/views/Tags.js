import React from "react";
import queryString from 'query-string'
import { searchByTags } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';

class Tags extends React.Component {

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true }
	}

	setSearch(tag_name, page) {
		// this.props.dispatch({ type: 'LOADING' })
		searchByTags(tag_name, page)
			.then(response => response.json())
			.then(data => {
				if (page > 1) {
					const { photo } = this.props.images
					data.photos.photo = photo.concat(data.photos.photo)
				}
				this.props.dispatch({ type: 'SET_RESULT', images: data.photos, page: page, search_term: tag_name })
			})
	}

	componentDidMount() {
		const { t } = queryString.parse(this.props.location.search)
		this.setSearch(t, this.props.page)
	}

	componentDidUpdate(prevProps, newProps) {
		const { t } = queryString.parse(this.props.location.search)
		this.setSearch(t, this.props.page)
	}

	async handleLoadMore() {
		const { t } = queryString.parse(this.props.location.search)
		this.setSearch(t, this.props.page + 1)
	}

	render() {
		if (this.props.loading) {
			return <Loader className="grid" type="Bars" color="#00BFFF" height="100" width="100" />
		}
		return (
			<>
				<div className="info">
					<span>
						{this.props.search_term ? `Você está visualizando a tag "${this.props.search_term}"` : ''}
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

export default connect(mapStateToProps)(Tags);
