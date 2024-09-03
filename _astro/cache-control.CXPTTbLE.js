import{c as p,__tla as r}from"./astro-component.cI6d52vQ.js";import{r as l,m as g,u,__tla as h}from"./constant.aoPs5tBL.js";import{__tla as x}from"./astro/assets-service.Da9pL5MS.js";let e,d,s,a,i,c,o,v=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">cache-control</code> \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL \u6587\u4EF6\u540E\u7F00\u6765\u4E3A\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u90E8\u6DFB\u52A0 <code dir="auto">Expires</code> \u548C <code dir="auto">Cache-Control</code> \u5934\u90E8\uFF0C\u4ECE\u800C\u65B9\u4FBF\u6D4F\u89C8\u5668\u5BF9\u7279\u5B9A\u540E\u7F00\u7684\u6587\u4EF6\u8FDB\u884C\u7F13\u5B58\uFF0C\u4F8B\u5982 <code dir="auto">jpg</code>\u3001<code dir="auto">png</code> \u7B49\u56FE\u7247\u6587\u4EF6\u3002</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>suffix</td><td>string</td><td>\u9009\u586B\uFF0C\u8868\u793A\u5339\u914D\u7684\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u4F8B\u5982 <code dir="auto">jpg</code>\u3001<code dir="auto">png</code> \u7B49\u3002<br>\u5982\u679C\u9700\u8981\u5339\u914D\u591A\u79CD\u540E\u7F00\uFF0C\u9700\u8981\u7528 <code dir="auto">|</code> \u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982 <code dir="auto">png|jpg</code>\u3002<br>\u5982\u679C\u4E0D\u586B\u5199\uFF0C\u8868\u793A\u5339\u914D\u6240\u6709\u540E\u7F00</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u5339\u914D\u7684\u8BF7\u6C42\u6587\u4EF6\u540E\u7F00</td></tr><tr><td>expires</td><td>string</td><td>\u5FC5\u586B\uFF0C\u8868\u793A\u7F13\u5B58\u7684\u6700\u957F\u65F6\u95F4\u3002<br>\u5F53\u586B\u5165\u7684\u5B57\u7B26\u4E32\u4E3A\u6570\u5B57\u65F6\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u4F8B\u5982\u9700\u8981\u7F13\u5B58 1 \u5C0F\u65F6\uFF0C\u9700\u586B\u5199 3600\u3002<br>\u53E6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u586B\u5199 epoch \u6216 max<br>\uFF0C\u4E0E nginx \u4E2D\u8BED\u4E49\u76F8\u540C\u3002</td><td>-</td><td>\u914D\u7F6E\u7F13\u5B58\u7684\u6700\u5927\u65F6\u95F4</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<ol>
<li>\u7F13\u5B58\u540E\u7F00\u4E3A <code dir="auto">jpg</code>, <code dir="auto">png</code>, <code dir="auto">jpeg</code> \u7684\u6587\u4EF6\uFF0C\u7F13\u5B58\u65F6\u95F4\u4E3A\u4E00\u5C0F\u65F6\u3002</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">suffix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jpg|png|jpeg</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expires</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3600</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="suffix: jpg|png|jpeg\x7Fexpires: 3600"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5728\u8BBF\u95EE\u65F6\uFF0C\u5C06\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 <code dir="auto">Expires</code> \u548C <code dir="auto">Cache-Control</code> \u5B57\u6BB5\uFF0C\u4E14\u8FC7\u671F\u65F6\u95F4\u4E3A 1 \u5C0F\u65F6\u540E\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/test.png</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/test.jpg</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com/test.png\x7Fcurl http://exmaple.com/test.jpg"><div></div></button></div></figure></div>
<ol start="2">
<li>\u7F13\u5B58\u6240\u6709\u6587\u4EF6\uFF0C\u4E14\u7F13\u5B58\u81F3\u6700\u5927\u65F6\u95F4 <code dir="auto">\u201CThu, 31 Dec 2037 23:55:55 GMT\u201D</code></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">expires</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">max</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="expires: max"><div></div></button></div></figure></div>`,a={title:"\u7F13\u5B58\u63A7\u5236",keywords:["higress","transformer"],description:"\u7F13\u5B58\u63A7\u5236\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL \u6587\u4EF6\u540E\u7F00\u6765\u4E3A\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u90E8\u6DFB\u52A0 `Expires` \u548C `Cache-Control` \u5934\u90E8\uFF0C\u4ECE\u800C\u65B9\u4FBF\u6D4F\u89C8\u5668\u5BF9\u7279\u5B9A\u540E\u7F00\u7684\u6587\u4EF6\u8FDB\u884C\u7F13\u5B58\uFF0C\u4F8B\u5982 `jpg`\u3001`png` \u7B49\u56FE\u7247\u6587\u4EF6\u3002"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/cache-control.md",o=void 0,c=function(){return"\n## \u529F\u80FD\u8BF4\u660E\n`cache-control` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL \u6587\u4EF6\u540E\u7F00\u6765\u4E3A\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u90E8\u6DFB\u52A0 `Expires` \u548C `Cache-Control` \u5934\u90E8\uFF0C\u4ECE\u800C\u65B9\u4FBF\u6D4F\u89C8\u5668\u5BF9\u7279\u5B9A\u540E\u7F00\u7684\u6587\u4EF6\u8FDB\u884C\u7F13\u5B58\uFF0C\u4F8B\u5982 `jpg`\u3001`png` \u7B49\u56FE\u7247\u6587\u4EF6\u3002\n\n## \u914D\u7F6E\u5B57\u6BB5\n\n| \u540D\u79F0      | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42                                                                                                  | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                       |\n|---------|--------|-------------------------------------------------------------------------------------------------------|-|--------------------------|\n| suffix  | string | \u9009\u586B\uFF0C\u8868\u793A\u5339\u914D\u7684\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u4F8B\u5982 `jpg`\u3001`png` \u7B49\u3002<br/>\u5982\u679C\u9700\u8981\u5339\u914D\u591A\u79CD\u540E\u7F00\uFF0C\u9700\u8981\u7528 `\\|` \u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982 `png\\|jpg`\u3002<br/>\u5982\u679C\u4E0D\u586B\u5199\uFF0C\u8868\u793A\u5339\u914D\u6240\u6709\u540E\u7F00        |   -  | \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u7684\u8BF7\u6C42\u6587\u4EF6\u540E\u7F00            |\n| expires | string | \u5FC5\u586B\uFF0C\u8868\u793A\u7F13\u5B58\u7684\u6700\u957F\u65F6\u95F4\u3002<br/>\u5F53\u586B\u5165\u7684\u5B57\u7B26\u4E32\u4E3A\u6570\u5B57\u65F6\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u4F8B\u5982\u9700\u8981\u7F13\u5B58 1 \u5C0F\u65F6\uFF0C\u9700\u586B\u5199 3600\u3002<br/>\u53E6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u586B\u5199 epoch \u6216 max<br/>\uFF0C\u4E0E nginx \u4E2D\u8BED\u4E49\u76F8\u540C\u3002 | - | \u914D\u7F6E\u7F13\u5B58\u7684\u6700\u5927\u65F6\u95F4                |\n\n## \u914D\u7F6E\u793A\u4F8B\n\n1. \u7F13\u5B58\u540E\u7F00\u4E3A `jpg`, `png`, `jpeg` \u7684\u6587\u4EF6\uFF0C\u7F13\u5B58\u65F6\u95F4\u4E3A\u4E00\u5C0F\u65F6\u3002\n```yaml\nsuffix: jpg|png|jpeg\nexpires: 3600\n```\n\n\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5728\u8BBF\u95EE\u65F6\uFF0C\u5C06\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 `Expires` \u548C `Cache-Control` \u5B57\u6BB5\uFF0C\u4E14\u8FC7\u671F\u65F6\u95F4\u4E3A 1 \u5C0F\u65F6\u540E\u3002\n\n```bash\ncurl http://example.com/test.png\ncurl http://exmaple.com/test.jpg\n```\n\n2. \u7F13\u5B58\u6240\u6709\u6587\u4EF6\uFF0C\u4E14\u7F13\u5B58\u81F3\u6700\u5927\u65F6\u95F4 `\u201CThu, 31 Dec 2037 23:55:55 GMT\u201D`\n```yaml\nexpires: max \n```\n"},d=function(){return t},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"}]},e=p((f,m,y)=>{const{layout:b,...n}=a;return n.file=s,n.url=o,l`${g()}${u(t)}`})});export{e as Content,v as __tla,d as compiledContent,e as default,s as file,a as frontmatter,i as getHeadings,c as rawContent,o as url};
