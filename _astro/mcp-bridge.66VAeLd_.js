import{c as l,__tla as o}from"./astro-component.CD2fzakh.js";import{r,m as v,u as E,__tla as y}from"./constant.DHuwOiyc.js";import{__tla as u}from"./astro/assets-service.Bk7KqR8o.js";let a,i,e,t,c,p,n,h=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="mcpbridge-\u5B57\u6BB5\u8BF4\u660E">McpBridge \u5B57\u6BB5\u8BF4\u660E</h2>


























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u793A\u4F8B\u503C</th><th>\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td>registries</td><td>RegistryConfig \u6570\u7EC4</td><td>\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u4E0D\u540C\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\u6765\u6E90</td><td>[]</td><td>\u5426</td></tr><tr><td>name</td><td>\u5B57\u7B26\u4E32</td><td>McpBridge \u540D\u79F0</td><td>default</td><td>\u662F\uFF0C\u5F53\u524D\u8BE5\u503C\u53EA\u80FD\u662F default</td></tr></tbody></table>
<h2 id="registryconfig-\u5B57\u6BB5\u8BF4\u660E">RegistryConfig \u5B57\u6BB5\u8BF4\u660E</h2>














































































































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u793A\u4F8B\u503C</th><th>\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td>type</td><td>\u5B57\u7B26\u4E32</td><td>\u670D\u52A1\u53D1\u73B0\u7C7B\u578B\uFF0C\u53EF\u9009\u9879\uFF1Anacos,nacos2,zookeeper,consul,eureka,static,dns</td><td>nacos2</td><td>\u662F</td></tr><tr><td>name</td><td>\u5B57\u7B26\u4E32</td><td>\u81EA\u5B9A\u4E49\u7684\u670D\u52A1\u6765\u6E90\u540D\u79F0</td><td>my-nacos</td><td>\u662F</td></tr><tr><td>domain</td><td>\u5B57\u7B26\u4E32</td><td>\u670D\u52A1\u53D1\u73B0\u5730\u5740\uFF0C\u4E00\u822C\u662F\u6CE8\u518C\u4E2D\u5FC3\u5730\u5740; \u5F53\u7C7B\u578B\u662Fstatic\u6216dns\u65F6\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u7528\u4E8E\u76F4\u63A5\u914D\u7F6E\u540E\u7AEF\u5730\u5740</td><td>192.168.1.2</td><td>\u662F</td></tr><tr><td>port</td><td>\u6574\u6570</td><td>\u6CE8\u518C\u4E2D\u5FC3\u8BBF\u95EE\u7AEF\u53E3</td><td>8848</td><td>\u662F</td></tr><tr><td>zkServicesPath</td><td>\u5B57\u7B26\u4E32\u6570\u7EC4</td><td>\u4F7F\u7528zk\u65F6,\u586B\u5199\u670D\u52A1\u6CE8\u518C\u7684\u6839\u8DEF\u5F84,\u9ED8\u8BA4\u76D1\u542C /dubbo \u548C /services\uFF0C\u524D\u8005\u4E3Adubbo \u670D\u52A1\u9ED8\u8BA4\u6839\u8DEF\u5F84\uFF0C\u540E\u8005\u4E3ASpringCloud\u670D\u52A1\u9ED8\u8BA4\u6839\u8DEF\u5F84</td><td>[\u201C/service-provider\u201D]</td><td>\u5426</td></tr><tr><td>nacosNamespaceId</td><td>\u5B57\u7B26\u4E32</td><td>nacos\u547D\u540D\u7A7A\u95F4id</td><td>d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</td><td>\u5426</td></tr><tr><td>nacosGroups</td><td>\u5B57\u7B26\u4E32\u6570\u7EC4</td><td>nacos\u670D\u52A1\u5206\u7EC4\u5217\u8868</td><td>[\u201CDEFAULT_GROUP\u201D]</td><td>\u5426</td></tr><tr><td>nacosAccessKey</td><td>\u5B57\u7B26\u4E32</td><td>nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684ak\u4FE1\u606F</td><td>xxxx</td><td>\u5426</td></tr><tr><td>nacosSecretKey</td><td>\u5B57\u7B26\u4E32</td><td>nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684sk\u4FE1\u606F</td><td>xxxx</td><td>\u5426</td></tr><tr><td>nacosRefreshInterval</td><td>\u6574\u6570</td><td>nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u5237\u65B0\u95F4\u9694\u7EB3\u79D2\u6570</td><td>30000000000\uFF0830\u79D2\uFF09</td><td>\u5426</td></tr><tr><td>consulDatacenter</td><td>\u5B57\u7B26\u4E32</td><td>consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u6570\u636E\u4E2D\u5FC3\u540D\u79F0</td><td>dc1</td><td>\u5426</td></tr><tr><td>consulServiceTag</td><td>\u5B57\u7B26\u4E32</td><td>consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u6807\u7B7E\u8FC7\u6EE4</td><td>higress</td><td>\u5426</td></tr><tr><td>consulRefreshInterval</td><td>\u6574\u6570</td><td>consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u5237\u65B0\u95F4\u9694\u7EB3\u79D2\u6570</td><td>30000000000\uFF0830\u79D2\uFF09</td><td>\u5426</td></tr><tr><td>authSecretName</td><td>\u5B57\u7B26\u4E32</td><td>\u670D\u52A1\u53D1\u73B0\u8BA4\u8BC1\u4FE1\u606F Secret \u540D\u79F0, \u5177\u4F53\u770B\u4E0B\u9762\u8BF4\u660E</td><td>higress-nacos-auth</td><td>\u5426</td></tr></tbody></table>
<h2 id="authsecretname-\u5B57\u6BB5\u8BF4\u660E">authSecretName \u5B57\u6BB5\u8BF4\u660E</h2>
<p>\u670D\u52A1\u53D1\u73B0\u6765\u6E90\u8BA4\u8BC1\u4FE1\u606F\u4FDD\u5B58\u5728 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\u5BF9\u5E94 Secret \u4E0B \uFF0C\u73B0\u5728\u652F\u6301 nacos \u548C consul \u670D\u52A1\u53D1\u73B0\u3002</p>
<p>nacos \u8BA4\u8BC1\u4FE1\u606F\u5305\u542B\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C consul \u8BA4\u8BC1\u4FE1\u606F\u5305\u542B\u8BA4\u8BC1 token\uFF0C \u5177\u4F53 Secret \u914D\u7F6E\u6837\u4F8B\u5982\u4E0B\uFF1A</p>
<h3 id="nacos-\u8BA4\u8BC1">nacos \u8BA4\u8BC1</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">nacosPassword</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aGlncmVzcw==</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">nacosUsername</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aGlncmVzcw==</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-nacos-auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Opaque</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  nacosPassword: aGlncmVzcw==\x7F  nacosUsername: aGlncmVzcw==\x7Fkind: Secret\x7Fmetadata:\x7F  name: higress-nacos-auth\x7F  namespace: higress-system\x7Ftype: Opaque"><div></div></button></div></figure></div>
<h3 id="consul-\u8BA4\u8BC1">consul \u8BA4\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">consulToken</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-consul-auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Opaque</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy\x7Fkind: Secret\x7Fmetadata:\x7F  name: higress-consul-auth\x7F  namespace: higress-system\x7Ftype: Opaque"><div></div></button></div></figure></div>
<h2 id="\u652F\u6301\u914D\u7F6E\u9759\u6001\u7684\u670D\u52A1\u53D1\u73B0\u65B9\u5F0F">\u652F\u6301\u914D\u7F6E\u9759\u6001\u7684\u670D\u52A1\u53D1\u73B0\u65B9\u5F0F</h2>
<h3 id="\u901A\u8FC7\u56FA\u5B9Aip\u53D1\u73B0\u670D\u52A1">\u901A\u8FC7\u56FA\u5B9AIP\u53D1\u73B0\u670D\u52A1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1.1.1.1:80,2.2.2.2:80"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">test</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: &#x22;1.1.1.1:80,2.2.2.2:80&#x22;\x7F    name: test\x7F    port: 80\x7F    type: static"><div></div></button></div></figure></div>
<h3 id="\u901A\u8FC7dns\u57DF\u540D\u53D1\u73B0\u670D\u52A1">\u901A\u8FC7DNS\u57DF\u540D\u53D1\u73B0\u670D\u52A1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">www.alibaba.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">alibaba</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: www.alibaba.com\x7F    name: alibaba\x7F    port: 80\x7F    type: dns"><div></div></button></div></figure></div>`,t={title:"Mcp Bridge \u914D\u7F6E\u8BF4\u660E",keywords:["discovery"],description:"Higress Mcp Bridge \u914D\u7F6E\u8BF4\u660E\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mcp-bridge.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/mcp-bridge.md",n=void 0,p=function(){return`
# Mcp Bridge \u914D\u7F6E\u8BF4\u660E

