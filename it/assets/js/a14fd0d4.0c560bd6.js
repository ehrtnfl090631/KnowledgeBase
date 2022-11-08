"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9289],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(4137));const a={title:"Known issues",sidebar_position:2},s=void 0,o={unversionedId:"general/https-filtering/known-issues",id:"general/https-filtering/known-issues",title:"Known issues",description:"Last update: September 20, 2022 Understanding this article may require some basic knowledge about encryption, the TLS protocol, and HTTPS.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/general/https-filtering/known-issues.md",sourceDirName:"general/https-filtering",slug:"/general/https-filtering/known-issues",permalink:"/KnowledgeBase/it/general/https-filtering/known-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/https-filtering/known-issues.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Known issues",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is HTTPS filtering",permalink:"/KnowledgeBase/it/general/https-filtering/what-is-https-filtering"},next:{title:"Local adguard.com domain",permalink:"/KnowledgeBase/it/general/https-filtering/local-adguard-com-domain"}},l={},c=[{value:"Known issues",id:"known-issues",level:2},{value:"Inspecting the original certificate",id:"inspecting-the-original-certificate",level:3},{value:"Certificate Transparency",id:"certificate-transparency",level:3},{value:"Have remarks or suggestions?",id:"have-remarks-or-suggestions",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Last update: September 20, 2022 Understanding this article may require some basic knowledge about encryption, the TLS protocol, and HTTPS.")),(0,i.kt)("p",null,"First, look at this simple diagram that shows the general structure of the HTTPS protocol:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering.png",alt:"What is HTTPS filtering"})),(0,i.kt)("p",null,"AdGuard copies properties of the TLS-connection that your browser uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AdGuard uses the same TLS version"),(0,i.kt)("li",{parentName:"ul"},"AdGuard uses the same encrypting methods (ciphers) as your browser")),(0,i.kt)("p",null,"Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won\u2019t attempt to use unsafe ciphers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What does AdGuard do when there are any doubts about the certificate\u2019s validity?")," In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions."),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("p",null,"HTTPS filtering in AdGuard has its drawbacks. Almost all of them are scheduled to be eliminated in the next few AdGuard versions."),(0,i.kt)("p",null,"All the issues known to us and the ETAs on their fixes are listed below."),(0,i.kt)("h3",{id:"inspecting-the-original-certificate"},"Inspecting the original certificate"),(0,i.kt)("p",null,"The most important drawback of the HTTPS filtering mechanism is that it hides the real certificate of a website. You cannot simply check its original certificate because you can only see the one issued by AdGuard."),(0,i.kt)("p",null,"This problem is solved in ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-assistant/overview.html"},"Browser Assistant"),". This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website."),(0,i.kt)("h3",{id:"certificate-transparency"},"Certificate Transparency"),(0,i.kt)("p",null,"Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren\u2019t so good at detecting malicious websites if they\u2019re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that\u2019s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users."),(0,i.kt)("p",null,"AdGuard products which use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/CoreLibs/"},"CoreLibs")," starting with version ",(0,i.kt)("strong",{parentName:"p"},"1.11")," will implement a policy based on ",(0,i.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/CertificateTransparency/ct_policy.html"},"Chrome Certificate Transparency Policy"),"."),(0,i.kt)("h2",{id:"have-remarks-or-suggestions"},"Have remarks or suggestions?"),(0,i.kt)("p",null,"If you\u2019d like to add something, report any errors, or ask a question, please contact us at: ",(0,i.kt)("inlineCode",{parentName:"p"},"devteam at adguard.com"),"."))}p.isMDXComponent=!0}}]);