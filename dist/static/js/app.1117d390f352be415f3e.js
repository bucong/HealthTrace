webpackJsonp([11],{IMb5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("MVMM"),i=n("uNf3"),o=n.n(i),l=(n("UhgQ"),n("nvav"),n("VaBq"),n("RHLn"),n("muQq"),n("MKfj")),r=n.n(l),s=n("TXGq"),c=n("J/DI"),h=n.n(c),m=n("eUE8");m.el=h.a.el;var u=m,d=n("uIVm"),p=n.n(d),f=n("OJLA");f.el=p.a.el;var T={en:u,cn:f};a.default.use(s.a);var b=new s.a({locale:localStorage.lang||"en",messages:T});r.a.i18n(function(t,e){return b.t(t,e)});var g=b,v=n("2+1C"),k=n.n(v),H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var w=n("vSla")({name:"App"},H,!1,function(t){n("IMb5")},null,null).exports,y=n("zO6J");n("oFuF");a.default.use(y.a);var A=new y.a({routes:[{path:"/",component:function(){return n.e(0).then(n.bind(null,"JXTs"))},children:[{path:"",name:"home",component:function(){return n.e(2).then(n.bind(null,"zKIK"))}},{path:"/allTransaction",name:"allTransaction",component:function(){return n.e(1).then(n.bind(null,"tO87"))}},{path:"/transaction/detail",name:"transactionDetail",component:function(){return n.e(9).then(n.bind(null,"Ef2T"))}},{path:"/allBlock",name:"allBlock",component:function(){return n.e(3).then(n.bind(null,"VGB1"))}},{path:"/block/detail",name:"blockDetail",component:function(){return n.e(5).then(n.bind(null,"p3HX"))}},{path:"/delegate",name:"delegate",component:function(){return n.e(4).then(n.bind(null,"awz5"))}},{path:"/address",name:"address",component:function(){return n.e(6).then(n.bind(null,"1GWD"))}},{path:"/network",name:"network",component:function(){return n.e(7).then(n.bind(null,"jokA"))}},{path:"*",name:"noResult",component:function(){return n.e(8).then(n.bind(null,"xWl6"))}}]}]});a.default.config.productionTip=!1,a.default.use(o.a),a.default.use(k.a),new a.default({el:"#app",router:A,i18n:g,components:{App:w},template:"<App/>"})},OJLA:function(t,e){t.exports={header:{placeholder:"查找 地址/删除/块/横移",menu:{tools:{name:"工具",nav1:"头号账户",nav2:"代表管理",nav3:"网络管理"},wallet:"我的钱包"}},footer:{phone:"电话：+61 412 927 796",email:"邮件：webmaster@jaz-intl.com",address:"地址：澳大利亚新南威尔士驱动粗花头南2486 9A/ 139分钟的NunJungBar",copyright:"COPYRIGHT (©) 2018 HealthTrace 版权所有"},home:{banner:"健康追踪的块链资源管理器",data:{height:"高度",supply:"供应链",users:"用户"},viewAll:"查看所有",table1:"最新交易",table2:"最新区块"},pagination:{prev:"上一页",next:"下一页"},blockTable:{th1:"ID",th2:"高度",th3:"时间",th4:"交易",th5:"生成",th6:"数量(HTC)",th7:"伪造(HTC)"},transactionTable:{th1:"ID",th2:"时间",th3:"发送",th4:"接收",th5:"数量(HTC)",th6:"费用(HTC)"},delegateTable:{th1:"序号",th2:"名称",th3:"地址",th4:"伪造(HTC)",th5:"伪造时间",th6:"状态",th7:"生产率",th8:"批准"},standbyTable:{th1:"序号",th2:"名称",th3:"地址",th4:"生产率",th5:"批准"},transactions:{th1:"ID",th2:"时间",th3:"发送",th4:"接收",th5:"数量(HTC)",th6:"费用(HTC)",th7:"确认"},peerTable:{th1:"IP地址",th2:"端口",th3:"主机名",th4:"状态",th5:"版本",th6:"平台",th7:"高度"},allTransaction:{title:"所有交易"},allBlock:{title:"所有区块"},noResult:"搜索结果为空",delegate:{title:"代表管理",monitor:{item1:{title:"代表"},item2:{title:"总伪造"},item3:{title:"最新区块"},item4:{title:"下一个伪造者"},item5:{title:"最好伪造者"},item6:{title:"最好生产率"}},tab:{active:"当前代表",standby:"备用代表"},activeTab:{item1:"最近伪造区块",item2:"丢失区块",item3:"不伪造",item4:"伪造队列"}},transactionDetail:{title:"交易",info:{id:"ID"},summary:{title:"概况",sender:"发送者",receipt:"接收者",confirmations:"确认",amount:"数量",fee:"费用",timestamp:"时间",block:"区块"}},blockDetail:{title:"区块",info:{id:"区块ID"},summary:{title:"概况",height:"高度",transactions:"交易",confirmations:"确认",reward:"提醒",fee:"总费用",forged:"总伪造",amount:"总数量",timestamp:"时间",generated:"生成",previous:"上一个区块",next:"下一个区块"},transactions:"交易"},address:{title:"地址",info:{address:"地址",key:"公钥"},summary:{title:"概况",balance:"总余额",transactions:"交易",delegate:"代表"},transactions:"交易",tab:{all:"所有",sent:"发送",received:"接收"}},network:{title:"网络管理",info:{item1:{title:"连接对等体"},item2:{title:"对等体版本"},item3:{title:"最新区块"},item4:{title:"体积(HTC)"}},peers:"连接对等体"}}},RHLn:function(t,e){},UhgQ:function(t,e){},VaBq:function(t,e){},eUE8:function(t,e){t.exports={header:{placeholder:"Find address/delefate/block/transitation",menu:{tools:{name:"Tools",nav1:"Top Accounts",nav2:"Delegate Monitor",nav3:"Network Monitor"},wallet:"My Wallet"}},footer:{phone:"Phone：+61 412 927 796",email:"E-mial：webmaster@jaz-intl.com",address:"Address：9A/139 Minjungbal Drive Tweed Heads South NSW 2486 Australia",copyright:"COPYRIGHT (©) 2018 HealthTrace"},home:{banner:"Block Chain Explorer of HealthTrace",data:{height:"Height",supply:"Supply",users:"Users"},viewAll:"View All",table1:"Latest Transactions",table2:"Latest Blocks"},pagination:{prev:"Previous",next:"Next"},blockTable:{th1:"ID",th2:"Height",th3:"Timestamp",th4:"Transactions",th5:"Generated by",th6:"Amount(HTC)",th7:"Forged(HTC)"},transactionTable:{th1:"ID",th2:"Timestamp",th3:"Sender",th4:"Recipient",th5:"Amount(HTC)",th6:"Fee(HTC)"},delegateTable:{th1:"Rank",th2:"Name",th3:"Address",th4:"Forged(HTC)",th5:"ForgingTime",th6:"Status",th7:"Productivity",th8:"Approval"},standbyTable:{th1:"Rank",th2:"Name",th3:"Address",th4:"Productivity",th5:"Approval"},transactions:{th1:"ID",th2:"Timestamp",th3:"Sender",th4:"Recipient",th5:"Amount(HTC)",th6:"Fee(HTC)",th7:"Confirmations"},peerTable:{th1:"IP Address",th2:"Port",th3:"Hostname",th4:"Status",th5:"Version",th6:"Platform",th7:"Height"},allTransaction:{title:"All Transactions"},allBlock:{title:"All Blocks"},noResult:"No Search Results",delegate:{title:"Delegate Monitor",monitor:{item1:{title:"Delegates"},item2:{title:"Total Forged"},item3:{title:"Last Block"},item4:{title:"Next Forgers"},item5:{title:"Best Forger"},item6:{title:"Best Productivity"}},tab:{active:"Active Delegates",standby:"Standby Delegates"},activeTab:{item1:"Forged block recently",item2:"Missed block",item3:"Not forging",item4:"In queue for forging"}},transactionDetail:{title:"Transaction",info:{id:"ID"},summary:{title:"Summary",sender:"Sender",receipt:"Receipt",confirmations:"Confirmations",amount:"Amount",fee:"Fee",timestamp:"Timestamp",block:"Block"}},blockDetail:{title:"Block",info:{id:"Block ID"},summary:{title:"Summary",height:"Height",transactions:"Transactions",confirmations:"Confirmations",reward:"Reward",fee:"Total Fee",forged:"Total Forged",amount:"Total Amount",timestamp:"Timestamp",generated:"Generated by",previous:"Previous Block",next:"Next Block"},transactions:"Transactions"},address:{title:"Address",info:{address:"Address",key:"Public Key"},summary:{title:"Summary",balance:"Total Balance",transactions:"Transactions",delegate:"Delegate"},transactions:"Transactions",tab:{all:"All",sent:"Sent",received:"Received"}},network:{title:"Network Monitor",info:{item1:{title:"Connected Peers"},item2:{title:"Peers Version"},item3:{title:"Last Block"},item4:{title:"Volume(HTC)"}},peers:"Connected peers"}}},muQq:function(t,e){},nvav:function(t,e){},oFuF:function(t,e,n){"use strict";e.a=function(t,e,n){switch(t){case"get":var a=window.localStorage.getItem(e);return a||!1;case"set":window.localStorage.setItem(e,n);break;case"remove":window.localStorage.removeItem(e);break;default:return!1}}}},["NHnr"]);
//# sourceMappingURL=app.1117d390f352be415f3e.js.map