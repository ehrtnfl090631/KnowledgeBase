"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7888],{4137:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>m});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return r?t.createElement(f,i(i({ref:a},u),{},{components:r})):t.createElement(f,i({ref:a},u))}));function m(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6983:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var t=r(7462),o=(r(7294),r(4137));const n={title:"Protecci\xf3n para Safari",sidebar_position:1},i=void 0,s={unversionedId:"adguard-for-ios/features/safari-protection",id:"adguard-for-ios/features/safari-protection",title:"Protecci\xf3n para Safari",description:"Este art\xedculo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-ios/features/safari-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/safari-protection",permalink:"/KnowledgeBase/es/adguard-for-ios/features/safari-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/safari-protection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Protecci\xf3n para Safari",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to use Samsung Pay with AdGuard in South Korea",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"},next:{title:"Protecci\xf3n DNS",permalink:"/KnowledgeBase/es/adguard-for-ios/features/dns-protection"}},l={},d=[{value:"Bloqueadores de contenido",id:"content-blockers",level:3},{value:"Filtros",id:"filters",level:3},{value:"Reglas de usuario",id:"user-rules",level:3},{value:"Lista de permisos",id:"allowlist",level:3}],u={toc:d};function c(e){let{components:a,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver c\xf3mo funciona, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"descarga la aplicaci\xf3n AdGuard"))),(0,o.kt)("h3",{id:"content-blockers"},"Bloqueadores de contenido"),(0,o.kt)("p",null,"Los bloqueadores de contenido sirven como 'contenedores' para reglas de filtrado que hacen el trabajo real de bloquear anuncios y rastreo. AdGuard para iOS contiene seis bloqueadores de contenido: General, Privacidad, Social, Seguridad, Personalizado y Otros. Anteriormente, Apple solo permit\xeda que cada bloqueador de contenido contuviera un m\xe1ximo de 50K reglas de filtrado, pero con la salida de iOS 15, el l\xedmite m\xe1ximo se ha aumentado a 150K reglas."),(0,o.kt)("p",null,"Todos los bloqueadores de contenido, sus estados, qu\xe9 filtros tem\xe1ticos incluyen actualmente y el total de reglas de filtrado utilizadas se pueden encontrar en la pantalla respectiva en ",(0,o.kt)("em",{parentName:"p"},"Configuraci\xf3n avanzada")," (tocar el icono de engranaje en la esquina inferior derecha \u2192 ",(0,o.kt)("em",{parentName:"p"},"General")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Configuraci\xf3n avanzada")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Bloqueadores de contenido"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg",alt:"Bloqueadores de contenido *mobile_border"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Mant\xe9n todos los bloqueadores de contenido habilitados para la mejor calidad de filtrado.")),(0,o.kt)("h3",{id:"filters"},"Filtros"),(0,o.kt)("p",null,"El trabajo de los bloqueadores de contenido se basa en filtros, a veces tambi\xe9n conocidos como listas de filtros. Cada filtro es una lista de reglas de filtrado. Si tienes un bloqueador de anuncios habilitado al navegar, verifica constantemente las p\xe1ginas visitadas y los elementos en ellos con respecto a estas reglas de filtrado, y bloquea cualquier elemento que coincida. Las reglas se desarrollan para bloquear anuncios, rastreadores y m\xe1s."),(0,o.kt)("p",null,"Todos los filtros se agrupan en categor\xedas tem\xe1ticas. Para ver la lista completa de estas categor\xedas (no confundir con bloqueadores de contenido), abre la secci\xf3n de ",(0,o.kt)("em",{parentName:"p"},"Protecci\xf3n")," tocando el icono del escudo, luego ve a ",(0,o.kt)("em",{parentName:"p"},"Protecci\xf3n de Safari")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Filtros"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg",alt:"Grupos de filtrado *mobile_border"})),(0,o.kt)("p",null,"Hay ocho de ellos, cada categor\xeda une varios filtros que sirven y comparten un prop\xf3sito com\xfan: bloquear anuncios, widgets de redes sociales, anuncios de cookies, protegiendo al usuario de estafas en l\xednea. Para decidir qu\xe9 filtros se adaptan a tus necesidades, lee sus descripciones y navega por las etiquetas (",(0,o.kt)("inlineCode",{parentName:"p"},"anuncios"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"privacidad"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"recomendado"),", etc.)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Un mayor n\xfamero de filtros activados no garantiza que haya menos anuncios. Un gran n\xfamero de varios filtros habilitados simult\xe1neamente reduce la calidad del bloqueo de anuncios.")),(0,o.kt)("p",null,"La categor\xeda de filtros personalizados est\xe1 vac\xeda de forma predeterminada para que los usuarios a\xf1adan sus filtros mediante URL. Puedes encontrar filtros en Internet o incluso intentar ",(0,o.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"crear uno por ti mismo"),"."),(0,o.kt)("h3",{id:"user-rules"},"Reglas de usuario"),(0,o.kt)("p",null,"Aqu\xed puedes a\xf1adir nuevas reglas, ya sea ingres\xe1ndolas manualmente o usando ",(0,o.kt)("a",{parentName:"p",href:"#assistant"},"la herramienta de bloqueo manual de AdGuard en Safari"),". Utiliza esta herramienta para personalizar el filtrado de Safari sin agregar una lista completa de filtros."),(0,o.kt)("p",null,"Aprenda ",(0,o.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"c\xf3mo crear tus propios filtros de anuncios"),". Pero ten en cuenta que muchos de ellos no funcionar\xe1n en Safari en iOS."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg",alt:"Pantalla de Reglas de usuario *mobile_border"})),(0,o.kt)("h3",{id:"allowlist"},"Lista de permisos"),(0,o.kt)("p",null,"La tercera secci\xf3n de la pantalla ",(0,o.kt)("em",{parentName:"p"},"Protecci\xf3n Safari"),". Si deseas deshabilitar el bloqueo de anuncios en un sitio web espec\xedfico, la Lista de permitidos ser\xe1 de ayuda. Te permite a\xf1adir dominios y subdominios a exclusiones. AdGuard para iOS cuenta con una funci\xf3n de Importar/Exportar, por lo que la lista blanca de un dispositivo puede transferirse f\xe1cilmente a otro."))}c.isMDXComponent=!0}}]);