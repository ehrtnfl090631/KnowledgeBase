"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1825],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(4137));const o={title:"\u5bf9 AdGuard \u8fc7\u6ee4\u5668\u505a\u51fa\u8d21\u732e",sidebar_position:4},i=void 0,l={unversionedId:"miscellaneous/contribute/filters",id:"miscellaneous/contribute/filters",title:"\u5bf9 AdGuard \u8fc7\u6ee4\u5668\u505a\u51fa\u8d21\u732e",description:"\u8fc7\u6ee4\u89c4\u5219",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/contribute/filters.md",sourceDirName:"miscellaneous/contribute",slug:"/miscellaneous/contribute/filters",permalink:"/KnowledgeBase/zh-CN/miscellaneous/contribute/filters",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/filters.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5bf9 AdGuard \u8fc7\u6ee4\u5668\u505a\u51fa\u8d21\u732e",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Writing about AdGuard",permalink:"/KnowledgeBase/zh-CN/miscellaneous/contribute/writing-about-adguard"},next:{title:"AdGuard \u7ffb\u8bd1",permalink:"/KnowledgeBase/zh-CN/miscellaneous/contribute/translate/program"}},u={},s=[{value:"\u8fc7\u6ee4\u89c4\u5219",id:"#filtering-rules",level:3},{value:"\u5982\u4f55\u5f00\u59cb",id:"how-to-start",level:3},{value:"\u5956\u52b1",id:"rewards",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"#filtering-rules"},"\u8fc7\u6ee4\u89c4\u5219"),(0,a.kt)("p",null,"\u53ef\u80fd\u4f17\u6240\u5468\u77e5\uff0cAdGuard \u4f7f\u7528\u8fc7\u6ee4\u89c4\u5219\u62e6\u622a\u5e7f\u544a\u3002\u8fd9\u4e9b\u89c4\u5219\u88ab\u7ec4\u5408\u6210\u4e0d\u540c\u4e3b\u9898\u7684",(0,a.kt)("a",{parentName:"p",href:"https://kb.adguard.com/general/adguard-ad-filters"},"\u62e6\u622a\u8fc7\u6ee4\u5668"),"\uff0c\u4f8b\u5982\uff0cAdGuard \u57fa\u7840\u8fc7\u6ee4\u5668\uff0c\u79fb\u52a8\u5e7f\u544a\u8fc7\u6ee4\u5668\u7b49\u7b49\u3002",(0,a.kt)("a",{parentName:"p",href:"https://kb.adguard.com/general/how-ad-blocking-works"},"\u672c\u77e5\u8bc6\u5e93\u7684\u6587\u7ae0\u5185\u5bb9"),"\u5305\u62ec\u66f4\u591a\u5173\u4e8e\uff0c\u5982\u4f55\u62e6\u622a\u5e7f\u544a\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u8bb8\u591a\u7f51\u7ad9\u4f1a\u4e0d\u65ad\u66f4\u6539\u63d2\u5165\u5e7f\u544a\u7684\u65b9\u5f0f\u3002\u4e3a\u4e86\u8fc7\u6ee4\u5668\u4fdd\u6301\u6709\u6548\uff0c\u6211\u4eec\u8981\u6301\u7eed\u66f4\u65b0\u8fc7\u6ee4\u5668\u4ee5\u53ca\u6dfb\u52a0\u65b0\u89c4\u5219\u3002 \u8fc7\u6ee4\u5668\u5de5\u7a0b\u5e08\u4e00\u76f4\u90fd\u5728\u52aa\u529b\u521b\u5efa\u65b0\u89c4\u5219\uff0c\u4f46\u662f\u6211\u4eec\u4e5f\u975e\u5e38\u613f\u610f\u63a5\u53d7\u4e00\u4e9b\u5916\u754c\u7684\u5e2e\u52a9\u3002"),(0,a.kt)("h3",{id:"how-to-start"},"\u5982\u4f55\u5f00\u59cb"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u6539\u8fdb\u5e76\u521b\u5efa\u62e6\u622a\u8fc7\u6ee4\u5668\u9700\u8981\u6709\u7279\u5b9a\u7684\u6280\u80fd\u3002 \u5982\u679c\u60a8\u5df2\u7ecf\u4e86\u89e3\u5982\u4f55\u521b\u5efa\u89c4\u5219\uff0c\u8bf7\u76f4\u63a5\u8bbf\u95ee\u6211\u4eec\u5728 GitHub \u4e0a\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardFilters"},"AdGuard \u8fc7\u6ee4\u5668\u5b58\u50a8\u5e93"),"\u3002 \u5728\u90a3\u91cc\uff0c\u60a8\u53ef\u53d1\u73b0\u5f88\u591a\u5f85\u89e3\u51b3\u7684\u95ee\u9898\u3002\u6bcf\u4e2a\u95ee\u9898\u90fd\u6d89\u53ca\u67d0\u4e2a\u7f51\u7ad9\u4e0a\u7684\u95ee\u9898\uff0c\u5305\u62ec\u5e7f\u544a\u6f0f\u6d1e\uff0c\u9519\u8bef\u62a5\u544a\u7b49\u7b49\u3002 \u9009\u62e9\u4efb\u4f55\u4e00\u4e2a\u95ee\u9898\u5e76\u5728\u6ce8\u91ca\u4e2d\u5efa\u8bae\u60a8\u4e2a\u4eba\u7684\u89c4\u5219\uff0c AdGuard \u8fc7\u6ee4\u5668\u5de5\u7a0b\u5e08\u5c06\u5ba1\u6838\u60a8\u7684\u5efa\u8bae\u3002 \u5982\u679c\u6b63\u786e\uff0c\u5219\u60a8\u7684\u89c4\u5219\u4f1a\u88ab\u6dfb\u52a0\u5230 AdGuard \u8fc7\u6ee4\u5668\u4e2d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8fd8\u4e0d\u592a\u719f\u6089\u6216\u8005\u9700\u8981\u590d\u4e60\u6211\u4eec\u7684\u8fc7\u6ee4\u89c4\u5219\u8bed\u6cd5\uff0c\u5219\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"https://kb.adguard.com/general/how-to-create-your-own-ad-filters"},"\u5728\u6211\u4eec\u7684\u77e5\u8bc6\u5e93\u4e2d"),"\u627e\u5230\u6709\u5173\u8bed\u6cd5\u7684\u57fa\u7840\u77e5\u8bc6\u3002 \u5f53\u7136\uff0c\u5728\u7f51\u4e0a\u8fd8\u53ef\u4ee5\u627e\u5230\u66f4\u591a\u9ad8\u7ea7\u6307\u5357\u3002\u5982\u679c\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u60a8\u8bbf\u95ee\u6211\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"https://forum.adguard.com/"},"\u8bba\u575b"),"\u3002"),(0,a.kt)("h3",{id:"rewards"},"\u5956\u52b1"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u5df2\u7ecf\u63d0\u51fa\u4e86\u4e00\u4e9b\u8fc7\u6ee4\u89c4\u5219\uff0c\u4e14\u5176\u4e2d\u4e00\u4e9b\u8fd8\u88ab\u6279\u51c6\u901a\u8fc7\u4e86\uff0c\u60a8\u53ef\u4ee5\u83b7\u53d6\u5956\u52b1\u4e86\u3002 \u4f7f\u7528\u60a8\u7684 GitHub \u8d26\u53f7\u5411 ",(0,a.kt)("a",{parentName:"p",href:"mailto:st@adguard.com"},"st@adguard.com")," \u4e0a\u7ed9\u6211\u4eec\u53d1\u9001\u6d88\u606f\uff0c\u5373\u53ef\u83b7\u53d6\u514d\u8d39\u7684 AdGuard \u8bb8\u53ef\u5bc6\u94a5\u3002 \u6211\u4eec\u5e76\u6ca1\u6709\u786c\u6027\u89c4\u5b9a\uff0c\u81f3\u5c11\u9700\u8981\u83b7\u5f97\u591a\u5c11\u4e2a\u89c4\u5219\u6279\u51c6\u624d\u80fd\u83b7\u5f97\u514d\u8d39\u8bb8\u53ef\u3002 \u4e0d\u8fc7\u8003\u8651\u5230\u8fd9\u4e2a\u4efb\u52a1\u7684\u96be\u5ea6\u7cfb\u6570\uff0c\u5927\u7ea6\u4e94\u4e2a\u88ab\u6279\u51c6\u7684\u89c4\u5219\u5c31\u8db3\u591f\u4e86\u3002"))}d.isMDXComponent=!0}}]);