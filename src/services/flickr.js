const apiKey = '9f375f3ac03a2010276ff850f1f285d9'
const flickrBase = `https://www.flickr.com/services/rest?api_key=${apiKey}&format=json&per_page=8&nojsoncallback=?`

export function flickrSearch(string, page, tag = false) {
	let flickrPath = `${flickrBase}
								&method=flickr.photos.search
								&extras=description,url_n,tags,owner_name
								&page=${page}`
	if (!tag) {
		flickrPath = flickrPath + `&text=${string}`
	}  else {
		flickrPath = flickrPath + `&tags=${string}`
	}
	return fetch(flickrPath)
}
