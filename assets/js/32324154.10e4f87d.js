"use strict";(self.webpackChunkopen_models_iecho=self.webpackChunkopen_models_iecho||[]).push([[4105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,k=d["".concat(o,".").concat(y)]||d[y]||c[y]||l;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4884:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={},s="Mark User Messages Deleted",i={type:"api",id:"mark-user-messages-deleted",unversionedId:"mark-user-messages-deleted",title:"Mark User Messages Deleted",description:"",slug:"/mark-user-messages-deleted",frontMatter:{},api:{tags:["users"],operationId:"mark_user_messages_deleted_api_v1_users__user_id__messages_delete",parameters:[{required:!0,schema:{title:"User Id",type:"string",format:"uuid"},name:"user_id",in:"path"}],responses:{204:{description:"Successful Response"},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],description:"Mark User Messages Deleted",method:"delete",path:"/api/v1/users/{user_id}/messages",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-models-iecho backend",version:"0.1.0"},postman:{name:"Mark User Messages Deleted",description:{type:"text/plain"},url:{path:["api","v1","users",":user_id","messages"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"user_id"}]},method:"DELETE",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/open-models-iecho/api/mark-user-messages-deleted",previous:{title:"Query User Messages",permalink:"/open-models-iecho/api/query-user-messages"},next:{title:"Query User Messages Cursor",permalink:"/open-models-iecho/api/query-user-messages-cursor"}},o=[],p={toc:o},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mark-user-messages-deleted"},"Mark User Messages Deleted"),(0,a.kt)("p",null,"Mark User Messages Deleted"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"204")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}d.isMDXComponent=!0}}]);