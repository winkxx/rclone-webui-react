(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[3],{283:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(24),A=t.n(l),u=t(27),p={tag:u.q,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),c=Object(u.m)(A()(a,"input-group-text"),t);return o.a.createElement(r,Object(s.a)({},i,{className:c}))};d.propTypes=p,d.defaultProps={tag:"span"},a.a=d},285:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(273),o=t(16),i=t(0),c=t.n(i),l=t(4),A=t.n(l),u=t(24),p=t.n(u),d=t(27),g={children:A.a.node,type:A.a.string,size:A.a.string,bsSize:A.a.string,valid:A.a.bool,invalid:A.a.bool,tag:d.q,innerRef:A.a.oneOfType([A.a.object,A.a.func,A.a.string]),plaintext:A.a.bool,addon:A.a.bool,className:A.a.string,cssModule:A.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,i=e.valid,l=e.invalid,A=e.tag,u=e.addon,g=e.plaintext,m=e.innerRef,b=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,f=new RegExp("\\D","g"),w=A||("select"===r||"textarea"===r?r:"input"),E="form-control";g?(E+="-plaintext",w=A||"input"):"file"===r?E+="-file":"range"===r?E+="-range":h&&(E=u?null:"form-check-input"),b.size&&f.test(b.size)&&(Object(d.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=b.size,delete b.size);var B=Object(d.m)(p()(a,l&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,E),t);return("input"===w||A&&"function"===typeof A)&&(b.type=r),b.children&&!g&&"select"!==r&&"string"===typeof w&&"select"!==w&&(Object(d.t)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(w,Object(s.a)({},b,{ref:m,className:B,"aria-invalid":l}))},a}(c.a.Component);m.propTypes=g,m.defaultProps={type:"text"},a.a=m},289:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(273),o=t(16),i=t(0),c=t.n(i),l=t(4),A=t.n(l),u=t(24),p=t.n(u),d=t(27),g={children:A.a.node,inline:A.a.bool,tag:d.q,innerRef:A.a.oneOfType([A.a.object,A.a.func,A.a.string]),className:A.a.string,cssModule:A.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,i=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),A=Object(d.m)(p()(a,!!r&&"form-inline"),t);return c.a.createElement(o,Object(s.a)({},l,{ref:i,className:A}))},a}(i.Component);m.propTypes=g,m.defaultProps={tag:"form"},a.a=m},290:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(277),o=t(0),i=t.n(o),c=t(4),l=t.n(c),A=t(24),u=t.n(A),p=t(301),d=t(27),g=Object(r.a)({},p.Transition.propTypes,{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:d.q,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),m=Object(r.a)({},p.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var a=e.tag,t=e.baseClass,r=e.baseClassActive,o=e.className,c=e.cssModule,l=e.children,A=e.innerRef,g=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),m=Object(d.o)(g,d.c),b=Object(d.n)(g,d.c);return i.a.createElement(p.Transition,m,(function(e){var n="entered"===e,p=Object(d.m)(u()(o,t,n&&r),c);return i.a.createElement(a,Object(s.a)({className:p},b,{ref:A}),l)}))}b.propTypes=g,b.defaultProps=m,a.a=b},299:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(24),A=t.n(l),u=t(27),p={tag:u.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var a=e.className,t=e.cssModule,r=e.color,i=e.body,c=e.inverse,l=e.outline,p=e.tag,d=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(u.m)(A()(a,"card",!!c&&"text-white",!!i&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return o.a.createElement(p,Object(s.a)({},g,{className:m,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},300:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(24),A=t.n(l),u=t(27),p={tag:u.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,i=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.m)(A()(a,"card-body"),t);return o.a.createElement(i,Object(s.a)({},c,{className:l,ref:r}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},312:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(24),A=t.n(l),u=t(27),p={tag:u.q,size:c.a.string,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.size,c=Object(n.a)(e,["className","cssModule","tag","size"]),l=Object(u.m)(A()(a,"input-group",i?"input-group-"+i:null),t);return o.a.createElement(r,Object(s.a)({},c,{className:l}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},313:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(24),A=t.n(l),u=t(27),p=t(283),d={tag:u.q,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},g=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.addonType,c=e.children,l=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),d=Object(u.m)(A()(a,"input-group-"+i),t);return"string"===typeof c?o.a.createElement(r,Object(s.a)({},l,{className:d}),o.a.createElement(p.a,{children:c})):o.a.createElement(r,Object(s.a)({},l,{className:d,children:c}))};g.propTypes=d,g.defaultProps={tag:"div"},a.a=g},337:function(e,a,t){"use strict";var s=t(7),n=t(10),r=t(277),o=t(0),i=t.n(o),c=t(4),l=t.n(c),A=t(24),u=t.n(A),p=t(27),d=t(290),g={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:p.q,transition:l.a.shape(d.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(r.a)({},d.a.defaultProps,{unmountOnExit:!0})};function b(e){var a=e.className,t=e.closeClassName,o=e.closeAriaLabel,c=e.cssModule,l=e.tag,A=e.color,g=e.isOpen,m=e.toggle,b=e.children,h=e.transition,f=e.fade,w=e.innerRef,E=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),B=Object(p.m)(u()(a,"alert","alert-"+A,{"alert-dismissible":m}),c),j=Object(p.m)(u()("close",t),c),N=Object(r.a)({},d.a.defaultProps,{},h,{baseClass:f?h.baseClass:"",timeout:f?h.timeout:0});return i.a.createElement(d.a,Object(s.a)({},E,N,{tag:l,className:B,in:g,role:"alert",innerRef:w}),m?i.a.createElement("button",{type:"button",className:j,"aria-label":o,onClick:m},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,b)}b.propTypes=g,b.defaultProps=m,a.a=b},418:function(e,a){e.exports="data:image/png;base64,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"},615:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(269),o=t(60),i=t(41),c=t(7),l=t(10),A=t(4),u=t.n(A),p=t(24),d=t.n(p),g=t(27),m={tag:g.q,className:u.a.string,cssModule:u.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),o=Object(g.m)(d()(a,"card-group"),t);return n.a.createElement(s,Object(c.a)({},r,{className:o}))};b.propTypes=m,b.defaultProps={tag:"div"};var h=b,f=t(299),w=t(300),E=t(289),B=t(273),j=t(16),N=t(337),C=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:!0},t.toggle=t.toggle.bind(Object(B.a)(t)),t}Object(j.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return n.a.createElement(N.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},a}(s.Component),O=t(312),y=t(313),R=t(283),v=t(285),q=t(291),Q=t(84),D=t(2);var I=t(62),S=t(43),M=t(418),T=t.n(M);function W(e){let a=document.location.href,t=a.split("?");if(t.length>=2){let s=t.shift(),n=t.join("?"),r=encodeURIComponent(e)+"=",o=n.split(/[&;]/g);for(let e=o.length;e-- >0;)-1!==o[e].lastIndexOf(r,0)&&o.splice(e,1);a=o.length>0?s+"?"+o.join("&"):s,a=a.replace(window.location.origin,""),window.history.pushState("",document.title,a)}return a}class P extends s.Component{constructor(e){super(e),this.changeUserName=e=>{this.setState({username:e.target.value})},this.changePassword=e=>{this.setState({password:e.target.value})},this.changeIPAddress=e=>{this.setState({ipAddress:e.target.value})},this.redirectToDashboard=()=>{this.props.history.push("/dashboard")},this.onSubmit=e=>{e&&e.preventDefault();const a=this.state,t=a.ipAddress,s=a.username,n=a.password,r=this.props,o=r.changeUserNamePassword,i=r.changeIPAddress;Promise.all([o(s,n),i(t)]).then(()=>{I.a.post(S.a.noopAuth).then(e=>{console.log("Connection successful."),this.redirectToDashboard()},e=>{console.log(e),this.setState({error:"Error connecting. Please check username password and verify if rclone is working at the specified IP."})})})};let a=window.location.href.split("#/")[0];-1!==a.indexOf("?")&&(a=window.location.href.split("?")[0]),this.state={username:"",password:"",ipAddress:a,error:""}}componentDidMount(){localStorage.clear(),this.props.signOut();let e=window.location.href,a=new URL(e),t=a.searchParams.get("login_token"),s=this.state.ipAddress;a.searchParams.get("ip_address")&&(s=a.searchParams.get("ip_address")),t&&(Promise.all([this.props.changeAuthKey(t),this.props.changeIPAddress(s)]),W("login_token"),W("ip_address"),this.redirectToDashboard())}render(){const e=this.state,a=e.username,t=e.password,s=e.ipAddress,c=e.error;return n.a.createElement("div",{className:"app flex-row align-items-center","data-test":"loginComponent"},n.a.createElement(r.a,null,n.a.createElement(o.a,{className:"justify-content-center"},n.a.createElement(i.a,{md:"8"},n.a.createElement(h,null,n.a.createElement(f.a,{className:"p-4"},n.a.createElement(w.a,null,n.a.createElement(E.a,{onSubmit:this.onSubmit},n.a.createElement("h1",null,"Login"),n.a.createElement("p",{className:"text-muted"},"Sign In to your account"),c&&n.a.createElement(C,{color:"danger",children:c}),n.a.createElement(O.a,{className:"mb-3"},n.a.createElement(y.a,{addonType:"prepend"},n.a.createElement(R.a,null,n.a.createElement("i",{className:"icon-user"}))),n.a.createElement(v.a,{type:"text",placeholder:"IP Address / URL",autoComplete:"ipAddress",onChange:this.changeIPAddress,value:s,"data-testid":"LoginForm-ipAddress"})),n.a.createElement(O.a,{className:"mb-3"},n.a.createElement(y.a,{addonType:"prepend"},n.a.createElement(R.a,null,n.a.createElement("i",{className:"icon-user"}))),n.a.createElement(v.a,{type:"text",placeholder:"Username",autoComplete:"username","data-testid":"LoginForm-userName",onChange:this.changeUserName,value:a})),n.a.createElement(O.a,{className:"mb-4"},n.a.createElement(y.a,{addonType:"prepend"},n.a.createElement(R.a,null,n.a.createElement("i",{className:"icon-lock"}))),n.a.createElement(v.a,{type:"password",placeholder:"Password","data-testid":"LoginForm-password",autoComplete:"current-password",onChange:this.changePassword,value:t})),n.a.createElement(o.a,null,n.a.createElement(i.a,{xs:"6"},n.a.createElement(q.a,{color:"primary",className:"px-4",type:"submit","data-testid":"LoginForm-BtnLogin"},"Login")))))),n.a.createElement(f.a,{className:"text-white bg-white py-5 d-md-down-none",style:{width:"44%"}},n.a.createElement(w.a,{className:"text-center"},n.a.createElement("img",{src:T.a,alt:"RClone logo"}))))))))}}a.default=Object(Q.b)(null,{signOut:()=>e=>{e({type:D.N})},changeUserNamePassword:(e,a)=>t=>{t({type:D.c,payload:{authKey:btoa(e+":"+a)}}),t({type:D.d})},changeIPAddress:e=>a=>{a({type:D.g,payload:{ipAddress:e}}),a({type:D.d})},changeAuthKey:e=>a=>{a({type:D.c,payload:{authKey:e}}),a({type:D.d})}})(P)}}]);
//# sourceMappingURL=3.4f8af1d6.chunk.js.map