webpackJsonp([3],{"+BTi":function(e,t){},3:function(e,t,a){a("j1ja"),e.exports=a("aOq2")},Dte2:function(e,t){},GXEp:function(e,t){},P9l9:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s});var n=a("mtWM"),i=a.n(n).a.create();i.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e});var r="http://47.110.70.236:8010",s={login:r+"/user/login",register:r+"/user/register",addSample:r+"/sample/addSample",sampleList:r+"/sample/search",sendEmail:r+"/trainResult/sendMail"}},S0Tp:function(e,t,a){"use strict";var n=a("7+uW"),i=a("fZjL"),r=a.n(i),s=a("gRE1"),o=a.n(s),l=window.location;l.origin||(l.origin=l.protocol+"//"+l.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return this[a];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var a=this.length,n=t;n<a;n++)if(e===this[n])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return a;return-1}),void 0===o.a&&(Object.values=function(e){return r()(e).map(function(t){return e[t]})});a("rdV6");var c=a("mvHQ"),u=a.n(c),d=(a("cwe7"),a("+BTi"),a("2X9z")),f=a.n(d),p=(a("GXEp"),a("mtrD")),h=a.n(p),m=(a("X+ky"),a("HJMx")),v=a.n(m),g=a("P9l9");n.default.use(v.a),n.default.use(h.a);var w={name:"Header",data:function(){return{userinfo:{},showModal:!1,type:!0,userName:"",userPwd:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type=!1},toLogin:function(){this.showModal=!0,this.type=!0},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type=!this.type},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if(!t.userName.trim())return f.a.error("请输入用户名");if(!t.password.trim())return f.a.error("请输入密码");if(e.type)g.b.post(g.a.login,t).then(function(a){var n=a.data,i=void 0===n?{}:n,r=i.data||{};if("true"===i.success){var s={userName:t.userName,token:r.token,userId:r.userId};localStorage.setItem("userinfo",u()(s)),localStorage.setItem("token",r.token),e.userinfo=s,e.close()}else f.a.error(i.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")});else{if(t.email=e.userEmail||"",!t.email.trim())return f.a.error("请输入注册邮箱");g.b.post(g.a.register,t).then(function(t){var a=t.data,n=void 0===a?{}:a;"true"===n.success?(f.a.success("注册成功，请登录"),e.changeType()):f.a.error(n.msg||"注册失败！")}).catch(function(){f.a.error("异常错误，请稍后重试！")})}}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("div",{staticClass:"logo"}),e._v(" "),a("div",{staticClass:"login-box"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[a("div",{staticClass:"login-container",class:{max:!e.type}},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"title"},[e._v("\n          "+e._s(e.type?"请登录":"请注册")+"\n          "),a("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"login-inner"},[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),e.type?e._e():a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.type?"登录":"注册"))]),e._v(" "),a("div",{staticClass:"footer-wrap"},[a("span",{on:{click:e.changeType}},[e._v(e._s(e.type?"立即注册":"返回登录"))])])],1)])])])])},staticRenderFns:[]};var y=a("VU/8")(w,_,!1,function(e){a("oo4f")},null,null).exports,b={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,n){return a("div",{key:n,staticClass:"menu-item"},[a("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var k,N,R=[y,a("VU/8")(b,C,!1,function(e){a("Z6R4")},"data-v-478cdbc8",null).exports,a("VU/8")({name:"copyRight"},x,!1,function(e){a("b5Xa")},"data-v-fce46656",null).exports],E={install:function(e,t){R.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};k=n.default,N=new k,k.prototype.$bus={$on:function(){N.$on.apply(N,arguments)},$off:function(){N.$off.apply(N,arguments)},$once:function(){N.$once.apply(N,arguments)},$emit:function(){N.$emit.apply(N,arguments)}},n.default.config.productionTip=!1,n.default.use(E)},"X+ky":function(e,t){},Z6R4:function(e,t){},aOq2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i=(a("cwe7"),a("+BTi"),a("2X9z")),r=a.n(i),s=(a("ylrw"),a("6oiW")),o=a.n(s),l=(a("Dte2"),a("q4le")),c=a.n(l),u=(a("isE6"),a("LR6y")),d=a.n(u),f=(a("X+ky"),a("HJMx")),p=a.n(f),h=a("P9l9");n.default.use(p.a),n.default.use(d.a),n.default.use(c.a),n.default.use(o.a);var m={name:"Main",data:function(){return{currentPage:1,menu:[{text:"EPIC",href:"./client_index.html"},{text:"Submission",href:"./client_index.html"},{text:"Result",href:"#"},{text:"Cltation",href:"./client_index.html"},{text:"Help",href:"./client_index.html"}],tableData:[],total:0,pageSize:20,userinfo:{},activeRow:{},email:""}},created:function(){this.userinfo=JSON.parse(localStorage.getItem("userinfo"))||{}},mounted:function(){this.getData()},methods:{downLoad:function(){if(""===this.email.trim())return!1;this.activeRow&&this.activeRow.sampleId?r.a.error("暂无下载接口！"):r.a.error("请选择要下载的结果！")},sendEmail:function(){if(""===this.email.trim())return!1;this.activeRow&&this.activeRow.sampleId?h.b.post(h.a.sendEmail,{email:this.email,sampleId:this.activeRow.sampleId}).then(function(e){"true"===e.data.success?r.a.success("发送成功！"):r.a.error("发送失败！")}).catch(function(){r.a.error("异常错误,请稍后重试！")}):r.a.error("请选择要发送的结果！")},rowClick:function(e,t,a){this.activeRow=e},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},getData:function(){var e=this,t={userId:this.userinfo.userId,page:this.currentPage,pageSize:this.pageSize};h.b.post(h.a.sampleList,t).then(function(t){var a=t.data,n=void 0===a?{}:a;if("true"===n.success){var i=n.data||{};e.total=Number(i.totalRows||0),e.tableData=i.records||[]}}).catch(function(){r.a.error("异常错误，请稍后重试！")})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"home"},[a("div",{staticClass:"main"},[a("Header"),e._v(" "),a("Menu",{attrs:{data:e.menu}}),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"top"},[a("span",[e._v("Result")]),e._v(" "),a("div",{staticClass:"oprate-wrap"},[a("div",{staticClass:"email"},[a("el-input",{attrs:{size:"mini",placeholder:"Enter E-Mail",clearable:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("span",{staticClass:"oprate-btn",class:{disabled:""===e.email.trim()},on:{click:e.sendEmail}},[e._v("Send")]),e._v(" "),a("span",{staticClass:"oprate-btn",class:{disabled:""===e.email.trim()},on:{click:e.downLoad}},[e._v("Download")])])]),e._v(" "),a("div",{staticClass:"table-wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:""},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{align:"center",prop:"allele",label:"Polypeptide"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"allele",label:"Typeing"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"allele",label:"Score"}})],1),e._v(" "),a("div",{staticClass:"pagenation-wrap"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("copyRight")],1)])])},staticRenderFns:[]};var g=a("VU/8")(m,v,!1,function(e){a("aia/")},null,null).exports;a("S0Tp");n.default.component(g.name,g),new n.default({el:"#root",template:"<Main></Main>"})},"aia/":function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},isE6:function(e,t){},oo4f:function(e,t){},rdV6:function(e,t){},ylrw:function(e,t){}},[3]);