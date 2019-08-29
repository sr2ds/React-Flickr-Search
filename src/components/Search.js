import React from "react";
import queryString from 'query-string'

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			images: [],
		}
	}

	componentDidMount() {
		this.getFlickrAPI()
	}

	async getFlickrAPI(event) {
		const { s } = queryString.parse(this.props.location.search)
		const apiKey = '9f375f3ac03a2010276ff850f1f285d9'
		fetch(`https://www.flickr.com/services/rest?api_key=${apiKey}&method=flickr.photos.search&text=${s}&format=json&nojsoncallback=?`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					images: data.photos,
					isLoading: false,
					search: s
				})
			})
	}

	render() {
		const { isLoading, images, search } = this.state;
		return (
			<>
				{!isLoading ?
					<div className="photos container">
						{images.photo.map(function (img, index) {
							return <img alt={search} src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_t.jpg`} key={index} />;
						})}
					</div>
					:
					`isLoading`
				}
			</>
		);
	}
}

export default Search;