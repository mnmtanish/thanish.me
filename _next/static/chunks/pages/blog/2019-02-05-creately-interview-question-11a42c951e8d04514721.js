_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{U0mq:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019-02-05-creately-interview-question",function(){return n("ycwi")}])},ycwi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"default",(function(){return h}));var o=n("rePB"),a=n("Ff2n"),i=(n("q1tI"),n("7ljp")),r=n("hOk3");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={title:"Solving Interview Problems",description:"Sometimes, we get to solve programming questions on site during software engineering interviews. This is one of the questions I used to ask from those who have applied for software engineering positions at Creately.",intro:Object(i.a)("section",null,Object(i.a)("p",null,"Sometimes, we get to solve programming questions on site during software engineering interviews. This is one of the questions I used to ask from those who have applied for software engineering positions at Creately.")),date:"2019-02-05",tags:["creately"]},p={meta:c},u=Object(r.a)({meta:c});function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(u,l(l(l({},p),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Sometimes, we get to solve programming questions on site during software engineering interviews. This is one of the questions I used to ask from those who have applied for software engineering positions at Creately."),Object(i.a)("p",null,Object(i.a)("em",{parentName:"p"},"A number of train engines are moving towards a common destination on the same track. Each train's maximum speed and distance from the destination is given as an array.")),Object(i.a)("pre",null,Object(i.a)("code",l({parentName:"pre"},{className:"language-js"}),"const trains = [\n    { id: 't1', distance: 1200, maxSpeed: 10 },\n    // ...\n];\n")),Object(i.a)("p",null,Object(i.a)("em",{parentName:"p"},"Calculate how long will it take for each train to arrive at the destination.")),Object(i.a)("h2",null,"Part 1: solving the problem"),Object(i.a)("p",null,"First, we need to solve the problem within a time limit. An engineer from the company will assist you during this process."),Object(i.a)("h3",null,"Questions about the problem"),Object(i.a)("p",null,"Applicants are expected to ask questions about the problem and clarify before starting to code. The interviewer will normally do their best to explain the problem to the applicant."),Object(i.a)("h3",null,"Using the internet/browser"),Object(i.a)("p",null,'It is okay to look at documentation. We expect the applicant to look at relevant documentation when they need them instead of getting stuck. And it is absolutely okay to search "how to sort numbers in javascript" or anything like that.'),Object(i.a)("h3",null,"Using third party modules"),Object(i.a)("p",null,"If lodash or any other publicly available module can help you solve the problem faster, please go ahead and use them. But we expect them to have a clear idea about what the tool/function does."),Object(i.a)("p",null,"Other than the above, try to explain what's on your mind when you're trying to solve the problem. Be honest and listen to what the interviewer is saying, they're probably trying to help you solve the problem."),Object(i.a)("h2",null,"Part 2: discussing the solution"),Object(i.a)("p",null,"The second part is where the applicant and the interviewer will have a discussion about the solution. The interviewer ask questions to see how well the applicant understands the question and the solution. This part is probably more important than solving the problem."),Object(i.a)("h3",null,"Example Solution:"),Object(i.a)("pre",null,Object(i.a)("code",l({parentName:"pre"},{className:"language-js"}),"const trains = [\n    { id: 't1', distance: 10, maxSpeed: 10 },\n    { id: 't2', distance: 51, maxSpeed: 10 },\n    { id: 't3', distance: 50, maxSpeed: 5 },\n    { id: 't4', distance: 150, maxSpeed: 5 },\n];\n\n// sort by the distance from the destination\ntrains.sort((a, b) => a.distance - b.distance)\n\nfor (let i = 0; i < trains.length; ++i) {\n    const train = trains[i];\n    // duration if there are no other trains in front\n    train.duration = train.distance / train.maxSpeed;\n    if (i > 0) {\n        // \"prevs\" is in front of \"train\"\n        const prevs = trains[i - 1];\n        // train.duration must be >= prevs.duration\n        if (prevs.duration > train.duration) {\n            train.duration = prevs.duration;\n        }\n    }\n}\n\nconsole.log(trains)\n")),Object(i.a)("p",null,"In real world, the above example can cause create some issues. Let me know if you have figured them out."))}h.isMDXComponent=!0}},[["U0mq",0,1,2]]]);