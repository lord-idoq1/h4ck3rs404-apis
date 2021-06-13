const fetch = require('node-fetch');
const baseURI = 'https://h4ck3rs404-api.herokuapp.com/'

module.exports.playstore = function playstore(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/playstore?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.bacakomik = function bacakomik(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/bacakomik?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sjalantikus = function sjalantikus(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/sjalantikus?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.detiks = function detiks(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/detiks?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dewabatch = function dewabatch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/dewabatch?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.pinterst = function pinterest(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/peinterst?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.gimage = function gimage(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/googleimage?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.steam = function steam(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/steam?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.mcpedl = function mcpedl(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/mcpedl?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.qanda = function qanda(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/qanda-search?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xnxx = function xnxx(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/xnxx?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.pornhub = function pornhub(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/phub-search?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xvids = function xvids(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/xvids-search?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.groupwa = function groupwa(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/groupwa?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.youwatch = function youwatch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/youwatch?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sfile = function sfile(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/sfile?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.cersex = function cersex(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/cersex?q=' + encodeURIComponent(query) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}


module.exports.heroml = function heroml(hero) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/heroml?hero=' + encodeURIComponent(hero) + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}