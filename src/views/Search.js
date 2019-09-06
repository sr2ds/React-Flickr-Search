import React from "react";
import queryString from 'query-string'
import { flickrSearch } from '../services/flickr'
import GridInfo from '../components/GridInfo'
import Grid from '../components/Grid'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';

class Search extends React.Component {

	constructor(props) {
		super(props);
	}

	setSearch() {

		const { pathname } = this.props.location
		const search = queryString.parse(this.props.location.search)
		const string = pathname === '/tags' ? search.t : search.s
		const isTag = (pathname === '/tags')
		
		if (isTag) {
			this.props.dispatch({ type: 'TAG', tag:true })
		} else {
			this.props.dispatch({ type: 'TAG', tag:false })

		}

		flickrSearch(string, this.props.page, isTag)
			.then(response => response.json())
			.then(data => {
				if (this.props.page === 1 && (pathname === '/tags')) {
					this.props.dispatch({ type: 'CLEAR_RESULT' })
				}
				if (this.props.page > 1) {
					const { photo } = this.props.images					
						data.photos.photo = photo.concat(data.photos.photo)
				}
				this.props.dispatch({
					type: 'SET_RESULT',
					loading: false,
					images: data.photos,
					search_term: string
				})
			})
	}

	componentDidMount() {
		this.setSearch()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.images === this.props.images) {
			if(this.props.page === 1) {
				console.log('aaaa')
				this.props.dispatch({ type: 'CLEAR_RESULT' })
			}
			this.setSearch()
		}
	}

	async handleLoadMore() {
		this.props.dispatch({ type: 'INCREMENT_PAGE' })
		this.setSearch()
	}

	render() {
		if (this.props.loading) {
			return <Loader className="grid" type="Bars" color="#00BFFF" height="100" width="100" />
		}
		return (
			<>
				<GridInfo />

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
