webpackJsonp([1],{1:function(t,e,n){n("j1ja"),t.exports=n("Qi62")},BeGj:function(t,e){},Qi62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("deoe"),s={name:"TextareaForDropTxt",props:{change:{type:Function,default:function(){}},placeholder:{type:String,default:"输入或拖拽.txt文件至框内"},tips:{type:String,default:"some tips"}},data:function(){return{text:""}},mounted:function(){var t=this;window.onload=function(){document.addEventListener("dragover",function(t){t.stopPropagation(),t.preventDefault()},!1),document.addEventListener("drop",function(t){t.stopPropagation(),t.preventDefault()},!1)},t.$nextTick(function(){var e=t.$refs.oDrop;e.addEventListener("dragenter",function(t){t.stopPropagation(),t.preventDefault()},!1),e.addEventListener("dragover",function(t){t.stopPropagation(),t.preventDefault()},!1),e.addEventListener("drop",function(e){e.stopPropagation(),e.preventDefault();var n=e.dataTransfer.files;t.handle("filelist",n)},!1)})},methods:{handle:function(t,e){var n=this,a=new FileReader;a.readAsText(e[0]),a.onload=function(t){n.text=t.target.result}},outPutVal:function(){this.change(this.text)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drop-wrap"},[n("div",{ref:"oDrop",staticClass:"oDrop"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{refs:"outTextarea",placeholder:t.placeholder},domProps:{value:t.text},on:{change:t.outPutVal,input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"tips",domProps:{textContent:t._s(t.tips)}})])},staticRenderFns:[]};var r={name:"Main",components:{TextareaForDropTxt:n("VU/8")(s,o,!1,function(t){n("qCMZ")},"data-v-2e528cf3",null).exports},data:function(){return{onLine:i.default.onLine,citaions:i.default.citaions,help:i.default.help,placeholder_1:"输入多肽/拖入多肽.txt文件",tips_1:"* 多肽数量应小于1000条",placeholder_2:"输入表达量/拖入表达量.txt文件",tips_2:"* 表达量应跟多肽数量对应"}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{staticClass:"home"},[n("div",{staticClass:"main"},[n("Header"),t._v(" "),n("Menu"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"module"},[n("div",{staticClass:"module-title"},[n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.onLine.module))])]),t._v(" "),n("div",{staticClass:"module-content pdlr"},[n("div",{staticClass:"online"},[t._v(t._s(t.onLine.context))])])]),t._v(" "),n("div",{staticClass:"module"},[t._m(0),t._v(" "),n("div",{staticClass:"module-content pdlr"},[n("div",{staticClass:"form-wrap"},[n("div",{staticClass:"textarea-item"},[n("TextareaForDropTxt",{attrs:{tips:t.tips_1,placeholder:t.placeholder_1}})],1),t._v(" "),n("div",{staticClass:"textarea-item"},[n("TextareaForDropTxt",{attrs:{tips:t.tips_2,placeholder:t.placeholder_2}})],1),t._v(" "),n("div",{staticClass:"submit"},[t._v("Submit")])])])]),t._v(" "),n("div",{staticClass:"module"},[n("div",{staticClass:"module-title"},[n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.citaions.module))])]),t._v(" "),n("div",{staticClass:"module-content"},[n("div",{staticClass:"ctx-title",domProps:{textContent:t._s(t.citaions.content.title)}}),t._v(" "),n("ul",{staticClass:"ctx-paragraph"},t._l(t.citaions.content.paragraph,function(e,a){return n("li",{key:a,staticClass:"circle"},[t._l(e.content,function(e,a){return n("div",{key:a,domProps:{textContent:t._s(e)}})}),t._v(" "),n("div",{staticClass:"relative-wrap"},[e.relative.panel?n("span",{domProps:{textContent:t._s(e.relative.panel)}}):t._e(),t._v(" "),t._l(e.relative.hrefs,function(e,a){return n("a",{key:a,attrs:{href:e.href},domProps:{textContent:t._s(e.text)}})})],2)],2)}))])]),t._v(" "),n("div",{staticClass:"module"},[n("div",{staticClass:"module-title"},[n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.help.module))])]),t._v(" "),n("div",{staticClass:"module-content pdlr"},[n("div",{staticClass:"help-wrap"},[n("table",{staticClass:"help-tab"},[n("tbody",t._l(t.help.table_list,function(e,a){return n("tr",{key:a},[n("td",[n("div",{staticClass:"label"},[n("div",{staticClass:"circle"},[t._v(t._s(e.label))])])]),t._v(" "),n("td",[n("div",{staticClass:"download"},[n("a",{attrs:{href:e.download}},[t._v("Download")])])])])}))]),t._v(" "),n("div",{staticClass:"contact-wrap"},[t._v(t._s(t.help.contact))])])])]),t._v(" "),t._m(1)]),t._v(" "),n("copyRight")],1)]),t._v(" "),n("div",{staticClass:"shadow"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module-title"},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"title"},[this._v("Submission:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module"},[e("div",{staticClass:"module-title"},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"title"},[this._v("Design by:")])]),this._v(" "),e("div",{staticClass:"module-content pdlr"},[e("div",{staticClass:"design-wrap"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:n("ZcyY"),alt:""}})]),this._v(" "),e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:n("qV0w"),alt:""}})])])])])}]};var c=n("VU/8")(r,l,!1,function(t){n("lMPh")},null,null).exports,d=n("fZjL"),u=n.n(d),p=n("gRE1"),v=n.n(p),f=window.location;f.origin||(f.origin=f.protocol+"//"+f.host),void 0===Array.prototype.find&&(Array.prototype.find=function(t){for(var e=this.length,n=0;n<e;n++)if(!0===t(this[n],n))return this[n];return null}),void 0===Array.prototype.includes&&(Array.prototype.includes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e<0&&(e+=this.length);for(var n=this.length,a=e;a<n;a++)if(t===this[a])return!0;return!1}),void 0===Array.prototype.findIndex&&(Array.prototype.findIndex=function(t){for(var e=this.length,n=0;n<e;n++)if(!0===t(this[n],n))return n;return-1}),void 0===v.a&&(Object.values=function(t){return u()(t).map(function(e){return t[e]})});n("rdV6");var m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-wrap"},[e("div",{staticClass:"logo"})])}]};var h=n("VU/8")({name:"Header"},m,!1,function(t){n("sDc9")},"data-v-dd6d2d68",null).exports,_={name:"Menu",props:{data:{type:Array,default:function(){return["EPIC","Submission","Result","Cltation","Help"]}}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-wrap"},t._l(t.data,function(e,a){return n("div",{key:a,staticClass:"menu-item",domProps:{textContent:t._s(e)}})}))},staticRenderFns:[]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright-wrap"},[e("div",{staticClass:"line"}),this._v(" "),e("span",{staticClass:"copyright"},[this._v("Copyright © All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378")])])}]};var x=[h,n("VU/8")(_,C,!1,function(t){n("nxAK")},"data-v-7ea15bf2",null).exports,n("VU/8")({name:"copyRight"},g,!1,function(t){n("BeGj")},"data-v-1a8973b7",null).exports],P={install:function(t,e){x.forEach(function(e){t.component(e.name,e)}),t.mixin({created:function(){}})}};a.a.config.productionTip=!1,a.a.use(P),a.a.component(c.name,c),new a.a({el:"#root",template:"<Main></Main>"})},ZcyY:function(t,e,n){t.exports=n.p+"static/img/a1.e8f9590.jpg"},deoe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"onLine",function(){return a}),n.d(e,"citaions",function(){return i}),n.d(e,"help",function(){return s});var a={module:"EPIC Online：",context:"Epitope Presenttation Integrated prediCtion, 简称EPIC。基于多肽疫苗的个体化免疫治疗是当今治疗癌症的有效手段，而抗原呈递的准确预测是设计出高效的多肽疫苗的关键，为此我们开发了这款软件。此外，该软件还可以用于其他T细胞表位的预测。EPICv2.0是基于EPICv1.0(原EPIC)的改进，增加了对中国人群常见分型A1101,A3201，B0702,B4402的新抗原预测支持，增加了同时预测多种分型图和多种长度的功能，准确率也比EPICv1.0有所提高。"},i={module:"Citations：",content:{title:"For publicction of results, please cite",paragraph:[{content:["NetMHCpan-4.0:Imporoved Peptide-MHC Class I Interaction Predictions Integrating Eluted Ligand and Peptide Binding Affinity Data","Vanessa Jurtz,Sinu Paul,Massimo Andreatta,Paolo Marcatili,Bjoem Peters adn Morten NieIssen","The Journal of Immunology(2017)ji700893;DOI:10.4049/jimmunol.1700893"],relative:{panle:"",hrefs:[{text:"Full text",href:"#"},{text:"[PDF]",href:"#"}]}},{content:["NetMHCpan-3.0:Imporoved prediction of binding to MHC class I molecules integrating information from multiple receptor and peptide length data sets Morten Nielsen and Massime Andreatta","Genome Medicine(2016):8:33"],relative:{panel:"",hrefs:[{text:"Full text",href:"#"},{text:"[PDF]",href:"#"}]}},{content:["NetMHCpan-3.0:Imporoved prediction of binding to MHC class I molecules integrating information from multiple receptor and peptide length data sets Morten Nielsen and Massime Andreatta","Genome Medicine(2016):8:33"],relative:{panel:"PMID：",hrefs:[{text:"Full text",href:"#"},{text:"[PDF]",href:"#"}]}}]}},s={module:"Help：",table_list:[{label:"Training data",download:"#"},{label:"Test data",download:"#"},{label:"EPIC data",download:"#"},{label:"Document",download:"#"}],contact:"Contact us: p_XXX@genomics.cn"};e.default={onLine:a,citaions:i,help:s}},lMPh:function(t,e){},nxAK:function(t,e){},qCMZ:function(t,e){},qV0w:function(t,e,n){t.exports=n.p+"static/img/a2.7c09472.jpg"},rdV6:function(t,e){},sDc9:function(t,e){}},[1]);