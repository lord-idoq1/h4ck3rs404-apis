const fetch = require('node-fetch')
const baseURI = 'https://h4ck3rs404-api.herokuapp.com/'

module.exports.instagram = function instagram(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/igdow/?url=' + url + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytmp3 = function ytmp3(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/ytmp3/?url=' + url + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytmp4 = function ytmp4(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/ytmp4/?url=' + url + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.soundcloud = function soundcloud(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/soundcloud/?url=' + url + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.joox = function joox(q) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/joox?judul=' + q + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.mediafire = function mediafire(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/mediafire/?url=' + url + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
