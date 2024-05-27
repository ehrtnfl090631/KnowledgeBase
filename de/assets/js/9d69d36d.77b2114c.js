"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6341],{4137:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),o=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=o(e.components);return n.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=o(t),f=i,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var u={};for(var d in r)hasOwnProperty.call(r,d)&&(u[d]=r[d]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var o=2;o<a;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7031:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var n=t(7462),i=(t(7294),t(4137));const a={title:"Filter",sidebar_position:3},l=void 0,u={unversionedId:"adguard-for-mac/features/filters",id:"adguard-for-mac/features/filters",title:"Filter",description:"Dieser Artikel behandelt AdGuard f\xfcr Mac, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/features/filters.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/filters",permalink:"/KnowledgeBase/de/adguard-for-mac/features/filters",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/filters.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Filter",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Allgemein",permalink:"/KnowledgeBase/de/adguard-for-mac/features/general"},next:{title:"DNS",permalink:"/KnowledgeBase/de/adguard-for-mac/features/dns"}},d={},o=[{value:"Filter",id:"filter",level:2},{value:"Benutzerregeln",id:"benutzerregeln",level:2}],s={toc:o};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Mac, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/filters.png",alt:"Filter"})),(0,i.kt)("p",null,"Filterlisten sind Regels\xe4tze, die mit einer ",(0,i.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"speziellen Syntax")," geschrieben werden. AdGuard interpretiert und implementiert diese Regeln, um Werbung, Tracker und Bel\xe4stigungen zu blockieren. Einige Filter (z. B. AdGuard Basisfilter Tracker-Schutzfilter oder EasyList) sind bereits vorinstalliert, andere k\xf6nnen zus\xe4tzlich installiert werden."),(0,i.kt)("p",null,"Wir empfehlen, die folgenden Filter zu aktivieren:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AdGuard Basisfilter"),(0,i.kt)("li",{parentName:"ul"},"AdGuard Tracking-Schutzfilter und AdGuard URL-Tracking-Filter"),(0,i.kt)("li",{parentName:"ul"},"AdGuard Bel\xe4stigungsfilter"),(0,i.kt)("li",{parentName:"ul"},"Filter f\xfcr Ihre Sprache")),(0,i.kt)("p",null,"Diese Filter sind wichtig, um die meiste Werbung, Tracker und st\xf6rende Elemente zu blockieren. F\xfcr eine erweiterte Werbeblockierung k\xf6nnen Sie benutzerdefinierte Filter und Benutzerregeln verwenden."),(0,i.kt)("p",null,"Um einen Filter hinzuzuf\xfcgen, klicken Sie auf \u201e+\u201c in der unteren linken Ecke der Liste. Um einen Filter zu aktivieren, markieren Sie das entsprechende Kontrollk\xe4stchen."),(0,i.kt)("h2",{id:"benutzerregeln"},"Benutzerregeln"),(0,i.kt)("p",null,"In AdGuard f\xfcr Mac befinden sich die Benutzerregeln in ",(0,i.kt)("em",{parentName:"p"},"Filter"),". Um eine Regel zu erstellen, klicken Sie auf \u201e+\u201c. Um eine Regel zu aktivieren, markieren Sie das entsprechende Kontrollk\xe4stchen. Um Regeln zu exportieren oder zu importieren, \xf6ffnen Sie das Kontextmen\xfc."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/rules.png",alt:"Benutzerregeln: Kontextmen\xfc"})))}c.isMDXComponent=!0}}]);