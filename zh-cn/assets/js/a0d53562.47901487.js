"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[7639],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3273:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"IP \u9650\u5236",keywords:["higress"],description:"IP \u9650\u5236\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},i=void 0,p={unversionedId:"plugins/traffic/ip-restriction",id:"plugins/traffic/ip-restriction",title:"IP \u9650\u5236",description:"IP \u9650\u5236\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/traffic/ip-restriction.md",sourceDirName:"plugins/traffic",slug:"/plugins/traffic/ip-restriction",permalink:"/zh-cn/docs/plugins/traffic/ip-restriction",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/traffic/ip-restriction.md",tags:[],version:"current",frontMatter:{title:"IP \u9650\u5236",keywords:["higress"],description:"IP \u9650\u5236\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41",permalink:"/zh-cn/docs/plugins/traffic/cluster-key-rate-limit"},next:{title:"\u8bf7\u6c42\u6821\u9a8c",permalink:"/zh-cn/docs/plugins/traffic/request-validation"}},o={},u=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2}],c={toc:u},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5c06 IP \u5730\u5740\u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee.\u652f\u6301\u5bf9\u5355\u4e2a IP \u5730\u5740\u3001\u591a\u4e2a IP \u5730\u5740\u548c\u7c7b\u4f3c\n10.10.10.0/24 \u7684 CIDR \u8303\u56f4\u7684\u9650\u5236\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ip_source_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"origin-source"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u503c\uff1a1. \u5bf9\u7aef socket ip\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"origin-source"),"; 2. \u901a\u8fc7 header \u83b7\u53d6\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"header"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ip_header_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"x-forwarded-for"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"td"},"ip_source_type")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"header")," \u65f6\uff0c\u6307\u5b9a\u81ea\u5b9a\u4e49 IP \u6765\u6e90\u5934")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allow"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u767d\u540d\u5355\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deny"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u8bbf\u95ee\u65f6\u7684 HTTP \u72b6\u6001\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"Your IP address is blocked."),(0,a.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u8bbf\u95ee\u65f6\u7684\u8fd4\u56de\u4fe1\u606f")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ip_source_type: origin-source\nallow:\n  - 10.0.0.1\n  - 192.168.0.0/16\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ip_source_type: header\nip_header_name: x-real-iP\ndeny:\n  - 10.0.0.1\n  - 192.169.0.0/16   \n")))}d.isMDXComponent=!0}}]);