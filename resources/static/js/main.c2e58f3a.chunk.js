(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(7),c=n(8),r=n(10),o=n(11),s=n(9),u=n.n(s),l=(n(3),n(0));var d=function(e){var t=e.name;return console.log("NAME",t),Object(l.jsx)("div",{children:Object(l.jsx)("header",{children:Object(l.jsxs)("p",{children:["Hello, ",t,"!"]})})})},h={name:"name"},m=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){if(console.log("NAME, OLDVALUE, NEWVALUE data in main widget",e,t,n),!Object.values(h).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&n!==t&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var e=this.getAttribute(h.name);console.log("NAME data in main widget,",e),u.a.render(Object(l.jsx)(d,{name:e}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(h)}}]),n}(Object(o.a)(HTMLElement));customElements.define("my-widget",m)}},[[17,1,2]]]);
//# sourceMappingURL=main.c2e58f3a.chunk.js.map