"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7729],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(4137));const i={title:"How to configure system-wide filtering with AdGuard for iOS",sidebar_position:2},o=void 0,l={unversionedId:"adguard-for-ios/solving-problems/system-wide-filtering",id:"adguard-for-ios/solving-problems/system-wide-filtering",title:"How to configure system-wide filtering with AdGuard for iOS",description:"About system-wide filtering",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/system-wide-filtering.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/system-wide-filtering",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/solving-problems/system-wide-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/system-wide-filtering.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to configure system-wide filtering with AdGuard for iOS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to activate premium features",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/solving-problems/premium-activation"},next:{title:"How to avoid compatibility problem with FaceTime",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/solving-problems/facetime-compatibility-issues"}},s={},d=[{value:"About system-wide filtering",id:"about-system-wide-filtering",level:2},{value:"\u5982\u4f55\u6dfb\u52a0 DNS \u8fc7\u6ee4\u5668/Hosts \u6587\u4ef6",id:"\u5982\u4f55\u6dfb\u52a0-dns-\u8fc7\u6ee4\u5668hosts-\u6587\u4ef6",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-system-wide-filtering"},"About system-wide filtering"),(0,a.kt)("p",null,"System-wide filtering means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. \u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u8bb2\u8ff0\u5982\u4f55\u5728\u60a8\u7684 iOS \u8bbe\u5907\u4e0a\u8bbe\u7f6e\u7cfb\u7edf\u5c42\u9762\u7684\u5e7f\u544a\u62e6\u622a\u3002"),(0,a.kt)("p",null,"\u5728 iOS \u4e0a\uff0c\u4ec5\u6709\u4e00\u4e2a\u65b9\u5f0f\u5141\u8bb8\u6211\u4eec\u5728\u7cfb\u7edf\u5c42\u9762\u4e0a\u62e6\u622a\u5e7f\u544a\u548c\u8ddf\u8e2a\u5668\uff0c\u5c31\u662f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS \u8fc7\u6ee4"),"\u3002 \u9996\u5148\uff0c\u60a8\u9700\u8981\u542f\u7528 DNS \u4fdd\u62a4\u3002 \u4ee5\u542f\u7528 DNS \u4fdd\u62a4\uff0c\u8bf7\u6253\u5f00 ",(0,a.kt)("strong",{parentName:"p"},"AdGuard iOS \u7248\u7684\u8bbe\u7f6e")," \u2014> \u542f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u300cDNS \u4fdd\u62a4\u300d"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection.PNG",alt:"DNS \u4fdd\u62a4\u5c4f\u5e55"})),(0,a.kt)("p",null,"\u5230\u4e86\u8fd9\u4e00\u6b65\uff0c\u5982\u60a8\u7684\u76ee\u6807\u662f\u5728\u7cfb\u7edf\u5c42\u9762\u4e0a\u62e6\u622a\u5e7f\u544a\u548c\u8ddf\u8e2a\u5668\uff0c\u90a3\u4e48\u60a8\u6709\u4e24\u4e2a\u9009\u62e9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u542f\u7528 AdGuard DNS \u670d\u52a1\u5668\uff08",(0,a.kt)("strong",{parentName:"li"},"\u300c\u8bbe\u7f6e\u300d"),"\u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300cDNS \u4fdd\u62a4\u300d"),"\u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300cDNS \u670d\u52a1\u5668\u300d"),"\u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300cAdGuard DNS\u300d"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u80fd\u591f\u62e6\u622a\u5e7f\u544a\u548c\u8ddf\u8e2a\u7f51\u57df\u7684 DNS \u8fc7\u6ee4\u5668/hosts \u6587\u4ef6\uff0c\u5c31\u662f AdGuard DNS \u8fc7\u6ee4\u5668\u3002")),(0,a.kt)("p",null,"\u867d\u7136\u7b2c\u4e8c\u4e2a\u9009\u62e9\u9700\u8981\u82b1\u66f4\u957f\u65f6\u95f4\u8bbe\u7f6e\uff0c\u4f46\u662f\u8fd9\u4e2a\u9009\u62e9\u5177\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4eb2\u81ea\u9009\u62e9\u4efb\u4f55 DNS \u670d\u52a1\u5668\uff0c\u5e76\u4e0d\u9700\u8981\u4f7f\u7528\u67d0\u4e00\u4e2a\u7279\u5b9a\u7684\u62e6\u622a\u670d\u52a1\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u540c\u65f6\u6dfb\u52a0\u51e0\u4e2a DNS \u8fc7\u6ee4\u5668\u548c/\u6216 Hosts \u6587\u4ef6\uff0c\u4f46\u662f\u60a8\u4e0d\u80fd\u540c\u65f6\u4f7f\u7528\u51e0\u4e2a DNS \u670d\u52a1\u5668\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"DNS \u8fc7\u6ee4\u5de5\u4f5c\u539f\u7406"})),(0,a.kt)("h2",{id:"\u5982\u4f55\u6dfb\u52a0-dns-\u8fc7\u6ee4\u5668hosts-\u6587\u4ef6"},"\u5982\u4f55\u6dfb\u52a0 DNS \u8fc7\u6ee4\u5668/Hosts \u6587\u4ef6"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u6dfb\u52a0\u4efb\u4f55\u4e00\u4e2a DNS \u8fc7\u6ee4\u5668\u6216 Hosts \u6587\u4ef6\u3002\u65e0\u8bba\u662f DNS \u8fc7\u6ee4\u5668\u8fd8\u662f Hosts \u6587\u4ef6\uff0c\u8bf4\u660e\u7684\u5185\u5bb9\u90fd\u662f\u4e00\u6837\u7684\u3002 \u6bd4\u5982\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u5c1d\u8bd5\u6dfb\u52a0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardSDNSFilter"},"AdGuard DNS \u8fc7\u6ee4\u5668"),"\u3002 AdGuard DNS \u8fc7\u6ee4\u5668\u662f\u7531\u51e0\u4e2a\u8fc7\u6ee4\u5668\uff08\u5305\u62ec AdGuard \u57fa\u7840\u8fc7\u6ee4\u5668\u3001\u793e\u4ea4\u5a92\u4f53\u8fc7\u6ee4\u5668\u3001\u9632\u8ddf\u8e2a\u4fdd\u62a4\u8fc7\u6ee4\u5668\u3001\u79fb\u52a8\u5e7f\u544a\u8fc7\u6ee4\u5668\u3001EasyList\u3001EasyPrivacy \u7b49\u7b49\uff09\u7ec4\u6210\u7684\u3002\u4e3a\u4e86\u4f7f\u8be5\u8fc7\u6ee4\u5668\u4e0e DNS \u7ea7\u5e7f\u544a\u62e6\u622a\u7684\u517c\u5bb9\u6027\u66f4\u4f73\uff0c\u6211\u4eec\u7279\u5730\u7b80\u5316\u4e86\u5b83\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,a.kt)("strong",{parentName:"li"},"AdGuard iOS \u7248\u7684\u8bbe\u7f6e")," \u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300c\u901a\u7528\u300d"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u542f\u7528",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u6a21\u5f0f"),"\u3002 The ",(0,a.kt)("em",{parentName:"li"},"Advanced settings")," tab will appear. \u6253\u5f00\u5b83\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg",alt:"\u6253\u5f00 AdGuard \u8bbe\u7f6e\u5e76\u542f\u7528\u9ad8\u7ea7\u6a21\u5f0f"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/ios_advanced_settings.PNG",alt:"\u9ad8\u7ea7\u8bbe\u7f6e\u5c4f\u5e55"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6e29\u99a8\u63d0\u793a\uff1a\u6211\u4eec\u4e0d\u63a8\u8350\u60a8\u66f4\u6539\u5176\u5b83",(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u6807\u7b7e\u91cc\u7684\u8bbe\u7f6e\uff0c\u7279\u522b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4f4e\u7ea7\u8bbe\u7f6e"),"\u3002 \u6709\u4e9b\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e92\u8054\u7f51\u8fde\u63a5\u4e2d\u65ad\u6216\u4f1a\u9020\u6210\u60a8\u7684\u9690\u79c1\u5b89\u5168\u88ab\u6cc4\u9732\uff0c\u56e0\u6b64\u60a8\u8981\u4fdd\u6301\u8b66\u60d5\u3002 \u4e0b\u9762\u7684\u5185\u5bb9\u8bb2\u8ff0\u7684\u662f\uff0c\u4e3a\u4e86\u6dfb\u52a0 AdGuard DNS \u8fc7\u6ee4\u5668\u9700\u8981\u8fdb\u884c\u7684\u6b65\u9aa4\u3002")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u590d\u5236\u6b64\u94fe\u63a5\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt"),"\uff08\u8fd9\u662f AdGuard DNS \u8fc7\u6ee4\u5668\u7684\u94fe\u63a5\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,a.kt)("strong",{parentName:"li"},"AdGuard iOS \u7248\u7684\u8bbe\u7f6e")," \u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300cDNS \u4fdd\u62a4\u300d"),"\u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300cDNS \u8fc7\u6ee4\u300d"),"\uff08\u4ec5\u5728",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u6a21\u5f0f"),"\u5f00\u542f\u65f6\u4f7f\u7528\uff09\u2014>",(0,a.kt)("strong",{parentName:"li"},"\u300cDNS \u8fc7\u6ee4\u5668\u300d"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u300c\u6dfb\u52a0\u8fc7\u6ee4\u5668\u300d"),"\u6309\u94ae,\u5728\u8fc7\u6ee4\u5668\u7684 URL \u5b57\u6bb5\u91cc\u7c98\u8d34\u4e0a\u8ff0\u94fe\u63a5\u5e76\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/ios_adding_a_filter.PNG",alt:"\u6dfb\u52a0 DNS \u8fc7\u6ee4\u5668\u7684\u5c4f\u5e55"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u5728\u7b2c\u4e09\u6b65\u7c98\u8d34\u53e6\u4e00\u4e2a\u94fe\u63a5\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528\u540c\u6837\u7684\u65b9\u5f0f\u6dfb\u52a0\u4efb\u4f55\u5176\u5b83\u7684 DNS \u8fc7\u6ee4\u5668\u3002 ",(0,a.kt)("a",{parentName:"p",href:"https://filterlists.com"},"\u5728\u8fd9\u91cc"),"\u60a8\u53ef\u4ee5\u627e\u5230\u5404\u79cd\u8fc7\u6ee4\u5668\u4ee5\u53ca\u5b83\u4eec\u7684\u94fe\u63a5\u3002")))}u.isMDXComponent=!0}}]);