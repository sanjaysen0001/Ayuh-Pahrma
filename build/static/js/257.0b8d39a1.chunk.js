(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[257],{2044:function(e,a,t){"use strict";t.r(a),t.d(a,"AddEvent",(function(){return C}));var n=t(51),r=t(13),l=t(14),c=t(16),m=t(15),s=t(0),u=t.n(s),o=t(1117),i=t(1115),d=t(1116),p=t(174),b=t(1120),h=t(803),E=t(806),v=t(804),f=t(117),j=(t(805),t(56)),g=t(799),y=(t(812),t(809),t(807)),N=t.n(y),C=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),f.a.post("/admin/add_poojaList",l.state).then((function(e){console.log(e.data),N()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/event/addEvent/eventList")})).catch((function(e){console.log(e)}))},l.state={pooja_name:""},l}return Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(g.a,{breadCrumbTitle:"Add  Puja",breadCrumbParent:" home",breadCrumbActive:"Add  Puja"}),u.a.createElement(o.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Puja")),u.a.createElement(d.a,null,u.a.createElement(j.Route,{render:function(e){var a=e.history;return u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/event/addEvent/eventList")}},"Back")}}))),u.a.createElement(b.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(i.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},u.a.createElement(E.a,null," Pooja Type "),u.a.createElement(v.a,{required:!0,type:"text",name:"pooja_name",placeholder:"Enter Pooja Name",value:this.state.pooja_name,onChange:this.changeHandler}))),u.a.createElement(i.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(s.Component);a.default=C},809:function(e,a,t){}}]);
//# sourceMappingURL=257.0b8d39a1.chunk.js.map