import React from "react";

class GridResults extends React.Component {
	// https://www.flickr.com/services/api/misc.urls.html
	render() {
		return (
			<div class="container">
				<div class="photos">
					<img src={
						`https://farm{farmId}.staticflickr.com/{serverId}/{id}_{secret}_[size].jpg`
						}/>
				</div>
			</div>
		);
	}
}

export default GridResults;