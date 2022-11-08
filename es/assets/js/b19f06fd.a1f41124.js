"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6475],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(4137));const a={title:"How to create a dump file",sidebar_position:8},i=void 0,l={unversionedId:"adguard-for-windows/solving-problems/dump-file",id:"adguard-for-windows/solving-problems/dump-file",title:"How to create a dump file",description:"To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dump-file.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dump-file",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dump-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dump-file.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to create a dump file",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Advanced (low-level) Settings guide",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/low-level-settings"},next:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dns-leaks"}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Press ",(0,n.kt)("strong",{parentName:"li"},"Ctrl + Shift + Esc")," and click on ",(0,n.kt)("strong",{parentName:"li"},"Task Manager")),(0,n.kt)("li",{parentName:"ol"},"In the upper menu bar select ",(0,n.kt)("strong",{parentName:"li"},"Details"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/Windows_dump/details_en.png",alt:"Task Manager details"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Right-click on the process that you want to create the dump file for (for example, the support team may ask you to create a dump for ",(0,n.kt)("inlineCode",{parentName:"li"},"Adguard.exe"),")"),(0,n.kt)("li",{parentName:"ol"},"In the drop-down menu click on ",(0,n.kt)("strong",{parentName:"li"},"Create dump file")),(0,n.kt)("li",{parentName:"ol"},"The file was created successfully!")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/Windows_dump/create_dump_file_en.png",alt:"Create dump file"})),(0,n.kt)("p",null,"After you\u2019ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the ",(0,n.kt)("strong",{parentName:"p"},"%tmp%")," folder. The created dump file (",(0,n.kt)("inlineCode",{parentName:"p"},".DMP"),") has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Please note, AdGuard for Windows has two running processes (",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AdguardSvc.exe"),"). So you need to create the dump file separately for each process.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/Windows_dump/processes_en.png",alt:"AdGuard processes"})),(0,n.kt)("p",null,"When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. ",(0,n.kt)("a",{parentName:"p",href:"/KnowledgeBase/es/adguard-for-windows/solving-problems/adguard-logs"},"Here")," you can check the instructions on how to collect the log file."))}u.isMDXComponent=!0}}]);