(()=>{"use strict";var e,a,d,c,f,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=b,r.c=t,e=[],r.O=(a,d,c,f)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],f=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(f,b),f},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",161:"892d31ec",250:"55f49e22",265:"4bdecc23",315:"fad6c5a2",319:"0e20d6ba",389:"bbeea708",405:"9deea829",408:"c1876fa7",412:"7d56e147",543:"00987b33",587:"d8655c97",650:"7a4f9866",665:"cf87b807",718:"dc3179e7",820:"6e5650eb",907:"d2121e99",970:"ed8e7d5e",986:"1537e818",1040:"20077b4d",1047:"43644337",1071:"83d83f8c",1114:"531835d4",1115:"11de6573",1160:"f1984692",1246:"e8b459e0",1259:"cbc51da8",1385:"87a09c98",1438:"399ffc71",1446:"3821f290",1489:"a7a15489",1521:"2c6170ac",1529:"cfd8722f",1538:"bc9a0180",1685:"656e81ee",1933:"9a9203f5",1936:"cb01fca4",2052:"d9c7b66a",2060:"6819810d",2126:"62ef96f1",2131:"06d318e8",2146:"bd9ee42f",2177:"0a5bb075",2334:"dd9f5360",2476:"12c5a5bf",2543:"d0f56664",2585:"ac37d0a5",2611:"412deeb0",2776:"398e081e",2793:"a191d15c",2944:"a2936344",3010:"d1fa0229",3071:"211fb828",3106:"fdd7ae8b",3120:"b8749589",3235:"dfa09520",3243:"c870168f",3296:"0c886257",3460:"bee2a0f2",3622:"3260c497",3776:"aa4c97a5",3800:"50fec53b",3811:"af69f01f",3828:"bbec4293",3843:"4d750ad6",3853:"59880946",3887:"64063c08",3906:"38373492",3965:"a967cbba",4020:"39ae454d",4047:"c41815fd",4161:"2b133cf4",4170:"47d31c6b",4182:"9570d422",4183:"9e1d2dc4",4296:"5eab54b5",4385:"b9366bc9",4576:"a6883c94",4593:"88f4a476",4676:"ba9fa291",4707:"0beb55d8",4724:"00b4f4fd",4781:"438242b8",4785:"d552e3a6",4795:"932e42cc",4837:"a581c0ba",4841:"495b610b",4842:"a9411063",5002:"56bd7d02",5029:"16f031c9",5066:"7bc47e07",5090:"e0b16f52",5185:"68d42844",5217:"f0007053",5275:"a6cdc1ba",5311:"9b9c35ff",5423:"bd54c353",5460:"23e467e2",5772:"208030f9",5807:"46b2e2a9",5883:"29d7a1a7",5910:"36a4288b",5940:"3dcec31c",6001:"681c7c6f",6051:"60f0cc0e",6305:"0ba6dfe0",6679:"b43cb664",6683:"21dfdc71",6686:"1b14f9fe",6755:"0085d902",6782:"4dc4ecca",6816:"55b1f065",6861:"d669643e",7023:"8626d329",7066:"8cebee27",7138:"9698e9f4",7192:"e518d58b",7201:"9e134ea1",7279:"13c170a2",7305:"3dbbc5e4",7478:"2ef8d3e7",7623:"54737fdc",7652:"36d140f8",7660:"8d3bad92",7662:"4637cbf5",7831:"ef1d47d3",7850:"031ba698",7900:"67a376ba",7918:"17896441",7920:"1a4e3797",7921:"2960a22f",8004:"082c41bb",8048:"64ac5d7b",8164:"cc69fd1b",8225:"acaf4e3d",8251:"053054b9",8358:"aee4c22b",8365:"81afbb1c",8418:"ac41cbd5",8534:"47785216",8587:"d6ed0973",8593:"1fc71146",8621:"a8192e76",8663:"d40d954b",8709:"049b8a41",8774:"036a33fa",8827:"55c7c5fe",8912:"ef1934a1",9005:"1c4088fd",9179:"faf9acd3",9279:"438de942",9495:"e7529c93",9514:"1be78505",9531:"35409bb2",9614:"e45d603e",9676:"a382bdc8",9683:"9d7e2bcb",9695:"8652c812",9918:"aaf93c29",9949:"4b381602",9994:"932d81ab"}[e]||e)+"."+{53:"ca80d8de",118:"f086678f",161:"6a466f84",250:"8e181680",265:"763776c7",315:"62f76559",319:"487bfe00",389:"2bb70d07",405:"e98db104",408:"a5c048a3",412:"c476b358",511:"6b7af6f3",543:"4b9c5ddf",587:"e28484dc",650:"6e2596c7",665:"6fe29b71",718:"94d40ee1",820:"11e35004",907:"47665337",970:"240335c6",986:"f08d6112",1040:"a54f1ad2",1047:"5dbad982",1071:"8cd1ae0e",1114:"14156f53",1115:"c2dc1ef9",1144:"365b509b",1160:"1899d2d8",1246:"b433edfd",1259:"55bd117d",1385:"ebeddd08",1438:"41dac579",1446:"f07a0748",1489:"fb37e9d0",1521:"ff2f0ecc",1529:"0030885d",1538:"94c18c79",1685:"9dfc61e9",1933:"b1bf25f1",1936:"143bdff3",2052:"8a1e4d95",2060:"02c77172",2126:"f5fa66cf",2131:"215d73b3",2146:"13728557",2177:"ce37b5d2",2334:"29643627",2476:"6f6e7892",2543:"8ace6434",2585:"0c888118",2611:"d992598b",2664:"0d1470f9",2776:"14c471ae",2793:"bd99e305",2944:"033bff55",3010:"71b9f4ef",3071:"09012b8c",3106:"9655f446",3120:"42e49d7b",3235:"9eee06dc",3243:"188f0387",3296:"d45a9ddd",3460:"6b96c30a",3622:"43d9d515",3776:"89d8dcc2",3800:"143bf88b",3811:"889dc419",3828:"f593d8be",3843:"f67aff17",3853:"77d02c55",3887:"38e34639",3906:"a7866982",3965:"fb664b43",4020:"8f18a389",4047:"39cd61b8",4161:"efbffc6b",4170:"85a9f91e",4182:"4eee65ab",4183:"23e633d1",4248:"37e6ab5b",4296:"ca39b062",4385:"5e78dbec",4576:"3aff1001",4593:"00fecb44",4676:"225825c6",4707:"7d5edb87",4724:"7901286a",4781:"9ffae936",4785:"8b2f0e4b",4795:"be93487c",4837:"5cb5fdb4",4841:"a57dec13",4842:"b9124b5d",5002:"a7110170",5029:"818f285a",5066:"05853431",5090:"848c2b01",5185:"c38d47b7",5217:"9cb06e30",5275:"c2d937ad",5311:"b85ce964",5423:"aa5c6543",5460:"aada441f",5772:"12b762e5",5807:"2edb2562",5883:"716802db",5910:"9b4045b8",5940:"6f3e4bab",6001:"013c5d67",6051:"af9ea9dc",6305:"5d4b3726",6679:"1bfabed0",6683:"51022115",6686:"25980e73",6755:"42da4ecf",6782:"2db0d0da",6816:"12b5dbd9",6861:"de3a1944",7023:"d889dae0",7066:"7d63bed9",7138:"d49d1a04",7192:"99fa803e",7201:"139adeb3",7279:"e8ccb3d5",7305:"5d88ee77",7478:"2dac4f42",7623:"ba40ce2c",7652:"9b5c0da3",7660:"d1602037",7662:"4a63d5e7",7831:"c34bdf30",7850:"67ee5750",7900:"0e84fce6",7918:"03705839",7920:"2cf088e7",7921:"e890e80c",7936:"6f933266",8004:"f1b04174",8048:"29780f22",8164:"12220995",8225:"c0b678bc",8251:"6d5bf35e",8358:"d7745d9a",8365:"aeff28c2",8418:"e9a921b2",8534:"2caef7a7",8587:"f0d36285",8593:"07d66eb5",8621:"22e217dc",8663:"92283341",8709:"55b1e829",8774:"02c8311e",8827:"16f8dd46",8912:"79660dfe",9005:"482cd6be",9179:"f6ee203b",9279:"266f0ee5",9495:"10163ce7",9514:"efa55ca1",9531:"43e2e111",9614:"cd817314",9676:"3ca74297",9683:"06511d6c",9695:"88c4a25f",9918:"f5f7b650",9949:"3b2831f0",9964:"2d41dc84",9994:"a9331617"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="adguard-knowledge-base:",r.l=(e,a,d,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/ko/",r.gca=function(e){return e={17896441:"7918",38373492:"3906",43644337:"1047",47785216:"8534",59880946:"3853","935f2afb":"53","892d31ec":"161","55f49e22":"250","4bdecc23":"265",fad6c5a2:"315","0e20d6ba":"319",bbeea708:"389","9deea829":"405",c1876fa7:"408","7d56e147":"412","00987b33":"543",d8655c97:"587","7a4f9866":"650",cf87b807:"665",dc3179e7:"718","6e5650eb":"820",d2121e99:"907",ed8e7d5e:"970","1537e818":"986","20077b4d":"1040","83d83f8c":"1071","531835d4":"1114","11de6573":"1115",f1984692:"1160",e8b459e0:"1246",cbc51da8:"1259","87a09c98":"1385","399ffc71":"1438","3821f290":"1446",a7a15489:"1489","2c6170ac":"1521",cfd8722f:"1529",bc9a0180:"1538","656e81ee":"1685","9a9203f5":"1933",cb01fca4:"1936",d9c7b66a:"2052","6819810d":"2060","62ef96f1":"2126","06d318e8":"2131",bd9ee42f:"2146","0a5bb075":"2177",dd9f5360:"2334","12c5a5bf":"2476",d0f56664:"2543",ac37d0a5:"2585","412deeb0":"2611","398e081e":"2776",a191d15c:"2793",a2936344:"2944",d1fa0229:"3010","211fb828":"3071",fdd7ae8b:"3106",b8749589:"3120",dfa09520:"3235",c870168f:"3243","0c886257":"3296",bee2a0f2:"3460","3260c497":"3622",aa4c97a5:"3776","50fec53b":"3800",af69f01f:"3811",bbec4293:"3828","4d750ad6":"3843","64063c08":"3887",a967cbba:"3965","39ae454d":"4020",c41815fd:"4047","2b133cf4":"4161","47d31c6b":"4170","9570d422":"4182","9e1d2dc4":"4183","5eab54b5":"4296",b9366bc9:"4385",a6883c94:"4576","88f4a476":"4593",ba9fa291:"4676","0beb55d8":"4707","00b4f4fd":"4724","438242b8":"4781",d552e3a6:"4785","932e42cc":"4795",a581c0ba:"4837","495b610b":"4841",a9411063:"4842","56bd7d02":"5002","16f031c9":"5029","7bc47e07":"5066",e0b16f52:"5090","68d42844":"5185",f0007053:"5217",a6cdc1ba:"5275","9b9c35ff":"5311",bd54c353:"5423","23e467e2":"5460","208030f9":"5772","46b2e2a9":"5807","29d7a1a7":"5883","36a4288b":"5910","3dcec31c":"5940","681c7c6f":"6001","60f0cc0e":"6051","0ba6dfe0":"6305",b43cb664:"6679","21dfdc71":"6683","1b14f9fe":"6686","0085d902":"6755","4dc4ecca":"6782","55b1f065":"6816",d669643e:"6861","8626d329":"7023","8cebee27":"7066","9698e9f4":"7138",e518d58b:"7192","9e134ea1":"7201","13c170a2":"7279","3dbbc5e4":"7305","2ef8d3e7":"7478","54737fdc":"7623","36d140f8":"7652","8d3bad92":"7660","4637cbf5":"7662",ef1d47d3:"7831","031ba698":"7850","67a376ba":"7900","1a4e3797":"7920","2960a22f":"7921","082c41bb":"8004","64ac5d7b":"8048",cc69fd1b:"8164",acaf4e3d:"8225","053054b9":"8251",aee4c22b:"8358","81afbb1c":"8365",ac41cbd5:"8418",d6ed0973:"8587","1fc71146":"8593",a8192e76:"8621",d40d954b:"8663","049b8a41":"8709","036a33fa":"8774","55c7c5fe":"8827",ef1934a1:"8912","1c4088fd":"9005",faf9acd3:"9179","438de942":"9279",e7529c93:"9495","1be78505":"9514","35409bb2":"9531",e45d603e:"9614",a382bdc8:"9676","9d7e2bcb":"9683","8652c812":"9695",aaf93c29:"9918","4b381602":"9949","932d81ab":"9994"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var b=r.p+r.u(a),t=new Error;r.l(b,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,b=d[0],t=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},d=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();