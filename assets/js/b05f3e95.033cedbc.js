"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7355],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||n;return a?i.createElement(h,r(r({ref:t},d),{},{components:a})):i.createElement(h,r({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(7462),o=(a(7294),a(4137));const n={title:"Compatibility issues with different macOS versions",sidebar_position:4},r=void 0,l={unversionedId:"adguard-for-mac/solving-problems/big-sur-issues",id:"adguard-for-mac/solving-problems/big-sur-issues",title:"Compatibility issues with different macOS versions",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-mac/solving-problems/big-sur-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/big-sur-issues",permalink:"/KnowledgeBase/adguard-for-mac/solving-problems/big-sur-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/big-sur-issues.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Compatibility issues with different macOS versions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to install AdGuard on macOS High Sierra and above",permalink:"/KnowledgeBase/adguard-for-mac/solving-problems/high-sierra-compatibility"},next:{title:"Installation problems solving",permalink:"/KnowledgeBase/adguard-for-mac/solving-problems/installation-issues"}},s={},p=[{value:"Currently existing problems",id:"currently-existing-problems",level:2},{value:"Monterey 12: currently existing problems",id:"monterey-12-currently-existing-problems",level:3},{value:"Compatibility with iCloud Private Relay",id:"compatibility-with-icloud-private-relay",level:4},{value:"Compatibility with Protect Mail Activity",id:"compatibility-with-protect-mail-activity",level:4},{value:"Monterey 12, Big Sur 11.6 and later: currently existing problems",id:"monterey-12-big-sur-116-and-later-currently-existing-problems",level:3},{value:"Compatibility with Cisco AnyConnect",id:"compatibility-with-cisco-anyconnect",level:4},{value:"Compatibility with Flutter",id:"compatibility-with-flutter",level:4},{value:"VPN apps with legacy API",id:"vpn-apps-with-legacy-api",level:4},{value:"Already fixed problems",id:"already-fixed-problems",level:2},{value:"Compatibility with Little Snitch 5",id:"compatibility-with-little-snitch-5",level:3},{value:"Compatibility with local proxies",id:"compatibility-with-local-proxies",level:3},{value:"Example 1: Configuring an upstream Shadowsocks proxy",id:"example-1-configuring-an-upstream-shadowsocks-proxy",level:4},{value:"Example 2: Configuring an upstream Surge proxy",id:"example-2-configuring-an-upstream-surge-proxy",level:4},{value:"Alternatives to using a Network Extension",id:"alternatives-to-using-a-network-extension",level:2},{value:"Using &quot;Automatic proxy&quot; filtering mode",id:"automatic-proxy",level:3},{value:"Enabling Kernel Extension in Big Sur and Monterey",id:"kernel-extension",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("h2",{id:"currently-existing-problems"},"Currently existing problems"),(0,o.kt)("p",null,"Every year Apple releases a new version of macOS, introducing innovative solutions and adding new useful features. But some of them, such as Network Extensions API (Big Sur) or iCloud Private Relay (Monterey), cause some problems to many applications, AdGuard not being an exception. In this article we go over the known issues specific to each macOS version and possible ways to solve them."),(0,o.kt)("h3",{id:"monterey-12-currently-existing-problems"},"Monterey 12: currently existing problems"),(0,o.kt)("p",null,"These problems aren't fixed by Apple yet, or fixed only partially."),(0,o.kt)("h4",{id:"compatibility-with-icloud-private-relay"},"Compatibility with iCloud Private Relay"),(0,o.kt)("p",null,"Currently, AdGuard and iCloud Private Relay cannot work at the same time. AdGuard has no ability to block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections. When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. That's why by default, AdGuard uses the \"default route\" which disables iCloud Private Relay."),(0,o.kt)("p",null,"For a deeper understanding of this problem, read ",(0,o.kt)("a",{parentName:"p",href:"../icloud-private-relay"},"this article"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommended solution")),(0,o.kt)("p",null,"We recommend using AdGuard together with a more traditional VPN service such as ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative solution")),(0,o.kt)("p",null,'You can prevent AdGuard from using the "default route" by disabling it. It can be done via Advanced Settings \u2192 ',(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel"),". Note that enabling this setting will cause the problems described above."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg",alt:"Advanced Settings *border"})),(0,o.kt)("h4",{id:"compatibility-with-protect-mail-activity"},"Compatibility with Protect Mail Activity"),(0,o.kt)("p",null,"Apple's Mail app now uses a proxy to hide a user's IP address when downloading images from emails. However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically."),(0,o.kt)("p",null,"For a deeper understanding of this problem, read ",(0,o.kt)("a",{parentName:"p",href:"../protect-mail-activity"},"this article"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommended solution")),(0,o.kt)("p",null,"At this point, we recommend using a more traditional VPN service, such as ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),", instead of the newer Apple privacy features."),(0,o.kt)("h3",{id:"monterey-12-big-sur-116-and-later-currently-existing-problems"},"Monterey 12, Big Sur 11.6 and later: currently existing problems"),(0,o.kt)("p",null,"These problems aren't fixed by Apple yet, or fixed only partially."),(0,o.kt)("h4",{id:"compatibility-with-cisco-anyconnect"},"Compatibility with Cisco AnyConnect"),(0,o.kt)("p",null,"AdGuard will not work together with Cisco AnyConnect while in the ",(0,o.kt)("em",{parentName:"p"},"Network Extension")," mode. You have to switch AdGuard to ",(0,o.kt)("em",{parentName:"p"},"Automatic Proxy")," mode. To do so, follow ",(0,o.kt)("a",{parentName:"p",href:"#automatic-proxy"},"this instruction"),"."),(0,o.kt)("h4",{id:"compatibility-with-flutter"},"Compatibility with Flutter"),(0,o.kt)("p",null,"This problem is solved in Flutter 2.2, released in June 2021. But to fix it for applications developed in Flutter, you need to wait for updates."),(0,o.kt)("p",null,'If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Monterey or Big Sur, you will run into problems: projects won\'t open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use AdGuard in ",(0,o.kt)("a",{parentName:"p",href:"#automatic-proxy"},"Automatic Proxy")," mode.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable SIP and switch AdGuard to Kernel Extension mode as explained ",(0,o.kt)("a",{parentName:"p",href:"#kernel-extension"},"here"),"."))),(0,o.kt)("h4",{id:"vpn-apps-with-legacy-api"},"VPN apps with legacy API"),(0,o.kt)("p",null,"Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard's menu."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("em",{parentName:"li"},"Preferences..."),"."),(0,o.kt)("li",{parentName:"ol"},"Switch to the ",(0,o.kt)("em",{parentName:"li"},"Network")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("em",{parentName:"li"},"Applications...")," button."),(0,o.kt)("li",{parentName:"ol"},"Find the app you want to exclude and uncheck the checkbox next to it.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg",alt:"Filtered applications"})),(0,o.kt)("h2",{id:"already-fixed-problems"},"Already fixed problems"),(0,o.kt)("p",null,"These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur."),(0,o.kt)("h3",{id:"compatibility-with-little-snitch-5"},"Compatibility with Little Snitch 5"),(0,o.kt)("p",null,"At this moment, Network Extension mode in AdGuard isn't compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://obdev.at/products/littlesnitch/index.html"},"Little Snitch 5"),". When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates."),(0,o.kt)("p",null,"It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to ",(0,o.kt)("a",{parentName:"p",href:"#automatic-proxy"},(0,o.kt)("strong",{parentName:"a"},"Automatic Proxy"))," filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug."),(0,o.kt)("h3",{id:"compatibility-with-local-proxies"},"Compatibility with local proxies"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Now AdGuard can filter local proxies (mostly) without any problems. If you encounter any issues in OS versions 11.1+, or if you're using Big Sur 11.0, remove the local proxy from System settings and configure an upstream proxy in AdGuard by following the instruction below.")),(0,o.kt)("p",null,"To configure an upstream proxy in AdGuard for Mac in Big Sur:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard's settings\xa0 ",(0,o.kt)("em",{parentName:"li"},"Preferences \u2192 Network \u2192 Outbound proxy"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose HTTP,\xa0HTTPS,\xa0SOCKS4\xa0or\xa0SOCKS5, depending on your proxy type."),(0,o.kt)("li",{parentName:"ol"},"Fill in the fields:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"host"),"\xa0is the IP address of your proxy server,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port"),"\xa0is the desired port number to be used by the proxy server,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"password"),"\xa0are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable.")))),(0,o.kt)("p",null,"If you run into any problems, please contact our tech support at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,o.kt)("h4",{id:"example-1-configuring-an-upstream-shadowsocks-proxy"},"Example 1: Configuring an upstream Shadowsocks proxy"),(0,o.kt)("p",null,"Here's an example of how to configure an upstream proxy for ",(0,o.kt)("a",{parentName:"p",href:"https://shadowsocks.org"},"Shadowsocks"),"."),(0,o.kt)("p",null,"First of all, you need a working server side for your proxy. Most likely, to set it up, you would use a JSON file like this (",(0,o.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," values were chosen randomly here):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "server":"111.222.333.444",\n   "server_port":8388,\n   "local_port":1080,\n   "password":"barfoo!",\n   "timeout":600,\n   "method":"chacha20-ietf-poly1305"\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find more information about how to get started on ",(0,o.kt)("a",{parentName:"p",href:"https://shadowsocks.org/guide/what-is-shadowsocks.html"},"Shadowsocks website"),".")),(0,o.kt)("p",null,"Then you'd have to install Shadowsocks client on your Mac. Make sure that you select 'Manual Mode' or 'Auto Mode' in its settings! The configuration won't work if you select 'Global Mode' (or 'Auto Mode' in Big Sur versions prior to 11.1)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg",alt:"Select Manual Mode or Auto Mode in settings *mobile"})),(0,o.kt)("p",null,"Now go to ",(0,o.kt)("em",{parentName:"p"},"AdGuard menu \u2192 Advanced \u2192 Advanced Settings...")," and set the ",(0,o.kt)("em",{parentName:"p"},"Value")," area of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"socks5://localhost:1080"),'. Notice that you need to use "local_port" value from the JSON file here.'),(0,o.kt)("p",null,"Because Shadowsocks uses SOCKS5, you also need to set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," setting in AdGuard Advanced Settings to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to make AdGuard route UDP traffic to the proxy server."),(0,o.kt)("h4",{id:"example-2-configuring-an-upstream-surge-proxy"},"Example 2: Configuring an upstream Surge proxy"),(0,o.kt)("p",null,"In Big Sur v11.1+, there are no known conflicts between AdGuard and Surge proxy. If you are using an older version of Big Sur (prior to 11.1), check that ",(0,o.kt)("strong",{parentName:"p"},"System Proxy")," in the bottom right corner is disabled. Otherwise, Surge won't work with AdGuard. On the other hand, ",(0,o.kt)("strong",{parentName:"p"},"Enhanced Mode")," can be enabled without causing a conflict in any Big Sur version."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png",alt:"Configuring an upstream Surge proxy *border"})),(0,o.kt)("p",null,"Now go to ",(0,o.kt)("em",{parentName:"p"},"Preferences \u2192 Network \u2192 Outbound proxy")," and fill in the fields.\nFor SOCKS5 proxy type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"host"),": localhost"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port"),": 6153\nFor HTTP proxy type:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"host"),": localhost"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port"),": 6152")),(0,o.kt)("h2",{id:"alternatives-to-using-a-network-extension"},"Alternatives to using a Network Extension"),(0,o.kt)("p",null,"It's impossible to foresee each and every possible problem that can pop up in Big Sur or Monterey, there are countless various hardware/software and settings configurations. If you face any compatibility issues, please contact our support team, but feel free to try one of these workarounds first."),(0,o.kt)("h3",{id:"automatic-proxy"},'Using "Automatic proxy" filtering mode'),(0,o.kt)("p",null,"If you face problems in Big Sur or Monterey which can't be resolved by any of the methods above, you can try switching AdGuard to ",(0,o.kt)("em",{parentName:"p"},"Automatic proxy")," mode."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard's menu."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("em",{parentName:"li"},"Preferences..."),"."),(0,o.kt)("li",{parentName:"ol"},"Switch to the ",(0,o.kt)("em",{parentName:"li"},"Network")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("em",{parentName:"li"},"Select Mode...")," button."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("em",{parentName:"li"},"Automatic Proxy"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg",alt:"Switch AdGuard to Automatic proxy mode"})),(0,o.kt)("p",null,"Now AdGuard has automatically added a ",(0,o.kt)("strong",{parentName:"p"},".pac")," file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some apps may ignore this system setting and their traffic will not be filtered.")),(0,o.kt)("h3",{id:"kernel-extension"},"Enabling Kernel Extension in Big Sur and Monterey"),(0,o.kt)("p",null,"By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("em",{parentName:"li"},"Apple symbol")," in the Menu bar."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Restart\u2026")),(0,o.kt)("li",{parentName:"ol"},"Hold down ",(0,o.kt)("em",{parentName:"li"},"Command-R")," to reboot into Recovery Mode."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Utilities"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("em",{parentName:"li"},"Terminal"),"."),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"csrutil disable"),"."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("em",{parentName:"li"},"Return")," or ",(0,o.kt)("em",{parentName:"li"},"Enter")," on your keyboard."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("em",{parentName:"li"},"Apple symbol")," in the Menu bar."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Restart\u2026"))),(0,o.kt)("p",null,"Now that SIP is disabled, this is how you enable Kernel Extension:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg",alt:"Enable Kernel Extension"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard's menu."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("em",{parentName:"li"},"Preferences..."),"."),(0,o.kt)("li",{parentName:"ol"},"Switch to the ",(0,o.kt)("em",{parentName:"li"},"Network")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("em",{parentName:"li"},"Select Mode...")," button."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("em",{parentName:"li"},"Kernel Extension"),"."),(0,o.kt)("li",{parentName:"ol"},"Confirm that you want to switch to Kernel Extension.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"However, we only recommend using this method if everything else fails, as this may lead to unexpected issues.")))}u.isMDXComponent=!0}}]);