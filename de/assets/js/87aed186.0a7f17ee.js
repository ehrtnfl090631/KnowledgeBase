"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2932],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),g=o,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const a={title:"Integration mode (legacy)",sidebar_position:3},s=void 0,i={unversionedId:"adguard-browser-extension/integration-mode",id:"adguard-browser-extension/integration-mode",title:"Integration mode (legacy)",description:"What is the integration mode?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-browser-extension/integration-mode.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/integration-mode",permalink:"/KnowledgeBase/de/adguard-browser-extension/integration-mode",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/integration-mode.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Integration mode (legacy)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to install",permalink:"/KnowledgeBase/de/adguard-browser-extension/installation"},next:{title:"Features overview",permalink:"/KnowledgeBase/de/adguard-for-safari/overview"}},d={},l=[{value:"What is the integration mode?",id:"what-is-the-integration-mode",level:2},{value:"AdGuard Browser Assistant",id:"adguard-browser-assistant",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-integration-mode"},"What is the integration mode?"),(0,o.kt)("p",null,"In older versions of AdGuard Browser extension, if you had it installed along with one of the AdGuard desktop apps (AdGuard for Windows or AdGuard for Mac), the extension took upon itself the functions of AdGuard Assistant \u2014 a tool that helped manage the filtering right from the web page. At the same time, the ad blocking itself was completely under of the desktop app's control, the extension and its settings played no role in that."),(0,o.kt)("p",null,"The problem was, in some cases the app and the extension would hamper each other\u2019s work. Some websites would stop being protected by the desktop program and were backed up only by the extension which has less possibilities. Thus, starting with AdGuard Browser Extension v3.5, the integration mode was removed. Instead, the new AdGuard Browser Assistant was implemented."),(0,o.kt)("h2",{id:"adguard-browser-assistant"},"AdGuard Browser Assistant"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/browser_extension/ad_blocker_browser_extension_assistant.png",alt:"AdGuard Browser Assistant"})),(0,o.kt)("p",null,"AdGuard Browser Assistant is a new browser extension that works and feels just like the integration mode but much lighter, without redundant functions, and doesn't interfere with the desktop apps. You can ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBase/de/adguard-for-windows/browser-assistant"},"read more about Browser Assistant for Windows")," or ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBase/de/adguard-for-mac/browser-assistant"},"Mac"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-assistant/overview.html"},"download it from our website"),"."),(0,o.kt)("p",null,"AdGuard Browser Assistant is available in all major browsers."))}p.isMDXComponent=!0}}]);