(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2230e100":"f45cf246","chunk-2d0b6d16":"c4147560"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2230e100":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2230e100":"b43902a3","chunk-2d0b6d16":"31d6cfe0"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],b.parentNode.removeChild(b),n(o)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0304":function(e,t,n){"use strict";n("1007")},"09a7":function(e,t,n){"use strict";n("8a52")},"0e64":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"content-grid"};function c(e,t,n,c,o,i){var u=Object(r["x"])("card");return Object(r["s"])(),Object(r["f"])("div",a,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(n.cardsData,(function(e,t){return Object(r["s"])(),Object(r["d"])(u,{key:"card-".concat(t),data:e,labels:o.labels},null,8,["data","labels"])})),128))])}n("99af");var o={class:"content-card"},i={class:"image-container"},u=["src"],s={class:"label"},l={class:"value"};function d(e,t,n,a,c,d){return Object(r["s"])(),Object(r["f"])("div",o,[Object(r["g"])("div",i,[Object(r["g"])("img",{src:d.imgSrc,alt:"Motorcycle"},null,8,u)]),Object(r["g"])("ul",null,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(n.labels,(function(e,t){return Object(r["s"])(),Object(r["f"])("li",{key:"card-data-".concat(e,"-").concat(t)},[Object(r["g"])("span",s,Object(r["z"])(e),1),Object(r["g"])("span",l,Object(r["z"])(n.data[e]),1)])})),128))])])}n("ac1f"),n("5319");var b={name:"ContentGrid",props:{data:{type:Object,required:!0,validator:function(){return!0}},labels:{type:Array,required:!0,validator:function(){return!0}},description:{type:String}},computed:{imgSrc:function(){if(this.data&&this.data.model)try{var e=this.data.model.toLowerCase().replace(/\s/g,"");return n("e078")("./"+e+".png")}catch(t){console.log(t.message)}return""}}};n("0304");b.render=d;var f=b,p={name:"ContentGrid",props:{cardsData:{type:Array,required:!0,validator:function(){return!0}}},data:function(){return{labels:["manufacturer","model","year","color","displacement","power","description"]}},components:{Card:f},methods:{setGridItemPlacement:function(e){return"\n\t\t\t\t-ms-grid-colum: ".concat(e-e%2,";\n\t\t\t\t-ms-grid-colum-span: 1;\n\t\t\t\t-ms-grid-row: ").concat(e-e%2,";\n\t\t\t\t-ms-grid-row-span: 1;\n\t\t\t\tgrid-row: ").concat(e-e%2," / span 1\n\t\t\t\tgrid-column: ").concat(e-e%2," / span 1;\n\t\t\t")}}};n("6a7e");p.render=c;t["default"]=p},1007:function(e,t,n){},"210c":function(e,t,n){e.exports=n.p+"img/monster821stealth.6c619f58.png"},"33d5":function(e,t,n){},3795:function(e,t,n){},"40e8":function(e,t,n){},"41ad":function(e,t,n){"use strict";n("40e8")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getBikesData",(function(){return b}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=n("6c02");function o(e,t,n,r,c,o){var i=Object(a["x"])("router-view");return Object(a["s"])(),Object(a["d"])(i)}var i=n("5530"),u=n("5502"),s={name:"App",components:{},created:function(){this.getBikesData()},methods:Object(i["a"])({},Object(u["b"])(["getBikesData"]))};n("41ad");s.render=o;var l=s,d=n("1da1");n("96cf"),n("d3b7"),n("3ca3"),n("ddb0");function b(e){return f.apply(this,arguments)}function f(){return f=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,n.e("chunk-2d0b6d16").then(n.bind(null,"1f7b"));case 4:a=e.sent,r("UPDATE_DATA_LIST",a.bikes),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("Unable to get data async",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),f.apply(this,arguments)}var p=Object(u["a"])({state:{bikes:null},mutations:{UPDATE_DATA_LIST:function(e,t){e.bikes=t}},getters:{bikes:function(e){return e.bikes}},actions:r}),g=p;function m(e,t,n,r,c,o){var i=Object(a["x"])("banner"),u=Object(a["x"])("content-table"),s=Object(a["x"])("content-grid");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["h"])(i),Object(a["g"])("div",{class:Object(a["o"])("display-toggle ".concat(c.activeView)),onClick:t[0]||(t[0]=function(){return o.toggleActiveView&&o.toggleActiveView.apply(o,arguments)})}," Table Grid ",2),"table"==c.activeView?(Object(a["s"])(),Object(a["d"])(u,{key:0,tableData:o.tableData},null,8,["tableData"])):Object(a["e"])("",!0),"grid"==c.activeView?(Object(a["s"])(),Object(a["d"])(s,{key:1,cardsData:e.bikes},null,8,["cardsData"])):Object(a["e"])("",!0)])}var v={id:"banner"},O=Object(a["g"])("h1",null,"Motorcycles",-1),h=[O];function j(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",v,h)}var y={name:"Banner"};n("783f");y.render=j;var k=y,w={name:"MainPage",components:{Banner:k,ContentTable:Object(a["i"])((function(){return n.e("chunk-2230e100").then(n.bind(null,"488d"))})),ContentGrid:Object(a["i"])((function(){return Promise.resolve().then(n.bind(null,"0e64"))}))},data:function(){return{activeView:"grid"}},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["bikes"])),{},{tableData:function(){return{tableHeaders:["Model","Manufacturer","Year","Color","Displacement","Power"],dataList:this.bikes||[]}}}),methods:{toggleActiveView:function(){this.activeView="grid"==this.activeView?"table":"grid"}}};n("09a7");w.render=m;var x=w;function D(e,t,n,r,c,o){var i=Object(a["x"])("banner"),u=Object(a["x"])("content-grid");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["h"])(i),Object(a["h"])(u,{cardsData:o.oneBike},null,8,["cardsData"])])}var A=n("0e64"),C={name:"FocusedPage",components:{Banner:k,ContentGrid:A["default"]},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["bikes"])),{},{oneBike:function(){return[this.bikes[0]]}})};C.render=D;var P=C,T=[{path:"/",component:x},{path:"/item",component:P}],_=Object(c["a"])({history:Object(c["b"])(),routes:T}),S=Object(a["c"])(l);S.use(g),S.use(_),S.mount("#app")},"6a7e":function(e,t,n){"use strict";n("33d5")},"783f":function(e,t,n){"use strict";n("3795")},8465:function(e,t,n){e.exports=n.p+"img/scoutbobber.f052b1f9.png"},"8a52":function(e,t,n){},e078:function(e,t,n){var r={"./f750gs.png":"ecdd","./monster821stealth.png":"210c","./panigalev4.png":"e2b3","./scoutbobber.png":"8465"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="e078"},e2b3:function(e,t,n){e.exports=n.p+"img/panigalev4.11d5313d.png"},ecdd:function(e,t,n){e.exports=n.p+"img/f750gs.a098a00c.png"}});
//# sourceMappingURL=app.a7a33b74.js.map