## McpBridge \u5B57\u6BB5\u8BF4\u660E
| \u5B57\u6BB5         | \u7C7B\u578B | \u8BF4\u660E                | \u793A\u4F8B\u503C     | \u662F\u5426\u5FC5\u586B              |
|------------| --- |-------------------|---------|-------------------|
| registries | RegistryConfig \u6570\u7EC4 | \u652F\u6301\u914D\u7F6E\u591A\u4E2A\u4E0D\u540C\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\u6765\u6E90 | []      | \u5426                 |
| name       | \u5B57\u7B26\u4E32 | McpBridge \u540D\u79F0      | default | \u662F\uFF0C\u5F53\u524D\u8BE5\u503C\u53EA\u80FD\u662F default |

## RegistryConfig \u5B57\u6BB5\u8BF4\u660E
| \u5B57\u6BB5                    | \u7C7B\u578B | \u8BF4\u660E                                           | \u793A\u4F8B\u503C                                  | \u662F\u5426\u5FC5\u586B |
|-----------------------| --- |----------------------------------------------|--------------------------------------| --- |
| type                  | \u5B57\u7B26\u4E32 | \u670D\u52A1\u53D1\u73B0\u7C7B\u578B\uFF0C\u53EF\u9009\u9879\uFF1Anacos,nacos2,zookeeper,consul,eureka,static,dns | nacos2                               | \u662F |
| name                  | \u5B57\u7B26\u4E32 | \u81EA\u5B9A\u4E49\u7684\u670D\u52A1\u6765\u6E90\u540D\u79F0                                   | my-nacos                             | \u662F |
| domain                | \u5B57\u7B26\u4E32 | \u670D\u52A1\u53D1\u73B0\u5730\u5740\uFF0C\u4E00\u822C\u662F\u6CE8\u518C\u4E2D\u5FC3\u5730\u5740; \u5F53\u7C7B\u578B\u662Fstatic\u6216dns\u65F6\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u7528\u4E8E\u76F4\u63A5\u914D\u7F6E\u540E\u7AEF\u5730\u5740                             | 192.168.1.2                          | \u662F |
| port                  | \u6574\u6570 | \u6CE8\u518C\u4E2D\u5FC3\u8BBF\u95EE\u7AEF\u53E3                                     | 8848                                 | \u662F |
| zkServicesPath        | \u5B57\u7B26\u4E32\u6570\u7EC4 | \u4F7F\u7528zk\u65F6,\u586B\u5199\u670D\u52A1\u6CE8\u518C\u7684\u6839\u8DEF\u5F84,\u9ED8\u8BA4\u76D1\u542C /dubbo \u548C /services\uFF0C\u524D\u8005\u4E3Adubbo \u670D\u52A1\u9ED8\u8BA4\u6839\u8DEF\u5F84\uFF0C\u540E\u8005\u4E3ASpringCloud\u670D\u52A1\u9ED8\u8BA4\u6839\u8DEF\u5F84 | ["/service-provider"]                | \u5426 |
| nacosNamespaceId      | \u5B57\u7B26\u4E32 | nacos\u547D\u540D\u7A7A\u95F4id                                  | d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358 | \u5426 |
| nacosGroups           | \u5B57\u7B26\u4E32\u6570\u7EC4 | nacos\u670D\u52A1\u5206\u7EC4\u5217\u8868                                  | ["DEFAULT_GROUP"]                    | \u5426 |
| nacosAccessKey        | \u5B57\u7B26\u4E32 | nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684ak\u4FE1\u606F                            | xxxx                                 | \u5426 |
| nacosSecretKey        | \u5B57\u7B26\u4E32 | nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684sk\u4FE1\u606F                            | xxxx | \u5426 |
| nacosRefreshInterval  | \u6574\u6570 | nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u5237\u65B0\u95F4\u9694\u7EB3\u79D2\u6570                       | 30000000000\uFF0830\u79D2\uFF09                     | \u5426 |
| consulDatacenter      | \u5B57\u7B26\u4E32 | consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u6570\u636E\u4E2D\u5FC3\u540D\u79F0                         | dc1                                  | \u5426 |
| consulServiceTag      | \u5B57\u7B26\u4E32 | consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u6807\u7B7E\u8FC7\u6EE4                         | higress                              | \u5426 |
| consulRefreshInterval | \u6574\u6570 | consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u5237\u65B0\u95F4\u9694\u7EB3\u79D2\u6570                      | 30000000000\uFF0830\u79D2\uFF09                     | \u5426 |
| authSecretName        | \u5B57\u7B26\u4E32 | \u670D\u52A1\u53D1\u73B0\u8BA4\u8BC1\u4FE1\u606F Secret \u540D\u79F0, \u5177\u4F53\u770B\u4E0B\u9762\u8BF4\u660E                  | higress-nacos-auth                      | \u5426 |

