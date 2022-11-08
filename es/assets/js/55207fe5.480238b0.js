"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6980],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||n;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const n={title:"How to get HAR files",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/har",id:"adguard-for-android/solving-problems/har",title:"How to get HAR files",description:"What are HAR files?",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/har.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/har",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/har",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/har.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to get HAR files",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to get logcat log",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/logcat"},next:{title:"Low Level Settings guide",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/low-level-settings"}},s={},d=[{value:"What are HAR files?",id:"what-are-har-files",level:2},{value:"How to get HAR files?",id:"how-to-get-har-files",level:2},{value:"How to analyze HAR files?",id:"how-to-analyze-har-files",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-are-har-files"},"What are HAR files?"),(0,a.kt)("p",null,"The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at ",(0,a.kt)("a",{parentName:"p",href:"http://www.softwareishard.com/blog/har-12-spec/"},"softwareishard.com")," website."),(0,a.kt)("h2",{id:"how-to-get-har-files"},"How to get HAR files?"),(0,a.kt)("p",null,"Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason. To get HAR files follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Open AdGuard and go to "Settings".'),(0,a.kt)("li",{parentName:"ol"},'Choose "Advanced" in the menu.'),(0,a.kt)("li",{parentName:"ol"},'Choose "Low Level Settings"'),(0,a.kt)("li",{parentName:"ol"},'Activate "pref.har.capture" (you will have to restart the protection).'),(0,a.kt)("li",{parentName:"ol"},"Now reproduce the problem - open the app, perform the necessary actions to make the ad appear."),(0,a.kt)("li",{parentName:"ol"},'Now turn "pref.har.capture" off again.'),(0,a.kt)("li",{parentName:"ol"},'Go Back, then tap "Export logs and system info" > Save.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please send the file with logs (that you've got as a result) to the AdGuard support service.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.")),(0,a.kt)("h2",{id:"how-to-analyze-har-files"},"How to analyze HAR files?"),(0,a.kt)("p",null,"Here are some sources that we can recommend to analyze HAR files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitgrimbo.github.io/harviewer/master/"},"HTTP Archive Viewer master")," is a HAR analyzer tool, visualizes HTTP Archive (HAR) log files created by HTTP tracking tools."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.telerik.com/fiddler"},"Fiddler")," is a web debugging proxy, lets you capture, inspect, monitor all HTTP(S) traffic between your computer and the Internet, mock requests, and diagnose network issues.")))}c.isMDXComponent=!0}}]);