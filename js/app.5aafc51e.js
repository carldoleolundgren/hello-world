(function(t){function e(e){for(var a,n,s=e[0],l=e[1],u=e[2],c=0,p=[];c<s.length;c++)n=s[c],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/hello-world/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},3261:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e),r.d(e,"eventBus",(function(){return j}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("appHeader"),r("appLibrary")],1)},i=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Library")])])}],l={},u=l,d=(r("f860"),r("2877")),c=Object(d["a"])(u,n,s,!1,null,"0369204a",null),p=c.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title or author"},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),r("table",{staticClass:"table table-striped table-hover table-responsive"},[r("thead",[r("th",{staticClass:"title",on:{click:function(e){return t.sortLibrary("title")}}},[t._v(" Title "),r("transition",{attrs:{name:"rotate"}},[r("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:"title"===t.currentSort,expression:"currentSort === 'title'"}],style:{transform:"asc"===t.currentSortDir?"rotate(0deg)":"rotate(180deg)"},attrs:{icon:"arrow-up"}})],1)],1),r("th",{staticClass:"author",on:{click:function(e){return t.sortLibrary("author")}}},[t._v(" Author "),r("transition",{attrs:{name:"rotate"}},[r("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:"author"===t.currentSort,expression:"currentSort === 'author'"}],style:{transform:"asc"===t.currentSortDir?"rotate(0deg)":"rotate(180deg)"},attrs:{icon:"arrow-up"}})],1)],1),r("th",{staticClass:"small-col",on:{click:function(e){return t.sortLibrary("pages")}}},[t._v(" Pages "),r("transition",{attrs:{name:"rotate"}},[r("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:"pages"===t.currentSort,expression:"currentSort === 'pages'"}],style:{transform:"asc"===t.currentSortDir?"rotate(0deg)":"rotate(180deg)"},attrs:{icon:"arrow-up"}})],1)],1),r("th",{staticClass:"small-col",on:{click:function(e){return t.sortLibrary("readStatus")}}},[t._v(" Read? "),r("transition",{attrs:{name:"rotate"}},[r("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:"readStatus"===t.currentSort,expression:"currentSort === 'readStatus'"}],style:{transform:"asc"===t.currentSortDir?"rotate(0deg)":"rotate(180deg)"},attrs:{icon:"arrow-up"}})],1)],1),r("th",{staticClass:"small-col"}),r("th",{staticClass:"small-col"})]),r("tbody",t._l(t.filteredLibrary,(function(e){return r("tr",{key:e.title+e.author+e.pages},[r("td",[t._v(" "+t._s(e.title)+" ")]),r("td",[t._v(" "+t._s(e.author)+" ")]),r("td",[t._v(" "+t._s(e.pages)+" ")]),r("td",[t._v(" "+t._s(e.readStatus)+" ")]),r("td",[r("button",{staticClass:"btn btn-danger btn-sm",attrs:{id:e.id},on:{click:t.deleteBook}},[r("font-awesome-icon",{staticStyle:{"pointer-events":"none"},attrs:{icon:"trash",id:e.id}})],1)]),r("td",[r("button",{staticClass:"btn btn-info btn-sm",attrs:{id:e.id},on:{click:t.editBook}},[r("font-awesome-icon",{staticStyle:{"pointer-events":"none"},attrs:{icon:"edit",id:e.id}})],1)])])})),0),r("br"),r("button",{staticClass:"btn btn-primary",on:{click:function(e){t.modalWindowOpen=!0}}},[r("font-awesome-icon",{staticStyle:{"pointer-events":"none"},attrs:{icon:"plus-square"}}),t._v(" New Book")],1)]),r("appAddEditBook",{attrs:{isOpen:t.modalWindowOpen,isEditingBook:t.editWindowOpen,editKey:t.editKey}},[r("h3",{attrs:{slot:"modalHeader"},slot:"modalHeader"},[t._v(t._s(t.modalHeaderText))])])],1)},f=[],m=(r("4de4"),r("c740"),r("fb6a"),r("a434"),r("ac1f"),r("466d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.isOpen?r("div",{staticClass:"modal-backdrop",class:{open:t.isOpen},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModalWindow(e)}}},[r("form",[t._t("modalHeader"),t.errorsPresent?r("p",{staticClass:"text-danger"},[t._v("Please complete all fields")]):t._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],attrs:{type:"text",placeholder:"Author"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),t._v(" "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pages,expression:"pages"}],attrs:{type:"number",placeholder:"Number of pages"},domProps:{value:t.pages},on:{input:function(e){e.target.composing||(t.pages=e.target.value)}}}),t._v(" "),r("br"),r("div",{attrs:{id:"read-status"}},[r("p",{attrs:{id:"read-question"}},[t._v("Have you read it?")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.readStatus,expression:"readStatus"}],attrs:{id:"read-selector"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.readStatus=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"No"}},[t._v("No")]),r("option",{attrs:{value:"Yes"}},[t._v("Yes")]),r("option",{attrs:{value:"Reading"}},[t._v("Reading")])])]),t._v(" "),r("br"),t.isEditingBook?r("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.saveChanges()}}},[t._v("Save Changes")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addBook()}}},[t._v("Add Book")])],2)]):t._e()])}),v=[],b={props:{isOpen:Boolean,isEditingBook:Boolean,editKey:null},data:function(){return{title:"",author:"",pages:null,readStatus:"No"}},computed:{library:function(){return this.$store.state.library},id:function(){return this.title.toLowerCase()+this.author.toLowerCase()+this.pages},editIndex:function(){var t=this,e=this.$store.state.library.findIndex((function(e){return e.id==t.editKey}));return this.isEditingBook&&(this.title=this.$store.state.library[e].title,this.author=this.$store.state.library[e].author,this.pages=this.$store.state.library[e].pages,this.readStatus=this.$store.state.library[e].readStatus),e},errorsPresent:function(){return""===this.title||""===this.author||null==this.pages||0==this.pages}},methods:{addBook:function(){var t=this;this.errorsPresent||(-1===this.$store.state.library.findIndex((function(e){return e.id==t.id}))?(this.$store.commit("addBook",{title:this.title,author:this.author,pages:this.pages,readStatus:this.readStatus,id:this.id}),this.$store.commit("storeLibrary"),console.log(this.$store.state.library),this.title="",this.author="",this.pages="",this.readStatus="No",this.closeModalWindow()):alert("This book already exists in your library - please enter another."))},saveChanges:function(){var t=this;this.errorsPresent||(-1===this.$store.state.library.findIndex((function(e){return e.id==t.id}))?(this.$store.state.library[this.editIndex].title=this.title,this.$store.state.library[this.editIndex].author=this.author,this.$store.state.library[this.editIndex].pages=this.pages,this.$store.state.library[this.editIndex].readStatus=this.readStatus,this.$store.state.library[this.editIndex].id=this.id,this.$store.commit("storeLibrary"),this.closeModalWindow()):alert("This book already exists in your library - please enter another."))},closeModalWindow:function(){this.title="",this.author="",this.pages="",this.readStatus="No",j.$emit("modalWindowOpen",!1)}},created:function(){console.log("created")},destroyed:function(){console.log("destroyed")}},y=b,g=(r("f537"),Object(d["a"])(y,m,v,!1,null,"17df6044",null)),w=g.exports,S={data:function(){return{modalWindowOpen:!1,editWindowOpen:!1,editKey:null,filterText:"",currentSort:"name",currentSortDir:"asc"}},computed:{library:function(){return this.$store.state.library},sortedLibrary:function(){var t=this;return this.library.slice(0).sort((function(e,r){var a=1;return"desc"===t.currentSortDir&&(a=-1),e[t.currentSort]<r[t.currentSort]?-1*a:e[t.currentSort]>r[t.currentSort]?1*a:0}))},filteredLibrary:function(){var t=this;return this.sortedLibrary.filter((function(e){return e.title.toLowerCase().match(t.filterTextLowercase)||e.author.toLowerCase().match(t.filterTextLowercase)}))},filterTextLowercase:function(){return this.filterText.toLowerCase()},modalHeaderText:function(){return this.editWindowOpen?"Edit book:":"Add a book:"}},methods:{deleteBook:function(){var t=this.$store.state.library.findIndex((function(t){return t.id==event.target.id}));this.$store.state.library.splice(t,1),this.$store.commit("storeLibrary")},editBook:function(){this.modalWindowOpen=!0,this.editWindowOpen=!0,this.editKey=event.target.id},sortLibrary:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t}},components:{appAddEditBook:w},created:function(){var t=this;j.$on("modalWindowOpen",(function(e){t.modalWindowOpen=e,t.editWindowOpen=e,t.editKey=e}))}},x=S,_=(r("c500"),Object(d["a"])(x,h,f,!1,null,"6441f12e",null)),k=_.exports,O={components:{appHeader:p,appLibrary:k}},L=O,$=Object(d["a"])(L,o,i,!1,null,null,null),C=$.exports,B=r("2f62");a["a"].use(B["a"]);var T=new B["a"].Store({state:{library:[{title:"Three Body Problem",author:"Cixin Liu",pages:303,readStatus:"Yes",id:"three body problemcixin liu303"},{title:"Death's End",author:"Cixin Liu",pages:433,readStatus:"Yes",id:"death's endcixin liu433"},{title:"The Ultimate Spanish Review and Practice",author:"Ronni L. Gordon",pages:568,readStatus:"Reading",id:"the ultimate spanish review and practiceronni l. gordon568"}]},mutations:{addBook:function(t,e){t.library.push(e)},storeLibrary:function(){var t=JSON.stringify(this.state.library);localStorage.setItem("storedLibrary",t)},loadLibrary:function(){JSON.parse(localStorage.getItem("storedLibrary"))&&(this.state.library=JSON.parse(localStorage.getItem("storedLibrary")))}}}),N=r("ecee"),P=r("c074"),W=r("ad3d"),j=new a["a"];N["c"].add(P["a"]),N["c"].add(P["d"]),N["c"].add(P["b"]),N["c"].add(P["c"]),a["a"].component("font-awesome-icon",W["a"]),new a["a"]({el:"#app",store:T,beforeCreate:function(){this.$store.commit("loadLibrary")},render:function(t){return t(C)}})},"67e5":function(t,e,r){},c500:function(t,e,r){"use strict";var a=r("3261"),o=r.n(a);o.a},f537:function(t,e,r){"use strict";var a=r("67e5"),o=r.n(a);o.a},f860:function(t,e,r){"use strict";var a=r("ffe5"),o=r.n(a);o.a},ffe5:function(t,e,r){}});
//# sourceMappingURL=app.5aafc51e.js.map