_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{Qi3i:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2017-01-25-getting-the-class-in-static-methods",function(){return n("mHx7")}])},mHx7:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"default",(function(){return p}));var s=n("rePB"),r=n("Ff2n"),i=(n("q1tI"),n("7ljp")),a=n("hOk3");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={title:"The class in static methods",description:"This is useful when writing static methods which can be inherited by other classes. Here\u2019s an example:",intro:Object(i.a)("section",null,Object(i.a)("p",null,"This is useful when writing static methods which can be inherited by other classes. Here\u2019s an example:")),date:"2017-01-25",tags:["js"]},u={meta:l},h=Object(a.a)({meta:l});function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(h,o(o(o({},u),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This is useful when writing static methods which can be inherited by other classes. Here\u2019s an example:"),Object(i.a)("pre",null,Object(i.a)("code",o({parentName:"pre"},{}),"class Parent {\n  static x() {\n    return 10\n  }\n\n  static y() {\n    return 2\n  }\n\n  static xy() {\n    // return x * y ?\n  }\n}\n\nclass Child extends Person {\n  static x() {\n    return 100\n  }\n}\n\nconsole.log(Person.xy(), Child.xy())\n")),Object(i.a)("p",null,"The solution was so simple I feel bad it took me some time to figure it out. The important this to remember is that what happens behind all the OOP is just simple javascript. Let\u2019s focus on where we call the function."),Object(i.a)("pre",null,Object(i.a)("code",o({parentName:"pre"},{}),"Parent.xy()\n")),Object(i.a)("p",null,"What do you think the value of this is inside the xy function? The class Parent is just a function object. The value of this works just like when we call obj.fn()."),Object(i.a)("p",null,'But the value of "this" can quickly get confusing once we start using both static and non-static methods.'),Object(i.a)("pre",null,Object(i.a)("code",o({parentName:"pre"},{}),"class Parent {\n  static x() {\n    return 10\n  }\n\n  static y() {\n    return 2\n  }\n\n  static xy() {\n    return this.x() * this.y()\n  }\n\n  z() {\n    return this.z\n  }\n}\n\nclass Child extends Parent {\n  static x() {\n    return 100\n  }\n}\n\nconsole.log(Parent.xy(), Child.xy())\n")))}p.isMDXComponent=!0}},[["Qi3i",0,1,2]]]);