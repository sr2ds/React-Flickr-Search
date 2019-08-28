import React from "react";

class SearchBar extends React.Component {
	getFlickrAPI(event) {
		const string = `teste`
		const apiKey = '9f375f3ac03a2010276ff850f1f285d9'
		fetch(`https://www.flickr.com/services/rest?api_key=${apiKey}&method=flickr.photos.search&text=${string}&format=json`)
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
			<div style={{ display: 'flex' }}>
				<input style={inputStyle} type="text" onChange={this.getFlickrAPI} />
			</div>
		);
	}
}
export default SearchBar;