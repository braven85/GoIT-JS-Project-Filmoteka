parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oS62":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchMovieData=a;const e={baseUrl:"https://api.themoviedb.org",apiKey:"130c7a7ecd86dbb286ae26c3cdcca88c"};async function a(a){const t=await fetch(`${e.baseUrl}/3/movie/${a}?api_key=${e.apiKey}&language=en-US`);return await t.json()}
},{}],"uo4c":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addToWatched=c,exports.addToQueue=u,exports.renderMovie=l;var e=require("./fetchMovie.js");const t=document.querySelector(".watched"),o=document.querySelector(".queue");let r={photo:"",title:"",votesAvarage:"",votes:"",popularity:"",orginalTitle:"",genre:"",about:"",id:""};const i=document.querySelector("[data-modal-open]"),n=e=>{let t=e.target.closest(".movie-card").getAttribute("data-id");try{null!==t&&l(t)}catch(o){console.log("Wystąpił błąd przy pobieraniu danych z bazy")}};function l(t){a(),(0,e.fetchMovieData)(t).then(e=>{let t=e;r.photo=t.poster_path,r.title=t.title,r.votesAvarage=t.vote_average,r.votes=t.vote_count,r.popularity=t.popularity,r.orginalTitle=t.original_title;let o=t.genres.map(e=>e.name);r.genre=o.toString(),r.about=t.overview,r.id=t.id,document.querySelector(".movie").insertAdjacentHTML("afterbegin",`<img class="modal__movie-photo" src="https://image.tmdb.org/t/p/original${r.photo}" alt="photo" />`),document.querySelector(".modal__movie-title").insertAdjacentHTML("afterbegin",`${r.title}`),document.querySelector(".vote").insertAdjacentHTML("afterbegin",`${r.votesAvarage}`),document.querySelector(".votes").insertAdjacentHTML("afterbegin",`${r.votes}`),document.querySelector(".popularity").insertAdjacentHTML("afterbegin",`${r.popularity}`),document.querySelector(".orginal-title").insertAdjacentHTML("afterbegin",`${r.orginalTitle}`),document.querySelector(".genre").insertAdjacentHTML("afterbegin",`${r.genre}`),document.querySelector(".modal__about").insertAdjacentHTML("afterbegin",`${r.about}`)})}function a(){document.querySelector(".movie").innerHTML="",document.querySelector(".modal__movie-title").innerHTML="",document.querySelector(".vote").innerHTML="",document.querySelector(".votes").innerHTML="",document.querySelector(".popularity").innerHTML="",document.querySelector(".orginal-title").innerHTML="",document.querySelector(".genre").innerHTML="",document.querySelector(".modal__about").innerHTML=""}function c(){let e;null==(e=JSON.parse(localStorage.getItem("watchedMovie")))&&(e=[]);let t=r.title,o=(r.id,{movieTitle:r.title,ID:r.id});for(let r of e)if(r.ID===o.ID){o="";break}console.log(e),""===o?console.log(`Film "${t}" jest już w bazie`):(e.push(o),localStorage.setItem("watchedMovie",JSON.stringify(e)),console.log(`Dodałeś film "${t}" do obejrzanych`))}function u(){let e;null==(e=JSON.parse(localStorage.getItem("queue")))&&(e=[]);let t=r.title,o=(r.id,{movieTitle:r.title,ID:r.id});for(let r of e)if(r.ID===o.ID){o="";break}""===o?console.log(`Film "${t}" jest już w kolejce`):(e.push(o),localStorage.setItem("queue",JSON.stringify(e)),console.log(`Dodałeś film "${t}" do kolejki`))}i.addEventListener("click",n),t.addEventListener("click",c),o.addEventListener("click",u);
},{"./fetchMovie.js":"oS62"}]},{},["uo4c"], null)
//# sourceMappingURL=/GoIT-JS-Project-Filmoteka/movieData.13362803.js.map