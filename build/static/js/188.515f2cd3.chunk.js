(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[188],{2122:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),r=t(16),l=t(15),o=t(0),s=t.n(o),m=t(1115),i=t(1116),u=t(1113),d=t(1114),h=t(1117),p=t(174),E=t(1120),f=(t(833),t(56)),g=t(117),b=t(813),v=t.n(b),y=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;g.a.get("/admin/getoneCategory/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(m.a,null,s.a.createElement(i.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(u.a,{listTag:"div"},s.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),s.a.createElement(d.a,{href:"/app/horoscopecategory/horoscopeCategoryList",tag:"a"},"Horoscope Category List"),s.a.createElement(d.a,{active:!0},"View Horoscope Category"))))),s.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(m.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Horoscope Category")),s.a.createElement(i.a,null,s.a.createElement(f.Route,{render:function(e){var a=e.history;return s.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/horoscopecategory/horoscopeCategoryList")}},"Back")}}))),s.a.createElement(E.a,{className:"pb-0"},s.a.createElement(m.a,{className:"mb-5 mt-2"},s.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"Title"),s.a.createElement("h6",{className:""}," ",this.state.data.title)),s.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"Description"),s.a.createElement("h6",{className:""}," ",v()(this.state.data.desc))))))))}}]),t}(s.a.Component);a.default=y},814:function(e,a){},833:function(e,a,t){}}]);
//# sourceMappingURL=188.515f2cd3.chunk.js.map