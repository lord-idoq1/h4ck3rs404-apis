const fetch = require('node-fetch')
const baseURI = 'https://xtream-api.herokuapp.com/'

module.exports.indoxxi = function indoxxi(q) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/indoxxi?q=' + query + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.lk21 = function lk21(q) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/lk21/search?film=' + query + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.cinemakeren21 = function cinemakeren21(q) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/ck21/search?q=' + query + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.popcorn21 = function popcorn21(q) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/pn21/search?film=' + query + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.bioskopkeren = function bioskopkeren(q) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/bioskopkeren?q=' + query + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
