webpackJsonp([7],{"++Vc":function(t,e,n){"use strict";var i=n("T7Pj"),a=n("m1kz"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},"/Zx9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-image"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:t.cm.props.src}})])])},a=[],r={render:i,staticRenderFns:a};e.a=r},"0xDb":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return c});var i=n("hRKE"),a=n.n(i),r=n("lluu");n.d(e,"b",function(){return r.a});var s=function t(e){if("object"!==(void 0===e?"undefined":a()(e))||null===e)return e;var n=e instanceof Array?[]:{};for(var i in e)e.hasOwnProperty(i)&&(n[i]="object"===a()(e[i])?t(e[i]):e[i]);return n},o=/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),c={set:function(t,e){localStorage.setItem(t,e)},get:function(t){localStorage.getItem(t)},remove:function(t){localStorage.removeItem(t)}}},"1jwe":function(t,e,n){"use strict";var i=n("ubHq"),a=n("J3fx"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},"2BAi":function(t,e){},"3wY5":function(t,e){},"4anv":function(t,e,n){"use strict";e.a=function(){return{id:1,title:"文字",name:"Text",type:1,anim:{type:1,duration:1,delay:.4},props:{text:"这是文字"},css:{t:100,l:100,w:100,h:30,bd:{w:1,t:1,c:"#fff"},br:5,ft:{s:1,t:1,h:"",c:"#333"},lh:30,rotate:0,bgc:"#fff"}}}},"53U9":function(t,e,n){"use strict";e.a={name:"BaseImage",props:{compid:{type:[String,Number],required:!0}},computed:{cm:function(){return this.$store.getters.getCompConfigByCompid(this.compid)}}}},"5KRq":function(t,e,n){"use strict";e.a={name:"App",beforeCreate:function(){this.$store.dispatch("getUserData")}}},"5reh":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"f",function(){return a}),n.d(e,"p",function(){return r}),n.d(e,"l",function(){return s}),n.d(e,"m",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"e",function(){return l}),n.d(e,"k",function(){return d}),n.d(e,"g",function(){return f}),n.d(e,"q",function(){return p}),n.d(e,"b",function(){return m}),n.d(e,"j",function(){return v}),n.d(e,"d",function(){return g}),n.d(e,"o",function(){return h}),n.d(e,"n",function(){return b}),n.d(e,"h",function(){return y});var i="ADD_COMP",a="EDIT_COMP",r="TOGGLE_COMP",s="SET_H5_CONFIG",o="SET_MOBILE",c="ADD_PAGE",u="INSERT_PAGE",l="COPY_PAGE",d="REMOVE_PAGE",f="EDIT_PAGE",p="TOGGLE_PAGE",m="ADD_COMP_TO_PAGES",v="OPEN_PROPS_PANEL",g="CLOSE_PROPS_PANEL",h="SET_PICK_IMG",b="SET_PICK_BGM",y="INIT_USER_DATA"},"8hXn":function(t,e,n){"use strict";var i=n("rV75"),a=n("HNUu"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},BRSS:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-group m-bd f-vama"},[n("div",{staticClass:"item"},[n("label",[t._v("宽度:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bd.width,expression:"bd.width"}],attrs:{type:"text"},domProps:{value:t.bd.width},on:{change:t.handleChange,input:function(e){e.target.composing||t.$set(t.bd,"width",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("样式:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.bd.type,expression:"bd.type",modifiers:{number:!0}}],attrs:{name:"border-style"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.$set(t.bd,"type",e.target.multiple?n:n[0])},t.handleChange]}},t._l(t.bss,function(e,i){return n("option",{key:i,domProps:{value:i}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("颜色:")]),t._v(" "),n("el-color-picker",{attrs:{size:"mini"},on:{change:t.handleChange},model:{value:t.bd.color,callback:function(e){t.$set(t.bd,"color",e)},expression:"bd.color"}})],1)])},a=[],r={render:i,staticRenderFns:a};e.a=r},Cayp:function(t,e,n){"use strict";var i=n("DMPO"),a=(n.n(i),n("bGai")),r=n("eSWa");e.a={name:"Preview",data:function(){return{isPlay:!0,activePage:0,animations:r.a,swiperOption:{direction:"vertical"}}},computed:{Swiper:function(){return this.$refs.mySwiper.swiper},pages:function(){return this.$store.getters.pages},h5Config:function(){return this.$store.getters.h5Config}},methods:{togglePlay:function(){var t=this.$refs.music;this.isPlay?(this.isPlay=!1,t.pause()):(this.isPlay=!0,t.play())}},created:function(){},mounted:function(){var t=this;this.Swiper.on("init",function(){t.activePage=this.activeIndex}),this.Swiper.on("slideChangeTransitionStart",function(){t.activePage=this.activeIndex})},components:{swiper:i.swiper,swiperSlide:i.swiperSlide,CompLists:{props:{name:{type:String,required:!0},compid:{type:[String,Number],required:!0}},render:function(t){return t(a.a["Base"+this.name],{props:{compid:this.compid}})}}}}},CwKQ:function(t,e,n){"use strict";var i=n("qQfd");e.a={name:"UIFont",props:{value:{type:Object,required:!0}},data:function(){var t=this.value;return{fms:i.c,fss:i.d,ft:{color:t.c,size:t.s,type:t.t,hover:t.h}}},methods:{handleChange:function(){var t=this.ft;this.$emit("change",{key:"ft",value:{s:t.size,t:t.type,h:t.hover,c:t.color}})}}}},DDv3:function(t,e,n){"use strict";var i=n("fn9z"),a=n("kya4"),r=n("1jwe");e.a={UIFont:i.a,UIBorder:a.a,UIAnimate:r.a}},DkOa:function(t,e){},HNUu:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{id:"view"}},[n("el-header",{staticClass:"s-bg-main g-hd",attrs:{height:"auto"}},[n("the-topBar")],1),t._v(" "),n("el-container",[n("el-aside",[n("the-prop-manage")],1),t._v(" "),n("el-main",{attrs:{id:"workspace"}},[n("div",{staticClass:"m-simulator work-part"},[n("div",{staticClass:"wrap"},[n("the-container")],1)])]),t._v(" "),n("el-aside",[n("the-page-manage")],1),t._v(" "),n("pick-image"),t._v(" "),n("pick-bg-music")],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},IcnI:function(t,e,n){"use strict";var i,a=n("a3Yh"),r=n.n(a),s=n("aA9S"),o=n.n(s),c=n("3cXf"),u=n.n(c),l=n("MVMM"),d=n("9rMa"),f=n("5reh"),p=n("gJCy"),m=n("RpdK"),v=n("0xDb");l.default.use(d.a);e.a=new d.a.Store({state:{versior:.25,propsPanel:{status:!1,name:"",id:""},pickImg:{status:!1,callback:null},pickBgm:{status:!1,callback:null},h5Config:{bgm:""},mobile:{isMobile:!1,rem:null}},getters:{propsPanel:function(t){return t.propsPanel},pickImg:function(t){return t.pickImg},pickBgm:function(t){return t.pickBgm},h5Config:function(t){return t.h5Config}},actions:{getUserData:function(t){var e=t.state,n=t.commit,i=t.dispatch,a=localStorage.getItem("UserData");if(a)try{var r=e.mobile,s=void 0;if(r.isMobile){var o=/\b(\d+(\.\d+)?)px\b/;s=JSON.parse(a,function(t,e){return"string"==typeof e&&o.test(e)?e.replace(o,function(t,e){return parseFloat(e)/r.rem+"rem"}):e})}else s=JSON.parse(a);if(s.versior&&s.versior>=e.versior){var c=s.pages;n("INIT_USER_DATA",s),c&&c.lists&&c.lists.length&&n("TOGGLE_PAGE",c.lists[0].id)}else i("initH5Editor")}catch(t){i("initH5Editor"),console.error("获取数据失败:"+t.message)}else i("initH5Editor")},initH5Editor:function(t){var e=t.dispatch,n=t.commit;e("addNewPage").then(function(t){n("TOGGLE_PAGE",t)})},setH5:function(t,e){(0,t.commit)("SET_H5_CONFIG",e)},saveUserData:function(t){var e=t.state;v.d.set("UserData",u()({versior:e.versior,h5Config:e.h5Config,pages:{lists:e.pages.lists}}))}},mutations:(i={},r()(i,f.h,function(t,e){t.versior=e.versior,o()(t.h5Config,e.h5Config),t.pages.lists=t.pages.lists.concat(e.pages.lists),t.components.lists=e.pages.lists.reduce(function(t,e){if(e)return t.concat(e.comps)},[])}),r()(i,f.j,function(t,e){var n=e.id,i=e.name;t.propsPanel={status:!0,name:i,id:n}}),r()(i,f.d,function(t){t.propsPanel.status=!1}),r()(i,f.o,function(t,e){"boolean"==typeof e?t.pickImg.status=e:o()(t.pickImg,e)}),r()(i,f.n,function(t,e){"boolean"==typeof e?t.pickBgm.status=e:o()(t.pickBgm,e)}),r()(i,f.l,function(t,e){o()(t.h5Config,e)}),r()(i,f.m,function(t,e){o()(t.mobile,e)}),i),modules:{pages:p.a,components:m.a},strict:!1})},J3fx:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"m-animations"},t._l(t.animations,function(e,i){return n("li",{key:i},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleChangeType(i)}}},[t._v("\n      "+t._s(e.name)+"\n      "),t.ani.type==i?n("i",{staticClass:"el-icon-circle-check el-icon--right"}):t._e()])],1)}))},a=[],r={render:i,staticRenderFns:a};e.a=r},KYPs:function(t,e,n){"use strict";var i=n("Cayp"),a=n("YQyN"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},M93x:function(t,e,n){"use strict";var i=n("5KRq"),a=n("bL6o"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZLEe"),a=n.n(i),r=n("MVMM"),s=n("IcnI"),o=n("b13w"),c=n.n(o),u=n("M93x"),l=n("YaEn"),d=n("cdhV"),f=n("rZ9o"),p=(n.n(f),n("3wY5")),m=(n.n(p),n("2BAi")),v=(n.n(m),n("DkOa")),g=(n.n(v),n("DDv3")),h=n("0xDb");r.default.use(c.a),r.default.prototype.$log=console.log.bind(console),a()(g.a).forEach(function(t){r.default.component(t,g.a[t])}),r.default.filter("calcStyle",d.a),r.default.config.productionTip=!1,h.c&&(document.body.classList.add("is-mobile"),l.a.push("/mobile"),h.b.init(),s.a.commit("SET_MOBILE",{isMobile:!0,rem:h.b.rem})),new r.default({el:"#app",store:s.a,router:l.a,render:function(t){return t(u.a)}})},Obbb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-simulator",attrs:{id:"preview"}},[n("div",{staticClass:"wrap"},[t.h5Config.bgm?n("div",{staticClass:"bgm-btn",class:{rotate:t.isPlay},on:{click:t.togglePlay}},[n("audio",{ref:"music",attrs:{src:t.h5Config.bgm,autoplay:"",preload:"auto",loop:""}})]):t._e(),t._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.pages,function(e,i){return n("swiper-slide",{key:e.id},[n("div",{staticClass:"wrap-bg",style:{backgroundColor:e.css.bgc,backgroundImage:"url("+e.css.bgi+")"}}),t._v(" "),t._l(e.comps,function(e){return n("div",{key:e.id,staticClass:"animated",class:(a={},a[t.animations[e.anim.type].class]=t.activePage===i,a)},[n("comp-lists",{staticClass:"comp",style:t._f("calcStyle")(e.css),attrs:{comp:e}})],1);var a})],2)}))],1)])},a=[],r={render:i,staticRenderFns:a};e.a=r},RpdK:function(t,e,n){"use strict";var i,a=n("a3Yh"),r=n.n(a),s=n("hRKE"),o=n.n(s),c=n("aA9S"),u=n.n(c),l=n("5reh"),d=n("jgFG"),f={lists:[],curCompId:null},p={getComplistsByPageId:function(t){return function(e){return t.lists.filter(function(t){return t.parentId===e})}},curComp:function(t){return t.lists.find(function(e){return e.id===t.curCompId})},getCompConfigByCompid:function(t){return function(e){return t.lists.find(function(t){return t.id===e})}}},m={addNewComp:function(t,e){var n=t.commit,i=t.getters,a=Object(d.a)(e+"Data");if(a){var r=u()(a,{parentId:i.curPageId});n("ADD_COMP_TO_PAGES",r),n("ADD_COMP",r)}}},v=(i={},r()(i,l.p,function(t,e){t.curCompId=e}),r()(i,l.f,function(t,e){var n=e.type,i=e.value,a=e.compid,r=t.lists.find(function(e){return e.id===a||e.id===t.curCompId});if(r){var s=r[n];for(var c in i)void 0!==s[c]&&("object"===o()(i[c])?u()(s[c],i[c]):s[c]=i[c])}}),r()(i,l.a,function(t,e){t.lists.push(e)}),i);e.a={state:f,getters:p,actions:m,mutations:v}},T7Pj:function(t,e,n){"use strict";e.a={name:"BaseText",props:{compid:{type:[String,Number],required:!0}},computed:{cm:function(){return this.$store.getters.getCompConfigByCompid(this.compid)},linkStyle:function(){return{ft:this.cm.css.ft}}}}},TKok:function(t,e,n){"use strict";var i=n("xv5S"),a=n("Obbb"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},YQyN:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mobile"}},[t.h5Config.bgm?n("div",{staticClass:"bgm-btn",class:{rotate:t.isPlay},on:{click:t.togglePlay}},[n("audio",{ref:"music",attrs:{src:t.h5Config.bgm,autoplay:"",preload:"auto",loop:""}})]):t._e(),t._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.pages,function(e,i){return n("swiper-slide",{key:e.id},[n("div",{staticClass:"wrap-bg",style:{backgroundColor:e.css.bgc,backgroundImage:"url("+e.css.bgi+")"}}),t._v(" "),t._l(e.comps,function(e){return n("comp-lists",{key:e.id,staticClass:"comp animated",class:(a={},a[t.animations[e.anim.type].class]=t.activePage===i,a),attrs:{compid:e.id,name:e.name}});var a})],2)}))],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},YaEn:function(t,e,n){"use strict";var i=n("MVMM"),a=n("zO6J"),r=n("0xDb"),s=n("8hXn"),o=n("TKok"),c=n("KYPs");i.default.use(a.a);var u=new a.a({mode:"history",routes:[{path:"/",name:"index",component:s.a},{path:"/preview",name:"preview",component:o.a},{path:"/mobile",name:"mobile",component:c.a},{path:"*",component:s.a}]});u.beforeEach(function(t,e,n){r.c&&"mobile"!==t.name?n({path:"/mobile"}):r.c||"mobile"!==t.name||n({path:"/"}),n()}),e.a=u},bGai:function(t,e,n){"use strict";var i=n("vnuw"),a=n("++Vc");e.a={BaseImage:i.a,BaseText:a.a}},bL6o:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},cdhV:function(t,e,n){"use strict";var i=n("aA9S"),a=n.n(i),r=n("hRKE"),s=n.n(r),o=n("qQfd"),c=n("0xDb"),u=function(t,e){var n={bg:function(){return{"background-color":e.c,"background-image":e.i,"background-repeat":o.a[e.t]}},bd:function(){return{"border-width":e.w+"px","border-style":o.b[e.t],"border-color":e.c}},ft:function(){return{"font-size":o.d[e.s],"font-family":o.c[e.t],color:e.c}}};return n[t]&&n[t]()||{}};e.a=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!t||"object"!==(void 0===t?"undefined":s()(t)))return"";var r={};for(var l in t){var d=o.e[l],f=t[l];n.includes(l)||null!==f&&void 0!==f&&(d?"object"===(void 0===d?"undefined":s()(d))?r[d.value]=c.c?f/32+"rem":f+d.unit:r[d]=f:"rotate"===l?r.transform="rotate("+f+"deg)":a()(r,u(l,f)))}return r}},eSWa:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={0:{name:"none",class:""},1:{name:"bounceIn",class:"bounceIn"},2:{name:"bounceIn",class:"bounceIn"},3:{name:"bounceInDown",class:"bounceInDown"},4:{name:"bounceInLeft",class:"bounceInLeft"},5:{name:"bounceInUp",class:"bounceInUp"},6:{name:"fadeIn",class:"fadeIn"},7:{name:"fadeInDown",class:"fadeInDown"},8:{name:"fadeInDownBig",class:"fadeInDownBig"},9:{name:"fadeInLeft",class:"fadeInLeft"},10:{name:"fadeInLeftBig",class:"fadeInLeftBig"},11:{name:"fadeInRight",class:"fadeInRight"},12:{name:"fadeInRightBig",class:"fadeInRightBig"},13:{name:"fadeInUp",class:"fadeInUp"},14:{name:"fadeInUpBig",class:"fadeInUpBig"},15:{name:"flip",class:"flip"},16:{name:"flipInX",class:"flipInX"},17:{name:"flipInY",class:"flipInY"},18:{name:"lightSpeedIn",class:"lightSpeedIn"}}},fn9z:function(t,e,n){"use strict";var i=n("CwKQ"),a=n("x1SW"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},fyxR:function(t,e,n){"use strict";var i=n("trOa"),a=n("4anv");e.a={ImageData:i.a,TextData:a.a}},gJCy:function(t,e,n){"use strict";var i,a=n("a3Yh"),r=n.n(a),s=n("aA9S"),o=n.n(s),c=n("hRKE"),u=n.n(c),l=n("5reh"),d=n("jgFG"),f=n("0xDb"),p={lists:[],curPageId:null},m={pages:function(t){return t.lists},curPageId:function(t){return t.curPageId||t.lists[0].id},curPage:function(t){return t.lists.find(function(e){return e.id===t.curPageId})||t.lists[0]},getPageConfigByPageId:function(t){return function(e){return t.lists.find(function(t){return t.id===e})}}},v={addNewPage:function(t){var e=t.commit,n=Object(d.b)();return n&&e("ADD_PAGE",n),n.id},insertPage:function(t,e){var n=t.commit,i=Object(d.b)();return i&&n("INSERT_PAGE",{page:i,pageId:e}),i.id},copyPage:function(t,e){var n=t.commit,i=Object(d.c)();return i&&n("COPY_PAGE",{prePageId:e,pageId:i}),i},removePage:function(t,e){return(0,t.commit)("REMOVE_PAGE",e),e},openEditPage:function(t,e){(0,t.commit)("OPEN_PROPS_PANEL",{name:"PagePropConfig",id:e})}},g=(i={},r()(i,l.q,function(t,e){t.curPageId=e}),r()(i,l.c,function(t,e){t.lists.push(e)}),r()(i,l.i,function(t,e){var n=e.page,i=e.pageId,a=t.lists.findIndex(function(t){return t.id===i});a>-1&&(t.lists.splice(a+1,0,n),t.curPageId=n.id)}),r()(i,l.e,function(t,e){var n=e.prePageId,i=e.pageId,a=t.lists,r=a.findIndex(function(t){return t.id===n});if(r>-1){var s=Object(f.a)(a[r]);s.id=i,a.splice(r+1,0,s),t.curPageId=i}}),r()(i,l.k,function(t,e){var n=t.lists,i=n.findIndex(function(t){return t.id===e});if(i>-1){n.splice(i,1);var a=n[i]||n[i-1];t.curPageId=a.id}}),r()(i,l.g,function(t,e){var n=e.type,i=e.value,a=e.pageId,r=t.lists.find(function(e){return e.id===a||e.id===t.curPageId});if(r){var s=r[n];for(var c in i)void 0!==s[c]&&("object"===u()(i[c])?o()(s[c],i[c]):s[c]=i[c])}}),r()(i,l.b,function(t,e){var n=t.lists.find(function(e){return e.id===t.curPageId});n&&n.comps.push(e)}),i);e.a={state:p,getters:m,actions:v,mutations:g}},hvnB:function(t,e,n){"use strict";var i=n("qQfd");e.a={name:"UIBorder",props:{value:{type:Object,required:!0}},data:function(){var t=this.value;return{bss:i.b,bd:{color:t.c,type:t.t,width:t.w}}},methods:{handleChange:function(){var t=this.bd;this.$emit("change",{key:"bd",value:{w:t.width,t:t.type,c:t.color}})}}}},jgFG:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var i=n("4YfN"),a=n.n(i),r=n("fyxR"),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Date.now().toString(t)},o=function(){return s(32)},c=function(t){var e=r.a[t]&&r.a[t]();return e?a()({},e,{id:s()}):null},u=function(){return{id:o(),css:{bgc:"",bgi:""},props:{},comps:[]}}},kya4:function(t,e,n){"use strict";var i=n("hvnB"),a=n("BRSS"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},lluu:function(t,e,n){"use strict";var i=window,a=i.document,r=a.documentElement,s=i.navigator.appVersion.match(/iphone/gi),o=i.devicePixelRatio,c=0;c=s?o>=3&&(!c||c>=3)?3:o>=2&&(!c||c>=2)?2:1:1;var u=1/c,l=r.getBoundingClientRect().width;l/c>540&&(l=540*c);var d=l/10,f=function(){r.setAttribute("data-dpr",c);var t=a.createElement("meta");if(t.setAttribute("name","viewport"),t.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(t);else{var e=a.createElement("div");e.appendChild(t),a.write(e.innerHTML)}},p={init:function(){f(),r.style.fontSize=d+"px","complete"===a.readyState?a.body.style.fontSize=12*c+"px":a.addEventListener("DOMContentLoaded",function(t){a.body.style.fontSize=12*c+"px"},!1)},rem:d,dpr:c};e.a=p},m1kz:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-text"},[n("a",{style:t._f("calcStyle")(t.linkStyle),attrs:{href:"#"},domProps:{innerHTML:t._s(t.cm.props.text)}})])},a=[],r={render:i,staticRenderFns:a};e.a=r},qQfd:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return o});var i={1:"repeat",2:"repeat-x",3:"repeat-y",4:"no-repeat"},a={1:"微软雅黑",2:"宋体",3:"楷体",4:"仿宋",5:"黑体",6:"Arial"},r={1:"12px",2:"14px",3:"16px",4:"18px",5:"20px",6:"22px",7:"24px",8:"26px",9:"28px",10:"30px",11:"32px",12:"34px",13:"36px",14:"48px",15:"64px"},s={1:"none",2:"solid",3:"dashed",4:"dotted",5:"double"},o={w:{value:"width",unit:"px"},h:{value:"height",unit:"px"},t:{value:"top",unit:"px"},l:{value:"left",unit:"px"},lh:{value:"line-height",unit:"px"},br:{value:"border-radius",unit:"px"},c:"color",bgc:"background-color"}},rV75:function(t,e,n){"use strict";e.a={name:"index",components:{ThePageManage:function(){return n.e(5).then(n.bind(null,"UvdT"))},TheTopBar:function(){return n.e(4).then(n.bind(null,"Jqlp"))},TheContainer:function(){return n.e(3).then(n.bind(null,"bCJD"))},ThePropManage:function(){return n.e(2).then(n.bind(null,"Yyz5"))},PickImage:function(){return n.e(0).then(n.bind(null,"l+vY"))},PickBgMusic:function(){return n.e(1).then(n.bind(null,"rBEl"))}}}},rZ9o:function(t,e){},trOa:function(t,e,n){"use strict";e.a=function(){return{id:1,title:"图片",name:"Image",type:1,anim:{type:1,duration:1,delay:.4},props:{src:"./static/images/logo.png"},css:{t:0,l:0,w:200,h:200,bd:{w:1,t:1,c:"#fff"},br:5,rotate:0,bgc:"#fff"}}}},ubHq:function(t,e,n){"use strict";var i=n("aA9S"),a=n.n(i),r=n("eSWa");e.a={name:"UIAnimate",props:{value:{type:Object,required:!0}},data:function(){var t={type:1,duration:1,delay:.4};return{animations:r.a,ani:a()(t,this.value)}},methods:{handleChangeType:function(t){this.ani.type=t,this.handleChange()},handleChange:function(){var t=this.ani;this.$emit("change",{key:"anim",value:{type:+t.type,duration:t.duration,delay:t.delay}})}}}},vnuw:function(t,e,n){"use strict";var i=n("53U9"),a=n("/Zx9"),r=n("Z0/y"),s=r(i.a,a.a,!1,null,null,null);e.a=s.exports},x1SW:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-group m-ft f-vama"},[n("div",{staticClass:"item"},[n("label",[t._v("字体:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.ft.type,expression:"ft.type",modifiers:{number:!0}}],attrs:{name:"font-family"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.$set(t.ft,"type",e.target.multiple?n:n[0])},t.handleChange]}},t._l(t.fms,function(e,i){return n("option",{key:i,domProps:{value:i}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("字号:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.ft.size,expression:"ft.size",modifiers:{number:!0}}],attrs:{name:"font-size"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.$set(t.ft,"size",e.target.multiple?n:n[0])},t.handleChange]}},t._l(t.fss,function(e,i){return n("option",{key:i,domProps:{value:i}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("颜色:")]),t._v(" "),n("el-color-picker",{attrs:{size:"mini"},on:{change:t.handleChange},model:{value:t.ft.color,callback:function(e){t.$set(t.ft,"color",e)},expression:"ft.color"}})],1)])},a=[],r={render:i,staticRenderFns:a};e.a=r},xv5S:function(t,e,n){"use strict";var i=n("DMPO"),a=(n.n(i),n("bGai")),r=n("eSWa");e.a={name:"Preview",data:function(){return{isPlay:!0,activePage:0,animations:r.a,swiperOption:{direction:"vertical"}}},computed:{Swiper:function(){return this.$refs.mySwiper.swiper},pages:function(){return this.$store.getters.pages},h5Config:function(){return this.$store.getters.h5Config}},methods:{togglePlay:function(){var t=this.$refs.music;this.isPlay?(this.isPlay=!1,t.pause()):(this.isPlay=!0,t.play())}},mounted:function(){var t=this;this.Swiper.on("init",function(){t.activePage=this.activeIndex}),this.Swiper.on("slideChangeTransitionStart",function(){t.activePage=this.activeIndex})},components:{swiper:i.swiper,swiperSlide:i.swiperSlide,CompLists:{props:{comp:{type:Object,required:!0}},render:function(t){var e=this.comp,n=e.name,i=e.id,r=e.css;return t(a.a["Base"+n],{props:{compid:i},style:{transform:"rotate("+r.rotate+"deg)"}})}}}}}},["NHnr"]);
//# sourceMappingURL=app.ec228e3ab1a00be5fd8a.js.map