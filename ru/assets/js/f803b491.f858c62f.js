"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8422],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,g=m["".concat(i,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const a={title:"How to collect Windows system logs",sidebar_position:5},s=void 0,l={unversionedId:"adguard-for-windows/solving-problems/system-logs",id:"adguard-for-windows/solving-problems/system-logs",title:"How to collect Windows system logs",description:"To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/system-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/system-logs",permalink:"/KnowledgeBase/ru/adguard-for-windows/solving-problems/system-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/system-logs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to collect Windows system logs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to collect AdGuard installation logs",permalink:"/KnowledgeBase/ru/adguard-for-windows/solving-problems/installation-logs"},next:{title:"Common installer errors",permalink:"/KnowledgeBase/ru/adguard-for-windows/solving-problems/common-installer-errors"}},i={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("strong",{parentName:"p"},"Win + R"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the window that appears type in ",(0,o.kt)("inlineCode",{parentName:"p"},"eventvwr")," and click on ",(0,o.kt)("strong",{parentName:"p"},"OK"),":"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png",alt:"Run window"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Event Viewer window appears as shown in the picture.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png",alt:"Event viewer"})),(0,o.kt)("p",null,"To save files that we need, do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Application"),": ",(0,o.kt)("strong",{parentName:"p"},"Event Viewer (Local)")," -> ",(0,o.kt)("strong",{parentName:"p"},"Windows Logs")," -> ",(0,o.kt)("strong",{parentName:"p"},"Application"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Right-click on the ",(0,o.kt)("strong",{parentName:"p"},"Application")," and in drop-down menu select ",(0,o.kt)("strong",{parentName:"p"},"Save All Events As..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select a name and where to save, click ",(0,o.kt)("strong",{parentName:"p"},"Save"),". Select ",(0,o.kt)("strong",{parentName:"p"},"Display information for the following languages"),". You need to tick the box next to ",(0,o.kt)("strong",{parentName:"p"},"English"),". Click ",(0,o.kt)("strong",{parentName:"p"},"OK"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"System"),": ",(0,o.kt)("strong",{parentName:"p"},"Event Viewer (Local)")," -> ",(0,o.kt)("strong",{parentName:"p"},"Windows Logs")," ->  ",(0,o.kt)("strong",{parentName:"p"},"System"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Right-click on ",(0,o.kt)("strong",{parentName:"p"},"System")," and in the drop-down menu, select ",(0,o.kt)("strong",{parentName:"p"},"Save All Events As..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose a destination folder, enter the name, click ",(0,o.kt)("strong",{parentName:"p"},"Save"),". Select ",(0,o.kt)("strong",{parentName:"p"},"Display information for the following languages"),". You need to tick the box next to ",(0,o.kt)("strong",{parentName:"p"},"English"),". Click ",(0,o.kt)("strong",{parentName:"p"},"OK"),"."))),(0,o.kt)("p",null,"Please send the two files that you've recently saved to the AdGuard support service at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),"."))}c.isMDXComponent=!0}}]);