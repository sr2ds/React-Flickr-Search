import React from "react";
import queryString from 'query-string'
import { searchByString } from '../services/flickr'
import Grid from '../components/Grid'

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

	componentDidMount(){
		const { s } = queryString.parse(this.props.location.search)
		this.getImages(s)
	}

	render() {
		const { isLoading, images } = this.state;

		return (
			<>
				{this.state.search ? `Você buscou por "${this.state.search}"` : ''}
				{!isLoading ?
					<Grid images={images.photo} />
					:
					`isLoading`
				}
			</>
		);
	}
}

export default Search;