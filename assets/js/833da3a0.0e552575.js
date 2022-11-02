"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2817],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),w=o,f=c["".concat(d,".").concat(w)]||c[w]||p[w]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const a={title:"Browser Assistant",sidebar_position:3},s=void 0,i={unversionedId:"adguard-for-windows/browser-assistant",id:"adguard-for-windows/browser-assistant",title:"Browser Assistant",description:"AdGuard Assistant\u2019s primary function is to manage filtering directly from the browser. It has existed for quite a long time, and its form and content have changed. More precisely, it used to be a mere userscript incorporated into AdGuard for Windows app and became a full-fledged browser extension. Now it yields more benefits.",source:"@site/docs/adguard-for-windows/browser-assistant.md",sourceDirName:"adguard-for-windows",slug:"/adguard-for-windows/browser-assistant",permalink:"/KnowledgeBase/adguard-for-windows/browser-assistant",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/browser-assistant.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Browser Assistant",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/KnowledgeBase/adguard-for-windows/installation"},next:{title:"WFP driver",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/wfp-driver"}},d={},l=[{value:"Benefits",id:"benefits",level:2},{value:"Independence",id:"independence",level:3},{value:"Compatibility with the main app",id:"compatibility-with-the-main-app",level:3},{value:"Separate tab in settings",id:"separate-tab-in-settings",level:2},{value:"Legacy Assistant",id:"legacy-assistant",level:2},{value:"How to install AdGuard Browser Assistant",id:"how-to-install-adguard-browser-assistant",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"AdGuard Assistant\u2019s primary function is to manage filtering directly from the browser. It has existed for quite a long time, and its form and content have changed. More precisely, it used to be a mere userscript incorporated into AdGuard for Windows app and became a full-fledged browser extension. Now it yields more benefits."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/windows/browser-assistant/assistant-menu.png",alt:"Browser Assistant"})),(0,o.kt)("h2",{id:"benefits"},"Benefits"),(0,o.kt)("h3",{id:"independence"},"Independence"),(0,o.kt)("p",null,"AdGuard Browser Assistant is a browser extension, it is installed in a browser, so there is no need to wait for the userscript to be injected into the filtered web page, as it was with the preceding one. In other words, it is more autonomous from the main AdGuard app. Still, Browser Assistant needs the installed AdGuard for Windows, because there is no point in using the extension without the app."),(0,o.kt)("h3",{id:"compatibility-with-the-main-app"},"Compatibility with the main app"),(0,o.kt)("p",null,"If you got into the habit of using our previous AdGuard Ad Blocker extension ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBase/adguard-browser-extension/integration-mode"},"in Integration mode"),", you may like the solution that we have developed for the new Browser Assistant."),(0,o.kt)("p",null,"Background information:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In previous versions of the AdGuard Browser Extension (before v3.5), if you had it installed along with the AdGuard for Windows app, the extension took over the functions of Assistant, stopped filtering itself and relied on the app to do this.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The extension and the app worked in conjunction but sometimes the integration would fail. Some websites would stop being protected by the desktop program and be backed up only by the less powerful extension. ")),(0,o.kt)("p",null,"When using the Browser Assistant, all these problems don\u2019t matter as there can be no conflicts in essence. The role of the Browser Assistant is well-defined and it can\u2019t hinder the functioning of the main app, so there is no need to worry."),(0,o.kt)("h2",{id:"separate-tab-in-settings"},"Separate tab in settings"),(0,o.kt)("p",null,"The new Browser Assistant has its own tab in AdGuard for Windows settings, along with Stealth Mode, Browsing Security, Parental Control and others. There you will find a link to download the extension for your default browser. Besides, there is a checkbox to enable the legacy Assistant."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png",alt:"Settings"})),(0,o.kt)("h2",{id:"legacy-assistant"},"Legacy Assistant"),(0,o.kt)("p",null,"Legacy Assistant is the previous version of Assistant, which is a mere userscript, not a browser extension. Basically, there are two cases when you might want to pick it instead of the new Browser Assistant: 1) the new Assistant is not available for your browser; 2) you are used to the green shield icon and want to leave things as they were. "),(0,o.kt)("h2",{id:"how-to-install-adguard-browser-assistant"},"How to install AdGuard Browser Assistant"),(0,o.kt)("p",null,"If you want to install the Browser Assistant for your default browser, you can do it directly from the app settings, but you also have an opportunity to install it for other browsers."),(0,o.kt)("p",null,"AdGuard Browser Assistant is available for all popular browsers: Chrome, Firefox, Edge, Opera, and Yandex. To install the one you need (or many, it is not prohibited but even encouraged), go to ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/adguard-assistant/overview.html"},"our website"),", click the browser icon and tap the ",(0,o.kt)("em",{parentName:"p"},"Download")," button. That\u2019s it!"))}p.isMDXComponent=!0}}]);