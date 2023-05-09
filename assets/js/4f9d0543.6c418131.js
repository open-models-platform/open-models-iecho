"use strict";(self.webpackChunkopen_models_iecho=self.webpackChunkopen_models_iecho||[]).push([[3191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},96005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"The Architecture so Far!",description:"This is the architecture of our app so far.",slug:"2023-02-11-architecture",authors:"AbdBarho",tags:["open-models-iecho"]},i=void 0,s={permalink:"/open-models-iecho/blog/2023-02-11-architecture",source:"@site/blog/2023-02-11-architecture.md",title:"The Architecture so Far!",description:"This is the architecture of our app so far.",date:"2023-02-11T00:00:00.000Z",formattedDate:"February 11, 2023",tags:[{label:"open-models-iecho",permalink:"/open-models-iecho/blog/tags/open-models-iecho"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Abdullah Barhoum",title:"Semi-professional D\xf6ner Enjoyer",imageURL:"https://avatars.githubusercontent.com/u/24505302?v=4",key:"AbdBarho"}],frontMatter:{title:"The Architecture so Far!",description:"This is the architecture of our app so far.",slug:"2023-02-11-architecture",authors:"AbdBarho",tags:["open-models-iecho"]},prevItem:{title:"Open Models iEcho Inference Backend Development (Hands-On Coding)",permalink:"/open-models-iecho/blog/2023/02/24/open-assistant-inference-backend-development-hands-on-coding"},nextItem:{title:"We Need Your Help!",permalink:"/open-models-iecho/blog/we-need-your-help"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I thought it would make sense to document our architecture as a blog post, since\nit would be easily visible for everyone, and it would also be nice to look back\na couple months from now and see how stuff has changed :)"),(0,o.kt)("p",null,"A lot of work was done in the past couple of week to establish the needed\ninfrastructure both for data collection and inference purposes. Thanks to\neveryone, and especially community members who supported us so far!"),(0,o.kt)("p",null,"Our current plan for the architecture of the Open Models iEcho is as follows:"),(0,o.kt)("mermaid",{value:"flowchart TD\n  subgraph next[Web Frontend]\n    direction TB\n    website([Browser]) & nextbackend[Backend] & webpostgres[(PostgreSQL)]\n  end\n\n  subgraph data[Python backend]\n    direction TB\n    backend[Backend] & postgres[(PostgreSQL)] & redis[(Redis)]\n  end\n\n  subgraph inference[Inference Service]\n    direction TB\n    inferenceServer[Server] -.- infpostgres[(PostgreSQL)]\n  end\n\n  subgraph workers[Inference Workers]\n    direction TB\n    worker1[Worker] --- textgen1[Text\\ngenerator]\n    worker2[Worker] --- textgen2[Text\\ngenerator]\n    worker3[Worker] --- textgen3[Text\\ngenerator]\n  end\n\n  website --\x3e nextbackend\n  nextbackend -.- webpostgres\n\n  next --- data\n\n  backend -.- postgres & redis\n\n  next --- inference\n\n  inference --- workers"}),(0,o.kt)("p",null,"We are working on setting up the inference as shown above, and considering our\noptions for hosting, also, we want to move our authentication from the website\nto the python backend."),(0,o.kt)("p",null,"Of course, this is by no means final, and lot of questions are still open, and\nthat is the fun of it! If you want to join us on our journey, just give our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-models-platform/open-models-iecho"},"github")," a look!"))}d.isMDXComponent=!0}}]);