"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2476],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=r(7462),n=(r(7294),r(4137));const a={title:"DNS protection",sidebar_position:2},i=void 0,s={unversionedId:"adguard-for-ios/features/dns-protection",id:"adguard-for-ios/features/dns-protection",title:"DNS protection",description:"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-ios/features/dns-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/dns-protection",permalink:"/KnowledgeBase/ru/adguard-for-ios/features/dns-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/dns-protection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"DNS protection",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Safari protection",permalink:"/KnowledgeBase/ru/adguard-for-ios/features/safari-protection"},next:{title:"Advanced protection",permalink:"/KnowledgeBase/ru/adguard-for-ios/features/advanced-protection"}},l={},d=[{value:"DNS implementation",id:"dns-implementation",level:3},{value:"DNS servers",id:"dns-servers",level:3},{value:"Network settings",id:"network-settings",level:3},{value:"DNS filtering",id:"dns-filtering",level:3},{value:"DNS filters",id:"dns-filters",level:4},{value:"Allowlist and Blocklist",id:"allowlist-blocklist",level:4}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS protection module")," enhances your privacy by encrypting your DNS traffic. Unlike with Safari content blocking, DNS protection works system-wide, i.e. beyond Safari, in apps and other browsers. You have to enable this module before you're able to use it. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the ",(0,n.kt)("em",{parentName:"p"},"Protection")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS protection")," tab."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To be able to manage DNS settings, AdGuard apps require establishing a local VPN. It will not route your traffic through any remote servers. Nevertheless, the system will ask you to confirm access permission.")),(0,n.kt)("h3",{id:"dns-implementation"},"DNS implementation"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg",alt:"DNS implementation screen *mobile_border"})),(0,n.kt)("p",null,"This section has two options: AdGuard and Native implementation. Basically, these are two methods of setting up DNS."),(0,n.kt)("p",null,"In Native implementation, the DNS is handled by the system and not the app. This means that AdGuard doesn't have to create a local VPN. Sadly, this will not help you circumvent system restrictions and use AdGuard alongside other VPN-based applications \u2014 if any VPN is enabled, native DNS is ignored. Consequently, you won't be able to filter traffic locally or to use our brand new ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/dns-over-quic.html"},"DNS-over-QUIC protocol (DoQ)"),"."),(0,n.kt)("h3",{id:"dns-servers"},"DNS servers"),(0,n.kt)("p",null,"The next section you'll see on the DNS Protection screen is DNS server. It shows the currently selected DNS server and encryption type. To change either, tap the button to enter the DNS server screen."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg",alt:"DNS servers *mobile_border"})),(0,n.kt)("p",null,"Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Tap any to change the encryption type (if such option is provided by the server's owner) or to view the server's homepage. We added labels such as ",(0,n.kt)("inlineCode",{parentName:"p"},"No logging policy"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Ad blocking"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Security")," to help you make a choice."),(0,n.kt)("p",null,"In addition, at the bottom of the screen there is an option to add a custom DNS server. It supports regular, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC servers."),(0,n.kt)("h3",{id:"network-settings"},"Network settings"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg",alt:"Network settings screen *mobile_border"})),(0,n.kt)("p",null,"Users can also handle their DNS security on the Network settings screen. ",(0,n.kt)("em",{parentName:"p"},"Filter mobile data")," and ",(0,n.kt)("em",{parentName:"p"},"Filter Wi-Fi")," enable or disable DNS protection for the respective network types. Further down, at ",(0,n.kt)("em",{parentName:"p"},"Wi-Fi exceptions"),", you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-home/overview.html"},"AdGuard Home"),")."),(0,n.kt)("h3",{id:"dns-filtering"},"DNS filtering"),(0,n.kt)("p",null,"DNS filtering allows you to customize your DNS traffic by enabling AdGuard DNS filter, adding custom DNS filters, and using the DNS blocklist/allowlist."),(0,n.kt)("p",null,"How to access:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Protection")," (the shield icon in the bottom menu bar) \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS protection")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS filtering")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg",alt:"DNS filtering screen *mobile_border"})),(0,n.kt)("h4",{id:"dns-filters"},"DNS filters"),(0,n.kt)("p",null,"Similar to filters that work in Safari, DNS filters are sets of rules written according to special ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/"},"syntax"),". AdGuard will monitor your DNS traffic and block requests that match one or more rules. You can use filters such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardSDNSFilter"},"AdGuard DNS filter")," or add hosts files as filters. Multiple filters can be added simultaneously. To know how to do it, get acquainted with ",(0,n.kt)("a",{parentName:"p",href:"adguard-for-ios/solving-problems/system-wide-filtering"},"this exhaustive manual"),"."),(0,n.kt)("h4",{id:"allowlist-blocklist"},"Allowlist and Blocklist"),(0,n.kt)("p",null,"On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking."))}u.isMDXComponent=!0}}]);