(window.webpackJsonp=window.webpackJsonp||[]).push([["0340"],{"+oT+":function(e,t,n){var r=n("eVuF");function a(e,t,n,a,u,o,i){try{var c=e[o](i),l=c.value}catch(s){return void n(s)}c.done?t(l):r.resolve(l).then(a,u)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,u){var o=e.apply(t,n);function i(e){a(o,r,u,i,c,"next",e)}function c(e){a(o,r,u,i,c,"throw",e)}i(void 0)})}}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),u=n("O40h"),o=n("0iUn"),i=n("sLSF"),c=n("MI3g"),l=n("a7VT"),s=n("Tit0"),f=n("q1tI"),p=n.n(f),d=n("8Bbg"),h=n.n(d),m=n("m/Pd"),v=n.n(m),y=function(e){function t(){return Object(o.default)(this,t),Object(c.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return p.a.createElement(d.Container,null,p.a.createElement(v.a,null,p.a.createElement("meta",{charSet:"utf-8"}),p.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),p.a.createElement("meta",{name:"theme-color",content:"#000000"}),p.a.createElement("meta",{name:"Description",content:"Dillon Streator personal portfolio site"}),p.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}),p.a.createElement("link",{rel:"manifest",href:"/static/manifest.json"}),p.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat|Ubuntu"}),p.a.createElement("link",{rel:"stylesheet",href:"/static/css/main.css"}),p.a.createElement("title",{key:"title"},"Dillon Streator")),p.a.createElement(t,n))}}],[{key:"getInitialProps",value:function(){var e=Object(u.default)(a.a.mark(function e(t){var n,r,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,u={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:u=e.sent;case 6:return e.abrupt("return",{pageProps:u});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.a);t.default=y},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),u=r(n("+oT+")),o=r(n("UXZV")),i=r(n("/HRN")),c=r(n("WaGi")),l=r(n("ZDA2")),s=r(n("/+P4")),f=r(n("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=p(n("q1tI")),m=d(n("lgD3")),v=n("Bu4q"),y=n("nOHt"),k=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{router:y.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=g(t);return h.default.createElement(w,null,h.default.createElement(n,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(a.default.mark(function e(t){var n,r,u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,v.loadGetInitialProps(n,r);case 3:return u=e.sent,e.abrupt("return",{pageProps:u});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);k.childContextTypes={router:m.default.object},t.default=k;var w=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=w;var b=v.execOnce(function(){0});function g(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=g},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])}},[["GcxT","5d41","9da1"]]]);