"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[8224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u81ea\u5b9a\u4e49\u5e94\u7b54",keywords:["higress","transformer"],description:"\u81ea\u5b9a\u4e49\u5e94\u7b54\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},o=void 0,i={unversionedId:"plugins/transformation/custom-response",id:"plugins/transformation/custom-response",title:"\u81ea\u5b9a\u4e49\u5e94\u7b54",description:"\u81ea\u5b9a\u4e49\u5e94\u7b54\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/transformation/custom-response.md",sourceDirName:"plugins/transformation",slug:"/plugins/transformation/custom-response",permalink:"/zh-cn/docs/plugins/transformation/custom-response",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/transformation/custom-response.md",tags:[],version:"current",frontMatter:{title:"\u81ea\u5b9a\u4e49\u5e94\u7b54",keywords:["higress","transformer"],description:"\u81ea\u5b9a\u4e49\u5e94\u7b54\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"Token \u8ba4\u8bc1",permalink:"/zh-cn/docs/plugins/authentication/simple-jwt-auth"},next:{title:"\u8bf7\u6c42/\u54cd\u5e94\u8f6c\u6362",permalink:"/zh-cn/docs/plugins/transformation/transformer"}},p={},s=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u5b57\u6bb5",id:"\u914d\u7f6e\u5b57\u6bb5",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"Mock \u5e94\u7b54\u573a\u666f",id:"mock-\u5e94\u7b54\u573a\u666f",level:3},{value:"\u89e6\u53d1\u9650\u6d41\u65f6\u81ea\u5b9a\u4e49\u54cd\u5e94",id:"\u89e6\u53d1\u9650\u6d41\u65f6\u81ea\u5b9a\u4e49\u54cd\u5e94",level:3},{value:"\u5bf9\u7279\u5b9a\u8def\u7531\u6216\u57df\u540d\u5f00\u542f",id:"\u5bf9\u7279\u5b9a\u8def\u7531\u6216\u57df\u540d\u5f00\u542f",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"custom-response")," \u63d2\u4ef6\u652f\u6301\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684\u54cd\u5e94\uff0c\u5305\u62ec\u81ea\u5b9a\u4e49 HTTP \u5e94\u7b54\u72b6\u6001\u7801\u3001HTTP \u5e94\u7b54\u5934\uff0c\u4ee5\u53ca HTTP \u5e94\u7b54 Body\u3002\u53ef\u4ee5\u7528\u4e8e Mock \u54cd\u5e94\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5224\u65ad\u7279\u5b9a\u72b6\u6001\u7801\u540e\u7ed9\u51fa\u81ea\u5b9a\u4e49\u5e94\u7b54\uff0c\u4f8b\u5982\u5728\u89e6\u53d1\u7f51\u5173\u9650\u6d41\u7b56\u7565\u65f6\u5b9e\u73b0\u81ea\u5b9a\u4e49\u54cd\u5e94\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5b57\u6bb5"},"\u914d\u7f6e\u5b57\u6bb5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status_code"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 HTTP \u5e94\u7b54\u72b6\u6001\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"headers"),(0,a.kt)("td",{parentName:"tr",align:null},"array of string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 HTTP \u5e94\u7b54\u5934\uff0ckey \u548c value \u7528",(0,a.kt)("inlineCode",{parentName:"td"},"="),"\u5206\u9694")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"body"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 HTTP \u5e94\u7b54 Body")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_on_status"),(0,a.kt)("td",{parentName:"tr",align:null},"array of number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u539f\u59cb\u72b6\u6001\u7801\uff0c\u751f\u6210\u81ea\u5b9a\u4e49\u54cd\u5e94\uff0c\u4e0d\u586b\u5199\u65f6\uff0c\u4e0d\u5224\u65ad\u539f\u59cb\u72b6\u6001\u7801")))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("h3",{id:"mock-\u5e94\u7b54\u573a\u666f"},"Mock \u5e94\u7b54\u573a\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'status_code: 200\nheaders:\n- Content-Type=application/json\n- Hello=World\nbody: "{\\"hello\\":\\"world\\"}"\n\n')),(0,a.kt)("p",null,"\u6839\u636e\u8be5\u914d\u7f6e\uff0c\u8bf7\u6c42\u5c06\u8fd4\u56de\u81ea\u5b9a\u4e49\u5e94\u7b54\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nHello: World\nContent-Length: 17\n\n{"hello":"world"}\n')),(0,a.kt)("h3",{id:"\u89e6\u53d1\u9650\u6d41\u65f6\u81ea\u5b9a\u4e49\u54cd\u5e94"},"\u89e6\u53d1\u9650\u6d41\u65f6\u81ea\u5b9a\u4e49\u54cd\u5e94"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"enable_on_status: \n- 429\nstatus_code: 302\nheaders:\n- Location=https://example.com\n")),(0,a.kt)("p",null,"\u89e6\u53d1\u7f51\u5173\u9650\u6d41\u65f6\u4e00\u822c\u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"429")," \u72b6\u6001\u7801\uff0c\u8fd9\u65f6\u8bf7\u6c42\u5c06\u8fd4\u56de\u81ea\u5b9a\u4e49\u5e94\u7b54\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 302 Found\nLocation: https://example.com\n")),(0,a.kt)("p",null,"\u4ece\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d4f\u89c8\u5668 302 \u91cd\u5b9a\u5411\u673a\u5236\uff0c\u5c06\u9650\u6d41\u540e\u7684\u7528\u6237\u5f15\u5bfc\u5230\u5176\u4ed6\u9875\u9762\uff0c\u6bd4\u5982\u53ef\u4ee5\u662f\u4e00\u4e2a CDN \u4e0a\u7684\u9759\u6001\u9875\u9762\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u89e6\u53d1\u9650\u6d41\u65f6\uff0c\u6b63\u5e38\u8fd4\u56de\u5176\u4ed6\u5e94\u7b54\uff0c\u53c2\u8003 Mock \u5e94\u7b54\u573a\u666f\u914d\u7f6e\u76f8\u5e94\u7684\u5b57\u6bb5\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u5bf9\u7279\u5b9a\u8def\u7531\u6216\u57df\u540d\u5f00\u542f"},"\u5bf9\u7279\u5b9a\u8def\u7531\u6216\u57df\u540d\u5f00\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u4f7f\u7528 matchRules \u5b57\u6bb5\u8fdb\u884c\u7ec6\u7c92\u5ea6\u89c4\u5219\u914d\u7f6e\nmatchRules:\n# \u89c4\u5219\u4e00\uff1a\u6309 Ingress \u540d\u79f0\u5339\u914d\u751f\u6548\n- ingress:\n  - default/foo\n  - default/bar\n  body: "{\\"hello\\":\\"world\\"}"\n# \u89c4\u5219\u4e8c\uff1a\u6309\u57df\u540d\u5339\u914d\u751f\u6548\n- domain:\n  - "*.example.com"\n  - test.com\n  enable_on_status: \n  - 429\n  status_code: 200\n  headers:\n  - Content-Type=application/json\n  body: "{\\"errmsg\\": \\"rate limited\\"}"\n')),(0,a.kt)("p",null,"\u6b64\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress")," \u4e2d\u6307\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"default/foo")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"default/bar")," \u5bf9\u5e94 default \u547d\u540d\u7a7a\u95f4\u4e0b\u540d\u4e3a foo \u548c bar \u7684 Ingress\uff0c\u5f53\u5339\u914d\u5230\u8fd9\u4e24\u4e2a Ingress \u65f6\uff0c\u5c06\u4f7f\u7528\u6b64\u6bb5\u914d\u7f6e\uff1b\n\u6b64\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," \u4e2d\u6307\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.example.com")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"test.com")," \u7528\u4e8e\u5339\u914d\u8bf7\u6c42\u7684\u57df\u540d\uff0c\u5f53\u53d1\u73b0\u57df\u540d\u5339\u914d\u65f6\uff0c\u5c06\u4f7f\u7528\u6b64\u6bb5\u914d\u7f6e\uff1b\n\u914d\u7f6e\u7684\u5339\u914d\u751f\u6548\u987a\u5e8f\uff0c\u5c06\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"matchRules")," \u4e0b\u89c4\u5219\u7684\u6392\u5217\u987a\u5e8f\uff0c\u5339\u914d\u7b2c\u4e00\u4e2a\u89c4\u5219\u540e\u751f\u6548\u5bf9\u5e94\u914d\u7f6e\uff0c\u540e\u7eed\u89c4\u5219\u5c06\u88ab\u5ffd\u7565\u3002"))}c.isMDXComponent=!0}}]);