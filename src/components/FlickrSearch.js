import React from "react";
import SearchBar from './SearchBar'
import GridResults from './GridResults'

class FlickrSearch extends React.Component {
	constructor() {
		super();
		this.state = {
			pesquisa: ''
		}
	}

	setSearch(input) {
		this.setState({
			pesquisa: input
		})
	}

	render() {
		return (
			<div>
				<h1>Flickr Search</h1>
				<SearchBar pesquisar={this.setSearch.bind(this)} />

				<h1>
					{ this.state.pesquisa }
				</h1>

				<GridResults />
			</div>
		);
	}
}

export default FlickrSearch;