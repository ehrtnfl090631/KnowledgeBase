"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(7294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"How to create a minidump file to fix the BSoD error",sidebar_position:8},s=void 0,p={unversionedId:"guides/minidump",id:"guides/minidump",title:"How to create a minidump file to fix the BSoD error",description:"Almost all Windows users are familiar with the Blue Screen of Death (BSoD) error unfortunately. BSoD occurs when the Windows system encounters problems that can affect safe system operation, such as problems with third-party driver code, hardware, or Microsoft code. To solve the blue screen error, users can use a minidump file.",source:"@site/docs/guides/minidump.md",sourceDirName:"guides",slug:"/guides/minidump",permalink:"/KnowledgeBase/guides/minidump",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/minidump.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to create a minidump file to fix the BSoD error",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"How to enable HTTPS filtering for Google Family Link",permalink:"/KnowledgeBase/guides/family-link-certificate"},next:{title:"How to block push notifications",permalink:"/KnowledgeBase/guides/block-push-notifications"}},c={},u=[{value:"What is Minidump file?",id:"what-is-minidump-file",level:2},{value:"Set up Windows to create the Minidump file",id:"set-up-windows-to-create-the-minidump-file",level:2}],m={toc:u};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Almost all Windows users are familiar with the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_screen_of_death"},"Blue Screen of Death (BSoD)")," error unfortunately. BSoD occurs when the Windows system encounters problems that can affect safe system operation, such as problems with third-party driver code, hardware, or Microsoft code. To solve the blue screen error, users can use a minidump file."),(0,n.kt)("h2",{id:"what-is-minidump-file"},"What is Minidump file?"),(0,n.kt)("p",null,"A minidump file is a file that contains the information about the nature of the system crash. It is created just before the blue screen appears and it has the minimum amount of useful information that can be used to solve the problem. The minidump file usually has a ",(0,n.kt)("em",{parentName:"p"},".dmp")," extension."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"On Windows 10, the blue screen shows a stop code and a QR code. The user can use this information and search the Web for the specific problem.")),(0,n.kt)("p",null,"The option to create the minidump file is disabled by default, so before we go into more detail on how to use the file, let\u2019s take a closer look at how to enable it."),(0,n.kt)("h2",{id:"set-up-windows-to-create-the-minidump-file"},"Set up Windows to create the Minidump file"),(0,n.kt)("p",null,"Even if you don\u2019t experience any BSoD crash errors, you can still set this option \u2014 this is a general recommendation, not necessarily related to AdGuard products. Please follow the instructions below to automatically create the minidump file."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type ",(0,n.kt)("em",{parentName:"p"},"sysdm.cpl")," in the Windows search bar and click ",(0,n.kt)("strong",{parentName:"p"},"Open"),". The ",(0,n.kt)("strong",{parentName:"p"},"System Properties Control Panel Menu")," window will appear on the screen."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Alternatively, click ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"System")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"About")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Advanced system settings"),".")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg",alt:"System Properties *mobile_border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Advanced")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Startup and Recovery")," section, click ",(0,n.kt)("strong",{parentName:"p"},"Settings"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png",alt:"Startup and Recovery *mobile_border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the following three options:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Write an event to the system log"),(0,n.kt)("li",{parentName:"ul"},"Automatically restart"),(0,n.kt)("li",{parentName:"ul"},"Writing debugging information \u2192 Small memory dump (256 kb)")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/nmr4eThree_options.png",alt:"Three options *mobile_border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"OK")," to apply the settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart the computer."))),(0,n.kt)("p",null,"You've successfully enabled the minidump file. Now it will be created automatically when the system crashes."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"By default the minidump file is stored in the ",(0,n.kt)("strong",{parentName:"p"},"%SystemRoot%\\Minidump")," folder. You can change the directory location to whatever you like, but please remember that a lot of programs are set to look for this location by default, so we recommend that you do not change the location.")))}d.isMDXComponent=!0}}]);