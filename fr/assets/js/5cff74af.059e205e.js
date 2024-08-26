"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(7294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"How to automate AdGuard for Android",sidebar_position:3},s=void 0,p={unversionedId:"adguard-for-android/solving-problems/tasker",id:"adguard-for-android/solving-problems/tasker",title:"How to automate AdGuard for Android",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/tasker.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/tasker",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/tasker",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/tasker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to automate AdGuard for Android",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to collect debug logs",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/log"},next:{title:"How to get system logs",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/logcat"}},d={},u=[{value:"AdGuard interface",id:"adguard-interface",level:2},{value:"Security concerns",id:"security-concerns",level:3},{value:"Available actions",id:"available-actions",level:3},{value:"Execution without notification",id:"execution-without-notification",level:3},{value:"Example",id:"example",level:3}],c={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,r.kt)("p",null,"Many people choose Android because they like customizing settings and want to control their device completely. And it's totally normal if some of AdGuard users are not satisfied with its default behavior. Let's say, you want protection to stop when a certain app is launched, and then restart it again when the app is closed. This is a job for the Tasker app."),(0,r.kt)("h2",{id:"adguard-interface"},"AdGuard interface"),(0,r.kt)("p",null,"There are a lot of tasker apps out there, for example ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess"},"Tasker"),", ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess"},"AutomateIt")," etc. AdGuard provides an interface that allows these apps to setup various automation rules."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg",alt:"Automation *mobile_border"})),(0,r.kt)("p",null,"Thanks to this interface, any app can send a special message (called \u201cintent\u201d) that contains the name of the action and some additional data, if needed. AdGuard will look at this intent and perform the required actions."),(0,r.kt)("h3",{id:"security-concerns"},"Security concerns"),(0,r.kt)("p",null,"Isn't it dangerous to let some random apps manage what AdGuard does? It is, and that's why a password is sent along with the intent. This password will be generated by AdGuard automatically, but you can, of course, change it at any time."),(0,r.kt)("h3",{id:"available-actions"},"Available actions"),(0,r.kt)("p",null,"Here are actions that, when included in the intent, will be understood by AdGuard:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"start")," starts the protection, no extra data is needed;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stop")," stops the protection, no extra data required;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pause")," pauses the protection. The difference between this and ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," is that a notification will appear that restarts the protection when you tap it. No extra data required;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update")," checks for available filter and app updates, no additional data is needed;"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dns_filtering")," turns DNS filtering on and off. Requires an extra flag:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enable:true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"enable:false")," enables or disables DNS filtering, accordingly."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fake_dns")," allows resolving DNS requests on the specified proxy server. This requires an extra flag:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enable:true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"enable:false")," enables or disables the ",(0,r.kt)("em",{parentName:"p"},"Use FakeDNS")," setting, respectively."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When the ",(0,r.kt)("em",{parentName:"p"},"Use FakeDNS")," setting is enabled, ",(0,r.kt)("em",{parentName:"p"},"DNS Protection")," will be automatically disabled. DNS requests won't be filtered locally.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dns_server")," switches between DNS servers, you need to include additional data:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:adguard dns")," switches to AdGuard DNS server;"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The full list of supported provider names can be found in our ",(0,r.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers/"},"known DNS providers list"),".")),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:custom")," switches to the previously added server named ",(0,r.kt)("inlineCode",{parentName:"p"},"custom"),";"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:tls://dns.adguard.com")," creates a new server and switches to it if the previously added servers and providers don't contain a server with the same address. Otherwise, it switches to the respective server. You can add server addresses as IP ( regular DNS), ",(0,r.kt)("inlineCode",{parentName:"p"},"sdns://\u2026")," (DNSCrypt or DNS-over-HTTPS), ",(0,r.kt)("inlineCode",{parentName:"p"},"https://\u2026")," (DNS-over-HTTPS) or ",(0,r.kt)("inlineCode",{parentName:"p"},"tls://...")," (DNS-over-TLS);"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:1.1.1.1, tls://1.1.1.1")," creates a server with comma separated addresses and switches to it. When adding a server via ",(0,r.kt)("inlineCode",{parentName:"p"},"server:1.1.1.1, tls://1.1.1.1"),", the previously added server is removed."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:system")," resets DNS settings to default system DNS servers."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_state")," enables/disables the outbound proxy. Requires an extra flag:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enable:true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"enable:false")," activates or deactivates the outbound proxy, accordingly."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_default")," sets the proxy from the list of previously added ones as default or creates a new one if server has not been added before."),(0,r.kt)("p",null,"You need to specify additional data:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[name]")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]")," is the name of the outbound proxy from the list."),(0,r.kt)("p",null,"Or you can configure server parameters manually:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[type=\u2026&host=\u2026&port=\u2026&username=\u2026&password=\u2026&udp=\u2026&trust=\u2026]"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_remove")," removes the proxy server from the list of previously added ones."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[name]")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]")," is the name of the outbound proxy from the list."),(0,r.kt)("p",null,"Or you can configure remove parameters manually:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[type=\u2026&host=\u2026&port=\u2026&username=\u2026&password=\u2026&udp=\u2026&trust=\u2026]"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compulsory parameters"),":")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[type]")," \u2014 proxy server type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP"),(0,r.kt)("li",{parentName:"ul"},"SOCKS4"),(0,r.kt)("li",{parentName:"ul"},"SOCKS5"),(0,r.kt)("li",{parentName:"ul"},"HTTPS_CONNECT")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[host]")," \u2014 outbound proxy domain or IP address;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[port]")," \u2014 outbound proxy port (integer number from 1 to 65535);"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional parameters"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[login and password]")," \u2014 only if proxy requires it. This data is ignored when setting up ",(0,r.kt)("strong",{parentName:"p"},"SOCKS4"),";"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[udp]")," applied only on ",(0,r.kt)("strong",{parentName:"p"},"SOCKS5")," server type and include option ",(0,r.kt)("strong",{parentName:"p"},"UDP through SOCKS5"),". It is necessary to set ",(0,r.kt)("strong",{parentName:"p"},"true or false")," value;"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[trust]")," applies for ",(0,r.kt)("strong",{parentName:"p"},"HTTPS_CONNECT")," server type only and include option ",(0,r.kt)("strong",{parentName:"p"},"Trust any certificates"),". It is necessary to set ",(0,r.kt)("strong",{parentName:"p"},"true or false")," value."))),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"setting by name"),": server:MyServer"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"manually settings"),": server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't forget to include the password as an extra and mention package name and class. You need to do so for every intent.")),(0,r.kt)("p",null,"Extra: ",(0,r.kt)("inlineCode",{parentName:"p"},"password:*******")),(0,r.kt)("p",null,"Package name: ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android")),(0,r.kt)("p",null,"Class: ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android.receiver.AutomationReceiver")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before v4.0 the class was called ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android.receivers.AutomationReceiver")," but then we changed its name to ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android.receiver.AutomationReceiver"),". If you used this feature, please pay attention and use the new name.")),(0,r.kt)("h3",{id:"execution-without-notification"},"Execution without notification"),(0,r.kt)("p",null,"To perform a task without showing a toast, add an additional EXTRA ",(0,r.kt)("inlineCode",{parentName:"p"},"quiet: true")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png",alt:"Automation *mobile"})))}m.isMDXComponent=!0}}]);