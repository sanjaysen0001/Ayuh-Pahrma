(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2099:function(e,t,a){"use strict";a.r(t);var n=a(51),s=a(13),o=a(14),r=a(16),i=a(15),c=a(0),l=a.n(c),m=a(1117),u=a(1115),d=a(1116),p=a(174),f=a(1120),h=a(803),g=a(806),b=a(783),v=a(804),y=a(117),E=a(807),O=a.n(E),j=a(56),N=a(799),C=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),y.a.post("/admin/add_Comision",o.state).then((function(e){O()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/app/packagemanager/commission")})).catch((function(e){console.log(e)}))},o.state={product:"",comision_name:"",comision_rate:"",category:"",status:""},o.state={categoryList:[],productList:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.category),y.a.get("/admin/getproductcalegory").then((function(t){e.setState({categoryList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e,t,a=this;return l.a.createElement("div",null,l.a.createElement(N.a,{breadCrumbTitle:"Add Commission",breadCrumbParent:"Home",breadCrumbActive:"Add Commission "}),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"m-2"},l.a.createElement(d.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Commission")),l.a.createElement(d.a,null,l.a.createElement(j.Route,{render:function(e){var t=e.history;return l.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/packagemanager/commission")}},"Back")}}))),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(u.a,null,l.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},l.a.createElement(g.a,null,"Category Name"),l.a.createElement(b.a,{required:!0,type:"select",name:"category",onChange:function(e){y.a.get("/user/productbycategory/".concat(e.target.value)).then((function(e){a.setState({productList:e.data.data})})).catch((function(e){console.log(e)}))}},l.a.createElement("option",null,"Select....."),null===(e=this.state.categoryList)||void 0===e?void 0:e.map((function(e){return l.a.createElement("option",{key:e._id,value:null===e||void 0===e?void 0:e._id},e.name)})))),l.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},l.a.createElement(g.a,null,"Product Name"),l.a.createElement(b.a,{required:!0,type:"select",name:"product",placeholder:"Enter Title",value:this.state.product,onChange:this.changeHandler},l.a.createElement("option",null,"Select....."),null===(t=this.state.productList)||void 0===t?void 0:t.map((function(e){var t;return l.a.createElement("option",{key:e._id,value:e._id},null===e||void 0===e||null===(t=e.product)||void 0===t?void 0:t.productname)})))),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(g.a,null,"Commission Name"),l.a.createElement(v.a,{required:!0,type:"text",name:"comision_name",placeholder:"Commission Name",value:this.state.comision_name,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(g.a,null,"Commission Rate"),l.a.createElement(v.a,{required:!0,type:"text",name:"comision_rate",placeholder:"Enter Commision Rate",value:this.state.comision_rate,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(g.a,{className:"mb-1"},"Status"),l.a.createElement("div",{className:"form-label-group",onChange:function(e){return a.changeHandler1(e)}},l.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),l.a.createElement("span",{style:{marginRight:"20px"}},"Active"),l.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),l.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),l.a.createElement(u.a,null,l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(l.a.Component);t.default=C},803:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(11),r=a(12),i=a(0),c=a.n(i),l=a(1),m=a.n(l),u=a(4),d=a.n(u),p=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,r=e.tag,i=e.innerRef,l=Object(s.a)(e,f),m=Object(p.mapToCssModules)(d()(t,!!o&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},l,{ref:i,className:m}))},t}(i.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},804:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(11),r=a(12),i=a(0),c=a.n(i),l=a(1),m=a.n(l),u=a(4),d=a.n(u),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,i=e.valid,l=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,g=e.innerRef,b=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=m||("select"===o||"textarea"===o?o:"input"),O="form-control";h?(O+="-plaintext",E=m||"input"):"file"===o?O+="-file":"range"===o?O+="-range":v&&(O=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var j=Object(p.mapToCssModules)(d()(t,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===E||m&&"function"===typeof m)&&(b.type=o),b.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:g,className:j,"aria-invalid":l}))},t}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},806:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(0),r=a.n(o),i=a(1),c=a.n(i),l=a(4),m=a.n(l),u=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.hidden,i=e.widths,c=e.tag,l=e.check,p=e.size,f=e.for,h=Object(s.a)(e,d),g=[];i.forEach((function(t,n){var s=e[t];if(delete h[t],s||""===s){var o,r=!n;if(Object(u.isObject)(s)){var i,c=r?"-":"-"+t+"-";o=b(r,t,s.size),g.push(Object(u.mapToCssModules)(m()(((i={})[o]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i))),a)}else o=b(r,t,s),g.push(o)}}));var v=Object(u.mapToCssModules)(m()(t,!!o&&"sr-only",!!l&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return r.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=g,t.a=v}}]);
//# sourceMappingURL=191.7025fa9d.chunk.js.map