(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[259],{2009:function(e,t,a){"use strict";a.r(t),a.d(t,"AddBannerPooja",(function(){return H}));var n=a(816),l=a(51),r=a(13),c=a(14),s=a(16),o=a(15),i=a(0),m=a.n(i),u=a(1117),d=a(1115),f=a(1116),p=a(174),g=a(1120),h=a(803),v=a(806),b=a(804),E=a(783),S=a(117),y=(a(805),a(56)),j=a(799),C=(a(818),a(812),a(819)),N=(a(809),a(808)),O=a.n(N),P=a(807),F=a.n(P),H=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler=function(e){c.setState({selectedFile:e.target.files}),c.setState({selectedName:e.target.files.name}),console.log(e.target.files)},c.uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var l=new FormData;l.append("image",e),n.send(l),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},c.onEditorStateChange=function(e){c.setState({editorState:e,desc:O()(Object(C.convertToRaw)(e.getCurrentContent()))})},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("title",c.state.title);var a,l=Object(n.a)(c.state.selectedFile);try{for(l.s();!(a=l.n()).done;){var r=a.value;null!==c.state.selectedFile&&t.append("img",r,r.name)}}catch(f){l.e(f)}finally{l.f()}var s,o=Object(n.a)(t.values());try{for(o.s();!(s=o.n()).done;){var i=s.value;console.log(i)}}catch(f){o.e(f)}finally{o.f()}var m,u=Object(n.a)(t.keys());try{for(u.s();!(m=u.n()).done;){var d=m.value;console.log(d)}}catch(f){u.e(f)}finally{u.f()}S.a.post("/admin/add_PoojaBanner",t).then((function(e){console.log("DFSS@@@@@@@FD",e.data),F()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/event/bennerPooja/bannerPoojaList")})).catch((function(e){console.log(e)}))},c.state={title:"",img:"",editorState:C.EditorState.createEmpty(),selectedFile:void 0,selectedName:""},c}return Object(c.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(j.a,{breadCrumbTitle:"Puja Type",breadCrumbParent:" home",breadCrumbActive:"Add Puja Type"}),m.a.createElement(u.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Puja")),m.a.createElement(f.a,null,m.a.createElement(y.Route,{render:function(e){var t=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/event/bennerPooja/BannerPoojaList")}},"Back")}}))),m.a.createElement(g.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,null,m.a.createElement(f.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"Title"),m.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title ",value:this.state.title,onChange:this.changeHandler})),m.a.createElement(f.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(v.a,null,"Image"),m.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler}))),m.a.createElement(d.a,null,m.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(i.Component);t.default=H},809:function(e,t,a){}}]);
//# sourceMappingURL=259.334c6244.chunk.js.map