(function(t){function e(e){for(var r,a,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-143478ae":"22d9272c","chunk-7e220e23":"bb940272","chunk-dac5011c":"f6fd85f8","chunk-382edc61":"4dae9306","chunk-e20963aa":"84efb1ac"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-143478ae":1,"chunk-7e220e23":1,"chunk-dac5011c":1,"chunk-382edc61":1,"chunk-e20963aa":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-143478ae":"ecb7da77","chunk-7e220e23":"24f8fb91","chunk-dac5011c":"033b4155","chunk-382edc61":"5bee82ab","chunk-e20963aa":"b2a9f99e"}[t]+".css",c=i.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/test-task/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2887:function(t,e,n){},"3e71":function(t,e,n){"use strict";n("a435")},"4c5a":function(t,e,n){"use strict";n("7d7b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.currentComponent,{tag:"component",on:{"change-route":t.changeRoute}})},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-layout",{attrs:{showSubHeader:""}},[n("main-layout-header"),n("p",{staticClass:"subtitle"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure? ")]),n("BasicInput",{attrs:{title:"lorem",clearBtn:""}}),n("BasicInput",{attrs:{title:"lorem"}}),n("div",{staticClass:"buttons"},[n("BasicButton",{staticClass:"login-btn",attrs:{backBtn:"",titleBtn:"lorem"}}),n("BasicButton",{staticClass:"login-btn",attrs:{colorClass:"green",titleBtn:"lorem"},on:{"click-btn":function(e){return t.$emit("change-route","OrderPage")}}})],1)],1)},s=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-layout-header"},["login"===t.routerPage?r("span",[t._v("Lorem ipsum dolor sit amet.")]):r("switch-component"),r("img",{attrs:{src:n("c121"),alt:"user"}})],1)}),u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-switch"},[n("div",{staticClass:"custom-switch__first",class:{active:"first"===t.activeTab},on:{click:function(e){t.activeTab="first"}}},[n("span",[t._v("Lorem, ipsum dolor.")])]),n("div",{staticClass:"custom-switch__second",class:{active:"second"===t.activeTab},on:{click:function(e){t.activeTab="second"}}},[n("span",[t._v("Lorem, ipsum dolor.")])])])},f=[],d={name:"SwitchComponent",data:function(){return{activeTab:"second"}}},p=d,h=(n("f4fe"),n("2877")),b=Object(h["a"])(p,l,f,!1,null,"1a6be9cc",null),m=b.exports,g={components:{SwitchComponent:m},name:"MainLayoutHeader",props:{routerPage:{type:String,default:"login"}}},v=g,B=(n("8f05"),Object(h["a"])(v,i,u,!1,null,"e66b8da4",null)),C=B.exports,y={name:"LogInPage",components:{BasicInput:function(){return n.e("chunk-7e220e23").then(n.bind(null,"d99b"))},MainLayout:function(){return n.e("chunk-dac5011c").then(n.bind(null,"be7f"))},BasicButton:function(){return Promise.resolve().then(n.bind(null,"979f"))},MainLayoutHeader:C}},A=y,k=(n("aa9a"),Object(h["a"])(A,o,s,!1,null,null,null)),S=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-layout",[n("div",{staticClass:"content"},[n("main-layout-header",{staticStyle:{width:"80%"},attrs:{routerPage:"order"}}),n("SearchRow"),n("TableOrder")],1)])},P=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-row"},[n("BasicButton",{staticClass:"btn-desktop",attrs:{colorClass:"green",titleBtn:"lorem",backBtn:""}}),n("BasicButton",{staticClass:"btn-mobile",attrs:{colorClass:"green",titleBtn:"+",backBtn:""}}),n("search-input",{attrs:{searchBtn:"","custom-placeholder":"lorem"}})],1)},L=[],O=n("979f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basic-input"},[n("div",[t._v(t._s(t.title))]),n("div",{staticClass:"basic-input__input"},[t.clearBtn?n("span",{staticClass:"clear-btn"},[t._v("+")]):t._e(),t.searchBtn?n("span",{staticClass:"search-btn"}):t._e(),n("input",{attrs:{type:"text",placeholder:t.customPlaceholder}})])])},x=[],j={name:"BasicInput",props:{clearBtn:{type:Boolean,default:!1},title:{type:String,default:""},searchBtn:{type:Boolean,default:!1},customPlaceholder:{type:String,default:""}}},E=j,Q=(n("c352"),Object(h["a"])(E,w,x,!1,null,null,null)),H=Q.exports,I={name:"SearchRow",components:{BasicButton:O["default"],SearchInput:H}},R=I,V=(n("4c5a"),Object(h["a"])(R,Y,L,!1,null,null,null)),F=V.exports,q={name:"OrderPage",components:{SearchRow:F,MainLayout:function(){return n.e("chunk-dac5011c").then(n.bind(null,"be7f"))},TableOrder:function(){return n.e("chunk-143478ae").then(n.bind(null,"61c0"))},MainLayoutHeader:C}},D=q,J=Object(h["a"])(D,T,P,!1,null,null,null),U=J.exports,W={name:"App",components:{LogInPage:S,OrderPage:U},data:function(){return{currentComponent:"LogInPage"}},methods:{changeRoute:function(t){this.currentComponent=t}}},X=W,K=Object(h["a"])(X,a,c,!1,null,null,null),M=K.exports;n("5a8b");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},5704:function(t,e,n){},"5a8b":function(t,e,n){},"7d7b":function(t,e,n){},8575:function(t,e,n){},"8f05":function(t,e,n){"use strict";n("b26f")},"979f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basic-button",class:{"back-btn":t.backBtn},on:{click:function(e){return t.$emit("click-btn")}}},[n("input",{class:[t.colorClass],attrs:{type:"button",value:t.titleBtn}})])},a=[],c={name:"BasicButton",props:{colorClass:{type:String,default:"grey"},titleBtn:{type:String,default:""},backBtn:{type:Boolean,default:!1}}},o=c,s=(n("3e71"),n("2877")),i=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=i.exports},a435:function(t,e,n){},aa9a:function(t,e,n){"use strict";n("8575")},b26f:function(t,e,n){},c121:function(t,e){t.exports="data:image/png;base64,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"},c352:function(t,e,n){"use strict";n("2887")},f4fe:function(t,e,n){"use strict";n("5704")}});
//# sourceMappingURL=app.ad4fc71d.js.map