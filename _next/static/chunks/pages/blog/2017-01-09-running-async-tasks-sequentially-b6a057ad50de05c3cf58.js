_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"Si/e":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2017-01-09-running-async-tasks-sequentially",function(){return t("lYaW")}])},lYaW:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t("rePB"),a=t("Ff2n"),s=(t("q1tI"),t("7ljp")),o=t("hOk3");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l={title:"Async tasks sequentially",description:"Let\u2019s check this badly written example first. The sequence below will run each step asynchronously.",intro:Object(s.a)("section",null,Object(s.a)("p",null,"Let\u2019s check this badly written example first. The sequence below will run each step asynchronously.")),date:"2017-01-09",tags:["js"]},i={meta:l},p=Object(o.a)({meta:l});function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.a)(p,u(u(u({},i),t),{},{components:n,mdxType:"MDXLayout"}),Object(s.a)("p",null,"Let\u2019s check this badly written example first. The sequence below will run each step asynchronously."),Object(s.a)("pre",null,Object(s.a)("code",u({parentName:"pre"},{className:"language-js"}),"// y = 2 * (x\xb2 + 5)\nconst s1 = [\n  x => Promise.resolve(x * x),\n  x => Promise.resolve(x + 5),\n  x => Promise.resolve(x * 2),\n]\n\nfunction runSequence(sequence, data) {\n  return sequence.reduce((previous, task) => {\n    return Promise.resolve(previous).then(task)\n  }, data)\n}\n\nawait runSequence(s1, 5)\n")),Object(s.a)("p",null,"In this example, we want the result of the previous stage to get passed on as input to the following stage. The runSequence helper function connects these tasks together."),Object(s.a)("p",null,"What if we need the initial data in a later stage? to do that, we need to add a transformer function to runSequence. Let\u2019s change the previous example problem so that we\u2019ll need the initial value in a later stage."),Object(s.a)("pre",null,Object(s.a)("code",u({parentName:"pre"},{className:"language-js"}),"// y = 2 * (x\xb2 + 5) + x\nconst s2 = [\n  x => Promise.resolve(x * x),\n  x => Promise.resolve(x + 5),\n  x => Promise.resolve(x * 2),\n  v => Promise.resolve(v.prev + v.data),\n]\n\nfunction runSequence(sequence, data, transformer) {\n  return sequence.reduce((prev, task, idx) => {\n    return Promise.resolve(prev)\n      .then(prevVal => transformer(idx, prevVal, data))\n      .then(task)\n  }, data)\n}\n\nawait runSequence(s2, 5, function (stage, prev, data) {\n  switch (stage) {\n    case 3:\n      return { prev, data }\n    default:\n      return prev\n  }\n})\n")),Object(s.a)("p",null,"We can take it a step further and give the transformer an array of all results up to the current executing stage."),Object(s.a)("pre",null,Object(s.a)("code",u({parentName:"pre"},{className:"language-js"}),"// y = 2 * (x\xb2 + 5) + x\xb2\nconst s3 = [\n  x => Promise.resolve(x * x),\n  x => Promise.resolve(x + 5),\n  x => Promise.resolve(x * 2),\n  v => Promise.resolve(v.prev + v.sqrd),\n]\n\nfunction runSequence(sequence, data, transformer) {\n  const results = []\n  return sequence.reduce((prev, task, idx) => {\n    return Promise.resolve(prev)\n      .then(prevVal => transformer(idx, prevVal, data, results))\n      .then(task)\n      .then(res => {\n        results.push(res)\n        return res\n      })\n  }, data)\n}\n\nawait runSequence(s3, 5, function (stage, prev, data, results) {\n  switch (stage) {\n    case 3:\n      // reuse x\xb2 from result of stage 1\n      return { prev, sqrd: results[0] }\n    default:\n      return prev\n  }\n})\n")),Object(s.a)("p",null,"If you're using RxJS, this can be done using both concat and defer."),Object(s.a)("pre",null,Object(s.a)("code",u({parentName:"pre"},{className:"language-js"}),"Observable.of()\n    .concat( Observable.defer(() => asyncTask()))\n    .concat( Observable.defer(() => asyncTask()))\n")))}d.isMDXComponent=!0}},[["Si/e",0,1,2]]]);