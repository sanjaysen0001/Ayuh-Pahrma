(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(816),r=a(51),o=a(13),l=a(14),s=a(16),i=a(15),c=a(0),u=a.n(c),m=a(1115),p=a(1116),d=a(1113),f=a(1114),h=a(1117),g=a(174),b=a(1120),v=a(803),y=a(806),E=a(804),O=a(783),j=a(117),N=(a(27),a(807)),R=a.n(N),k=a(56),S=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler=function(e){l.setState({selectedFile:e.target.files}),l.setState({selectedName:e.target.files.name}),console.log(e.target.files)},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){console.log(l.state.root),e.preventDefault();var t=new FormData;t.append("banner_title",l.state.banner_title),t.append("root",l.state.root),t.append("status",l.state.status);var a,r=Object(n.a)(l.state.selectedFile);try{for(r.s();!(a=r.n()).done;){var o=a.value;null!==l.state.selectedFile&&t.append("banner_img",o,o.name)}}catch(d){r.e(d)}finally{r.f()}var s,i=Object(n.a)(t.values());try{for(i.s();!(s=i.n()).done;){var c=s.value;console.log(c)}}catch(d){i.e(d)}finally{i.f()}var u,m=Object(n.a)(t.keys());try{for(m.s();!(u=m.n()).done;){var p=u.value;console.log(p)}}catch(d){m.e(d)}finally{m.f()}j.a.post("admin/addbanner",t).then((function(e){console.log(e),R()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/pagesetup/banner/bannerList")})).catch((function(e){console.log(e)}))},l.state={banner_title:"",root:"",status:"",banner_img:"",selectedFile:void 0,selectedName:"",pages:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/admin/getPages").then((function(t){e.setState({pages:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(p.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(d.a,{listTag:"div"},u.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(f.a,{href:"/app/pagesetup/banner/bannerList",tag:"a"},"Banner List"),u.a.createElement(f.a,{active:!0},"Add Banner"))))),u.a.createElement(h.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Banner")),u.a.createElement(p.a,null,u.a.createElement(k.Route,{render:function(e){var t=e.history;return u.a.createElement(g.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/pagesetup/banner/bannerList")}},"Back")}}))),u.a.createElement(b.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,null,u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Title"),u.a.createElement(E.a,{required:!0,type:"text",name:"banner_title",placeholder:"",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Add Route"),u.a.createElement("select",{className:"form-control",name:"root",value:this.state.root,onChange:this.changeHandler},u.a.createElement("option",{value:""},"-Select--"),u.a.createElement("option",{value:"kundaliform"},"Match Making"),u.a.createElement("option",{value:"allastrologerlist"},"All Doctor List"),u.a.createElement("option",{value:"liveAstrologer"},"LiveStreaming "),u.a.createElement("option",{value:"manglikdosh"},"Manglikdosh"),u.a.createElement("option",{value:"pitraDosh"},"PitraDosh"),u.a.createElement("option",{value:"kalsharpDosh"},"kalsharpDosh"),u.a.createElement("option",{value:"heroscopestwo"},"Daily Horoscope"),u.a.createElement("option",{value:"heroscopestwo1"},"Weekly Horoscope"),u.a.createElement("option",{value:"heroscopestwo2"},"Monthly Horoscope"),u.a.createElement("option",{value:"astromallList"},"AstromallList"),u.a.createElement("option",{value:"bookEvent"},"Book Pooja"),u.a.createElement("option",{value:"basicPanchang"},"BasicPanchang"),u.a.createElement("option",{value:"todayPanchang"},"TodayPanchang"),u.a.createElement("option",{value:"aboutdetail"},"About Us"),u.a.createElement("option",{value:"contact"},"Contact Us"),u.a.createElement("option",{value:"TermsOfUse"},"TermsOfUse"),u.a.createElement("option",{value:"privacyPolicy"},"PrivacyPolicy"),u.a.createElement("option",{value:"blog-no-sidebar"},"Blogs"),u.a.createElement("option",{value:"Faq"},"Faq"))),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Image"),u.a.createElement(O.a,{type:"file",multiple:!0,onChange:this.onChangeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(m.a,null,u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},803:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(11),l=a(12),s=a(0),i=a.n(s),c=a(1),u=a.n(c),m=a(4),p=a.n(m),d=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,l=e.tag,s=e.innerRef,c=Object(r.a)(e,f),u=Object(d.mapToCssModules)(p()(t,!!o&&"form-inline"),a);return i.a.createElement(l,Object(n.a)({},c,{ref:s,className:u}))},t}(s.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},804:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(11),l=a(12),s=a(0),i=a.n(s),c=a(1),u=a.n(c),m=a(4),p=a.n(m),d=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,l=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,g=e.innerRef,b=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":v&&(O=m?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var j=Object(d.mapToCssModules)(p()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(b.type=o),b.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(E,Object(n.a)({},b,{ref:g,className:j,"aria-invalid":c}))},t}(i.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},806:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(0),l=a.n(o),s=a(1),i=a.n(s),c=a(4),u=a.n(c),m=a(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.hidden,s=e.widths,i=e.tag,c=e.check,d=e.size,f=e.for,h=Object(r.a)(e,p),g=[];s.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var o,l=!n;if(Object(m.isObject)(r)){var s,i=l?"-":"-"+t+"-";o=b(l,t,r.size),g.push(Object(m.mapToCssModules)(u()(((s={})[o]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s))),a)}else o=b(l,t,r),g.push(o)}}));var v=Object(m.mapToCssModules)(u()(t,!!o&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return l.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=g,t.a=v},816:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,l=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw o}}}}}}]);
//# sourceMappingURL=144.d528e4c6.chunk.js.map