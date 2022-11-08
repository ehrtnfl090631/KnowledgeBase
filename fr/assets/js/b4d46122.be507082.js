"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6360],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||n;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(7462),o=(r(7294),r(4137));const n={title:"How to install a proxy certificate",sidebar_position:2},i=void 0,p={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"How to install a proxy certificate",description:"Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/fr/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to install a proxy certificate",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to collect a HAR file",permalink:"/KnowledgeBase/fr/guides/collect-har-file"},next:{title:"How to report a website",permalink:"/KnowledgeBase/fr/guides/report-website"}},l={},s=[{value:"How to download and install the certificate",id:"how-to-download-and-install-the-certificate",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that these devices must be in the same network as the PC or Mac on which AdGuard is installed.")),(0,o.kt)("p",null,"HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install AdGuard certificate on the connected device."),(0,o.kt)("h2",{id:"how-to-download-and-install-the-certificate"},"How to download and install the certificate"),(0,o.kt)("p",null,"Depending on the operation system of your device (Android/iOS), follow one of this instructions:"),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with installed AdGuard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the device which traffic you want to route through AdGuard, open advanced settings of the active WiFi network.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch the ",(0,o.kt)("strong",{parentName:"p"},"Proxy type")," to ",(0,o.kt)("strong",{parentName:"p"},"Manual"),". For ",(0,o.kt)("strong",{parentName:"p"},"Proxy hostname"),", enter the noted IP-address of your desktop computer (step 1). For ",(0,o.kt)("strong",{parentName:"p"},"Proxy port"),", enter the port chosen in desktop AdGuard's network settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate AdGuard on your computer and check the box ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Use AdGuard as an HTTP proxy"))," in the ",(0,o.kt)("strong",{parentName:"p"},"Network")," settings of the desktop app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow this link using any browser: ",(0,o.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Download")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the certificate is downloaded, you need to install it. Tap the downloaded certificate to open the file, if it didn't open automatically.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On some phones, you might be asked to enter your device password. Do that, then press ",(0,o.kt)("strong",{parentName:"p"},"OK"),". The certificate is now installed."))),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with installed AdGuard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the device which traffic you want to route through AdGuard, open advanced settings of the active WiFi network.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch the ",(0,o.kt)("strong",{parentName:"p"},"Proxy type")," to ",(0,o.kt)("strong",{parentName:"p"},"Manual"),". For ",(0,o.kt)("strong",{parentName:"p"},"Proxy hostname"),", enter the noted IP-address of your computer (step 1). For ",(0,o.kt)("strong",{parentName:"p"},"Proxy port"),", enter the port chosen in desktop AdGuard's network settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate AdGuard on your computer and check the box ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Use AdGuard as an HTTP proxy"))," in the ",(0,o.kt)("strong",{parentName:"p"},"Network")," settings of the desktop app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Safari, go to ",(0,o.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," and tap ",(0,o.kt)("strong",{parentName:"p"},"Download"),". In the opened dialogue, allow the website to download a configuration profile.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"p"},"Profile Donwloaded")," and tap ",(0,o.kt)("strong",{parentName:"p"},"Install")," in the top right corner. Enter your password and confirm the installation. Tap ",(0,o.kt)("strong",{parentName:"p"},"Done"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"p"},"General")," -> ",(0,o.kt)("strong",{parentName:"p"},"About")," -> ",(0,o.kt)("strong",{parentName:"p"},"Certificate Trust Settings"),". Enable the switch beside ",(0,o.kt)("strong",{parentName:"p"},"Adguard Personal CA"),". The certificate is now installed."))))}c.isMDXComponent=!0}}]);