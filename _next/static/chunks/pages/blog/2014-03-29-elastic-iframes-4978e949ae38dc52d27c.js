_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{PnN3:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t("rePB"),i=t("Ff2n"),o=(t("q1tI"),t("7ljp")),s=t("hOk3");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l={title:"Elastic Iframes",description:"Sometimes it become necessary to use iframes when building some web  applications. Often we have them hidden but sometimes iframes can be  useful visible too.",intro:Object(o.a)("section",null,Object(o.a)("p",null,"Sometimes it become necessary to use iframes when building some web  applications. Often we have them hidden but sometimes iframes can be  useful visible too.")),date:"2014-03-29",tags:["js"]},h={meta:l},m=Object(s.a)({meta:l});function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.a)(m,r(r(r({},h),t),{},{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Sometimes it become necessary to use iframes when building some web  applications. Often we have them hidden but sometimes iframes can be  useful visible too."),Object(o.a)("p",null,"For Node Knockout 2013, I was working with Meteorhacks on ",Object(o.a)("a",r({parentName:"p"},{href:"meteorhacks.2013.nodeknockout.com"}),"Open  Comment Box"),". It\u2019s like a self-hosted  Disqus alternative. We kept the comments view inside an iframe to make  sure it doesn\u2019t clash with main website styles and for security reasons.  The comment system is real-time. So, comments visible changes  frequently and it required the iframe containing these comments to  resize in order to avoid scrollbars."),Object(o.a)("p",null,"If we\u2019re on the same origin, one of the things we can do is to continually check if the ",Object(o.a)("strong",{parentName:"p"},"scrollHeight")," of the child frame document body changes and update the iframe height."),Object(o.a)("pre",null,Object(o.a)("code",r({parentName:"pre"},{className:"language-js"}),"(function (iframe) {\n\n    var prevHeight = null;\n\n    setInterval(function () {\n        if(prevHeight!==iframe.contentDocument.body.scrollHeight){\n            prevHeight = iframe.contentDocument.body.scrollHeight;\n            iframe.style.height = prevHeight + 'px';\n        }\n    });\n\n})(document.getElementById('iframe'));\n\n")),Object(o.a)("p",null,"Because of security approaches taken by modern web browsers, this  will not work if you have the iframe and parent window in different  origins. This is a security enhancement, not a bug so can\u2019t much expect  it to get ",Object(o.a)("em",{parentName:"p"},"fixed")," in the future."),Object(o.a)("p",null,"If pages belong to different origins the parent window is not allowed to access information about content inside the iframe. ",Object(o.a)("strong",{parentName:"p"},"I\u2019ll be spooked out of my skin if it can and definitely avoid using such a web browser"),"."),Object(o.a)("p",null,"As a cross-origin solution, what we can do is to move the function  which tracks height changes to the page loaded inside the iframe (",Object(o.a)("em",{parentName:"p"},"Assuming you can control both parent and child frame pages"),"). And use ",Object(o.a)("strong",{parentName:"p"},"postMessage")," to update the height on parent window. To keep things more interesting  I\u2019m going to use mozilla jschannel to organize postMessage messages."),Object(o.a)("p",null,"First, include jschannel by adding this script tag to both pages (parent window and page inside iframe)."),Object(o.a)("pre",null,Object(o.a)("code",r({parentName:"pre"},{className:"language-html"}),'<script src="//cdnjs.cloudflare.com/ajax/libs/jschannel/1.0.0-git-commit1-8c4f7eb/jschannel.min.js"><\/script>\n\n')),Object(o.a)("p",null,"And this snippet inside the child frame page scripts which creates  the jschannel, detects changes to body height and sends messages to the  parent page via jschannel."),Object(o.a)("pre",null,Object(o.a)("code",r({parentName:"pre"},{className:"language-js"}),"(function () {\n\n  function DO_NOTHING () {}\n\n  var channel = null;\n  var prevHeight = null;\n\n  document.addEventListener('DOMContentLoaded', function () {\n    channel = Channel.build({\n       window: window.parent\n      ,origin: '*'\n      ,scope: 'test_scope'\n    });\n    setInterval(watchDocumentHeight, 250);\n  })\n\n  function watchDocumentHeight() {\n    if (prevHeight !== document.body.scrollHeight) {\n      channel.call({\n         method: 'resize'\n        ,params: document.body.scrollHeight\n        ,success: DO_NOTHING\n      });\n      prevHeight = document.body.scrollHeight;\n    }\n  }\n\n})();\n\n\n")),Object(o.a)("p",null,"And this one inside the parent page scripts to prepare the jschannel, wait for messages and update the height."),Object(o.a)("pre",null,Object(o.a)("code",r({parentName:"pre"},{className:"language-js"}),"(function (iframe) {\n\n  var channel = null;\n\n  document.addEventListener('DOMContentLoaded', function () {\n    channel = Channel.build({\n       window: iframe.contentWindow\n      ,origin: '*'\n      ,scope: 'test_scope'\n      ,onReady: onChannelReady\n    });\n  })\n\n  function onChannelReady () {\n    channel.bind('resize', onResize);\n  }\n\n  function onResize (trans, data) {\n    iframe.style.height = data + 'px';\n  }\n\n})(document.getElementById('iframe'));\n\n")),Object(o.a)("p",null,"Is this all really necessary? We can make the code much shorter if we  use window.postMessage directly but if you\u2019re using iframes, most  probably you\u2019ll need to use if for more than changing the height.  Mozilla jschannel can help you when it comes to organizing postMessage  channels."),Object(o.a)("p",null,"Original Post: ",Object(o.a)("a",r({parentName:"p"},{href:"https://mnmtanish.svbtle.com/elastic-iframes-autogrow-height"}),"https://mnmtanish.svbtle.com/elastic-iframes-autogrow-height")))}u.isMDXComponent=!0},Z1ao:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2014-03-29-elastic-iframes",function(){return t("PnN3")}])}},[["Z1ao",0,1,2]]]);