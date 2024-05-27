"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6758],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(o),h=a,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return o?r.createElement(g,n(n({ref:t},u),{},{components:o})):r.createElement(g,n({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var d=2;d<i;d++)n[d]=o[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7221:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(7462),a=(o(7294),o(4137));const i={title:"\u6d4f\u89c8\u5b89\u5168",sidebar_position:3},n=void 0,s={unversionedId:"general/browsing-security",id:"general/browsing-security",title:"\u6d4f\u89c8\u5b89\u5168",description:"Every day, tens of thousands of people fall prey to virus attacks or fraud on the Internet. We have added special filters to the AdGuard app to protect you from malicious and phishing websites.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/general/browsing-security.md",sourceDirName:"general",slug:"/general/browsing-security",permalink:"/KnowledgeBase/zh-CN/general/browsing-security",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/browsing-security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6d4f\u89c8\u5b89\u5168",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Local.adguard.org \u57df\u540d",permalink:"/KnowledgeBase/zh-CN/general/https-filtering/local-adguard-com-domain"},next:{title:"\u9690\u8eab\u6a21\u5f0f",permalink:"/KnowledgeBase/zh-CN/general/stealth-mode"}},l={},d=[{value:"How does a check work?",id:"how-does-a-check-work",level:2},{value:"AdGuard for Windows, Mac, and Android",id:"adguard-for-windows-mac-and-android",level:3},{value:"AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:3},{value:"AdGuard \u8fc7\u6ee4\u5668",id:"adguard-\u8fc7\u6ee4\u5668",level:2},{value:"Phishing sites filter",id:"phishing-sites-filter",level:3},{value:"Malicious sites filter",id:"malicious-sites-filter",level:3},{value:"How do we add new addresses to our filters?",id:"how-do-we-add-new-addresses-to-our-filters",level:2},{value:"AdGuard Browsing security Community",id:"adguard-browsing-security-community",level:3},{value:"Want to help?",id:"want-to-help",level:3},{value:"False-positive responses",id:"false-positive-responses",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every day, tens of thousands of people fall prey to virus attacks or fraud on the Internet. We have added special filters to the AdGuard app to protect you from malicious and phishing websites."),(0,a.kt)("p",null,"So far, we have categorized more than 15 million sites, and our filters contain about 1.5 million phishing and malware sites. Just think about it: 10% of all known sites can be dangerous for you! Inexperienced users can easily become victims of fraudsters or hackers. We hope that using protection against malicious websites will help you avoid all hazards that you may encounter."),(0,a.kt)("h2",{id:"how-does-a-check-work"},"How does a check work?"),(0,a.kt)("p",null,"The scope and methods of checks depend on the product you use. In our browser extensions, AdGuard inspects only the pages you visit. In AdGuard for Windows, Mac, or Android, we offer you the best possible protection by checking both the pages and all objects loaded on them."),(0,a.kt)("h3",{id:"adguard-for-windows-mac-and-android"},"AdGuard for Windows, Mac, and Android"),(0,a.kt)("p",null,"We use the protocol ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec"},"Safe Browsing API version 2.2")," for our work with filters. This protocol allows us to keep your personal data absolutely safe. Our server knows nothing about the websites that you visit. We use hash prefixes for checks, not the opened URLs."),(0,a.kt)("p",null,"The figure below provides a general understanding of how the Browsing security module works, using AdGuard for Windows as an example."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png",alt:"Functioning algorithm of Browsing security module"})),(0,a.kt)("h3",{id:"adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"Browser extensions work differently, using the so-called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668"},(0,a.kt)("em",{parentName:"a"},"Lookup API"))," to check the pages you visit. Every time you visit any website, your local client exchanges information with our backend server in the form of hashes and hash prefixes. Based on this exchange, the local client determines whether or not the site is listed in the potentially dangerous sites database. For those interested in the process at a deeper level, the link above will be helpful."),(0,a.kt)("p",null,"We bring to your attention that we never get any information that could allow us to determine which websites you visit and use that data in any way."),(0,a.kt)("p",null,"An approximate algorithm of the functioning of the Browsing security module is shown in the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png",alt:"Functioning algorithm of Browsing security module in AdGuard browser extensions."})),(0,a.kt)("h2",{id:"adguard-\u8fc7\u6ee4\u5668"},"AdGuard \u8fc7\u6ee4\u5668"),(0,a.kt)("p",null,"We currently maintain two AdGuard filters. One protects against phishing and fraudulent websites. The other protects against malicious websites, visiting which may lead to a virus infection."),(0,a.kt)("h3",{id:"phishing-sites-filter"},"Phishing sites filter"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Phishing")," is a type of online fraud aimed at gaining access to confidential data of users \u2014 username and password. If you are interested in this topic, we suggest that you read ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Phishing"},"this article at Wikipedia"),"."),(0,a.kt)("p",null,"Apart from phishing sites, this filter also covers different fraudulent sites, including all kinds of scams, sales of nonexistent content, and such."),(0,a.kt)("h3",{id:"malicious-sites-filter"},"Malicious sites filter"),(0,a.kt)("p",null,"This filter contains links to pages that could execute malicious code, leading to potential leaks, data loss, or damage to a user\u2019s device. Code execution can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware)."),(0,a.kt)("h2",{id:"how-do-we-add-new-addresses-to-our-filters"},"How do we add new addresses to our filters?"),(0,a.kt)("p",null,"Most of the work is automated, so you can be sure that new malware and phishing addresses are added to our database as quickly as possible."),(0,a.kt)("h3",{id:"adguard-browsing-security-community"},"AdGuard Browsing security Community"),(0,a.kt)("p",null,"An important tool for maintaining the highest level of filtering is the ",(0,a.kt)("em",{parentName:"p"},"AdGuard Browsing security Community"),". Any user of our products \u2014 be it AdGuard for Windows or our browser extension \u2014 can become a member of the community and help us in the making of AdGuard filters."),(0,a.kt)("p",null,"In the image below, you can see an algorithm of how Browsing security Community works:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png",alt:"The way AdGuard Browsing security Community works"})),(0,a.kt)("h3",{id:"want-to-help"},"Want to help?"),(0,a.kt)("p",null,"We will gladly accept any help! If you want to send us a complaint about a phishing or malware site, you can do it via technical support at ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),"."),(0,a.kt)("h3",{id:"false-positive-responses"},"False-positive responses"),(0,a.kt)("p",null,"Occasionally, some non-malicious websites get added to AdGuard's filters. We do our best to reduce the percentage of false positives, but they still occur. If you come across this behavior from AdGuard, please send us a complaint about the false-positive alarm. You can submit such complaints via our technical support at ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),"."))}c.isMDXComponent=!0}}]);