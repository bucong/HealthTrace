webpackJsonp([0],{HzJ8:function(t,e,a){t.exports={default:a("oMO2"),__esModule:!0}},JXTs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("HzJ8"),s=a.n(n),o=a("oFuF"),i={name:"index",data:function(){return{search:"",menu:!0,language:{lang:"en",value:"English"},langs:[{lang:"en",value:"English"},{lang:"cn",value:"简体中文"}]}},beforeCreate:function(){document.querySelector("body").removeAttribute("style")},beforeMount:function(){var t=localStorage.lang||"en",e=this.langs,a=!0,n=!1,o=void 0;try{for(var i,r=s()(e);!(a=(i=r.next()).done);a=!0){var l=i.value;l.lang===t&&(this.language=l)}}catch(t){n=!0,o=t}finally{try{!a&&r.return&&r.return()}finally{if(n)throw o}}},methods:{menuShow:function(){this.menu=!this.menu},changeLanguage:function(t){this.language=t,Object(o.a)("set","lang",t.lang),this.$i18n.locale=t.lang}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("el-container",[a("el-header",{attrs:{height:"auto"}},[a("div",{staticClass:"container"},[a("el-row",[a("el-col",{attrs:{xs:24,sm:5}},[a("div",{staticClass:"flex"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo-img",attrs:{src:"static/img/logo.png",alt:""}})]),t._v(" "),a("i",{staticClass:"iconfont icon-meun",on:{click:t.menuShow}},[t._v("")])],1)]),t._v(" "),a("el-col",{class:{"hidden-xs-only":t.menu},attrs:{xs:24,sm:9}},[a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:t.$t("header.placeholder")},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("button")])]),t._v(" "),a("el-col",{class:{"hidden-xs-only":t.menu},attrs:{xs:24,sm:10}},[a("div",{staticClass:"menu"},[a("div",{staticClass:"tools"},[a("div",{staticClass:"item"},[a("span",[t._v(t._s(t.$t("header.menu.tools.name")))]),t._v(" "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"tools-list"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/accounts"}},[t._v(t._s(t.$t("header.menu.tools.nav1")))])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/delegate"}},[t._v(t._s(t.$t("header.menu.tools.nav2")))])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/network"}},[t._v(t._s(t.$t("header.menu.tools.nav3")))])],1)])])]),t._v(" "),a("div",{staticClass:"wallet item"},[a("router-link",{attrs:{to:""}},[t._v(t._s(t.$t("header.menu.wallet")))])],1),t._v(" "),a("div",{staticClass:"language"},[a("div",{staticClass:"item"},[a("img",{attrs:{src:"static/img/language-"+t.language.lang+".png",alt:""}}),t._v(" "),a("span",[t._v(t._s(t.language.value))]),t._v(" "),a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("div",{staticClass:"language-list"},[a("ul",t._l(t.langs,function(e){return a("li",{on:{click:function(a){t.changeLanguage(e)}}},[a("img",{attrs:{src:"static/img/language-"+e.lang+".png",alt:""}}),t._v(" "),a("span",[t._v(t._s(e.value))])])}))])])])])],1)],1)]),t._v(" "),a("el-main",[a("router-view")],1),t._v(" "),a("el-footer",{attrs:{height:"auto"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer"},[a("ul",[a("li",[t._v(t._s(t.$t("footer.phone")))]),t._v(" "),a("li",[t._v(t._s(t.$t("footer.email")))]),t._v(" "),a("li",[t._v(t._s(t.$t("footer.address")))])]),t._v(" "),a("div",{staticClass:"nav"},[a("router-link",{staticClass:"iconfont",attrs:{to:""}},[t._v("")]),t._v(" "),a("router-link",{staticClass:"iconfont",attrs:{to:""}},[t._v("")]),t._v(" "),a("router-link",{staticClass:"iconfont wx",attrs:{to:""}},[t._v("")]),t._v(" "),a("router-link",{staticClass:"iconfont",attrs:{to:""}},[t._v("")])],1)]),t._v(" "),a("div",{staticClass:"footer"},[a("img",{attrs:{src:"static/img/foot_logo.png",alt:""}}),t._v(" "),a("p",{staticClass:"copyright"},[t._v(t._s(t.$t("footer.copyright")))])])])])],1)],1)},staticRenderFns:[]};var l=a("vSla")(i,r,!1,function(t){a("o5Ue")},"data-v-5c0b46f8",null);e.default=l.exports},YW8S:function(t,e,a){var n=a("adiS"),s=a("biYF")("iterator"),o=a("ZVlJ");t.exports=a("AKd3").getIteratorMethod=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||o[n(t)]}},adiS:function(t,e,a){var n=a("T9r1"),s=a("biYF")("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,a,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?a:o?n(e):"Object"==(i=n(e))&&"function"==typeof e.callee?"Arguments":i}},o5Ue:function(t,e){},oMO2:function(t,e,a){a("A1pn"),a("IsPG"),t.exports=a("tcIe")},tcIe:function(t,e,a){var n=a("93K8"),s=a("YW8S");t.exports=a("AKd3").getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}}});
//# sourceMappingURL=0.92cc76be204d97044a95.js.map