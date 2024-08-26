"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});r(7294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Low-level Settings guide",sidebar_position:5},s=void 0,d={unversionedId:"adguard-for-ios/solving-problems/low-level-settings",id:"adguard-for-ios/solving-problems/low-level-settings",title:"Low-level Settings guide",description:"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/low-level-settings",permalink:"/KnowledgeBase/zh-TW/adguard-for-ios/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Low-level Settings guide",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to block YouTube ads",permalink:"/KnowledgeBase/zh-TW/adguard-for-ios/solving-problems/block-youtube-ads"},next:{title:"AdGuard and AdGuard Pro",permalink:"/KnowledgeBase/zh-TW/adguard-for-ios/adguard-and-adguard-pro"}},p={},c=[{value:"How to reach the Low-level settings",id:"how-to-reach-the-low-level-settings",level:2},{value:"Low-level settings",id:"low-level-settings",level:2},{value:"Tunnel mode",id:"tunnel-mode",level:3},{value:"Blocking mode",id:"blocking-mode",level:3},{value:"Block IPv6",id:"block-ipv6",level:3},{value:"Blocked response TTL",id:"blocked-response-ttl",level:3},{value:"Bootstrap servers",id:"bootstrap-servers",level:3},{value:"Fallback servers",id:"fallback-servers",level:3},{value:"Background app refresh time",id:"background-app-refresh-time",level:3}],u={toc:c};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("h2",{id:"how-to-reach-the-low-level-settings"},"How to reach the Low-level settings"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Changing ",(0,o.kt)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.")),(0,o.kt)("p",null,"To go to ",(0,o.kt)("em",{parentName:"p"},"Low-level settings"),", tap the gear icon at the bottom right of the screen to open ",(0,o.kt)("em",{parentName:"p"},"Settings"),". Select the ",(0,o.kt)("em",{parentName:"p"},"General")," section and then toggle on the ",(0,o.kt)("em",{parentName:"p"},"Advanced mode")," switch, after that the ",(0,o.kt)("em",{parentName:"p"},"Advanced settings")," section will appear below. Tap ",(0,o.kt)("em",{parentName:"p"},"Advanced settings")," to reach the ",(0,o.kt)("em",{parentName:"p"},"Low-level settings")," section."),(0,o.kt)("h2",{id:"low-level-settings"},"Low-level settings"),(0,o.kt)("h3",{id:"tunnel-mode"},"Tunnel mode"),(0,o.kt)("p",null,"There are two main tunnel modes: ",(0,o.kt)("em",{parentName:"p"},"Split")," and ",(0,o.kt)("em",{parentName:"p"},"Full"),". ",(0,o.kt)("em",{parentName:"p"},"Split-Tunnel"),' mode provides compatibility of AdGuard and so-called "Personal VPN" apps. In ',(0,o.kt)("em",{parentName:"p"},"Full-Tunnel")," mode no other VPN can work simultaneously with AdGuard."),(0,o.kt)("p",null,"There is a specific feature of ",(0,o.kt)("em",{parentName:"p"},"Split-Tunnel"),' mode: if DNS proxy does not perform well, for example, if the response from the AdGuard DNS server was not returned in time, iOS will "amerce" it and reroute traffic through DNS server, specified in iOS settings. No ads are blocked at this time and DNS traffic is not encrypted.'),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"Full-Tunnel")," mode only the DNS server specified in AdGuard settings is used. If it does not respond, the Internet will simply not work. Enabled ",(0,o.kt)("em",{parentName:"p"},"Full-Tunnel")," mode may cause the incorrect performance of some programs (for instance, Facetime), and lead to problems with app updates."),(0,o.kt)("p",null,"By default, AdGuard uses ",(0,o.kt)("em",{parentName:"p"},"Split-Tunnel")," mode as the most stable option."),(0,o.kt)("p",null,"There is also an additional mode called ",(0,o.kt)("em",{parentName:"p"},"Full-Tunnel (without VPN icon)"),". This is exactly the same as ",(0,o.kt)("em",{parentName:"p"},"Full-Tunnel")," mode, but it is set up so that the VPN icon is not displayed in the system line."),(0,o.kt)("h3",{id:"blocking-mode"},"Blocking mode"),(0,o.kt)("p",null,"In this module you can select the way AdGuard will respond to DNS queries that should be blocked:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default \u2014 respond with zero IP address when blocked by adblock-style rules; respond with the IP address specified in the rule when blocked by /etc/hosts-style rules"),(0,o.kt)("li",{parentName:"ul"},"REFUSED \u2014 respond with REFUSED code"),(0,o.kt)("li",{parentName:"ul"},"NXDOMAIN \u2014 respond with NXDOMAIN code"),(0,o.kt)("li",{parentName:"ul"},"Unspecified IP \u2014 respond with zero IP address"),(0,o.kt)("li",{parentName:"ul"},"Custom IP \u2014 respond with a manually set IP address")),(0,o.kt)("h3",{id:"block-ipv6"},"Block IPv6"),(0,o.kt)("p",null,"By moving the toggle to the right, you activate the blocking of IPv6 queries (AAAA requests). AAAA-type DNS requests will not be resolved, hence only IPv4 queries can be processed."),(0,o.kt)("h3",{id:"blocked-response-ttl"},"Blocked response TTL"),(0,o.kt)("p",null,"Here you can set the period for a device to cache the response to a DNS request. During the specified time to live (in seconds) the request can be read from the cache without re-requesting the DNS server."),(0,o.kt)("h3",{id:"bootstrap-servers"},"Bootstrap servers"),(0,o.kt)("p",null,"For DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC a bootstrap server is required for getting the IP address of the main DNS server. If not specified, the DNS server from iOS settings is used as the bootstrap server."),(0,o.kt)("h3",{id:"fallback-servers"},"Fallback servers"),(0,o.kt)("p",null,"Here you can specify an alternate server to which a request will be rerouted if the main server fails to respond. If not specified, the system DNS server will be used as the fallback. It is also possible to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", in this case, there will be no fallback server set and only the main DNS server will be used."),(0,o.kt)("h3",{id:"background-app-refresh-time"},"Background app refresh time"),(0,o.kt)("p",null,"Here you can select the frequency at which the application will check for filter updates while in the background. Note that update checks will not be performed more often than the specified period, but the exact intervals may not be respected."))}m.isMDXComponent=!0}}]);