import{c as a,__tla as p}from"./astro-component.cI6d52vQ.js";import{r as u,m as h,u as c,__tla as f}from"./constant.Cb-7D0bG.js";import{__tla as H}from"./astro/assets-service.Da9pL5MS.js";let e,i,r,t,g,l,o,d=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return H}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u4EE5ingress \u548C higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u662F\u4EC0\u4E48\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u662F\u4E00\u79CD\u9AD8\u5EA6\u96C6\u6210\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u7ED3\u5408\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u4EE5\u53CA\u5B89\u5168\u7F51\u5173\u7684\u529F\u80FD\u4E8E\u4E00\u4F53\u3002\u5728\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u7279\u522B\u662FKubernetes\uFF08K8s\uFF09\u751F\u6001\u7CFB\u7EDF\u4E2D\uFF0C\u7F51\u5173\u7684\u4F5C\u7528\u5C24\u4E3A\u91CD\u8981\uFF0C\u5B83\u4EEC\u8D1F\u8D23\u5904\u7406\u8FDB\u5165\u548C\u79BB\u5F00\u96C6\u7FA4\u7684\u6D41\u91CF\u3002Higress\u6B63\u662F\u4E3A\u4E86\u9002\u5E94\u8FD9\u79CD\u9700\u6C42\u800C\u8BBE\u8BA1\uFF0C\u5B83\u9009\u62E9Envoy\u4F5C\u4E3A\u5176\u6838\u5FC3\u4EE3\u7406\uFF0C\u5E76\u7ED3\u5408Istio\u6765\u63D0\u4F9B\u670D\u52A1\u7F51\u683C\u80FD\u529B\uFF0C\u4EE5\u6B64\u6765\u6EE1\u8DB3\u5357\u5317\u5411\uFF08\u516C\u7F51\u5230\u96C6\u7FA4\u5185\u90E8\uFF09\u548C\u4E1C\u897F\u5411\uFF08\u96C6\u7FA4\u5185\u90E8\u670D\u52A1\u95F4\uFF09\u7684\u6D41\u91CF\u7BA1\u7406\u4E0E\u5B89\u5168\u9700\u6C42\u3002</p>
<h3 id="\u539F\u56E0\u5206\u6790\u4F9D\u6258\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6">\u539F\u56E0\u5206\u6790\uFF08\u4F9D\u6258\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF09</h3>
<ol>
<li>
<p><strong>\u4F20\u7EDF\u7F51\u5173\u5206\u7C7B\u4E0E\u5C40\u9650</strong>\uFF1A\u4F20\u7EDF\u4E0A\uFF0C\u7F51\u5173\u88AB\u5206\u4E3A\u6D41\u91CF\u7F51\u5173\u548C\u4E1A\u52A1\u7F51\u5173\uFF08\u6216\u5FAE\u670D\u52A1\u7F51\u5173\uFF09\uFF0C\u5206\u522B\u5904\u7406\u4E0D\u540C\u5C42\u9762\u7684\u95EE\u9898\uFF0C\u8FD9\u5BFC\u81F4\u4E86\u67B6\u6784\u4E0A\u7684\u590D\u6742\u6027\u548C\u8FD0\u7EF4\u6210\u672C\u7684\u589E\u52A0\u3002</p>
</li>
<li>
<p><strong>\u4E91\u539F\u751F\u8D8B\u52BF</strong>\uFF1A\u968F\u7740Kubernetes\u7684\u666E\u53CA\uFF0CIngress\u8D44\u6E90\u6210\u4E3A\u4E86\u5B9A\u4E49\u4E91\u539F\u751F\u5E94\u7528\u5165\u53E3\u7684\u6807\u51C6\u65B9\u5F0F\uFF0C\u4F46\u540C\u65F6\u4E5F\u66B4\u9732\u4E86\u539F\u6709Ingress\u6807\u51C6\u7684\u4E0D\u8DB3\uFF0C\u5982\u8DEF\u7531\u8868\u8FBE\u80FD\u529B\u6709\u9650\u3002\u793E\u533A\u6B63\u63A8\u52A8Gateway API\u4F5C\u4E3A\u66F4\u5148\u8FDB\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u800CEnvoy\u56E0\u5176\u9AD8\u6027\u80FD\u548C\u7075\u6D3B\u6027\uFF0C\u5728\u4E91\u539F\u751F\u9886\u57DF\u589E\u957F\u8FC5\u901F\uFF0C\u6210\u4E3A\u6784\u5EFA\u73B0\u4EE3\u7F51\u5173\u7684\u7406\u60F3\u9009\u62E9\u3002</p>
</li>
<li>
<p><strong>Higress\u7684\u8BBE\u8BA1\u7406\u5FF5</strong>\uFF1A\u9274\u4E8E\u4E0A\u8FF0\u80CC\u666F\uFF0CHigress\u65E8\u5728\u901A\u8FC7\u6574\u5408Envoy\u4E0EIstio\uFF0C\u5B9E\u73B0\u4ECEIngress\u5230\u670D\u52A1\u7F51\u683C\u7684\u5168\u65B9\u4F4D\u6D41\u91CF\u7BA1\u7406\uFF0C\u540C\u65F6\u5185\u7F6EWAF\u529F\u80FD\u4EE5\u52A0\u5F3A\u5B89\u5168\u6027\uFF0C\u51CF\u5C11\u8BF7\u6C42\u94FE\u8DEF\u7684\u590D\u6742\u5EA6\u548C\u54CD\u5E94\u65F6\u95F4\uFF08RT\uFF09\u3002</p>
</li>
<li>
<p><strong>\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u5B9E\u8DF5</strong>\uFF1AHigress\u8D77\u6E90\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684\u5B9E\u6218\u9700\u6C42\uFF0C\u6210\u529F\u652F\u6301\u4E86\u5305\u62EC\u53CC11\u5728\u5185\u7684\u5927\u578B\u4FC3\u9500\u6D3B\u52A8\uFF0C\u5C55\u793A\u4E86\u5176\u5728\u5927\u89C4\u6A21\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u7A33\u5B9A\u6027\u548C\u6548\u80FD\uFF0C\u8FDB\u4E00\u6B65\u9A8C\u8BC1\u4E86\u5176\u8BBE\u8BA1\u7406\u5FF5\u7684\u6B63\u786E\u6027\u3002</p>
</li>
</ol>
<h3 id="\u5177\u4F53\u6B65\u9AA4\u57FA\u4E8E\u5206\u6790\u867D\u7136\u77E5\u8BC6\u4E2D\u672A\u76F4\u63A5\u7ED9\u51FA\u6B65\u9AA4\u4F46\u53EF\u63A8\u5BFC\u51FA\u903B\u8F91\u6B65\u9AA4">\u5177\u4F53\u6B65\u9AA4\uFF08\u57FA\u4E8E\u5206\u6790\uFF0C\u867D\u7136\u77E5\u8BC6\u4E2D\u672A\u76F4\u63A5\u7ED9\u51FA\u6B65\u9AA4\uFF0C\u4F46\u53EF\u63A8\u5BFC\u51FA\u903B\u8F91\u6B65\u9AA4\uFF09</h3>
<ol>
<li>
<p><strong>\u8BC4\u4F30\u73B0\u6709\u67B6\u6784</strong>\uFF1A\u7406\u89E3\u5F53\u524D\u7CFB\u7EDF\u7684\u6D41\u91CF\u7BA1\u7406\u9700\u6C42\uFF0C\u5305\u62EC\u5357\u5317\u5411\u548C\u4E1C\u897F\u5411\u6D41\u91CF\u7684\u7279\u6027\u3001\u5B89\u5168\u8981\u6C42\u4EE5\u53CA\u662F\u5426\u5DF2\u4F7F\u7528Kubernetes\u4F5C\u4E3A\u57FA\u7840\u67B6\u6784\u5E73\u53F0\u3002</p>
</li>
<li>
<p><strong>\u9009\u62E9Higress\u4F5C\u4E3A\u89E3\u51B3\u65B9\u6848</strong>\uFF1A\u9274\u4E8EHigress\u7684\u9AD8\u5EA6\u96C6\u6210\u7279\u6027\u548C\u5BF9\u4E91\u539F\u751F\u751F\u6001\u7684\u652F\u6301\uFF0C\u51B3\u5B9A\u91C7\u7528Higress\u66FF\u6362\u6216\u5347\u7EA7\u73B0\u6709\u7684\u7F51\u5173\u67B6\u6784\u3002</p>
</li>
<li>
<p><strong>\u90E8\u7F72\u4E0E\u914D\u7F6EHigress</strong>\uFF1A\u53C2\u8003Higress\u7684\u5B98\u65B9\u6587\u6863\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u90E8\u7F72Higress\u5230Kubernetes\u96C6\u7FA4\u4E2D\uFF0C\u5E76\u6839\u636E\u5B9E\u9645\u9700\u6C42\u914D\u7F6EEnvoy\u548CIstio\u7EC4\u4EF6\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8DEF\u7531\u89C4\u5219\u3001\u5B89\u5168\u7B56\u7565\uFF08\u5982WAF\u914D\u7F6E\uFF09\u548C\u670D\u52A1\u53D1\u73B0\u673A\u5236\u3002</p>
</li>
<li>
<p><strong>\u8FC1\u79FB\u4E0E\u6D4B\u8BD5</strong>\uFF1A\u6839\u636E\u4E1A\u52A1\u7684\u5B9E\u9645\u60C5\u51B5\uFF0C\u5236\u5B9A\u8FC1\u79FB\u8BA1\u5212\uFF0C\u9010\u6B65\u5C06\u6D41\u91CF\u4ECE\u65E7\u7F51\u5173\u8F6C\u79FB\u5230Higress\u4E0A\uFF0C\u5E76\u8FDB\u884C\u5168\u9762\u7684\u6D4B\u8BD5\u4EE5\u786E\u4FDD\u529F\u80FD\u5B8C\u5907\u6027\u548C\u6027\u80FD\u6307\u6807\u8FBE\u6807\u3002</p>
</li>
<li>
<p><strong>\u76D1\u63A7\u4E0E\u4F18\u5316</strong>\uFF1A\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u5229\u7528Higress\u53CAKubernetes\u7684\u76D1\u63A7\u5DE5\u5177\u6301\u7EED\u76D1\u63A7\u7F51\u5173\u6027\u80FD\u548C\u7A33\u5B9A\u6027\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u914D\u7F6E\uFF0C\u4E0D\u65AD\u4F18\u5316\u4EE5\u8FBE\u5230\u6700\u4F73\u6548\u679C\u3002</p>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u57FA\u4E8EHigress\u7684\u6838\u5FC3\u4EF7\u503C\u548C\u8BBE\u8BA1\u76EE\u6807\uFF0C\u65E8\u5728\u5E2E\u52A9\u4F01\u4E1A\u9AD8\u6548\u3001\u5B89\u5168\u5730\u8FC7\u6E21\u5230\u4E00\u4E2A\u66F4\u52A0\u73B0\u4EE3\u5316\u3001\u96C6\u6210\u5316\u7684\u4E91\u539F\u751F\u7F51\u5173\u67B6\u6784\u3002\u901A\u8FC7\u8FD9\u4E00\u8FC7\u7A0B\uFF0C\u4E0D\u4EC5\u80FD\u591F\u7B80\u5316\u7F51\u5173\u7684\u8FD0\u7EF4\u5DE5\u4F5C\uFF0C\u8FD8\u80FD\u63D0\u5347\u6574\u4F53\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u548C\u6027\u80FD\uFF0C\u66F4\u597D\u5730\u9002\u5E94\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u52A8\u6001\u53D8\u5316\u548C\u590D\u6742\u9700\u6C42\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress\u662F\u4EC0\u4E48?</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16942" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16937",title:"\u4EE5ingress \u548C higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u662F\u4EC0\u4E48\uFF1F",date:"2024-09-11",category:"expertConsultation",description:"Higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u662F\u4E00\u79CD\u9AD8\u5EA6\u96C6\u6210\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u7ED3\u5408\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u4EE5\u53CA\u5B89\u5168\u7F51\u5173\u7684\u529F\u80FD\u4E8E\u4E00\u4F53\u3002\u5728\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u7279\u522B\u662FKubernetes\uFF08K8s\uFF09\u751F\u6001\u7CFB\u7EDF\u4E2D\uFF0C\u7F51\u5173\u7684\u4F5C\u7528\u5C24\u4E3A\u91CD\u8981\uFF0C\u5B83\u4EEC\u8D1F\u8D23\u5904\u7406\u8FDB\u5165\u548C\u79BB\u5F00\u96C6\u7FA4\u7684\u6D41\u91CF\u3002Higress\u6B63\u662F\u4E3A\u4E86\u9002\u5E94\u8FD9\u79CD\u9700\u6C42\u800C\u8BBE\u8BA1\uFF0C\u5B83\u9009\u62E9Envoy\u4F5C\u4E3A\u5176\u6838\u5FC3\u4EE3\u7406\uFF0C"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16937.md",o=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u4EE5ingress \u548C higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u662F\u4EC0\u4E48\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u662F\u4E00\u79CD\u9AD8\u5EA6\u96C6\u6210\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u7ED3\u5408\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u4EE5\u53CA\u5B89\u5168\u7F51\u5173\u7684\u529F\u80FD\u4E8E\u4E00\u4F53\u3002\u5728\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u7279\u522B\u662FKubernetes\uFF08K8s\uFF09\u751F\u6001\u7CFB\u7EDF\u4E2D\uFF0C\u7F51\u5173\u7684\u4F5C\u7528\u5C24\u4E3A\u91CD\u8981\uFF0C\u5B83\u4EEC\u8D1F\u8D23\u5904\u7406\u8FDB\u5165\u548C\u79BB\u5F00\u96C6\u7FA4\u7684\u6D41\u91CF\u3002Higress\u6B63\u662F\u4E3A\u4E86\u9002\u5E94\u8FD9\u79CD\u9700\u6C42\u800C\u8BBE\u8BA1\uFF0C\u5B83\u9009\u62E9Envoy\u4F5C\u4E3A\u5176\u6838\u5FC3\u4EE3\u7406\uFF0C\u5E76\u7ED3\u5408Istio\u6765\u63D0\u4F9B\u670D\u52A1\u7F51\u683C\u80FD\u529B\uFF0C\u4EE5\u6B64\u6765\u6EE1\u8DB3\u5357\u5317\u5411\uFF08\u516C\u7F51\u5230\u96C6\u7FA4\u5185\u90E8\uFF09\u548C\u4E1C\u897F\u5411\uFF08\u96C6\u7FA4\u5185\u90E8\u670D\u52A1\u95F4\uFF09\u7684\u6D41\u91CF\u7BA1\u7406\u4E0E\u5B89\u5168\u9700\u6C42\u3002

