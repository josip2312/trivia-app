(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Game"],{"0374":function(e,t,r){},"057f":function(e,t,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(t){return c.slice()}};e.exports.f=function(e){return c&&"[object Window]"==o.call(e)?a(e):i(n(e))}},"1dde":function(e,t,r){var n=r("d039"),i=r("b622"),o=r("2d00"),c=i("species");e.exports=function(e){return o>=51||!n((function(){var t=[],r=t.constructor={};return r[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),c=r("ad6d"),a="toString",s=RegExp.prototype,u=s[a],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=a;(f||l)&&n(RegExp.prototype,a,(function(){var e=i(this),t=String(e.source),r=e.flags,n=String(void 0===r&&e instanceof RegExp&&!("flags"in s)?c.call(e):r);return"/"+t+"/"+n}),{unsafe:!0})},2722:function(e,t,r){"use strict";r("a0c9")},"3ca3":function(e,t,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),c="String Iterator",a=i.set,s=i.getterFor(c);o(String,"String",(function(e){a(this,{type:c,string:String(e),index:0})}),(function(){var e,t=s(this),r=t.string,i=t.index;return i>=r.length?{value:void 0,done:!0}:(e=n(r,i),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),c=r("e95a"),a=r("50c4"),s=r("8418"),u=r("35a1");e.exports=function(e){var t,r,f,l,d,b,v=i(e),p="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,y=void 0!==h,O=u(v),m=0;if(y&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==O||p==Array&&c(O))for(t=a(v.length),r=new p(t);t>m;m++)b=y?h(v[m],m):v[m],s(r,m,b);else for(l=O.call(v),d=l.next,r=new p;!(f=d.call(l)).done;m++)b=y?o(l,h,[f.value,m],!0):f.value,s(r,m,b);return r.length=m,r}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",c=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(a,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},6547:function(e,t,r){var n=r("a691"),i=r("1d80"),o=function(e){return function(t,r){var o,c,a=String(i(t)),s=n(r),u=a.length;return s<0||s>=u?e?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===u||(c=a.charCodeAt(s+1))<56320||c>57343?e?a.charAt(s):o:e?a.slice(s,s+2):c-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(e,t,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");e.exports=function(e,t){var r;return i(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},7156:function(e,t,r){var n=r("861d"),i=r("d2bb");e.exports=function(e,t,r){var o,c;return i&&"function"==typeof(o=t.constructor)&&o!==r&&n(c=o.prototype)&&c!==r.prototype&&i(e,c),e}},7387:function(e,t,r){e.exports=r.p+"img/x.8f45b3c9.svg"},"746f":function(e,t,r){var n=r("428f"),i=r("5135"),o=r("e538"),c=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});i(t,e)||c(t,e,{value:o.f(e)})}},"7bae":function(e,t,r){e.exports=r.p+"img/check.adf204a0.svg"},"7d36":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),i=Object(n["F"])("data-v-2d3be5ec");Object(n["u"])("data-v-2d3be5ec");var o={class:"container"},c={key:0,class:"heading-2"},a={key:1,class:"loading"},s={key:2,class:"error"},u={key:3,class:"game"},f={class:"question-number"},l={class:"answers"};Object(n["s"])();var d=i((function(e,t,r,d,b,v){var p=Object(n["y"])("Answer"),g=Object(n["y"])("QuestionAnsweredModal"),h=Object(n["y"])("GameEndModal");return Object(n["r"])(),Object(n["e"])("div",o,[d.isLoading||null!==d.error?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("h2",c,Object(n["B"])(d.questionCategory),1)),d.isLoading?(Object(n["r"])(),Object(n["e"])("div",a,"Loading...")):Object(n["f"])("",!0),null!==d.error?(Object(n["r"])(),Object(n["e"])("div",s,Object(n["B"])(d.error),1)):Object(n["f"])("",!0),d.isLoading||null!==d.error?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("section",u,[Object(n["h"])("div",f,Object(n["B"])(d.questionNumber+1)+" / "+Object(n["B"])(d.questions),1),Object(n["h"])("div",{innerHTML:d.singleQuestionText,class:"question"},null,8,["innerHTML"]),Object(n["h"])(n["b"],{name:"fade",mode:"out-in"},{default:i((function(){return[Object(n["h"])("div",l,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(d.answers,(function(e){return Object(n["r"])(),Object(n["e"])(p,{key:e,answer:e,onClick:function(t){return d.submitAnswer(e)}},null,8,["answer","onClick"])})),128))])]})),_:1})])),Object(n["h"])(g,{isModalVisible:d.isModalVisible,isAnswerCorrect:d.isAnswerCorrect,correctAnswer:d.correctAnswer,onNextQuestion:d.nextQuestion,onClose:t[1]||(t[1]=function(e){return d.isModalVisible=!1})},null,8,["isModalVisible","isAnswerCorrect","correctAnswer","onNextQuestion"]),Object(n["h"])(h,{isGameEndModalVisible:d.isGameEndModalVisible,score:d.score,questions:d.questions,onClose:t[2]||(t[2]=function(e){return d.isGameEndModalVisible=!1})},null,8,["isGameEndModalVisible","score","questions"])])}));r("99af");function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e){if(Array.isArray(e))return b(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function p(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("b0c0"),r("25f0");function g(e,t){if(e){if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e){return v(e)||p(e)||g(e)||h()}var O=r("d6a9"),m=r("6c02"),j=r("7bae"),w=r.n(j),S=r("7387"),A=r.n(S),x=Object(n["F"])("data-v-790f51b0");Object(n["u"])("data-v-790f51b0");var L={key:0,class:"overlay"},M={key:0,class:"modal spacing"},C=Object(n["h"])("div",{class:"modal-icon"},[Object(n["h"])("img",{src:w.a,alt:""})],-1),E=Object(n["h"])("h3",{class:"modal-title heading-3"},"That's right!",-1),N={key:1,class:"modal spacing"},T=Object(n["h"])("div",{class:"modal-icon"},[Object(n["h"])("img",{src:A.a,alt:""})],-1),I=Object(n["h"])("h3",{class:"modal-title heading-3"},"Wrong, sorry",-1),k={class:"modal-paragraph"},V=Object(n["g"])(" The correct answer is ");Object(n["s"])();var q=x((function(e,t,r,i,o,c){return Object(n["r"])(),Object(n["e"])(n["b"],{name:"fade",mode:"out-in"},{default:x((function(){return[r.isModalVisible?(Object(n["r"])(),Object(n["e"])("div",L,[r.isAnswerCorrect?(Object(n["r"])(),Object(n["e"])("div",M,[C,E,Object(n["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("next-question")}),class:"btn"}," Next question ")])):(Object(n["r"])(),Object(n["e"])("div",N,[T,I,Object(n["h"])("p",k,[V,Object(n["h"])("span",null,Object(n["B"])(r.correctAnswer),1)]),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.$emit("next-question")}),class:"btn"}," Next question ")]))])):Object(n["f"])("",!0)]})),_:1})})),_={name:"QuestionAnsweredModal",props:{isModalVisible:{type:Boolean,default:!1},isAnswerCorrect:{type:Boolean},correctAnswer:{type:String}}};r("9b53");_.render=q,_.__scopeId="data-v-790f51b0";var G=_,F=Object(n["F"])("data-v-2552ff65");Object(n["u"])("data-v-2552ff65");var P={key:0,class:"overlay"},R={class:"modal spacing"},B=Object(n["h"])("h3",{class:"modal-title heading-3"},"Finished",-1),Q={class:"modal-paragraph"},D=Object(n["g"])(" Back to categories ");Object(n["s"])();var H=F((function(e,t,r,i,o,c){var a=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])(n["b"],{name:"fade",mode:"out-in"},{default:F((function(){return[r.isGameEndModalVisible?(Object(n["r"])(),Object(n["e"])("div",P,[Object(n["h"])("div",R,[B,Object(n["h"])("p",Q," Your score is "+Object(n["B"])(r.score)+" / "+Object(n["B"])(r.questions),1),Object(n["h"])(a,{to:{name:"ChooseCategory"},class:"btn"},{default:F((function(){return[D]})),_:1})])])):Object(n["f"])("",!0)]})),_:1})})),$=(r("a9e3"),{name:"GameEndModal",props:{isGameEndModalVisible:{type:Boolean,default:!1},score:{type:Number,required:!0},questions:{type:String||Number,required:!0}}});r("dd98");$.render=H,$.__scopeId="data-v-2552ff65";var J=$,U=Object(n["F"])("data-v-7d266438"),Y=U((function(e,t,r,i,o,c){return Object(n["r"])(),Object(n["e"])("div",{innerHTML:r.answer,class:"answer"},null,8,["innerHTML"])})),W={name:"Answer",props:{answer:{type:String,required:!0}}};r("2722");W.render=Y,W.__scopeId="data-v-7d266438";var X=W,z={name:"Game",components:{QuestionAnsweredModal:G,GameEndModal:J,Answer:X},setup:function(){var e=Object(m["c"])(),t=e.params,r=t.id,i=t.difficulty,o=t.questions,c=localStorage.getItem("sessionToken"),a=Object(n["w"])("".concat("https://opentdb.com/api.php","?amount=").concat(o,"&category=").concat(r,"&difficulty=").concat(i,"&token=").concat(c)),s=Object(n["w"])(0),u=Object(n["w"])(0),f=Object(n["w"])(!1),l=Object(n["w"])(!1),d=Object(n["w"])(!1),b=Object(O["a"])(a),v=Object(n["c"])((function(){return b.isLoading})),p=Object(n["c"])((function(){return b.error})),g=Object(n["c"])((function(){return b.data.results})),h=Object(n["c"])((function(){if(g.value)return g.value[0].category})),j=Object(n["c"])((function(){if(A(s.value))return A(s.value).question})),w=Object(n["c"])((function(){if(A(s.value))return[S.value].concat(y(A(s.value).incorrect_answers))})),S=Object(n["c"])((function(){if(A(s.value))return A(s.value).correct_answer})),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(g.value)return g.value[e]},x=function(e){e===S.value?(f.value=!0,d.value=!0,u.value++):(f.value=!0,d.value=!1)},L=function(){s.value<o-1?(s.value++,f.value=!1):(f.value=!1,l.value=!0)};return{questionNumber:s,score:u,fetchedCategoryData:b,isModalVisible:f,isGameEndModalVisible:l,isAnswerCorrect:d,questions:o,error:p,isLoading:v,questionCategory:h,allQuestions:g,singleQuestionText:j,answers:w,correctAnswer:S,singleQuestionData:A,submitAnswer:x,nextQuestion:L}}};r("8254");z.render=d,z.__scopeId="data-v-2d3be5ec";t["default"]=z},8254:function(e,t,r){"use strict";r("c654")},8418:function(e,t,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var c=n(t);c in e?i.f(e,c,o(0,r)):e[c]=r}},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),c=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),b=r("2d00"),v=d("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",h=b>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),y=l("concat"),O=function(e){if(!c(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},m=!h||!y;n({target:"Array",proto:!0,forced:m},{concat:function(e){var t,r,n,i,o,c=a(this),l=f(c,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?c:arguments[t],O(o)){if(i=s(o.length),d+i>p)throw TypeError(g);for(r=0;r<i;r++,d++)r in o&&u(l,d,o[r])}else{if(d>=p)throw TypeError(g);u(l,d++,o)}return l.length=d,l}})},"9b53":function(e,t,r){"use strict";r("0374")},"9bdd":function(e,t,r){var n=r("825a"),i=r("2a62");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(c){throw i(e),c}}},a0c9:function(e,t,r){},a4d3:function(e,t,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),a=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),v=r("825a"),p=r("7b0b"),g=r("fc6a"),h=r("c04e"),y=r("5c6c"),O=r("7c73"),m=r("df75"),j=r("241c"),w=r("057f"),S=r("7418"),A=r("06cf"),x=r("9bf2"),L=r("d1e7"),M=r("9112"),C=r("6eeb"),E=r("5692"),N=r("f772"),T=r("d012"),I=r("90e3"),k=r("b622"),V=r("e538"),q=r("746f"),_=r("d44e"),G=r("69f3"),F=r("b727").forEach,P=N("hidden"),R="Symbol",B="prototype",Q=k("toPrimitive"),D=G.set,H=G.getterFor(R),$=Object[B],J=i.Symbol,U=o("JSON","stringify"),Y=A.f,W=x.f,X=w.f,z=L.f,K=E("symbols"),Z=E("op-symbols"),ee=E("string-to-symbol-registry"),te=E("symbol-to-string-registry"),re=E("wks"),ne=i.QObject,ie=!ne||!ne[B]||!ne[B].findChild,oe=a&&f((function(){return 7!=O(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=Y($,t);n&&delete $[t],W(e,t,r),n&&e!==$&&W($,t,n)}:W,ce=function(e,t){var r=K[e]=O(J[B]);return D(r,{type:R,tag:e,description:t}),a||(r.description=t),r},ae=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof J},se=function(e,t,r){e===$&&se(Z,t,r),v(e);var n=h(t,!0);return v(r),l(K,n)?(r.enumerable?(l(e,P)&&e[P][n]&&(e[P][n]=!1),r=O(r,{enumerable:y(0,!1)})):(l(e,P)||W(e,P,y(1,{})),e[P][n]=!0),oe(e,n,r)):W(e,n,r)},ue=function(e,t){v(e);var r=g(t),n=m(r).concat(ve(r));return F(n,(function(t){a&&!le.call(r,t)||se(e,t,r[t])})),e},fe=function(e,t){return void 0===t?O(e):ue(O(e),t)},le=function(e){var t=h(e,!0),r=z.call(this,t);return!(this===$&&l(K,t)&&!l(Z,t))&&(!(r||!l(this,t)||!l(K,t)||l(this,P)&&this[P][t])||r)},de=function(e,t){var r=g(e),n=h(t,!0);if(r!==$||!l(K,n)||l(Z,n)){var i=Y(r,n);return!i||!l(K,n)||l(r,P)&&r[P][n]||(i.enumerable=!0),i}},be=function(e){var t=X(g(e)),r=[];return F(t,(function(e){l(K,e)||l(T,e)||r.push(e)})),r},ve=function(e){var t=e===$,r=X(t?Z:g(e)),n=[];return F(r,(function(e){!l(K,e)||t&&!l($,e)||n.push(K[e])})),n};if(s||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=I(e),r=function(e){this===$&&r.call(Z,e),l(this,P)&&l(this[P],t)&&(this[P][t]=!1),oe(this,t,y(1,e))};return a&&ie&&oe($,t,{configurable:!0,set:r}),ce(t,e)},C(J[B],"toString",(function(){return H(this).tag})),C(J,"withoutSetter",(function(e){return ce(I(e),e)})),L.f=le,x.f=se,A.f=de,j.f=w.f=be,S.f=ve,V.f=function(e){return ce(k(e),e)},a&&(W(J[B],"description",{configurable:!0,get:function(){return H(this).description}}),c||C($,"propertyIsEnumerable",le,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:J}),F(m(re),(function(e){q(e)})),n({target:R,stat:!0,forced:!s},{for:function(e){var t=String(e);if(l(ee,t))return ee[t];var r=J(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ae(e))throw TypeError(e+" is not a symbol");if(l(te,e))return te[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:fe,defineProperty:se,defineProperties:ue,getOwnPropertyDescriptor:de}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:be,getOwnPropertySymbols:ve}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(p(e))}}),U){var pe=!s||f((function(){var e=J();return"[null]"!=U([e])||"{}"!=U({a:e})||"{}"!=U(Object(e))}));n({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,r){var n,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=t,(b(t)||void 0!==e)&&!ae(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ae(t))return t}),i[1]=t,U.apply(null,i)}})}J[B][Q]||M(J[B],Q,J[B].valueOf),_(J,R),T[P]=!0},a630:function(e,t,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),c=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:c},{from:i})},a9e3:function(e,t,r){"use strict";var n=r("83ab"),i=r("da84"),o=r("94ca"),c=r("6eeb"),a=r("5135"),s=r("c6b6"),u=r("7156"),f=r("c04e"),l=r("d039"),d=r("7c73"),b=r("241c").f,v=r("06cf").f,p=r("9bf2").f,g=r("58a8").trim,h="Number",y=i[h],O=y.prototype,m=s(d(O))==h,j=function(e){var t,r,n,i,o,c,a,s,u=f(e,!1);if("string"==typeof u&&u.length>2)if(u=g(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),c=o.length,a=0;a<c;a++)if(s=o.charCodeAt(a),s<48||s>i)return NaN;return parseInt(o,n)}return+u};if(o(h,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,S=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof S&&(m?l((function(){O.valueOf.call(r)})):s(r)!=h)?u(new y(j(t)),r,S):j(t)},A=n?b(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;A.length>x;x++)a(y,w=A[x])&&!a(S,w)&&p(S,w,v(y,w));S.prototype=O,O.constructor=S,c(i,h,S)}},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,r){var n=r("83ab"),i=r("d039"),o=r("5135"),c=Object.defineProperty,a={},s=function(e){throw e};e.exports=function(e,t){if(o(a,e))return a[e];t||(t={});var r=[][e],u=!!o(t,"ACCESSORS")&&t.ACCESSORS,f=o(t,0)?t[0]:s,l=o(t,1)?t[1]:void 0;return a[e]=!!r&&!i((function(){if(u&&!n)return!0;var e={length:-1};u?c(e,1,{enumerable:!0,get:s}):e[1]=1,r.call(e,f,l)}))}},b0c0:function(e,t,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,c=o.toString,a=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(e){return""}}})},b727:function(e,t,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),a=r("65f0"),s=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,f=4==e,l=6==e,d=5==e||l;return function(b,v,p,g){for(var h,y,O=o(b),m=i(O),j=n(v,p,3),w=c(m.length),S=0,A=g||a,x=t?A(b,w):r?A(b,0):void 0;w>S;S++)if((d||S in m)&&(h=m[S],y=j(h,S,O),e))if(t)x[S]=y;else if(y)switch(e){case 3:return!0;case 5:return h;case 6:return S;case 2:s.call(x,h)}else if(f)return!1;return l?-1:u||f?f:x}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c654:function(e,t,r){},d28b:function(e,t,r){var n=r("746f");n("iterator")},d6a9:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("96cf");var n=r("1da1"),i=r("bc3a"),o=r.n(i),c=r("7a23");function a(e){var t=Object(c["v"])({data:[],error:null,isLoading:!1}),r=function(){var r=Object(n["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.error=null,t.isLoading=!0,r.next=5,o.a.get(e.value);case 5:n=r.sent,i=n.data,t.data=i,t.isLoading=!1,r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isLoading=!1,t.error="Something went wrong",console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(){return r.apply(this,arguments)}}();return Object(c["D"])(e,r,{immediate:!0}),t}},dd98:function(e,t,r){"use strict";r("e0da")},ddb0:function(e,t,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),c=r("9112"),a=r("b622"),s=a("iterator"),u=a("toStringTag"),f=o.values;for(var l in i){var d=n[l],b=d&&d.prototype;if(b){if(b[s]!==f)try{c(b,s,f)}catch(p){b[s]=f}if(b[u]||c(b,u,l),i[l])for(var v in o)if(b[v]!==o[v])try{c(b,v,o[v])}catch(p){b[v]=o[v]}}}},e01a:function(e,t,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),c=r("5135"),a=r("861d"),s=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new f(e):void 0===e?f():f(e);return""===e&&(l[t]=!0),t};u(d,f);var b=d.prototype=f.prototype;b.constructor=d;var v=b.toString,p="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var e=a(this)?this.valueOf():this,t=v.call(e);if(c(l,e))return"";var r=p?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e0da:function(e,t,r){},e538:function(e,t,r){var n=r("b622");t.f=n},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fb6a:function(e,t,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),c=r("23cb"),a=r("50c4"),s=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),b=l("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),p=f("species"),g=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!b||!v},{slice:function(e,t){var r,n,f,l=s(this),d=a(l.length),b=c(e,d),v=c(void 0===t?d:t,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(l,b,v);for(n=new(void 0===r?Array:r)(h(v-b,0)),f=0;b<v;b++,f++)b in l&&u(n,f,l[b]);return n.length=f,n}})},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=Game.70988e90.js.map