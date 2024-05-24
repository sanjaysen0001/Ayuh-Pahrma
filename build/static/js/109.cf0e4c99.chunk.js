(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[109],{2263:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(14),r=t(16),l=t(15),c=t(0),s=t.n(c),d=t(1115),v=t(1116),m=t(799),o=t(1117),u=t(1118),E=t(1119),g=t(821),p=t(785),b=t(786),f=t(1120),N=t(822),h=t(823),x=t(4),T=t.n(x),j=t(310),y=t(281),C=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerDefault extends React.Component {\n\n  render() {\n    return(\n      <div>\n        <p>\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n          irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n          cupidatat non proident, sunt in culpa qui officia deserunt\n          mollit anim id est laborum.\n        </p>\n        <hr />\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n          do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </p>\n      </div>\n    )\n  }\n}\nexport default DividerDefault\n')),O=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerText extends React.Component {\n\n  render() {\n    return(\n      <div className="divider">\n        <div className="divider-text">My Text</div>\n      </div>\n    )\n  }\n}\nexport default DividerText\n')),D=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerPosition extends React.Component {\n\n  render() {\n    return(\n      <div className="divider divider-left">\n        <div className="divider-text">Left</div>\n      </div>\n\n      <div className="divider divider-left-center">\n        <div className="divider-text">Left Center</div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">Center(Default)</div>\n      </div>\n\n      <div className="divider divider-right-center">\n        <div className="divider-text">Right Center</div>\n      </div>\n\n      <div className="divider divider-right">\n        <div className="divider-text">Right</div>\n      </div>\n    )\n  }\n}\nexport default DividerPosition\n')),k=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerColors extends React.Component {\n\n  render() {\n    return(\n      <div className="divider">\n        <div className="divider-text">Default</div>\n      </div>\n      <div className="divider divider-primary">\n        <div className="divider-text">Primary</div>\n      </div>\n      <div className="divider divider-success">\n        <div className="divider-text">Success</div>\n      </div>\n      <div className="divider divider-danger">\n        <div className="divider-text">Danger</div>\n      </div>\n      <div className="divider divider-info">\n        <div className="divider-text">Info</div>\n      </div>\n      <div className="divider divider-warning">\n        <div className="divider-text">Warning</div>\n      </div>\n      <div className="divider divider-light">\n        <div className="divider-text">Light</div>\n      </div>\n      <div className="divider divider-dark">\n        <div className="divider-text">Dark</div>\n      </div>\n    )\n  }\n}\nexport default DividerColors\n')),S=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  ArrowDown,\n  Star,\n  Check,\n  XCircle,\n  Clock\n} from "react-feather"\nclass DividerIcons extends React.Component {\n\n  render() {\n    return(\n      <div className="divider divider-left">\n        <div className="divider-text">\n          <ArrowDown />\n        </div>\n      </div>\n\n      <div className="divider divider-left-center">\n        <div className="divider-text">\n          <Star />\n        </div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">\n          <Check />\n        </div>\n      </div>\n\n      <div className="divider divider-right-center">\n        <div className="divider-text">\n          <XCircle />\n        </div>\n      </div>\n\n      <div className="divider divider-right">\n        <div className="divider-text">\n          <Clock />\n        </div>\n      </div>\n    )\n  }\n}\nexport default DividerIcons\n')),w=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerStyle extends React.Component {\n\n  render() {\n    return(\n      <div>\n      <div className="divider divider-dotted">\n        <div className="divider-text">Dotted</div>\n      </div>\n\n      <div className="divider divider-dashed">\n        <div className="divider-text">Dashed</div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">Solid</div>\n      </div>\n      </div>\n    )\n  }\n}\nexport default DividerStyle\n')),R=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Default"),s.a.createElement("div",{className:"views"},s.a.createElement(g.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(j.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(y.a,{size:15})))))),s.a.createElement(f.a,null,s.a.createElement("p",null,"You can add a line to divide your section using"," ",s.a.createElement("code",null,"<hr />")," tag."),s.a.createElement(N.a,{activeTab:this.state.activeTab},s.a.createElement(h.a,{tabId:"1"},s.a.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),s.a.createElement("hr",null),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),s.a.createElement(h.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(s.a.Component),I=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Text"),s.a.createElement("div",{className:"views"},s.a.createElement(g.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(j.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(y.a,{size:15})))))),s.a.createElement(f.a,null,s.a.createElement("p",null,"Use class ",s.a.createElement("code",null,".divider")," as wrapper for"," ",s.a.createElement("code",null,".divider-text")," to create a divider text"),s.a.createElement(N.a,{activeTab:this.state.activeTab},s.a.createElement(h.a,{tabId:"1"},s.a.createElement("div",{className:"divider"},s.a.createElement("div",{className:"divider-text"},"My Text"))),s.a.createElement(h.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(s.a.Component),A=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Text Position"),s.a.createElement("div",{className:"views"},s.a.createElement(g.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(j.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(y.a,{size:15})))))),s.a.createElement(f.a,null,s.a.createElement("p",null,"Use class"," ",s.a.createElement("code",null,".divider-[left | left-center | right | right-center]")," ","with ",s.a.createElement("code",null,".divider")," to set text position."),s.a.createElement(N.a,{activeTab:this.state.activeTab},s.a.createElement(h.a,{tabId:"1"},s.a.createElement("div",{className:"divider divider-left"},s.a.createElement("div",{className:"divider-text"},"Left")),s.a.createElement("div",{className:"divider divider-left-center"},s.a.createElement("div",{className:"divider-text"},"Left Center")),s.a.createElement("div",{className:"divider"},s.a.createElement("div",{className:"divider-text"},"Center(Default)")),s.a.createElement("div",{className:"divider divider-right-center"},s.a.createElement("div",{className:"divider-text"},"Right Center")),s.a.createElement("div",{className:"divider divider-right"},s.a.createElement("div",{className:"divider-text"},"Right"))),s.a.createElement(h.a,{className:"component-code",tabId:"2"},D)))))}}]),t}(s.a.Component),P=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Colors"),s.a.createElement("div",{className:"views"},s.a.createElement(g.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(j.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(y.a,{size:15})))))),s.a.createElement(f.a,null,s.a.createElement("p",null,"Use class ",s.a.createElement("code",null,".divider-[color-name]")," to change color of divider"),s.a.createElement(N.a,{activeTab:this.state.activeTab},s.a.createElement(h.a,{tabId:"1"},s.a.createElement("div",{className:"divider"},s.a.createElement("div",{className:"divider-text"},"Default")),s.a.createElement("div",{className:"divider divider-primary"},s.a.createElement("div",{className:"divider-text"},"Primary")),s.a.createElement("div",{className:"divider divider-success"},s.a.createElement("div",{className:"divider-text"},"Success")),s.a.createElement("div",{className:"divider divider-danger"},s.a.createElement("div",{className:"divider-text"},"Danger")),s.a.createElement("div",{className:"divider divider-info"},s.a.createElement("div",{className:"divider-text"},"Info")),s.a.createElement("div",{className:"divider divider-warning"},s.a.createElement("div",{className:"divider-text"},"Warning")),s.a.createElement("div",{className:"divider divider-light"},s.a.createElement("div",{className:"divider-text"},"Light")),s.a.createElement("div",{className:"divider divider-dark"},s.a.createElement("div",{className:"divider-text"},"Dark"))),s.a.createElement(h.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(s.a.Component),z=t(235),M=t(426),B=t(264),q=t(470),F=t(274),L=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Icons"),s.a.createElement("div",{className:"views"},s.a.createElement(g.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(j.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(y.a,{size:15})))))),s.a.createElement(f.a,null,s.a.createElement(N.a,{activeTab:this.state.activeTab},s.a.createElement(h.a,{tabId:"1"},s.a.createElement("div",{className:"divider divider-left"},s.a.createElement("div",{className:"divider-text"},s.a.createElement(z.a,null))),s.a.createElement("div",{className:"divider divider-left-center"},s.a.createElement("div",{className:"divider-text"},s.a.createElement(M.a,null))),s.a.createElement("div",{className:"divider"},s.a.createElement("div",{className:"divider-text"},s.a.createElement(B.a,null))),s.a.createElement("div",{className:"divider divider-right-center"},s.a.createElement("div",{className:"divider-text"},s.a.createElement(q.a,null))),s.a.createElement("div",{className:"divider divider-right"},s.a.createElement("div",{className:"divider-text"},s.a.createElement(F.a,null)))),s.a.createElement(h.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(s.a.Component),U=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Styles"),s.a.createElement("div",{className:"views"},s.a.createElement(g.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(j.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(y.a,{size:15})))))),s.a.createElement(f.a,null,s.a.createElement("p",null,"use class ",s.a.createElement("code",null,".divider-[dotted | dashed]")," to change divider style. solid is default style you don't have to add any class for it."),s.a.createElement(N.a,{activeTab:this.state.activeTab},s.a.createElement(h.a,{tabId:"1"},s.a.createElement("div",{className:"divider divider-dotted"},s.a.createElement("div",{className:"divider-text"},"Dotted")),s.a.createElement("div",{className:"divider divider-dashed"},s.a.createElement("div",{className:"divider-text"},"Dashed")),s.a.createElement("div",{className:"divider"},s.a.createElement("div",{className:"divider-text"},"Solid"))),s.a.createElement(h.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(s.a.Component),J=t(810),W=t.n(J),X=(t(811),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){W.a.highlightAll()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{breadCrumbTitle:"Divider",breadCrumbParent:"Extra Components",breadCrumbActive:"Divider"}),s.a.createElement(d.a,null,s.a.createElement(v.a,{sm:"12"},s.a.createElement(R,null)),s.a.createElement(v.a,{sm:"12"},s.a.createElement(I,null)),s.a.createElement(v.a,{sm:"12"},s.a.createElement(A,null)),s.a.createElement(v.a,{sm:"12"},s.a.createElement(P,null)),s.a.createElement(v.a,{sm:"12"},s.a.createElement(L,null)),s.a.createElement(v.a,{sm:"12"},s.a.createElement(U,null))))}}]),t}(s.a.Component));a.default=X},802:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),i=t.n(n).a.createContext({})},811:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},r=function a(t){for(var n=[],r=0;r<t.length;r++){var l=t[r],c=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===i(l.content[0].content[1])&&n.pop():"/>"===l.content[l.content.length-1].content||n.push({tagName:i(l.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===l.type&&"{"===l.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?n[n.length-1].openedBraces--:c=!0),(c||"string"==typeof l)&&n.length>0&&0===n[n.length-1].openedBraces){var s=i(l);r<t.length-1&&("string"==typeof t[r+1]||"plain-text"===t[r+1].type)&&(s+=i(t[r+1]),t.splice(r+1,1)),r>0&&("string"==typeof t[r-1]||"plain-text"===t[r-1].type)&&(s=i(t[r-1])+s,t.splice(r-1,1),r--),t[r]=new e.Token("plain-text",s,null,s)}l.content&&"string"!=typeof l.content&&a(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)},821:function(e,a,t){"use strict";var n=t(5),i=t(9),r=t(0),l=t.n(r),c=t(1),s=t.n(c),d=t(4),v=t.n(d),m=t(3),o=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],u={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:m.tagPropType,className:s.a.string,cssModule:s.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tabs,c=e.pills,s=e.vertical,d=e.horizontal,u=e.justified,E=e.fill,g=e.navbar,p=e.card,b=e.tag,f=Object(i.a)(e,o),N=Object(m.mapToCssModules)(v()(a,g?"navbar-nav":"nav",!!d&&"justify-content-"+d,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":r,"card-header-tabs":p&&r,"nav-pills":c,"card-header-pills":p&&c,"nav-justified":u,"nav-fill":E}),t);return l.a.createElement(b,Object(n.a)({},f,{className:N}))};E.propTypes=u,E.defaultProps={tag:"ul",vertical:!1},a.a=E},822:function(e,a,t){"use strict";var n=t(5),i=t(12),r=t(0),l=t.n(r),c=t(1),s=t.n(c),d=t(4),v=t.n(d),m=t(802),o=t(3),u={tag:o.tagPropType,activeTab:s.a.any,className:s.a.string,cssModule:s.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(i.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.tag,r=Object(o.omit)(this.props,Object.keys(u)),c=Object(o.mapToCssModules)(v()("tab-content",a),t);return l.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(i,Object(n.a)({},r,{className:c})))},a}(r.Component);a.a=E,E.propTypes=u,E.defaultProps={tag:"div"}},823:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(5),i=t(9),r=t(0),l=t.n(r),c=t(1),s=t.n(c),d=t(4),v=t.n(d),m=t(802),o=t(3),u=["className","cssModule","tabId","tag"],E={tag:o.tagPropType,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function g(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,s=Object(i.a)(e,u),d=function(e){return Object(o.mapToCssModules)(v()("tab-pane",a,{active:r===e}),t)};return l.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(c,Object(n.a)({},s,{className:d(a)}))}))}g.propTypes=E,g.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=109.cf0e4c99.chunk.js.map