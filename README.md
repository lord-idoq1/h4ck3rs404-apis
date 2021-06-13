# h4ck3rs404-api
Access h4ck3rs404 Rest Api Programmatically

### Main website 
[h4ck3rs404-api](https://h4ck3rs404-api.herokuapp.com)

#### If you have any suggestions of a website, open an issue!

## Installation

Via NPM:
```bash
$ npm install h4ck3rs404-apis
```

## Simple to Use

```js
const 404 = require('h4ck3rs404-apis');

/*
404.type.module-name(params)
.then(res => console.log(res))
.catch(err => console.log(err))
*/
```

### Media

```js
//Example!
404.media.soundcloud('https://soundcloud.com/aviwkila/aviwkila-doa-untuk-kamu')
.then(res => console.log(res))
.catch(err => console.log(err))

const url = "https://www.youtube.com/watch?v=qZIQAk-BUEc"

404.media.ytmp3(url)
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = media)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| instagram | url | json | Instagram Downloader |
| ytmp4 | url | json | Youtube Mp4 Downloader |
| ytmp3 | url | json | Youtube mp3 Downloader |
| joox | query | json | Joox Downloader |
| soundcloud | url | json | Soundcloud Downloader |
| mediafire | url | json | Mediafire Detail |
  
</details>

### Text Pro

```js
//Example!
404.textpro.blackpink('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))

404.textpro.pornhub('hello', 'world')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = textpro)</b> (click to show)</summary>

| module name | params | response |
| :--- | :---------- | :--- | :--- |
| blackpink | text1 | buffer |
| sky | text1 | buffer |
| toxic | text1 | buffer |
| thunder | text1 | buffer |
| horror | text1 | buffer |
| halloween | text1 | buffer |
| harrypotter | text1 | buffer |
| holograpich3d | text1 | buffer |
| metaldark | text1 | buffer |
| matrix | text1 | buffer |
| minion | text1 | buffer |
| blood | text1 | buffer |
| firework | text1 | buffer |
| wicker | text1 | buffer |
| luxury | text1 | buffer |
| graident | text1 | buffer |
| neonlight | text1 | buffer |
| neonnew | text1 | buffer |
| christmas | text1 | buffer |
| dropwater | text1 | buffer |
| xmas | text1 | buffer |
| lava | text1 | buffer |
| gloxycarbon | text1 | buffer |
| deluxecarbon | text1 | buffer |
| glue | text1 | buffer |
| joker | text1 | buffer |
| sandsummer | text1 | buffer |
| sandengreved | text1 | buffer |
| deluxesilver | text1 | buffer |
| gloxyblue | text1 | buffer |
| pornhub | text1, text2 | buffer |
| vintage | text1, text2 | buffer |
| avengers | text1, text2 | buffer |
| marvel | text1, text2 | buffer |
| ninja | text1, text2 | buffer |
| wolf | text1, text2 | buffer |
| girlgraffiti | text1, text2 | buffer |
| wolf2 | text1, text2 | buffer |
| marvel2 | text1, text2 | buffer |
| space3d | text1, text2 | buffer |
| stone | text1, text2 | buffer |
| lion | text1, text2 | buffer |
| stel | text1, text2 | buffer |
| grafiti | text1, text2 | buffer |

</details>

### Education

```js
//Example!
404.edu.wiki('Jokowi')
.then(res => console.log(res))
.catch(err => console.log(err))

404.edu.gabut()
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = edu)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- |
| wiki | query | json | Wikipedia |
| kbbi | query | json | KBBI (Kamus Besar Bahasa Indonesia) |
| gabut | - | json | - |
| translate | query | json | Translate All Country To Indonesian |
| fakta | - | json | Random Fakta Unik |
| google | query | json | Google Search |
| qanda | url | json | Get Qanda Detail |

</details>

### Search

```js
//Example!
404.search.playstore('PUBG')
.then(res => console.log(res))
.catch(err => console.log(err))

404.search.bacakomik('life hunter')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = search)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| playstore | query | json | plasytore.com |
| bacakomik | query | json | bacakomik.co |
| jalantikus | query | json | jalantikus.com |
| detik | query | json | detik.com |
| dewabatch | query | json | dewabatch.com |
| pinterst | query | json | pinterst.com |
| gimage | query | json | google image |
| steam | query | json | steam |
| mcpedl | query | json | mcpedl server |
| qanda | query | json | qanda search |
| xnxx | query | json | xnxx.com |
| pornhub | query | json | pornhub.com |
| xvids | query | json | xvideos.com |
| groupwa | query | json | group whatsaap |
| youwatch | query | json | youwatch.casa |
| sfile | query | json | sfile.mobi |
| cersex | query | json | cersex.club |
| heroml | hero | json | hero mobile legends detail |

</details>


### Encrypt

```js
//Example!
404.enc.ebase64('nasa')
.then(res => console.log(res))
.catch(err => console.log(err))

404.enc.dbase64('bmFzYQ==')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = enc)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| ebase32 | text | json | encrypt base32 |
| dbase32 | encode | json | decrypt base32 |
| ebase64 | text | json | encrypt base64 |
| dbase64 | encode | json | decrypt base64 |
| ehex | text | json | encrypt hex |
| dhex | encode | json | decrypt hex |
| eoctal | text | json | encrypt octal |
| doctal | encode | json | decrypt octal |
| ebinary | text | json | encrypt binray |
| dbinary | encode | json | decrypt binary |
| md5 | text | json | encrypt md5 |
| sha1 | text | json | encrypt sha1 |
| sha256 | text | json | encrypt sha256 |
| sha512 | text | json | encrypt sha512 |
| sha224 | text | json | encrypt sha224 |
| sha384 | text | json | encrypt sha384 |
| blake2b | text | json | encrypt blake2b |


</details>


### Fun

```js
//Example!
404.fun.caklontong()
.then(res => console.log(res))
.catch(err => console.log(err))

404.fun.math('hard')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = fun)</b> (click to show)</summary>

| module name | params | response |
| :--- | :---------- | :--- | :--- |
| caklontong | - | json |
| tebakgambar | - | json |
| family100 | - | json |
| math2 | - | json |
| truthid | - | json |
| truthen | - | json |
| dareid | - | json |
| dareen | - | json |
| slot | - | json |
| tebakanime | - | json |
| twister | - | json |
| matg | mode | json |

</details>
