(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[217],{2187:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(51),s=t(13),r=t(14),i=t(16),l=t(15),o=t(0),c=t.n(o),u=t(1115),m=t(1116),f=t(1113),d=t(1114),p=t(1117),b=t(174),h=t(1120),g=t(803),v=t(806),O=t(804),y=t(41),j=t.n(y),E=t(27),N=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),j.a.post("http://3.108.185.7/nodejs/api/dealer/addmasterCompny",r.state).then((function(e){console.log(e),r.props.history.push("/app/setting/moc/mOCList")})).catch((function(e){console.log(e)}))},r.state={name:""},r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(f.a,{listTag:"div"},c.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(d.a,{href:"/app/setting/moc/mOCList",tag:"a"},"MOC List"),c.a.createElement(d.a,{active:!0},"Add MOC"))))),c.a.createElement(p.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Master Oil Company")),c.a.createElement(m.a,null,c.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/setting/moc/mOCList")}},"Back"))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"Master Oil Company Name"),c.a.createElement(O.a,{required:!0,type:"text",name:"name",placeholder:"",value:this.state.name,onChange:this.changeHandler}))),c.a.createElement(u.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(o.Component)},803:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),i=t(12),l=t(0),o=t.n(l),c=t(1),u=t.n(c),m=t(4),f=t.n(m),d=t(3),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,p),u=Object(d.mapToCssModules)(f()(a,!!r&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:u}))},a}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},804:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),i=t(12),l=t(0),o=t.n(l),c=t(1),u=t.n(c),m=t(4),f=t.n(m),d=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=m?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var E=Object(d.mapToCssModules)(f()(a,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,j),t);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},806:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),i=t.n(r),l=t(1),o=t.n(l),c=t(4),u=t.n(c),m=t(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],d=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,d=e.size,p=e.for,b=Object(s.a)(e,f),h=[];l.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,i=!n;if(Object(m.isObject)(s)){var l,o=i?"-":"-"+a+"-";r=g(i,a,s.size),h.push(Object(m.mapToCssModules)(u()(((l={})[r]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(i,a,s),h.push(r)}}));var v=Object(m.mapToCssModules)(u()(a,!!r&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v}}]);
//# sourceMappingURL=217.9366d5eb.chunk.js.map