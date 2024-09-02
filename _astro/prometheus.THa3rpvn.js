import{c as o,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as h,m as d,u as g,__tla as E}from"./constant.Mar1MprU.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let e,p,a,t,l,i,n,u=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u4F7F\u7528-higress-console-\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6">\u4F7F\u7528 Higress Console \u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6</h2>
<p>Higress Console \u5185\u7F6E\u4E86\u4E00\u5957\u57FA\u4E8E Prometheus + Grafana \u7684\u76D1\u63A7\u5957\u4EF6\uFF0C\u4F46\u9ED8\u8BA4\u4E0D\u4F1A\u5B89\u88C5\u3002\u5728\u4F7F\u7528 Helm \u5B89\u88C5 Higress \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u547D\u4EE4\u884C\u4E2D\u6DFB\u52A0 <code dir="auto">--set global.o11y.enabled=true</code> \u53C2\u6570\u542F\u7528\u8FD9\u4E00\u76D1\u63A7\u5957\u4EF6\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF1A\u5728\u5B89\u88C5\u5230\u6807\u51C6 K8s \u96C6\u7FA4\uFF08\u5373\u672A\u6307\u5B9A <code dir="auto">global.local=true</code> \u53C2\u6570\uFF09\u65F6\uFF0C\u76D1\u63A7\u7CFB\u7EDF\u6240\u914D\u7F6E\u7684 PersistentVolumeClaim \u9ED8\u8BA4\u4F7F\u7528 <code dir="auto">ReadWriteMany</code> \u8BBF\u95EE\u6A21\u5F0F\u3002\u5982\u679C\u76EE\u6807 K8s \u96C6\u7FA4\u4E0D\u652F\u6301\u8FD9\u4E00\u8BBF\u95EE\u6A21\u5F0F\uFF0C\u5219\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u989D\u5916\u6DFB\u52A0 <code dir="auto">--set global.pvc.rwxSupported=false</code> \u53C2\u6570\u6765\u5C06\u8BBF\u95EE\u6A21\u5F0F\u5207\u6362\u4E3A <code dir="auto">ReadyWriteOnce</code>\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.pvc.rwxSupported=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true --set global.pvc.rwxSupported=false"><div></div></button></div></figure></div>
<p>\u5B8C\u6210\u5B89\u88C5\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE Higress Console\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u5BFC\u822A\u680F\u201C\u76D1\u63A7\u9762\u677F\u201D\uFF0C\u9875\u9762\u53F3\u4FA7\u5C31\u4F1A\u5C55\u793A\u51FA\u7CFB\u7EDF\u5185\u7F6E\u7684\u76D1\u63A7\u9762\u677F\u3002</p>
<p><img src="/img/user/prometheus/zh-cn/builtin.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6">\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6</h2>
<p>Higress \u7684\u6570\u636E\u9762\u548C\u63A7\u5236\u9762\u7EC4\u4EF6\u5747\u901A\u8FC7 API \u5BF9\u5916\u66B4\u9732\u4E86\u4E00\u7CFB\u5217\u7684 Metrics \u6307\u6807\u3002\u53EA\u9700\u8981\u4E3A Prometheus \u6DFB\u52A0\u76F8\u5E94\u6307\u6807\u91C7\u96C6\u914D\u7F6E\uFF0C\u5E76\u5728 Grafana \u4E2D\u914D\u7F6E\u76D1\u63A7\u9762\u677F\u5C31\u53EF\u4EE5\u76D1\u63A7 Higress \u7684\u5185\u90E8\u8FD0\u884C\u60C5\u51B5\u4E86\u3002</p>
<p>\u5728\u6B63\u5F0F\u5F00\u59CB\u914D\u7F6E\u4E4B\u524D\uFF0C\u8BF7\u5148\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 Higress Console\uFF0C\u5E76\u5728\u5DE6\u4FA7\u5BFC\u822A\u680F\u5207\u6362\u81F3\u201C\u76D1\u63A7\u9762\u677F\u201D\u9875\u9762\u3002\u5728\u672A\u5B89\u88C5\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6\u65F6\uFF0C\u9875\u9762\u4E0A\u5C31\u4F1A\u5C55\u793A\u51FA\u5916\u7F6E\u76D1\u63A7\u9762\u677F URL \u914D\u7F6E\u9875\u9762\u548C\u5916\u90E8\u7CFB\u7EDF\u7684\u914D\u7F6E\u6CD5\u3002</p>
<p><img src="/img/user/prometheus/zh-cn/external-before.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u6309\u7167\u754C\u9762\u4E0B\u65B9\u7ED9\u51FA\u7684\u65B9\u6CD5\u66F4\u65B0 Prometheus \u548C Grafana \u4E2D\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u628A  Grafana \u770B\u677F\u7684\u9875\u9762 URL \u586B\u5165\u4E0A\u65B9\u8F93\u5165\u6846\u4E2D\u5E76\u4FDD\u5B58\u3002\u968F\u540E\u9875\u9762\u4F1A\u81EA\u52A8\u5237\u65B0\uFF0C\u53F3\u4FA7\u5C31\u4F1A\u51FA\u73B0\u914D\u7F6E\u597D\u7684\u5916\u7F6E\u76D1\u63A7\u9762\u677F\u3002</p>
<p><img src="/img/user/prometheus/zh-cn/external-after.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u5982\u679C\u9700\u8981\u66F4\u65B0\u76D1\u63A7\u9762\u677F\u7684 URL\uFF0C\u5219\u53EF\u70B9\u51FB\u9875\u9762\u5DE6\u4E0A\u89D2\u7684\u201C\u91CD\u65B0\u914D\u7F6E\u201D\u6309\u94AE\u3002</p>`,t={title:"\u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B",keywords:["Higress","Prometheus"],description:"\u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/prometheus.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/prometheus.md",n=void 0,i=function(){return`
# \u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B

