"use strict";(self.webpackChunkopen_models_iecho=self.webpackChunkopen_models_iecho||[]).push([[4396],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>u});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function s(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var r=n.createContext({}),p=function(t){var e=n.useContext(r),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=p(t.components);return n.createElement(r.Provider,{value:e},t.children)},y="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),y=p(l),k=a,u=y["".concat(r,".").concat(k)]||y[k]||c[k]||o;return l?n.createElement(u,i(i({ref:e},d),{},{components:l})):n.createElement(u,i({ref:e},d))}));function u(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=l.length,i=new Array(o);i[0]=k;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[y]="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},59075:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var n=l(87462),a=(l(67294),l(3905));const o={},i="Get Children",s={type:"api",id:"get-children",unversionedId:"get-children",title:"Get Children",description:"",slug:"/get-children",frontMatter:{},api:{tags:["messages"],description:"Get all messages belonging to the same message tree.",operationId:"get_children_api_v1_messages__message_id__children_get",parameters:[{required:!0,schema:{title:"Message Id",type:"string",format:"uuid"},name:"message_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Get Children Api V1 Messages  Message Id  Children Get",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}},user_is_author:{title:"User Is Author",type:"boolean"},synthetic:{title:"Synthetic",type:"boolean"},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"},review_result:{title:"Review Result",type:"boolean"},review_count:{title:"Review Count",type:"integer"},deleted:{title:"Deleted",type:"boolean"},model_name:{title:"Model Name",type:"string"},message_tree_id:{title:"Message Tree Id",type:"string",format:"uuid"},ranking_count:{title:"Ranking Count",type:"integer"},rank:{title:"Rank",type:"integer"},user:{title:"FrontEndUser",required:["id","display_name","auth_method","user_id","enabled","deleted","notes","show_on_leaderboard"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"},user_id:{title:"User Id",type:"string",format:"uuid"},enabled:{title:"Enabled",type:"boolean"},deleted:{title:"Deleted",type:"boolean"},notes:{title:"Notes",type:"string"},created_date:{title:"Created Date",type:"string",format:"date-time"},show_on_leaderboard:{title:"Show On Leaderboard",type:"boolean"},streak_days:{title:"Streak Days",type:"integer"},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"},tos_acceptance_date:{title:"Tos Acceptance Date",type:"string",format:"date-time"}}}},description:"Represents a message in a conversation between the user and the assistant."}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],method:"get",path:"/api/v1/messages/{message_id}/children",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-models-iecho backend",version:"0.1.0"},postman:{name:"Get Children",description:{content:"Get all messages belonging to the same message tree.",type:"text/plain"},url:{path:["api","v1","messages",":message_id","children"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/open-models-iecho/api/get-children",previous:{title:"Put Message Tree State",permalink:"/open-models-iecho/api/put-message-tree-state"},next:{title:"Get Descendants",permalink:"/open-models-iecho/api/get-descendants"}},r=[],p={toc:r},d="wrapper";function y(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-children"},"Get Children"),(0,a.kt)("p",null,"Get all messages belonging to the same message tree."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"message_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"frontend_message_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"text"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Text"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"lang"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Lang"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"is_assistant"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"emojis"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_emojis"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_is_author"),(0,a.kt)("span",{style:{opacity:"0.6"}}," User Is Author"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"synthetic"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Synthetic"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"parent_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"created_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"review_result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Review Result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"review_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Review Count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Deleted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"model_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Model Name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"message_tree_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ranking_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Ranking Count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"rank"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rank"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Id"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"display_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Display Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"auth_method"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"system"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enabled"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Enabled"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Deleted"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"notes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Notes"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"created_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"show_on_leaderboard"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Show On Leaderboard"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"streak_days"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Streak Days"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"streak_last_day_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"last_activity_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"tos_acceptance_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}y.isMDXComponent=!0}}]);