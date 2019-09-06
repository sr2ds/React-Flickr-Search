import React from "react";
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
	}

	handleSubmit(event) {
		event.preventDefault()
		const input = event.target.search.value
		this.props.history.push(`/search?s=${input}`)
	}

	render() {
		return (
			<div className="header">
				<h1>
					<Link to="/"><h1>flickr-search</h1></Link>
				</h1>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						placeholder="Pesquisar"
						type="text"
						name="search"
						autoFocus={true}
						required
						value={this.search_term}
					/>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state
	}
}

export default withRouter(connect(mapStateToProps)(SearchBar));
