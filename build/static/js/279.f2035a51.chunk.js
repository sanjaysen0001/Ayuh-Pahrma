(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[279],{2160:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(51),r=t(13),l=t(14),c=t(16),s=t(15),o=t(0),i=t.n(o),m=t(1115),d=t(1116),u=t(1113),p=t(1114),b=t(1117),h=t(174),E=t(1120),y=t(803),v=t(806),f=t(804),g=t(117),N=t(807),S=t.n(N),C=t(56),P=(t(805),t(819)),k=t(818),O=t(808),w=t.n(O),H=(t(812),t(809),function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).uploadImageCallBack=function(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);a(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);t(e)}))}))},l.onEditorStateChange=function(e){l.setState({editorState:e,desc:w()(Object(P.convertToRaw)(e.getCurrentContent()))})},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),g.a.post("/admin/addprivcyPlcy",l.state).then((function(e){console.log(e.data),S()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/pagesetup/privacypolicy/privacyPolicyList")})).catch((function(e){console.log(e)}))},l.state={title:"",desc:"",editorState:P.EditorState.createEmpty()},l}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/pagesetup/privacypolicy/privacyPolicyList",tag:"a"},"Privacy Policy List"),i.a.createElement(p.a,{active:!0},"Add Privacy Policy"))))),i.a.createElement(b.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Privacy Policy")),i.a.createElement(d.a,null,i.a.createElement(C.Route,{render:function(e){var a=e.history;return i.a.createElement(h.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/pagesetup/privacypolicy/privacyPolicyList")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Title"),i.a.createElement(f.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(m.a,null),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(v.a,null,"Description"),i.a.createElement(k.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),i.a.createElement("br",null))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(o.Component))},809:function(e,a,t){}}]);
//# sourceMappingURL=279.f2035a51.chunk.js.map