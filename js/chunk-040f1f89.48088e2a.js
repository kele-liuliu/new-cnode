(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-040f1f89"],{"0b4d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[n("div",[n("router-link",{attrs:{to:"/"}},[e._v("主页")]),e._v("/"),n("span",[e._v("新消息")])],1),e.message?n("span",{staticClass:"toread",on:{click:e.changeRead}},[e._v("全部标记为已读")]):e._e()]},proxy:!0},{key:"contentwarp",fn:function(){return e._l(e.NotReadMessage,(function(t){return n("div",{key:t.id,staticClass:"cell-message"},[n("router-link",{attrs:{to:{name:"User",params:{loginname:t.author.loginname}}}},[e._v(" "+e._s(t.author.loginname))]),e._v(" 回复了你的话题 "),n("router-link",{attrs:{to:{name:"Topic",params:{topicid:t.topic.id}}}},[e._v(e._s(t.topic.title))])],1)}))},proxy:!0}])}),n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[n("span",[e._v("过往信息")])]},proxy:!0},{key:"contentwarp",fn:function(){return e._l(e.HasReadMessages,(function(t){return n("div",{key:t.id,staticClass:"cell-message"},[n("router-link",{attrs:{to:{name:"User",params:{loginname:t.author.loginname}}}},[e._v(" "+e._s(t.author.loginname))]),e._v(" 回复了你的话题 "),n("router-link",{attrs:{to:{name:"Topic",params:{topicid:t.topic.id}}}},[e._v(e._s(t.topic.title))])],1)}))},proxy:!0}])})],1)},s=[],r=n("1da1"),o=(n("96cf"),n("89d7")),i={components:{Panel:o["a"]},data:function(){return{HasReadMessages:null,NotReadMessage:null}},computed:{islogin:function(){return sessionStorage.getItem("token")},message:function(){return this.$store.state.message}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.islogin,!n){t.next=9;break}return t.next=4,e.$axios.get("/messages?accesstoken=".concat(n));case 4:a=t.sent,console.log(a.data),e.HasReadMessages=a.data.has_read_messages,e.NotReadMessage=a.data.hasnot_read_messages,console.log(e.NotReadMessage);case 9:case"end":return t.stop()}}),t)})))()},methods:{changeRead:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.islogin,t.next=3,e.$axios.post("/message/mark_all",{accesstoken:n});case 3:a=t.sent,e.NotReadMessage="",e.$store.commit("clearMessage"),console.log(a.data);case 7:case"end":return t.stop()}}),t)})))()}}},c=i,u=(n("9599"),n("2877")),l=Object(u["a"])(c,a,s,!1,null,null,null);t["default"]=l.exports},9599:function(e,t,n){"use strict";n("e3c3")},e3c3:function(e,t,n){}}]);
//# sourceMappingURL=chunk-040f1f89.48088e2a.js.map