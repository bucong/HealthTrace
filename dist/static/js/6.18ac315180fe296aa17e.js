webpackJsonp([6],{"1GWD":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"address-detail",data:function(){return{id:"3810912702186471268970",copyId:!1,publicKey:"fdsgewr34532twe2453",copyPublicKey:!1,tab:1,transactionsData:[{id:"6421980538sdsad",height:"596356",time:"2018/01/13 17:44:47",transcation:"0",generatedBy:"HTRoad",amount:"499.12345678",forged:"4.1"},{id:"6421980538sdsad",height:"596356",time:"2018/01/13 17:44:47",transcation:"0",generatedBy:"HTRoad",amount:"499.12345678",forged:"4.1"},{id:"6421980538sdsad",height:"596356",time:"2018/01/13 17:44:47",transcation:"0",generatedBy:"HTRoad",amount:"499.12345678",forged:"4.1"}]}},methods:{onCopyId:function(){var t=this;this.copyId=!0,setTimeout(function(){t.copyId=!1},2e3)},onCopyKey:function(){var t=this;this.copyPublicKey=!0,setTimeout(function(){t.copyPublicKey=!1},2e3)},tabChange:function(t){this.tab=t}},components:{transactions:s("V1tv").a}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"address-detail container"},[s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.$t("address.title")))])]),t._v(" "),s("ul",{staticClass:"detail-info"},[s("li",{staticClass:"flex"},[s("span",[t._v(t._s(t.$t("address.info.address")))]),t._v(" "),s("p",[t._v(t._s(t.id))]),t._v(" "),s("div",{staticClass:"copy"},[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.id,expression:"id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopyId,expression:"onCopyId",arg:"success"}],staticClass:"iconfont"},[t._v("")]),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.copyId,expression:"copyId"}],attrs:{src:"/static/img/icon_copied.png",alt:""}})])]),t._v(" "),s("li",{staticClass:"flex"},[s("span",[t._v(t._s(t.$t("address.info.key")))]),t._v(" "),s("p",[t._v(t._s(t.publicKey))]),t._v(" "),s("div",{staticClass:"copy"},[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.publicKey,expression:"publicKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopyKey,expression:"onCopyKey",arg:"success"}],staticClass:"iconfont"},[t._v("")]),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.copyPublicKey,expression:"copyPublicKey"}],attrs:{src:"/static/img/icon_copied.png",alt:""}})])])]),t._v(" "),s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.$t("address.summary.title")))])]),t._v(" "),s("ul",{staticClass:"summary"},[s("li",{staticClass:"flex"},[s("div",[t._v(t._s(t.$t("address.summary.balance")))]),t._v(" "),t._m(0)]),t._v(" "),s("li",{staticClass:"flex"},[s("div",[t._v(t._s(t.$t("address.summary.transactions")))]),t._v(" "),t._m(1)]),t._v(" "),s("li",{staticClass:"flex"},[s("div",[t._v(t._s(t.$t("address.summary.delegate")))]),t._v(" "),t._m(2)])]),t._v(" "),s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.$t("address.transactions")))])]),t._v(" "),s("ul",{staticClass:"tab flex"},[s("li",{class:{active:1===t.tab},on:{click:function(a){t.tabChange(1)}}},[t._v(t._s(t.$t("address.tab.all")))]),t._v(" "),s("li",{class:{active:2===t.tab},on:{click:function(a){t.tabChange(2)}}},[t._v(t._s(t.$t("address.tab.sent")))]),t._v(" "),s("li",{class:{active:3===t.tab},on:{click:function(a){t.tabChange(3)}}},[t._v(t._s(t.$t("address.tab.received")))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.tab,expression:"tab === 1"}],staticClass:"table-box"},[s("div",{staticClass:"table-scroll"},[s("transactions",{attrs:{tableData:t.transactionsData}})],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.tab,expression:"tab === 2"}],staticClass:"table-box"},[s("div",{staticClass:"table-scroll"},[s("transactions",{attrs:{tableData:t.transactionsData}})],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.tab,expression:"tab === 3"}],staticClass:"table-box"},[s("div",{staticClass:"table-scroll"},[s("transactions",{attrs:{tableData:t.transactionsData}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this._v("899 "),a("span",{staticClass:"grey"},[this._v("HTC")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("i",{staticClass:"iconfont green"},[this._v("")]),this._v("247 "),a("i",{staticClass:"iconfont red"},[this._v("")]),this._v("71 ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",{staticClass:"blue"},[this._v("Catstar")])])}]};var n=s("vSla")(e,i,!1,function(t){s("ujYL")},"data-v-1b2ea48a",null);a.default=n.exports},IZYr:function(t,a){},V1tv:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"transaction-table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",fit:""}},[s("el-table-column",{attrs:{prop:"id",label:t.$t("transactions.th1"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("router-link",{attrs:{to:"/transaction/detail"}},[t._v(t._s(a.row.id))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"height",label:t.$t("transactions.th2")}}),t._v(" "),s("el-table-column",{attrs:{prop:"time",label:t.$t("transactions.th3"),"min-width":"110"}}),t._v(" "),s("el-table-column",{attrs:{prop:"transcation",label:t.$t("transactions.th4")}}),t._v(" "),s("el-table-column",{attrs:{prop:"generatedBy",label:t.$t("transactions.th5")}}),t._v(" "),s("el-table-column",{attrs:{prop:"amount",label:t.$t("transactions.th6")}}),t._v(" "),s("el-table-column",{attrs:{prop:"forged",label:t.$t("transactions.th7")}})],1)],1)},staticRenderFns:[]};var i=s("vSla")({name:"block-table",data:function(){return{}},props:["tableData"]},e,!1,function(t){s("IZYr")},null,null);a.a=i.exports},ujYL:function(t,a){}});
//# sourceMappingURL=6.18ac315180fe296aa17e.js.map