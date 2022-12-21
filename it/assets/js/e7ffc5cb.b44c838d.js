"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6117],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),h=d(r),p=a,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:a,s[1]=n;for(var d=2;d<i;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const i={title:"Stealth Mode",sidebar_position:4},s=void 0,n={unversionedId:"general/stealth-mode",id:"general/stealth-mode",title:"Stealth Mode",description:'Many websites gather information about their visitors, such as their IP address, installed browser and operating system, screen resolution, and even the page from which a visitor was redirected. Some web pages use cookies to mark your browser and save your personal settings and preferences, or to "recognize" you upon your next visit. Stealth Mode safeguards your personal information from such data- and statistics-gathering systems.',source:"@site/i18n/it/docusaurus-plugin-content-docs/current/general/stealth-mode.md",sourceDirName:"general",slug:"/general/stealth-mode",permalink:"/KnowledgeBase/it/general/stealth-mode",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/stealth-mode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Stealth Mode",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Browsing Security",permalink:"/KnowledgeBase/it/general/browsing-security"},next:{title:"Userscripts",permalink:"/KnowledgeBase/it/general/userscripts"}},l={},d=[{value:"General",id:"general",level:3},{value:"Hide your search queries",id:"searchqueries",level:4},{value:"Send Do-Not-Track header",id:"donottrack",level:4},{value:"Strip tracking parameters from URLs",id:"strip-tracking-parameters-from-urls",level:4},{value:"Tracking methods",id:"tracking-methods",level:3},{value:"Self-destructing third-party cookies",id:"3p-cookie",level:4},{value:"Self-destructing first-party cookies",id:"1p-cookie",level:4},{value:"Disable cache for third-party requests",id:"3p-cache",level:4},{value:"Block third-party Authorization header",id:"3p-auth",level:4},{value:"Browser API",id:"browser-api",level:3},{value:"Block WebRTC",id:"webrtc",level:4},{value:"Block Push API",id:"push",level:4},{value:"Block Location API",id:"location",level:4},{value:"Block Flash",id:"flash",level:4},{value:"Block Java",id:"java",level:4},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Hide Referrer from third-parties",id:"referrer",level:4},{value:"Hide your User-Agent",id:"useragent",level:4},{value:"Hide your IP address",id:"ip",level:4},{value:"Remove X-Client-Data header from HTTP requests",id:"xclientdata",level:4},{value:"Protect from DPI",id:"dpi",level:4}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Many websites gather information about their visitors, such as their IP address, installed browser and operating system, screen resolution, and even the page from which a visitor was redirected. Some web pages use cookies to mark your browser and save your personal settings and preferences, or to "recognize" you upon your next visit. Stealth Mode safeguards your personal information from such data- and statistics-gathering systems.'),(0,a.kt)("p",null,"You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website from receiving the search request you used to find it on the Internet, automatically delete both third-party and the website's own cookies, turn off browser geolocation sharing that can be used to track your whereabouts, and hide your true IP address or even replace it with an arbitrary one."),(0,a.kt)("p",null,"Below we will list and describe the main features and options that you can control in the ",(0,a.kt)("strong",{parentName:"p"},"Stealth Mode")," settings. They are split into four groups: ",(0,a.kt)("strong",{parentName:"p"},"General"),", ",(0,a.kt)("strong",{parentName:"p"},"Tracking methods"),", ",(0,a.kt)("strong",{parentName:"p"},"Browser API"),", and ",(0,a.kt)("strong",{parentName:"p"},"Miscellaneous"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some options may not be available depending on the particular product due to OS or other limitations.")),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("h4",{id:"searchqueries"},"Hide your search queries"),(0,a.kt)("p",null,"When you get directed to a website from Google, Yahoo, or any other search engine, this option hides the search query that you used to find that website."),(0,a.kt)("h4",{id:"donottrack"},"Send Do-Not-Track header"),(0,a.kt)("p",null,"It sends a Do-Not-Track (DNT) HTTP header to queried websites, thus requiring web apps to disable tracking of your activity."),(0,a.kt)("h4",{id:"strip-tracking-parameters-from-urls"},"Strip tracking parameters from URLs"),(0,a.kt)("p",null,"If you enable this option, AdGuard will strip tracking parameters like ",(0,a.kt)("inlineCode",{parentName:"p"},"utm_*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fb_ref")," from pages\u2019 URLs."),(0,a.kt)("h3",{id:"tracking-methods"},"Tracking methods"),(0,a.kt)("h4",{id:"3p-cookie"},"Self-destructing third-party cookies"),(0,a.kt)("p",null,'Websites use cookies to store your information and preferences, such as the language you selected, your location, or the list of items in your shopping cart. When you return to a website, your browser sends back the cookies belonging to that website, which allows it to "remember" your data.'),(0,a.kt)("p",null,'Third-party cookies are those implemented by a website that is different from the one you are currently browsing. For example, cnn.com may have a Facebook "Like" widget on its homepage. This widget will implement a cookie that may be read later by Facebook. Some advertisers use such cookies to track what other sites you visit where their ads are placed.'),(0,a.kt)("p",null,"Set a time period (in minutes) at the end of which all third-party cookies will be destroyed. Set the timer to 0 to block them completely."),(0,a.kt)("h4",{id:"1p-cookie"},"Self-destructing first-party cookies"),(0,a.kt)("p",null,"We do not recommend enabling this option as it may severely interfere with the work of certain sites. Set a time period (in minutes) at the end of which all cookies will be destroyed. Set the timer to 0 to block them completely."),(0,a.kt)("h4",{id:"3p-cache"},"Disable cache for third-party requests"),(0,a.kt)("p",null,"When a browser addresses a page, the server assigns an ETag to that page. This ETag is used by the browser to cache the page's contents. Upon subsequent requests, the browser sends the ETag to the corresponding server, thus letting the server learn the visitor\u2019s identity. As long as the site's files are cached, the ETag is sent every time your browser addresses this site. If the site has embedded content from another server (such as an image or iframe), that server can track your activities without your knowledge."),(0,a.kt)("h4",{id:"3p-auth"},"Block third-party Authorization header"),(0,a.kt)("p",null,'"Authorization" header value is cached by the browser, and then is sent alongside every request to that domain. It means that it can be used for tracking purposes just like cookies.'),(0,a.kt)("h3",{id:"browser-api"},"Browser API"),(0,a.kt)("h4",{id:"webrtc"},"Block WebRTC"),(0,a.kt)("p",null,"WebRTC (Web Real-Time Communication) is a technology that allows direct streaming of data between browsers and apps. It can let others know your true IP address, even if you use a proxy or VPN. Enabling this option can disrupt the work of certain browser applications, such as messengers, chats, cinemas, or games."),(0,a.kt)("h4",{id:"push"},"Block Push API"),(0,a.kt)("p",null,"The Push API enables servers to send messages to web applications regardless of the activity status of your browser. Thus, you may see notifications from various websites even if your browser is hidden in the tray or not launched. Enable this option to block the browser's Push API completely."),(0,a.kt)("h4",{id:"location"},"Block Location API"),(0,a.kt)("p",null,"Enabling this option will prevent the browser from sending GPS data that could be used to determine your location, modify your search results, or otherwise influence your web experience."),(0,a.kt)("h4",{id:"flash"},"Block Flash"),(0,a.kt)("p",null,"The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly affect website loading time. Turning this setting on makes AdGuard block browsers' ability to detect components (such as plugins and ActiveXObject objects) that allow Flash to display content. This effectively means that browsers are unable to support Flash."),(0,a.kt)("h4",{id:"java"},"Block Java"),(0,a.kt)("p",null,'Some websites and web services still use the old technology to support Java plugins. The Java plugin API, which is the basis of Java plugins, has serious security flaws. For security purposes, you can disable such plugins. Nevertheless, even if you decide to use the "Block Java" option, JavaScript will still be enabled.'),(0,a.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("h4",{id:"referrer"},"Hide Referrer from third-parties"),(0,a.kt)("p",null,"Referrer is an HTTP header used in browser-to-server requests. It contains the URL of the request source. When you navigate from one page to another, Referrer saves the URL of the initial page. The server often has software that parses Referrer and extracts various pieces of information from it. Enabling this option hides the current website from third-party sites by changing the HTTP header. You can also set an arbitrary value for Referrer by entering it into the Custom Referrer field. To use default Referrer, leave the field blank."),(0,a.kt)("h4",{id:"useragent"},"Hide your User-Agent"),(0,a.kt)("p",null,'When you visit a website, your browser sends its information to the server. It looks like a text line that is part of an HTTP request that begins with "User-Agent:". It usually includes the name and version of the browser, the operating system, and language settings. We cut User-Agent from identifying information so that advertisers cannot obtain it.'),(0,a.kt)("p",null,"You can also set an arbitrary value for User-Agent by entering it into the Custom User-Agent field. To use default User-Agent, leave the field blank."),(0,a.kt)("h4",{id:"ip"},"Hide your IP address"),(0,a.kt)("p",null,"Stealth Mode cannot hide your IP address. However, we can conceal it so that websites you visit will think you are a proxy. Sometimes this helps, and websites ignore your true IP address."),(0,a.kt)("p",null,"You can set an arbitrary IP address, which you would like others to perceive as yours, by simply entering it into the corresponding field. To use the default IP address, leave the field blank."),(0,a.kt)("h4",{id:"xclientdata"},"Remove X-Client-Data header from HTTP requests"),(0,a.kt)("p",null,"It forbids Google Chrome from sending its version and modification information with requests to Google domains (including Double Click and Google Analytics)."),(0,a.kt)("h4",{id:"dpi"},"Protect from DPI"),(0,a.kt)("p",null,"The Deep Packet Inspection is a system of deep analysis and filtering of traffic by packet content, as well as the accumulation of statistical data. Using this technology, ISPs have the ability to control the passing traffic and limit access to content for their clients."),(0,a.kt)("p",null,"AdGuard can modify outgoing packet data so that the client does not fall under the DPI blocking criteria. This means that by enabling this option, users can get access to the content they want. Not all DPI systems can be bypassed at this time, but we are constantly working to improve this."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'The "Protect from DPI" feature is already implemented in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.')))}c.isMDXComponent=!0}}]);