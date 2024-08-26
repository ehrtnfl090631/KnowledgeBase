"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4357],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var a=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(i),f=l,h=u["".concat(s,".").concat(f)]||u[f]||c[f]||n;return i?a.createElement(h,r(r({ref:t},p),{},{components:i})):a.createElement(h,r({ref:t},p))}));function f(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,r=new Array(n);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<n;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},161:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>c});i(7294);var a=i(3905);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function r(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}const o={title:"Advanced (low-level) Settings guide",sidebar_position:7},s=void 0,d={unversionedId:"adguard-for-windows/solving-problems/low-level-settings",id:"adguard-for-windows/solving-problems/low-level-settings",title:"Advanced (low-level) Settings guide",description:"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, scarica l'app di AdGuard",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/low-level-settings",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced (low-level) Settings guide",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Errore d'installazione comuni",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/common-installer-errors"},next:{title:"How to create a dump file",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/dump-file"}},p={},c=[{value:"Come raggiungere le Impostazioni Avanzate",id:"come-raggiungere-le-impostazioni-avanzate",level:2},{value:"Impostazioni Avanzate",id:"impostazioni-avanzate",level:2},{value:"Block TCP Fast Open",id:"block-tcp-fast-open",level:3},{value:"Use Encrypted ClientHello",id:"use-encrypted-clienthello",level:3},{value:"Check websites&#39; certificate transparency",id:"check-websites-certificate-transparency",level:3},{value:"Enable SSL/TLS certificate revocation checks",id:"enable-ssltls-certificate-revocation-checks",level:3},{value:"Mostra AdGuard VPN nelle Impostazioni",id:"mostra-adguard-vpn-nelle-impostazioni",level:3},{value:"Exclude app from filtering by entering the full path",id:"exclude-app-from-filtering-by-entering-the-full-path",level:3},{value:"Enable AdGuard pop-up notifications",id:"enable-adguard-pop-up-notifications",level:3},{value:"Automatically intercept filter subscription URLs",id:"automatically-intercept-filter-subscription-urls",level:3},{value:"Filtra HTTP/3",id:"filtra-http3",level:3},{value:"Use redirect driver mode",id:"use-redirect-driver-mode",level:3},{value:"Open main window at system start-up",id:"open-main-window-at-system-start-up",level:3},{value:"Enable filtering at system start-up",id:"enable-filtering-at-system-start-up",level:3},{value:"Filtra host locale",id:"filtra-host-locale",level:3},{value:"Escludi gli intervalli IP specificati dal filtraggio",id:"escludi-gli-intervalli-ip-specificati-dal-filtraggio",level:3},{value:"Abilita scrittura HAR",id:"abilita-scrittura-har",level:3},{value:"Add an extra space to the plain HTTP request",id:"add-an-extra-space-to-the-plain-http-request",level:3},{value:"Adjust size of fragmentation of initial TLS packet",id:"adjust-size-of-fragmentation-of-initial-tls-packet",level:3},{value:"Plain HTTP request fragment size",id:"plain-http-request-fragment-size",level:3},{value:"Mostra QUIC",id:"mostra-quic",level:3},{value:"Enable TCP keepalive",id:"enable-tcp-keepalive",level:3},{value:"TCP keepalive interval",id:"tcp-keepalive-interval",level:3},{value:"TCP keepalive timeout",id:"tcp-keepalive-timeout",level:3},{value:"Blocca Java",id:"blocca-java",level:3},{value:"DNS server timeout period",id:"dns-server-timeout-period",level:3},{value:"Use HTTP/3 for DNS-over-HTTPS",id:"use-http3-for-dns-over-https",level:3},{value:"Use fallback DNS upstreams",id:"use-fallback-dns-upstreams",level:3},{value:"Query DNS upstreams in parallel",id:"query-dns-upstreams-in-parallel",level:3},{value:"Always respond to failed DNS queries",id:"always-respond-to-failed-dns-queries",level:3},{value:"Enable filtering of secure DNS requests",id:"enable-filtering-of-secure-dns-requests",level:3},{value:"Blocking mode for hosts rules",id:"blocking-mode-for-hosts-rules",level:3},{value:"Blocking mode for adblock-style rules",id:"blocking-mode-for-adblock-style-rules",level:3},{value:"Custom IPv4 address",id:"custom-ipv4-address",level:3},{value:"Custom IPv6 address",id:"custom-ipv6-address",level:3},{value:"Server di fallback",id:"server-di-fallback",level:3},{value:"Blocca ECH",id:"blocca-ech",level:3},{value:"Elenco di server di fallback personalizzati",id:"elenco-di-server-di-fallback-personalizzati",level:3},{value:"Elenco di indirizzi di boostrap personalizzati",id:"elenco-di-indirizzi-di-boostrap-personalizzati",level:3},{value:"DNS exclusions",id:"dns-exclusions",level:3},{value:"Exclude specified Wi-Fi networks names (SSIDs) from the DNS filtering",id:"exclude-specified-wi-fi-networks-names-ssids-from-the-dns-filtering",level:3}],u={toc:c};function f(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){l(e,t,i[t])}))}return e}({},u,i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"scarica l'app di AdGuard"))),(0,a.kt)("p",null,"Previously known as low-level settings, Advanced Settings mostly contain options that go beyond the average user competence and aren't applied in everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional features in some corner cases or when solving an uncommon problem."),(0,a.kt)("p",null,":::attenzione"),(0,a.kt)("p",null,"Mindlessly changing ",(0,a.kt)("em",{parentName:"p"},"Advanced Settings")," can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only make changes to these settings if you are sure of what you are doing or if our support team has asked you to do so."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"come-raggiungere-le-impostazioni-avanzate"},"Come raggiungere le Impostazioni Avanzate"),(0,a.kt)("p",null,"To go to ",(0,a.kt)("em",{parentName:"p"},"Advanced settings"),", in the main windows click ",(0,a.kt)("em",{parentName:"p"},"Settings \u2192 General Settings")," and scroll down to ",(0,a.kt)("em",{parentName:"p"},"Advanced Settings"),". Alternatively, select ",(0,a.kt)("em",{parentName:"p"},"Advanced \u2192 Advanced settings...")," in the tray menu."),(0,a.kt)("h2",{id:"impostazioni-avanzate"},"Impostazioni Avanzate"),(0,a.kt)("p",null,"Once you open Advanced Settings, you will be presented with the following options:"),(0,a.kt)("h3",{id:"block-tcp-fast-open"},"Block TCP Fast Open"),(0,a.kt)("p",null,"If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser."),(0,a.kt)("h3",{id:"use-encrypted-clienthello"},"Use Encrypted ClientHello"),(0,a.kt)("p",null,"Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the ",(0,a.kt)("em",{parentName:"p"},"Use Encrypted ClientHello")," option. Utilizza un proxy DNS locale per cercare la configurazione ECH per il dominio. Se trovato, il pacchetto ClientHello sar\xe0 crittografato."),(0,a.kt)("h3",{id:"check-websites-certificate-transparency"},"Check websites' certificate transparency"),(0,a.kt)("p",null,"Verifica l'autenticit\xe0 di tutti i certificati per il dominio in base alla Politica di trasparenza dei certificati Chrome. If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. Chrome, in turn, will block it."),(0,a.kt)("h3",{id:"enable-ssltls-certificate-revocation-checks"},"Enable SSL/TLS certificate revocation checks"),(0,a.kt)("p",null,"Once enabled, this option runs asynchronous OCSP checks to check whether the website\u2019s SSL/TLS certificate is revoked."),(0,a.kt)("p",null,"If the OCSP check completes within the minimum timeout, AdGuard will immediately apply the result: block the connection if the certificate is revoked or establish a connection if the certificate is valid."),(0,a.kt)("p",null,"If the verification takes too long, AdGuard will establish a connection and continue checking in the background. Se il certificato viene revocato, le connessioni attuali e future al dominio verranno bloccate."),(0,a.kt)("h3",{id:"mostra-adguard-vpn-nelle-impostazioni"},"Mostra AdGuard VPN nelle Impostazioni"),(0,a.kt)("p",null,"Enabling this option allows you to display the AdGuard VPN tab in Settings for easy opening of the app and the product's website."),(0,a.kt)("h3",{id:"exclude-app-from-filtering-by-entering-the-full-path"},"Exclude app from filtering by entering the full path"),(0,a.kt)("p",null,"If you want AdGuard not to filter any specific application, specify the full path to them and the apps will be excluded from filtering. Separate different paths by semicolons."),(0,a.kt)("h3",{id:"enable-adguard-pop-up-notifications"},"Enable AdGuard pop-up notifications"),(0,a.kt)("p",null,"Enable this feature to see AdGuard pop-up notifications. They do not appear too often and contain only important information. You can also use the tray menu to recall the last pop-up notification."),(0,a.kt)("h3",{id:"automatically-intercept-filter-subscription-urls"},"Automatically intercept filter subscription URLs"),(0,a.kt)("p",null,"Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"abp:subscribe")," and alike) and to open a custom filter installation dialog."),(0,a.kt)("h3",{id:"filtra-http3"},"Filtra HTTP/3"),(0,a.kt)("p",null,"If this option is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types."),(0,a.kt)("h3",{id:"use-redirect-driver-mode"},"Use redirect driver mode"),(0,a.kt)("p",null,"If this option is enabled, AdGuard intercepts all the traffic and redirects it to the local proxy server for further filtering."),(0,a.kt)("p",null,"Otherwise, AdGuard will filter all the traffic on the fly, without redirection. In this case, the system will consider AdGuard to be the sole application that connects to the Internet (other applications are routed through it). The downside is that it will make the system Firewall less effective. The upside is that this approach works a little bit faster."),(0,a.kt)("h3",{id:"open-main-window-at-system-start-up"},"Open main window at system start-up"),(0,a.kt)("p",null,"Abilita quest'opzione per far aprire la finestra principale di AdGuard all'avvio del sistema. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in ",(0,a.kt)("em",{parentName:"p"},"Settings \u2192 General Settings")),(0,a.kt)("h3",{id:"enable-filtering-at-system-start-up"},"Enable filtering at system start-up"),(0,a.kt)("p",null,"Starting from v7.12, by default, AdGuard's service does not filter traffic after OS startup if the option Launch AdGuard at system start-up is disabled. In other words, the AdGuard's service is started in \u201cidle\u201d mode. Enable this option to make AdGuard filter traffic even if the app is not launched."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before v7.12, the AdGuard service started in filtering mode by default (even if the ",(0,a.kt)("em",{parentName:"p"},"Launch AdGuard at system start-up")," was disabled). Se eri soddisfatto del vecchio comportamento, abilita questa opzione.")),(0,a.kt)("h3",{id:"filtra-host-locale"},"Filtra host locale"),(0,a.kt)("p",null,"Se desideri che AdGuard filtri le connessioni di loopback, spunta la casella. Quest'opzione sar\xe0 sempre attiva se hai installato AdGuard VPN, poich\xe9 altrimenti non potr\xe0 funzionare."),(0,a.kt)("h3",{id:"escludi-gli-intervalli-ip-specificati-dal-filtraggio"},"Escludi gli intervalli IP specificati dal filtraggio"),(0,a.kt)("p",null,"Se non desideri che AdGuard filtri determinate sottoreti, abilita questa funzione e specifica gli intervalli IP nella notazione CIDR (ad es. 98.51.100.14/24) nella sezione ",(0,a.kt)("strong",{parentName:"p"},"intervalli IP esclusi dal filtraggio")," di seguito."),(0,a.kt)("h3",{id:"abilita-scrittura-har"},"Abilita scrittura HAR"),(0,a.kt)("p",null,"This option should be enabled ",(0,a.kt)("strong",{parentName:"p"},"only for debugging purposes"),". If you tick the checkmark, AdGuard will create a file that contains information about all filtered HTTP requests in HAR 1.2 format. This file can be analyzed with the Fiddler app. Note that it may slow down your web browsing significantly."),(0,a.kt)("h3",{id:"add-an-extra-space-to-the-plain-http-request"},"Add an extra space to the plain HTTP request"),(0,a.kt)("p",null,"Aggiunge ulteriore spazio tra il metodo HTTP e l'URL e rimuove lo spazio dopo il campo \"Host:\" per evitare l'ispezione approfondita dei pacchetti. Ad esempio, la richiesta"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /foo/bar/ HTTP/1.1\nHost: example.org")),(0,a.kt)("p",null,"sar\xe0 convertito in"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /foo/bar/ HTTP/1.1\nHost: example.org")),(0,a.kt)("p",null,"This option is only applied when the ",(0,a.kt)("em",{parentName:"p"},"Protect from DPI")," Stealth mode option is enabled."),(0,a.kt)("h3",{id:"adjust-size-of-fragmentation-of-initial-tls-packet"},"Adjust size of fragmentation of initial TLS packet"),(0,a.kt)("p",null,"Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic."),(0,a.kt)("p",null,"If this option is enabled, AdGuard splits the initial TLS packet (the ClientHello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet."),(0,a.kt)("p",null,"Valori validi: 1\u20131500. Se viene specificata una dimensione non valida, verr\xe0 utilizzato il valore selezionato dal sistema. This option is only applied when the ",(0,a.kt)("em",{parentName:"p"},"Protect from DPI")," Stealth mode option is enabled."),(0,a.kt)("h3",{id:"plain-http-request-fragment-size"},"Plain HTTP request fragment size"),(0,a.kt)("p",null,"Regola la dimensione della frammentazione della richiesta HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet."),(0,a.kt)("p",null,"Valori validi: 1\u20131500. Se viene specificata una dimensione non valida, verr\xe0 utilizzato il valore selezionato dal sistema. This option is only applied when the ",(0,a.kt)("em",{parentName:"p"},"Protect from DPI")," Stealth mode option is enabled."),(0,a.kt)("h3",{id:"mostra-quic"},"Mostra QUIC"),(0,a.kt)("p",null,"Allows displaying the QUIC protocol records in the filtering log. For blocked requests only."),(0,a.kt)("h3",{id:"enable-tcp-keepalive"},"Enable TCP keepalive"),(0,a.kt)("p",null,"Periodically sends TCP packets over idle connection to ensure it is alive and to renew NAT timeouts. This option can be useful to bypass the strict network address translation (NAT) settings that some ISPs use."),(0,a.kt)("h3",{id:"tcp-keepalive-interval"},"TCP keepalive interval"),(0,a.kt)("p",null,"Here you can specify an idle time period, in seconds, before sending a keepalive probe. Se viene specificato 0, verr\xe0 utilizzato il valore selezionato dal sistema."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This setting only works when the ",(0,a.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled.")),(0,a.kt)("h3",{id:"tcp-keepalive-timeout"},"TCP keepalive timeout"),(0,a.kt)("p",null,"Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. Se viene specificato 0, verr\xe0 utilizzato il valore selezionato dal sistema."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This setting only works when the ",(0,a.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled.")),(0,a.kt)("h3",{id:"blocca-java"},"Blocca Java"),(0,a.kt)("p",null,"Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use ",(0,a.kt)("em",{parentName:"p"},"Block Java")," option, JavaScript will still be enabled."),(0,a.kt)("h3",{id:"dns-server-timeout-period"},"DNS server timeout period"),(0,a.kt)("p",null,"Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don\u2019t fill in this field or enter an invalid value, the value of 5000 will be used."),(0,a.kt)("h3",{id:"use-http3-for-dns-over-https"},"Use HTTP/3 for DNS-over-HTTPS"),(0,a.kt)("p",null,"Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3."),(0,a.kt)("h3",{id:"use-fallback-dns-upstreams"},"Use fallback DNS upstreams"),(0,a.kt)("p",null,"Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail."),(0,a.kt)("h3",{id:"query-dns-upstreams-in-parallel"},"Query DNS upstreams in parallel"),(0,a.kt)("p",null,"All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed."),(0,a.kt)("h3",{id:"always-respond-to-failed-dns-queries"},"Always respond to failed DNS queries"),(0,a.kt)("p",null,"If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVFAIL"),"."),(0,a.kt)("h3",{id:"enable-filtering-of-secure-dns-requests"},"Enable filtering of secure DNS requests"),(0,a.kt)("p",null,"AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests."),(0,a.kt)("h3",{id:"blocking-mode-for-hosts-rules"},"Blocking mode for hosts rules"),(0,a.kt)("p",null,"Here you can select the way AdGuard will respond to domains blocked by DNS rules based on ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax"},"hosts rule syntax"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cRefused\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cNxDomain\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with a custom IP address")),(0,a.kt)("h3",{id:"blocking-mode-for-adblock-style-rules"},"Blocking mode for adblock-style rules"),(0,a.kt)("p",null,"Here you can select the way AdGuard will respond to domains blocked by DNS rules based on ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax"},"adblock-style syntax"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cRefused\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cNxDomain\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with a custom IP address")),(0,a.kt)("h3",{id:"custom-ipv4-address"},"Custom IPv4 address"),(0,a.kt)("p",null,"If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error."),(0,a.kt)("h3",{id:"custom-ipv6-address"},"Custom IPv6 address"),(0,a.kt)("p",null,'If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.'),(0,a.kt)("h3",{id:"server-di-fallback"},"Server di fallback"),(0,a.kt)("p",null,"Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Non utilizzare i server di fallback;"),(0,a.kt)("li",{parentName:"ul"},"Utilizza i server predefiniti di sistema;"),(0,a.kt)("li",{parentName:"ul"},"Utilizza server personalizzati.")),(0,a.kt)("h3",{id:"blocca-ech"},"Blocca ECH"),(0,a.kt)("p",null,"Se abilitata, Adguard elimina i parametri Encrypted ClientHello dalle risposte."),(0,a.kt)("h3",{id:"elenco-di-server-di-fallback-personalizzati"},"Elenco di server di fallback personalizzati"),(0,a.kt)("p",null,"Se desideri che AdGuard utilizzi dei server di fallback personalizzati, elencali in questa sezione, uno per riga."),(0,a.kt)("h3",{id:"elenco-di-indirizzi-di-boostrap-personalizzati"},"Elenco di indirizzi di boostrap personalizzati"),(0,a.kt)("p",null,"Un bootstrap \xe8 un server DNS intermedio utilizzato per ottenere l'indirizzo IP del server DNS sicuro scelto in precedenza in ",(0,a.kt)("em",{parentName:"p"},"Protezione DNS"),'. Una simile "via di mezzo" \xe8 necessaria utilizzando i protocolli che denotano l\'indirizzo del server con delle lettere (come ad esempio DNS su TLS). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.'),(0,a.kt)("p",null,"By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used."),(0,a.kt)("h3",{id:"dns-exclusions"},"DNS exclusions"),(0,a.kt)("p",null,"All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app\u2019s settings. Also, DNS blocking rules will not be applied to such requests."),(0,a.kt)("h3",{id:"exclude-specified-wi-fi-networks-names-ssids-from-the-dns-filtering"},"Exclude specified Wi-Fi networks names (SSIDs) from the DNS filtering"),(0,a.kt)("p",null,"DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again."))}f.isMDXComponent=!0}}]);