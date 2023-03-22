"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6755],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={title:"Setting up filtering in Tor Browser",sidebar_position:10},a=void 0,l={unversionedId:"adguard-for-mac/solving-problems/tor-filtering",id:"adguard-for-mac/solving-problems/tor-filtering",title:"Setting up filtering in Tor Browser",description:"By default, Tor Browser is added to AdGuard\u2019s list of filtered applications. However, to filter it, AdGuard needs to change Tor's security settings. This will make Tor trust AdGuard's CA certificate.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/tor-filtering.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/tor-filtering",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/tor-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/tor-filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Setting up filtering in Tor Browser",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Advanced Settings guide",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/advanced-settings"},next:{title:"Features overview",permalink:"/KnowledgeBase/fr/adguard-for-android/overview"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Tor Browser is added to AdGuard\u2019s list of filtered applications. However, to filter it, AdGuard needs to change Tor's security settings. This will make Tor trust AdGuard's CA certificate."),(0,o.kt)("p",null,"If you decide to filter Tor and check it in ",(0,o.kt)("em",{parentName:"p"},"Preferences")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Network")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Applications"),", AdGuard will show you this dialog box:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png",alt:"AdGuard dialog box"})),(0,o.kt)("p",null,"By updating Tor settings, AdGuard will set the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"security.enterprise_roots.enabled"),": true"),(0,o.kt)("p",null,"This setting will cause Tor to trust root certificates. ",(0,o.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox"},"Learn more")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"security.cert_pinning.enforcement_level"),": 1"),(0,o.kt)("p",null,"Public Key Pinning is a security measure that allows websites to ensure that the connection between a website and a user is authentic. This involves the website publishing a list of public keys, or pins, that it trusts. With the enforcement level set to 1, pinning is not enforced for custom CAs. ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning"},"Learn more")),(0,o.kt)("p",null,"To apply the changes, you\u2019ll need to restart Tor Browser."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you manually change these settings, Tor filtering will be stopped.")))}p.isMDXComponent=!0}}]);