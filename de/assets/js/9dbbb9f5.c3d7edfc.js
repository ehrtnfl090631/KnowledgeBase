"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5210],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(o),g=r,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||a;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7993:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=o(7462),r=(o(7294),o(4137));const a={title:"How to collect a full log",sidebar_position:2},l=void 0,i={unversionedId:"adguard-for-android/solving-problems/log",id:"adguard-for-android/solving-problems/log",title:"How to collect a full log",description:"Sometimes in order to understand a problem and fix it we need to collect log files, or logs. Basically, these files contain information about the program and it's work.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/log.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/log",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/log",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/log.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to collect a full log",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Battery and traffic consumption issues",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/battery"},next:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/tasker"}},d={},s=[{value:"Collecting debug log",id:"collecting-debug-log",level:4},{value:"Collecting web requests log",id:"collecting-web-requests-log",level:4}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes in order to understand a problem and fix it we need to collect ",(0,r.kt)("strong",{parentName:"p"},"log files"),", or ",(0,r.kt)("strong",{parentName:"p"},"logs"),". Basically, these files contain information about the program and it's work."),(0,r.kt)("h4",{id:"collecting-debug-log"},"Collecting debug log"),(0,r.kt)("p",null,"To collect ",(0,r.kt)("strong",{parentName:"p"},"debug")," log and send it to us you need to perform following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Open AdGuard and go to "Settings".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Choose "Advanced".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Set "Logging level" to "Record everything". It\'s desirable to close all background apps that don\'t concern the problem beforehand.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Reproduce the problem and set the logging level back to "Default". Notice the exact time when it happened.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Send us a message from program by choosing "Support" > "Send Feedback" in the menu. Don\'t forget to check the "Send detailed system info" checkbox under the text field and to include the timestamp from the step 4 into the message.'))),(0,r.kt)("p",null,"As an alternative, you can export the logs (along with the ",(0,r.kt)("em",{parentName:"p"},"state.txt")," file that contains system information and information about AdGuard settings) directly into a local file. It can be convenient, for example, if you are having a conversation with a developer on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForAndroid/issues"},"GitHub"),", ",(0,r.kt)("a",{parentName:"p",href:"https://forum.adguard.com/"},"forum")," or on another platform."),(0,r.kt)("p",null,'To export logs and system information into a file, go to "Settings \u2014 Advanced" and tap "Export logs and system info". Select the destination folder and tap "Save".'),(0,r.kt)("h4",{id:"collecting-web-requests-log"},"Collecting web requests log"),(0,r.kt)("p",null,"To collect ",(0,r.kt)("strong",{parentName:"p"},"web requests")," log and send it to us you need to perform following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Open AdGuard and go to "Settings".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Choose "Advanced".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Set "Logging level" to "Record web requests". It\'s desirable to close all background apps that don\'t concern the problem beforehand.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Reproduce the problem and set the logging level back to "Default". Notice the exact time when it happened.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Send us a message from program by choosing \u201cSupport\u201d > "Send Feedback" in the menu. Don\'t forget to check the "Send detailed system info" checkbox under the text field and to include the timestamp from the step 4 into the message.'))),(0,r.kt)("p",null,"As an alternative, you can export the logs (along with the ",(0,r.kt)("em",{parentName:"p"},"state.txt")," file that contains system information and information about AdGuard settings) directly into a local file. It can be convenient, for example, if you are having a conversation with a developer on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForAndroid/issues"},"GitHub"),", ",(0,r.kt)("a",{parentName:"p",href:"https://forum.adguard.com/"},"forum")," or on another platform."),(0,r.kt)("p",null,'To export logs and system information into a file, go to "Settings \u2014 Advanced" and tap "Export logs and system info". Select the destination folder and tap "Save".'))}c.isMDXComponent=!0}}]);