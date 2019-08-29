import React from "react";

class SearchBar extends React.Component {
	
	constructor(props) {
		super(props)
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(this.props.history)		
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
				<form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
					<input
						placeholder="Pesquisar"
						type="text"
						name="s"
						style={inputStyle}
					/>
				</form>
			</>
		);
	}
}

export default SearchBar;