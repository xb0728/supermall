(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6e9a3e"],{"002c":function(t,s,e){},"03bd":function(t,s,e){"use strict";e("644d")},"0bd5":function(t,s,e){},"16ae":function(t,s,e){},"2b94":function(t,s,e){"use strict";e("7821")},"385a":function(t,s,e){},"3ba4":function(t,s,e){"use strict";e("002c")},"3c09":function(t,s,e){"use strict";e("16ae")},"644d":function(t,s,e){},7821:function(t,s,e){},"7a74":function(t,s,e){t.exports=e.p+"static/img/back.26df9036.svg"},"83e9":function(t,s,e){},9301:function(t,s,e){},"93ff":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detril"},[e("detrilcomes",{ref:"nav",staticClass:"tab-item",on:{itemclick:t.itemclick}}),e("scroll",{ref:"scroll",staticClass:"centet",attrs:{pulluplode:!0},on:{scroll:t.scrollitem}},[e("detrilbanner",{attrs:{topimages:t.topimages}}),e("detrilgoods",{attrs:{goods:t.goods}}),e("detrilshops",{attrs:{shops:t.shops}}),e("detailinfo",{attrs:{detailinfo:t.detailinfo},on:{imageLoad:t.imageLoad}}),e("detrilparameter",{ref:"parameter",attrs:{parameter:t.parameter}}),e("detrilcommer",{ref:"commer",attrs:{commerinfo:t.commerinfo}}),e("detrilcommen",{ref:"commen",attrs:{getcommen:t.getcommen}})],1),e("detrilbottom",{on:{addcate:t.addcate}})],1)},n=[],o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("newbar",[i("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.backclick},slot:"left"},[i("img",{attrs:{src:e("7a74"),alt:""}})]),i("div",{staticClass:"center",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(s,e){return i("div",{key:s.title,staticClass:"center-item",class:{active:e===t.comteindex},on:{click:function(s){return t.itemclick(e)}}},[t._v(t._s(s))])})),0)])],1)},a=[],r=e("11f6"),c={name:"detrilcomes",components:{Newbar:r["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],comteindex:0}},methods:{itemclick:function(t){this.comteindex=t,this.$emit("itemclick",t)},backclick:function(){this.$router.go(-1)}}},l=c,d=(e("3c09"),e("2877")),u=Object(d["a"])(l,o,a,!1,null,"07efe36a",null),m=u.exports,f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detril-banner"},[e("swiper",{staticClass:"item-det"},t._l(t.topimages,(function(t){return e("swiperItem",{key:t.index},[e("img",{attrs:{src:"http:"+t,alt:""}})])})),1)],1)},h=[],p=e("fa12"),v={name:"detrilbanner",components:{Swiper:p["a"],SwiperItem:p["b"]},props:{topimages:{type:Array,default:function(){return[]}}}},_=v,g=(e("9678"),Object(d["a"])(_,f,h,!1,null,"20b6fe41",null)),b=g.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"good-item"},[e("span",[t._v(t._s(t.goods.title))])]),e("div",{staticClass:"goods-show"},[e("span",[t._v(t._s(t.goods.oldPrice))]),e("span",[t._v(t._s(t.goods.newPrice))]),e("span",[t._v(t._s(t.goods.discount))])]),e("div",{staticClass:"goods-pot"},t._l(t.goods.columns,(function(s){return e("div",{key:s.index,staticClass:"goods-pritem"},[t._v(t._s(s))])})),0),t.goods.services?e("div",{staticClass:"goods-cart"},t._l(t.goods.services.length-2,(function(s){return e("div",{key:s,staticClass:"cars"},[e("img",{staticClass:"cars-icon",attrs:{src:"https:"+t.goods.services[0].icon,alt:""}}),e("p",{staticClass:"cars-name"},[t._v(t._s(t.goods.services[s-1].name))])])})),0):t._e()])},y=[],x={name:"detrilgoods",props:{goods:{type:Object,default:function(){return{}}}}},w=x,k=(e("03bd"),Object(d["a"])(w,C,y,!1,null,null,null)),I=k.exports,$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shops"},[e("div",{staticClass:"shops-logo"},[e("img",{attrs:{src:"https:"+t.shops.logo,alt:""}}),e("div",{staticClass:"shops-name"},[e("span",[t._v(t._s(t.shops.name))])])]),e("div",{staticClass:"shops-vib"},[e("div",{staticClass:"vib-left"},[e("div",{staticClass:"vib-top"},[e("span",[t._v(t._s(t.shops.fans))]),e("div",[t._v("总销量")])]),e("div",{staticClass:"vib-top"},[e("span",[t._v(t._s(t.shops.goodsCount))]),e("div",[t._v("全部宝贝")])])]),e("div",{staticClass:"vib-right"},t._l(t.shops.score,(function(s){return e("p",{key:s.title},[e("span",{staticClass:"vib-noe"},[t._v(t._s(s.name))]),e("span",{staticClass:"vib-two"},[t._v(t._s(s.score))]),e("span",{staticClass:"vib-three",class:{"better-more":s.isBetter}},[t._v(t._s(s.isBetter?"高":"低"))])])})),0)])])},j=[],O={name:"detrilshops",props:{shops:{type:Object,default:function(){return{}}}}},T=O,E=(e("cbd1"),Object(d["a"])(T,$,j,!1,null,null,null)),S=E.exports,P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.detailinfo).length?e("div",{staticClass:"goods-info"},[e("div",{staticClass:"info-desc clear-fix"},[e("div",{staticClass:"start"}),e("div",{staticClass:"desc"},[t._v(t._s(t.detailinfo.desc))]),e("div",{staticClass:"end"})]),e("div",{staticClass:"info-key"},[t._v(t._s(t.detailinfo.detailImage[0].key))]),e("div",{staticClass:"info-list"},t._l(t.detailinfo.detailImage[0].list,(function(s,i){return e("img",{key:i,attrs:{src:"https:"+s,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},W=[],Y={name:"detailinfo",props:{detailinfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){this.$emit("imageLoad")}}},L=Y,N=(e("2b94"),Object(d["a"])(L,P,W,!1,null,"89c56826",null)),D=N.exports,X=e("38b6"),B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.parameter).length?e("div",{staticClass:"param-info"},[t._l(t.parameter.rule,(function(s,i){return e("table",{key:i,staticClass:"info-size"},t._l(s,(function(s,i){return e("tr",{key:i},t._l(s,(function(s,i){return e("td",{key:i},[t._v(t._s(s))])})),0)})),0)})),e("table",{staticClass:"info-param"},t._l(t.parameter.info,(function(s,i){return e("tr",{key:i},[e("td",{staticClass:"info-param-key"},[t._v(t._s(s.key))]),e("td",{staticClass:"param-value"},[t._v(t._s(s.value))])])})),0)],2):t._e()},R=[],M={name:"detrilparameter",props:{parameter:{type:Object,default:function(){return{}}}}},A=M,J=(e("c7d4"),Object(d["a"])(A,B,R,!1,null,null,null)),q=J.exports,z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.commerinfo).length?e("div",{staticClass:"commer"},[t._m(0),e("div",{staticClass:"commer-bor"}),e("div",{staticClass:"commer-name"},[e("p",[e("span",[e("img",{staticClass:"imgs",attrs:{src:"https:"+t.commerinfo.user.avatar,alt:""}})]),e("span",[t._v(t._s(t.commerinfo.user.uname))])]),e("p",[t._v(" "+t._s(t.commerinfo.content)+" ")]),e("p",[e("span",[t._v("2019-10-21")]),e("span",[t._v(t._s(t.commerinfo.style))])]),e("div",{staticClass:"commer-images"},[e("p",t._l(t.commerinfo.images,(function(t,s){return e("img",{key:s,attrs:{src:"https:"+t,alt:""}})})),0)])])]):t._e()},F=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"commerinfo"},[e("div",{staticClass:"commerinfo-left"},[t._v("用户评价")]),e("div",{staticClass:"commerinfo-right"},[t._v("更多")])])}],G={name:"detrilcommer",data:function(){return{value:this.commerinfo.created}},props:{commerinfo:{type:Object,dufault:function(){return{}}}},methods:{}},H=G,K=(e("c40f"),Object(d["a"])(H,z,F,!1,null,null,null)),Q=K.exports,U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.getcommen).length?e("div",{staticClass:"goodlist"},t._l(t.getcommen,(function(s,i){return e("div",{key:i,staticClass:"goods-item"},[e("img",{attrs:{src:s.image,alt:""}}),e("div",{staticClass:"goods-price"},[e("p",[t._v(t._s(s.title))]),e("span",{staticClass:"price"},[t._v(t._s(s.price))]),e("div",{staticClass:"icon"}),e("span",{staticClass:"collect"},[t._v(t._s(s.cfav))])])])})),0):t._e()},V=[],Z={name:"detrilcommen",props:{getcommen:{type:Array,default:function(){return[]}}}},tt=Z,st=(e("d47c"),Object(d["a"])(tt,U,V,!1,null,null,null)),et=st.exports,it=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-bar"},[t._m(0),e("div",{staticClass:"bottom-item bar-right"},[e("div",{staticClass:"cart",on:{click:t.addclick}},[t._v("加入购物车")]),e("div",{staticClass:"buy"},[t._v("购买")])])])},nt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-item bar-left"},[e("div",[e("i",{staticClass:"icon icon-o"}),e("span",[t._v("客服")])]),e("div",[e("i",{staticClass:"icon icon-t"}),e("span",[t._v("店铺")])]),e("div",[e("i",{staticClass:"icon icon-s"}),e("span",[t._v("收藏")])])])}],ot={name:"datrilbottom",methods:{addclick:function(){this.$emit("addcate")}}},at=ot,rt=(e("3ba4"),Object(d["a"])(at,it,nt,!1,null,null,null)),ct=rt.exports;function lt(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}e("b0c0");var dt=e("bf4f");function ut(t){return Object(dt["a"])({url:"/detail/",params:{iid:t}})}function mt(){return Object(dt["a"])({url:"/recommend"})}var ft=function t(s,e,i){lt(this,t),this.title=s.title,this.desc=s.desc,this.newPrice=s.price,this.oldPrice=s.oldPrice,this.discount=s.discountDesc,this.columns=e,this.services=i,this.realPrice=s.lowNowPrice,this.count=1},ht=function t(s){lt(this,t),this.logo=s.shopLogo,this.name=s.name,this.fans=s.cFans,this.sells=s.cSells,this.score=s.score,this.goodsCount=s.cGoods},pt=function t(s){lt(this,t),this.info=s.info.set,this.rule=s.rule.tables},vt={name:"detril",components:{detrilcomes:m,detrilbanner:b,detrilgoods:I,detrilshops:S,Scroll:X["a"],detailinfo:D,detrilparameter:q,detrilcommer:Q,detrilcommen:et,detrilbottom:ct},data:function(){return{iid:null,topimages:[],goods:{},shops:{},detailinfo:{},parameter:{},commerinfo:{},getcommen:[],scrollY:[],currentindex:0}},created:function(){var t=this;console.log(this.$route.params.iid),this.iid=this.$route.params.iid,ut(this.iid).then((function(s){console.log(s);var e=s.data.result;t.topimages=s.data.result.itemInfo.topImages,t.goods=new ft(e.itemInfo,s.data.result.columns,e.shopInfo.services),t.shops=new ht(e.shopInfo),t.detailinfo=e.detailInfo,t.parameter=new pt(e.itemParams),0!==e.rate.cRate&&(t.commerinfo=e.rate.list[0])})),mt().then((function(s){t.getcommen=s.data.data.list,console.log(s.data.data.list)}))},methods:{imageLoad:function(){this.$refs.scroll.refresh(),this.scrollY=[],this.scrollY.push(0),this.scrollY.push(this.$refs.parameter.$el.offsetTop),this.scrollY.push(this.$refs.commer.$el.offsetTop),this.scrollY.push(this.$refs.commen.$el.offsetTop)},itemclick:function(t){this.$refs.scroll.scrollTo(0,-this.scrollY[t],500),console.log(t)},scrollitem:function(t){for(var s=-t.y,e=this.scrollY.length,i=0;i<e;i++)(this.currentindex!==i&&i<e-1&&s>=this.scrollY[i]&&s<this.scrollY[i+1]||i===e-1&&s>=this.scrollY[i])&&(this.currentindex=i,console.log(this.currentindex),this.$refs.nav.comteindex=this.currentindex)},addcate:function(){var t=this,s={};s.desc=this.goods.desc,s.oldPrice=this.goods.oldPrice,s.topimages=this.topimages[0],s.iid=this.iid,s.count=this.goods.count,s.title=this.goods.title,console.log(s),this.$store.dispatch("addcart",s).then((function(s){t.$tosat.show(s,1500)}))}}},_t=vt,gt=(e("afc6"),Object(d["a"])(_t,i,n,!1,null,"321293f4",null));s["default"]=gt.exports},9678:function(t,s,e){"use strict";e("e90a")},a307:function(t,s,e){"use strict";e("83e9")},a74f:function(t,s,e){},afc6:function(t,s,e){"use strict";e("9301")},b829:function(t,s,e){},c40f:function(t,s,e){"use strict";e("a74f")},c651:function(t,s,e){"use strict";e("d38f")},c7d4:function(t,s,e){"use strict";e("385a")},cbd1:function(t,s,e){"use strict";e("0bd5")},d38f:function(t,s,e){},d47c:function(t,s,e){"use strict";e("b829")},e90a:function(t,s,e){},fa12:function(t,s,e){"use strict";e.d(s,"a",(function(){return l})),e.d(s,"b",(function(){return p}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"hy-swiper"}},[e("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),e("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(s,i){return e("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},n=[],o=(e("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),1e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),s=t.getElementsByClassName("slide");if(this.slideCount=s.length,this.slideCount>1){var e=s[0].cloneNode(!0),i=s[this.slideCount-1].cloneNode(!0);t.insertBefore(i,s[0]),t.appendChild(e),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var s=-this.currentIndex*this.totalWidth,e=this.distance+s;this.setTransform(e)},touchEnd:function(t){var s=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&s>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&s>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),a=o,r=(e("c651"),e("2877")),c=Object(r["a"])(a,i,n,!1,null,"502bd675",null),l=c.exports,d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"slide"},[t._t("default")],2)},u=[],m={name:"Slide"},f=m,h=(e("a307"),Object(r["a"])(f,d,u,!1,null,"2d53b10f",null)),p=h.exports}}]);
//# sourceMappingURL=chunk-4a6e9a3e.a38d3b45.js.map