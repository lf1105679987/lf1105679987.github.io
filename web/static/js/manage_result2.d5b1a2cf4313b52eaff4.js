webpackJsonp([2],{"+BTi":function(e,t){},4:function(e,t,n){n("j1ja"),e.exports=n("gdxH")},Dte2:function(e,t){},GXEp:function(e,t){},P9l9:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s});var i=n("mtWM"),a=n.n(i).a.create();a.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e});var r="http://47.110.70.236:8010",s={login:r+"/user/login",register:r+"/user/register",addSample:r+"/sample/addSample",sampleList:r+"/sample/search",sendEmail:r+"/trainResult/sendMail"}},S0Tp:function(e,t,n){"use strict";var i=n("7+uW"),a=n("fZjL"),r=n.n(a),s=n("gRE1"),o=n.n(s),l=window.location;l.origin||(l.origin=l.protocol+"//"+l.host),void 0===Array.prototype.find&&(Array.prototype.find=function(e){for(var t=this.length,n=0;n<t;n++)if(!0===e(this[n],n))return this[n];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t<0&&(t+=this.length);for(var n=this.length,i=t;i<n;i++)if(e===this[i])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(e){for(var t=this.length,n=0;n<t;n++)if(!0===e(this[n],n))return n;return-1}),void 0===o.a&&(Object.values=function(e){return r()(e).map(function(t){return e[t]})});n("rdV6");var u=n("mvHQ"),c=n.n(u),p=(n("cwe7"),n("+BTi"),n("2X9z")),d=n.n(p),f=(n("GXEp"),n("mtrD")),h=n.n(f),v=(n("X+ky"),n("HJMx")),m=n.n(v),g=n("P9l9");i.default.use(m.a),i.default.use(h.a);var y={name:"Header",data:function(){return{userinfo:{},showModal:!1,type:!0,userName:"",userPwd:"",userEmail:""}},created:function(){var e=this;e.$bus.$on("openLogin",function(t){e.toLogin()})},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo"))||{};this.userinfo=t,e.$nextTick(function(){document.addEventListener("keyup",function(t){27==t.keyCode&&e.close()})})},methods:{loginout:function(){localStorage.removeItem("userinfo"),this.userinfo={}},toRegister:function(){this.showModal=!0,this.type=!1},toLogin:function(){this.showModal=!0,this.type=!0},close:function(){this.userName="",this.userPwd="",this.userEmail="",this.showModal=!1},changeType:function(){this.userName="",this.userPwd="",this.type=!this.type},submit:function(){var e=this,t={userName:e.userName||"",password:e.userPwd||""};if(!t.userName.trim())return d.a.error("请输入用户名");if(!t.password.trim())return d.a.error("请输入密码");if(e.type)g.b.post(g.a.login,t).then(function(n){var i=n.data,a=void 0===i?{}:i,r=a.data||{};if("true"===a.success){var s={userName:t.userName,token:r.token,userId:r.userId};localStorage.setItem("userinfo",c()(s)),localStorage.setItem("token",r.token),e.userinfo=s,e.close()}else d.a.error(a.msg||"注册失败！")}).catch(function(){d.a.error("异常错误，请稍后重试！")});else{if(t.email=e.userEmail||"",!t.email.trim())return d.a.error("请输入注册邮箱");g.b.post(g.a.register,t).then(function(t){var n=t.data,i=void 0===n?{}:n;"true"===i.success?(d.a.success("注册成功，请登录"),e.changeType()):d.a.error(i.msg||"注册失败！")}).catch(function(){d.a.error("异常错误，请稍后重试！")})}}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-wrap"},[n("div",{staticClass:"logo"}),e._v(" "),n("div",{staticClass:"login-box"},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"}},[e._v("您好，"+e._s(e.userinfo.userName)+"!")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.userinfo.userName,expression:"userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.loginout}},[e._v("退出登录")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toLogin}},[e._v("请登录")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.userinfo.userName,expression:"!userinfo.userName"}],attrs:{href:"javascript:;"},on:{click:e.toRegister}},[e._v("请注册")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"login-shadow",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[n("div",{staticClass:"login-container",class:{max:!e.type}},[n("div",{staticClass:"login-wrap"},[n("div",{staticClass:"title"},[e._v("\n          "+e._s(e.type?"请登录":"请注册")+"\n          "),n("div",{staticClass:"close",on:{click:e.close}})]),e._v(" "),n("div",{staticClass:"login-inner"},[n("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),n("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.userPwd,callback:function(t){e.userPwd=t},expression:"userPwd"}}),e._v(" "),e.type?e._e():n("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.type?"登录":"注册"))]),e._v(" "),n("div",{staticClass:"footer-wrap"},[n("span",{on:{click:e.changeType}},[e._v(e._s(e.type?"立即注册":"返回登录"))])])],1)])])])])},staticRenderFns:[]};var w=n("VU/8")(y,_,!1,function(e){n("oo4f")},null,null).exports,A={name:"Menu",props:{data:{type:Array,default:function(){return[{text:"EPIC",href:"#EPIC"},{text:"Submission",href:"#Submission"},{text:"Result",href:"#Result"},{text:"Cltation",href:"#Cltation"},{text:"Help",href:"#Help"}]}}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrap"},e._l(e.data,function(t,i){return n("div",{key:i,staticClass:"menu-item"},[n("a",{attrs:{href:t.href}},[e._v(e._s(t.text))])])}))},staticRenderFns:[]};var C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrap"},[t("div",{staticClass:"copyright-inner"},[t("div",{staticClass:"line"}),this._v(" "),t("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])])}]};var x,M,N=[w,n("VU/8")(A,b,!1,function(e){n("Z6R4")},"data-v-478cdbc8",null).exports,n("VU/8")({name:"copyRight"},C,!1,function(e){n("b5Xa")},"data-v-fce46656",null).exports],k={install:function(e,t){N.forEach(function(t){e.component(t.name,t)}),e.mixin({created:function(){}})}};x=i.default,M=new x,x.prototype.$bus={$on:function(){M.$on.apply(M,arguments)},$off:function(){M.$off.apply(M,arguments)},$once:function(){M.$once.apply(M,arguments)},$emit:function(){M.$emit.apply(M,arguments)}},i.default.config.productionTip=!1,i.default.use(k)},"X+ky":function(e,t){},Z6R4:function(e,t){},b5Xa:function(e,t){},cwe7:function(e,t){},gdxH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=(n("ylrw"),n("+BTi"),n("6oiW")),r=n.n(a),s=(n("Dte2"),n("q4le")),o=n.n(s),l=(n("isE6"),n("LR6y")),u=n.n(l),c=(n("X+ky"),n("HJMx")),p=n.n(c);i.default.use(p.a),i.default.use(u.a),i.default.use(o.a),i.default.use(r.a);var d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{staticClass:"home"},[n("div",{staticClass:"main"},[n("Header"),e._v(" "),n("Menu"),e._v(" "),n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("div",{staticClass:"table-wrap"},[n("el-table",{staticStyle:{width:"100%"},attrs:{maxHeight:"450",data:e.tableData,border:""}},[n("el-table-column",{attrs:{align:"center",prop:"ip",label:"IP"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"typeing",label:"Typeing"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"peptid_length",label:"Peptide length"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"detail",label:"Detail"}})],1),e._v(" "),n("div",{staticClass:"pagenation-wrap"},[n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),n("copyRight")],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("Result")])])}]};var f=n("VU/8")({name:"Main",data:function(){return{input:"",currentPage:1,tableData:[{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"},{ip:"10.5.22.54",typeing:"HLA-A0101(A01)",peptid_length:"10 mer peptides",detail:"More"}]}},mounted:function(){},methods:{handleSizeChange:function(){},handleCurrentChange:function(){}}},d,!1,function(e){n("hyM9")},null,null).exports;n("S0Tp");i.default.component(f.name,f),new i.default({el:"#root",template:"<Main></Main>"})},hyM9:function(e,t){},isE6:function(e,t){},oo4f:function(e,t){},rdV6:function(e,t){},ylrw:function(e,t){}},[4]);