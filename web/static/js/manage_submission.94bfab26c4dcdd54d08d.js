webpackJsonp([4],{"+BTi":function(e,t){},"1Cgp":function(e,t){},5:function(e,t,a){a("j1ja"),e.exports=a("Fu1l")},Dte2:function(e,t){},Fu1l:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=(a("cwe7"),a("+BTi"),a("2X9z")),s=a.n(r),i=(a("GXEp"),a("mtrD")),o=a.n(i),u=(a("ylrw"),a("6oiW")),l=a.n(u),c=(a("Dte2"),a("q4le")),f=a.n(c),d=(a("isE6"),a("LR6y")),p=a.n(d),h=(a("X+ky"),a("HJMx")),v=a.n(h),m=a("P9l9");n.default.use(v.a),n.default.use(p.a),n.default.use(f.a),n.default.use(l.a),n.default.use(o.a);var g={name:"Main",data:function(){return{currentPage:1,menu:[{text:"EPIC",href:"#"},{text:"Cltation",href:"#"},{text:"Help",href:"#"}],tableData:[],total:0,pageSize:20,userinfo:{}}},created:function(){this.userinfo=JSON.parse(localStorage.getItem("userinfo"))||{}},mounted:function(){this.getData()},methods:{LookAt:function(e){console.log(e),location.href="./manage_result.html?sampleId="+e.sampleId},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},getData:function(){var e=this,t={userId:this.userinfo.userId,page:this.currentPage,pageSize:this.pageSize};m.b.post(m.a.sampleList,t).then(function(t){var a=t.data,n=void 0===a?{}:a;if("true"===n.success){var r=n.data||{};e.total=Number(r.totalRows||0),e.tableData=r.records||[]}}).catch(function(){s.a.error("异常错误，请稍后重试！")})}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"home"},[a("div",{staticClass:"main"},[a("Header"),e._v(" "),a("Menu",{attrs:{data:e.menu}}),e._v(" "),a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("div",{staticClass:"table-wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{align:"center",label:"IP"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("暂无ip字段")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"allele",label:"Allele"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Length"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.length)+" mer peptides")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"Detail"},scopedSlots:e._u([{key:"default",fn:function(t){return["-1"===t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.LookAt(t.row)}}},[e._v("View")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagenation-wrap"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("copyRight")],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("Submission")])])}]};var y=a("VU/8")(g,_,!1,function(e){a("1Cgp")},null,null).exports;a("S0Tp");n.default.component(y.name,y),new n.default({el:"#root",template:"<Main></Main>"})},GXEp:function(e,t){},P9l9:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i});var n=a("mtWM"),r=a.n(n).a.create();r.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e});var s="http://47.110.70.236:8010",i={login:s+"/user/login",register:s+"/user/register",addSample:s+"/sample/addSample",sampleList:s+"/sample/search",sendEmail:s+"/trainResult/sendMail",trainResult:s+"/trainResult/search"}},S0Tp:function(e,t,a){"use strict";var n=a("7+uW"),r=a("fZjL"),s=a.n(r),i=a("gRE1"),o=a.n(i),u=window.location;u.origin||(u.origin=u.protocol+"//"+u.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return this[a];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var a=this.length,n=t;n<a;n++)if(e===this[n])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,a=0;a<t;a++)if(!0===e(this[a],a))return a;return-1}),void 0===o.a&&(Object.values=function(e){return s()(e).map(function(t){return e[t]})});a("rdV6");var l=a("mvHQ"),c=a.n(l),f=(a("cwe7"),a("+BTi"),a("2X9z")),d=a.n(f),p=(a("GXEp"),a("mtrD")),h=a.n(p),v=(a("X+ky"),a("HJMx")),m=a.n(v),g=a("P9l9");n.default.use(m.a),n.default.use(h.a);var _={name:"Header",data:function(){return{userinfo:{},showModal:!1,type:!0,userName:"",userPwd:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type=!1},toLogin:function(){this.showModal=!0,this.type=!0},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type=!this.type},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if(!t.userName.trim())return d.a.error("请输入用户名");if(!t.password.trim())return d.a.error("请输入密码");if(e.type)g.b.post(g.a.login,t).then(function(a){var n=a.data,r=void 0===n?{}:n,s=r.data||{};if("true"===r.success){var i={userName:t.userName,token:s.token,userId:s.userId};localStorage.setItem("userinfo",c()(i)),localStorage.setItem("token",s.token),e.userinfo=i,e.close()}else d.a.error(r.msg||"注册失败！")}).catch(function(){d.a.error("异常错误，请稍后重试！")});else{if(t.email=e.userEmail||"",!t.email.trim())return d.a.error("请输入注册邮箱");g.b.post(g.a.register,t).then(function(t){var a=t.data,n=void 0===a?{}:a;"true"===n.success?(d.a.success("注册成功，请登录"),e.changeType()):d.a.error(n.msg||"注册失败！")}).catch(function(){d.a.error("异常错误，请稍后重试！")})}}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("div",{staticClass:"logo"}),e._v(" "),a("div",{staticClass:"login-box"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[a("div",{staticClass:"login-container",class:{max:!e.type}},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"title"},[e._v("\n          "+e._s(e.type?"请登录":"请注册")+"\n          "),a("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"login-inner"},[a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),e.type?e._e():a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.type?"登录":"注册"))]),e._v(" "),a("div",{staticClass:"footer-wrap"},[a("span",{on:{click:e.changeType}},[e._v(e._s(e.type?"立即注册":"返回登录"))])])],1)])])])])},staticRenderFns:[]};var w=a("VU/8")(_,y,!1,function(e){a("oo4f")},null,null).exports,b={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,n){return a("div",{key:n,staticClass:"menu-item"},[a("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var k,N,S=[w,a("VU/8")(b,C,!1,function(e){a("Z6R4")},"data-v-478cdbc8",null).exports,a("VU/8")({name:"copyRight"},x,!1,function(e){a("b5Xa")},"data-v-fce46656",null).exports],E={install:function(e,t){S.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};k=n.default,N=new k,k.prototype.$bus={$on:function(){N.$on.apply(N,arguments)},$off:function(){N.$off.apply(N,arguments)},$once:function(){N.$once.apply(N,arguments)},$emit:function(){N.$emit.apply(N,arguments)}},n.default.config.productionTip=!1,n.default.use(E)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},isE6:function(e,t){},oo4f:function(e,t){},rdV6:function(e,t){},ylrw:function(e,t){}},[5]);