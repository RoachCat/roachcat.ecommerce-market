(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/roachcat.ecommerce-market/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1b9f":function(t,e,r){"use strict";r("b46f")},"1c89":function(t,e,r){},2171:function(t,e,r){"use strict";r("bee8")},4894:function(t,e,r){},"496c":function(t,e,r){},5145:function(t,e,r){"use strict";r("4894")},"51b0":function(t,e,r){"use strict";r("5b07")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app",attrs:{id:"app"}},[r("div",{ref:"body-overlay",staticClass:"body-overlay",attrs:{id:"body-overlay"}}),r("Sidebar",{ref:"sidebar",attrs:{sidebarFlag:t.showSidebar,id:"sidebar"},on:{handleSidebarStatus:t.handleShowSidebar}}),r("Header",{on:{displaySidebar:t.handleShowSidebar}}),r("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"header-bar"},[r("p",{staticClass:"home",on:{click:function(e){return t.$router.push({name:"Home"})}}},[t._v("Soy un Home jasjasajs")]),r("div",{staticClass:"search-input-container"},[r("input",{ref:"search-input",staticClass:"search-input-container__search-input",attrs:{type:"text",placeholder:"Busca un producto..."}}),r("button",{staticClass:"search-input-container__button",on:{click:t.search}},[r("i",{staticClass:"fas fa-search"})])])]),r("nav",{staticClass:"nav-bar"},[r("ul",{staticClass:"sections-container"},t._l(t.navBarItems,(function(e,a){return r("li",{key:a,staticClass:"sections-container__li",attrs:{name:e.name},on:{click:function(r){return t.goToSection(e.routeName)}}},[r("i",{class:e.icon}),t._v(" "+t._s(e.name)+" ")])})),0)])])},c=[],i={name:"Header",data:function(){return{navBarItems:[{name:"Categorías",routeName:"Sidebar",icon:"fas fa-bars"},{name:"About",routeName:"About",icon:""}]}},mounted:function(){this.$refs["search-input"].focus()},methods:{search:function(){console.log("Hola")},goToSection:function(t){"Sidebar"===t?this.$emit("displaySidebar",!0):this.$router.push({name:t})}}},u=i,l=(r("51b0"),r("2877")),d=Object(l["a"])(u,s,c,!1,null,"da7a66ac",null),p=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar",attrs:{name:"sidebar",id:"sidebar"}},[r("div",{staticClass:"sidebar-container"},[r("h2",{staticClass:"sidebar-container__title"},[t._v("Categorías")]),r("ul",{staticClass:"categories"},t._l(t.allCategories,(function(e){return r("li",{key:e.id,staticClass:"categories__category",on:{click:function(r){return t.goToCategoryView(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])])},m=[],h=r("1da1"),g=(r("96cf"),{props:["sidebarFlag"],name:"Sidebar",data:function(){return{allCategories:null}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("categories/getAllCategories");case 2:t.allCategories=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{goToCategoryView:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$router.push({name:"Category",params:{id:t}}),e.hideSidebar();case 2:case"end":return r.stop()}}),r)})))()},hideSidebar:function(){var t=document.getElementById("sidebar"),e=document.getElementById("body-overlay");document.body.style.overflow="initial",t.style.left="-500px",e.style.display="none",this.$emit("handleSidebarStatus",!1),t.scrollTo(0,0)}}}),b=g,v=(r("1b9f"),Object(l["a"])(b,f,m,!1,null,"f81ccc9c",null)),y=v.exports,C={name:"App",components:{Header:p,Sidebar:y},watch:{showSidebar:function(){var t=this,e=this.$refs["body-overlay"],r=document.getElementById("sidebar");this.showSidebar?(r.style.left="0",document.body.style.overflow="hidden",e.style.display="block",e.addEventListener("click",(function(){t.showSidebar=!1}))):(document.body.style.overflow="initial",r.style.left="-500px",e.style.display="none")}},data:function(){return{showSidebar:!1}},methods:{handleShowSidebar:function(t){this.showSidebar=t}}},_=C,w=(r("5c0b"),Object(l["a"])(_,n,o,!1,null,null,null)),x=w.exports,S=r("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"products-container"},[r("h1",[t._v("Holiwis. Aquí vamos a poner un Home")])])])}],$={name:"Home",components:{},data:function(){return{}}},k=$,P=Object(l["a"])(k,O,j,!1,null,"7035190c",null),I=P.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-detail"},[t.product?r("div",{staticClass:"product"},[r("img",{attrs:{src:t.product.pictures[0].url,alt:t.product.name}}),r("p",[t._v(t._s(t.product.title))]),r("p",[t._v(t._s(t._f("price")(t.product.price)))])]):t._e()])},E=[],B={name:"ProductDetail",data:function(){return{product:null}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("products/getProductById",t.$route.params.id);case 2:r=e.sent,t.product=r;case 4:case"end":return e.stop()}}),e)})))()}},A=B,T=Object(l["a"])(A,R,E,!1,null,"45c5f30b",null),H=T.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category"},[t.thereIsData?[r("h1",[t._v(t._s(this.selectedCategory.name))]),r("div",{staticClass:"category-content"},[t.selectedCategory.children_categories.length>0?r("CategorySidebar",{attrs:{childrenCategories:t.selectedCategory}}):t._e(),r("CategoryItems",{attrs:{productsByCategory:t.productsByCategory}})],1)]:r("div",{staticClass:"spinner-container"},[r("Loading")],1)],2)},M=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-items"},t._l(t.productsByCategory,(function(t){return r("ProductCard",{key:t.id,attrs:{product:t}})})),1)},F=[],V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-card",on:{click:function(e){return t.goToProduct(t.product.id)}}},[r("div",{staticClass:"img-container"},[r("img",{staticClass:"img-container__img",attrs:{src:t.product.thumbnail,alt:t.product.name}})]),r("hr",{staticClass:"product-card__wrapper-line"}),r("div",{staticClass:"info-container"},[r("p",{staticClass:"info-container__title underline-title",attrs:{title:t.product.title}},[t._v(" "+t._s(t._f("snippet")(t.product.title))+" ")]),r("p",{staticClass:"info-container__price"},[t._v(t._s(t._f("price")(t.product.price)))])])])},L=[],q={name:"ProductCard",props:["product"],data:function(){return{}},methods:{goToProduct:function(t){this.$router.push({name:"ProductDetail",params:{id:t}})}}},J=q,z=(r("5145"),Object(l["a"])(J,V,L,!1,null,"19779b0d",null)),G=z.exports,K={name:"CategoryItems",props:["productsByCategory"],components:{ProductCard:G},data:function(){return{}}},Q=K,U=(r("8654"),Object(l["a"])(Q,N,F,!1,null,"cceef162",null)),W=U.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"category-sidebar"},[r("div",{staticClass:"categories-container"},[r("h3",{staticClass:"categories-container__title"},[t._v(" Explora más en "+t._s(t.childrenCategories.name)+" ")]),r("ul",{staticClass:"children-categories"},t._l(t.childrenCategories.children_categories,(function(e){return r("li",{key:e.id,staticClass:"children-categories__category",on:{click:function(r){return t.goToCategoryView(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])])},Y=[],Z={name:"CategorySidebar",props:["childrenCategories"],data:function(){return{}},methods:{goToCategoryView:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$router.push({name:"Category",params:{id:t}});case 1:case"end":return r.stop()}}),r)})))()}}},tt=Z,et=(r("d5c4"),Object(l["a"])(tt,X,Y,!1,null,"3baaf711",null)),rt=et.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[r("div",{staticClass:"container"},[r("div",{staticClass:"box--container"},[r("div",{staticClass:"box box--1"},[r("div",{staticClass:"circle circle--1"})]),r("div",{staticClass:"box box--2"},[r("div",{staticClass:"circle circle--2"})])])])])}],ot={},st=ot,ct=(r("2171"),Object(l["a"])(st,at,nt,!1,null,"4697e4b6",null)),it=ct.exports,ut={name:"Category",components:{CategoryItems:W,CategorySidebar:rt,Loading:it},data:function(){return{selectedCategory:null,productsByCategory:null,thereIsData:!1}},watch:{"$route.path":function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.thereIsData=!1,this.getCategoryInfo(),this.getProductsByCategory();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCategoryInfo();case 2:return e.next=4,t.getProductsByCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{getCategoryInfo:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("categories/getSidebarCategoryInfo",t.$route.params.id);case 2:t.selectedCategory=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getProductsByCategory:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={category:t.$route.params.id},e.next=3,t.$store.dispatch("products/getProductsByCategory",r);case 3:a=e.sent,t.productsByCategory=a.results,t.thereIsData=!0;case 6:case"end":return e.stop()}}),e)})))()}}},lt=ut,dt=(r("e405"),Object(l["a"])(lt,D,M,!1,null,"0da0fc42",null)),pt=dt.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v(' Aquí vamos a poner un "about", pero todavía lo estamos haciendo. Paciencia. ')])])}],ht={name:"About"},gt=ht,bt=Object(l["a"])(gt,ft,mt,!1,null,"0d8a0a4a",null),vt=bt.exports;a["a"].use(S["a"]);var yt=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:vt},{path:"/product-detail/:id",name:"ProductDetail",component:H},{path:"/category/:id",name:"Category",component:pt}],Ct=new S["a"]({routes:yt}),_t=Ct,wt=r("2f62"),xt=r("bc3a"),St=r.n(xt),Ot={namespaced:!0,state:{products:null},getters:{showAllProducts:function(t){return t.products}},mutations:{setProducts:function(t,e){t.produts=e}},actions:{getProductById:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,r.next=4,St.a.get("https://api.mercadolibre.com"+"/items/".concat(e,"?include_attributes=all"));case 4:return n=r.sent,200===n.status&&a("setProducts",n.data),r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r["catch"](1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},getProductsByCategory:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,r.next=4,St.a.get("https://api.mercadolibre.com/sites/MCO/search",{params:e});case 4:return n=r.sent,200===n.status&&a("setProducts",n.data),r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r["catch"](1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}},jt={namespaced:!0,state:{allCategories:null,sidebarCategoryInfo:null},getters:{},mutations:{setAllCategories:function(t,e){t.allCategories=e},setSidebarCategoryInfo:function(t,e){t.sidebarCategoryInfo=e}},actions:{getAllCategories:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,St.a.get("https://api.mercadolibre.com/sites/MCO/categories");case 4:return a=e.sent,200===a.status&&r("setAllCategories",a.data),e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},getSidebarCategoryInfo:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,r.next=4,St.a.get("https://api.mercadolibre.com"+"/categories/".concat(e));case 4:return n=r.sent,200===n.status&&a("setSidebarCategoryInfo",n.data),r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r["catch"](1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}};a["a"].use(wt["a"]);var $t=new wt["a"].Store({state:{},mutations:{},actions:{},modules:{products:Ot,categories:jt}});r("15f5"),r("7051"),r("4de4"),r("d3b7"),r("25f0");a["a"].filter("price",(function(t){var e=t.toString(),r=0;return r=4===e.length?new Intl.NumberFormat("de-DE").format(t):new Intl.NumberFormat("es-CO").format(t),"$ "+r}));r("fb6a");a["a"].filter("snippet",(function(t){var e=t.length>=40?t.slice(0,40)+"...":t;return e})),a["a"].config.productionTip=!1,new a["a"]({router:_t,store:$t,render:function(t){return t(x)}}).$mount("#app")},"5b07":function(t,e,r){},"5c0b":function(t,e,r){"use strict";r("9c0c")},8654:function(t,e,r){"use strict";r("496c")},"9c0c":function(t,e,r){},b1f8:function(t,e,r){},b46f:function(t,e,r){},bee8:function(t,e,r){},d5c4:function(t,e,r){"use strict";r("b1f8")},e405:function(t,e,r){"use strict";r("1c89")}});
//# sourceMappingURL=app.50f9b7c0.js.map