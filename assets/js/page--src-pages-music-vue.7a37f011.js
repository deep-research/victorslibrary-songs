(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{346:function(t,e,r){"use strict";var s=r(5),o=r(38),n=r(23),i=r(2),a=r(64),c=[],l=c.sort,u=i((function(){c.sort(void 0)})),d=i((function(){c.sort(null)})),f=a("sort");s({target:"Array",proto:!0,forced:u||!d||!f},{sort:function(t){return void 0===t?l.call(n(this)):l.call(n(this),o(t))}})},349:function(t,e,r){},350:function(t,e){},355:function(t,e,r){"use strict";var s=r(5),o=r(101).filter,n=r(65),i=r(39),a=n("filter"),c=i("filter");s({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},356:function(t,e,r){"use strict";var s=r(5),o=r(100).includes,n=r(176);s({target:"Array",proto:!0,forced:!r(39)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},357:function(t,e,r){"use strict";var s=r(5),o=r(40),n=[].reverse,i=[1,2];s({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),n.call(this)}})},358:function(t,e,r){var s=r(5),o=r(359).entries;s({target:"Object",stat:!0},{entries:function(t){return o(t)}})},359:function(t,e,r){var s=r(11),o=r(102),n=r(25),i=r(99).f,a=function(t){return function(e){for(var r,a=n(e),c=o(a),l=c.length,u=0,d=[];l>u;)r=c[u++],s&&!i.call(a,r)||d.push(t?[r,a[r]]:a[r]);return d}};t.exports={entries:a(!0),values:a(!1)}},360:function(t,e,r){"use strict";var s=r(5),o=r(103),n=r(13);s({target:"String",proto:!0,forced:!r(104)("includes")},{includes:function(t){return!!~String(n(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},361:function(t,e,r){"use strict";var s=r(349);r.n(s).a},362:function(t,e,r){"use strict";var s=r(350),o=r.n(s);e.default=o.a},366:function(t,e,r){"use strict";r.r(e);r(355),r(356),r(98),r(357),r(346),r(358),r(33),r(360),r(175),r(66);var s=r(97),o={mixins:[r(135).mixin],metaInfo:{title:"Music"},methods:{fetchData:function(){var t=this;this.$page.songs.edges.map((function(e){var r=e.node;r.videos.length>0?r.hasVideo=!0:r.hasVideo=!1,r.recordings.length>0?(r.recordingtype="Demos",r.recordings.map((function(t){t.multitrack&&(r.recordingtype="Recordings")}))):0==r.recordings.length&&0==r.hasVideo&&(r.recordingtype="Drafts"),t.songData.push(r),t.songData.sort((function(t,e){return t.title.localeCompare(e.title)}))}))},reverse:function(){this.isReversed=!this.isReversed},clearSearch:function(){this.search=""},resetData:function(){Object.assign(this.$data,this.$options.data.call(this)),this.fetchData()},dropdown_closed:function(){this.dropdown_open=!1}},data:function(){return{isReversed:!1,songData:[],filterData:[],filters:{recordingtype:"All Songs"},search:"",dropdown_open:!1,mobile_open:!1}},created:function(){this.fetchData()},mounted:function(){sessionStorage.isReversed&&("true"==sessionStorage.isReversed?this.isReversed=!0:"false"==sessionStorage.isReversed&&(this.isReversed=!1)),sessionStorage.search&&(this.search=sessionStorage.search),sessionStorage.filters&&(this.filters=JSON.parse(sessionStorage.filters))},watch:{isReversed:function(t){sessionStorage.isReversed=t},search:function(t){sessionStorage.search=t},filters:{handler:function(t){sessionStorage.filters=JSON.stringify(t)},deep:!0}},computed:{createFilter:function(){for(var t=this,e=this.songData,r=function(){var t=Object(s.a)(n[o],2),r=t[0],i=t[1];if(i.startsWith("All"))return"break";e="Videos"==i?e.filter((function(t){return 1==t.hasVideo})):e.filter((function(t){return t[r]==i}))},o=0,n=Object.entries(this.filters);o<n.length;o++){if("break"===r())break}e=e.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}));var i=1;return e.map((function(t){t.count=i,i+=1})),this.isReversed&&e.reverse(),this.filterData=e,this.filterData}}},n=(r(361),r(24)),i=r(362),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{bind:t.createFilter}},[r("h1",{staticClass:"mb-1 tracking-wider font-semibold text-3xl"},[t._v("Reenchantment")]),r("p",{staticClass:"font-bold mb-2 text-purple-600 text-lg tracking-wide"},[t._v("Music as a Spiritual Practice")]),r("p",{staticClass:"font-semibold"},[t._v("By Victor Fisher")]),r("div",[r("div",{staticClass:"block md:inline"},[r("button",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.dropdown_closed,expression:"dropdown_closed"}],staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mb-2 md:mb-0 md:mr-4",attrs:{type:"button"},on:{click:function(e){t.dropdown_open=!t.dropdown_open}}},[r("span",[t._v(t._s(t.filters.recordingtype))]),r("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform -mt-1",class:{"rotate-180":t.dropdown_open,"rotate-0":!t.dropdown_open},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),r("transition",{attrs:{"enter-active-class":"transition duration-100 ease-out","leave-active-class":"transition duration-75 ease-in","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[t.dropdown_open?r("div",{staticClass:"w-full md:w-auto relative md:absolute md:mt-2 mb-5 origin-top-right rounded-md shadow-lg w-48 z-40"},[r("div",{staticClass:"px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"},[r("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="All Songs",t.dropdown_open=!1}}},[t._v("All Songs")]),r("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Recordings",t.dropdown_open=!1}}},[t._v("Recordings")]),r("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Demos",t.dropdown_open=!1}}},[t._v("Demos")]),r("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Drafts",t.dropdown_open=!1}}},[t._v("Drafts")]),r("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Videos",t.dropdown_open=!1}}},[t._v("Videos")])])]):t._e()])],1),r("button",{staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mt-4 md:mt-0 mb-2 md:mb-0 md:mr-4",attrs:{type:"button"},on:{click:t.reverse}},[t._v("Reverse")]),r("button",{staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mt-4 md:mt-0",attrs:{type:"button"},on:{click:t.resetData}},[t._v("Refresh")])]),r("div",{staticClass:"mb-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"field ~neutral !normal my-4",attrs:{id:"search",placeholder:"Search",type:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t.filterData.length>0?r("h3",[t._v("Results: "+t._s(t.filterData.length))]):r("h3",[t._v("No results.")]),t._l(t.filterData,(function(e,s){return r("div",{key:s},[r("h2",[r("span",[t._v(t._s(e.count)+". ")]),r("g-link",{staticClass:"no-underline hover:underline",attrs:{to:"/music/"+e.slug}},[t._v("\n      "+t._s(e.title)+"\n      ")])],1)])}))],2)}),[],!1,null,null,null);"function"==typeof i.default&&Object(i.default)(a);e.default=a.exports}}]);