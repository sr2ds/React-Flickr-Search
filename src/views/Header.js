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
		const inputStyle = {
			flexGrow: '4',
			height: '50px',
			borderRadius: '30px',
			fontSize: '30px',
			justifyContent: 'center',
			margin: '0px 60px',
			outline: 0,
			padding: '10px 20px'
		}
		return (
			<>
				<Link to="/"><h1>Flickr Search</h1></Link>

				<form onSubmit={this.handleSubmit.bind(this)} style={{ display: 'flex' }}>
					<input
						placeholder="Pesquisar"
						type="text"
						name="search"
						style={inputStyle}
						required
					/>
				</form>
			</>
		);
	}
}

export default withRouter(SearchBar);