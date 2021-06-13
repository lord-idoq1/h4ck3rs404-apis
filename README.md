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

| module name | params response | description |
| :--- | :---------- | :--- | :--- | :--- |
| instagram | url | json | Instagram Downloader |
| ytmp4 | url | json | Youtube Mp4 Downloader |
| ytmp3 | url | json | Youtube mp3 Downloader |
| joox | query | json | Joox Downloader |
| soundcloud | url | json | Soundcloud Downloader |
| mediafire | url | json | Mediafire Downloader |
  
</details>

### Text Pro

```js
//Example!
arugaz.textpro.glue3d('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.textpro.space3d('hello', 'world')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = textpro)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| luxury | query | any text | buffer | 3D luxury gold text effect |
| text3d | query | any text | buffer | 3D gradient text effect |
| blackpink | query | any text | buffer | Blackpink logo style |
| realvintage | query | any text | buffer | realistic vintage style light bulb |
| realcloud | query | any text | buffer | realistic cloud text effect |
| sandsummer| query | any text | buffer | write in sand summer beach |
| sandwrite | query | any text | buffer | sand writing |
| sandengraved | query | any text | buffer | sand engraved 3d |
| sandsummery | query | any text | buffer | summery sand writing |
| foilballoon | query | any text | buffer | foil balloon text effect |
| glue3d | query | any text | buffer | 3D glue effect |
| space3d | query, query | any text, any text | buffer | space 3D text effect |
| metaldark | query | any text | buffer | Metal dark gold effect |
| glitchtext | query, query | any text, any text | buffer | Glitch text effect tiktok |
| stonetext | query, query | any text, any text | buffer | Stone text effect |
| neonlight | query | any text | buffer | Neon light with galaxy |
| neonnew | query | any text | buffer | Neon light Effect |
| old1917 | query | any text | buffer | 1917 Old Text effect |
| minion | query | any text | buffer | Minion text effect |
| pornhub | query, query | any text, any text | buffer | Pornhub style logo |
| holograpich | query | any text | buffer | Holograpich 3D effect |
| avengers | query, query | any text, any text | buffer | 3D Avengers Logo |
| marvel | query, query | any text, any text | buffer | Marvel studio logo |
| firework | query | any text | buffer | Firework sparkle effect |
| lavatext | query | any text | buffer | Lava text effect |
| america | query | any text | buffer | Captain America style |
| equalizer | query | any text | buffer | Rainbow equalizer effect |
| toxic | query | any text | buffer | Green Toxic Text |
| matrix | query | any text | buffer | Matrix Text Effect |
| blood | query | any text | buffer | Horror blood effect |
| thunder | query | any text | buffer | Thunder text effect |
| neon | query | any text | buffer | Neon text effect |
| bokeh | query | any text | buffer | Bokeh text effect |
| green | query | any text | buffer | Green neon style |
| glow | query | any text | buffer | Glowing text |
| water | query | any text | buffer | Dropwater text effect |

</details>

### Education

```js
//Example!
arugaz.edu.corona('Indonesia')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.edu.translate('ar', 'Halo nama saya aruga')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = edu)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| idwiki | query | any text | json | Indonesia Wikipedia |
| enwiki | query | any text | json | English Wikipedia |
| corona | query | country | json | Corona details by country |
| resep | query | food | json | Food recipes |
| translate | query, query | country id, any text | json | Translate to country language |

</details>

### Flaming Text

```js
//Example!
arugaz.flaming.wroom('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.flaming.memo('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = flaming)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| wroom | query | any text | buffer | Wroom effect |
| text3d | query | any text | buffer | Gold text 3D Style |
| black | query | any text | buffer | Blackbird effect |
| water | query | any text | buffer | Text with water effect |
| smurf | query | any text | buffer | Like a smurf |
| memo | query | any text | buffer | Memories text gif |

</details>"# h4ck3rs404-apis" 
