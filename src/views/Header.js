import React from "react";
import { withRouter, Link } from 'react-router-dom';

class SearchBar extends React.Component {

	constructor(props) {
		super(props)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.history.push(`/search?s=${event.target.search.value}`);
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
							autoFocus="true"
							required
						/>
					</form>
			</div>
		);
	}
}

export default withRouter(SearchBar);