## authSecretName \u5B57\u6BB5\u8BF4\u660E

\u670D\u52A1\u53D1\u73B0\u6765\u6E90\u8BA4\u8BC1\u4FE1\u606F\u4FDD\u5B58\u5728 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\u5BF9\u5E94 Secret \u4E0B \uFF0C\u73B0\u5728\u652F\u6301 nacos \u548C consul \u670D\u52A1\u53D1\u73B0\u3002

nacos \u8BA4\u8BC1\u4FE1\u606F\u5305\u542B\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C consul \u8BA4\u8BC1\u4FE1\u606F\u5305\u542B\u8BA4\u8BC1 token\uFF0C \u5177\u4F53 Secret \u914D\u7F6E\u6837\u4F8B\u5982\u4E0B\uFF1A

### nacos \u8BA4\u8BC1

\`\`\`yaml
apiVersion: v1
data:
  nacosPassword: aGlncmVzcw==
  nacosUsername: aGlncmVzcw==
kind: Secret
metadata:
  name: higress-nacos-auth
  namespace: higress-system
type: Opaque
\`\`\`

### consul \u8BA4\u8BC1 

\`\`\`yaml
apiVersion: v1
data:
  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy
kind: Secret
metadata:
  name: higress-consul-auth
  namespace: higress-system
type: Opaque
\`\`\`


## \u652F\u6301\u914D\u7F6E\u9759\u6001\u7684\u670D\u52A1\u53D1\u73B0\u65B9\u5F0F

### \u901A\u8FC7\u56FA\u5B9AIP\u53D1\u73B0\u670D\u52A1

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: "1.1.1.1:80,2.2.2.2:80"
    name: test
    port: 80
    type: static
\`\`\`

### \u901A\u8FC7DNS\u57DF\u540D\u53D1\u73B0\u670D\u52A1

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: www.alibaba.com
    name: alibaba
    port: 80
    type: dns
\`\`\`
`},i=function(){return s},c=function(){return[{depth:2,slug:"mcpbridge-\u5B57\u6BB5\u8BF4\u660E",text:"McpBridge \u5B57\u6BB5\u8BF4\u660E"},{depth:2,slug:"registryconfig-\u5B57\u6BB5\u8BF4\u660E",text:"RegistryConfig \u5B57\u6BB5\u8BF4\u660E"},{depth:2,slug:"authsecretname-\u5B57\u6BB5\u8BF4\u660E",text:"authSecretName \u5B57\u6BB5\u8BF4\u660E"},{depth:3,slug:"nacos-\u8BA4\u8BC1",text:"nacos \u8BA4\u8BC1"},{depth:3,slug:"consul-\u8BA4\u8BC1",text:"consul \u8BA4\u8BC1"},{depth:2,slug:"\u652F\u6301\u914D\u7F6E\u9759\u6001\u7684\u670D\u52A1\u53D1\u73B0\u65B9\u5F0F",text:"\u652F\u6301\u914D\u7F6E\u9759\u6001\u7684\u670D\u52A1\u53D1\u73B0\u65B9\u5F0F"},{depth:3,slug:"\u901A\u8FC7\u56FA\u5B9Aip\u53D1\u73B0\u670D\u52A1",text:"\u901A\u8FC7\u56FA\u5B9AIP\u53D1\u73B0\u670D\u52A1"},{depth:3,slug:"\u901A\u8FC7dns\u57DF\u540D\u53D1\u73B0\u670D\u52A1",text:"\u901A\u8FC7DNS\u57DF\u540D\u53D1\u73B0\u670D\u52A1"}]},a=l((g,m,x)=>{const{layout:f,...d}=t;return d.file=e,d.url=n,r`${v()}${E(s)}`})});export{a as Content,h as __tla,i as compiledContent,a as default,e as file,t as frontmatter,c as getHeadings,p as rawContent,n as url};
