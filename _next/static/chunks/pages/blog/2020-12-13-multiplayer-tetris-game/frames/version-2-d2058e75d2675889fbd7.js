_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/H5Z":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e),r.d(e,"default",(function(){return b}));var a=r("o0o1"),i=r.n(a),l=r("nKUr"),u=r("q1tI");function f(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=[[[1,1],[1,1]],[[1,0,0],[1,1,1]],[[0,1,0],[1,1,1]]],v={moveLeft:function(t){t.x--},moveRight:function(t){t.x++},moveDown:function(t){t.y++},rotateShape:function(t){for(var e=[],r=0;r<t.type[0].length;++r){e[r]=[];for(var n=0;n<t.type.length;++n)e[r][n]=t.type[t.type.length-1-n][r]}t.type=e}},h=1,d=2,s=3,p=function(t,e,r,n,o){for(var a=["#6fa8dc","#f6b26b"],i=t.length,l=[],u=[],f=function(){e(l)},c=function(t){var e=Math.floor(Math.random()*y.length),r={x:0,y:0,type:y[e],color:"#111"};r.x=Math.floor(o.worldWidth/i/2*(2*t+1)),r.y=-r.type.length,r.color=a[t%a.length],l[t].unshift(r),f()},p=function(t,e){var r=l[t][0],o=Object.create(r);e(o);for(var a=0;a<n.length;++a){var i=(0,n[a])(o,r,l);if(i===h)return;if(i===d)return void c(t);i===s&&(alert("GAME OVER!"),w())}e(r),f()},g=r((function(){for(var t=0;t<l.length;++t)p(t,v.moveDown)})),w=function(){g(),u.forEach((function(t){return t()}))},b=0;b<i;++b)l[b]=[],c(b);for(var m=function(e){var r=t[e];u[e]=function(t,e){var r=function(r){for(var n=0,o=Object.keys(t);n<o.length;n++){var a=o[n];if(r.code===a){e(t[a]);break}}};return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}(r,(function(t){return p(e,t)}))},S=0;S<i;++S)m(S);return w},g=[{KeyW:v.rotateShape,KeyA:v.moveLeft,KeyS:v.moveDown,KeyD:v.moveRight},{ArrowUp:v.rotateShape,ArrowLeft:v.moveLeft,ArrowDown:v.moveDown,ArrowRight:v.moveRight}],w={worldWidth:32,worldHeight:24,worldScale:25};function b(){var t=Object(u.useRef)(null),e=Object(u.useState)(!1),r=e[0],n=e[1];return Object(u.useEffect)((function(){if(t&&r){var e=function(t,e){var r=e.worldWidth*e.worldScale,n=e.worldHeight*e.worldScale;t.width=r,t.height=n;var o=t.getContext("2d"),a=function(t){o.save(),o.translate(t.x*e.worldScale,t.y*e.worldScale);for(var r=0;r<t.type.length;++r)for(var n=t.type[r],a=0;a<n.length;++a)n[a]&&(i=a,l=r,u=t.color,o.fillStyle=u,o.strokeStyle="#000",o.fillRect(i*e.worldScale,l*e.worldScale,e.worldScale,e.worldScale),o.strokeRect(i*e.worldScale,l*e.worldScale,e.worldScale,e.worldScale));var i,l,u;o.restore()};return function(t){o.clearRect(0,0,r,n);for(var e=0;e<t.length;++e)for(var i=t[e],l=0;l<i.length;++l)a(i[l])}}(t.current,w),n=(l=1e3,function(t){var e=!0;return setTimeout((function r(){e&&(t(),setTimeout(r,l))}),l),function(){e=!1}}),a=function(t){var e=function(t,e){return!(t.x>e.x+e.type[0].length||t.x+t.type[0].length<e.x||t.y>e.y+e.type.length||t.y+t.type.length<e.y)},r=function(t,e,r,n){if(!t.type[e][r])return!1;var o=e+t.y-n.y,a=r+t.x-n.x;return!(!n.type[o]||!n.type[o][a])},n=i.a.mark((function t(e,r){var n,o,a,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<r.length)){t.next=16;break}o=r[n],a=0;case 4:if(!(a<o.length)){t.next=13;break}if((l=o[a])!==e){t.next=8;break}return t.abrupt("continue",10);case 8:return t.next=10,[l,0===a];case 10:++a,t.next=4;break;case 13:++n,t.next=1;break;case 16:case"end":return t.stop()}}),t)}));return[function(t,a,i){if(t.type===a.type&&t.x>=a.x)return null;if(t.x<0)return h;var l,u=f(n(a,i));try{for(u.s();!(l=u.n()).done;){var c=o(l.value,1)[0];if(e(t,c))for(var y=0;y<t.type.length;++y)if(r(t,y,0,c))return h}}catch(v){u.e(v)}finally{u.f()}return null},function(a,i,l){if(a.type===i.type&&a.x<=i.x)return null;if(a.x+a.type[0].length>t.worldWidth)return h;var u,c=f(n(i,l));try{for(c.s();!(u=c.n()).done;){var y=o(u.value,1)[0];if(e(a,y))for(var v=a.type[0].length-1,d=0;d<a.type.length;++d)if(r(a,d,v,y))return h}}catch(s){c.e(s)}finally{c.f()}return null},function(a,i,l){if(a.type===i.type&&a.y<=i.y)return null;if(a.y+a.type.length>t.worldHeight)return d;var u,c=f(n(i,l));try{for(c.s();!(u=c.n()).done;){var y=o(u.value,2),v=y[0],p=y[1];if(e(a,v))for(var g=a.type.length-1,w=0;w<a.type[0].length;++w)if(r(a,g,w,v))return a.y<=0?s:p?h:d}}catch(b){c.e(b)}finally{c.f()}return null}]}(w);p(g,e,n,a,w)}var l}),[t,r]),Object(l.jsx)("div",{style:{position:"absolute",top:0,left:0},children:r?Object(l.jsx)("canvas",{ref:t,style:{background:"#fafafa"}}):Object(l.jsx)("button",{onClick:function(){return n(!0)},children:"Start"})})}},gtze:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2020-12-13-multiplayer-tetris-game/frames/version-2",function(){return r("/H5Z")}])}},[["gtze",0,1,2]]]);