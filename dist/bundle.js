!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=15,o="AIzaSyCAznfTwZKs8R47J-_PkpBrHYaRvcCmKwY",r="https://www.googleapis.com/youtube/v3",s={continue:!1,position:""};function c(){const e=document.querySelector(".slider");e.onmousedown=(t=>{!function(t){e.onmouseup=(e=>{const n=e.pageX-t;n<0&&Math.abs(n)>100&&1===e.which&&document.querySelector("nav > .active").nextSibling&&document.querySelector("nav > .active").nextSibling.click(),n>0&&Math.abs(n)>100&&1===e.which&&document.querySelector("nav > .active").previousSibling&&document.querySelector("nav > .active").previousSibling.click(),u()})}(t.pageX)})}function l(){const e=document.querySelector("nav");e&&(e.onclick=(e=>{const t=e.target;if("A"===t.tagName){(e=>{const t=document.querySelector(".active"),n=document.querySelectorAll(".active");for(let e=0;e<n.length;e+=1)n[e].classList.remove("active");function i(e){const t=document.querySelector(".slider");t.classList.add(`to-${e}`),setTimeout(()=>{t.classList.remove(`to-${e}`)},1e3)}e.classList.add("active"),Number(e.innerText)>Number(t.innerText)&&i("left"),Number(e.innerText)<Number(t.innerText)&&i("right")})(t),u();const e=t.dataset.href;document.getElementById(e).scrollIntoView(!0),t===document.querySelector("nav").lastElementChild&&(s.continue=!0,s.position=t,v())}}))}const a=function(){document.querySelector("nav")&&(document.querySelector("nav").innerHTML="");const e=Math.floor(document.body.querySelector("#wrapper").clientWidth/340),t=Math.ceil(d.length/e),n=[];for(let t=0;t<d.length;t+=e)n.push(d[t]);for(let e=0;e<t;e+=1){const t=`<a data-href="${n[e]}">${e+1}</a>`;document.querySelector("nav").innerHTML+=t}if(!0===s.continue){const e=s.position.dataset.href;document.querySelector(`a[data-href="${e}"]`).className="active"}!function(){const e=document.querySelectorAll(".slider > div"),t=document.querySelector("header"),n=document.querySelector("nav"),i=t.offsetHeight+n.offsetHeight,o=window.pageYOffset+i,r=window.pageXOffset,s=window.pageXOffset+document.documentElement.clientWidth,c=window.pageYOffset+document.documentElement.clientHeight-i;for(let t=0;t<e.length;t+=1){const n={top:window.pageYOffset+e[t].getBoundingClientRect().top,left:window.pageXOffset+e[t].getBoundingClientRect().left,right:window.pageXOffset+e[t].getBoundingClientRect().right,bottom:window.pageYOffset+e[t].getBoundingClientRect().bottom};if(n.bottom>o&&n.top<c&&n.right>r&&n.left<s){const n=`${e[t].id}`,i=document.querySelectorAll("nav > a");for(let e=0;e<i.length;e+=1)i[e].dataset.href===n&&(i[e].className="active");document.querySelector(".active").click()}}}(),n.length=0,s.continue=!1},u=function(){const e=document.querySelectorAll("nav > a"),t=document.querySelector("nav > .active"),n=document.querySelector("nav").firstChild,i=document.querySelector("nav").lastChild,o=t.nextSibling||t,r=t.previousSibling||t;for(let t=0;t<e.length;t+=1)e[t].classList.add("hide");n.classList.remove("hide"),i.classList.remove("hide"),t.classList.remove("hide"),n.classList.add("first-navigation"),i.classList.add("last-navigation"),o.classList.remove("hide"),r.classList.remove("hide"),i!==t&&i.previousSibling!==t&&i.previousSibling.previousSibling!==t||i.classList.remove("last-navigation"),n!==t&&n.nextSibling!==t&&n.nextSibling.nextSibling!==t||n.classList.remove("first-navigation"),n===t&&(o.classList.remove("hide"),null!==o.nextSibling&&(o.nextSibling.classList.remove("hide"),null!==o.nextSibling.nextSibling&&o.nextSibling.nextSibling.classList.remove("hide"))),n.nextSibling===t&&null!==o.nextSibling&&o.nextSibling.classList.remove("hide"),i===t&&(r.classList.remove("hide"),null!==r.previousSibling&&(r.previousSibling.classList.remove("hide"),null!==r.previousSibling.previousSibling&&r.previousSibling.previousSibling.classList.remove("hide"))),i.previousSibling===t&&null!==r.previousSibling&&r.previousSibling.classList.remove("hide"),e.length<=5&&(n.classList.remove("first-navigation"),i.classList.remove("last-navigation"))},d=[];function v(){const e=document.querySelector("form")[0].value;fetch(`${r}/search?key=${o}&type=video&part=snippet&maxResults=${i}&q=${e}`).then(e=>e.json()).then(e=>{let t;const n=[];t=e.pageInfo.totalResults>=i?i:e.pageInfo.totalResults;for(let i=0;i<t;i+=1)e.items[i].id.videoId&&(d.push(e.items[i].id.videoId),n.push(e.items[i].id.videoId));fetch(`${r}/videos?key=${o}&id=${[...n]}&part=snippet,statistics`).then(e=>e.json()).then(i=>{for(let n=0;n<t;n+=1)document.querySelector(".slider").innerHTML+=`<div id="${e.items[n].id.videoId}">\n        <img src="${e.items[n].snippet.thumbnails.high.url}" alt="">\n        <a href="//www.youtube.com/watch?v=${e.items[n].id.videoId}" target="_blank" title="${e.items[n].snippet.title}">${e.items[n].snippet.title}</a>\n        <ul>\n          <li>${e.items[n].snippet.channelTitle}</li>\n          <li>${e.items[n].snippet.publishedAt.substring(0,10)}</li>\n          <li>${i.items[n].statistics.viewCount}</li>\n        </ul>\n        <p>${e.items[n].snippet.description}</p>\n        </div>`;n.length=0,a(),l(),c(),function(){let e;const t=document.querySelector(".slider");t.ontouchstart=(t=>{const n=t.changedTouches[0];e=n}),t.ontouchend=(t=>{const n=t.changedTouches[0];Math.abs(e.pageX-n.pageX)>20&&(n.pageX<e.pageX?document.querySelector("nav > .active").nextSibling&&document.querySelector("nav > .active").nextSibling.click():document.querySelector("nav > .active").previousSibling&&document.querySelector("nav > .active").previousSibling.click())})}(),u()})})}const m=()=>{document.querySelector(".slider").innerHTML=""};!function(){const e=document.createElement("div");e.id="wrapper",e.innerHTML='<header>\n    <div class="search-bar">\n      <form method="get">\n      <input type="search" autofocus="autofocus" autocomplete="off" placeholder="Search">\n      </form>\n    </div>\n  </header>\n  <div class="content">\n    <div class="slider"></div>\n  </div>\n  <nav class="navigation"></nav>',document.body.prepend(e)}(),function(){const e=document.querySelector("form");e.addEventListener("submit",t=>{t.preventDefault(),e[0].value.match(/^[=!а-яА-ЯёЁa-zA-Z0-9-+ ]+$/)?(document.querySelector(".search-bar").classList.remove("search-bar__error"),m(),d.length=0,v()):document.querySelector(".search-bar").classList.add("search-bar__error")})}(),window.onresize=(()=>{document.querySelector(".slider").children.length>0&&(a(),u())})}]);