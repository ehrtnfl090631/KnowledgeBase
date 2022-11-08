"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7119],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7462),o=(n(7294),n(4137));const a={title:"How to collect AdGuard installation logs",sidebar_position:4},l=void 0,i={unversionedId:"adguard-for-windows/solving-problems/installation-logs",id:"adguard-for-windows/solving-problems/installation-logs",title:"How to collect AdGuard installation logs",description:"If any problems occur during the installation of AdGuard, the support team might ask you to collect and send them AdGuard installation logs. In this case you need to:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/installation-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/installation-logs",permalink:"/KnowledgeBase/ru/adguard-for-windows/solving-problems/installation-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/installation-logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to collect AdGuard installation logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043b\u043e\u0433\u0438 AdGuard",permalink:"/KnowledgeBase/ru/adguard-for-windows/solving-problems/adguard-logs"},next:{title:"How to collect Windows system logs",permalink:"/KnowledgeBase/ru/adguard-for-windows/solving-problems/system-logs"}},s={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If any problems occur during the installation of AdGuard, the support team might ask you to collect and send them AdGuard installation logs. In this case you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Run")," command in Start menu or press ",(0,o.kt)("strong",{parentName:"p"},"Win + R")," on the keyboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in ",(0,o.kt)("strong",{parentName:"p"},"%tmp%")," and click ",(0,o.kt)("strong",{parentName:"p"},"OK"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/windows/solving-problems/install-logs-1.png",alt:"Open temp folder"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the opened folder select all files starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"Adguard")," and add them to archive (using WinRAR or any other archiving software).")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/windows/solving-problems/install-logs-2.png",alt:"AdGuard installation log files"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Send this archive to AdGuard ",(0,o.kt)("a",{parentName:"li",href:"/KnowledgeBase/ru/support/contact"},"tech support"),".")))}c.isMDXComponent=!0}}]);