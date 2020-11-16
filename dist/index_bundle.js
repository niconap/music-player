(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]),i.push([e.id,"* {\r\n  font-family: Poppins, sans-serif;\r\n  outline: none;\r\n  margin: auto;\r\n}\r\n\r\n#wrapper {\r\n  text-align: center;\r\n}\r\n\r\n#coverart {\r\n  border-radius: 30px;\r\n}\r\n\r\n#info {\r\n  background-color: #ebebeb;\r\n  padding: 10px;\r\n  padding-top: 40px;\r\n  border-radius: 20px;\r\n  box-shadow: 0px 0px 40px 0px rgba(145, 145, 145, 0.199);\r\n  width: 400px;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 210px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  z-index: -1;\r\n}\r\n\r\n#controls {\r\n  margin-top: 10px;\r\n}\r\n\r\n#play {\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\n\r\n#play:hover,\r\n#next:hover,\r\n#prev:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.time {\r\n  display: inline-block;\r\n  margin: 10px;\r\n}\r\n\r\n#timebar {\r\n  -webkit-appearance: none;\r\n  width: 50%;\r\n  height: 10px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  -webkit-transition: 0.2s;\r\n  transition: opacity 0.2s;\r\n  display: inline-block;\r\n}\r\n\r\n#timebar::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50px;\r\n  background: black;\r\n  cursor: pointer;\r\n}\r\n\r\n#githubicon {\r\n  opacity: 50%;\r\n  height: 30px;\r\n  width: 30px;\r\n  margin-left: 30px;\r\n  align-items: center;\r\n  bottom: 20px;\r\n  position: fixed;\r\n}\r\n\r\n#githubicon:hover {\r\n  opacity: 100%;\r\n  cursor: pointer;\r\n}\r\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var s=e[i],c=n.base?s[0]+n.base:s[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=a(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:u,updater:h(p,n),references:1}),r.push(u)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var o=m++;t=f||(f=c(n)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=c(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var c=s(e,n),l=0;l<t.length;l++){var u=a(t[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=c}}}}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{injectType:"styleTag",insert:"head",singleton:!1}),r.Z.locals;let i=0,o="",a=0;function s(e,n,t,r){let i=this;this.audio=new Audio(e),this.playSong=function(){this.audio.play()},this.pauseSong=function(){this.audio.pause()},this.songName=n,this.artistName=t,this.songLength=r,this.slider=document.getElementById("timebar"),this.slider.addEventListener("change",(function(){let e=i.audio.duration*(i.slider.value/100);i.audio.currentTime=e})),this.render=function(){i.audio.currentTime=0,i.slider.value=0,document.getElementById("song").innerHTML=i.songName,document.getElementById("artist").innerHTML=i.artistName,document.getElementById("total").innerHTML=i.songLength,document.getElementById("current").innerHTML="0:00"},this.updateTime=function(){let e=Math.floor(i.audio.currentTime),n=Math.floor(e/60),t="";t=0!=n?e-60*n:e,t<10&&(t="0"+t);let r=document.getElementById("current"),s=n+":"+t;r.innerHTML=s.toString(),i.sliderUpdate(),r.innerHTML==total.innerHTML&&(i.pauseSong(),clearInterval(o),i.slider.value=0,r.innerHTML="0:00",document.getElementById("play").setAttribute("src","play.png"),a=0)},this.sliderUpdate=function(){let e=0;isNaN(i.audio.duration)||(e=i.audio.currentTime*(100/i.audio.duration),i.slider.value=e)}}new function(e,n,t,...r){this.next=document.getElementById(n),this.play=document.getElementById(e),this.prev=document.getElementById(t);let s=this;this.initialize=function(){s.play.addEventListener("click",(function(){1==a?(s.play.setAttribute("src","play.png"),a=0,r[i].pauseSong(),clearInterval(o)):(s.play.setAttribute("src","pause.png"),a=1,r[i].playSong(),o=setInterval(r[i].updateTime,1e3))})),s.next.addEventListener("click",(function(){r[i].pauseSong(),clearInterval(o),r[i].audio.currentTime=0,2!=i?i++:i=0,1==a&&r[i].playSong(),r[i].render(),document.getElementById("coverart").setAttribute("src","cover"+i+".jpg"),o=setInterval(r[i].updateTime,1e3)})),s.prev.addEventListener("click",(function(){r[i].pauseSong(),clearInterval(o),r[i].audio.currentTime=0,0!=i?i--:i=2,1==a&&r[i].playSong(),r[i].render(),document.getElementById("coverart").setAttribute("src","cover"+i+".jpg"),o=setInterval(r[i].updateTime,1e3)}))}}("play","next","prev",new s("song0.mp3","All That","Benjamin Tissot","2:25"),new s("song1.mp3","Indigo Sun","Daniel Birch","4:52"),new s("song2.mp3","Alright Okay","Mild Wild","2:53")).initialize()})()})();