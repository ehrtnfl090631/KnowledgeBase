(()=>{"use strict";var e,a,f,b,d,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,b,d)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],b=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||c>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<c&&(c=d));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,b,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(d,c),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({2:"1ba08532",53:"935f2afb",73:"343de603",265:"acaf4e3d",307:"56ad02ec",319:"0e20d6ba",370:"561c38ee",412:"60b4f824",495:"d85fc8cb",696:"39f3cff7",718:"dc3179e7",845:"348321e0",857:"4edf336e",881:"741ec58b",891:"80808646",1009:"ec6262d5",1038:"2264e4d3",1219:"4fcb9884",1235:"6fadd864",1263:"41371611",1438:"6fe5737e",1500:"1a7e4f3f",1616:"bf813be9",1780:"35642119",1784:"e553e7ce",1812:"8e5e2844",1921:"239fe9ea",1930:"f59d87f6",1947:"c9773110",1975:"4eb00310",2033:"a3b0fe75",2144:"306cdbae",2155:"a8661516",2177:"0a5bb075",2309:"2f0a1bf2",2361:"650bbc90",2407:"a8e4ca3b",2466:"658e6596",2476:"12c5a5bf",2493:"1cb11ce9",2494:"46c28b4d",2512:"0c86bd4d",2516:"87229ebc",2641:"6222da07",2817:"833da3a0",2840:"4a57d863",2883:"e8a02fa7",2925:"9bab63ad",2944:"78824098",2955:"e74ae3a7",3031:"298d5985",3155:"83769ce1",3185:"2d0ba3fe",3236:"26cafba1",3317:"d9632a19",3342:"c2701665",3344:"07009171",3380:"33bf3f93",3393:"5ba8e24d",3458:"8c011cdc",3492:"b5e4ea7e",3676:"275b6317",3706:"9f571879",3709:"457b5982",3764:"4a48dc5d",3769:"d237bec0",3802:"7aae3888",3806:"332fe855",3812:"dd7b1b1d",3853:"59880946",4168:"c89e42cd",4182:"9570d422",4187:"2b5e0829",4323:"76585a68",4364:"b770c941",4431:"a5c1a230",4559:"7df06933",4595:"28d36b13",4632:"b601c958",4696:"ad69a924",4820:"051262f6",4842:"a9411063",4846:"35067a76",5007:"e6d6f75d",5130:"ad0f385d",5190:"fb0c9f28",5311:"9b9c35ff",5337:"8a465482",5464:"886ae8c9",5479:"f1d7c9d9",5543:"063f2aea",5573:"671f9e5b",5581:"b1357fb4",5674:"b5b3e609",5708:"85e4c757",5728:"30ebdb81",5763:"3864beed",5795:"0e64c389",5864:"52d53f11",5907:"2c2ed6a6",5970:"94c4955c",5978:"fe5ce4df",6077:"c79f7ad8",6126:"f46d3b0f",6269:"55780b29",6346:"9c1e9684",6361:"6080e531",6415:"e1b4ec92",6427:"4f67975e",6459:"5fe73e78",6480:"fa746d03",6582:"fb4c4cfc",6625:"b91663bb",6770:"d37649fa",6833:"29759628",6865:"309bfbed",7011:"ea0f69d0",7059:"1009c622",7150:"b7db96aa",7200:"7b4ffc65",7221:"2679b471",7238:"d310d396",7285:"a3195ac1",7321:"09324444",7354:"61034793",7355:"b05f3e95",7377:"f08a2f54",7413:"252d4fe0",7486:"f1bf7357",7521:"fe63f237",7588:"c38de8de",7595:"cbedf8e2",7602:"f5518177",7622:"f9a23d18",7918:"17896441",7920:"1a4e3797",8084:"2d845f15",8111:"b348f093",8121:"01eb336c",8164:"cc69fd1b",8198:"08cb3c75",8255:"e5e395c2",8339:"5c48186b",8355:"ac01082c",8436:"1390edb2",8522:"0484a616",8540:"cb357075",8709:"049b8a41",8718:"73ff5020",8724:"09221264",8843:"2d162343",8874:"313431ba",8909:"d8cd7f5d",8915:"5eabbd88",9048:"010e6fcc",9100:"e4141fd7",9128:"0013ec79",9148:"a1567901",9152:"4c5e908d",9311:"31b3a610",9324:"fadac138",9514:"1be78505",9536:"db054c66",9671:"0e384e19",9686:"a70e3e19",9782:"3ac99074"}[e]||e)+"."+{2:"dc8566ba",53:"848ade57",73:"982eec69",118:"5eff7227",265:"c67f7427",307:"75204ef1",319:"487bfe00",370:"a0d1e2de",412:"abf1346a",495:"3717cc00",696:"b3e8208e",718:"d927674a",845:"66e67883",857:"13b6f19c",881:"a20503a2",889:"11f667d3",891:"fd151e7c",1009:"be60f95e",1038:"ff131cbe",1219:"d816cc70",1235:"5fb55d65",1263:"e148591c",1438:"10363017",1500:"26b3c391",1616:"39fe449c",1780:"739228f1",1784:"0675e71e",1812:"dab4413b",1921:"2859f86f",1930:"e40b7999",1947:"b609aa3b",1975:"a94193db",2033:"6691c9bd",2144:"c7fd8d25",2155:"2ff33311",2177:"2250971c",2309:"0d82c69e",2361:"1d3a6520",2407:"29cd9025",2466:"c4e5f0bb",2476:"db1e08c5",2493:"cd51beb4",2494:"1328ba69",2512:"d791fabc",2516:"da51f067",2641:"958ca2f8",2664:"0d1470f9",2817:"dc374654",2840:"1fd77570",2883:"2747eece",2925:"4c041528",2944:"988ab13f",2955:"68c0072b",3031:"776130a3",3155:"97851b33",3185:"1d8955a4",3236:"c6d396a7",3317:"6becd850",3342:"f0081bb6",3344:"3257b3ad",3380:"6bfaae43",3393:"bbad1e9b",3458:"6443792a",3492:"546d52ae",3676:"0d3e6311",3706:"c64fffc5",3709:"e7eff79f",3764:"71a6d16e",3769:"764fcd68",3802:"cf9b42ee",3806:"026a798f",3812:"ef1483e5",3853:"77d02c55",4168:"d6f1f8be",4182:"e895e450",4187:"1a22eaea",4323:"641442a0",4364:"6515861a",4431:"aa340c2d",4559:"d5bff1b9",4595:"e285b5a8",4632:"4a99e7d8",4696:"07f4e8cf",4820:"c5abeab5",4842:"0d034ed4",4846:"ce4200df",5007:"8d546ac7",5130:"8ce773f6",5190:"435042c4",5311:"67a9daee",5337:"7effc282",5464:"dbad22fb",5479:"35ddb74c",5543:"4d3e774d",5573:"a6774c1e",5581:"e7c54a9a",5674:"147afb05",5708:"214ca4fa",5728:"9f4b1022",5763:"c4c7ac91",5795:"43a3c1ba",5864:"cd733ecc",5907:"8c18eb10",5970:"73a3b65a",5978:"3dfc3f16",6077:"a76f2bbb",6126:"97ed775e",6269:"fe35f67e",6346:"f1c76fec",6361:"78d787cd",6415:"95bc6b3c",6427:"6bfc720e",6459:"5d0d6000",6480:"73c22edf",6582:"3e28f69d",6625:"8129204b",6770:"667a5d97",6833:"c99747f5",6865:"d30586f1",7011:"36ee36aa",7059:"e0f494e3",7150:"47c23c64",7200:"31d3f2f8",7221:"2e0ad765",7238:"f62d0868",7285:"0905f11a",7321:"1f3ab6d6",7354:"c05133ce",7355:"f1425766",7377:"c8d7c9ef",7413:"109da5f2",7486:"38e911fd",7521:"506ad9bd",7588:"b7dd8d51",7595:"2bbadf0f",7602:"79219bdc",7622:"0cb2574f",7918:"cb9d8cc3",7920:"2cf088e7",7936:"6f933266",8084:"6fffa175",8111:"c4bc6f1d",8121:"01a34a0f",8164:"079317aa",8198:"6c1da2b0",8255:"a6174949",8339:"8e17410a",8340:"266d9dbf",8355:"5b1d7dcb",8436:"4dd38c8c",8522:"86cdb215",8540:"00e04606",8709:"f141991c",8718:"98be5fd7",8724:"46b4a737",8843:"f50f627a",8874:"70cebe68",8909:"48208429",8915:"e46ad7c4",9048:"0a7e55a7",9100:"c34dd978",9128:"ab9ca81d",9148:"61688337",9152:"227ea098",9311:"ad05f42f",9324:"725655a2",9514:"fa9d898d",9536:"57b8354b",9671:"faa5c940",9686:"77c68c4e",9773:"8ed0f3fc",9782:"1f3b1789",9964:"2d41dc84"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},d="adguard-knowledge-base:",r.l=(e,a,f,c)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),b[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var d=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/",r.gca=function(e){return e={17896441:"7918",29759628:"6833",35642119:"1780",41371611:"1263",59880946:"3853",61034793:"7354",78824098:"2944",80808646:"891","1ba08532":"2","935f2afb":"53","343de603":"73",acaf4e3d:"265","56ad02ec":"307","0e20d6ba":"319","561c38ee":"370","60b4f824":"412",d85fc8cb:"495","39f3cff7":"696",dc3179e7:"718","348321e0":"845","4edf336e":"857","741ec58b":"881",ec6262d5:"1009","2264e4d3":"1038","4fcb9884":"1219","6fadd864":"1235","6fe5737e":"1438","1a7e4f3f":"1500",bf813be9:"1616",e553e7ce:"1784","8e5e2844":"1812","239fe9ea":"1921",f59d87f6:"1930",c9773110:"1947","4eb00310":"1975",a3b0fe75:"2033","306cdbae":"2144",a8661516:"2155","0a5bb075":"2177","2f0a1bf2":"2309","650bbc90":"2361",a8e4ca3b:"2407","658e6596":"2466","12c5a5bf":"2476","1cb11ce9":"2493","46c28b4d":"2494","0c86bd4d":"2512","87229ebc":"2516","6222da07":"2641","833da3a0":"2817","4a57d863":"2840",e8a02fa7:"2883","9bab63ad":"2925",e74ae3a7:"2955","298d5985":"3031","83769ce1":"3155","2d0ba3fe":"3185","26cafba1":"3236",d9632a19:"3317",c2701665:"3342","07009171":"3344","33bf3f93":"3380","5ba8e24d":"3393","8c011cdc":"3458",b5e4ea7e:"3492","275b6317":"3676","9f571879":"3706","457b5982":"3709","4a48dc5d":"3764",d237bec0:"3769","7aae3888":"3802","332fe855":"3806",dd7b1b1d:"3812",c89e42cd:"4168","9570d422":"4182","2b5e0829":"4187","76585a68":"4323",b770c941:"4364",a5c1a230:"4431","7df06933":"4559","28d36b13":"4595",b601c958:"4632",ad69a924:"4696","051262f6":"4820",a9411063:"4842","35067a76":"4846",e6d6f75d:"5007",ad0f385d:"5130",fb0c9f28:"5190","9b9c35ff":"5311","8a465482":"5337","886ae8c9":"5464",f1d7c9d9:"5479","063f2aea":"5543","671f9e5b":"5573",b1357fb4:"5581",b5b3e609:"5674","85e4c757":"5708","30ebdb81":"5728","3864beed":"5763","0e64c389":"5795","52d53f11":"5864","2c2ed6a6":"5907","94c4955c":"5970",fe5ce4df:"5978",c79f7ad8:"6077",f46d3b0f:"6126","55780b29":"6269","9c1e9684":"6346","6080e531":"6361",e1b4ec92:"6415","4f67975e":"6427","5fe73e78":"6459",fa746d03:"6480",fb4c4cfc:"6582",b91663bb:"6625",d37649fa:"6770","309bfbed":"6865",ea0f69d0:"7011","1009c622":"7059",b7db96aa:"7150","7b4ffc65":"7200","2679b471":"7221",d310d396:"7238",a3195ac1:"7285","09324444":"7321",b05f3e95:"7355",f08a2f54:"7377","252d4fe0":"7413",f1bf7357:"7486",fe63f237:"7521",c38de8de:"7588",cbedf8e2:"7595",f5518177:"7602",f9a23d18:"7622","1a4e3797":"7920","2d845f15":"8084",b348f093:"8111","01eb336c":"8121",cc69fd1b:"8164","08cb3c75":"8198",e5e395c2:"8255","5c48186b":"8339",ac01082c:"8355","1390edb2":"8436","0484a616":"8522",cb357075:"8540","049b8a41":"8709","73ff5020":"8718","09221264":"8724","2d162343":"8843","313431ba":"8874",d8cd7f5d:"8909","5eabbd88":"8915","010e6fcc":"9048",e4141fd7:"9100","0013ec79":"9128",a1567901:"9148","4c5e908d":"9152","31b3a610":"9311",fadac138:"9324","1be78505":"9514",db054c66:"9536","0e384e19":"9671",a70e3e19:"9686","3ac99074":"9782"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)f.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>b=e[a]=[f,d]));f.push(b[2]=d);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var d=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+c+")",t.name="ChunkLoadError",t.type=d,t.request=c,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var b,d,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)d=c[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();