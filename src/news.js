const fetch = require('node-fetch')
const baseURI = 'https://h4ck3rs404-api.herokuapp.com/'

module.exports.antara = function antara() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/antara?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.jalantikus = function jalantikus() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/jalantikus?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.detikupdate = function detikupdate() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/detikcomu?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.infohoax = function infohoax() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/infohoax?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.bbc = function bbc() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/bcc?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.okezone = function okezone() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/okezone?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.cnbc = function cnbc() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/news/cnbc?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
