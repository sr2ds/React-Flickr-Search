import React from "react";
import queryString from 'query-string'
import { searchByTags } from '../services/flickr'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';

class Tags extends React.Component {

	constructor(props) {
		super(props);
		this.state = { images: [], isLoading: true, page: 1 }
	}

	componentDidMount() {
		const { t } = queryString.parse(this.props.location.search)

		this.props.dispatch({ type: 'TAG_SEARCH', term: "" })

		searchByTags(t, this.state.page)
			.then(response => response.json())
			.then(data => {
				this.setState({
					images: data.photos,
					isLoading: false,
					search: t,
				})
			})
	}

	componentDidUpdate(prevProps, newProps) {
		const { t } = queryString.parse(this.props.location.search)
		
		this.props.dispatch({ type: 'TAG_SEARCH', term: "" })

		if (this.state.search !== t) {
			searchByTags(t, this.state.page)
				.then(response => response.json())
				.then(data => {
					this.setState({
						images: data.photos,
						isLoading: false,
						search: t,
					})
				})
		}
	}

	async handleLoadMore() {
		const { t } = queryString.parse(this.props.location.search)

		searchByTags(t, this.state.page + 1)
			.then(response => response.json())
			.then(data => {
				data.photos.photo = this.state.images.photo.concat(data.photos.photo)
				this.setState({
					images: data.photos,
					isLoading: false,
					search: t,
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
							{this.state.search ? `Você está visualizando a tag "${this.state.search}"` : ''}
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

export default connect()(Tags);