!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);document.write("postcss"),console.log(11)},function(n,t,e){var r=e(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};e(4)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(3)(!1)).push([n.i,":root {\n  --fontSize: 1rem;\n  --mainColor: rgba(18,52,86,0.47059);\n  --secondaryColor: rgba(102, 51, 153, 0.9);\n  --bg:black;\n}\nhtml {\n  overflow-x: hidden;\n  overflow-y: auto;\n  overflow: hidden auto;\n}\nbody{\n  background-color: black;\n  background-color: var(--bg);\n  width: 100vw;\n  height: 100vh;\n}\n.danger {\n  color: white;\n  background-color: red;\n  line-height:40px;\n}\n\n:--heading {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\na {\n  color: rgba(0, 0, 255, 0.9)\n}\n\na:hover {\n    color: #639;\n  }",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var c=n[i];null!=c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),t.push(c))}},t}},function(n,t,e){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function c(n,t){for(var e=[],r={},o=0;o<n.length;o++){var a=n[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function u(n,t){for(var e=0;e<n.length;e++){var r=n[e],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(b(r.parts[i],t))}else{for(var c=[];i<r.parts.length;i++)c.push(b(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var r=e.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(e){t.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(t);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function p(n,t,e){var r=e.css,o=e.media,a=e.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(n,t){var e,r,o;if(t.singleton){var a=v++;e=h||(h=s(t)),r=d.bind(null,e,a,!1),o=d.bind(null,e,a,!0)}else e=s(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=c(n,t);return u(e,t),function(n){for(var r=[],a=0;a<e.length;a++){var i=e[a],s=o[i.id];s&&(s.refs--,r.push(s))}n&&u(c(n,t),t);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}}]);