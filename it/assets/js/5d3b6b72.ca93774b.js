"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5375],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={title:"Launch issues on macOS",sidebar_position:6},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/launch-issues",id:"adguard-for-mac/solving-problems/launch-issues",title:"Launch issues on macOS",description:"Occasionally macOS may cause the corruption of AdGuard's Network Extension module, making it unable to use the app. In this case you should follow one of these instructions, based on your OS version.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/launch-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/launch-issues",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/launch-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/launch-issues.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Launch issues on macOS",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installation problems solving",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/installation-issues"},next:{title:"iCloud Private Relay and AdGuard",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/icloud-private-relay"}},s={},c=[{value:"Launch issues on macOS 11 and higher",id:"launch-issues-on-macos-11-and-higher",level:2},{value:"Launch issues on macOS 10",id:"launch-issues-on-macos-10",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Occasionally macOS may cause the corruption of AdGuard's Network Extension module, making it unable to use the app. In this case you should follow one of these instructions, based on your OS version."),(0,r.kt)("h2",{id:"launch-issues-on-macos-11-and-higher"},"Launch issues on macOS 11 and higher"),(0,r.kt)("p",null,"If you have problems launching AdGuard for Mac on Big Sur and Monterey operating systems, please use this instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Reboot Mac and enter ",(0,r.kt)("a",{parentName:"li",href:"https://support.apple.com/en-us/HT201255"},"recovery mode"),"."),(0,r.kt)("li",{parentName:"ol"},"Disable SIP (Launch ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," from the ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," menu and type ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil disable"),")."),(0,r.kt)("li",{parentName:"ol"},"Reboot Mac."),(0,r.kt)("li",{parentName:"ol"},"Close the AdGuard app, open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," and type ",(0,r.kt)("inlineCode",{parentName:"li"},"systemextensionsctl reset"),"."),(0,r.kt)("li",{parentName:"ol"},"Reboot Mac and enter recovery mode."),(0,r.kt)("li",{parentName:"ol"},"Enable SIP (Launch ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," from the ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," menu and type ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil enable"),")."),(0,r.kt)("li",{parentName:"ol"},"Launch the AdGuard app and enable protection.")),(0,r.kt)("h2",{id:"launch-issues-on-macos-10"},"Launch issues on macOS 10"),(0,r.kt)("p",null,"If you have problems launching AdGuard for Mac on Sierra, Mojave and Catalina operating systems, please use this instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," and enter command ",(0,r.kt)("inlineCode",{parentName:"li"},"ls -@lOae /private/var/db/KernelExtensionManagement"),"."),(0,r.kt)("li",{parentName:"ol"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"li"},"restricted")," flag is not present (like on the screenshot).")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/restricted-flag.jpg",alt:"Command example"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Reboot your Mac in recovery mode."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," -> ",(0,r.kt)("strong",{parentName:"li"},"Terminal"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil disable"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter administrator password."),(0,r.kt)("li",{parentName:"ol"},"Reboot your Mac."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," and enter the following command: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo chflags restricted /private/var/db/KernelExtensionManagement"),"."),(0,r.kt)("li",{parentName:"ol"},"Reboot your Mac in recovery mode."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," -> ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," -> Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil enable")," -> Enter administrator password -> Reboot your Mac."),(0,r.kt)("li",{parentName:"ol"},"Enable AdGuard protection.")))}p.isMDXComponent=!0}}]);