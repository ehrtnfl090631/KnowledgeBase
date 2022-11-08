"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9574],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const o={title:"Protection cannot be enabled",sidebar_position:2},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/protection-cannot-be-enabled",id:"adguard-for-mac/solving-problems/protection-cannot-be-enabled",title:"Protection cannot be enabled",description:"If AdGuard Protection cannot be enabled for some reason, perform the following steps:",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/protection-cannot-be-enabled.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/protection-cannot-be-enabled",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/protection-cannot-be-enabled",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/protection-cannot-be-enabled.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Protection cannot be enabled",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manual certificate installation",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/manual-certificate-installation"},next:{title:"How to install AdGuard on macOS High Sierra and above",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/high-sierra-compatibility"}},c={},p=[],d={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If AdGuard Protection cannot be enabled for some reason, perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the AdGuard icon at the Menu Bar - go to Advanced - Reset settings... and quit AdGuard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Spotlight Search, type Terminal - enter ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo rm -R /Library/Application\\ Support/com.adguard.adguard")," and execute")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your computer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the Terminal again, type ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -al /Library/StagedExtensions/Library/Application\\ Support/com.adguard.adguard/")," and execute. You should receive the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"No such file or directory"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start AdGuard, type in login and password when prompted."))))}s.isMDXComponent=!0}}]);