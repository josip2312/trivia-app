(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chooseCategory"],{"0704":function(e,t,r){},"0872":function(e,t,r){"use strict";r("2580")},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),i=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f2e":function(e,t,r){"use strict";r("fff8")},2580:function(e,t,r){},"485c":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["F"])("data-v-a49b2eb4");Object(n["u"])("data-v-a49b2eb4");var c={class:"container"},i=Object(n["h"])("h2",{class:"heading-2"},"Categories",-1),o={key:0,class:"loading"},u={key:1,class:"error"},s={key:2,class:"categories spacing"};Object(n["s"])();var f=a((function(e,t,r,a,f,d){var l=Object(n["y"])("CategoryCardFilter"),b=Object(n["y"])("CategoryCard");return Object(n["r"])(),Object(n["e"])("div",c,[i,Object(n["h"])(l,{filter:a.categoryFilter,"onUpdate:filter":t[1]||(t[1]=function(e){return a.categoryFilter=e}),categories:a.categories,onClearCategoryFilter:t[2]||(t[2]=function(e){return a.categoryFilter=null})},null,8,["filter","categories"]),Object(n["h"])("button",{onClick:t[3]||(t[3]=function(){return a.chooseRandomCategory.apply(a,arguments)}),class:"btn random"},"Random"),a.categoriesData.isLoading?(Object(n["r"])(),Object(n["e"])("div",o,"Loading...")):Object(n["f"])("",!0),null!==a.categoriesData.error?(Object(n["r"])(),Object(n["e"])("div",u,Object(n["B"])(a.categoriesData.error),1)):Object(n["f"])("",!0),a.categoriesData.isLoading||null!==a.categoriesData.error?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("section",s,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(a.filteredCategories,(function(e){return Object(n["r"])(),Object(n["e"])(b,{key:e.id,category:e},null,8,["category"])})),128))]))])})),d=(r("4de4"),r("b0c0"),r("d6a9")),l=Object(n["F"])("data-v-6a8fd1ae");Object(n["u"])("data-v-6a8fd1ae");var b={class:"category"},g={class:"name"},v={class:"choose-category"};Object(n["s"])();var O=l((function(e,t,r,a,c,i){var o=Object(n["y"])("NumberOfQuestionsModal");return Object(n["r"])(),Object(n["e"])("div",b,[Object(n["h"])("h3",g,Object(n["B"])(r.category.name),1),Object(n["h"])("div",v,[Object(n["h"])("button",{onClick:t[1]||(t[1]=function(e){return i.chooseEasy({id:r.category.id,difficulty:"easy"})}),class:"easy"}," Easy "),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(e){return i.chooseMedium({id:r.category.id,difficulty:"medium"})}),class:"medium"}," Medium "),Object(n["h"])("button",{onClick:t[3]||(t[3]=function(e){return i.chooseHard({id:r.category.id,difficulty:"hard"})}),class:"hard"}," Hard ")]),Object(n["h"])(o,{isModalVisible:c.isModalVisible,id:c.id,difficulty:c.difficulty,onClose:t[4]||(t[4]=function(e){return c.isModalVisible=!1})},null,8,["isModalVisible","id","difficulty"])])})),y=Object(n["F"])("data-v-618ce161");Object(n["u"])("data-v-618ce161");var p={key:0,class:"overlay"},j={class:"modal spacing"},h=Object(n["h"])("h3",{class:"modal-title heading-3"}," Choose the number of questions ",-1),m=Object(n["g"])(" 5 questions "),C=Object(n["g"])(" 10 questions "),I=Object(n["g"])(" 15 questions ");Object(n["s"])();var M=y((function(e,t,r,a,c,i){var o=Object(n["y"])("router-link"),u=Object(n["y"])("CloseModalButton");return Object(n["r"])(),Object(n["e"])(n["b"],{name:"fade",mode:"out-in"},{default:y((function(){return[r.isModalVisible?(Object(n["r"])(),Object(n["e"])("div",p,[Object(n["h"])("div",j,[h,Object(n["h"])(o,{to:{name:"Game",params:{id:r.id,difficulty:r.difficulty,questions:5}},class:"choice"},{default:y((function(){return[m]})),_:1},8,["to"]),Object(n["h"])(o,{to:{name:"Game",params:{id:r.id,difficulty:r.difficulty,questions:10}},class:"choice"},{default:y((function(){return[C]})),_:1},8,["to"]),Object(n["h"])(o,{to:{name:"Game",params:{id:r.id,difficulty:r.difficulty,questions:15}},class:"choice"},{default:y((function(){return[I]})),_:1},8,["to"]),Object(n["h"])(u,{onClick:t[1]||(t[1]=function(t){return e.$emit("close")})})])])):Object(n["f"])("",!0)]})),_:1})})),_=(r("a9e3"),r("a172")),N=r.n(_),k=Object(n["F"])("data-v-b8e0c060");Object(n["u"])("data-v-b8e0c060");var w={class:"close-modal"},E=Object(n["h"])("img",{src:N.a,alt:"Close"},null,-1);Object(n["s"])();var A=k((function(e,t,r,a,c,i){return Object(n["r"])(),Object(n["e"])("button",w,[E])})),F={};r("1f2e");F.render=A,F.__scopeId="data-v-b8e0c060";var S=F;function x(e){Object(n["p"])((function(){window.addEventListener("keyup",e)})),Object(n["q"])((function(){window.removeEventListener("keyup",e)}))}var V={name:"NumberOfQuestionsModal",components:{CloseModalButton:S},props:{isModalVisible:{type:Boolean,default:!1},id:{type:Number,required:!0},difficulty:{type:String,required:!0}},setup:function(e,t){var r=t.emit,n=function(e){27===e.keyCode&&r("close")};x(n)}};r("cfbc");V.render=M,V.__scopeId="data-v-618ce161";var L=V,q={name:"Category",components:{NumberOfQuestionsModal:L},props:{category:{type:Object,required:!0}},data:function(){return{isModalVisible:!1,id:0,difficulty:"easy"}},methods:{chooseEasy:function(e){this.isModalVisible=!0;var t=e.id,r=e.difficulty;this.id=t,this.difficulty=r},chooseMedium:function(e){this.isModalVisible=!0;var t=e.id,r=e.difficulty;this.id=t,this.difficulty=r},chooseHard:function(e){this.isModalVisible=!0;var t=e.id,r=e.difficulty;this.id=t,this.difficulty=r}}};r("0872");q.render=O,q.__scopeId="data-v-6a8fd1ae";var R=q,B=Object(n["F"])("data-v-c21a6ede");Object(n["u"])("data-v-c21a6ede");var D={class:"filter"};Object(n["s"])();var G=B((function(e,t,r,a,c,i){return Object(n["r"])(),Object(n["e"])("div",D,[Object(n["h"])("select",{name:"select-category",class:"select-category",id:"select-category",onChange:t[1]||(t[1]=function(t){return e.$emit("update:filter",t.target.value)})},[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.categories,(function(e){return Object(n["r"])(),Object(n["e"])("option",{key:e.id,class:"select-option"},Object(n["B"])(e.name),1)})),128))],32),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.$emit("clear-category-filter")}),class:"btn clear"}," Clear ")])})),T={name:"CategoryFilter",props:{categories:{type:Array,default:function(){return[]}},filter:{type:String||null}},setup:function(){return{}}};r("9b57");T.render=G,T.__scopeId="data-v-c21a6ede";var J=T,$=r("6c02"),H={name:"Categories",components:{CategoryCard:R,CategoryCardFilter:J},setup:function(){var e,t,r=Object(n["w"])("".concat("https://opentdb.com/","/api_category.php")),a={isLoading:!1,error:null},c=Object(n["w"])(null),i=Object($["d"])(),o=JSON.parse(localStorage.getItem("categories"));o?(e=o,t=Object(n["c"])((function(){return c.value?o.filter((function(e){return e.name===c.value})):o}))):(a=Object(d["a"])(r),e=Object(n["c"])((function(){return localStorage.setItem("categories",JSON.stringify(a.data.trivia_categories)),a.data.trivia_categories})),t=Object(n["c"])((function(){return c.value?a.data.trivia_categories.filter((function(e){return e.name===c.value})):a.data.trivia_categories})));var u=function(e){return Math.floor(Math.random()*Math.floor(e))},s=function(){var e=["easy","medium","hard"],t=Math.floor(24*Math.random()+9),r=[5,10,15],n=e[u(2)],a=r[u(2)];i.push({name:"Game",params:{id:t,difficulty:n,questions:a}})};return{categoriesData:a,categories:e,filteredCategories:t,categoryFilter:c,chooseRandomCategory:s}}};r("5e24");H.render=f,H.__scopeId="data-v-a49b2eb4";t["default"]=H},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,c=r("1dde"),i=r("ae40"),o=c("filter"),u=i("filter");n({target:"Array",proto:!0,forced:!o||!u},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),c="["+a+"]",i=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),u=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5e24":function(e,t,r){"use strict";r("f7d4")},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),c=r("b622"),i=c("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"68ae":function(e,t,r){},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var c,i;return a&&"function"==typeof(c=t.constructor)&&c!==r&&n(i=c.prototype)&&i!==r.prototype&&a(e,i),e}},"9b57":function(e,t,r){"use strict";r("0704")},a172:function(e,t,r){e.exports=r.p+"img/xWhite.858234a1.svg"},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),c=r("94ca"),i=r("6eeb"),o=r("5135"),u=r("c6b6"),s=r("7156"),f=r("c04e"),d=r("d039"),l=r("7c73"),b=r("241c").f,g=r("06cf").f,v=r("9bf2").f,O=r("58a8").trim,y="Number",p=a[y],j=p.prototype,h=u(l(j))==y,m=function(e){var t,r,n,a,c,i,o,u,s=f(e,!1);if("string"==typeof s&&s.length>2)if(s=O(s),t=s.charCodeAt(0),43===t||45===t){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+s}for(c=s.slice(2),i=c.length,o=0;o<i;o++)if(u=c.charCodeAt(o),u<48||u>a)return NaN;return parseInt(c,n)}return+s};if(c(y,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var C,I=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof I&&(h?d((function(){j.valueOf.call(r)})):u(r)!=y)?s(new p(m(t)),r,I):m(t)},M=n?b(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;M.length>_;_++)o(p,C=M[_])&&!o(I,C)&&v(I,C,g(p,C));I.prototype=j,j.constructor=I,i(a,y,I)}},ae40:function(e,t,r){var n=r("83ab"),a=r("d039"),c=r("5135"),i=Object.defineProperty,o={},u=function(e){throw e};e.exports=function(e,t){if(c(o,e))return o[e];t||(t={});var r=[][e],s=!!c(t,"ACCESSORS")&&t.ACCESSORS,f=c(t,0)?t[0]:u,d=c(t,1)?t[1]:void 0;return o[e]=!!r&&!a((function(){if(s&&!n)return!0;var e={length:-1};s?i(e,1,{enumerable:!0,get:u}):e[1]=1,r.call(e,f,d)}))}},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,c=Function.prototype,i=c.toString,o=/^\s*function ([^ (]*)/,u="name";n&&!(u in c)&&a(c,u,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(e){return""}}})},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),c=r("7b0b"),i=r("50c4"),o=r("65f0"),u=[].push,s=function(e){var t=1==e,r=2==e,s=3==e,f=4==e,d=6==e,l=5==e||d;return function(b,g,v,O){for(var y,p,j=c(b),h=a(j),m=n(g,v,3),C=i(h.length),I=0,M=O||o,_=t?M(b,C):r?M(b,0):void 0;C>I;I++)if((l||I in h)&&(y=h[I],p=m(y,I,j),e))if(t)_[I]=p;else if(p)switch(e){case 3:return!0;case 5:return y;case 6:return I;case 2:u.call(_,y)}else if(f)return!1;return d?-1:s||f?f:_}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},cfbc:function(e,t,r){"use strict";r("68ae")},d6a9:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("96cf");var n=r("1da1"),a=r("bc3a"),c=r.n(a),i=r("7a23");function o(e){var t=Object(i["v"])({data:[],error:null,isLoading:!1}),r=function(){var r=Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.error=null,t.isLoading=!0,r.next=5,c.a.get(e.value);case 5:n=r.sent,a=n.data,t.data=a,t.isLoading=!1,r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isLoading=!1,t.error="Something went wrong",console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(){return r.apply(this,arguments)}}();return Object(i["D"])(e,r,{immediate:!0}),t}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f7d4:function(e,t,r){},fff8:function(e,t,r){}}]);
//# sourceMappingURL=chooseCategory.6a730801.js.map