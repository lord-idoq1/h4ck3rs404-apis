const fetch = require('node-fetch');
const baseURI = 'https://xtream-api.herokuapp.com/'

module.exports.wiki = function idwiki(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/wikipedia?search=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.kbbi = function kbbi(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kbbi?kata=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.gabut = function gabut() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/gabut?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.translate = function translate(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/translate?kata=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.fakta = function fakta() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/faktaunik?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.google = function google(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/google?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.qanda = function qanda(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/qanda-detail?url=' + encodeURIComponent(url) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
