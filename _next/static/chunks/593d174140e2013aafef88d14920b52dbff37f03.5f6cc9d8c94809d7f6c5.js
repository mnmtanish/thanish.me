(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var c=f[s];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var u=a.props[c],p=r[c]||new Set;p.has(u)?o=!1:(p.add(u),r[c]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},LUx3:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return j})),n.d(t,"default",(function(){return x}));var r=n("rePB");function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=n("q1tI"),i=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.a.createContext({}),f=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(n),p=r,h=l["".concat(o,".").concat(p)]||l[p]||d[p]||a;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement";var y=n("nKUr"),g=n("8Kt/"),v=n.n(g),b=function(e){var t=e.meta,n=e.children;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(v.a,{children:[Object(y.jsxs)("title",{children:["Thanish.me - ",t.title]}),Object(y.jsx)("meta",{name:"description",content:t.info})]}),Object(y.jsx)("article",{children:Object(y.jsx)("main",{children:n})})]})};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={title:"Multiplayer Tetris Game",info:"A tutorial about writing a multiplayer game from scratch. Starting from solidifying the requirements and continues all the way up to creating a working prototype.",date:"2020-12-13",tags:["js"]},k={meta:j},P=function(e){var t=e.meta;return function(e){var n=e.children;return Object(y.jsx)(b,{meta:t,children:n})}}({meta:j});function x(e){var t=e.components,n=a(e,["components"]);return m(P,O(O(O({},k),n),{},{components:t,mdxType:"MDXLayout"}),m("h1",null,"Multiplayer Tetris Game"),m("p",null,"I just wanted to see what it would look like if multiple players try to play Tetris on the same canvas. Let's build this game in multiple rounds where the result of each iteration is a playable game."),m("img",{src:"/_next/static/images/1a44a319f1728cbd6fa1a9832c415ce6.png",width:"1000",height:"700",alt:"Tetris game concept"}),m("p",null,"These are our requirements for version 1:"),m("ul",null,m("li",{parentName:"ul"},"it should be possible for multiple players to play the game"),m("li",{parentName:"ul"},'it should support all the basic rules of a "Tetris" like game')),m("p",null,"This is what we're NOT doing for version 1:"),m("ul",null,m("li",{parentName:"ul"},"avoid support for playing with multiple devices, create a split-screen multiplayer game"),m("li",{parentName:"ul"},"avoid support for mobile devices, touch controls, etc.")),m("h2",null,"Basic Components"),m("p",null,"Before building, let's list down all the basic components. If we get this good enough, it may survive this version and some future versions of this game."),m("img",{src:"/_next/static/images/b18f86c32c28d07a727d3ceeb07b69a8.png",width:"1000",height:"400",alt:"Basic components of the game"}),m("p",null,"And we also need to define some rules to determine how it should behave. We may change these later but having some at the beginning makes it easy to develop."),m("ul",null,m("li",{parentName:"ul"},"All shapes in the game world must be visible on the screen."),m("li",{parentName:"ul"},"Shapes must not overlap with other shapes in the game world."),m("li",{parentName:"ul"},"When the game clock ticks, active shapes will move downwards. If they cannot move downwards they will become inactive."),m("li",{parentName:"ul"},"Players can move their active shapes left, right or rotate them using actions but only if there is enough empty space.")),m("p",null,"I guess that's enough to get us started. Let's convert what we have designed so far to code to see if it all makes any sense."),m("h2",null,"Writing the code"),m("p",null,"Let's start with a list of shape types. We can represent each shape type as a 2D array. The '1's represent filled blocks and the '0's will represent holes."),m("pre",null,m("code",O({parentName:"pre"},{className:"language-js"}),"const SHAPE_TYPES = [\n  [\n    [1, 1],\n    [1, 1],\n  ],\n];\n")),m("p",null,"On the other end, we have the player. The most important thing we need from a player is to listen to actions from the player. So what are these actions? let's define actions as simple functions which manipulate the active shape. For example, the moveLeft and moveRight functions will modify the 'x' position of the shape."),m("pre",null,m("code",O({parentName:"pre"},{className:"language-js"}),"const ACTION_TYPES = {\n  moveLeft: (shape) => {\n    shape.x--;\n  },\n\n  moveRight: (shape) => {\n    shape.x++;\n  },\n};\n")),m("p",null,"The player holds a listener function and calls it when the user performs certain actions. We will require a listener function and a map of keycode to action functions."),m("pre",null,m("code",O({parentName:"pre"},{className:"language-js"}),"const startPlayer = (keymap, listener) => {\n  document.addEventListener('keydown', (e) => {\n    for (const key of Object.keys(keymap)) {\n      if (e.code === key) {\n        listener(keymap[key]);\n        break;\n      }\n    }\n  });\n};\n")),m("p",null,"We don't even have a game to play with but we already have some technical debt :D. Let's clean it up just to keep things clean."),m("pre",null,m("code",O({parentName:"pre"},{className:"language-js"}),"// the returned function must be called to destroy the player\nconst startPlayer = (keymap, listener) => {\n  const keyDownListener = (e) => {\n    for (const key of Object.keys(keymap)) {\n      if (e.code === key) {\n        listener(keymap[key]);\n        break;\n      }\n    }\n  };\n  document.addEventListener('keydown', keyDownListener);\n\n  return () => {\n    document.removeEventListener('keydown', keyDownListener);\n  };\n};\n")),m("p",null,"And next, the game world. It will bring all the players and the shapes together and renders the output using the given renderer."),m("pre",null,m("code",O({parentName:"pre"},{className:"language-js"}),"const startWorld = (keymaps, renderer) => {\n  const playerActionListener = (i, action) => {\n    // TODO: apply action on the active shape\n  };\n  const stopPlayerFunctions = [];\n  for (let i = 0; i < keymaps.length; ++i) {\n    const keymap = keymaps[i];\n    const listener = (action) => playerActionListener(i, action);\n    stopPlayerFunctions[i] = startPlayer(keymap, listener);\n  }\n\n  return () => {\n    stopPlayerFunctions.forEach((fn) => fn());\n  };\n};\n")))}x.isMDXComponent=!0},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),p=function(e){i(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=p},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);