const fetch = require('node-fetch')
const baseURI = 'https://xtream-api.herokuapp.com/'

module.exports.ebase32 = function ebase32(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/base32/encode?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dbase32 = function dbase32(encode) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/base64/decode?encode=' + encode + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ebase64 = function ebase64(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/a/encode?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dbase64 = function dbase64(encode) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/base64/decode?encode=' + encode + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ehex = function ehex(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/hex/encode?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dhex = function dhex(encode) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/hex/decode?encode=' + encode + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.eoctal = function eoctal(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/octal/encode?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.doctal = function doctal(encode) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/octal/decode?encode=' + encode + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ebinary = function ebinary(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/bnary/encode?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.dbinary = function dbinary(encode) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/binary/decode?encode=' + encode + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.md5 = function md5(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/md5?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sha1 = function sha1(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/sha1?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sha256 = function sha256(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/sha256?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sha512 = function sha512(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/b?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sha224 = function sha224(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/sha224?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sha384 = function sha384(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/sha384?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.blake2b = function blake2b(text) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/blake2b?text=' + text + '&apikey=404Api')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
