webpackJsonp([3],{Cem8:function(t,a){},No2B:function(t,a){},S3iu:function(t,a){},VGB1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("wzRi"),l=e("spLH"),i={name:"all-block",data:function(){return{blockData:[{id:"6421980538sdsad",height:"596356",time:"2018/01/13 17:44:47",transcation:"0",generatedBy:"HTRoad",amount:"499.12345678",forged:"4.1"},{id:"6421980538sdsad",height:"596356",time:"2018/01/13 17:44:47",transcation:"0",generatedBy:"HTRoad",amount:"499.12345678",forged:"4.1"},{id:"6421980538sdsad",height:"596356",time:"2018/01/13 17:44:47",transcation:"0",generatedBy:"HTRoad",amount:"499.12345678",forged:"4.1"}]}},methods:{getPageData:function(t){console.log("接收到的分页："+t)}},components:{blockTable:n.a,pagination:l.a}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"all-block"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("h2",[this._v(this._s(this.$t("allBlock.title")))])]),this._v(" "),a("div",{staticClass:"table-box"},[a("div",{staticClass:"table-scroll"},[a("blockTable",{attrs:{tableData:this.blockData}}),this._v(" "),a("pagination",{on:{pageChange:this.getPageData}})],1)])])])},staticRenderFns:[]};var s=e("vSla")(i,o,!1,function(t){e("S3iu")},"data-v-44f87122",null);a.default=s.exports},spLH:function(t,a,e){"use strict";var n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","prev-text":this.$t("pagination.prev"),"next-text":this.$t("pagination.next"),total:1e3},on:{"current-change":this.pageChange}})],1)},staticRenderFns:[]};var l=e("vSla")({name:"pagination",methods:{pageChange:function(t){this.$emit("pageChange",t)}}},n,!1,function(t){e("Cem8")},null,null);a.a=l.exports},wzRi:function(t,a,e){"use strict";var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"block-table"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",fit:""}},[e("el-table-column",{attrs:{prop:"id",label:t.$t("blockTable.th1"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/block/detail"}},[t._v(t._s(a.row.id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"height",label:t.$t("blockTable.th2")}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:t.$t("blockTable.th3"),"min-width":"110"}}),t._v(" "),e("el-table-column",{attrs:{prop:"transcation",label:t.$t("blockTable.th4")}}),t._v(" "),e("el-table-column",{attrs:{prop:"generatedBy",label:t.$t("blockTable.th5")}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount",label:t.$t("blockTable.th6")}}),t._v(" "),e("el-table-column",{attrs:{prop:"forged",label:t.$t("blockTable.th7")}})],1)],1)},staticRenderFns:[]};var l=e("vSla")({name:"block-table",data:function(){return{}},props:["tableData"]},n,!1,function(t){e("No2B")},null,null);a.a=l.exports}});
//# sourceMappingURL=3.e9ddbb1a12062e70ef55.js.map