## \u4F7F\u7528 Higress Console \u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6

Higress Console \u5185\u7F6E\u4E86\u4E00\u5957\u57FA\u4E8E Prometheus + Grafana \u7684\u76D1\u63A7\u5957\u4EF6\uFF0C\u4F46\u9ED8\u8BA4\u4E0D\u4F1A\u5B89\u88C5\u3002\u5728\u4F7F\u7528 Helm \u5B89\u88C5 Higress \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u547D\u4EE4\u884C\u4E2D\u6DFB\u52A0 \`--set global.o11y.enabled=true\` \u53C2\u6570\u542F\u7528\u8FD9\u4E00\u76D1\u63A7\u5957\u4EF6\u3002

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true
\`\`\`

\u6CE8\u610F\uFF1A\u5728\u5B89\u88C5\u5230\u6807\u51C6 K8s \u96C6\u7FA4\uFF08\u5373\u672A\u6307\u5B9A \`global.local=true\` \u53C2\u6570\uFF09\u65F6\uFF0C\u76D1\u63A7\u7CFB\u7EDF\u6240\u914D\u7F6E\u7684 PersistentVolumeClaim \u9ED8\u8BA4\u4F7F\u7528 \`ReadWriteMany\` \u8BBF\u95EE\u6A21\u5F0F\u3002\u5982\u679C\u76EE\u6807 K8s \u96C6\u7FA4\u4E0D\u652F\u6301\u8FD9\u4E00\u8BBF\u95EE\u6A21\u5F0F\uFF0C\u5219\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u989D\u5916\u6DFB\u52A0 \`--set global.pvc.rwxSupported=false\` \u53C2\u6570\u6765\u5C06\u8BBF\u95EE\u6A21\u5F0F\u5207\u6362\u4E3A \`ReadyWriteOnce\`\u3002

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true --set global.pvc.rwxSupported=false
\`\`\`

\u5B8C\u6210\u5B89\u88C5\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE Higress Console\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u5BFC\u822A\u680F\u201C\u76D1\u63A7\u9762\u677F\u201D\uFF0C\u9875\u9762\u53F3\u4FA7\u5C31\u4F1A\u5C55\u793A\u51FA\u7CFB\u7EDF\u5185\u7F6E\u7684\u76D1\u63A7\u9762\u677F\u3002

![image](/img/user/prometheus/zh-cn/builtin.png)

## \u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6

Higress \u7684\u6570\u636E\u9762\u548C\u63A7\u5236\u9762\u7EC4\u4EF6\u5747\u901A\u8FC7 API \u5BF9\u5916\u66B4\u9732\u4E86\u4E00\u7CFB\u5217\u7684 Metrics \u6307\u6807\u3002\u53EA\u9700\u8981\u4E3A Prometheus \u6DFB\u52A0\u76F8\u5E94\u6307\u6807\u91C7\u96C6\u914D\u7F6E\uFF0C\u5E76\u5728 Grafana \u4E2D\u914D\u7F6E\u76D1\u63A7\u9762\u677F\u5C31\u53EF\u4EE5\u76D1\u63A7 Higress \u7684\u5185\u90E8\u8FD0\u884C\u60C5\u51B5\u4E86\u3002

\u5728\u6B63\u5F0F\u5F00\u59CB\u914D\u7F6E\u4E4B\u524D\uFF0C\u8BF7\u5148\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 Higress Console\uFF0C\u5E76\u5728\u5DE6\u4FA7\u5BFC\u822A\u680F\u5207\u6362\u81F3\u201C\u76D1\u63A7\u9762\u677F\u201D\u9875\u9762\u3002\u5728\u672A\u5B89\u88C5\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6\u65F6\uFF0C\u9875\u9762\u4E0A\u5C31\u4F1A\u5C55\u793A\u51FA\u5916\u7F6E\u76D1\u63A7\u9762\u677F URL \u914D\u7F6E\u9875\u9762\u548C\u5916\u90E8\u7CFB\u7EDF\u7684\u914D\u7F6E\u6CD5\u3002

![image](/img/user/prometheus/zh-cn/external-before.png)

\u6309\u7167\u754C\u9762\u4E0B\u65B9\u7ED9\u51FA\u7684\u65B9\u6CD5\u66F4\u65B0 Prometheus \u548C Grafana \u4E2D\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u628A  Grafana \u770B\u677F\u7684\u9875\u9762 URL \u586B\u5165\u4E0A\u65B9\u8F93\u5165\u6846\u4E2D\u5E76\u4FDD\u5B58\u3002\u968F\u540E\u9875\u9762\u4F1A\u81EA\u52A8\u5237\u65B0\uFF0C\u53F3\u4FA7\u5C31\u4F1A\u51FA\u73B0\u914D\u7F6E\u597D\u7684\u5916\u7F6E\u76D1\u63A7\u9762\u677F\u3002

![image](/img/user/prometheus/zh-cn/external-after.png)

\u5982\u679C\u9700\u8981\u66F4\u65B0\u76D1\u63A7\u9762\u677F\u7684 URL\uFF0C\u5219\u53EF\u70B9\u51FB\u9875\u9762\u5DE6\u4E0A\u89D2\u7684\u201C\u91CD\u65B0\u914D\u7F6E\u201D\u6309\u94AE\u3002`},p=function(){return s},l=function(){return[{depth:2,slug:"\u4F7F\u7528-higress-console-\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6",text:"\u4F7F\u7528 Higress Console \u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6"},{depth:2,slug:"\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6",text:"\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6"}]},e=o((m,F,b)=>{const{layout:f,...r}=t;return r.file=a,r.url=n,h`${d()}${g(s)}`})});export{e as Content,u as __tla,p as compiledContent,e as default,a as file,t as frontmatter,l as getHeadings,i as rawContent,n as url};
