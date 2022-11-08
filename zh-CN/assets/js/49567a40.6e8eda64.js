"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4656],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=n,k=s["".concat(l,".").concat(m)]||s[m]||c[m]||o;return r?a.createElement(k,p(p({ref:t},u),{},{components:r})):a.createElement(k,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var d=2;d<o;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",sidebar_position:2},p=void 0,i={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",description:"\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f (\u9002\u7528\u4e8e Windows \u548c Mac \u7684 AdGuard) \u53ef\u4ee5\u7528\u4f5c\u4ee3\u7406\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u901a\u8fc7 AdGuard \u8def\u7531\u5176\u4ed6\u8bbe\u5907\u7684\u6d41\u91cf\uff08\u5168\u90e8\u6216\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u6216\u6d4f\u89c8\u5668\u7684\u6d41\u91cf\uff09\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/zh-CN/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to collect a HAR file",permalink:"/KnowledgeBase/zh-CN/guides/collect-har-file"},next:{title:"\u62a5\u544a\u7f51\u7ad9",permalink:"/KnowledgeBase/zh-CN/guides/report-website"}},l={},d=[{value:"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66",id:"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66",level:2},{value:"\u5b89\u5353\u7cfb\u7edf",id:"android",level:3},{value:"iOS \u7cfb\u7edf",id:"ios",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f (\u9002\u7528\u4e8e Windows \u548c Mac \u7684 AdGuard) \u53ef\u4ee5\u7528\u4f5c\u4ee3\u7406\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u901a\u8fc7 AdGuard \u8def\u7531\u5176\u4ed6\u8bbe\u5907\u7684\u6d41\u91cf\uff08\u5168\u90e8\u6216\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u6216\u6d4f\u89c8\u5668\u7684\u6d41\u91cf\uff09\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e9b\u8bbe\u5907\u5fc5\u987b\u4e0e\u5df2\u5b89\u88c5 AdGuard \u7684 PC \u6216 Mac \u4f4d\u4e8e\u540c\u4e00\u7f51\u7edc\u4e2d\u3002")),(0,n.kt)("p",null,"\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0cHTTP \u6d41\u91cf\u90fd\u4f1a\u88ab\u8fc7\u6ee4\uff0c\u4f46\u662f\u8981\u4f7f AdGuard \u80fd\u591f\u8fc7\u6ee4 HTTPS \u6d41\u91cf\uff0c\u60a8\u9700\u8981\u5728\u8fde\u63a5\u7684\u8bbe\u5907\u4e0a\u624b\u52a8\u5b89\u88c5 AdGuard \u8bc1\u4e66\u3002"),(0,n.kt)("h2",{id:"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66"},"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66"),(0,n.kt)("p",null,"\u6839\u636e\u60a8\u8bbe\u5907\u7684\u7c7b\u578b (Android / iOS)\uff0c\u8bf7\u9075\u5b88\u4ee5\u4e0b\u8bf4\u660e\u4e2d\u7684\u4e00\u6761\uff1a"),(0,n.kt)("h3",{id:"android"},"\u5b89\u5353\u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u88c5\u6709 AdGuard \u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u8981\u901a\u8fc7 AdGuard \u8def\u7531\u6d41\u91cf\u7684\u8bbe\u5907\u4e0a\uff0c\u6253\u5f00\u4e3b\u52a8 WiFi \u7f51\u7edc\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7c7b\u578b"),"\u5207\u6362\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8"),"\u3002 \u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u4e3b\u673a\u540d"),"\uff0c\u8bf7\u8f93\u5165\u5728\u7b2c\u4e00\u6b65\u8bb0\u4e0b\u7684 IP \u5730\u5740\u3002 \u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7aef\u53e3"),"\uff0c\u8f93\u5165\u5728\u684c\u9762 AdGuard \u7684\u7f51\u7edc\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u7aef\u53e3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u6fc0\u6d3b AdGuard \u5e76\u5728\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u8bbe\u7f6e\u4e2d\u9009\u4e2d\u6846",(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528 AdGuard \u4f5c\u4e3a HTTP \u4ee3\u7406")," \u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4efb\u4f55\u6d4f\u89c8\u5668\u8bbf\u95ee\u6b64\u94fe\u63a5\uff1a",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u6309\u94ae\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bc1\u4e66\u4e0b\u8f7d\u540e\uff0c\u9700\u8981\u5b89\u88c5\u5b83\u3002 \u5982\u679c\u672a\u81ea\u52a8\u6253\u5f00\uff0c\u8bf7\u70b9\u51fb\u4e0b\u8f7d\u7684\u8bc1\u4e66\u4ee5\u6253\u5f00\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u624b\u673a\u4e0a\uff0c\u53ef\u80fd\u4f1a\u8981\u6c42\u60a8\u8f93\u5165\u8bbe\u5907\u5bc6\u7801\u3002 \u7136\u540e\u518d\u6309",(0,n.kt)("strong",{parentName:"p"},"\u786e\u5b9a"),"\u3002 \u8bc1\u4e66\u5b89\u88c5\u6210\u529f\u3002"))),(0,n.kt)("h3",{id:"ios"},"iOS \u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u88c5\u6709 AdGuard \u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u8981\u901a\u8fc7 AdGuard \u8def\u7531\u6d41\u91cf\u7684\u8bbe\u5907\u4e0a\uff0c\u6253\u5f00\u4e3b\u52a8 WiFi \u7f51\u7edc\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7c7b\u578b"),"\u5207\u6362\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8"),"\u3002 \u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u4e3b\u673a\u540d"),"\uff0c\u8bf7\u8f93\u5165\u5728\u7b2c\u4e00\u6b65\u8bb0\u4e0b\u7684 IP \u5730\u5740\u3002 \u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7aef\u53e3"),"\uff0c\u8f93\u5165\u5728\u684c\u9762 AdGuard \u7684\u7f51\u7edc\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u7aef\u53e3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u6fc0\u6d3b AdGuard \u5e76\u5728\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u8bbe\u7f6e\u4e2d\u9009\u4e2d\u6846",(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528 AdGuard \u4f5c\u4e3a HTTP \u4ee3\u7406")," \u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00 Safari \u6d4f\u89c8\u5668\uff0c\u8f6c\u5230 ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," \u5e76\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u3002 \u5728\u6253\u5f00\u7684\u5bf9\u8bdd\u6846\u4e2d\uff0c\u5141\u8bb8\u7f51\u7ad9\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e")," -> ",(0,n.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d"),"\uff0c\u7136\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5b89\u88c5"),"\u3002 \u8f93\u5165\u5bc6\u7801\u5e76\u786e\u8ba4\u5b89\u88c5\u3002 \u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e")," -> ",(0,n.kt)("strong",{parentName:"p"},"\u5e38\u89c4")," -> ",(0,n.kt)("strong",{parentName:"p"},"\u5173\u4e8e")," -> ",(0,n.kt)("strong",{parentName:"p"},"\u8bc1\u4e66\u4fe1\u4efb\u8bbe\u7f6e"),"\u3002 \u542f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"Adguard Personal CA")," \u65c1\u8fb9\u7684\u5f00\u5173\u3002 \u8bc1\u4e66\u5b89\u88c5\u6210\u529f\u3002"))))}c.isMDXComponent=!0}}]);