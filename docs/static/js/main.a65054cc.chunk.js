(this.webpackJsonpssyatelandisi=this.webpackJsonpssyatelandisi||[]).push([[0],{102:function(t,e,n){"use strict";(function(t){var a=n(72),s=n(22),r=n(23),c=n(25),i=n(24),l=n(41),o=n(82),u=n(83),j=n(73),h=n(84),d=n(21),b=n(39),m=(n(59),n(0)),f=n(1),p=l.a.Content,x=function(e){Object(c.a)(m,e);var n=Object(i.a)(m);function m(t){var e;return Object(s.a)(this,m),(e=n.call(this,t)).state={title:e.props.match.params.name,list:"",data:[]},e}return Object(r.a)(m,[{key:"render",value:function(){var t=this;return Object(f.jsxs)(l.a,{children:[Object(f.jsx)(d.b,{}),Object(f.jsxs)(p,{children:[Object(f.jsx)(o.a,{children:Object(f.jsx)(u.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(f.jsx)(j.b,{size:"large",bordered:!0,dataSource:this.state.data,renderItem:function(e){return Object(f.jsx)(j.b.Item,{children:Object(f.jsx)(b.b,{to:{pathname:"/player/".concat(e.name),state:{referer:t.props.location.pathname,name:e.name,url:e.url,subtitle:e.subtitle}},children:e.name})})}})})}),Object(f.jsx)(o.a,{children:Object(f.jsx)(u.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(f.jsx)(h.a,{shape:"round",onClick:function(){return t.props.history.goBack()},children:"\u8fd4\u56de"})})})]}),Object(f.jsx)(d.a,{})]})}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;try{fetch("data.json").then((function(t){return t.json()})).then((function(n){var s,r=Object(a.a)(n);try{for(r.s();!(s=r.n()).done;){var c=s.value;if(c.name===new t.from(e.props.match.params.name).toString("base64")){var i=c.list.map((function(e){return{name:new t.from(e.name,"base64").toString(),url:"//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/".concat(e.url,".m3u8"),subtitle:void 0!==e.subtitle?"//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/".concat(e.subtitle,".vtt"):""}}));e.setState({data:i})}}}catch(l){r.e(l)}finally{r.f()}}))}catch(n){}}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),m}(m.Component);e.a=x}).call(this,n(53).Buffer)},103:function(t,e,n){"use strict";(function(t){var a=n(22),s=n(23),r=n(25),c=n(24),i=n(0),l=n(41),o=n(84),u=n(39),j=n(21),h=n(1),d=l.a.Content,b=function(e){Object(r.a)(i,e);var n=Object(c.a)(i);function i(t){var e;return Object(a.a)(this,i),(e=n.call(this,t)).state={name:"\u64ad\u653e\u5668",url:"",subtitle:"",base64:""},e}return Object(s.a)(i,[{key:"handleUrlChange",value:function(e){var n=this,a=e.target.value.replace(/-/g,"+").replace(/_/g,"/").split("|"),s=new t.from(a[0],"base64").map((function(t,e){return t^(e+175)%255}));if(this.setState({url:new t.from(s).toString()}),2===a.length){var r=new t.from(a[1],"base64").map((function(t,e){return t^(e+175)%255}));fetch(new t.from(r).toString()).then((function(t){return t.text()})).then((function(t){n.setState({subtitle:URL.createObjectURL(new Blob([t],{type:"text/vtt"}))})}))}console.clear(),console.log(this.state.url)}},{key:"handleBase64Change",value:function(e){var n=new t.from(e.target.value).map((function(t,e){return t^(e+175)%255}));this.setState({base64:new t.from(n).toString("base64").replace(/=+/g,"").replace(/\+/g,"-").replace(/\//g,"_")})}},{key:"handleSubtitleChange",value:function(t){sessionStorage.setItem("subtitle",t.target.value)}},{key:"generateSubtitle",value:function(t){if(sessionStorage.getItem("subtitle")){var e=new Blob([sessionStorage.getItem("subtitle")],{type:"text/vtt"});this.setState({subtitle:URL.createObjectURL(e)})}}},{key:"render",value:function(){var t=this;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(j.b,{}),Object(h.jsxs)(d,{children:[Object(h.jsx)("div",{style:{marginLeft:"1rem"},children:Object(h.jsx)("label",{htmlFor:"name",children:"\u64ad\u653e\u5730\u5740\uff1a"})}),Object(h.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"url",id:"url",onChange:function(e){return t.handleUrlChange(e)},placeholder:"\u5df2\u7ecf\u52a0\u5bc6\u7684\u5730\u5740"}),Object(h.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"subtitle",id:"subtitle",onChange:function(e){return t.handleSubtitleChange(e)},placeholder:"\u53ef\u9009\uff0cvtt\u5b57\u5e55\u5185\u5bb9"}),Object(h.jsx)("div",{children:Object(h.jsx)(o.a,{type:"dashed",style:{marginLeft:"1rem"},onClick:function(e){return t.generateSubtitle(e)},children:"\u6dfb\u52a0\u5b57\u5e55"})}),Object(h.jsx)(u.b,{to:{pathname:"/player/".concat(this.state.name),state:{referer:this.props.location.pathname,name:this.state.name,url:this.state.url,subtitle:this.state.subtitle}},children:Object(h.jsx)(o.a,{type:"primary",style:{marginLeft:"1rem"},children:"\u786e\u8ba4"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("textarea",{style:{padding:".3rem",width:"calc(100% - 2rem)",marginLeft:"1rem"},rows:"5",type:"text",name:"base64",id:"base64",onChange:function(e){return t.handleBase64Change(e)},placeholder:"\u9700\u8981\u52a0\u5bc6\u7684\u5185\u5bb9"}),Object(h.jsx)("div",{style:{margin:"1rem",wordBreak:"break-all"},children:Object(h.jsx)("code",{children:this.state.base64})})]}),Object(h.jsx)(j.a,{})]})})}}]),i}(i.Component);e.a=b}).call(this,n(53).Buffer)},104:function(t,e,n){"use strict";(function(t){var a=n(22),s=n(23),r=n(25),c=n(24),i=n(0),l=n(1),o=function(e){Object(r.a)(i,e);var n=Object(c.a)(i);function i(t){var e;return Object(a.a)(this,i),(e=n.call(this,t)).state={link:"",username:"",start:"",end:""},e}return Object(s.a)(i,[{key:"generate",value:function(){var e={name:this.state.username,start:this.state.start,end:this.state.end},n=new t.from(JSON.stringify(e),"utf-8").map((function(t){return 154^t})),a=new t.from(n).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");this.setState({link:"".concat(window.location.origin).concat(window.location.pathname,"#/?s=").concat(a)})}},{key:"handleNameChange",value:function(t){this.setState({username:t.target.value})}},{key:"handleStartChange",value:function(t){this.setState({start:t.target.value})}},{key:"handleEndChange",value:function(t){this.setState({end:t.target.value})}},{key:"render",value:function(){var t=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{marginLeft:"1rem"},children:Object(l.jsx)("label",{htmlFor:"name",children:"\u540d\u79f0"})}),Object(l.jsx)("input",{style:{marginLeft:"1rem"},type:"text",name:"name",id:"name",onChange:function(e){return t.handleNameChange(e)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{marginLeft:"1rem"},children:Object(l.jsx)("label",{htmlFor:"start",children:"\u5f00\u59cb\u65f6\u95f4"})}),Object(l.jsx)("input",{style:{marginLeft:"1rem"},type:"text",name:"start",id:"start",onChange:function(e){return t.handleStartChange(e)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{marginLeft:"1rem"},children:Object(l.jsx)("label",{htmlFor:"end",children:"\u7ed3\u675f\u65f6\u95f4"})}),Object(l.jsx)("input",{style:{marginLeft:"1rem"},type:"text",name:"end",id:"end",onChange:function(e){return t.handleEndChange(e)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{style:{marginLeft:"1rem"},onClick:function(e){return t.generate(e)},children:"\u786e\u8ba4"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{padding:"0 1rem"},children:Object(l.jsx)("textarea",{style:{minWidth:"100%"},rows:"7",value:this.state.link})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:this.state.link,children:this.state.link})})]})}}]),i}(i.Component);e.a=o}).call(this,n(53).Buffer)},117:function(t,e,n){},135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(30),r=n.n(s),c=n(39),i=n(13),l=n(89),o=n(102),u=n(22),j=n(23),h=n(25),d=n(24),b=n(41),m=n(82),f=n(83),p=n(84),x=n(21),O=(n(135),n(71)),v=n(1),g=b.a.Content,y=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={title:a.props.match.params.name,list:a.props.match.params.list,name:a.props.location.state.name,url:a.props.location.state.url,subtitle:a.props.location.state.subtitle},a}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(x.b,{}),Object(v.jsx)(g,{children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(f.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:22,offset:1},xxl:{span:12,offset:6},children:[Object(v.jsx)("div",{id:"player_box",children:Object(v.jsx)(O.a,{options:{volume:1,screenshot:!0,video:{url:this.state.url,type:"auto"},subtitle:{url:this.state.subtitle,fontSize:"25px",bottom:"2%",color:"#fff"},contextmenu:[]}})}),Object(v.jsx)("div",{children:this.props.location.state.name}),Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{shape:"round",onClick:function(){return t.props.history.goBack()},children:"\u8fd4\u56de"})})]})})}),Object(v.jsx)(x.a,{})]})}},{key:"componentDidMount",value:function(){document.title=this.state.title}}]),n}(a.Component),k=(n(59),b.a.Content),w=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={path:decodeURI(window.location.hash.slice(2))},a}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(x.b,{}),Object(v.jsx)(k,{children:Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsxs)("h1",{children:["\ud83d\ude05404 - ",this.state.path]}),Object(v.jsx)(p.a,{shape:"round",onClick:function(){return t.props.history.goBack()},children:"\u8fd4\u56de"})]})}),Object(v.jsx)(x.a,{})]})}},{key:"componentDidMount",value:function(){document.title="\ud83d\ude05404 - Page"}}]),n}(a.Component),C=n(103),S=n(104);n(136);r.a.render(Object(v.jsx)(c.a,{children:Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{exact:!0,path:"/",component:l.a}),Object(v.jsx)(i.a,{exact:!0,path:"/list/:name",component:o.a}),Object(v.jsx)(i.a,{path:"/player/:name",component:y}),Object(v.jsx)(i.a,{path:"/input",component:C.a}),Object(v.jsx)(i.a,{path:"/test",component:S.a}),Object(v.jsx)(i.a,{path:"*",component:w})]})}),document.getElementById("root"))},21:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return l}));var a=n(41),s=(n(59),n(1)),r=a.a.Header,c=a.a.Footer;function i(){return Object(s.jsx)(r,{style:{textAlign:"center"},children:Object(s.jsx)("img",{src:"logo.svg",alt:"Logo",width:"60px",height:"60px"})})}function l(){var t=(new Date).getFullYear();return Object(s.jsxs)(c,{style:{textAlign:"center"},children:["\u6211\u68a6@",t]})}},89:function(t,e,n){"use strict";(function(t){var a=n(72),s=n(22),r=n(23),c=n(25),i=n(24),l=n(41),o=n(82),u=n(83),j=n(73),h=n(21),d=n(39),b=(n(59),n(0)),m=n(92),f=n(1),p=l.a.Content,x=function(e){Object(c.a)(b,e);var n=Object(i.a)(b);function b(t){var e;return Object(s.a)(this,b),(e=n.call(this,t)).state={title:"React App",data:[],duanwu:!0,specialDay_data:new URLSearchParams(e.props.location.search.substring(1)).get("s")},e}return Object(r.a)(b,[{key:"render",value:function(){var t=this;return Object(f.jsxs)(l.a,{children:[Object(f.jsx)(h.b,{}),Object(f.jsx)(p,{children:Object(f.jsx)(o.a,{children:Object(f.jsx)(u.a,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},xl:{span:18,offset:3},children:Object(f.jsx)(j.b,{size:"large",bordered:!0,dataSource:this.state.data,renderItem:function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.b.Item,{children:Object(f.jsxs)(d.b,{to:{pathname:"/list/".concat(e),state:{referer:t.props.location.pathname,name:e.name,url:e.url,subtitle:e.subtitle}},children:["\u67e5\u770b ",e]})})})}})})})}),Object(f.jsx)(h.a,{}),Object(f.jsx)(m.a,{data:this.state.specialDay_data})]})}},{key:"componentDidMount",value:function(){var e=this;document.title=this.state.title,fetch("data.json").then((function(t){return t.json()})).then((function(n){var s,r=[],c=Object(a.a)(n);try{for(c.s();!(s=c.n()).done;){var i=s.value;r.push(new t.from(i.name,"base64").toString())}}catch(l){c.e(l)}finally{c.f()}e.setState({data:r})}))}}]),b}(b.Component);e.a=x}).call(this,n(53).Buffer)},92:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return j}));var a=n(22),s=n(23),r=n(25),c=n(24),i=n(0),l=(n(117),n(71)),o=n(141),u=n(1),j=function(e){Object(r.a)(i,e);var n=Object(c.a)(i);function i(e){var s;Object(a.a)(this,i),s=n.call(this,e);var r=!1;try{var c=s.props.data.replace(/-/g,"+").replace(/_/g,"/"),l=new t.from(c,"base64").map((function(t){return 154^t})),o=JSON.parse(new t.from(l).toString("utf-8")),u=new Date;u>=new Date(o.start)&&u<new Date(o.end)&&(r=o.name)}catch(j){}return s.state={specialday:!1!==r,json_obj:null,userName:!1!==r?r:null},s}return Object(s.a)(i,[{key:"render",value:function(){return this.state.specialday?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"specialday",children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:this.state.userName}),Object(u.jsx)("h1",{style:{textAlign:"center"},children:"\u751f\u65e5\u5feb\u4e50"}),Object(u.jsx)("div",{style:{width:"65px",height:"85px",margin:"0 auto"},children:Object(u.jsxs)("div",{className:"breeding-rhombus-spinner",children:[Object(u.jsx)("div",{className:"rhombus child-1"}),Object(u.jsx)("div",{className:"rhombus child-2"}),Object(u.jsx)("div",{className:"rhombus child-3"}),Object(u.jsx)("div",{className:"rhombus child-4"}),Object(u.jsx)("div",{className:"rhombus child-5"}),Object(u.jsx)("div",{className:"rhombus child-6"}),Object(u.jsx)("div",{className:"rhombus child-7"}),Object(u.jsx)("div",{className:"rhombus child-8"}),Object(u.jsx)("div",{className:"rhombus big"})]})}),Object(u.jsx)(l.a,{options:{autoplay:!0,volume:1,hotkey:!1,video:{url:"https://cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/public/Happybirthday.mp4"}}}),Object(u.jsx)(o.a,{id:"close",style:{fontSize:"24px"},onClick:this.hide.bind(this)}),Object(u.jsxs)("div",{style:{textAlign:"center",paddingTop:"10px",paddingBottom:"10px"},children:["\u957f\u79c0\u53d1\uff0c\u6da8\u85aa\u8d44",Object(u.jsx)("br",{}),"\u4e0d\u957f\u5c81\u6708\u4e0d\u957f\u8198"]})]})}):Object(u.jsx)(u.Fragment,{})}},{key:"hide",value:function(){this.setState({specialday:!1})}}]),i}(i.Component)}).call(this,n(53).Buffer)}},[[137,1,2]]]);