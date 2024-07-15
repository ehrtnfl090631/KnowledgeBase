"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5950],{4137:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var o=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),d=function(e){var r=o.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var a=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=t,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?o.createElement(f,i(i({ref:r},c),{},{components:a})):o.createElement(f,i({ref:r},c))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7869:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=a(7462),t=(a(7294),a(4137));const n={title:"C\xf3mo recopilar registros en AdGuard para Safari",sidebar_position:4},i=void 0,s={unversionedId:"adguard-for-safari/solving-problems/logs",id:"adguard-for-safari/solving-problems/logs",title:"C\xf3mo recopilar registros en AdGuard para Safari",description:"Este art\xedculo trata sobre AdGuard para Safari, que protege solo tu navegador Safari. Para proteger todo su dispositivo, descarca la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-safari/solving-problems/logs.md",sourceDirName:"adguard-for-safari/solving-problems",slug:"/adguard-for-safari/solving-problems/logs",permalink:"/KnowledgeBase/es/adguard-for-safari/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"C\xf3mo recopilar registros en AdGuard para Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"El filtrado no se detiene cuando AdGuard para Safari est\xe1 desactivado",permalink:"/KnowledgeBase/es/adguard-for-safari/solving-problems/filters-after-disable"},next:{title:"AdGuard para Safari no funciona en pesta\xf1as privadas en macOS Sonoma",permalink:"/KnowledgeBase/es/adguard-for-safari/solving-problems/private-sonoma"}},l={},d=[{value:"C\xf3mo recopilar registros",id:"c\xf3mo-recopilar-registros",level:3}],c={toc:d};function p(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,o.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Safari, que protege solo tu navegador Safari. Para proteger todo su dispositivo, ",(0,t.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"descarca la aplicaci\xf3n AdGuard"))),(0,t.kt)("p",null,"Para analizar y diagnosticar diversos problemas que pueden ocurrir con AdGuard para Safari, es posible que el servicio de soporte de AdGuard necesite tus archivos de registro. Estos archivos contienen registros de errores y otros eventos de software. A continuaci\xf3n se muestran breves instrucciones sobre c\xf3mo recopilar registros y enviarlos al soporte si es necesario."),(0,t.kt)("h3",{id:"c\xf3mo-recopilar-registros"},"C\xf3mo recopilar registros"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Abre la aplicaci\xf3n AdGuard para Safari."),(0,t.kt)("li",{parentName:"ol"},"Despl\xe1zate hacia abajo y haz clic en ",(0,t.kt)("em",{parentName:"li"},"Exportar registros"),"."),(0,t.kt)("li",{parentName:"ol"},"Elige una ubicaci\xf3n para guardar el archivo .zip y haz clic en ",(0,t.kt)("em",{parentName:"li"},"Guardar"),".")),(0,t.kt)("p",null,"Ahora puedes enviar este archivo a ",(0,t.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com")," o adjuntarlo a tu informe de error en GitHub."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"AdGuard se compromete a proteger tu privacidad. Seguimos estrictamente nuestra ",(0,t.kt)("a",{parentName:"p",href:"https://adguard.com/privacy/safari.html"},"Pol\xedtica de Privacidad")," y no recopilamos ninguna informaci\xf3n privada sobre los usuarios. Antes de enviar tus registros al equipo de soporte, revisa el archivo, ya que puede contener informaci\xf3n adicional que no deseas compartir. Si contiene informaci\xf3n personal, te recomendamos que la elimines primero.")),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Abre el ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"repositorio GitHub de AdGuard para Safari")," y haz clic en ",(0,t.kt)("em",{parentName:"li"},"New issue"),"."),(0,t.kt)("li",{parentName:"ol"},"Env\xeda el archivo de registro a ",(0,t.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Incluye la hora del error y adjunta un enlace a tu issue o su n\xfamero (aparece como #n\xfamero junto al t\xedtulo).\nAlternativamente, puedes transferir el archivo de registro en Google Drive y enviarlo a ",(0,t.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Agrega el enlace del archivo a tu problema de GitHub.")))}p.isMDXComponent=!0}}]);