### \u539F\u56E0\u5206\u6790\uFF08\u4F9D\u6258\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF09

1. **\u4F20\u7EDF\u7F51\u5173\u5206\u7C7B\u4E0E\u5C40\u9650**\uFF1A\u4F20\u7EDF\u4E0A\uFF0C\u7F51\u5173\u88AB\u5206\u4E3A\u6D41\u91CF\u7F51\u5173\u548C\u4E1A\u52A1\u7F51\u5173\uFF08\u6216\u5FAE\u670D\u52A1\u7F51\u5173\uFF09\uFF0C\u5206\u522B\u5904\u7406\u4E0D\u540C\u5C42\u9762\u7684\u95EE\u9898\uFF0C\u8FD9\u5BFC\u81F4\u4E86\u67B6\u6784\u4E0A\u7684\u590D\u6742\u6027\u548C\u8FD0\u7EF4\u6210\u672C\u7684\u589E\u52A0\u3002
   
2. **\u4E91\u539F\u751F\u8D8B\u52BF**\uFF1A\u968F\u7740Kubernetes\u7684\u666E\u53CA\uFF0CIngress\u8D44\u6E90\u6210\u4E3A\u4E86\u5B9A\u4E49\u4E91\u539F\u751F\u5E94\u7528\u5165\u53E3\u7684\u6807\u51C6\u65B9\u5F0F\uFF0C\u4F46\u540C\u65F6\u4E5F\u66B4\u9732\u4E86\u539F\u6709Ingress\u6807\u51C6\u7684\u4E0D\u8DB3\uFF0C\u5982\u8DEF\u7531\u8868\u8FBE\u80FD\u529B\u6709\u9650\u3002\u793E\u533A\u6B63\u63A8\u52A8Gateway API\u4F5C\u4E3A\u66F4\u5148\u8FDB\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u800CEnvoy\u56E0\u5176\u9AD8\u6027\u80FD\u548C\u7075\u6D3B\u6027\uFF0C\u5728\u4E91\u539F\u751F\u9886\u57DF\u589E\u957F\u8FC5\u901F\uFF0C\u6210\u4E3A\u6784\u5EFA\u73B0\u4EE3\u7F51\u5173\u7684\u7406\u60F3\u9009\u62E9\u3002

