"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5836],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=d(r),p=i,h=f["".concat(o,".").concat(p)]||f[p]||c[p]||n;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<n;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(7462),i=(r(7294),r(4137));const n={title:"Tracking filter rules statistics",sidebar_position:4},s=void 0,l={unversionedId:"general/ad-filtering/tracking-filter-statistics",id:"general/ad-filtering/tracking-filter-statistics",title:"Tracking filter rules statistics",description:"NOTE: The \u201cSend statistics for ad filters usage\u201d option is disabled by default. Nothing will be sent unless user manually enables it to help us improve our blocking filters.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/general/ad-filtering/tracking-filter-statistics.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/tracking-filter-statistics",permalink:"/KnowledgeBase/ru/general/ad-filtering/tracking-filter-statistics",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/tracking-filter-statistics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Tracking filter rules statistics",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Search ads and self-promotion",permalink:"/KnowledgeBase/ru/general/ad-filtering/search-ads"},next:{title:"\u041a\u0430\u043a \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u044b",permalink:"/KnowledgeBase/ru/general/ad-filtering/create-own-filters"}},o={},d=[{value:"Why do we need ad filters?",id:"why-do-we-need-ad-filters",level:3},{value:"Why do we need statistics?",id:"why-do-we-need-statistics",level:3},{value:"What kind of statistics will be sent?",id:"what-kind-of-statistics-will-be-sent",level:3},{value:"What does tracking filter rules statistics fraught with?",id:"what-does-tracking-filter-rules-statistics-fraught-with",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,i.kt)("em",{parentName:"p"},"\u201cSend statistics for ad filters usage\u201d")," option is disabled by default. Nothing will be sent unless user manually enables it to help us improve our blocking filters.")),(0,i.kt)("h3",{id:"why-do-we-need-ad-filters"},"Why do we need ad filters?"),(0,i.kt)("p",null,"Let's start by defining what ad filters are. Thanks to these filters, AdGuard removes ads from websites. They are manually compiled based on your complaints about ads on websites. Ad filters are an essential element of AdGuard \u2014 their quality determines the overall quality of AdGuard ad blocking."),(0,i.kt)("p",null,"However, there is a downside. Over the years, more and more ad filters have been appearing. And the more ad filters are there, the more memory AdGuard consumes, thus slowing down the rendering of web pages. At the same time, some of the filters start to expire, gradually becoming a dead weight that has no use, only consumes memory, and slows down the program."),(0,i.kt)("h3",{id:"why-do-we-need-statistics"},"Why do we need statistics?"),(0,i.kt)("p",null,"We want to solve the problem of outdated filtering rules once and for all. But we need your help to do so. By gathering statistics on used filtering rules, we detect and remove the rules that are no longer used. As a result, it will help all those who use AdGuard."),(0,i.kt)("p",null,"If your computer is powerful enough, it won\u2019t really affect you. But the difference will be very noticeable for users of low-power netbooks or tablets."),(0,i.kt)("h3",{id:"what-kind-of-statistics-will-be-sent"},"What kind of statistics will be sent?"),(0,i.kt)("p",null,"If you enable the ",(0,i.kt)("em",{parentName:"p"},"Send statistics for ad filters usage")," option, the following information is sent periodically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extension version"),(0,i.kt)("li",{parentName:"ul"},"Browser type (Chrome/Firefox/Opera/Yandex.Browser/Safari)."),(0,i.kt)("li",{parentName:"ul"},"List of enabled ad filters."),(0,i.kt)("li",{parentName:"ul"},"The list that consists of the following elements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The domain name of the website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The number of recent page views")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The list of filtering rules and Filter ID which were activated on this website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The domain name of blocked requests is sent for URL rules")," The list is created based on the website's visit statistics since the last time statistical data was sent.")))),(0,i.kt)("p",null,"The collected statistics will be sent periodically to our server for analysis and filter optimization."),(0,i.kt)("p",null,"It's important to note that all the statistics we get are averaged and anonymized. We don't use these statistics for any purpose other than optimizing the filters, and we do not sell this data to third parties. You can read about our Privacy Policy ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"here"),"."),(0,i.kt)("h3",{id:"what-does-tracking-filter-rules-statistics-fraught-with"},"What does tracking filter rules statistics fraught with?"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u0434\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435 \u043e\u0441\u043e\u0431\u043e \u0437\u0430\u043c\u0435\u0442\u043d\u043e. However, netbook and tablet users may notice a slight slowdown."),(0,i.kt)("p",null,"Periodically, we will send the gathered statistics to the server. The size of the transmitted data is not very large and is comparable to the size of an average web page."))}c.isMDXComponent=!0}}]);