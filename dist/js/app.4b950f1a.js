(function(e){function t(t){for(var c,r,n=t[0],i=t[1],l=t[2],d=0,h=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),C()}function C(){for(var e,t=0;t<o.length;t++){for(var C=o[t],c=!0,r=1;r<C.length;r++){var n=C[r];0!==a[n]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=C[0]))}return e}var c={},r={app:0},a={app:0},o=[];function n(e){return i.p+"js/"+({Game:"Game",chooseCategory:"chooseCategory"}[e]||e)+"."+{Game:"70988e90",chooseCategory:"6a730801"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var C=c[t]={i:t,l:!1,exports:{}};return e[t].call(C.exports,C,C.exports,i),C.l=!0,C.exports}i.e=function(e){var t=[],C={Game:1,chooseCategory:1};r[e]?t.push(r[e]):0!==r[e]&&C[e]&&t.push(r[e]=new Promise((function(t,C){for(var c="css/"+({Game:"Game",chooseCategory:"chooseCategory"}[e]||e)+"."+{Game:"de8f29f3",chooseCategory:"39fc5814"}[e]+".css",a=i.p+c,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=o[n],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===a))return t()}var h=document.getElementsByTagName("style");for(n=0;n<h.length;n++){l=h[n],d=l.getAttribute("data-href");if(d===c||d===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var c=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],s.parentNode.removeChild(s),C(o)},s.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,C){c=a[e]=[t,C]}));t.push(c[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=n(e);var h=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var C=a[e];if(0!==C){if(C){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,C[1](h)}a[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,C){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:C})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var C=Object.create(null);if(i.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(C,c,function(t){return e[t]}.bind(null,c));return C},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var s=d;o.push([0,"chunk-vendors"]),C()})({0:function(e,t,C){e.exports=C("56d7")},"275f":function(e,t,C){"use strict";C("bec1")},"3b0a":function(e,t,C){"use strict";C("9847")},"56d7":function(e,t,C){"use strict";C.r(t);C("e260"),C("e6cf"),C("cca6"),C("a79d");var c=C("7a23");function r(e,t,C,r,a,o){var n=Object(c["y"])("TheHeader"),i=Object(c["y"])("router-view"),l=Object(c["y"])("TheFooter");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(n),Object(c["h"])(i,null,{default:Object(c["E"])((function(e){var t=e.Component;return[Object(c["h"])(c["b"],{name:"fade",mode:"out-in"},{default:Object(c["E"])((function(){return[(Object(c["r"])(),Object(c["e"])(Object(c["z"])(t)))]})),_:2},1024)]})),_:1}),Object(c["h"])(l)],64)}C("96cf");var a=C("1da1"),o=C("bc3a"),n=C.n(o),i=Object(c["F"])("data-v-c6838736");Object(c["u"])("data-v-c6838736");var l={class:"header"},d={class:"container"},h=Object(c["g"])(" Trivia App"),s={class:"nav"},f=Object(c["g"])(" Home "),u=Object(c["g"])(" Categories ");Object(c["s"])();var b=i((function(e,t,C,r,a,o){var n=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("header",l,[Object(c["h"])("div",d,[Object(c["h"])(n,{to:{name:"Index"},class:"logo"},{default:i((function(){return[h]})),_:1}),Object(c["h"])("nav",s,[Object(c["h"])(n,{to:{name:"Index"},class:"nav-link",href:"#"},{default:i((function(){return[f]})),_:1}),Object(c["h"])(n,{to:{name:"ChooseCategory"},class:"nav-link",href:"#"},{default:i((function(){return[u]})),_:1})])])])})),p={name:"TheHeader",setup:function(){return{}}};C("275f");p.render=b,p.__scopeId="data-v-c6838736";var O=p,j=Object(c["F"])("data-v-a0ff17b0");Object(c["u"])("data-v-a0ff17b0");var L={class:"footer spacing"},g=Object(c["h"])("div",{class:"footer-copyright"},"Trivia 2020 ©",-1),m=Object(c["h"])("div",{class:"footer-social"},"Developed by Josip Ivancic",-1);Object(c["s"])();var v=j((function(e,t,C,r,a,o){return Object(c["r"])(),Object(c["e"])("footer",L,[g,m])}));C("3b0a");const _={};_.render=v,_.__scopeId="data-v-a0ff17b0";var V=_,y={components:{TheHeader:O,TheFooter:V},created:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){var t,C,c,r,a,o,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("sessionToken"),C=localStorage.getItem("expiry"),c=(new Date).getTime(),t&&!(C<c)){e.next=13;break}return e.next=6,n.a.get("".concat("https://opentdb.com/","/api_token.php?command=request"));case 6:r=e.sent,a=r.data,o=a.token,localStorage.setItem("sessionToken",o),i=(new Date).getTime(),l=i+216e5,localStorage.setItem("expiry",l);case 13:case"end":return e.stop()}}),e)})))()}};C("9cdc");y.render=r;var M=y,Z=(C("d3b7"),C("6c02")),w=Object(c["F"])("data-v-7b88a9ec");Object(c["u"])("data-v-7b88a9ec");var A={class:"home"},F={class:"container"},k={class:"showcase-content spacing"},H=Object(c["h"])("h1",{class:"heading-1"},"Welcome to the trivia app",-1),x=Object(c["h"])("p",{class:"showcase-paragraph"}," Pick from a number of different categories, learn and have fun with interesting questions! ",-1),T=Object(c["g"])(" Play now "),D=Object(c["h"])("div",{class:"showcase-image"},[Object(c["h"])("svg",{width:"845",height:"596",viewBox:"0 0 845 596",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["h"])("g",{id:"undraw_Questions_re_1fy7 1","clip-path":"url(#clip0)"},[Object(c["h"])("g",{id:"apstract"},[Object(c["h"])("path",{id:"Vector",d:"M706.199 591.416C731.934 583.687 759.293 575.628 779.703 557.255C797.94 540.836 810.253 515.766 802.697 491.143C795.157 466.571 772.573 450.187 749.256 442.038C736.031 437.416 722.195 434.852 708.364 432.837C693.329 430.648 678.228 428.854 663.134 427.127C602.016 420.137 540.668 415.867 479.09 414.316C448.706 413.551 418.327 413.57 387.938 414.011C360.798 414.405 332.216 414.395 307.039 402.86C287.46 393.89 269.691 377.571 264.235 356.127C257.938 331.372 269.553 306.163 286.215 288.235C294.998 278.784 305.263 270.831 315.852 263.517C327.339 255.583 339.227 248.211 351.372 241.329C375.293 227.782 400.302 216.252 426.139 206.861C438.885 202.226 451.82 198.228 464.867 194.539C475.884 191.424 486.935 188.305 497.583 184.062C518.166 175.858 537.744 161.962 542.977 139.18C547.937 117.589 539.574 94.1495 524.912 78.1096C507.949 59.5526 482.373 51.4178 457.852 50.1016C430.324 48.624 403.43 55.5136 377.555 64.2575C349.959 73.5835 322.957 84.3067 294.777 91.8607C266.833 99.3441 238.348 104.639 209.581 107.697C195.499 109.197 180.991 110.89 166.825 109.742C154.953 108.78 143.141 105.288 134.391 96.8623C126.888 89.6376 122.419 79.7083 123.956 69.23C124.235 67.3268 127.126 68.1359 126.849 70.0275C124.978 82.7826 133.648 94.5361 144.333 100.557C156.681 107.515 171.707 107.525 185.454 106.729C215.263 104.928 244.871 100.648 273.969 93.9332C302.561 87.4026 330.133 78.0668 357.673 68.0941C383.829 58.6226 410.57 49.3783 438.513 47.3268C462.759 45.5467 488.265 49.079 509.387 61.7499C527.951 72.8859 541.602 91.4572 545.952 112.768C550.202 133.593 544.315 154.553 528.552 169.085C512.23 184.132 489.851 190.564 468.995 196.489C442.543 204.003 416.658 212.787 391.603 224.192C366.206 235.72 341.85 249.413 318.803 265.12C296.556 280.322 274.602 299.451 267.566 326.571C264.289 339.204 264.894 352.603 270.378 364.536C275.254 375.146 283.284 384.071 292.639 390.954C314.96 407.379 343.092 410.751 370.054 411.087C400.335 411.463 430.617 410.441 460.909 410.939C522.641 411.952 584.247 415.709 645.727 422.211C661.133 423.842 676.518 425.644 691.885 427.618C705.706 429.394 719.575 431.159 733.163 434.313C757.326 439.921 780.837 450.705 795.855 471.191C802.52 480.071 806.65 490.594 807.802 501.637C808.854 513.161 806.032 524.706 800.822 534.958C789.29 557.648 767.688 572.081 744.749 581.562C732.462 586.641 719.717 590.488 706.997 594.309C705.144 594.865 704.352 591.97 706.2 591.416L706.199 591.416Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_2",d:"M125.893 93.5C139.148 93.5 149.893 82.7548 149.893 69.5C149.893 56.2452 139.148 45.5 125.893 45.5C112.638 45.5 101.893 56.2452 101.893 69.5C101.893 82.7548 112.638 93.5 125.893 93.5Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_3",d:"M292.393 139C305.648 139 316.393 128.255 316.393 115C316.393 101.745 305.648 91 292.393 91C279.138 91 268.393 101.745 268.393 115C268.393 128.255 279.138 139 292.393 139Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_4",d:"M433.393 48C446.648 48 457.393 37.2548 457.393 24C457.393 10.7452 446.648 0 433.393 0C420.138 0 409.393 10.7452 409.393 24C409.393 37.2548 420.138 48 433.393 48Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_5",d:"M402.393 268C415.648 268 426.393 257.255 426.393 244C426.393 230.745 415.648 220 402.393 220C389.138 220 378.393 230.745 378.393 244C378.393 257.255 389.138 268 402.393 268Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_6",d:"M251.393 325C264.648 325 275.393 314.255 275.393 301C275.393 287.745 264.648 277 251.393 277C238.138 277 227.393 287.745 227.393 301C227.393 314.255 238.138 325 251.393 325Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_7",d:"M411.393 414C424.648 414 435.393 403.255 435.393 390C435.393 376.745 424.648 366 411.393 366C398.138 366 387.393 376.745 387.393 390C387.393 403.255 398.138 414 411.393 414Z",fill:"#F2F2F2"}),Object(c["h"])("path",{id:"Vector_8",d:"M784.393 453C797.648 453 808.393 442.255 808.393 429C808.393 415.745 797.648 405 784.393 405C771.138 405 760.393 415.745 760.393 429C760.393 442.255 771.138 453 784.393 453Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_9",d:"M843.485 595.262H1.19066C0.875467 595.261 0.573504 595.135 0.350952 594.912C0.1284 594.689 0.00341797 594.386 0.00341797 594.071C0.00341797 593.756 0.1284 593.454 0.350952 593.23C0.573504 593.007 0.875467 592.881 1.19066 592.88H843.485C843.8 592.88 844.103 593.006 844.327 593.229C844.55 593.452 844.675 593.755 844.675 594.071C844.675 594.387 844.55 594.69 844.327 594.913C844.103 595.136 843.8 595.262 843.485 595.262V595.262Z",fill:"#4A565D"})]),Object(c["h"])("g",{id:"question-mark"},[Object(c["h"])("path",{id:"Vector_10",d:"M431.393 594C456.798 594 477.393 573.405 477.393 548C477.393 522.595 456.798 502 431.393 502C405.988 502 385.393 522.595 385.393 548C385.393 573.405 405.988 594 431.393 594Z",fill:"#337085"}),Object(c["h"])("path",{id:"Vector_11",d:"M426.465 68.0035C354.573 68.5113 295.709 126.933 294.688 198.82C294.678 199.484 294.674 204.15 294.675 210.254C294.675 219.204 298.23 227.786 304.558 234.115C310.886 240.443 319.469 243.999 328.418 244H328.419C332.855 243.999 337.248 243.124 341.346 241.425C345.444 239.725 349.167 237.235 352.302 234.097C355.437 230.958 357.923 227.232 359.618 223.132C361.313 219.032 362.184 214.639 362.18 210.202C362.176 206.05 362.174 203.176 362.174 203C362.172 191.89 365.062 180.971 370.559 171.316C376.057 161.662 383.973 153.605 393.529 147.938C403.085 142.271 413.952 139.189 425.06 138.996C436.168 138.803 447.136 141.504 456.883 146.835C466.631 152.166 474.823 159.942 480.653 169.399C486.484 178.856 489.752 189.668 490.137 200.771C490.521 211.875 488.009 222.887 482.846 232.725C477.684 242.563 470.05 250.887 460.694 256.879L460.706 256.894C460.706 256.894 412.678 287.813 398.035 330.229L398.048 330.232C395.473 338.921 394.168 347.937 394.174 357C394.174 360.725 394.393 393.321 394.817 419.778C394.965 428.906 398.696 437.611 405.204 444.013C411.713 450.415 420.477 454.002 429.607 454H429.607C434.194 454 438.736 453.093 442.972 451.33C447.207 449.568 451.053 446.986 454.286 443.732C457.52 440.478 460.078 436.617 461.814 432.371C463.55 428.124 464.429 423.577 464.401 418.989C464.254 394.76 464.174 366.548 464.174 364.5C464.174 338.455 489.299 312.505 509.938 295.583C533.704 276.096 550.806 249.54 557.675 219.584C559.195 213.416 560.033 207.1 560.174 200.75C560.174 183.236 556.709 165.896 549.977 149.727C543.246 133.559 533.382 118.882 520.953 106.543C508.524 94.2039 493.777 84.446 477.56 77.8316C461.344 71.2171 443.978 67.8769 426.465 68.0035V68.0035Z",fill:"#337085"}),Object(c["h"])("path",{id:"Vector_12",d:"M337.947 228.038C328.997 228.037 320.414 224.481 314.086 218.153C307.758 211.825 304.203 203.242 304.202 194.292C304.202 188.188 304.206 183.522 304.216 182.858C304.5 161.951 309.765 141.414 319.574 122.949C303.458 145.012 294.596 171.538 294.216 198.858C294.206 199.522 294.202 204.188 294.202 210.292C294.203 219.242 297.758 227.825 304.086 234.153C310.414 240.481 318.997 244.037 327.947 244.038V244.038C335.301 244.035 342.453 241.632 348.316 237.194C354.18 232.756 358.435 226.525 360.434 219.448C354.256 224.988 346.246 228.048 337.947 228.038V228.038Z",fill:"#2C4852"}),Object(c["h"])("path",{id:"Vector_13",d:"M428.753 139.109C439.099 139.603 449.171 142.601 458.103 147.845C467.035 153.089 474.562 160.423 480.036 169.216C485.509 178.01 488.767 188 489.53 198.33C490.292 208.66 488.536 219.021 484.412 228.522C490.377 221.517 494.761 213.308 497.266 204.454C499.77 195.601 500.337 186.312 498.926 177.22C497.515 168.128 494.16 159.447 489.09 151.769C484.02 144.091 477.354 137.596 469.547 132.728C461.74 127.86 452.974 124.732 443.849 123.558C434.723 122.385 425.452 123.193 416.667 125.927C407.881 128.661 399.789 133.258 392.941 139.403C386.094 145.548 380.652 153.098 376.986 161.537C383.321 154.084 391.284 148.186 400.259 144.298C409.234 140.409 418.983 138.634 428.753 139.109V139.109Z",fill:"#2C4852"}),Object(c["h"])("path",{id:"Vector_43",d:"M421.258 582.78C414.723 579.934 408.94 575.608 404.363 570.144C399.787 564.68 396.543 558.227 394.888 551.294C393.232 544.362 393.211 537.139 394.825 530.197C396.439 523.255 399.644 516.782 404.188 511.291C398.92 515.137 394.53 520.06 391.31 525.733C388.09 531.406 386.113 537.698 385.511 544.193C384.908 550.688 385.695 557.237 387.817 563.405C389.939 569.573 393.349 575.219 397.82 579.969C402.291 584.718 407.721 588.462 413.75 590.953C419.779 593.443 426.268 594.623 432.788 594.413C439.307 594.204 445.708 592.611 451.564 589.738C457.421 586.866 462.599 582.782 466.757 577.755C460.273 582.494 452.66 585.452 444.677 586.333C436.694 587.215 428.62 585.99 421.258 582.78V582.78Z",fill:"#2C4852"}),Object(c["h"])("path",{id:"Vector_29",d:"M439.134 438.038C430.005 438.04 421.24 434.453 414.732 428.051C408.223 421.649 404.493 412.944 404.345 403.816C403.921 377.36 403.702 344.764 403.702 341.038C403.696 331.976 405.001 322.96 407.575 314.27L407.563 314.267C409.084 309.906 410.92 305.661 413.057 301.566C406.496 310.311 401.274 319.984 397.563 330.267L397.575 330.27C395.001 338.96 393.696 347.976 393.702 357.038C393.702 360.764 393.921 393.36 394.345 419.816C394.493 428.944 398.223 437.649 404.732 444.051C411.24 450.453 420.005 454.04 429.134 454.038V454.038C436.662 454.037 443.986 451.595 450.009 447.079C456.031 442.563 460.427 436.216 462.536 428.99C456.139 434.823 447.791 438.05 439.134 438.038V438.038Z",fill:"#2C4852"})]),Object(c["h"])("g",{id:"man-right"},[Object(c["h"])("path",{id:"Vector_14",d:"M628.449 272.996C645.017 272.996 658.449 259.565 658.449 242.996C658.449 226.428 645.017 212.996 628.449 212.996C611.88 212.996 598.449 226.428 598.449 242.996C598.449 259.565 611.88 272.996 628.449 272.996Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_15",d:"M573.012 582.129H560.753L554.92 534.841H573.015L573.012 582.129Z",fill:"#A0616A"}),Object(c["h"])("path",{id:"Vector_16",d:"M551.995 578.625H575.639V593.512H537.109C537.109 591.557 537.494 589.622 538.242 587.815C538.99 586.009 540.086 584.368 541.469 582.986C542.851 581.603 544.492 580.507 546.299 579.759C548.105 579.011 550.041 578.625 551.995 578.625Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_17",d:"M668.012 582.129H655.753L649.92 534.841H668.015L668.012 582.129Z",fill:"#A0616A"}),Object(c["h"])("path",{id:"Vector_18",d:"M646.995 578.625H670.639V593.512H632.109C632.109 591.557 632.494 589.622 633.242 587.815C633.99 586.009 635.086 584.368 636.469 582.986C637.851 581.603 639.492 580.507 641.299 579.759C643.105 579.011 645.041 578.625 646.995 578.625V578.625Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_19",d:"M623.89 273.171C637.454 273.171 648.451 262.175 648.451 248.61C648.451 235.045 637.454 224.049 623.89 224.049C610.325 224.049 599.329 235.045 599.329 248.61C599.329 262.175 610.325 273.171 623.89 273.171Z",fill:"#AC6D76"}),Object(c["h"])("path",{id:"Vector_20",d:"M638.529 352.406L649.519 327.156C652.188 321.233 652.953 314.627 651.708 308.25C650.463 301.874 647.27 296.041 642.569 291.556C641.603 290.601 640.578 289.71 639.499 288.886C634.076 284.644 627.394 282.332 620.509 282.316C615.88 282.334 611.309 283.35 607.109 285.296C606.749 285.456 606.399 285.626 606.039 285.796C605.349 286.126 604.669 286.486 604.009 286.856C599.704 289.328 596.04 292.777 593.313 296.925C590.586 301.073 588.872 305.804 588.309 310.736L583.459 351.376C582.239 354.566 538.719 469.766 553.939 557.716C554.101 558.655 554.559 559.518 555.246 560.178C555.933 560.839 556.814 561.262 557.759 561.386L573.189 563.486C574.316 563.64 575.459 563.362 576.388 562.707C577.318 562.052 577.965 561.069 578.199 559.956L604.089 436.546C604.25 435.779 604.664 435.089 605.264 434.585C605.864 434.081 606.616 433.792 607.399 433.766C608.182 433.739 608.951 433.976 609.584 434.439C610.217 434.901 610.676 435.562 610.889 436.316L647.469 566.096C647.729 567.039 648.292 567.87 649.071 568.463C649.849 569.055 650.801 569.376 651.779 569.376C652.071 569.374 652.362 569.347 652.649 569.296L671.499 565.666C672.594 565.461 673.574 564.854 674.246 563.964C674.918 563.075 675.232 561.966 675.129 560.856C672.359 529.966 657.639 375.236 638.529 352.406Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_21",d:"M528.439 269.05C528.269 270.51 528.421 271.99 528.884 273.385C529.347 274.78 530.111 276.057 531.121 277.125C532.131 278.193 533.363 279.027 534.73 279.567C536.097 280.108 537.566 280.342 539.034 280.253L552.763 313.246L563.148 297.851L548.518 268.881C548.206 266.426 547.004 264.171 545.14 262.542C543.276 260.914 540.879 260.026 538.404 260.047C535.929 260.068 533.548 260.996 531.711 262.655C529.875 264.314 528.71 266.59 528.439 269.05L528.439 269.05Z",fill:"#AC6D76"}),Object(c["h"])("path",{id:"Vector_22",d:"M622.528 385.626C623.988 385.452 625.391 384.96 626.64 384.184C627.889 383.408 628.953 382.368 629.756 381.137C630.559 379.906 631.083 378.514 631.29 377.058C631.497 375.603 631.383 374.12 630.954 372.713L659.84 351.675L642.449 345.163L617.686 366.139C615.371 367.015 613.457 368.71 612.308 370.902C611.159 373.094 610.854 375.632 611.451 378.034C612.048 380.436 613.505 382.535 615.547 383.935C617.588 385.334 620.072 385.936 622.528 385.626V385.626Z",fill:"#AC6D76"}),Object(c["h"])("path",{id:"Vector_23",d:"M575.44 335.241C574.332 335.24 573.228 335.131 572.141 334.916C569.514 334.416 567.05 333.277 564.966 331.6C562.883 329.923 561.244 327.759 560.194 325.3L540.959 301.846C540.553 301.351 540.257 300.773 540.091 300.154C539.926 299.534 539.895 298.887 540 298.254C540.105 297.622 540.344 297.019 540.701 296.486C541.059 295.953 541.525 295.503 542.071 295.166L555.755 286.695C556.26 286.382 556.822 286.173 557.409 286.078C557.996 285.984 558.595 286.006 559.173 286.145C559.751 286.284 560.296 286.535 560.776 286.885C561.256 287.236 561.662 287.677 561.97 288.185L575.527 310.519L601.488 291.333C603.555 290.249 605.943 289.945 608.216 290.476C610.488 291.008 612.494 292.339 613.866 294.227C615.238 296.115 615.886 298.434 615.689 300.76C615.493 303.085 614.467 305.263 612.798 306.894L586.886 330.531C583.841 333.549 579.727 335.242 575.44 335.241Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_24",d:"M645.59 370.514C645.554 370.514 645.519 370.514 645.484 370.513C644.853 370.497 644.232 370.349 643.662 370.079C643.091 369.808 642.584 369.421 642.173 368.942L630.007 354.749C629.592 354.265 629.285 353.7 629.106 353.089C628.926 352.478 628.879 351.836 628.966 351.205C629.053 350.575 629.272 349.97 629.611 349.43C629.949 348.891 630.398 348.429 630.927 348.076L653.709 332.888L633.07 308.076C631.87 306.075 631.429 303.708 631.83 301.408C632.23 299.109 633.444 297.03 635.25 295.552C637.056 294.074 639.334 293.295 641.667 293.358C644 293.421 646.233 294.321 647.958 295.893L673.041 320.406C675.015 322.21 676.522 324.465 677.433 326.979C678.343 329.493 678.63 332.191 678.269 334.84C677.907 337.49 676.908 340.012 675.358 342.19C673.807 344.368 671.751 346.138 669.366 347.346L648.865 369.1C648.444 369.546 647.936 369.902 647.373 370.145C646.81 370.388 646.203 370.513 645.59 370.514Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_25",d:"M617.645 318.214C617.45 318.214 617.255 318.202 617.061 318.177C616.214 318.074 615.414 317.73 614.756 317.186C614.098 316.643 613.61 315.921 613.35 315.108L604.208 287.079C603.979 286.371 604.014 285.603 604.307 284.918C604.6 284.234 605.131 283.678 605.802 283.355L606.099 283.214C606.368 283.086 606.634 282.96 606.906 282.839C611.169 280.862 615.81 279.831 620.509 279.816C626.61 279.827 632.574 281.619 637.67 284.973C638.354 285.427 638.831 286.132 639 286.935C639.168 287.739 639.015 288.576 638.572 289.267L621.422 316.135C621.02 316.773 620.462 317.298 619.802 317.662C619.141 318.026 618.399 318.216 617.645 318.214V318.214Z",fill:"#E6E6E6"}),Object(c["h"])("path",{id:"Vector_26",d:"M652.101 229.603C657.523 229.603 661.918 225.208 661.918 219.786C661.918 214.365 657.523 209.97 652.101 209.97C646.679 209.97 642.284 214.365 642.284 219.786C642.284 225.208 646.679 229.603 652.101 229.603Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_27",d:"M618.449 208.996C611.553 208.996 604.94 211.735 600.064 216.611C595.188 221.487 592.449 228.1 592.449 234.996V245.996H605.978L612.449 234.996L614.39 245.996H655.449L644.449 234.996C644.449 228.1 641.709 221.487 636.833 216.611C631.958 211.735 625.344 208.996 618.449 208.996V208.996Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_28",d:"M657.146 213.062C658.232 209.667 660.48 206.764 663.494 204.863C666.508 202.962 670.096 202.184 673.627 202.666C679.883 203.712 684.83 208.741 687.777 214.357C690.724 219.974 692.085 226.26 694.066 232.285C696.047 238.311 698.857 244.369 703.859 248.269C708.861 252.17 716.536 253.228 721.449 249.215C720.888 253.397 719.026 257.296 716.127 260.362C713.228 263.427 709.439 265.504 705.296 266.298C701.152 267.092 696.863 266.563 693.037 264.786C689.21 263.009 686.039 260.075 683.972 256.397C681.38 251.785 680.711 246.38 679.942 241.146C679.173 235.911 678.174 230.496 675.08 226.205C671.985 221.915 666.192 219.112 661.276 221.067L657.146 213.062Z",fill:"#19292F"})]),Object(c["h"])("g",{id:"man-left"},[Object(c["h"])("path",{id:"Vector_30",d:"M126.541 582.585L138.8 582.584L144.633 535.296L126.538 535.297L126.541 582.585Z",fill:"#FFB8B8"}),Object(c["h"])("path",{id:"Vector_31",d:"M162.445 593.967L123.914 593.969L123.913 579.082L147.557 579.081C151.505 579.081 155.292 580.649 158.084 583.441C160.876 586.233 162.444 590.019 162.445 593.967V593.967L162.445 593.967Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_32",d:"M82.5411 582.585L94.8001 582.584L100.633 535.296L82.5381 535.297L82.5411 582.585Z",fill:"#FFB8B8"}),Object(c["h"])("path",{id:"Vector_33",d:"M118.445 593.967L79.9139 593.969L79.9132 579.082L103.557 579.081C107.505 579.081 111.292 580.649 114.084 583.441C116.876 586.233 118.444 590.019 118.445 593.967V593.967L118.445 593.967Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_34",d:"M93.2542 568.041L81.2792 567.411C80.6617 567.379 80.0568 567.224 79.4995 566.956C78.9423 566.688 78.4437 566.313 78.0327 565.851C77.6218 565.389 77.3066 564.85 77.1054 564.265C76.9042 563.68 76.821 563.062 76.8607 562.444L91.1734 403.979L157.084 421.764L163.435 420.032L143.576 560.317C143.407 561.372 142.883 562.338 142.091 563.055C141.298 563.772 140.285 564.198 139.218 564.261L126.309 564.863C125.664 564.898 125.018 564.8 124.412 564.573C123.807 564.347 123.255 563.997 122.792 563.547C122.328 563.096 121.963 562.554 121.72 561.955C121.476 561.356 121.36 560.713 121.378 560.067L123.717 475.871C123.728 475.481 123.592 475.102 123.338 474.807C123.083 474.513 122.727 474.324 122.34 474.279C121.953 474.234 121.563 474.335 121.248 474.563C120.932 474.791 120.713 475.129 120.634 475.51L98.0766 564.323C97.8637 565.377 97.2919 566.324 96.4587 567.003C95.6255 567.683 94.5825 568.052 93.5075 568.048C93.4236 568.048 93.3392 568.046 93.2542 568.041Z",fill:"#19292F"}),Object(c["h"])("path",{id:"Vector_35",d:"M128.742 274.32C142.307 274.32 153.303 263.323 153.303 249.759C153.303 236.194 142.307 225.198 128.742 225.198C115.177 225.198 104.181 236.194 104.181 249.759C104.181 263.323 115.177 274.32 128.742 274.32Z",fill:"#FFB8B8"}),Object(c["h"])("path",{id:"Vector_36",d:"M87.8497 321.918L90.5503 380.185L91.5265 401.384C91.5654 402.307 91.8787 403.197 92.4264 403.941C92.974 404.684 93.7311 405.248 94.6008 405.559L157.937 428.503C158.448 428.693 158.991 428.788 159.536 428.783C160.16 428.786 160.778 428.663 161.354 428.422C161.929 428.181 162.45 427.826 162.885 427.379C163.32 426.933 163.661 426.402 163.887 425.821C164.113 425.239 164.219 424.618 164.2 423.995L161.603 319.228C161.433 310.632 158.269 302.365 152.657 295.853C147.044 289.34 139.336 284.989 130.86 283.551C130.247 283.457 129.624 283.364 129.001 283.28C123.745 282.628 118.41 283.135 113.371 284.766C108.332 286.398 103.712 289.113 99.8356 292.722C95.8216 296.414 92.6675 300.942 90.5964 305.987C88.5253 311.032 87.5876 316.47 87.8497 321.918L87.8497 321.918Z",fill:"#A8A6A6"}),Object(c["h"])("path",{id:"Vector_37",d:"M188.192 416.876C186.694 416.411 185.326 415.603 184.196 414.515C183.066 413.427 182.205 412.09 181.684 410.611C181.162 409.132 180.994 407.551 181.192 405.995C181.389 404.439 181.948 402.951 182.823 401.649L161.345 373.089L179.88 371.942L197.434 399.239C199.313 400.692 200.621 402.761 201.128 405.081C201.635 407.402 201.308 409.827 200.206 411.931C199.103 414.035 197.295 415.684 195.098 416.588C192.901 417.492 190.457 417.594 188.192 416.876H188.192Z",fill:"#FFB8B8"}),Object(c["h"])("path",{id:"Vector_38",d:"M173.091 396.481C172.522 396.25 172.004 395.908 171.568 395.476C171.132 395.044 170.786 394.529 170.55 393.962L138.192 316.868C137.557 315.359 137.226 313.739 137.217 312.101C137.208 310.464 137.522 308.841 138.141 307.325C138.76 305.809 139.672 304.429 140.824 303.266C141.977 302.102 143.347 301.177 144.857 300.543C146.367 299.91 147.987 299.58 149.624 299.572C151.262 299.565 152.885 299.88 154.4 300.501C155.916 301.121 157.294 302.033 158.457 303.187C159.62 304.34 160.544 305.711 161.176 307.221L193.534 384.316C194.013 385.46 194.018 386.746 193.549 387.893C193.08 389.04 192.176 389.954 191.034 390.435L176.668 396.464C176.103 396.703 175.496 396.828 174.881 396.831C174.267 396.834 173.659 396.715 173.091 396.481L173.091 396.481Z",fill:"#A8A6A6"}),Object(c["h"])("path",{id:"Vector_39",d:"M120.845 393.762L151.925 334.253C152.524 333.108 153.553 332.248 154.785 331.862C156.018 331.475 157.354 331.593 158.5 332.189L203.611 355.749C204.756 356.349 205.616 357.378 206.002 358.61C206.389 359.843 206.271 361.179 205.674 362.324L174.595 421.833C173.996 422.978 172.967 423.838 171.734 424.225C170.502 424.611 169.166 424.493 168.02 423.897L122.909 400.337C121.764 399.737 120.904 398.708 120.518 397.476C120.131 396.243 120.249 394.907 120.845 393.762Z",fill:"#4A565D"}),Object(c["h"])("path",{id:"Vector_40",d:"M141.688 366.574C141.136 365.106 140.248 363.787 139.095 362.724C137.943 361.66 136.557 360.88 135.05 360.447C133.543 360.013 131.955 359.939 130.413 360.228C128.872 360.517 127.419 361.163 126.171 362.113L96.3929 342.359L96.3423 360.929L124.628 376.841C126.19 378.631 128.331 379.814 130.678 380.183C133.025 380.552 135.426 380.083 137.462 378.858C139.497 377.633 141.036 375.731 141.809 373.485C142.582 371.238 142.539 368.792 141.688 366.574V366.574Z",fill:"#FFB8B8"}),Object(c["h"])("path",{id:"Vector_41",d:"M104.038 370.749L79.7014 351.472C77.0687 350.588 74.6898 349.078 72.7689 347.072C70.848 345.066 69.4426 342.624 68.6732 339.956C67.9038 337.287 67.7935 334.472 68.3517 331.751C68.9099 329.031 70.12 326.486 71.878 324.336L93.9752 295.377C95.5107 293.501 97.6703 292.239 100.059 291.824C102.448 291.409 104.906 291.867 106.985 293.115C109.064 294.363 110.624 296.318 111.381 298.621C112.137 300.925 112.039 303.424 111.105 305.661L93.6209 334.261L119.315 346.448C119.912 346.732 120.443 347.138 120.872 347.642C121.3 348.146 121.617 348.734 121.801 349.37C121.985 350.005 122.032 350.672 121.94 351.326C121.847 351.981 121.616 352.609 121.263 353.168L110.891 369.582C110.541 370.136 110.078 370.61 109.532 370.974C108.987 371.337 108.371 371.582 107.725 371.693C107.699 371.697 107.673 371.701 107.647 371.705C107.012 371.801 106.364 371.766 105.744 371.601C105.123 371.437 104.542 371.147 104.038 370.749V370.749Z",fill:"#A8A6A6"}),Object(c["h"])("path",{id:"Vector_42",d:"M110.183 266.205C110.078 265.897 110.044 265.569 110.085 265.246C110.126 264.922 110.241 264.613 110.42 264.341C110.599 264.069 110.838 263.841 111.119 263.676C111.4 263.51 111.715 263.411 112.039 263.386C112.705 263.423 113.356 263.593 113.953 263.888C114.551 264.183 115.082 264.595 115.516 265.101C116.404 266.126 117.439 267.015 118.587 267.738C119.775 268.337 121.386 268.252 122.064 267.11C122.7 266.038 122.264 264.602 121.879 263.357C120.899 260.188 120.351 256.902 120.249 253.587C120.138 249.886 120.66 246.025 122.709 243.139C125.352 239.414 130.08 238 134.554 238.102C139.028 238.205 143.429 239.586 147.861 240.459C149.391 240.76 151.189 240.914 152.213 239.729C153.301 238.468 152.901 236.427 152.438 234.725C151.237 230.308 149.963 225.74 147.173 222.173C144.156 218.466 139.846 216.039 135.112 215.383C130.567 214.82 125.953 215.343 121.65 216.911C114.639 219.121 108.469 223.419 103.967 229.23C99.3257 235.409 97.3202 243.175 98.3889 250.83C99.433 257.496 102.966 263.519 108.275 267.684L110.183 266.205Z",fill:"#19292F"})])]),Object(c["h"])("defs",null,[Object(c["h"])("clipPath",{id:"clip0"},[Object(c["h"])("rect",{width:"844.675",height:"595.262",fill:"white"})])])])],-1);Object(c["s"])();var B=w((function(e,t,C,r,a,o){var n=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("section",A,[Object(c["h"])("div",F,[Object(c["h"])("div",k,[H,x,Object(c["h"])(n,{to:{name:"ChooseCategory"},class:"btn"},{default:w((function(){return[T]})),_:1})]),D])])})),E={name:"Index",components:{}};C("6b4a");E.render=B,E.__scopeId="data-v-7b88a9ec";var I=E,P=[{path:"/",name:"Index",component:I},{path:"/categories",name:"ChooseCategory",component:function(){return C.e("chooseCategory").then(C.bind(null,"485c"))}},{path:"/categories/id=:id/difficulty=:difficulty/questions=:questions",props:!0,name:"Game",component:function(){return C.e("Game").then(C.bind(null,"7d36"))}}],S=Object(Z["a"])({scrollBehavior:function(e,t,C){return C||{x:0,y:0}},history:Object(Z["b"])("/"),routes:P}),G=S;C("ed18").config(),Object(c["d"])(M).use(G).mount("#app")},"6b4a":function(e,t,C){"use strict";C("c1ac")},9847:function(e,t,C){},"9cdc":function(e,t,C){"use strict";C("c701")},bec1:function(e,t,C){},c1ac:function(e,t,C){},c701:function(e,t,C){}});
//# sourceMappingURL=app.4b950f1a.js.map