"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8661],{4137:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,c=f["".concat(d,".").concat(m)]||f[m]||p[m]||i;return n?t.createElement(c,o(o({ref:r},u),{},{components:n})):t.createElement(c,o({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=n(7462),a=(n(7294),n(4137));const i={title:"So erfassen Sie Protokolle in AdGuard f\xfcr Safari",sidebar_position:4},o=void 0,l={unversionedId:"adguard-for-safari/solving-problems/logs",id:"adguard-for-safari/solving-problems/logs",title:"So erfassen Sie Protokolle in AdGuard f\xfcr Safari",description:"In diesem Artikel geht es um AdGuard f\xfcr Safari, der nur Ihren Safari-Browser sch\xfctzt. Um Ihr gesamtes Ger\xe4t zu sch\xfctzen, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-safari/solving-problems/logs.md",sourceDirName:"adguard-for-safari/solving-problems",slug:"/adguard-for-safari/solving-problems/logs",permalink:"/KnowledgeBase/de/adguard-for-safari/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"So erfassen Sie Protokolle in AdGuard f\xfcr Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Filtern wird nicht beendet, wenn AdGuard f\xfcr Safari deaktiviert ist",permalink:"/KnowledgeBase/de/adguard-for-safari/solving-problems/filters-after-disable"},next:{title:"AdGuard f\xfcr Safari funktioniert nicht in privaten Tabs unter macOS Sonoma",permalink:"/KnowledgeBase/de/adguard-for-safari/solving-problems/private-sonoma"}},d={},s=[{value:"So erstellen Sie Protokolle",id:"so-erstellen-sie-protokolle",level:3}],u={toc:s};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In diesem Artikel geht es um AdGuard f\xfcr Safari, der nur Ihren Safari-Browser sch\xfctzt. Um Ihr gesamtes Ger\xe4t zu sch\xfctzen, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,a.kt)("p",null,"Zur Analyse und Diagnose verschiedener Probleme, die mit AdGuard f\xfcr Safari auftreten k\xf6nnen, ben\xf6tigt der AdGuard-Support m\xf6glicherweise die Protokolldateien. Diese Dateien enthalten Aufzeichnungen \xfcber Fehler und andere Software-Ereignisse. Im Folgenden finden Sie eine kurze Anleitung, wie Sie Protokolle erstellen und bei Bedarf an den Support senden k\xf6nnen."),(0,a.kt)("h3",{id:"so-erstellen-sie-protokolle"},"So erstellen Sie Protokolle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie AdGuard f\xfcr Safari."),(0,a.kt)("li",{parentName:"ol"},"Bl\xe4ttern Sie nach unten und klicken Sie auf ",(0,a.kt)("em",{parentName:"li"},"Protokolle exportieren"),"."),(0,a.kt)("li",{parentName:"ol"},"W\xe4hlen Sie einen Speicherort f\xfcr die .zip-Datei und klicken Sie auf ",(0,a.kt)("em",{parentName:"li"},"Speichern"),".")),(0,a.kt)("p",null,"Jetzt k\xf6nnen Sie diese Datei an ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com")," senden oder sie an Ihren Fehlerbericht auf GitHub anh\xe4ngen."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"AdGuard ist dem Schutz Ihrer Privatsph\xe4re verpflichtet. Wir halten uns strikt an unsere ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/privacy/safari.html"},"Datenschutzerkl\xe4rung")," und sammeln keine privaten Informationen \xfcber Nutzer:innen. Bevor Sie Ihre Protokolle an das Support-Team senden, \xfcberpr\xfcfen Sie bitte die Datei, da sie zus\xe4tzliche Informationen enthalten kann, die Sie vielleicht nicht freigeben m\xf6chten. Wenn sie solche pers\xf6nlichen Informationen enth\xe4lt, empfehlen wir Ihnen, sie zuerst zu l\xf6schen.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie das ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"AdGuard f\xfcr Safari GitHub Repo")," und klicken Sie auf ",(0,a.kt)("em",{parentName:"li"},"New issue"),"."),(0,a.kt)("li",{parentName:"ol"},"Senden Sie die Protokolldatei an ",(0,a.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Geben Sie die Uhrzeit des Fehlers an und f\xfcgen Sie einen Link zu Ihrem Problem oder dessen Nummer hinzu (sie wird neben dem Titel als #Nummer angezeigt).\nAlternativ k\xf6nnen Sie die Protokolldatei auch auf Google Drive hochladen und an ",(0,a.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com"},"devteam@adguard.com")," senden. F\xfcgen Sie den Dateilink zu Ihrem GitHub-Problem hinzu.")))}p.isMDXComponent=!0}}]);