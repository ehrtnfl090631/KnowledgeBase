"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9003],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(4137));const o={title:"\u53d7\u6d4f\u89c8\u5668\u4fdd\u62a4\u7684\u7f51\u9875",sidebar_position:5},l=void 0,i={unversionedId:"adguard-browser-extension/protected-pages",id:"adguard-browser-extension/protected-pages",title:"\u53d7\u6d4f\u89c8\u5668\u4fdd\u62a4\u7684\u7f51\u9875",description:"\u672c\u6587\u4ecb\u7ecd\u7684\u662f AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u5b83\u4ec5\u4fdd\u62a4\u7528\u6237\u7684\u6d4f\u89c8\u5668\u3002 \u5982\u679c\u9700\u8981\u4fdd\u62a4\u6574\u4e2a\u8bbe\u5907\uff0c\u8bf7\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-browser-extension/protected-pages.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/protected-pages",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/protected-pages",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/protected-pages.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u53d7\u6d4f\u89c8\u5668\u4fdd\u62a4\u7684\u7f51\u9875",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Compatibility with the standalone app",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/compatibility"},next:{title:"How to export logs from the background page",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/solving-problems/logs"}},p={},s=[{value:"Chromium \u6d4f\u89c8\u5668\u9650\u5236",id:"chromium-\u6d4f\u89c8\u5668\u9650\u5236",level:2},{value:"Firefox \u6d4f\u89c8\u5668\u9650\u5236",id:"firefox-\u6d4f\u89c8\u5668\u9650\u5236",level:2},{value:"\u4fee\u6539 Firefox \u6d4f\u89c8\u5668\u7684\u9650\u5236",id:"\u4fee\u6539-firefox-\u6d4f\u89c8\u5668\u7684\u9650\u5236",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u4ecb\u7ecd\u7684\u662f AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u5b83\u4ec5\u4fdd\u62a4\u7528\u6237\u7684\u6d4f\u89c8\u5668\u3002 \u5982\u679c\u9700\u8981\u4fdd\u62a4\u6574\u4e2a\u8bbe\u5907\uff0c\u8bf7",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f"),"\u3002")),(0,a.kt)("p",null,"\u5728\u60a8\u4f7f\u7528\u50cf\u662f AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\u7684\u7f51\u7edc\u6269\u5c55\u7a0b\u5e8f\u65f6\uff0c\u67d0\u4e9b\u53d7\u9650\u57df\u540d\u4f1a\u7981\u6b62\u8bbf\u95ee\u6216\u9650\u5236\u6743\u9650\u3002 \u56e0\u6b64\uff0c\u5e7f\u544a\u62e6\u622a\u6269\u5c55\u65e0\u6cd5\u4e0e\u8fd9\u4e9b\u9875\u9762\u8fdb\u884c\u4ea4\u4e92\u6216\u4fee\u6539\u5176\u5185\u5bb9\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u4e9b\u6269\u5c55\u65e0\u6cd5\u5c4f\u853d\u90a3\u4e9b\u7f51\u9875\u4e0a\u7684\u5e7f\u544a\u548c\u5176\u4ed6\u70e6\u4eba\u7684\u5143\u7d20\u3002"),(0,a.kt)("h2",{id:"chromium-\u6d4f\u89c8\u5668\u9650\u5236"},"Chromium \u6d4f\u89c8\u5668\u9650\u5236"),(0,a.kt)("p",null,"\u57fa\u4e8e Chromium \u7684\u6d4f\u89c8\u5668\uff08\u5982 Google \u6d4f\u89c8\u5668\uff09\u4f1a\u7ef4\u62a4\u4e00\u4e2a\u4e0d\u5141\u8bb8\u6269\u5c55\u7a0b\u5e8f\u8bbf\u95ee\u7684\u53d7\u9650\u57df\u540d\u5217\u8868\u3002 \u8fd9\u4e9b\u57df\u540d\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clients.google.com"),(0,a.kt)("li",{parentName:"ul"},"clients","[0-9]","+.google.com"),(0,a.kt)("li",{parentName:"ul"},"sb-ssl.google.com"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"chrome://"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"chrome-extension://"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"https://chrome.google.com/webstore/")," \u5f00\u5934\u7684 URL"),(0,a.kt)("li",{parentName:"ul"},"PDF \u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u7981\u7528 Javascript \u7684\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u5168\u8b66\u544a\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u9519\u8bef\u9875\u9762\uff0c\u5982 404 \u9519\u8bef\u548c\u7f51\u7edc\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"view-source:")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"data:")," \u5f00\u5934\u7684 URL")),(0,a.kt)("h2",{id:"firefox-\u6d4f\u89c8\u5668\u9650\u5236"},"Firefox \u6d4f\u89c8\u5668\u9650\u5236"),(0,a.kt)("p",null,"\u540c\u6837\uff0cFirefox \u6d4f\u89c8\u5668\u4e5f\u6709\u81ea\u5df1\u7684\u4e00\u7ec4\u4e0d\u5141\u8bb8\u8fd0\u884c\u6269\u5c55\u7a0b\u5e8f\u7684\u53d7\u9650\u57df\u540d\u3002 \u8fd9\u4e9b\u53d7\u9650\u57df\u540d\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"accounts-static.cdn.mozilla.net"),(0,a.kt)("li",{parentName:"ul"},"accounts.firefox.com"),(0,a.kt)("li",{parentName:"ul"},"addons.cdn.mozilla.net --"),(0,a.kt)("li",{parentName:"ul"},"addons.mozilla.org"),(0,a.kt)("li",{parentName:"ul"},"api.accounts.firefox.com"),(0,a.kt)("li",{parentName:"ul"},"content.cdn.mozilla.net"),(0,a.kt)("li",{parentName:"ul"},"discovery.addons.mozilla.org"),(0,a.kt)("li",{parentName:"ul"},"install.mozilla.org"),(0,a.kt)("li",{parentName:"ul"},"oauth.accounts.firefox.com"),(0,a.kt)("li",{parentName:"ul"},"profile.accounts.firefox.com"),(0,a.kt)("li",{parentName:"ul"},"support.mozilla.org"),(0,a.kt)("li",{parentName:"ul"},"sync.services.mozilla.com")),(0,a.kt)("h2",{id:"\u4fee\u6539-firefox-\u6d4f\u89c8\u5668\u7684\u9650\u5236"},"\u4fee\u6539 Firefox \u6d4f\u89c8\u5668\u7684\u9650\u5236"),(0,a.kt)("p",null,"\u66f4\u6539\u9ad8\u7ea7\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5f71\u54cd Firefox \u6d4f\u89c8\u5668\u7684\u7a33\u5b9a\u6027\u548c\u5b89\u5168\u6027\u3002 \u4ec5\u63a8\u8350\u9ad8\u7ea7\u7528\u6237\u66f4\u6539\u8bbe\u7f6e\u3002 \u5982\u679c\u60a8\u5df2\u4e86\u89e3\u76f8\u5173\u98ce\u9669\uff0c\u4f46\u4ecd\u5e0c\u671b\u542f\u7528\u53d7\u4fdd\u62a4\u9875\u9762\u4e2d\u88ab\u7981\u6b62\u7684\u6269\u5c55\u7a0b\u5e8f\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u83dc\u5355\u6309\u94ae \u2192\u300c",(0,a.kt)("strong",{parentName:"li"},"\u6269\u5c55\u4e0e\u4e3b\u9898"),"\u300d\u2192\u300c",(0,a.kt)("strong",{parentName:"li"},"\u6269\u5c55\u7a0b\u5e8f"),"\u300d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u8981\u5728\u53d7\u9650\u5236\u7f51\u7ad9\u4e0a\u542f\u7528\u7684\u6269\u5c55\uff08\u672c\u4f8b\u4e2d\u4e3a AdGuard\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u300c",(0,a.kt)("strong",{parentName:"li"},"\u5728\u53d7\u9650\u7ad9\u70b9\u4e0a\u8fd0\u884c"),"\u300d\u4e2d\u9009\u62e9\u300c",(0,a.kt)("strong",{parentName:"li"},"\u5141\u8bb8"),"\u300d\u3002")),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u4e5f\u53ef\u4ee5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00\u4e00\u4e2a\u65b0\u6807\u7b7e\u9875\uff0c\u5728\u5730\u5740\u680f\u4e2d\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"li"},"about:config"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6309\u300c",(0,a.kt)("strong",{parentName:"li"},"\u8fd4\u56de"),"\u300d\u3002 \u60a8\u53ef\u80fd\u4f1a\u6536\u5230\u8b66\u544a\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5355\u51fb\u300c",(0,a.kt)("strong",{parentName:"li"},"\u63a5\u53d7\u98ce\u9669\u5e76\u7ee7\u7eed"),"\u300d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u641c\u7d22 ",(0,a.kt)("inlineCode",{parentName:"li"},"extensions.webextensions.restrictedDomains"),"\u3002 \u5982\u679c\u60a8\u627e\u4e0d\u5230\u6b64\u9996\u9009\u9879\uff0c\u53ef\u4ee5\u76f4\u63a5\u521b\u5efa\u3002 \u53ea\u9700\u9009\u62e9\u300c",(0,a.kt)("strong",{parentName:"li"},"Boolean"),"\u300d\u7c7b\u578b\uff0c\u7136\u540e\u5355\u51fb\u300c",(0,a.kt)("strong",{parentName:"li"},"+"),"\u300d\u6dfb\u52a0\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u8be5\u9996\u9009\u9879\u65c1\u8fb9\u7684\u5207\u6362\u6309\u94ae\uff0c\u5c06\u5176\u503c\u66f4\u6539\u4e3a\u300c",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u300d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f Firefox \u6d4f\u89c8\u5668\u3002")),(0,a.kt)("p",null,"\u6709\u5173\u8fd9\u65b9\u9762\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://mzl.la/3POXoWi"},"Mozilla \u652f\u6301\u7f51\u7ad9\u7684\u6587\u7ae0"),"\u3002"))}m.isMDXComponent=!0}}]);