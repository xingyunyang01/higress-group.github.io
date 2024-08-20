import{c as i,__tla as d}from"./astro-component.CkonuESJ.js";import{r as c,m as y,u as E,__tla as F}from"./constant.C_vwf_UA.js";import{__tla as u}from"./astro/assets-service.BSoMdJpH.js";let s,l,a,n,o,r,t,h=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let e;e=`<h2 id="description">Description</h2>
<p><code dir="auto">bot-detect</code> plugin can be used to identify and prevent web crawlers from crawling websites.</p>
<h2 id="configuration-fields">Configuration Fields</h2>








































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>allow</td><td>array of string</td><td>Optional</td><td>-</td><td>A regular expression to match the User-Agent request header and will allow access if the match hits</td></tr><tr><td>deny</td><td>array of string</td><td>Optional</td><td>-</td><td>A regular expression to match the User-Agent request header and will block the request if the match hits</td></tr><tr><td>blocked_code</td><td>number</td><td>Optional</td><td>403</td><td>The HTTP status code returned when a request is blocked</td></tr><tr><td>blocked_message</td><td>string</td><td>Optional</td><td>-</td><td>The HTTP response Body returned when a request is blocked</td></tr></tbody></table>
<p>If field <code dir="auto">allow</code> and field <code dir="auto">deny</code> are not configured at the same time, the default logic to identify crawlers will be executed. By configuring the <code dir="auto">allow</code> field, requests that would otherwise hit the default logic can be allowed. The judgement can be extended by configuring the <code dir="auto">deny</code> field</p>
<p>The default set of crawler judgment regular expressions is as follows\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots General matcher 'name/0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\/</span><span style="--0:#E1E4E8">[A-Za-z0-9</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">]+</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">) {</span><span style="--0:#B392F0">0,5}([A-Za-z0-9</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\-</span><span style="--0:#9ECBFF">_</span><span style="--0:#79B8FF">\\!\\[\\]</span><span style="--0:#9ECBFF">:]{0,50}</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:[Aa]rchiver</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ii]ndexer</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]craper</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc]rawl[a-z]{</span><span style="--0:#B392F0">0,50}</span><span style="--0:#E1E4E8">))[/ ](</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots General matcher 'name 0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\/</span><span style="--0:#E1E4E8">[A-Za-z0-9</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">]+</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">) {</span><span style="--0:#B392F0">0,5}([A-Za-z0-9</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\-</span><span style="--0:#9ECBFF">_</span><span style="--0:#79B8FF">\\!\\[\\]</span><span style="--0:#9ECBFF">:]{0,50}</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:[Aa]rchiver</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ii]ndexer</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]craper</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc]rawl[a-z]{</span><span style="--0:#B392F0">0,50}</span><span style="--0:#E1E4E8">)) (</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots containing spider|scrape|bot(but not CUBOT)|Crawl</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">((</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z0</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">1</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z</span><span style="--0:#79B8FF">\\-</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">1</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">?|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8"> the </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[Ss][Pp][Ii][Dd][Ee][Rr]</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]crape</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc][Rr][Aa][Ww][Ll])[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z0</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">0</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">})(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[ </span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> v)(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8"># Bots Pattern '/name-0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">/((?:Ant-</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">Nutch</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A-z]+[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A-z]+[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Axtaris</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">fetchurl</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Isara</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">ShopSalad</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Tailsweep</span><span style="--0:#E1E4E8">)[ </span><span style="--0:#79B8FF">\\-</span><span style="--0:#E1E4E8">](</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">))</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">?</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots Pattern 'name/0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">\\b(008</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Altresium</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Argus</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BaiduMobaider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BoardReader</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">DNSGroup</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">DataparkSearch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">EDI</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Goodzer</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Grub</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">INGRID</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Infohelfer</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">LinkedInBot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">LOOQ</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Nutch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">OgScrper</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">PathDefender</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Peew</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">PostPost</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Steeler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Twitterbot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">VSE</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">WebCrunch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">WebZIP</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Y!J-BR[A-Z]</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">YahooSeeker</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">envolk</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">sproose</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">wminer</span><span style="--0:#E1E4E8">)/(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(?:\\.(\\d+)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># More bots</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">CSimpleSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Cityreview</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Robot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">CrawlDaddy</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">CrawlFire</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Finderbots</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Index</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Job</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Roboter</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">KiwiStatus</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Spider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Lijit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">QuerySeekerSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">ScollSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Trends</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">USyd-NLP-Spider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">SiteCat</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Webbot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BotName\\/\\$BotVersion</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">123metaspider-Bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">1470\\.net</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">50\\.nu</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">8bo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Aboundex</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Accoona-[A-z]</span><span style="--0:#9ECBFF">{1,30}</span><span style="--0:#B392F0">-Agent</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">AdsBot-Google(?:-[a-z]</span><span style="--0:#9ECBFF">{1,30}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">altavista</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">AppEngine-Google</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">archive.</span><span style="--0:#9ECBFF">{0,30}</span><span style="--0:#B392F0">\\.org_bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">archiver</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Ask</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Jeeves</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ai[Dd]u[Ss]pider(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:-[A-Za-z]{</span><span style="--0:#B392F0">1,30}</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:-[A-Za-z]{</span><span style="--0:#B392F0">1,30}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="(?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50}))[/ ](\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)\x7F    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50})) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)\x7F    ((?:[A-z0-9]{1,50}|[A-z\\-]{1,50} ?|)(?: the |)(?:[Ss][Pp][Ii][Dd][Ee][Rr]|[Ss]crape|[Cc][Rr][Aa][Ww][Ll])[A-z0-9]{0,50})(?:(?:[ /]| v)(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)\x7F    /((?:Ant-)?Nutch|[A-z]+[Bb]ot|[A-z]+[Ss]pider|Axtaris|fetchurl|Isara|ShopSalad|Tailsweep)[ \\-](\\d+)(?:\\.(\\d+)(?:\\.(\\d+))?)?\x7F    \\b(008|Altresium|Argus|BaiduMobaider|BoardReader|DNSGroup|DataparkSearch|EDI|Goodzer|Grub|INGRID|Infohelfer|LinkedInBot|LOOQ|Nutch|OgScrper|PathDefender|Peew|PostPost|Steeler|Twitterbot|VSE|WebCrunch|WebZIP|Y!J-BR[A-Z]|YahooSeeker|envolk|sproose|wminer)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)\x7F    (CSimpleSpider|Cityreview Robot|CrawlDaddy|CrawlFire|Finderbots|Index crawler|Job Roboter|KiwiStatus Spider|Lijit Crawler|QuerySeekerSpider|ScollSpider|Trends Crawler|USyd-NLP-Spider|SiteCat Webbot|BotName\\/\\$BotVersion|123metaspider-Bot|1470\\.net crawler|50\\.nu|8bo Crawler Bot|Aboundex|Accoona-[A-z]{1,30}-Agent|AdsBot-Google(?:-[a-z]{1,30}|)|altavista|AppEngine-Google|archive.{0,30}\\.org_bot|archiver|Ask Jeeves|[Bb]ai[Dd]u[Ss]pider(?:-[A-Za-z]{1,30})(?:-[A-Za-z]{1,30}|)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)"><div></div></button></div></figure></div>
<h2 id="configuration-samples">Configuration Samples</h2>
<h3 id="release-requests-that-would-otherwise-hit-the-crawler-rules">Release Requests that would otherwise Hit the Crawler Rules</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">".*Go-http-client.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- &#x22;.*Go-http-client.*&#x22;"><div></div></button></div></figure></div>
<p>Without this configuration, the default Golang web library request will be treated as a crawler and access will be denied.</p>
<h3 id="add-crawler-judgement">Add Crawler Judgement</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"spd-tools.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="deny:\x7F- &#x22;spd-tools.*&#x22;"><div></div></button></div></figure></div>
<p>According to this configuration, the following requests will be denied:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'User-Agent: spd-tools/1.1'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'User-Agent: spd-tools'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -H &#x27;User-Agent: spd-tools/1.1&#x27;\x7Fcurl http://exmaple.com -H &#x27;User-Agent: spd-tools&#x27;"><div></div></button></div></figure></div>
<h3 id="only-enabled-for-specific-routes-or-domains">Only Enabled for Specific Routes or Domains</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use _rules_ field for fine-grained rule configurations</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Match by route name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Match by domain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">".*Go-http-client.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Use _rules_ field for fine-grained rule configurations\x7F_rules_:\x7F# Rule 1: Match by route name\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F# Rule 2: Match by domain\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  allow:\x7F  - &#x22;.*Go-http-client.*&#x22;"><div></div></button></div></figure></div>
<p>In the rule sample of <code dir="auto">_match_route_</code>, <code dir="auto">route-a</code> and <code dir="auto">route-b</code> are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of <code dir="auto">_match_domain_</code>, <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the <code dir="auto">_rules_</code> field, The first matched rule will be applied. All remained will be ignored.</p>`,n={title:"Robot Detect",keywords:["higress","bot detect"],description:"Bot Detect plugin plugin can be used to identify and prevent web crawlers from crawling websites."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/bot-detect.md",t=void 0,r=function(){return`
## Description
\`bot-detect\` plugin can be used to identify and prevent web crawlers from crawling websites.

## Configuration Fields

| Name | Type | Requirement |  Default Value | Description |
| -------- | -------- | -------- | -------- | -------- |
|  allow     |  array of string     | Optional     |   -  |  A regular expression to match the User-Agent request header and will allow access if the match hits   |
|  deny     |  array of string     | Optional     |   -  |  A regular expression to match the User-Agent request header and will block the request if the match hits   |
|  blocked_code     |  number     | Optional     |   403  |  The HTTP status code returned when a request is blocked   |
|  blocked_message     |  string     | Optional     |   -  |  The HTTP response Body returned when a request is blocked   |

If field \`allow\` and field \`deny\` are not configured at the same time, the default logic to identify crawlers will be executed. By configuring the \`allow\` field, requests that would otherwise hit the default logic can be allowed. The judgement can be extended by configuring the \`deny\` field

The default set of crawler judgment regular expressions is as follows\uFF1A

\`\`\`bash
# Bots General matcher 'name/0.0'
    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50}))[/ ](\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)
# Bots General matcher 'name 0.0'
    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50})) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)
# Bots containing spider|scrape|bot(but not CUBOT)|Crawl
    ((?:[A-z0-9]{1,50}|[A-z\\-]{1,50} ?|)(?: the |)(?:[Ss][Pp][Ii][Dd][Ee][Rr]|[Ss]crape|[Cc][Rr][Aa][Ww][Ll])[A-z0-9]{0,50})(?:(?:[ /]| v)(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)
# Bots Pattern '/name-0.0'
    /((?:Ant-)?Nutch|[A-z]+[Bb]ot|[A-z]+[Ss]pider|Axtaris|fetchurl|Isara|ShopSalad|Tailsweep)[ \\-](\\d+)(?:\\.(\\d+)(?:\\.(\\d+))?)?
# Bots Pattern 'name/0.0'
    \\b(008|Altresium|Argus|BaiduMobaider|BoardReader|DNSGroup|DataparkSearch|EDI|Goodzer|Grub|INGRID|Infohelfer|LinkedInBot|LOOQ|Nutch|OgScrper|PathDefender|Peew|PostPost|Steeler|Twitterbot|VSE|WebCrunch|WebZIP|Y!J-BR[A-Z]|YahooSeeker|envolk|sproose|wminer)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)
# More bots
    (CSimpleSpider|Cityreview Robot|CrawlDaddy|CrawlFire|Finderbots|Index crawler|Job Roboter|KiwiStatus Spider|Lijit Crawler|QuerySeekerSpider|ScollSpider|Trends Crawler|USyd-NLP-Spider|SiteCat Webbot|BotName\\/\\$BotVersion|123metaspider-Bot|1470\\.net crawler|50\\.nu|8bo Crawler Bot|Aboundex|Accoona-[A-z]{1,30}-Agent|AdsBot-Google(?:-[a-z]{1,30}|)|altavista|AppEngine-Google|archive.{0,30}\\.org_bot|archiver|Ask Jeeves|[Bb]ai[Dd]u[Ss]pider(?:-[A-Za-z]{1,30})(?:-[A-Za-z]{1,30}|)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)
\`\`\`

## Configuration Samples

### Release Requests that would otherwise Hit the Crawler Rules
\`\`\`yaml
allow:
- ".*Go-http-client.*"
\`\`\`

Without this configuration, the default Golang web library request will be treated as a crawler and access will be denied.


### Add Crawler Judgement
\`\`\`yaml
deny:
- "spd-tools.*"
\`\`\`

According to this configuration, the following requests will be denied:

\`\`\`bash
curl http://example.com -H 'User-Agent: spd-tools/1.1'
curl http://exmaple.com -H 'User-Agent: spd-tools'
\`\`\`

### Only Enabled for Specific Routes or Domains
\`\`\`yaml
# Use _rules_ field for fine-grained rule configurations 
_rules_:
# Rule 1: Match by route name
- _match_route_:
  - route-a
  - route-b
# Rule 2: Match by domain
- _match_domain_:
  - "*.example.com"
  - test.com
  allow:
  - ".*Go-http-client.*"
\`\`\`
In the rule sample of \`_match_route_\`, \`route-a\` and \`route-b\` are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of \`_match_domain_\`, \`*.example.com\` and \`test.com\` are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the \`_rules_\` field, The first matched rule will be applied. All remained will be ignored.
`},l=function(){return e},o=function(){return[{depth:2,slug:"description",text:"Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-samples",text:"Configuration Samples"},{depth:3,slug:"release-requests-that-would-otherwise-hit-the-crawler-rules",text:"Release Requests that would otherwise Hit the Crawler Rules"},{depth:3,slug:"add-crawler-judgement",text:"Add Crawler Judgement"},{depth:3,slug:"only-enabled-for-specific-routes-or-domains",text:"Only Enabled for Specific Routes or Domains"}]},s=i((b,B,m)=>{const{layout:g,...p}=n;return p.file=a,p.url=t,c`${y()}${E(e)}`})});export{s as Content,h as __tla,l as compiledContent,s as default,a as file,n as frontmatter,o as getHeadings,r as rawContent,t as url};
