_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"40Fh":function(e,t,n){var r={"./2020-12-13-multiplayer-tetris-game/index.mdx":"LUx3"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="40Fh"},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("rePB"),o=n("q1tI"),c=n("nKUr"),i=n("8Kt/"),a=n.n(i),u=n("YFqc"),s=n.n(u),f=function(e){var t=e.link,n=e.meta;return Object(c.jsxs)("article",{children:[Object(c.jsx)(s.a,{href:"/blog"+t,children:Object(c.jsx)("h2",{children:n.title})}),Object(c.jsx)("p",{children:n.info}),Object(c.jsx)("p",{children:Object(c.jsx)(s.a,{href:"/blog"+t,children:"Read More"})})]})},l=n("40Fh"),d=l.keys().map((function(e){return{link:e.substr(1).replace(/\/index\.mdx$/,""),meta:l(e).meta}}));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)("title",{children:"Thanish.me - Some really bad code for you!"}),Object(c.jsx)("meta",{name:"description",content:"Some really bad code for you!"})]}),d.map((function(e,t){return Object(o.createElement)(f,v(v({},e),{},{key:"".concat(t)}))}))]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),i=n("elyg"),a=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,r){if((0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",l=c.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,b=e.replace,h=e.shallow,y=e.scroll,O=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var j=c.Children.only(v),m=j&&"object"===typeof j&&j.ref,g=(0,u.useIntersection)({rootMargin:"200px"}),w=r(g,2),E=w[0],x=w[1],_=c.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);(0,c.useEffect)((function(){var e=x&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,x,O,t,n]);var k={ref:_,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,b,h,y,O)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};return(e.passHref||"a"===j.type&&!("href"in j.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof O?O:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(j,k)};t.default=l},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=(0,c.useRef)(),s=(0,c.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||l||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){c.unobserve(e),0===i.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,c.useEffect)((function(){a||l||(0,i.default)((function(){return d(!0)}))}),[l]),[p,l]};var c=n("q1tI"),i=o(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,4]]]);