3. **Higress\u7684\u8BBE\u8BA1\u7406\u5FF5**\uFF1A\u9274\u4E8E\u4E0A\u8FF0\u80CC\u666F\uFF0CHigress\u65E8\u5728\u901A\u8FC7\u6574\u5408Envoy\u4E0EIstio\uFF0C\u5B9E\u73B0\u4ECEIngress\u5230\u670D\u52A1\u7F51\u683C\u7684\u5168\u65B9\u4F4D\u6D41\u91CF\u7BA1\u7406\uFF0C\u540C\u65F6\u5185\u7F6EWAF\u529F\u80FD\u4EE5\u52A0\u5F3A\u5B89\u5168\u6027\uFF0C\u51CF\u5C11\u8BF7\u6C42\u94FE\u8DEF\u7684\u590D\u6742\u5EA6\u548C\u54CD\u5E94\u65F6\u95F4\uFF08RT\uFF09\u3002

4. **\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u5B9E\u8DF5**\uFF1AHigress\u8D77\u6E90\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684\u5B9E\u6218\u9700\u6C42\uFF0C\u6210\u529F\u652F\u6301\u4E86\u5305\u62EC\u53CC11\u5728\u5185\u7684\u5927\u578B\u4FC3\u9500\u6D3B\u52A8\uFF0C\u5C55\u793A\u4E86\u5176\u5728\u5927\u89C4\u6A21\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u7A33\u5B9A\u6027\u548C\u6548\u80FD\uFF0C\u8FDB\u4E00\u6B65\u9A8C\u8BC1\u4E86\u5176\u8BBE\u8BA1\u7406\u5FF5\u7684\u6B63\u786E\u6027\u3002

