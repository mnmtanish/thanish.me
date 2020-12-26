_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{QvlL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2016-01-18-using-multiple-gopaths",function(){return n("lQgt")}])},lQgt:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n("rePB"),a=n("Ff2n"),r=(n("q1tI"),n("7ljp")),i=n("hOk3");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={title:"Using multiple GOPATHs",description:"For an example, if we set the GOPATH environment variable to _/tmp/go1:/tmp/go2:/tmp/go3_ all three of them will act as GOPATHs.",intro:Object(r.a)("section",null,Object(r.a)("p",null,"For an example, if we set the GOPATH environment variable to _/tmp/go1:/tmp/go2:/tmp/go3_ all three of them will act as GOPATHs.")),date:"2016-01-18",tags:["go"]},c={meta:s},m=Object(i.a)({meta:s});function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.a)(m,p(p(p({},c),n),{},{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"For an example, if we set the GOPATH environment variable to ",Object(r.a)("em",{parentName:"p"},"/tmp/go1:/tmp/go2:/tmp/go3")," all three of them will act as GOPATHs."),Object(r.a)("pre",null,Object(r.a)("code",p({parentName:"pre"},{}),"GOPATH=/tmp/go1:/tmp/go2:/tmp/go3\n")),Object(r.a)("p",null,"But this raises a few questions."),Object(r.a)("h2",null,"How will this affect \u201cgo\xa0get\u201d?"),Object(r.a)("p",null,"To test this out, simply set the GOPATH, and try go getting a simple repository. You may run these commands if you like."),Object(r.a)("pre",null,Object(r.a)("code",p({parentName:"pre"},{}),"GOPATH=/tmp/go1:/tmp/go2:/tmp/go3\ngo get github.com/deis/helloworld\nfind /tmp/ | grep helloworld | head -1\n")),Object(r.a)("p",null,"It will be clear that packages downloaded using the go get command will end up in /tmp/go1 or the first directory in the set of GOPATHs"),Object(r.a)("h2",null,"How will this affect\xa0imports?"),Object(r.a)("p",null,"Go will look for packages in each of the paths given starting from the first. To test this out, I made this example repo and a script to run some tests. It\u2019s easier to test and understand how it works by running the shell script in the repo. If we consider the above example GOPATH, Go will first look in ",Object(r.a)("inlineCode",{parentName:"p"},"/tmp/go1")," then ",Object(r.a)("inlineCode",{parentName:"p"},"/tmp/go2")," and finally ",Object(r.a)("inlineCode",{parentName:"p"},"/tmp/go3")," until it finds the package. Check this ",Object(r.a)("a",p({parentName:"p"},{href:"https://github.com/mnmtanish/test-multiple-gopaths"}),"Github repository")," for a demo."),Object(r.a)("hr",null),Object(r.a)("p",null,"So now that we can use multiple GOPATHs, is it useful? I personally think it would have been great if the import lookup order was in reverse order while maintaining current \u201cgo get\u201d behaviour. If this happens, I can use 2 paths to separate actively developing projects and external dependencies."))}u.isMDXComponent=!0}},[["QvlL",0,1,2]]]);