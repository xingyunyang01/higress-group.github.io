"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[1980],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return n?r.createElement(g,o(o({ref:e},m),{},{components:n})):r.createElement(g,o({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5919:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"AI \u63d0\u793a\u8bcd\u4fee\u9970",keywords:["higress","ai"],description:"AI\u63d0\u793a\u8bcd\u4fee\u9970\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},o=void 0,i={unversionedId:"plugins/ai/ai-prompt-decorator",id:"plugins/ai/ai-prompt-decorator",title:"AI \u63d0\u793a\u8bcd\u4fee\u9970",description:"AI\u63d0\u793a\u8bcd\u4fee\u9970\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/ai/ai-prompt-decorator.md",sourceDirName:"plugins/ai",slug:"/plugins/ai/ai-prompt-decorator",permalink:"/zh-cn/docs/plugins/ai/ai-prompt-decorator",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/ai/ai-prompt-decorator.md",tags:[],version:"current",frontMatter:{title:"AI \u63d0\u793a\u8bcd\u4fee\u9970",keywords:["higress","ai"],description:"AI\u63d0\u793a\u8bcd\u4fee\u9970\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"AI \u7f13\u5b58",permalink:"/zh-cn/docs/plugins/ai/ai-cache"},next:{title:"AI \u63d0\u793a\u8bcd\u6a21\u677f",permalink:"/zh-cn/docs/plugins/ai/ai-prompt-template"}},p={},u=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2}],m={toc:u},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,"AI \u63d0\u793a\u8bcd\u4fee\u9970\u63d2\u4ef6\u7528\u4e8e\u5bf9 Prompt \u8fdb\u884c\u8c03\u6574\uff0c\u652f\u6301\u5728\u7528\u6237\u8f93\u5165\u7684 Prompt \u524d\u540e\u6dfb\u52a0\u989d\u5916\u7684 Prompt\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 Higress AI \u7f51\u5173\u6765\u7edf\u4e00\u5904\u7406\u5e94\u7528\u903b\u8f91\u4e2d\u9700\u8981\u64cd\u63a7 Prompt \u7684\u5730\u65b9\uff0c\u8ba9\u6240\u6709 LLM API \u6d41\u91cf\u90fd\u7ecf\u8fc7 Higress \u8fdb\u884c\u5904\u7406\uff0c\u81ea\u52a8\u5b8c\u6210 Prompt \u7684\u7edf\u4e00\u64cd\u63a7\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"decorators")),(0,a.kt)("td",{parentName:"tr",align:null},"array of object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4fee\u9970\u8bbe\u7f6e")))),(0,a.kt)("p",null,"template object \u914d\u7f6e\u8bf4\u660e\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4fee\u9970\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"decorator.prepend")),(0,a.kt)("td",{parentName:"tr",align:null},"array of message object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u521d\u59cb\u8f93\u5165\u4e4b\u524d\u63d2\u5165\u7684\u8bed\u53e5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"decorator.append")),(0,a.kt)("td",{parentName:"tr",align:null},"array of message object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u521d\u59cb\u8f93\u5165\u4e4b\u540e\u63d2\u5165\u7684\u8bed\u53e5")))),(0,a.kt)("p",null,"message object \u914d\u7f6e\u8bf4\u660e\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"role")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u89d2\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"content")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f")))),(0,a.kt)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'decorators:\n- name: "hangzhou-guide"\n  decorator:\n    prepend:\n    - role: system\n      content: "You will always respond in the Chinese language."\n    - role: user\n      content: "Assume you are from Hangzhou."\n    append:\n    - role: user\n      content: "Don\'t introduce Hangzhou\'s food."\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0a\u914d\u7f6e\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "model": "gpt-3.5-turbo",\n  "messages": [\n    {\n      "role": "user",\n      "content": "Please introduce your home."\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "id": "chatcmpl-9UYwQlEg6GwAswEZBDYXl41RU4gab",\n  "object": "chat.completion",\n  "created": 1717071182,\n  "model": "gpt-3.5-turbo-0125",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "\u676d\u5dde\u662f\u4e00\u4e2a\u7f8e\u4e3d\u7684\u57ce\u5e02\uff0c\u6709\u7740\u60a0\u4e45\u7684\u5386\u53f2\u548c\u5bcc\u6709\u7279\u8272\u7684\u6587\u5316\u3002\u8fd9\u91cc\u98ce\u666f\u4f18\u7f8e\uff0c\u6709\u897f\u6e56\u3001\u96f7\u5cf0\u5854\u7b49\u8457\u540d\u666f\u70b9\uff0c\u5438\u5f15\u7740\u8bb8\u591a\u6e38\u5ba2\u524d\u6765\u89c2\u5149\u3002\u676d\u5dde\u4eba\u6c11\u70ed\u60c5\u597d\u5ba2\uff0c\u57ce\u5e02\u5b81\u9759\u5b89\u9038\uff0c\u662f\u4e00\u4e2a\u9002\u5408\u5c45\u4f4f\u548c\u65c5\u6e38\u7684\u5730\u65b9\u3002"\n      },\n      "logprobs": null,\n      "finish_reason": "stop"\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 49,\n    "completion_tokens": 117,\n    "total_tokens": 166\n  },\n  "system_fingerprint": null\n}\n')))}d.isMDXComponent=!0}}]);