### \u5177\u4F53\u6B65\u9AA4\uFF08\u57FA\u4E8E\u5206\u6790\uFF0C\u867D\u7136\u77E5\u8BC6\u4E2D\u672A\u76F4\u63A5\u7ED9\u51FA\u6B65\u9AA4\uFF0C\u4F46\u53EF\u63A8\u5BFC\u51FA\u903B\u8F91\u6B65\u9AA4\uFF09

1. **\u8BC4\u4F30\u73B0\u6709\u67B6\u6784**\uFF1A\u7406\u89E3\u5F53\u524D\u7CFB\u7EDF\u7684\u6D41\u91CF\u7BA1\u7406\u9700\u6C42\uFF0C\u5305\u62EC\u5357\u5317\u5411\u548C\u4E1C\u897F\u5411\u6D41\u91CF\u7684\u7279\u6027\u3001\u5B89\u5168\u8981\u6C42\u4EE5\u53CA\u662F\u5426\u5DF2\u4F7F\u7528Kubernetes\u4F5C\u4E3A\u57FA\u7840\u67B6\u6784\u5E73\u53F0\u3002

2. **\u9009\u62E9Higress\u4F5C\u4E3A\u89E3\u51B3\u65B9\u6848**\uFF1A\u9274\u4E8EHigress\u7684\u9AD8\u5EA6\u96C6\u6210\u7279\u6027\u548C\u5BF9\u4E91\u539F\u751F\u751F\u6001\u7684\u652F\u6301\uFF0C\u51B3\u5B9A\u91C7\u7528Higress\u66FF\u6362\u6216\u5347\u7EA7\u73B0\u6709\u7684\u7F51\u5173\u67B6\u6784\u3002

