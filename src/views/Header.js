import React from "react";
import { withRouter, Link } from 'react-router-dom';

class SearchBar extends React.Component {

	constructor() {
		super()
		this.state = { search: '' }
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.history.push(`/search?s=${this.state.search}`)
	}

	handleChange(event) {
		this.setState({
			search: event.target.value
		});
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
						onChange={this.handleChange.bind(this)}
						value={this.state.search}
					/>
				</form>
			</div>
		);
	}
}

export default withRouter(SearchBar);