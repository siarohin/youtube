!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){},function(e,t,n){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),s=null,l=0,u=[],d=n(3);function f(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],t))}else{var c=[];for(a=0;a<i.parts.length;a++)c.push(b(i.parts[a],t));o[i.id]={id:i.id,refs:1,parts:c}}}}function v(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(c):n.push(i[a]={id:a,parts:[c]})}return n}function p(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertAt.before,n);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return g(t,e.attrs),p(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var a=l++;n=s||(s=h(t)),i=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),p(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=d(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return f(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var a=n[r];(c=o[a.id]).refs--,i.push(c)}e&&f(v(e,t),t);for(r=0;r<i.length;r++){var c;if(0===(c=i[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete o[c.id]}}}};var y,S=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=S(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);var i=15,r="AIzaSyCAznfTwZKs8R47J-_PkpBrHYaRvcCmKwY",o="https://www.googleapis.com/youtube/v3",a=[],c=[""],s={continue:!1,position:""};var l=function(){document.querySelector("nav")&&(document.querySelector("nav").innerHTML="");for(var e=Math.floor(document.body.querySelector("#wrapper").clientWidth/340),t=Math.ceil(a.length/e),n=[],i=0;i<a.length;i+=e)n.push(a[i]);for(var r=0;r<t;r+=1){var o='<a data-href="'.concat(n[r],'">').concat(r+1,"</a>");document.querySelector("nav").innerHTML+=o}if(!0===s.continue){var c=s.position.dataset.href;document.querySelector('a[data-href="'.concat(c,'"]')).className="active"}!function(){for(var e=document.querySelectorAll(".slider > div"),t=document.querySelector("header"),n=document.querySelector("nav"),i=t.offsetHeight+n.offsetHeight,r=window.pageYOffset+i,o=window.pageXOffset,a=window.pageXOffset+document.documentElement.clientWidth,c=window.pageYOffset+document.documentElement.clientHeight-i,s=0;s<e.length;s+=1){var l={top:window.pageYOffset+e[s].getBoundingClientRect().top,left:window.pageXOffset+e[s].getBoundingClientRect().left,right:window.pageXOffset+e[s].getBoundingClientRect().right,bottom:window.pageYOffset+e[s].getBoundingClientRect().bottom};if(l.bottom>r&&l.top<c&&l.right>o&&l.left<a){for(var u="".concat(e[s].id),d=document.querySelectorAll("nav > a"),f=0;f<d.length;f+=1)d[f].dataset.href===u&&(d[f].className="active");document.querySelector(".active").click()}}}(),n.length=0,s.continue=!1},u=function(){for(var e=document.querySelectorAll("nav > a"),t=document.querySelector("nav > .active"),n=document.querySelector("nav").firstChild,i=document.querySelector("nav").lastChild,r=t.nextSibling||t,o=t.previousSibling||t,a=0;a<e.length;a+=1)e[a].classList.add("hide");n.classList.remove("hide"),i.classList.remove("hide"),t.classList.remove("hide"),n.classList.add("first-navigation"),i.classList.add("last-navigation"),r.classList.remove("hide"),o.classList.remove("hide"),i!==t&&i.previousSibling!==t&&i.previousSibling.previousSibling!==t||i.classList.remove("last-navigation"),n!==t&&n.nextSibling!==t&&n.nextSibling.nextSibling!==t||n.classList.remove("first-navigation"),n===t&&(r.classList.remove("hide"),null!==r.nextSibling&&(r.nextSibling.classList.remove("hide"),null!==r.nextSibling.nextSibling&&r.nextSibling.nextSibling.classList.remove("hide"))),n.nextSibling===t&&null!==r.nextSibling&&r.nextSibling.classList.remove("hide"),i===t&&(o.classList.remove("hide"),null!==o.previousSibling&&(o.previousSibling.classList.remove("hide"),null!==o.previousSibling.previousSibling&&o.previousSibling.previousSibling.classList.remove("hide"))),i.previousSibling===t&&null!==o.previousSibling&&o.previousSibling.classList.remove("hide"),e.length<=5&&(n.classList.remove("first-navigation"),i.classList.remove("last-navigation"))};function d(){var e=document.querySelector(".slider");e.onmousedown=function(t){!function(t){e.onmouseup=function(e){var n=e.pageX-t;n<0&&Math.abs(n)>100&&1===e.which&&document.querySelector("nav > .active").nextSibling&&document.querySelector("nav > .active").nextSibling.click(),n>0&&Math.abs(n)>100&&1===e.which&&document.querySelector("nav > .active").previousSibling&&document.querySelector("nav > .active").previousSibling.click(),u()}}(t.pageX)}}function f(){var e=document.querySelector("nav");e&&(e.onclick=function(e){var t=e.target;if("A"===t.tagName){!function(e){for(var t=document.querySelector(".active"),n=document.querySelectorAll(".active"),i=0;i<n.length;i+=1)n[i].classList.remove("active");function r(e){var t=document.querySelector(".slider");t.classList.add("to-".concat(e)),setTimeout(function(){t.classList.remove("to-".concat(e))},1e3)}e.classList.add("active"),Number(e.innerText)>Number(t.innerText)&&r("left"),Number(e.innerText)<Number(t.innerText)&&r("right")}(t),u();var n=t.dataset.href;document.getElementById(n).scrollIntoView(!0),t===document.querySelector("nav").lastElementChild&&(s.continue=!0,s.position=t,v())}})}function v(){var e=c[c.length-1],t=document.querySelector("form")[0].value;fetch("".concat(o,"/search?key=").concat(r,"&type=video&part=snippet&maxResults=").concat(i,"&pageToken=").concat(e,"&q=").concat(t)).then(function(e){return e.json()}).then(function(e){var t,n=[];c.push(e.nextPageToken),t=e.pageInfo.totalResults>=i?i:e.pageInfo.totalResults;for(var s=0;s<t;s+=1)e.items[s].id.videoId&&(a.push(e.items[s].id.videoId),n.push(e.items[s].id.videoId));fetch("".concat(o,"/videos?key=").concat(r,"&id=").concat(n.concat(),"&part=snippet,statistics")).then(function(e){return e.json()}).then(function(i){for(var r=0;r<t;r+=1)document.querySelector(".slider").innerHTML+='<div id="'.concat(e.items[r].id.videoId,'">\n        <img src="').concat(e.items[r].snippet.thumbnails.high.url,'" alt="">\n        <a href="//www.youtube.com/watch?v=').concat(e.items[r].id.videoId,'" target="_blank" title="').concat(e.items[r].snippet.title,'">').concat(e.items[r].snippet.title,"</a>\n        <ul>\n          <li>").concat(e.items[r].snippet.channelTitle,"</li>\n          <li>").concat(e.items[r].snippet.publishedAt.substring(0,10),"</li>\n          <li>").concat(i.items[r].statistics.viewCount,"</li>\n        </ul>\n        <p>").concat(e.items[r].snippet.description,"</p>\n        </div>");var o,a;n.length=0,l(),f(),d(),(a=document.querySelector(".slider")).ontouchstart=function(e){var t=e.changedTouches[0];o=t},a.ontouchend=function(e){var t=e.changedTouches[0];Math.abs(o.pageX-t.pageX)>20&&(t.pageX<o.pageX?document.querySelector("nav > .active").nextSibling&&document.querySelector("nav > .active").nextSibling.click():document.querySelector("nav > .active").previousSibling&&document.querySelector("nav > .active").previousSibling.click())},u()})})}var p,m,h=function(){document.querySelector(".slider").innerHTML=""};(p=document.createElement("div")).id="wrapper",p.innerHTML='<header>\n    <div class="search-bar">\n      <form method="get">\n      <input type="search" autofocus="autofocus" autocomplete="off" placeholder="Search">\n      </form>\n    </div>\n  </header>\n  <div class="content">\n    <div class="slider"></div>\n  </div>\n  <nav class="navigation"></nav>',document.body.prepend(p),(m=document.querySelector("form")).addEventListener("submit",function(e){e.preventDefault(),m[0].value.match(/^[=!а-яА-ЯёЁa-zA-Z0-9-+ ]+$/)?(document.querySelector(".search-bar").classList.remove("search-bar__error"),h(),a.length=0,c.length=1,v()):document.querySelector(".search-bar").classList.add("search-bar__error")}),window.onresize=function(){document.querySelector(".slider").children.length>0&&(l(),u())}}]);