3. **\u90E8\u7F72\u4E0E\u914D\u7F6EHigress**\uFF1A\u53C2\u8003Higress\u7684\u5B98\u65B9\u6587\u6863\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u90E8\u7F72Higress\u5230Kubernetes\u96C6\u7FA4\u4E2D\uFF0C\u5E76\u6839\u636E\u5B9E\u9645\u9700\u6C42\u914D\u7F6EEnvoy\u548CIstio\u7EC4\u4EF6\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8DEF\u7531\u89C4\u5219\u3001\u5B89\u5168\u7B56\u7565\uFF08\u5982WAF\u914D\u7F6E\uFF09\u548C\u670D\u52A1\u53D1\u73B0\u673A\u5236\u3002

4. **\u8FC1\u79FB\u4E0E\u6D4B\u8BD5**\uFF1A\u6839\u636E\u4E1A\u52A1\u7684\u5B9E\u9645\u60C5\u51B5\uFF0C\u5236\u5B9A\u8FC1\u79FB\u8BA1\u5212\uFF0C\u9010\u6B65\u5C06\u6D41\u91CF\u4ECE\u65E7\u7F51\u5173\u8F6C\u79FB\u5230Higress\u4E0A\uFF0C\u5E76\u8FDB\u884C\u5168\u9762\u7684\u6D4B\u8BD5\u4EE5\u786E\u4FDD\u529F\u80FD\u5B8C\u5907\u6027\u548C\u6027\u80FD\u6307\u6807\u8FBE\u6807\u3002

