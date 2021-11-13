const fetch = require('node-fetch')
const baseURI = 'https://xtream-api.herokuapp.com/'

module.exports.caklontong = function caklontong() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/caklontong?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tebakgambar = function tebakgambar() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/caklontong?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.family100 = function family100() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/family100?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.math2 = function math2() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/math2?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.truthid = function truthid() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/truthid?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.truthen = function truthen() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/truthen?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dareid = function dareid() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/dareid?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dareen = function dareen() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/dareen?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.slot = function slot() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/slot?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tebakanime = function tebakanime() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/tebakanime?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.twister = function twister() {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/twister?apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.math = function math(mode) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/kuis/math?mode'+ mode + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
