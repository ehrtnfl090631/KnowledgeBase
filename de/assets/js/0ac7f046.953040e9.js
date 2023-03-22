"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1737],{4137:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),u=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(o,".").concat(m)]||p[m]||c[m]||a;return r?t.createElement(g,l(l({ref:n},s),{},{components:r})):t.createElement(g,l({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2270:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var t=r(7462),i=(r(7294),r(4137));const a={title:"iCloud Private Relay und AdGuard",sidebar_position:7},l=void 0,d={unversionedId:"adguard-for-mac/solving-problems/icloud-private-relay",id:"adguard-for-mac/solving-problems/icloud-private-relay",title:"iCloud Private Relay und AdGuard",description:"Problembeschreibung",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/icloud-private-relay.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/icloud-private-relay",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/icloud-private-relay",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/icloud-private-relay.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"iCloud Private Relay und AdGuard",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Startprobleme unter macOS",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/launch-issues"},next:{title:"Mail-Aktivit\xe4ten und AdGuard sch\xfctzen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/protect-mail-activity"}},o={},u=[{value:"Problembeschreibung",id:"problembeschreibung",level:2},{value:"Details",id:"details",level:2},{value:"Empfohlene L\xf6sung",id:"empfohlene-l\xf6sung",level:2},{value:"Alternative L\xf6sung",id:"alternative-l\xf6sung",level:2}],s={toc:u};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"problembeschreibung"},"Problembeschreibung"),(0,i.kt)("p",null,"Standardm\xe4\xdfig verwendet AdGuard die \u201eStandard-Route\u201c, die iCloud Private Relay deaktiviert."),(0,i.kt)("p",null,"Derzeit k\xf6nnen AdGuard und iCloud Private Relay nicht gleichzeitig funktionieren. AdGuard kann keine Anzeigen blockieren, da iCloud Private Relay den Datenverkehr verschl\xfcsselt, bevor AdGuard Netzwerkverbindungen filtern kann.  Wenn iCloud Private Relay aktiv ist, wird jegliche Filterung (einschlie\xdflich lokaler Filterung) unm\xf6glich. Daher kann AdGuard in Safari keinen Datenverkehr filtern oder eine DNS-Filterung durchf\xfchren. Dennoch filtert AdGuard immer noch den Datenverkehr in anderen Browsern. Um iCloud Private Relay weiterhin zu verwenden, sollten Sie ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-safari/overview.html"},"AdGuard f\xfcr Safari")," installieren."),(0,i.kt)("p",null,"Das Gleiche gilt f\xfcr die Verwendung von VPN-Apps auf dem Mac: Sie m\xfcssen sich entscheiden, ob Sie iCloud Private Relay oder einen VPN-Dienst verwenden."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"AdGuard f\xfcr Mac verwendet jetzt die in macOS integrierte Socket-Filterung basierend auf der Netzwerkerweiterungs-API. Dieser neue und ziemlich fehlerhafte Mechanismus ersetzte gute alte Kernel-Erweiterungen. In den letzten 1,5 Jahren haben wir Apple mehr als 20 (!) Fehler bez\xfcglich ihrer neuen Filtermethode gemeldet."),(0,i.kt)("p",null,"Die Netzwerkerweiterungs-API hat eine VPN-\xe4hnliche Konfiguration mit einer Liste routen\xe4hnlicher Eintr\xe4ge. Auf Big Sur hat AdGuard \u201eSplit-Tunnel\u201c-Regeln entwickelt, um die Erstellung der \u201eDefault Route\u201c-Regel zu vermeiden, da diese bei fr\xfchen Big Sur-Versionen Probleme verursacht."),(0,i.kt)("p",null,"Auf Monterey wurde iCloud Private Relay eingef\xfchrt. Datenschutzfunktionen der Mail-App verwenden auch private Relay-Server."),(0,i.kt)("p",null,"Infolgedessen kann AdGuard nicht mit iCloud Private Relay und den Datenschutzfunktionen der Mail-App zusammenarbeiten:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"iCloud Private Relay wird auf Verbindungen auf Bibliotheksebene angewendet \u2013 bevor sie die Socket-Ebene erreichen, auf der AdGuard arbeitet."),(0,i.kt)("li",{parentName:"ol"},"iCloud Private Relay verwendet QUIC, das AdGuard in gefilterten Apps nicht filtern kann, da die HTTP/3-Filterung noch nicht verf\xfcgbar ist."),(0,i.kt)("li",{parentName:"ol"},"Da AdGuard QUIC blockiert, einschlie\xdflich iCloud Private Relay-Datenverkehr, ist eine Anzeigenblockierung ansonsten nicht m\xf6glich."),(0,i.kt)("li",{parentName:"ol"},"Wenn Sie iCloud Private Relay verwenden und AdGuard in den \u201eSplit-Tunnel\u201c-Modus schalten, k\xf6nnen Sie keine Websites in Safari \xf6ffnen."),(0,i.kt)("li",{parentName:"ol"},"Um dieses Problem f\xfcr Monterey zu umgehen, wenden wir die Regel \u201eStandard-Route\u201c an. Wenn Private Relay diese Regel sieht, deaktiviert es sich automatisch. AdGuard funktioniert also nahtlos auf Monterey, aber iCloud Private Relay wird deaktiviert.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")," stellt das \u201eBig Sur\u201c-Verhalten wieder her, aber diese Option kann den Zugriff auf Websites aufgrund von (3) und (4) unterbrechen. Wir suchen weiter nach einer L\xf6sung f\xfcr dieses Problem. Eine der Optionen ist die Implementierung der HTTP/3-Filterung."),(0,i.kt)("h2",{id:"empfohlene-l\xf6sung"},"Empfohlene L\xf6sung"),(0,i.kt)("p",null,"Wir empfehlen die Verwendung von AdGuard zusammen mit einem traditionelleren VPN-Dienst wie ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),"."),(0,i.kt)("h2",{id:"alternative-l\xf6sung"},"Alternative L\xf6sung"),(0,i.kt)("p",null,"Sie k\xf6nnen verhindern, dass AdGuard die \u201eStandard-Route\u201c verwendet, indem Sie die \u201eStandard-Route\u201c deaktivieren.  Dies kann \xfcber Erweiterte Einstellungen \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")," erfolgen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg",alt:"Deaktivieren Sie die Standard-Route in den erweiterten Einstellungen *border"})),(0,i.kt)("p",null,"Beachten Sie, dass Sie in diesem Fall mit den oben beschriebenen Problemen konfrontiert werden."))}c.isMDXComponent=!0}}]);