5. **\u76D1\u63A7\u4E0E\u4F18\u5316**\uFF1A\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u5229\u7528Higress\u53CAKubernetes\u7684\u76D1\u63A7\u5DE5\u5177\u6301\u7EED\u76D1\u63A7\u7F51\u5173\u6027\u80FD\u548C\u7A33\u5B9A\u6027\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u914D\u7F6E\uFF0C\u4E0D\u65AD\u4F18\u5316\u4EE5\u8FBE\u5230\u6700\u4F73\u6548\u679C\u3002

### \u89E3\u91CA

\u4EE5\u4E0A\u6B65\u9AA4\u57FA\u4E8EHigress\u7684\u6838\u5FC3\u4EF7\u503C\u548C\u8BBE\u8BA1\u76EE\u6807\uFF0C\u65E8\u5728\u5E2E\u52A9\u4F01\u4E1A\u9AD8\u6548\u3001\u5B89\u5168\u5730\u8FC7\u6E21\u5230\u4E00\u4E2A\u66F4\u52A0\u73B0\u4EE3\u5316\u3001\u96C6\u6210\u5316\u7684\u4E91\u539F\u751F\u7F51\u5173\u67B6\u6784\u3002\u901A\u8FC7\u8FD9\u4E00\u8FC7\u7A0B\uFF0C\u4E0D\u4EC5\u80FD\u591F\u7B80\u5316\u7F51\u5173\u7684\u8FD0\u7EF4\u5DE5\u4F5C\uFF0C\u8FD8\u80FD\u63D0\u5347\u6574\u4F53\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u548C\u6027\u80FD\uFF0C\u66F4\u597D\u5730\u9002\u5E94\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u52A8\u6001\u53D8\u5316\u548C\u590D\u6742\u9700\u6C42\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress\u662F\u4EC0\u4E48? 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16942)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},g=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u539F\u56E0\u5206\u6790\u4F9D\u6258\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6",text:"\u539F\u56E0\u5206\u6790\uFF08\u4F9D\u6258\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF09"},{depth:3,slug:"\u5177\u4F53\u6B65\u9AA4\u57FA\u4E8E\u5206\u6790\u867D\u7136\u77E5\u8BC6\u4E2D\u672A\u76F4\u63A5\u7ED9\u51FA\u6B65\u9AA4\u4F46\u53EF\u63A8\u5BFC\u51FA\u903B\u8F91\u6B65\u9AA4",text:"\u5177\u4F53\u6B65\u9AA4\uFF08\u57FA\u4E8E\u5206\u6790\uFF0C\u867D\u7136\u77E5\u8BC6\u4E2D\u672A\u76F4\u63A5\u7ED9\u51FA\u6B65\u9AA4\uFF0C\u4F46\u53EF\u63A8\u5BFC\u51FA\u903B\u8F91\u6B65\u9AA4\uFF09"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=a((y,b,I)=>{const{layout:_,...n}=t;return n.file=r,n.url=o,u`${h()}${c(s)}`})});export{e as Content,d as __tla,i as compiledContent,e as default,r as file,t as frontmatter,g as getHeadings,l as rawContent,o as url};
