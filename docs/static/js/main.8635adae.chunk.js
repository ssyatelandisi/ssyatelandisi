(this.webpackJsonpssyatelandisi=this.webpackJsonpssyatelandisi||[]).push([[0],{103:function(e,t,n){"use strict";(function(e){var a=n(73),s=n(20),r=n(21),i=n(23),c=n(22),l=n(35),o=n(74),u=n(75),h=n(76),j=n(60),d=n(18),b=n(34),m=(n(61),n(0)),p=n(1),f=l.a.Content,x=function(t){Object(i.a)(m,t);var n=Object(c.a)(m);function m(e){var t;return Object(s.a)(this,m),(t=n.call(this,e)).state={title:t.props.match.params.name,list:"",data:[]},t}return Object(r.a)(m,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(l.a,{children:[Object(p.jsx)(d.b,{}),Object(p.jsxs)(f,{children:[Object(p.jsx)(o.a,{children:Object(p.jsx)(u.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(p.jsx)(h.b,{size:"large",bordered:!0,dataSource:this.state.data,renderItem:function(t){return Object(p.jsx)(h.b.Item,{children:Object(p.jsx)(b.b,{to:{pathname:"/player/".concat(t.name),state:{referer:e.props.location.pathname,name:t.name,url:t.url,subtitle:t.subtitle,type:"auto"}},children:t.name})})}})})}),Object(p.jsx)(o.a,{children:Object(p.jsx)(u.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(p.jsx)(j.a,{shape:"round",onClick:function(){return e.props.history.goBack()},children:"\u8fd4\u56de"})})})]}),Object(p.jsx)(d.a,{})]})}},{key:"UNSAFE_componentWillMount",value:function(){var t=this;try{fetch("data.json").then((function(e){return e.json()})).then((function(n){var s,r=Object(a.a)(n);try{for(r.s();!(s=r.n()).done;){var i=s.value;if(i.name===new e.from(t.props.match.params.name).toString("base64")){var c=i.list.map((function(t){return{name:new e.from(t.name,"base64").toString(),url:"//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/".concat(t.url,".m3u8"),subtitle:void 0!==t.subtitle?"//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/".concat(t.subtitle,".vtt"):""}}));t.setState({data:c})}}}catch(l){r.e(l)}finally{r.f()}}))}catch(n){}}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),m}(m.Component);t.a=x}).call(this,n(46).Buffer)},104:function(e,t,n){"use strict";(function(e){var a=n(20),s=n(21),r=n(23),i=n(22),c=n(0),l=n(35),o=n(60),u=n(34),h=n(18),j=n(1),d=l.a.Content,b=function(t){Object(r.a)(c,t);var n=Object(i.a)(c);function c(e){var t;return Object(a.a)(this,c),(t=n.call(this,e)).state={name:"\u64ad\u653e\u5668",url:"",subtitle:"",base64:""},t}return Object(s.a)(c,[{key:"handleUrlChange",value:function(t){var n=this,a=t.target.value.replace(/-/g,"+").replace(/_/g,"/").split("."),s=new e.from(a[0],"base64"),r=s.length;if(this.setState({url:new e.from(s.map((function(e,t){return e^(r-t+175)%255}))).toString()}),a.length>1){var i=new e.from(a[1],"base64"),c=a[1].length;fetch(new e.from(i.map((function(e,t){return e^(c-t+175)%255}))).toString()).then((function(e){return e.text()})).then((function(e){n.setState({subtitle:URL.createObjectURL(new Blob([e],{type:"text/vtt"}))})}))}console.clear(),console.log(this.state.url)}},{key:"handleBase64Change",value:function(t){var n=t.target.value.length,a=new e.from(t.target.value).map((function(e,t){return e^(n-t+175)%255}));this.setState({base64:new e.from(a).toString("base64").replace(/=+/g,"").replace(/\+/g,"-").replace(/\//g,"_"),url:t.target.value})}},{key:"handleSubtitleChange",value:function(e){sessionStorage.setItem("subtitle",e.target.value)}},{key:"handleM3u8Change",value:function(e){sessionStorage.setItem("m3u8",e.target.value)}},{key:"generateSubtitle",value:function(e){if(sessionStorage.getItem("subtitle")){var t=new Blob([sessionStorage.getItem("subtitle")],{type:"text/vtt;charset=utf-8"});this.setState({subtitle:URL.createObjectURL(t)})}}},{key:"generateM3u8",value:function(e){if(sessionStorage.getItem("m3u8")){var t=new Blob([sessionStorage.getItem("m3u8")],{type:"application/vnd.apple.mpegurl"});this.setState({url:URL.createObjectURL(t)})}this.generateSubtitle()}},{key:"render",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(h.b,{}),Object(j.jsxs)(d,{children:[Object(j.jsx)("div",{style:{marginLeft:"1rem"},children:Object(j.jsx)("label",{htmlFor:"url",children:"\u64ad\u653e\u5730\u5740\uff1a"})}),Object(j.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"url",id:"url",onChange:function(t){return e.handleUrlChange(t)},placeholder:"\u5df2\u7ecf\u52a0\u5bc6\u7684\u5730\u5740"}),Object(j.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"subtitle",id:"subtitle",onChange:function(t){return e.handleSubtitleChange(t)},placeholder:"\u53ef\u9009\uff0cvtt\u5b57\u5e55\u5185\u5bb9"}),Object(j.jsx)("div",{children:Object(j.jsx)(o.a,{type:"dashed",style:{marginLeft:"1rem"},onClick:function(t){return e.generateSubtitle(t)},children:"\u6dfb\u52a0\u5b57\u5e55"})}),Object(j.jsx)(u.b,{to:{pathname:"/player/".concat(this.state.name),state:{referer:this.props.location.pathname,name:this.state.name,url:this.state.url,subtitle:this.state.subtitle,type:"auto"}},children:Object(j.jsx)(o.a,{type:"primary",style:{marginLeft:"1rem"},children:"\u786e\u8ba4"})}),Object(j.jsx)("hr",{}),Object(j.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"base64",id:"base64",onChange:function(t){return e.handleBase64Change(t)},placeholder:"\u9700\u8981\u52a0\u5bc6\u7684\u5185\u5bb9"}),Object(j.jsx)("div",{style:{margin:"1rem",wordBreak:"break-all"},children:Object(j.jsx)("code",{children:this.state.base64})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:{margin:"1rem",wordBreak:"break-all"},children:Object(j.jsxs)(u.b,{to:{pathname:"/iplayer/".concat(this.state.base64)},children:[window.location.origin,window.location.pathname,"#/iplayer/",this.state.base64]})}),Object(j.jsx)("hr",{}),Object(j.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"m3u8",onChange:function(t){return e.handleM3u8Change(t)},placeholder:"m3u8\u5185\u5bb9"}),Object(j.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"subtitle",onChange:function(t){return e.handleSubtitleChange(t)},placeholder:"\u53ef\u9009\uff0cvtt\u5b57\u5e55\u5185\u5bb9"}),Object(j.jsx)("div",{children:Object(j.jsx)(o.a,{type:"dashed",style:{marginLeft:"1rem"},onClick:function(t){return e.generateM3u8(t)},children:"\u786e\u8ba4\u8f93\u5165"})}),Object(j.jsx)(u.b,{to:{pathname:"/player/".concat(this.state.name),state:{referer:this.props.location.pathname,name:this.state.name,url:this.state.url,subtitle:this.state.subtitle,type:"hls"}},children:Object(j.jsx)(o.a,{type:"primary",style:{marginLeft:"1rem"},children:"\u64ad\u653e"})})]}),Object(j.jsx)(h.a,{})]})})}}]),c}(c.Component);t.a=b}).call(this,n(46).Buffer)},105:function(e,t,n){"use strict";(function(e){var a=n(20),s=n(21),r=n(23),i=n(22),c=n(35),l=n(74),o=n(75),u=n(18),h=n(0),j=(n(89),n(53)),d=n(1),b=c.a.Content,m=function(t){Object(r.a)(h,t);var n=Object(i.a)(h);function h(t){var s;Object(a.a)(this,h);var r=(s=n.call(this,t)).props.match.params.encdata.replace(/-/g,"+").replace(/_/g,"/").split("."),i=new e.from(r[0],"base64"),c=i.length,l=new e.from(i.map((function(e,t){return e^(c-t+175)%255}))).toString(),o="";if(r.length>1){var u=new e.from(r[1],"base64"),j=u.length;o=new e.from(u.map((function(e,t){return e^(j-t+175)%255}))).toString()}return s.state={title:"\u64ad\u653e\u5668",name:"\u64ad\u653e\u5668",url:l,subtitle:o||""},s}return Object(s.a)(h,[{key:"render",value:function(){return console.log(this.state.url),Object(d.jsxs)(c.a,{children:[Object(d.jsx)(u.b,{}),Object(d.jsx)(b,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(o.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:22,offset:1},xxl:{span:12,offset:6},children:[Object(d.jsx)("div",{id:"player_box",children:Object(d.jsx)(j.a,{options:{volume:1,screenshot:!0,video:{url:this.state.url,type:"auto"},subtitle:{url:this.state.subtitle,fontSize:"25px",bottom:"2%",color:"#fff"},contextmenu:[]}})}),Object(d.jsx)("div",{children:this.state.name})]})})}),Object(d.jsx)(u.a,{})]})}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),h}(h.Component);t.a=m}).call(this,n(46).Buffer)},106:function(e,t,n){"use strict";(function(e){var a=n(20),s=n(21),r=n(23),i=n(22),c=n(0),l=n(1),o=function(t){Object(r.a)(c,t);var n=Object(i.a)(c);function c(e){var t;return Object(a.a)(this,c),(t=n.call(this,e)).state={link:"",username:"",start:"",end:""},t}return Object(s.a)(c,[{key:"generate",value:function(){var t={name:this.state.username,start:this.state.start,end:this.state.end},n=new e.from(JSON.stringify(t),"utf-8").map((function(e){return 154^e})),a=new e.from(n).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");this.setState({link:"".concat(window.location.origin).concat(window.location.pathname,"#/?s=").concat(a)})}},{key:"handleNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleStartChange",value:function(e){this.setState({start:e.target.value})}},{key:"handleEndChange",value:function(e){this.setState({end:e.target.value})}},{key:"render",value:function(){var e=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{marginLeft:"1rem"},children:Object(l.jsx)("label",{htmlFor:"name",children:"\u540d\u79f0"})}),Object(l.jsx)("input",{style:{marginLeft:"1rem"},type:"text",name:"name",id:"name",onChange:function(t){return e.handleNameChange(t)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{marginLeft:"1rem"},children:Object(l.jsx)("label",{htmlFor:"start",children:"\u5f00\u59cb\u65f6\u95f4"})}),Object(l.jsx)("input",{style:{marginLeft:"1rem"},type:"text",name:"start",id:"start",onChange:function(t){return e.handleStartChange(t)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{marginLeft:"1rem"},children:Object(l.jsx)("label",{htmlFor:"end",children:"\u7ed3\u675f\u65f6\u95f4"})}),Object(l.jsx)("input",{style:{marginLeft:"1rem"},type:"text",name:"end",id:"end",onChange:function(t){return e.handleEndChange(t)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{style:{marginLeft:"1rem"},onClick:function(t){return e.generate(t)},children:"\u786e\u8ba4"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{padding:"0 1rem"},children:Object(l.jsx)("textarea",{style:{minWidth:"100%"},rows:"7",value:this.state.link})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:this.state.link,children:this.state.link})})]})}}]),c}(c.Component);t.a=o}).call(this,n(46).Buffer)},119:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(30),r=n.n(s),i=n(34),c=n(13),l=n(90),o=n(103),u=n(20),h=n(21),j=n(23),d=n(22),b=n(35),m=n(74),p=n(75),f=n(60),x=n(18),O=(n(89),n(53)),g=n(1),v=b.a.Content,y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={title:a.props.match.params.name,list:a.props.match.params.list,name:a.props.location.state.name,url:a.props.location.state.url,subtitle:a.props.location.state.subtitle,type:a.props.location.state.type},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(x.b,{}),Object(g.jsx)(v,{children:Object(g.jsx)(m.a,{children:Object(g.jsxs)(p.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:22,offset:1},xxl:{span:12,offset:6},children:[Object(g.jsx)("div",{id:"player_box",children:Object(g.jsx)(O.a,{options:{volume:1,screenshot:!0,video:{url:this.state.url,type:this.state.type},subtitle:{url:this.state.subtitle,fontSize:"25px",bottom:"2%",color:"#fff"},contextmenu:[]}})}),Object(g.jsx)("div",{children:this.state.name}),Object(g.jsx)("div",{children:Object(g.jsx)(f.a,{shape:"round",onClick:function(){return e.props.history.goBack()},children:"\u8fd4\u56de"})})]})})}),Object(g.jsx)(x.a,{})]})}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),n}(a.Component),w=(n(61),b.a.Content),k=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={path:decodeURI(window.location.hash.slice(2))},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(x.b,{}),Object(g.jsx)(w,{children:Object(g.jsxs)("div",{style:{textAlign:"center"},children:[Object(g.jsxs)("h1",{children:["\ud83d\ude05404 - ",this.state.path]}),Object(g.jsx)(f.a,{shape:"round",onClick:function(){return e.props.history.goBack()},children:"\u8fd4\u56de"})]})}),Object(g.jsx)(x.a,{})]})}},{key:"componentDidMount",value:function(){document.title="\ud83d\ude05404 - Page"}}]),n}(a.Component),S=n(104),C=n(105),L=n(106);n(137);r.a.render(Object(g.jsx)(i.a,{children:Object(g.jsxs)(c.c,{children:[Object(g.jsx)(c.a,{exact:!0,path:"/",component:l.a}),Object(g.jsx)(c.a,{exact:!0,path:"/list/:name",component:o.a}),Object(g.jsx)(c.a,{path:"/player/:name",component:y}),Object(g.jsx)(c.a,{path:"/input",component:S.a}),Object(g.jsx)(c.a,{path:"/iplayer/:encdata",component:C.a}),Object(g.jsx)(c.a,{path:"/test",component:L.a}),Object(g.jsx)(c.a,{path:"*",component:k})]})}),document.getElementById("root"))},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n(35),s=(n(61),n(1)),r=a.a.Header,i=a.a.Footer;function c(){return Object(s.jsx)(r,{style:{textAlign:"center"},children:Object(s.jsx)("img",{src:"logo.svg",alt:"Logo",width:"60px",height:"60px"})})}function l(){var e=(new Date).getFullYear();return Object(s.jsxs)(i,{style:{textAlign:"center"},children:["\u6211\u68a6@",e]})}},89:function(e,t,n){},90:function(e,t,n){"use strict";(function(e){var a=n(73),s=n(20),r=n(21),i=n(23),c=n(22),l=n(35),o=n(74),u=n(75),h=n(76),j=n(18),d=n(34),b=(n(61),n(0)),m=n(93),p=n(1),f=l.a.Content,x=function(t){Object(i.a)(b,t);var n=Object(c.a)(b);function b(e){var t;return Object(s.a)(this,b),(t=n.call(this,e)).state={title:"React App",data:[],duanwu:!0,specialDay_data:new URLSearchParams(t.props.location.search.substring(1)).get("s")},t}return Object(r.a)(b,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(l.a,{children:[Object(p.jsx)(j.b,{}),Object(p.jsx)(f,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(u.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(p.jsx)(h.b,{size:"large",bordered:!0,dataSource:this.state.data,renderItem:function(t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(h.b.Item,{children:Object(p.jsxs)(d.b,{to:{pathname:"/list/".concat(t),state:{referer:e.props.location.pathname,name:t.name,url:t.url,subtitle:t.subtitle}},children:["\u67e5\u770b ",t]})})})}})})})}),Object(p.jsx)(j.a,{}),Object(p.jsx)(m.a,{data:this.state.specialDay_data})]})}},{key:"componentDidMount",value:function(){var t=this;document.title=this.state.title,fetch("data.json").then((function(e){return e.json()})).then((function(n){var s,r=[],i=Object(a.a)(n);try{for(i.s();!(s=i.n()).done;){var c=s.value;r.push(new e.from(c.name,"base64").toString())}}catch(l){i.e(l)}finally{i.f()}t.setState({data:r})}))}}]),b}(b.Component);t.a=x}).call(this,n(46).Buffer)},93:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h}));var a=n(20),s=n(21),r=n(23),i=n(22),c=n(0),l=(n(119),n(53)),o=n(142),u=n(1),h=function(t){Object(r.a)(c,t);var n=Object(i.a)(c);function c(t){var s;Object(a.a)(this,c),s=n.call(this,t);var r=!1;try{var i=s.props.data.replace(/-/g,"+").replace(/_/g,"/"),l=new e.from(i,"base64").map((function(e){return 154^e})),o=JSON.parse(new e.from(l).toString("utf-8")),u=new Date;u>=new Date(o.start)&&u<new Date(o.end)&&(r=o.name)}catch(h){}return s.state={specialday:!1!==r,json_obj:null,userName:!1!==r?r:null},s}return Object(s.a)(c,[{key:"render",value:function(){return this.state.specialday?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"specialday",children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:this.state.userName}),Object(u.jsx)("h1",{style:{textAlign:"center"},children:"\u751f\u65e5\u5feb\u4e50"}),Object(u.jsx)("div",{style:{width:"65px",height:"85px",margin:"0 auto"},children:Object(u.jsxs)("div",{className:"breeding-rhombus-spinner",children:[Object(u.jsx)("div",{className:"rhombus child-1"}),Object(u.jsx)("div",{className:"rhombus child-2"}),Object(u.jsx)("div",{className:"rhombus child-3"}),Object(u.jsx)("div",{className:"rhombus child-4"}),Object(u.jsx)("div",{className:"rhombus child-5"}),Object(u.jsx)("div",{className:"rhombus child-6"}),Object(u.jsx)("div",{className:"rhombus child-7"}),Object(u.jsx)("div",{className:"rhombus child-8"}),Object(u.jsx)("div",{className:"rhombus big"})]})}),Object(u.jsx)(l.a,{options:{autoplay:!0,volume:1,hotkey:!1,video:{url:"https://cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/public/Happybirthday.mp4"}}}),Object(u.jsx)(o.a,{id:"close",style:{fontSize:"24px"},onClick:this.hide.bind(this)}),Object(u.jsxs)("div",{style:{textAlign:"center",paddingTop:"10px",paddingBottom:"10px"},children:["\u957f\u79c0\u53d1\uff0c\u6da8\u85aa\u8d44",Object(u.jsx)("br",{}),"\u4e0d\u957f\u5c81\u6708\u4e0d\u957f\u8198"]})]})}):Object(u.jsx)(u.Fragment,{})}},{key:"hide",value:function(){this.setState({specialday:!1})}}]),c}(c.Component)}).call(this,n(46).Buffer)}},[[138,1,2]]]);