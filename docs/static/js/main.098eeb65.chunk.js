(this.webpackJsonpssyatelandisi=this.webpackJsonpssyatelandisi||[]).push([[0],{119:function(t,e,n){},120:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(25),s=n.n(c),r=n(45),i=n(13),o=n(29),l=n(30),j=n(32),h=n(31),d=n(129),u=n(125),b=n(126),p=(n(56),n(6)),x=d.a.Header,O=d.a.Footer;function m(){return Object(p.jsx)(x,{style:{textAlign:"center",backgroundColor:"#blue"}})}function f(){var t=(new Date).getFullYear();return Object(p.jsxs)(O,{style:{textAlign:"center"},children:["\u6211\u68a6@",t]})}var v=d.a.Content,y=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={title:"React App"},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(v,{children:[Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{xs:24,children:Object(p.jsx)("div",{style:{textAlign:"center",margin:"1rem"},children:"\ud83d\udcc6\u7a0b\u5e8f\u5458\u5f53\u524d\u633a\u5fd9\uff0c\u6682\u672a\u5f00\u53d1\u5b8c\u6b64\u7a0b\u5e8f\u3002"})})}),Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{xs:24,children:Object(p.jsx)("div",{style:{textAlign:"center",margin:"1rem"},children:"\ud83d\udcc6The programmer is currently quite busy and has not finished developing this program yet."})})}),Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{xs:24,children:Object(p.jsx)("div",{style:{textAlign:"center",margin:"1rem"},children:"\ud83d\udcc6\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u306f\u73fe\u5728\u591a\u5fd9\u3067\u3001\u307e\u3060\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u958b\u767a\u3092\u7d42\u3048\u3066\u3044\u307e\u305b\u3093\u3002"})})}),Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{xs:24,children:Object(p.jsx)("div",{style:{textAlign:"center",margin:"1rem"},children:Object(p.jsx)(r.b,{to:{pathname:"/list/\u54c6\u5566A\u68a6",state:{referer:this.props.location.pathname}},replace:!0,children:"\u64ad\u653e \u54c6\u5566A\u68a6 \u5c1d\u5c1d\u9c9c"})})})})]}),Object(p.jsx)(f,{})]})}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),n}(a.Component),g=n(96),k=n(127),C=n(128),A=d.a.Content,w=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={title:a.props.match.params.name,list:"",data:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(A,{children:[Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(p.jsx)(k.b,{size:"large",bordered:!0,dataSource:this.state.data,renderItem:function(e){return Object(p.jsx)(k.b.Item,{children:Object(p.jsx)(r.b,{to:{pathname:"/player/".concat(e.name),state:{referer:t.props.location.pathname,name:e.name,url:"https://cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/".concat(e.url,".m3u8")}},children:e.name})})}})})}),Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(p.jsx)(C.a,{shape:"round",onClick:function(){return t.props.history.goBack()},children:"\u8fd4\u56de"})})})]}),Object(p.jsx)(f,{})]})}},{key:"componentWillMount",value:function(){var t=this;try{fetch("data.json").then((function(t){return t.json()})).then((function(e){var n,a=Object(g.a)(e);try{for(a.s();!(n=a.n()).done;){var c=n.value;c.name===t.props.match.params.name&&t.setState({list:c.name,data:c.list})}}catch(s){a.e(s)}finally{a.f()}}))}catch(e){}}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),n}(a.Component),D=n(95),M=d.a.Content,B=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={title:a.props.match.params.name,list:a.props.match.params.list,name:a.props.location.state.name,url:a.props.location.state.url},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(M,{children:Object(p.jsx)(u.a,{children:Object(p.jsxs)(b.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:22,offset:1},xxl:{span:12,offset:6},children:[Object(p.jsx)("div",{id:"player_box",children:Object(p.jsx)(D.a,{options:{hotkey:!0,airplay:!0,volume:1,playbackSpeed:[.5,.75,1,1.25,1.5],video:{url:this.state.url,type:"hls"}}})}),Object(p.jsx)(C.a,{shape:"round",onClick:function(){return t.props.history.goBack()},children:"\u8fd4\u56de"})]})})}),Object(p.jsx)(f,{})]})}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),n}(a.Component),I=d.a.Content,F=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={path:decodeURI(window.location.hash.slice(2))},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(I,{children:Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsxs)("h1",{children:["\ud83d\ude05404 - ",this.state.path]}),Object(p.jsx)(C.a,{shape:"round",onClick:function(){return t.props.history.goBack()},children:"\u8fd4\u56de"})]})}),Object(p.jsx)(f,{})]})}},{key:"componentDidMount",value:function(){document.title="\ud83d\ude05404 - Page"}}]),n}(a.Component),S=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={data:[1,2,3,4]},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{children:this.state.data.map((function(t,e){return Object(p.jsx)("li",{children:t},e)}))})})}}]),n}(a.Component);n(119);s.a.render(Object(p.jsx)(r.a,{children:Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{exact:!0,path:"/",component:y}),Object(p.jsx)(i.a,{exact:!0,path:"/list/:name",component:w}),Object(p.jsx)(i.a,{path:"/player/:name",component:B}),Object(p.jsx)(i.a,{path:"/test",component:S}),Object(p.jsx)(i.a,{path:"*",component:F})]})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.098eeb65.chunk.js.map