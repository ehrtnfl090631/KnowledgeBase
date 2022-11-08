"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2364],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const i={title:"iCloud Private Relay and AdGuard",sidebar_position:7},o=void 0,l={unversionedId:"adguard-for-mac/solving-problems/icloud-private-relay",id:"adguard-for-mac/solving-problems/icloud-private-relay",title:"iCloud Private Relay and AdGuard",description:"Problem description in a nutshell",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/icloud-private-relay.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/icloud-private-relay",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/solving-problems/icloud-private-relay",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/icloud-private-relay.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"iCloud Private Relay and AdGuard",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Launch issues on macOS",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/solving-problems/launch-issues"},next:{title:"Protect Mail Activity and AdGuard",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/solving-problems/protect-mail-activity"}},s={},d=[{value:"Problem description in a nutshell",id:"problem-description-in-a-nutshell",level:2},{value:"In detail",id:"in-detail",level:2},{value:"Recommended solution",id:"recommended-solution",level:2},{value:"Alternative solution",id:"alternative-solution",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"problem-description-in-a-nutshell"},"Problem description in a nutshell"),(0,n.kt)("p",null,'By default, AdGuard uses the "default route" which disables iCloud Private Relay.'),(0,n.kt)("p",null,"Currently, AdGuard and iCloud Private Relay cannot work at the same time. AdGuard cannot block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections.  When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. Yet, AdGuard still filters traffic in other browsers. To keep using iCloud Private Relay, consider installing ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-safari/overview.html"},"AdGuard for Safari"),"."),(0,n.kt)("p",null,"The same applies to using any VPN apps on Mac: you have to choose between using iCloud Private Relay or a VPN service."),(0,n.kt)("h2",{id:"in-detail"},"In detail"),(0,n.kt)("p",null,"AdGuard for Mac now uses macOS built-in socket filtering based on the network extensions API. This new and rather buggy mechanism replaced good old Kernel extensions. Over the last 1.5 years, we've reported more than 20(!) bugs to Apple regarding their new filtering method."),(0,n.kt)("p",null,'The network extensions API has a VPN-like configuration with a list of route-like entries. On Big Sur, AdGuard developed "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases.'),(0,n.kt)("p",null,"On Monterey, iCloud Private Relay got introduced. Privacy features of Mail.app also use Private Relay servers."),(0,n.kt)("p",null,"As a result, AdGuard can't work together with iCloud Private Relay and Mail.app privacy features:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"iCloud Private Relay is applied to connections at the library level - before they reach the socket level, where AdGuard operates."),(0,n.kt)("li",{parentName:"ol"},"iCloud Private Relay uses QUIC, which AdGuard can't filter in filtered apps because HTTP/3 filtering is not yet available."),(0,n.kt)("li",{parentName:"ol"},"As AdGuard blocks QUIC, including iCloud Private Relay traffic - otherwise, ad blocking is impossible."),(0,n.kt)("li",{parentName:"ol"},'When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can\'t open websites in Safari.'),(0,n.kt)("li",{parentName:"ol"},'To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel"),' restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4). We keep searching for a solution to this issue. One of the options is implementing HTTP/3 filtering.'),(0,n.kt)("h2",{id:"recommended-solution"},"Recommended solution"),(0,n.kt)("p",null,"We recommend using AdGuard together with a more traditional VPN service such as ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),"."),(0,n.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,n.kt)("p",null,'You can prevent AdGuard from using the "default route" by disabling the "default route".  It can be done via Advanced Settings -> ',(0,n.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg",alt:"Disable default route in advanced settings"})),(0,n.kt)("p",null,"Bear in mind that, in this case, you'll face the issues described above."))}c.isMDXComponent=!0}}]);