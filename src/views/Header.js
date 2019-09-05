import React from "react";
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { term: props.term }
	}

	handleSubmit(event) {
		event.preventDefault()
		const input = event.target.search.value

		this.props.dispatch({ type: 'CHANGE_SEARCH', term: input })
		this.props.history.push(`/search?s=${input}`)
	}

	render() {
		return (
			<div className="header">
				<h1>
					<Link to="/"><h1>flickr-search {this.props.term}</h1></Link>
				</h1>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						placeholder="Pesquisar"
						type="text"
						name="search"
						autoFocus={true}
						required
						value={this.term}
					/>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		term: state.term
	}
};

export default withRouter(connect(mapStateToProps)(SearchBar));
