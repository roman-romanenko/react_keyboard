(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(4),r=n(5),o=n(7),d=n(6),i=n(1),p=n(0),u=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handleKey=function(t){"Space"===t.code?e.setState({pressedKey:t.code}):e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKey)}},{key:"componentWillMount",value:function(){document.removeEventListener("keyup",this.handleKey)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:""===e?"Nothing was pressed yet":"The last pressed key is [".concat(e,"]")})})}}]),n}(i.Component);n(13);a.a.render(Object(p.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.096dee15.chunk.js.map