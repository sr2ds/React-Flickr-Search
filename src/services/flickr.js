const apiKey = '9f375f3ac03a2010276ff850f1f285d9'
const flickrBase = `https://www.flickr.com/services/rest?api_key=${apiKey}&format=json&per_page=10&nojsoncallback=?`

export function searchByString(string) {
	const flickrPath = `${flickrBase}
								&method=flickr.photos.search
								&text=${string}
								&extras=description,url_n,tags,owner_name`

	return fetch(flickrPath)
}

export function searchByTags(tagName) {
	const flickrPath = `${flickrBase}
	&method=flickr.photos.search
	&tags=${tagName}
	&extras=description,url_n,tags,owner_name`

	return fetch(flickrPath)
}