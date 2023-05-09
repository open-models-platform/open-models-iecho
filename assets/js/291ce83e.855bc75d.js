"use strict";(self.webpackChunkopen_models_iecho=self.webpackChunkopen_models_iecho||[]).push([[2087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Data Augmentation",c={unversionedId:"data/augmentation",id:"data/augmentation",title:"Data Augmentation",description:"(pull request welcome)",source:"@site/docs/data/augmentation.md",sourceDirName:"data",slug:"/data/augmentation",permalink:"/open-models-iecho/docs/data/augmentation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Datasets",permalink:"/open-models-iecho/docs/data/datasets"},next:{title:"Supervised Datasets",permalink:"/open-models-iecho/docs/data/supervised-datasets"}},l={},s=[{value:"What is data augmentation",id:"what-is-data-augmentation",level:2},{value:"How to contribute",id:"how-to-contribute",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-augmentation"},"Data Augmentation"),(0,r.kt)("p",null,"(pull request welcome)"),(0,r.kt)("h2",{id:"what-is-data-augmentation"},"What is data augmentation"),(0,r.kt)("p",null,"Data augmentation is a technique we can use to get better data faster. Using\nmachine learning models to analyze long data (like an essay) and compress it\ninto instructions."),(0,r.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,r.kt)("p",null,"To contribute to data augmentation you can write a short Python script that uses\na model from HuggingFace to analyze the text.\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/13a188pPvqnlvuVa3e_suVz4YO5s-JWeiOOrpp0odImg/edit"},"Here"),"\nare examples of what you can do."),(0,r.kt)("p",null,"And here are example implementations:\n",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1GllCN5PgSYxBxINZsv3A2r0SpdznHlbT?usp=sharing"},"Idea 3"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1nZx5LRjO61fYprFyqtrwPDLOis6ctR4p#scrollTo=1EE8CriiaCXj"},"Idea 4")),(0,r.kt)("p",null,"To contribute simply choose one of many ideas from the document above and\nimplement it."))}d.isMDXComponent=!0}}]);