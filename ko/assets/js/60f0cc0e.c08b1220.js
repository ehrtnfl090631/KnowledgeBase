"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6051],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,m=c["".concat(d,".").concat(f)]||c[f]||p[f]||n;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),o=(r(7294),r(4137));const n={title:"How to collect logs in AdGuard for Safari",sidebar_position:4},i=void 0,l={unversionedId:"adguard-for-safari/solving-problems/logs",id:"adguard-for-safari/solving-problems/logs",title:"How to collect logs in AdGuard for Safari",description:"Safari \ube0c\ub77c\uc6b0\uc800\ub9cc \ubcf4\ud638\ud558\ub294 Safari\uc6a9 AdGuard\uc5d0 \uad00\ud55c \ubb38\uc11c\uc785\ub2c8\ub2e4. To protect your entire device, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-safari/solving-problems/logs.md",sourceDirName:"adguard-for-safari/solving-problems",slug:"/adguard-for-safari/solving-problems/logs",permalink:"/KnowledgeBase/ko/adguard-for-safari/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to collect logs in AdGuard for Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Filtering doesn\u2019t stop when AdGuard for Safari is disabled",permalink:"/KnowledgeBase/ko/adguard-for-safari/solving-problems/filters-after-disable"},next:{title:"AdGuard for Safari doesn\u2019t work in private tabs on macOS Sonoma",permalink:"/KnowledgeBase/ko/adguard-for-safari/solving-problems/private-sonoma"}},d={},s=[{value:"\ub85c\uadf8 \uc218\uc9d1 \ubc29\ubc95",id:"\ub85c\uadf8-\uc218\uc9d1-\ubc29\ubc95",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Safari \ube0c\ub77c\uc6b0\uc800\ub9cc \ubcf4\ud638\ud558\ub294 Safari\uc6a9 AdGuard\uc5d0 \uad00\ud55c \ubb38\uc11c\uc785\ub2c8\ub2e4. To protect your entire device, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("p",null,"To analyze and diagnose various problems that may occur with AdGuard for Safari, the AdGuard support service may need its log files. These files contain records of errors and other software events. Below are brief instructions on how to collect logs and send them to support if necessary."),(0,o.kt)("h3",{id:"\ub85c\uadf8-\uc218\uc9d1-\ubc29\ubc95"},"\ub85c\uadf8 \uc218\uc9d1 \ubc29\ubc95"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard for Safari app."),(0,o.kt)("li",{parentName:"ol"},"Scroll down and click ",(0,o.kt)("em",{parentName:"li"},"Export logs"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a location to save the .zip file and click ",(0,o.kt)("em",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,"Now you can send this file to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com")," or attach it to your bug report on GitHub."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AdGuard is committed to protecting your privacy. We strictly follow our ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy/safari.html"},"Privacy Policy")," and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don\u2019t want to share. If it contains such personal information, we recommend that you delete it first.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"AdGuard for Safari GitHub repo")," and click ",(0,o.kt)("em",{parentName:"li"},"New issue"),"."),(0,o.kt)("li",{parentName:"ol"},"Send the log file to ",(0,o.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Include the time of the bug and attach a link to your issue or its number (it appears as #number next to the title).\nAlternatively, you can upload the log file to Google Drive and send it to ",(0,o.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Add the file link to your GitHub issue.")))}p.isMDXComponent=!0}}]);