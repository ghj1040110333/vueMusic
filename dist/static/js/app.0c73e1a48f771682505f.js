webpackJsonp([1],Array(34).concat([function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return s}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return r}),e.d(n,"f",function(){return c}),e.d(n,"g",function(){return u}),e.d(n,"h",function(){return l}),e.d(n,"i",function(){return d}),e.d(n,"j",function(){return f}),e.d(n,"k",function(){return p}),e.d(n,"l",function(){return m}),e.d(n,"m",function(){return v});var i="CLOSEPLAYLIST",s="OPENPLAYLIST",a="SHOWPLAYINFO",o="SENDAUDIO",r="SENDMUSIC",c="SWITCHPLAY",u="SETCURTIME",l="DELMUSIC",d="SELECTMUSIC",f="NEXTMUSIC",p="BEFOREMUSIC",m="SWITCHPROP",v="PLAYEND"},,,,,,,,,,,,,,,,,,,,function(t,n,e){function i(t){e(151)}var s=e(0)(e(87),e(183),i,"data-v-3a09e15d",null);t.exports=s.exports},function(t,n,e){"use strict";var i=e(11),s=e(193),a=e(168),o=(e.n(a),e(169)),r=(e.n(o),e(54)),c=(e.n(r),e(167)),u=e.n(c),l=e(175),d=e.n(l),f=e(176),p=e.n(f),m=e(177),v=e.n(m);i.default.use(s.a),n.a=new s.a({routes:[{path:"/home",name:"首页",component:u.a,mate:{keepAlive:!0}},{path:"/",redirect:"/home",mate:{keepAlive:!0}},{path:"/raking",name:"排行榜",component:d.a,mate:{keepAlive:!1}},{path:"/search",name:"sousuop",component:p.a,mate:{keepAlive:!1}},{name:"toplist",path:"/toplist/:topid",component:v.a,mate:{keepAlive:!1}}]})},function(t,n,e){"use strict";var i=e(11),s=e(4),a=e(105),o=e(102),r=e(104),c=e(103);i.default.use(s.c),n.a=new s.c.Store({state:a.a,actions:o.a,mutations:r.a,getters:c.a})},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){function i(t){e(154)}var s=e(0)(e(83),e(187),i,null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=e(52),e(146)),n.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,n=function(){if(!t.swiper&&i){delete t.options.notNextTick;var n=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(n=!0,t.defaultSwiperClasses[e]=t.options[e]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};n?t.$nextTick(s):s()}};this.options.notNextTick?n():this.$nextTick(n)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(173),o=e.n(a),r=e(172),c=e.n(r),u=e(170),l=e.n(u),d=e(171),f=e.n(d),p=e(174),m=e.n(p),v=e(4);n.default={name:"app",data:function(){return{isloading:!1,showHeader:!0,showNav:!0,showPlay:!0}},mounted:function(){this.$store.dispatch("sendAudio",this.$refs.audio)},methods:s()({changePath:function(t){t.indexOf("toplist")>0?(this.showHeader=!1,this.showNav=!1):(this.showHeader=!0,this.showNav=!0)}},e.i(v.a)(["ShowPlayInfo","getcurrentTime","getDuration","playend"])),components:{"v-loading":o.a,"v-header":c.a,"v-bar":l.a,"v-footer":f.a,playinfo:m.a},watch:{$route:function(t,n){this.changePath(t.path),this.isloading=!0;var e=this;setTimeout(function(){e.isloading=!1},100)}},computed:s()({},e.i(v.b)(["showplay"]))}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(54),o=e.n(a),r=e(19),c=e.n(r),u=e(4);n.default={data:function(){return{arr:[]}},mounted:function(){this.list()},methods:s()({list:function(){var t=this;c.a.get("../static/test.json").then(function(n){t.arr=n.data.data})}},e.i(u.a)(["sendMusic"])),components:{"v-banner":o.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(97),s=e(19),a=e.n(s);n.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",src:"",musicData:[],num:0,audio:"",title:"",status:!1}},mounted:function(){e.i(i.a)().then(function(){return function(){}}),this.post()},methods:{playPause:function(){var t=document.getElementById("audio1"),n=document.getElementById("rallback");t.paused?(t.play(),n.style.webkitAnimationPlayState="running"):(t.pause(),n.style.webkitAnimationPlayState="paused")},post:function(){var t=this;a.a.get("../../static/test.json").then(function(n){for(var e=n.data.data,i=0;i<e.length;i++)e[i].songid="http://ws.stream.qqmusic.qq.com/"+e[i].songid+".m4a?fromtag=46'";t.musicData=e,t.init()})},init:function(){var t=parseInt(7*Math.random());this.src=this.musicData[t].img,this.audio=this.musicData[t].songid,this.title=this.musicData[t].name;var n=document.getElementById("audio1");this.status=n.paused}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(7),s=e.n(i);n.default={data:function(){return{}},mounted:function(){this.test()},methods:{test:function(){s()("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492177982521",{param:"jsonpCallback",prefix:""},function(t,n){console.log(n.data.slider)})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(53),s=(e.n(i),e(7)),a=e.n(s);n.default={name:"carrousel",data:function(){return{arr:[],swiperOption:{notNextTick:!0,autoplay:3e3,loop:!0,autoplayDisableOnInteraction:!1,direction:"horizontal",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,debugger:!0}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.test()},methods:{test:function(){var t=this;a()("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492177982521",{param:"jsonpCallback",prefix:""},function(n,e){t.arr=e.data.slider})}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(4);n.default={data:function(){return{status:!0,value:0}},computed:s()({},e.i(a.b)(["playlist","getmusicList","songImg","nowSong","playState"])),methods:s()({},e.i(a.a)(["closeplaylist","openplaylist","ShowPlayInfo","switchplay","switchprop"]),{test:function(){this.closeplaylist()}}),mounted:function(){this.$refs.imgBox.style.webkitAnimationPlayState="paused"},watch:{playState:function(t,n){this.$refs.imgBox.style.webkitAnimationPlayState=t?"running":"paused"}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(4);n.default={data:function(){return{leftPopup:!1}},computed:s()({},e.i(a.b)(["playlist","getmusicList","total","getMusicPlace","leftstate"])),methods:s()({},e.i(a.a)(["delmusic","selectmusic","switchprop"]),{open:function(t){this[t+"Popup"]=!0},close:function(t){this[t+"Popup"]=!1}}),mounted:function(){}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(37),o=e.n(a),r=e(53),c=(e.n(r),e(4)),u=e(7),l=e.n(u),d=e(98),f=e(100),p=e(11),m=e(161),v=e.n(m);p.default.filter("date",function(t){var n=new Date;n.setTime(1e3*t);var e=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return n.getMinutes()+"."+e}),n.default={data:function(){return o()({swiperOption:{notNextTick:!0,loop:!0,autoplayDisableOnInteraction:!1,direction:"horizontal",grabCursor:!0,setWrapperSize:!0,autoHeight:!1,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,debugger:!0},lyric:[],time:"100",jindu:0},"time",0)},mounted:function(){this.test(),this.$refs.imgBox.style.webkitAnimationPlayState="paused",this.playState?this.$refs.imgBox.style.webkitAnimationPlayState="running":this.$refs.imgBox.style.webkitAnimationPlayState="paused"},computed:s()({swiper:function(){return console.log(this.$refs.mySwiper.swiper),this.$refs.mySwiper.swiper}},e.i(c.b)(["showplay","songImg","nowSong","playState","currentTime","duration"]),{background:function(){return"background:url("+this.songImg+") no-repeat; "}}),methods:s()({},e.i(c.a)(["ShowPlayInfo","openplaylist","switchplay","setCurrentTime","nextmusic","beforemusic","switchprop"]),{test:function(){var t=this,n="https://api.darlin.me/music/lyric/"+t.nowSong.songid+"/?";l()(n,function(n,i){if(i.lyric){var s=new d.a,a=s.decode(i.lyric);t.lyric=e.i(f.a)(a)}})},movejindu:function(){this.jindu=parseInt(this.currentTime/this.duration*100)},moveChange:function(){var t=this;setTimeout(function(){t.setCurrentTime(t.jindu*t.duration/100)},20)}}),watch:{playState:function(t,n){this.$refs.imgBox.style.webkitAnimationPlayState=t?"running":"paused"},currentTime:function(t){this.time=parseInt(this.currentTime)},time:function(){if(this.lyric[this.time]){for(var t=document.getElementsByClassName("nowLyc"),n=0,e=0;e<t.length;e++)n+=t[e].offsetHeight;v()("#gequBox").animate({scrollTop:n-50})}this.jindu=100*(this.currentTime/this.duration).toFixed(4)}},components:{swiper:r.swiper,swiperSlide:r.swiperSlide}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(7),s=e.n(i);n.default={data:function(){return{list:[]}},mounted:function(){var t=this;s()("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073",{param:"jsonpCallback"},function(n,e){t.list=e.data.topList})},methods:{test:function(){alert(1111)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(7),o=e.n(a),r=e(4);n.default={data:function(){return{arr:[],searchList:[],searcKey:"",hotListState:!0,searchListState:!1}},computed:s()({},e.i(r.b)([""])),mounted:function(){this.hotlist()},methods:s()({},e.i(r.a)(["sendMusic"]),{back:function(){this.hotListState=!0,this.searchListState=!1},hotlist:function(){var t=this;o()("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?format=jsonp",{param:"jsonpCallback"},function(n,e){console.log(e),e.data.hotkey.forEach(function(n,e){e<10&&t.arr.push(n)})})},search:function(t){var n="https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=20&w="+t,e=this;o()(n,{param:"jsonpCallback"},function(t,n){n.data.song.list!=[]?(e.hotListState=!1,e.searchListState=!0,e.searchList=[],n.data.song.list.forEach(function(t){e.searchList.push({name:t.songname,img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",songid:t.songid,singer:t.singer[0].name})})):this.notFound=!0})}})}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),s=e.n(i),a=e(7),o=e.n(a),r=e(4);n.default={data:function(){return{toplist:{color:"",img:"",title:"",list:[],top:document.body.scrollTop}}},created:function(){},mounted:function(){},activated:function(){this.hotlist()},deactivated:function(){},methods:s()({back:function(){this.$router.back(1)}},e.i(r.a)(["delmusic","selectmusic","sendMusic"]),{hotlist:function(){var t=this,n=this.$route.params.topid,e="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+n+"&_=1492910996732";o()(e,{param:"jsonpCallback"},function(n,e){var i=e;if(t.toplist.title=i.topinfo.ListName,t.toplist.img=i.topinfo.pic_album,t.toplist.color="#"+i.color.toString(16),t.toplist.color.length<7)for(var s=t.toplist.color.length;s<7;s++)t.toplist.color+="9";i.songlist.forEach(function(n){t.toplist.list.push({name:n.data.songname,img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+n.data.albummid+".jpg?max_age=2592000",songid:n.data.songid,singer:n.data.singer[0].name})})})}}),computed:s()({backgroundUrl:function(){return"background-image:url("+this.toplist.img+") ;"},backgroundCor:function(){return"background-color:"+this.toplist.color+";"}},e.i(r.b)([""]))}},function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s});var i={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},s={param:"jsonpCallback"}},function(t,n,e){"use strict";function i(){var t=o()({},c.a,{platform:"h5",uin:0,needNewCode:1});return e.i(r.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.b)}n.a=i;var s=e(36),a=(e.n(s),e(35)),o=e.n(a),r=e(99),c=e(96),u=e(19);e.n(u)},function(t,n,e){"use strict";var i=function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(e){var i="",s=void 0,a=void 0,o=void 0,r=void 0,c=void 0,u=void 0,l=void 0,d=0;for(e=n(e);d<e.length;)s=e.charCodeAt(d++),a=e.charCodeAt(d++),o=e.charCodeAt(d++),r=s>>2,c=(3&s)<<4|a>>4,u=(15&a)<<2|o>>6,l=63&o,isNaN(a)?u=l=64:isNaN(o)&&(l=64),i=i+t.charAt(r)+t.charAt(c)+t.charAt(u)+t.charAt(l);return i},this.decode=function(n){var i="",s=void 0,a=void 0,o=void 0,r=void 0,c=void 0,u=void 0,l=void 0,d=0;for(n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<n.length;)r=t.indexOf(n.charAt(d++)),c=t.indexOf(n.charAt(d++)),u=t.indexOf(n.charAt(d++)),l=t.indexOf(n.charAt(d++)),s=r<<2|c>>4,a=(15&c)<<4|u>>2,o=(3&u)<<6|l,i+=String.fromCharCode(s),64!=u&&(i+=String.fromCharCode(a)),64!=l&&(i+=String.fromCharCode(o));return i=e(i)};var n=function(t){t=t.replace(/\r\n/g,"\n");for(var n="",e=0;e<t.length;e++){var i=t.charCodeAt(e);i<128?n+=String.fromCharCode(i):i>127&&i<2048?(n+=String.fromCharCode(i>>6|192),n+=String.fromCharCode(63&i|128)):(n+=String.fromCharCode(i>>12|224),n+=String.fromCharCode(i>>6&63|128),n+=String.fromCharCode(63&i|128))}return n},e=function(t){for(var n="",e=0,i=void 0,s=void 0,a=void 0,o=i=s=0;e<t.length;)o=t.charCodeAt(e),o<128?(n+=String.fromCharCode(o),e++):o>191&&o<224?(s=t.charCodeAt(e+1),n+=String.fromCharCode((31&o)<<6|63&s),e+=2):(s=t.charCodeAt(e+1),a=t.charCodeAt(e+2),n+=String.fromCharCode((15&o)<<12|(63&s)<<6|63&a),e+=3);return n}};n.a=i},function(t,n,e){"use strict";function i(t,n,e){return t+=(t.indexOf("?")<0?"?":"&")+s(n),new o.a(function(n,i){c()(t,e,function(t,e){t?i(t):n(e)})})}function s(t){var n="";for(var e in t){var i=void 0!==t[e]?t[e]:"";n+="&"+e+"="+encodeURIComponent(i)}return n?n.substring(1):""}n.a=i;var a=e(36),o=e.n(a),r=e(7),c=e.n(r)},function(t,n,e){"use strict";function i(t){for(var n=t.split("\n"),e={},i=0;i<n.length;i++){var s=decodeURIComponent(n[i]),a=/\[\d*:\d*((\.|\:)\d*)*\]/g,o=s.match(a);if(o)for(var r=s.replace(a,""),c=0,u=o.length;c<u;c++){var l=o[c],d=Number(String(l.match(/\[\d*/i)).slice(1)),f=Number(String(l.match(/\:\d*/i)).slice(1)),p=60*d+f;e[p]=r}}return e}n.a=i},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(11),s=e(63),a=e.n(s),o=e(55),r=e(61),c=(e.n(r),e(60)),u=(e.n(c),e(59)),l=(e.n(u),e(57)),d=(e.n(l),e(56)),f=e(62),p=e.n(f),m=e(58);e.n(m);i.default.use(p.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:o.a,store:d.a,template:"<App/>",components:{App:a.a}})},function(t,n,e){"use strict";var i=e(34);n.a={openplaylist:function(t,n){var e=t.commit;t.state;e(i.a,n)},closeplaylist:function(t,n){var e=t.commit;t.state;e(i.b,n)},ShowPlayInfo:function(t){var n=t.commit;t.state;n(i.c)},sendAudio:function(t,n){var e=t.commit;t.state;e(i.d,n)},sendMusic:function(t,n){var e=t.commit;t.state;e(i.e,n)},getcurrentTime:function(t){var n=t.state;n.currentTime=n.dom.currentTime},getDuration:function(t){var n=t.state;n.duration=n.dom.duration},switchplay:function(t){var n=t.commit;t.state;n(i.f)},setCurrentTime:function(t,n){var e=t.commit;t.state;e(i.g,n)},delmusic:function(t,n){var e=t.commit;t.state;e(i.h,n)},selectmusic:function(t,n){var e=t.commit;t.state;e(i.i,n)},nextmusic:function(t){var n=t.commit;t.state;n(i.j)},beforemusic:function(t){var n=t.commit;t.state;n(i.k)},switchprop:function(t){var n=t.commit;t.state;n(i.l)},playend:function(t){var n=t.commit;t.state;n(i.m)}}},function(t,n,e){"use strict";var i=e(163);n.a={playlist:function(t){return t.playlist},showplay:function(t){return t.isShowPlayInfo},getmusicList:function(t){return t.musicList},songImg:function(t){return 0==t.musicList.length?i:t.musicList[t.musicPlace].img?t.musicList[t.musicPlace].img:i},nowSong:function(t){return-1==t.musicPlace?{songid:-1,name:"歌名",singer:"歌手"}:t.musicList[t.musicPlace]},currentTime:function(t){return t.currentTime},duration:function(t){return t.duration},playState:function(t){return t.playState},total:function(t){return t.musicList.length},getMusicPlace:function(t){return t.musicPlace},leftstate:function(t){return t.leftPopup}}},function(t,n,e){"use strict";var i,s=e(37),a=e.n(s),o=e(34);n.a=(i={},a()(i,o.a,function(t,n){t.playlist=!0}),a()(i,o.b,function(t,n){t.playlist=!1}),a()(i,o.c,function(t){t.isShowPlayInfo=!t.isShowPlayInfo}),a()(i,o.d,function(t,n){t.dom=n}),a()(i,o.e,function(t,n){t.musicList.push(n),t.musicPlace=t.musicList.length-1,t.dom.src="http://ws.stream.qqmusic.qq.com/"+t.musicList[t.musicPlace].songid+".m4a?fromtag=46",setTimeout(function(){console.log(t.dom.paused),t.dom.paused?(alert("加载失败换歌试试吧"),t.playState=!1):t.playState=!0},2e3)}),a()(i,o.f,function(t){if("-1"!=t.dom.src.indexOf("1111"))return void alert("请选择音乐");t.playState?(t.playState=!1,t.dom.pause()):(t.playState=!0,t.dom.play())}),a()(i,o.g,function(t,n){t.dom.currentTime=n}),a()(i,o.h,function(t,n){t.musicList.splice(n,1),t.dom.src=""}),a()(i,o.i,function(t,n){t.musicPlace=n,t.dom.src="http://ws.stream.qqmusic.qq.com/"+t.musicList[n].songid+".m4a?fromtag=46"}),a()(i,o.j,function(t,n){var e=t.musicList.length,i=t.musicPlace+1;t.musicPlace=i>=e?0:i,t.dom.src="http://ws.stream.qqmusic.qq.com/"+t.musicList[t.musicPlace].songid+".m4a?fromtag=46"}),a()(i,o.k,function(t,n){var e=t.musicList.length,i=t.musicPlace-1;t.musicPlace=i<0?e-1:i,console.log(t.musicPlace),t.dom.src="http://ws.stream.qqmusic.qq.com/"+t.musicList[t.musicPlace].songid+".m4a?fromtag=46"}),a()(i,o.l,function(t){t.leftPopup=!t.leftPopup}),a()(i,o.m,function(t){t.playState=!1}),i)},function(t,n,e){"use strict";n.a={playlist:!1,dom:"",musicPlace:-1,musicList:[],playState:!1,currentTime:0,duration:0,isLoadingShow:!1,isShowPlayInfo:!1,leftPopup:!1}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,function(t,n,e){t.exports=e.p+"static/img/def-img.9aec4b8.jpg"},function(t,n,e){t.exports=e.p+"static/img/loading1.199860e.gif"},function(t,n,e){var i=e(0)(e(81),e(180),null,null,null);t.exports=i.exports},function(t,n,e){var i=e(0)(e(82),e(184),null,null,null);t.exports=i.exports},function(t,n,e){function i(t){e(149)}var s=e(0)(e(84),e(181),i,"data-v-2825319a",null);t.exports=s.exports},function(t,n,e){function i(t){e(159)}var s=e(0)(e(85),e(192),i,"data-v-ddf714de",null);t.exports=s.exports},function(t,n,e){function i(t){e(148)}var s=e(0)(e(86),e(179),i,null,null);t.exports=s.exports},function(t,n,e){function i(t){e(157)}var s=e(0)(e(88),e(190),i,"data-v-70cca5b8",null);t.exports=s.exports},function(t,n,e){function i(t){e(158)}var s=e(0)(e(89),e(191),i,"data-v-792797cc",null);t.exports=s.exports},function(t,n,e){function i(t){e(150)}var s=e(0)(e(90),e(182),i,"data-v-36c2cfe8",null);t.exports=s.exports},function(t,n,e){function i(t){e(156)}var s=e(0)(e(91),e(189),i,"data-v-5d6db14d",null);t.exports=s.exports},function(t,n,e){function i(t){e(155)}var s=e(0)(e(92),e(188),i,"data-v-5a5f6a5a",null);t.exports=s.exports},function(t,n,e){function i(t){e(153)}var s=e(0)(e(93),e(186),i,"data-v-4d3edf77",null);t.exports=s.exports},function(t,n,e){function i(t){e(152)}var s=e(0)(e(94),e(185),i,"data-v-4d2f29d9",null);t.exports=s.exports},function(t,n,e){function i(t){e(147)}var s=e(0)(e(95),e(178),i,null,null);t.exports=s.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toplist",style:t.backgroundUrl},[e("div",{staticClass:"goraking",style:"color:#fff"},[e("div",{staticClass:"positon",style:t.backgroundCor}),t._v(" "),e("div",{staticClass:"text-positon"},[e("i",{staticClass:"iconfont icon-fanhui",on:{click:t.back}}),t._v("\n      返回排行榜\n     ")])]),t._v(" "),e("ul",{staticClass:"gequlist",style:"color:#fff;"},[e("div",{staticClass:"opty"},[e("h1",{staticClass:"title-text",style:t.backgroundCor}),t._v(" "),e("p",[t._v("巅峰榜流行指数")])]),t._v(" "),t._l(t.toplist.list,function(n,i){return e("li",{style:t.backgroundCor,on:{click:function(e){t.sendMusic(n)}}},[e("h2",{staticClass:"xuhao"},[t._v(t._s(i+1))]),t._v(" "),e("div",{staticClass:"border"},[e("p",[t._v(t._s(n.name))]),t._v(" "),e("span",[t._v(t._s(n.singer))])])])})],2)])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",[t._v("\n  我是body\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"body-banner"},[e("v-banner"),t._v(" "),e("h1",[t._v("推荐")]),t._v(" "),e("ul",{staticClass:"recommended"},t._l(t.arr,function(n,i){return e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.sendMusic(n)}}},[e("img",{attrs:{src:n.img,alt:n.name}}),t._v(" "),e("p",{staticClass:"songName"},[t._v(t._s(n.name))]),t._v(" "),e("p",{staticClass:"singer"},[t._v(t._s(n.singer))])])])}))],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[t._v("\n  我叫播放器\n  "),e("span"),t._v(" "),e("mu-popup",{attrs:{position:"left",popupClass:"demo-popup-left",id:"left-pop",open:t.leftstate},on:{close:t.switchprop}},[e("div",{staticClass:"leftMuH"},[e("div",[t._v("播放列表("+t._s(t.total)+")首")]),t._v(" "),e("ul",t._l(t.getmusicList,function(n,i){return e("li",{class:{cur:t.getMusicPlace==i},on:{click:function(n){t.selectmusic(i)}}},[e("span",[t._v(t._s(i+1))]),t._v(" "),e("p",[t._v(t._s(n.name))]),t._v(" "),e("a",{on:{click:function(n){t.delmusic(i)}}},[t._v("删除")])])}))])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.arr,function(t,n){return e("swiper-slide",{key:t.id,attrs:{"data-swiper-autoplay":"3000"}},[e("a",{attrs:{href:t.linkUrl}},[e("img",{staticClass:"carousel",attrs:{src:t.picUrl}})])])}),t._v(" "),e("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"searchBox"},[e("div",{staticClass:"btnSearch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searcKey,expression:"searcKey"}],attrs:{type:"text",placeholder:"歌手/歌名/专辑/歌词"},domProps:{value:t.searcKey},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13))return null;t.search(t.searcKey)},input:function(n){n.target.composing||(t.searcKey=n.target.value)}}}),t._v(" "),e("i",{staticClass:"iconfont icon-sousuo btn-icon"})]),t._v(" "),e("transition",{attrs:{"enter-active-class":"animated bounceInUp"}},[t.hotListState?e("div",{staticClass:"block"},[e("h1",[t._v("热门")]),t._v(" "),e("ul",{staticClass:"hotlist"},t._l(t.arr,function(n,i){return e("li",{on:{click:function(e){t.search(n.k)}}},[t._v(t._s(n.k))])}))]):t._e()]),t._v(" "),e("transition",{attrs:{"enter-active-class":"animated bounceInUp"}},[t.searchListState?e("div",{staticClass:"searchListBox"},[e("i",{staticClass:"iconfont icon-fanhui",attrs:{id:"back"},on:{click:t.back}}),t._v(" "),e("ul",{staticClass:"searchList"},t._l(t.searchList,function(n,i){return e("li",{on:{click:function(e){t.sendMusic(n)}}},[e("div",[e("img",{attrs:{src:n.img,alt:""}})]),t._v(" "),e("div",[e("h1",[t._v(t._s(n.name))]),t._v(" "),e("p",[t._v(t._s(n.singer))])])])}))]):t._e()])],1)])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"rakingList"},t._l(t.list,function(n,i){return e("router-link",{key:n.id,staticClass:"raking",attrs:{tag:"li",to:{name:"toplist",params:{topid:n.id}}},on:{click:t.test}},[e("img",{staticClass:"rakingImg",attrs:{src:n.picUrl,alt:""}}),t._v(" "),e("div",{staticClass:"rakingBox"},[e("h1",{staticClass:"rakingTitle"},[t._v(t._s(n.topTitle))]),t._v(" "),t._l(n.songList,function(n,i){return e("p",[e("b",{staticClass:"rakingSongName"},[t._v(t._s(i+1)+"."+t._s(n.songname))]),t._v(" "),e("span",{staticClass:"rakingSingerName"},[t._v(" -"+t._s(n.singername))])])})],2)])}))},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-loading",{directives:[{name:"show",rawName:"v-show",value:t.isloading,expression:"isloading"}]}),t._v(" "),e("div",{staticClass:"box"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showHeader,expression:"showHeader"}],staticClass:"header"},[e("v-header")],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"nav"},[e("v-bar")],1),t._v(" "),e("div",{staticClass:"body"},[e("transition",{attrs:{"enter-active-class":"animated bounceInUp"}},[e("keep-alive",[e("router-view")],1)],1)],1),t._v(" "),e("div",{staticClass:"footer"},[e("v-footer")],1),t._v(" "),e("transition",{attrs:{"enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},[t.showplay?e("playinfo"):t._e()],1)],1),t._v(" "),e("audio",{ref:"audio",attrs:{src:"",autoplay:"autoplay"},on:{ended:t.playend,timeupdate:t.getcurrentTime,canplay:t.getDuration}})],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"palyinfo"},[e("div",{staticClass:"title"},[e("i",{staticClass:"iconfont icon-xia",attrs:{id:"back-icon"},on:{click:t.ShowPlayInfo}}),t._v(" "),e("div",{staticClass:"text-title"},[t._v(t._s(t.nowSong.name)+"----"+t._s(t.nowSong.singer))]),t._v(" "),e("i",{staticClass:"iconfont icon-liebiao liebiao",on:{click:t.switchprop}})]),t._v(" "),e("div",{staticClass:"lyrics"},[e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[e("swiper-slide",{attrs:{"data-swiper-autoplay":"3000"}},[e("div",{staticClass:"swiperBox",attrs:{id:"gequBox"}},[e("ul",{staticClass:"lyc"},t._l(t.lyric,function(n,i){return e("li",{class:{nowLyc:i<=parseInt(t.currentTime)}},[t._v("\n              "+t._s(n)+"\n             ")])}))])]),t._v(" "),e("swiper-slide",{attrs:{"data-swiper-autoplay":"3000"}},[e("div",{staticClass:"swiperBox"},[e("div",{ref:"imgBox",staticClass:"imgBox"},[e("img",{attrs:{src:t.songImg,alt:""}})])])]),t._v(" "),e("div",{staticClass:"swiper-pagination",slot:"pagination"})],1)],1),t._v(" "),e("div",{staticClass:"jindu"},[e("span",[t._v(t._s(t._f("date")(t.currentTime)))]),t._v(" "),e("mu-slider",{staticClass:"demo-slider progress",on:{change:t.moveChange},model:{value:t.jindu,callback:function(n){t.jindu=n},expression:"jindu"}}),t._v(" "),e("span",[t._v(t._s(t._f("date")(t.duration)))])],1),t._v(" "),e("div",{staticClass:"foot"},[e("i",{staticClass:"iconfont icon-icon-shangyishou",on:{click:t.beforemusic}}),t._v(" "),e("i",{class:{iconfont:!0,"icon-icon-bofang":!t.playState,"icon-icon-zanting":t.playState},on:{click:t.switchplay}}),t._v(" "),e("i",{staticClass:"iconfont icon-icon-xiayishou",on:{click:t.nextmusic}})])])},staticRenderFns:[]}},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"loading"},[i("img",{attrs:{src:e(164),alt:""}}),t._v(" "),i("p",[t._v("正在加载中...")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navBar"},[e("ul",[e("router-link",{attrs:{to:"/home",tag:"li","active-class":"targetNav"}},[t._v("推荐")]),t._v(" "),e("router-link",{attrs:{to:"/raking",tag:"li","active-class":"targetNav"}},[t._v("排行榜")]),t._v(" "),e("router-link",{attrs:{to:"/search",tag:"li","active-class":"targetNav"}},[t._v("搜索")])],1)])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[e("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutDown"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist,expression:"playlist"}],staticClass:"fixdBox"},[e("h1",[t._v("播放列表")]),t._v(" "),e("span",{on:{click:function(n){t.test()}}},[t._v("关闭")])])]),t._v(" "),e("ul",{staticClass:"palyBox"},[e("li",{staticClass:"left",on:{click:t.ShowPlayInfo}},[e("img",{ref:"imgBox",attrs:{src:t.songImg,width:"50px",alt:""}})]),t._v(" "),e("li",{staticClass:"center"},[e("span",[t._v(t._s(t.nowSong.name))]),t._v(" "),e("p",[t._v(t._s(t.nowSong.singer))])]),t._v(" "),e("li",{staticClass:"right"},[e("i",{class:{iconfont:!0,"icon-icon-bofang":!t.playState,"icon-icon-zanting":t.playState},on:{click:t.switchplay}}),t._v(" "),e("i",{staticClass:"iconfont icon-liebiao",on:{click:t.switchprop}})])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box"},[e("div",{staticClass:"header"},[e("i",{staticClass:"iconfont icon-bofang"}),t._v("\n\n    正在播放--"+t._s(t.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"bg-img"},[e("img",{attrs:{src:t.src,alt:""}})]),t._v(" "),e("div",{class:{c3:!0,donghua:!0},attrs:{id:"rallback"}},[e("img",{attrs:{src:t.src,alt:""}})])]),t._v(" "),e("div",{staticClass:"footer"},[e("span",{on:{click:function(n){t.playPause()}}},[t._v("暂停")]),t._v(" "),e("span",{on:{click:function(n){t.init()}}},[t._v("换一首")])]),t._v(" "),e("audio",{attrs:{id:"audio1",preload:"auto",autoplay:"autoplay",src:t.audio}})])},staticRenderFns:[]}}]),[101]);