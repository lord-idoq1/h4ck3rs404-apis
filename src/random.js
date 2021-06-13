const fetch = require('node-fetch')
const baseURI = 'https://h4ck3rs404-api.herokuapp.com/'

module.exports.katasenja = function katasenja() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/katasenja?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.katabijak = function katabijak() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/katabijak?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.motivasi = function motivasi() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/motivasi?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.katailham = function katailham() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/katailham?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.animequote = function animequote() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/animequote?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.wibu = function wibu() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/wibu?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.pantun = function pantun() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/randomptn?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.bacot = function baxot() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/bacot?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.bucin = function bucin() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/bucin?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.cerpen = function cerpen() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/cerpen?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.proxyfree = function proxyfree() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/proxy-random?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

