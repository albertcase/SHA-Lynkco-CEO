/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
// http://www.makeitgo.ws/articles/animationframe/
;(function() {
    var lastFrame, method, now, queue, requestAnimationFrame, timer, vendor, _i, _len, _ref, _ref1;
    method = 'native';
    now = Date.now || function() {
        return new Date().getTime();
    };
    requestAnimationFrame = window.requestAnimationFrame;
    _ref = ['webkit', 'moz', 'o', 'ms'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        vendor = _ref[_i];
        if (requestAnimationFrame == null) {
            requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
        }
    }
    if (requestAnimationFrame == null) {
        method = 'timer';
        lastFrame = 0;
        queue = timer = null;
        requestAnimationFrame = function(callback) {
            var fire, nextFrame, time;
            if (queue != null) {
                queue.push(callback);
                return;
            }
            time = now();
            nextFrame = Math.max(0, 16.66 - (time - lastFrame));
            queue = [callback];
            lastFrame = time + nextFrame;
            fire = function() {
                var cb, q, _j, _len1;
                q = queue;
                queue = null;
                for (_j = 0, _len1 = q.length; _j < _len1; _j++) {
                    cb = q[_j];
                    cb(lastFrame);
                }
            };
            timer = setTimeout(fire, nextFrame);
        };
    }
    requestAnimationFrame(function(time) {
        var offset, _ref1;
        if (time < 1e12) {
            if (((_ref1 = window.performance) != null ? _ref1.now : void 0) != null) {
                requestAnimationFrame.now = function() {
                    return window.performance.now();
                };
                requestAnimationFrame.method = 'native-highres';
            } else {
                offset = now() - time;
                requestAnimationFrame.now = function() {
                    return now() - offset;
                };
                requestAnimationFrame.method = 'native-highres-noperf';
            }
        } else {
            requestAnimationFrame.now = now;
        }
    });
    requestAnimationFrame.now = ((_ref1 = window.performance) != null ? _ref1.now : void 0) != null ? (function() {
        return window.performance.now();
    }) : now;
    requestAnimationFrame.method = method;
    window.requestAnimationFrame = requestAnimationFrame;

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(timer) {
            clearTimeout(timer);
        };
})();


/**
 * Created by Eric Lee on 8/24/14.
 * Modified by Eric Lee on 6/17/16.
 */
;(function(){
    'use strict';

    var reqAnimate = function(element, options) {
        this.options = {
            fps: 30,
            totalFrames: 16,
            time: Infinity,
            processAnimation: function(){},
            doneAnimation: function(){}
        };
        this.element = element;
        this.currentFrame = 0;
        this.lastFrame = 0;
        this.frameNum = 0;
        this.startTime = window.requestAnimationFrame.now();
        //requestId = null;
        this.timeIndex = 1;

        options && typeof options == 'object' && this.setOptions(options);

        // this.options.fps=6;

    };
    var requestId = null;
    var canceled = 0;

    reqAnimate.prototype.start = function() {
        canceled = 0;
        this.loop(this.startTime);
    };

    reqAnimate.prototype.cancel = function() {
        if (requestId) {
            window.cancelAnimationFrame(requestId);
            requestId = null;
            canceled = 1;
        }
    };

    reqAnimate.prototype.setOptions = function(options){
        // shallow copy
        var o = this.options,
            key;

        for (key in options) options.hasOwnProperty(key) && (o[key] = options[key]);

        return this;
    };

    reqAnimate.prototype.loop = function(time) {
        var o = this.options;
        if (!canceled) {
            this.updateFrame(time);
            requestId = window.requestAnimationFrame(this.loop.bind(this));

            if ((this.frameNum + 1 == o.totalFrames) && o.time !== Infinity && this.timeIndex >= o.time) {
                this.cancel();
                o.doneAnimation && o.doneAnimation.call(this, this.element);
            }
        }
    };

    reqAnimate.prototype.updateFrame = function(time) {
        var o = this.options
            , delta = (time - this.startTime) / 1000;
        this.currentFrame += (delta * o.fps);

        this.frameNum = Math.floor(this.currentFrame);

        if (this.frameNum >= o.totalFrames) {
            this.currentFrame = this.frameNum = 0;
            this.timeIndex++;
            this.lastFrame = -1;
        }

        this.frameNum >= 0
        && this.frameNum > this.lastFrame
        && o.processAnimation
        && o.processAnimation.call(this, this.element, this.frameNum);

        this.startTime = window.requestAnimationFrame.now();
        this.lastFrame = this.frameNum;
    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return reqAnimate;
        });
    }
    else {
        this.reqAnimate = reqAnimate;
    }

}).call(this);
;(function(){
	'use strict';

	// can we support addEventListener
	var hasNative = 'addEventListener' in (new Image());

	var preLoader = function(images, options){
		this.options = {
			pipeline: false,
			auto: true,
			prefetch: false,
			/* onProgress: function(){}, */
			/* onError: function(){}, */
			onComplete: function(){}
		};

		options && typeof options == 'object' && this.setOptions(options);

		this.addQueue(images);
		this.queue.length && this.options.auto && this.processQueue();
	};

	preLoader.prototype.setOptions = function(options){
		// shallow copy
		var o = this.options,
			key;

		for (key in options) options.hasOwnProperty(key) && (o[key] = options[key]);

		return this;
	};

	preLoader.prototype.addQueue = function(images){
		// stores a local array, dereferenced from original
		this.queue = images.slice();

		return this;
	};

	preLoader.prototype.reset = function(){
		// reset the arrays
		this.completed = [];
		this.errors = [];

		return this;
	};

	preLoader.prototype.addEvents = function(image, src, index){
		var self = this,
			o = this.options,
			cleanup = function(){
				if (hasNative){
					this.removeEventListener('error', abort);
					this.removeEventListener('abort', abort);
					this.removeEventListener('load', load);
				}
				else {
					this.onerror = this.onabort = this.onload = null;
				}
			},
			abort = function(){
				//console.log('src error:' + src);
				cleanup.call(this);

				self.errors.push(src);
				o.onError && o.onError.call(self, src);
				checkProgress.call(self, src);
				o.pipeline && self.loadNext(index);
			},
			load = function(){
				//console.log('src load:' + src);
				cleanup.call(this);

				// store progress. this === image
				self.completed.push(src); // this.src may differ
				checkProgress.call(self, src, this);
				o.pipeline && self.loadNext(index);
			};

		if (hasNative){
			image.addEventListener('error', abort, false);
			image.addEventListener('abort', abort, false);
			image.addEventListener('load', load, false);
		}
		else {
			image.onerror = image.onabort = abort;
			image.onload = load;
		}

	};

	preLoader.prototype.load = function(src, index){
		/*jshint -W058 */
		var image = new Image;

		this.addEvents(image, src, index);

		// actually load
		image.src = src;

		return this;
	};

	preLoader.prototype.loadNext = function(index){
		// when pipeline loading is enabled, calls next item
		index++;
		this.queue[index] && this.load(this.queue[index], index);

		return this;
	};

	preLoader.prototype.processQueue = function(){
		// runs through all queued items.
		var i = 0,
			queue = this.queue,
			len = queue.length;

		// process all queue items
		this.reset();

		if (!this.options.pipeline) for (; i < len; ++i) this.load(queue[i], i);
		else this.load(queue[0], 0);

		return this;
	};

	/*jshint validthis:true */
	function checkProgress(src, image){
		// intermediate checker for queue remaining. not exported.
		// called on preLoader instance as scope
		var args = [],
			o = this.options;

		// call onProgress
		o.onProgress && src && o.onProgress.call(this, src, image, this.completed.length);

		if (this.completed.length + this.errors.length === this.queue.length){
			args.push(this.completed);
			this.errors.length && args.push(this.errors);
			o.onComplete.apply(this, args);
		}

		return this;
	}
	/*jshint validthis:false */

	if (typeof define === 'function' && define.amd){
		// we have an AMD loader.
		define(function(){
			return preLoader;
		});
	}
	else {
		this.preLoader = preLoader;
	}
}).call(this);

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="./dist/",t(0)}([function(e,t,n){n(5),n(6),e.exports=n(7)},function(e,t,n){(function(t){!function(n){function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(a,this),r(s,this))}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void f(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function a(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(a,this),r(s,this))}this._state=!0,this._value=e,c.call(this)}catch(n){s.call(this,n)}}function s(e){this._state=!1,this._value=e,c.call(this)}function c(){for(var e=0,t=this._deferreds.length;t>e;e++)o.call(this,this._deferreds[e]);this._deferreds=null}function u(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}var f="function"==typeof t&&t||function(e){setTimeout(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i(function(r,i){o.call(n,new u(e,t,r,i))})},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new i(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(c){n(c)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._setImmediateFn=function(e){f=e},i.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,r){function i(e,t){this._id=e,this._clearFn=t}var o=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,c={},u=0;t.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=u++,r=arguments.length<2?!1:s.call(arguments,1);return c[n]=!0,o(function(){c[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete c[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(){u=!1,a.length?c=a.concat(c):l=-1,c.length&&r()}function r(){if(!u){var e=setTimeout(n);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a[l].run();l=-1,t=c.length}a=null,u=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function o(){}var a,s=e.exports={},c=[],u=!1,l=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new i(e,t)),1!==c.length||u||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,r){var i,o;(function(){function r(e){return!!e.exifdata}function a(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;r>a;a++)o[a]=n.charCodeAt(a);return i}function s(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response)},n.send()}function c(e,t){function n(n){var r=u(n),i=l(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var r=a(e.src);n(r)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},s(e.src,function(e){i.readAsArrayBuffer(e)})}else{var o=new XMLHttpRequest;o.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(o.response),o=null},o.open("GET",e.src,!0),o.responseType="arraybuffer",o.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var i=new FileReader;i.onload=function(e){p&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},i.readAsArrayBuffer(e)}}function u(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n,r=2,i=e.byteLength;i>r;){if(255!=t.getUint8(r))return p&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),p&&console.log(n),225==n)return p&&console.log("Found 0xFFE1 marker"),m(t,r+4,t.getUint16(r+2)-2);r+=2+t.getUint16(r+2)}}function l(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};r>n;){if(i(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var a=n+8+o,s=t.getUint16(n+6+o);return f(e,a,s)}n++}}function f(e,t,n){for(var r,i,o,a,s,c=new DataView(e),u={},l=t;t+n>l;)28===c.getUint8(l)&&2===c.getUint8(l+1)&&(a=c.getUint8(l+2),a in I&&(o=c.getInt16(l+3),s=o+5,i=I[a],r=g(c,l+5,o),u.hasOwnProperty(i)?u[i]instanceof Array?u[i].push(r):u[i]=[u[i],r]:u[i]=r)),l++;return u}function h(e,t,n,r,i){var o,a,s,c=e.getUint16(n,!i),u={};for(s=0;c>s;s++)o=n+12*s+2,a=r[e.getUint16(o,!i)],!a&&p&&console.log("Unknown tag: "+e.getUint16(o,!i)),u[a]=d(e,o,t,n,i);return u}function d(e,t,n,r,i){var o,a,s,c,u,l,f=e.getUint16(t+2,!i),h=e.getUint32(t+4,!i),d=e.getUint32(t+8,!i)+n;switch(f){case 1:case 7:if(1==h)return e.getUint8(t+8,!i);for(o=h>4?d:t+8,a=[],c=0;h>c;c++)a[c]=e.getUint8(o+c);return a;case 2:return o=h>4?d:t+8,g(e,o,h-1);case 3:if(1==h)return e.getUint16(t+8,!i);for(o=h>2?d:t+8,a=[],c=0;h>c;c++)a[c]=e.getUint16(o+2*c,!i);return a;case 4:if(1==h)return e.getUint32(t+8,!i);for(a=[],c=0;h>c;c++)a[c]=e.getUint32(d+4*c,!i);return a;case 5:if(1==h)return u=e.getUint32(d,!i),l=e.getUint32(d+4,!i),s=new Number(u/l),s.numerator=u,s.denominator=l,s;for(a=[],c=0;h>c;c++)u=e.getUint32(d+8*c,!i),l=e.getUint32(d+4+8*c,!i),a[c]=new Number(u/l),a[c].numerator=u,a[c].denominator=l;return a;case 9:if(1==h)return e.getInt32(t+8,!i);for(a=[],c=0;h>c;c++)a[c]=e.getInt32(d+4*c,!i);return a;case 10:if(1==h)return e.getInt32(d,!i)/e.getInt32(d+4,!i);for(a=[],c=0;h>c;c++)a[c]=e.getInt32(d+8*c,!i)/e.getInt32(d+4+8*c,!i);return a}}function g(e,t,r){var i="";for(n=t;n<t+r;n++)i+=String.fromCharCode(e.getUint8(n));return i}function m(e,t){if("Exif"!=g(e,t,4))return p&&console.log("Not valid EXIF data! "+g(e,t,4)),!1;var n,r,i,o,a,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return p&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(s+2,!n))return p&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var c=e.getUint32(s+4,!n);if(8>c)return p&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(s+4,!n)),!1;if(r=h(e,s,s+c,y,n),r.ExifIFDPointer){o=h(e,s,s+r.ExifIFDPointer,v,n);for(i in o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=b[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=b.Components[o[i][0]]+b.Components[o[i][1]]+b.Components[o[i][2]]+b.Components[o[i][3]]}r[i]=o[i]}}if(r.GPSInfoIFDPointer){a=h(e,s,s+r.GPSInfoIFDPointer,S,n);for(i in a){switch(i){case"GPSVersionID":a[i]=a[i][0]+"."+a[i][1]+"."+a[i][2]+"."+a[i][3]}r[i]=a[i]}}return r}var p=!1,w=function(e){return e instanceof w?e:this instanceof w?void(this.EXIFwrapped=e):new w(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=w),t.EXIF=w;var v=w.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},y=w.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},S=w.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=w.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},I={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};w.getData=function(e,t){return(e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(r(e)?t&&t.call(e):c(e,t),!0)},w.getTag=function(e,t){return r(e)?e.exifdata[t]:void 0},w.getAllTags=function(e){if(!r(e))return{};var t,n=e.exifdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},w.pretty=function(e){if(!r(e))return"";var t,n=e.exifdata,i="";for(t in n)n.hasOwnProperty(t)&&(i+="object"==typeof n[t]?n[t]instanceof Number?t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":t+" : ["+n[t].length+" values]\r\n":t+" : "+n[t]+"\r\n");return i},w.readFromBinaryFile=function(e){return u(e)},i=[],o=function(){return w}.apply(t,i),!(void 0!==o&&(e.exports=o))}).call(this)},function(e,t,n){var r,i;!function(){function n(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),0===i.getImageData(0,0,1,1).data[3]}return!1}function o(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);for(var o=i.getImageData(0,0,1,n).data,a=0,s=n,c=n;c>a;){var u=o[4*(c-1)+3];0===u?s=c:a=c,c=s+a>>1}var l=c/n;return 0===l?1:l}function a(e,t,n){var r=document.createElement("canvas");return s(e,r,t,n),r.toDataURL("image/jpeg",t.quality||.8)}function s(e,t,r,i){var a=e.naturalWidth,s=e.naturalHeight,u=r.width,l=r.height,f=t.getContext("2d");f.save(),c(t,f,u,l,r.orientation);var h=n(e);h&&(a/=2,s/=2);var d=1024,g=document.createElement("canvas");g.width=g.height=d;for(var m=g.getContext("2d"),p=i?o(e,a,s):1,w=Math.ceil(d*u/a),v=Math.ceil(d*l/s/p),y=0,S=0;s>y;){for(var b=0,I=0;a>b;)m.clearRect(0,0,d,d),m.drawImage(e,-b,-y),f.drawImage(g,0,0,d,d,I,S,w,v),b+=d,I+=w;y+=d,S+=v}f.restore(),g=m=null}function c(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-n,0)}}function u(e){if(window.Blob&&e instanceof Blob){var t=new Image,n=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!n)throw Error("No createObjectURL function found to create blob url");t.src=n.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,n=e.length;n>t;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}u.prototype.render=function(e,t,n){if(this.imageLoadListeners){var r=this;return void this.imageLoadListeners.push(function(){r.render(e,t,n)})}t=t||{};var i=this.srcImage,o=i.src,c=o.length,u=i.naturalWidth,l=i.naturalHeight,f=t.width,h=t.height,d=t.maxWidth,g=t.maxHeight,m=this.blob&&"image/jpeg"===this.blob.type||0===o.indexOf("data:image/jpeg")||o.indexOf(".jpg")===c-4||o.indexOf(".jpeg")===c-5;f&&!h?h=l*f/u<<0:h&&!f?f=u*h/l<<0:(f=u,h=l),d&&f>d&&(f=d,h=l*f/u<<0),g&&h>g&&(h=g,f=u*h/l<<0);var p={width:f,height:h};for(var w in t)p[w]=t[w];var v=e.tagName.toLowerCase();"img"===v?e.src=a(this.srcImage,p,m):"canvas"===v&&s(this.srcImage,e,p,m),"function"==typeof this.onrender&&this.onrender(e),n&&n()},r=[],i=function(){return u}.apply(t,r),!(void 0!==i&&(e.exports=i))}()},function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=F((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),U[N[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;64>o;o++){var a=F((i[o]*e+50)/100);1>a?a=1:a>255&&(a=255),D[N[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],c=0,u=0;8>u;u++)for(var l=0;8>l;l++)T[c]=1/(U[N[c]]*s[u]*s[l]*8),x[c]=1/(D[N[c]]*s[u]*s[l]*8),c++}function n(e,t){for(var n=0,r=0,i=new Array,o=1;16>=o;o++){for(var a=1;a<=e[o];a++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=o,r++,n++;n*=2}return i}function r(){y=n(W,H),S=n(q,X),b=n(V,z),I=n(Y,J)}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++)L[32767+r]=n,C[32767+r]=[],C[32767+r][1]=n,C[32767+r][0]=r;for(var i=-(t-1);-e>=i;i++)L[32767+i]=n,C[32767+i]=[],C[32767+i][1]=n,C[32767+i][0]=t-1+i;e<<=1,t<<=1}}function o(){for(var e=0;256>e;e++)B[e]=19595*e,B[e+256>>0]=38470*e,B[e+512>>0]=7471*e+32768,B[e+768>>0]=-11059*e,B[e+1024>>0]=-21709*e,B[e+1280>>0]=32768*e+8421375,B[e+1536>>0]=-27439*e,B[e+1792>>0]=-5329*e}function a(e){for(var t=e[0],n=e[1]-1;n>=0;)t&1<<n&&(M|=1<<_),n--,_--,0>_&&(255==M?(s(255),s(0)):s(M),_=7,M=0)}function s(e){G.push(j[e])}function c(e){s(e>>8&255),s(255&e)}function u(e,t){var n,r,i,o,a,s,c,u,l,f=0;const h=8,d=64;for(l=0;h>l;++l){n=e[f],r=e[f+1],i=e[f+2],o=e[f+3],a=e[f+4],s=e[f+5],c=e[f+6],u=e[f+7];var g=n+u,m=n-u,p=r+c,w=r-c,v=i+s,y=i-s,S=o+a,b=o-a,I=g+S,P=g-S,F=p+v,U=p-v;e[f]=I+F,e[f+4]=I-F;var D=.707106781*(U+P);e[f+2]=P+D,e[f+6]=P-D,I=b+y,F=y+w,U=w+m;var T=.382683433*(I-U),x=.5411961*I+T,C=1.306562965*U+T,L=.707106781*F,A=m+L,G=m-L;e[f+5]=G+x,e[f+3]=G-x,e[f+1]=A+C,e[f+7]=A-C,f+=8}for(f=0,l=0;h>l;++l){n=e[f],r=e[f+8],i=e[f+16],o=e[f+24],a=e[f+32],s=e[f+40],c=e[f+48],u=e[f+56];var M=n+u,_=n-u,E=r+c,k=r-c,O=i+s,j=i-s,B=o+a,N=o-a,W=M+B,H=M-B,V=E+O,z=E-O;e[f]=W+V,e[f+32]=W-V;var q=.707106781*(z+H);e[f+16]=H+q,e[f+48]=H-q,W=N+j,V=j+k,z=k+_;var X=.382683433*(W-z),Y=.5411961*W+X,J=1.306562965*z+X,K=.707106781*V,Q=_+K,Z=_-K;e[f+40]=Z+Y,e[f+24]=Z-Y,e[f+8]=Q+J,e[f+56]=Q-J,f++}var $;for(l=0;d>l;++l)$=e[l]*t[l],R[l]=$>0?$+.5|0:$-.5|0;return R}function l(){c(65504),c(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),c(1),c(1),s(0),s(0)}function f(e,t){c(65472),c(17),s(8),c(t),c(e),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1)}function h(){c(65499),c(132),s(0);for(var e=0;64>e;e++)s(U[e]);s(1);for(var t=0;64>t;t++)s(D[t])}function d(){c(65476),c(418),s(0);for(var e=0;16>e;e++)s(W[e+1]);for(var t=0;11>=t;t++)s(H[t]);s(16);for(var n=0;16>n;n++)s(V[n+1]);for(var r=0;161>=r;r++)s(z[r]);s(1);for(var i=0;16>i;i++)s(q[i+1]);for(var o=0;11>=o;o++)s(X[o]);s(17);for(var a=0;16>a;a++)s(Y[a+1]);for(var u=0;161>=u;u++)s(J[u])}function g(){c(65498),c(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0)}function m(e,t,n,r,i){var o,s=i[0],c=i[240];const l=16,f=63,h=64;for(var d=u(e,t),g=0;h>g;++g)A[N[g]]=d[g];var m=A[0]-n;n=A[0],0==m?a(r[0]):(o=32767+m,a(r[L[o]]),a(C[o]));for(var p=63;p>0&&0==A[p];p--);if(0==p)return a(s),n;for(var w,v=1;p>=v;){for(var y=v;0==A[v]&&p>=v;++v);var S=v-y;if(S>=l){w=S>>4;for(var b=1;w>=b;++b)a(c);S=15&S}o=32767+A[v],a(i[(S<<4)+L[o]]),a(C[o]),v++}return p!=f&&a(s),n}function p(){for(var e=String.fromCharCode,t=0;256>t;t++)j[t]=e(t)}function w(e){if(0>=e&&(e=1),e>100&&(e=100),P!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),P=e}}function v(){var t=(new Date).getTime();e||(e=50),p(),r(),i(),o(),w(e);(new Date).getTime()-t}var y,S,b,I,P,F=(Math.round,Math.floor),U=new Array(64),D=new Array(64),T=new Array(64),x=new Array(64),C=new Array(65535),L=new Array(65535),R=new Array(64),A=new Array(64),G=[],M=0,_=7,E=new Array(64),k=new Array(64),O=new Array(64),j=new Array(256),B=new Array(2048),N=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],H=[0,1,2,3,4,5,6,7,8,9,10,11],V=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],z=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],q=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],Y=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],J=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&w(t),G=new Array,M=0,_=7,c(65496),l(),h(),f(e.width,e.height),d(),g();var i=0,o=0,s=0;M=0,_=7,this.encode.displayName="_encode_";for(var u,p,v,P,F,U,D,C,L,R=e.data,A=e.width,j=e.height,N=4*A,W=0;j>W;){for(u=0;N>u;){for(F=N*W+u,U=F,D=-1,C=0,L=0;64>L;L++)C=L>>3,D=4*(7&L),U=F+C*N+D,W+C>=j&&(U-=N*(W+1+C-j)),u+D>=N&&(U-=u+D-N+4),p=R[U++],v=R[U++],P=R[U++],E[L]=(B[p]+B[v+256>>0]+B[P+512>>0]>>16)-128,k[L]=(B[p+768>>0]+B[v+1024>>0]+B[P+1280>>0]>>16)-128,O[L]=(B[p+1280>>0]+B[v+1536>>0]+B[P+1792>>0]>>16)-128;i=m(E,T,i,y,b),o=m(k,x,o,S,I),s=m(O,x,s,S,I),u+=32}W+=8}if(_>=0){var H=[];H[1]=_+1,H[0]=(1<<_+1)-1,a(H)}if(c(65497),n){for(var V=G.length,z=new Uint8Array(V),q=0;V>q;q++)z[q]=G[q].charCodeAt();G=[];(new Date).getTime()-r;return z}var X="data:image/jpeg;base64,"+btoa(G.join(""));G=[];(new Date).getTime()-r;return X},v()}e.exports=n},function(e,t,n){function r(e,t){var n=this;if(!e)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG4/issues/7");t=t||{},n.defaults={width:null,height:null,quality:.7},n.file=e;for(var r in t)t.hasOwnProperty(r)&&(n.defaults[r]=t[r]);return this.init()}function i(){var e=document.scripts[document.scripts.length-1].src;return e.substr(0,e.lastIndexOf("/"))}n.p=i()+"/",window.URL=window.URL||window.webkitURL;var o=n(1),a=n(4),s=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e);return null===t?!1:+t.pop()<8}(navigator.userAgent),c=function(e){var t=/Android (\d.*?);/g.exec(e);return null===t?!1:+t.pop().substr(0,3)<4.5}(navigator.userAgent),u=function(e){return/MQQBrowser/g.test(e)}(navigator.userAgent);r.prototype.init=function(){var e=this,t=e.file,n=new Image,r=document.createElement("canvas"),i="string"==typeof t?t:URL.createObjectURL(t);if(e.img=n,e.blob=i,e.canvas=r,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new o(function(t,r){n.onerror=function(){throw new Error("加载图片文件失败")},n.onload=function(){e._getBase64().then(function(e){return e.length<10&&r("生成base64失败"),e}).then(function(n){t({origin:e.file,base64:n,base64Len:n.length});for(var r in e)e.hasOwnProperty(r)&&(e[r]=null);URL.revokeObjectURL(e.blob)})},n.crossOrigin="*",n.src=i})},r.prototype._getBase64=function(){var e=this,t=e.img,n=e.canvas;return new o(function(r){a.getData(t,function(){e.orientation=a.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=n.getContext("2d"),n.width=e.resize.width,n.height=e.resize.height,e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,n.width,n.height),s?e._createBase64ForOldIOS().then(r):e._createBase64().then(r)})})},r.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,r=e.canvas,i=e.orientation;return new o(function(o){!function(){var a=[n(5)];(function(n){var a=new n(t);"5678".indexOf(i)>-1?a.render(r,{width:r.height,height:r.width,orientation:i}):a.render(r,{width:r.width,height:r.height,orientation:i}),o(r.toDataURL("image/jpeg",e.defaults.quality))}).apply(null,a)}()})},r.prototype._createBase64=function(){var e=this,t=e.resize,r=e.img,i=e.canvas,a=e.ctx,s=e.defaults,l=e.orientation;switch(l){case 3:a.rotate(180*Math.PI/180),a.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 6:a.rotate(90*Math.PI/180),a.drawImage(r,0,-t.width,t.height,t.width);break;case 8:a.rotate(270*Math.PI/180),a.drawImage(r,-t.height,0,t.height,t.width);break;case 2:a.translate(t.width,0),a.scale(-1,1),a.drawImage(r,0,0,t.width,t.height);break;case 4:a.translate(t.width,0),a.scale(-1,1),a.rotate(180*Math.PI/180),a.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 5:a.translate(t.width,0),a.scale(-1,1),a.rotate(90*Math.PI/180),a.drawImage(r,0,-t.width,t.height,t.width);break;case 7:a.translate(t.width,0),a.scale(-1,1),a.rotate(270*Math.PI/180),a.drawImage(r,-t.height,0,t.height,t.width);break;default:a.drawImage(r,0,0,t.width,t.height)}return new o(function(e){c||u?!function(){var t=[n(6)];(function(t){var n=new t,r=a.getImageData(0,0,i.width,i.height);e(n.encode(r,100*s.quality))}).apply(null,t)}():e(i.toDataURL("image/jpeg",s.quality))})},r.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,r=n.width,i=n.height,o=e.orientation,a={width:t.width,height:t.height};"5678".indexOf(o)>-1&&(a.width=t.height,a.height=t.width);var s=a.width/a.height;for(r&&i?s>=r/i?a.width>r&&(a.width=r,a.height=Math.ceil(r/s)):a.height>i&&(a.height=i,a.width=Math.ceil(i*s)):r?r<a.width&&(a.width=r,a.height=Math.ceil(r/s)):i&&i<a.height&&(a.width=Math.ceil(i*s),a.height=i);a.width>=3264||a.height>=2448;)a.width*=.8,a.height*=.8;return a},window.lrz=function(e,t){return new r(e,t)},window.lrz.version="4.1.11",e.exports=window.lrz}]);
/* build: `node build.js modules=text,gestures,interaction,serialization minifier=uglifyjs` */
var fabric=fabric||{version:"1.5.0"};typeof exports!="undefined"&&(exports.fabric=fabric),typeof document!="undefined"&&typeof window!="undefined"?(fabric.document=document,fabric.window=window,window.fabric=fabric):(fabric.document=require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>"),fabric.document.createWindow?fabric.window=fabric.document.createWindow():fabric.window=fabric.document.parentWindow),fabric.isTouchSupported="ontouchstart"in fabric.document.documentElement,fabric.isLikelyNode=typeof Buffer!="undefined"&&typeof window=="undefined",fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)";typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;typeof JSON.stringify!="function"&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();if(typeof eventjs=="undefined")var eventjs={};(function(e){"use strict";e.modifyEventListener=!1,e.modifySelectors=!1,e.configure=function(t){isFinite(t.modifyEventListener)&&(e.modifyEventListener=t.modifyEventListener),isFinite(t.modifySelectors)&&(e.modifySelectors=t.modifySelectors),d===!1&&e.modifyEventListener&&v(),m===!1&&e.modifySelectors&&g()},e.add=function(e,t,r,i){return n(e,t,r,i,"add")},e.remove=function(e,t,r,i){return n(e,t,r,i,"remove")},e.returnFalse=function(e){return!1},e.stop=function(e){if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.cancelBubbleCount=0},e.prevent=function(e){if(!e)return;e.preventDefault?e.preventDefault():e.preventManipulation?e.preventManipulation():e.returnValue=!1},e.cancel=function(t){e.stop(t),e.prevent(t)},e.blur=function(){var e=document.activeElement;if(!e)return;var t=document.activeElement.nodeName;(t==="INPUT"||t==="TEXTAREA"||e.contentEditable==="true")&&e.blur&&e.blur()},e.getEventSupport=function(e,t){typeof e=="string"&&(t=e,e=window),t="on"+t;if(t in e)return!0;e.setAttribute||(e=document.createElement("div"));if(e.setAttribute&&e.removeAttribute){e.setAttribute(t,"");var n=typeof e[t]=="function";return typeof e[t]!="undefined"&&(e[t]=null),e.removeAttribute(t),n}};var t=function(e){if(!e||typeof e!="object")return e;var n=new e.constructor;for(var r in e)!e[r]||typeof e[r]!="object"?n[r]=e[r]:n[r]=t(e[r]);return n},n=function(s,o,u,l,d,v){l=l||{};if(String(s)==="[object Object]"){var m=s;s=m.target,delete m.target;if(!m.type||!m.listener){for(var y in m){var b=m[y];if(typeof b=="function")continue;l[y]=b}var w={};for(var g in m){var y=g.split(","),E=m[g],S={};for(var x in l)S[x]=l[x];if(typeof E=="function")var u=E;else{if(typeof E.listener!="function")continue;var u=E.listener;for(var x in E){if(typeof E[x]=="function")continue;S[x]=E[x]}}for(var T=0;T<y.length;T++)w[g]=eventjs.add(s,y[T],u,S,d)}return w}o=m.type,delete m.type,u=m.listener,delete m.listener;for(var g in m)l[g]=m[g]}if(!s||!o||!u)return;if(typeof s=="string"&&o==="ready"){if(!window.eventjs_stallOnReady){var N=(new Date).getTime(),C=l.timeout,k=l.interval||1e3/60,L=window.setInterval(function(){(new Date).getTime()-N>C&&window.clearInterval(L),document.querySelector(s)&&(window.clearInterval(L),setTimeout(u,1))},k);return}o="load",s=window}if(typeof s=="string"){s=document.querySelectorAll(s);if(s.length===0)return i("Missing target on listener!",arguments);s.length===1&&(s=s[0])}var A,O={};if(s.length>0&&s!==window){for(var M=0,_=s.length;M<_;M++)A=n(s[M],o,u,t(l),d),A&&(O[M]=A);return r(O)}typeof o=="string"&&(o=o.toLowerCase(),o.indexOf(" ")!==-1?o=o.split(" "):o.indexOf(",")!==-1&&(o=o.split(",")));if(typeof o!="string"){if(typeof o.length=="number")for(var D=0,P=o.length;D<P;D++)A=n(s,o[D],u,t(l),d),A&&(O[o[D]]=A);else for(var g in o)typeof o[g]=="function"?A=n(s,g,o[g],t(l),d):A=n(s,g,o[g].listener,t(o[g]),d),A&&(O[g]=A);return r(O)}o.indexOf("on")===0&&(o=o.substr(2));if(typeof s!="object")return i("Target is not defined!",arguments);if(typeof u!="function")return i("Listener is not a function!",arguments);var H=l.useCapture||!1,B=c(s)+"."+c(u)+"."+(H?1:0);if(e.Gesture&&e.Gesture._gestureHandlers[o]){B=o+B;if(d==="remove"){if(!f[B])return;f[B].remove(),delete f[B]}else if(d==="add"){if(f[B])return f[B].add(),f[B];if(l.useCall&&!e.modifyEventListener){var j=u;u=function(e,t){for(var n in t)e[n]=t[n];return j.call(s,e)}}l.gesture=o,l.target=s,l.listener=u,l.fromOverwrite=v,f[B]=e.proxy[o](l)}return f[B]}var F=a(o);for(var T=0,I;T<F.length;T++){o=F[T],I=o+"."+B;if(d==="remove"){if(!f[I])continue;s[p](o,u,H),delete f[I]}else if(d==="add"){if(f[I])return f[I];s[h](o,u,H),f[I]={id:I,type:o,target:s,listener:u,remove:function(){for(var t=0;t<F.length;t++)e.remove(s,F[t],u,l)}}}}return f[I]},r=function(e){return{remove:function(){for(var t in e)e[t].remove()},add:function(){for(var t in e)e[t].add()}}},i=function(e,t){if(typeof console=="undefined")return;if(typeof console.error=="undefined")return;console.error(e,t)},s={msPointer:["MSPointerDown","MSPointerMove","MSPointerUp"],touch:["touchstart","touchmove","touchend"],mouse:["mousedown","mousemove","mouseup"]},o={MSPointerDown:0,MSPointerMove:1,MSPointerUp:2,touchstart:0,touchmove:1,touchend:2,mousedown:0,mousemove:1,mouseup:2},u=function(){e.supports={},window.navigator.msPointerEnabled&&(e.supports.msPointer=!0),e.getEventSupport("touchstart")&&(e.supports.touch=!0),e.getEventSupport("mousedown")&&(e.supports.mouse=!0)}(),a=function(){return function(t){var n=document.addEventListener?"":"on",r=o[t];if(isFinite(r)){var i=[];for(var u in e.supports)i.push(n+s[u][r]);return i}return[n+t]}}(),f={},l=0,c=function(e){return e===window?"#window":e===document?"#document":(e.uniqueID||(e.uniqueID="e"+l++),e.uniqueID)},h=document.addEventListener?"addEventListener":"attachEvent",p=document.removeEventListener?"removeEventListener":"detachEvent";e.createPointerEvent=function(t,n,r){var i=n.gesture,s=n.target,o=t.changedTouches||e.proxy.getCoords(t);if(o.length){var u=o[0];n.pointers=r?[]:o,n.pageX=u.pageX,n.pageY=u.pageY,n.x=n.pageX,n.y=n.pageY}var a=document.createEvent("Event");a.initEvent(i,!0,!0),a.originalEvent=t;for(var f in n){if(f==="target")continue;a[f]=n[f]}var l=a.type;e.Gesture&&e.Gesture._gestureHandlers[l]&&n.oldListener.call(s,a,n,!1)};var d=!1,v=function(){if(!window.HTMLElement)return;var t=function(t){var r=function(r){var i=r+"EventListener",s=t[i];t[i]=function(t,i,o){if(e.Gesture&&e.Gesture._gestureHandlers[t]){var u=o;typeof o=="object"?u.useCall=!0:u={useCall:!0,useCapture:o},n(this,t,i,u,r,!0)}else{var f=a(t);for(var l=0;l<f.length;l++)s.call(this,f[l],i,o)}}};r("add"),r("remove")};navigator.userAgent.match(/Firefox/)?(t(HTMLDivElement.prototype),t(HTMLCanvasElement.prototype)):t(HTMLElement.prototype),t(document),t(window)},m=!1,g=function(){var e=NodeList.prototype;e.removeEventListener=function(e,t,n){for(var r=0,i=this.length;r<i;r++)this[r].removeEventListener(e,t,n)},e.addEventListener=function(e,t,n){for(var r=0,i=this.length;r<i;r++)this[r].addEventListener(e,t,n)}};return e})(eventjs);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";e.pointerSetup=function(e,t){e.target=e.target||window,e.doc=e.target.ownerDocument||e.target,e.minFingers=e.minFingers||e.fingers||1,e.maxFingers=e.maxFingers||e.fingers||Infinity,e.position=e.position||"relative",delete e.fingers,t=t||{},t.enabled=!0,t.gesture=e.gesture,t.target=e.target,t.env=e.env,eventjs.modifyEventListener&&e.fromOverwrite&&(e.oldListener=e.listener,e.listener=eventjs.createPointerEvent);var n=0,r=t.gesture.indexOf("pointer")===0&&eventjs.modifyEventListener?"pointer":"mouse";return e.oldListener&&(t.oldListener=e.oldListener),t.listener=e.listener,t.proxy=function(n){t.defaultListener=e.listener,e.listener=n,n(e.event,t)},t.add=function(){if(t.enabled===!0)return;e.onPointerDown&&eventjs.add(e.target,r+"down",e.onPointerDown),e.onPointerMove&&eventjs.add(e.doc,r+"move",e.onPointerMove),e.onPointerUp&&eventjs.add(e.doc,r+"up",e.onPointerUp),t.enabled=!0},t.remove=function(){if(t.enabled===!1)return;e.onPointerDown&&eventjs.remove(e.target,r+"down",e.onPointerDown),e.onPointerMove&&eventjs.remove(e.doc,r+"move",e.onPointerMove),e.onPointerUp&&eventjs.remove(e.doc,r+"up",e.onPointerUp),t.reset(),t.enabled=!1},t.pause=function(t){e.onPointerMove&&(!t||t.move)&&eventjs.remove(e.doc,r+"move",e.onPointerMove),e.onPointerUp&&(!t||t.up)&&eventjs.remove(e.doc,r+"up",e.onPointerUp),n=e.fingers,e.fingers=0},t.resume=function(t){e.onPointerMove&&(!t||t.move)&&eventjs.add(e.doc,r+"move",e.onPointerMove),e.onPointerUp&&(!t||t.up)&&eventjs.add(e.doc,r+"up",e.onPointerUp),e.fingers=n},t.reset=function(){e.tracker={},e.fingers=0},t};var t=eventjs.supports;eventjs.isMouse=!!t.mouse,eventjs.isMSPointer=!!t.touch,eventjs.isTouch=!!t.msPointer,e.pointerStart=function(t,n,r){var i=(t.type||"mousedown").toUpperCase();i.indexOf("MOUSE")===0?(eventjs.isMouse=!0,eventjs.isTouch=!1,eventjs.isMSPointer=!1):i.indexOf("TOUCH")===0?(eventjs.isMouse=!1,eventjs.isTouch=!0,eventjs.isMSPointer=!1):i.indexOf("MSPOINTER")===0&&(eventjs.isMouse=!1,eventjs.isTouch=!1,eventjs.isMSPointer=!0);var s=function(e,t){var n=r.bbox,i=u[t]={};switch(r.position){case"absolute":i.offsetX=0,i.offsetY=0;break;case"differenceFromLast":i.offsetX=e.pageX,i.offsetY=e.pageY;break;case"difference":i.offsetX=e.pageX,i.offsetY=e.pageY;break;case"move":i.offsetX=e.pageX-n.x1,i.offsetY=e.pageY-n.y1;break;default:i.offsetX=n.x1-n.scrollLeft,i.offsetY=n.y1-n.scrollTop}var s=e.pageX-i.offsetX,o=e.pageY-i.offsetY;i.rotation=0,i.scale=1,i.startTime=i.moveTime=(new Date).getTime(),i.move={x:s,y:o},i.start={x:s,y:o},r.fingers++};r.event=t,n.defaultListener&&(r.listener=n.defaultListener,delete n.defaultListener);var o=!r.fingers,u=r.tracker,a=t.changedTouches||e.getCoords(t),f=a.length;for(var l=0;l<f;l++){var c=a[l],h=c.identifier||Infinity;if(r.fingers){if(r.fingers>=r.maxFingers){var p=[];for(var h in r.tracker)p.push(h);return n.identifier=p.join(","),o}var d=0;for(var v in u){if(u[v].up){delete u[v],s(c,h),r.cancel=!0;break}d++}if(u[h])continue;s(c,h)}else u=r.tracker={},n.bbox=r.bbox=e.getBoundingBox(r.target),r.fingers=0,r.cancel=!1,s(c,h)}var p=[];for(var h in r.tracker)p.push(h);return n.identifier=p.join(","),o},e.pointerEnd=function(e,t,n,r){var i=e.touches||[],s=i.length,o={};for(var u=0;u<s;u++){var a=i[u],f=a.identifier;o[f||Infinity]=!0}for(var f in n.tracker){var l=n.tracker[f];if(o[f]||l.up)continue;r&&r({pageX:l.pageX,pageY:l.pageY,changedTouches:[{pageX:l.pageX,pageY:l.pageY,identifier:f==="Infinity"?Infinity:f}]},"up"),l.up=!0,n.fingers--}if(n.fingers!==0)return!1;var c=[];n.gestureFingers=0;for(var f in n.tracker)n.gestureFingers++,c.push(f);return t.identifier=c.join(","),!0},e.getCoords=function(t){return typeof t.pageX!="undefined"?e.getCoords=function(e){return Array({type:"mouse",x:e.pageX,y:e.pageY,pageX:e.pageX,pageY:e.pageY,identifier:e.pointerId||Infinity})}:e.getCoords=function(e){var t=document.documentElement;return e=e||window.event,Array({type:"mouse",x:e.clientX+t.scrollLeft,y:e.clientY+t.scrollTop,pageX:e.clientX+t.scrollLeft,pageY:e.clientY+t.scrollTop,identifier:Infinity})},e.getCoords(t)},e.getCoord=function(t){if("ontouchstart"in window){var n=0,r=0;e.getCoord=function(e){var t=e.changedTouches;return t&&t.length?{x:n=t[0].pageX,y:r=t[0].pageY}:{x:n,y:r}}}else typeof t.pageX!="undefined"&&typeof t.pageY!="undefined"?e.getCoord=function(e){return{x:e.pageX,y:e.pageY}}:e.getCoord=function(e){var t=document.documentElement;return e=e||window.event,{x:e.clientX+t.scrollLeft,y:e.clientY+t.scrollTop}};return e.getCoord(t)};var n=function(e,t){var n=parseFloat(e.getPropertyValue(t),10);return isFinite(n)?n:0};return e.getBoundingBox=function(e){if(e===window||e===document)e=document.body;var t={},r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,t.x1=r.left,t.y1=r.top,t.scaleX=r.width/e.offsetWidth||1,t.scaleY=r.height/e.offsetHeight||1,t.scrollLeft=0,t.scrollTop=0;var i=window.getComputedStyle(e),s=i.getPropertyValue("box-sizing")==="border-box";if(s===!1){var o=n(i,"border-left-width"),u=n(i,"border-right-width"),a=n(i,"border-bottom-width"),f=n(i,"border-top-width");t.border=[o,u,f,a],t.x1+=o,t.y1+=f,t.width-=u+o,t.height-=a+f}t.x2=t.x1+t.width,t.y2=t.y1+t.height;var l=i.getPropertyValue("position"),c=l==="fixed"?e:e.parentNode;while(c!==null){if(c===document.body)break;if(c.scrollTop===undefined)break;var i=window.getComputedStyle(c),l=i.getPropertyValue("position");if(l!=="absolute"){if(l==="fixed"){t.scrollTop-=c.parentNode.scrollTop,t.scrollLeft-=c.parentNode.scrollLeft;break}t.scrollLeft+=c.scrollLeft,t.scrollTop+=c.scrollTop}c=c.parentNode}return t.scrollBodyLeft=window.pageXOffset!==undefined?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t.scrollBodyTop=window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t.scrollLeft-=t.scrollBodyLeft,t.scrollTop-=t.scrollBodyTop,t},function(){var t=navigator.userAgent.toLowerCase(),n=t.indexOf("macintosh")!==-1,r;n&&t.indexOf("khtml")!==-1?r={91:!0,93:!0}:n&&t.indexOf("firefox")!==-1?r={224:!0}:r={17:!0},(e.metaTrackerReset=function(){eventjs.fnKey=e.fnKey=!1,eventjs.metaKey=e.metaKey=!1,eventjs.escKey=e.escKey=!1,eventjs.ctrlKey=e.ctrlKey=!1,eventjs.shiftKey=e.shiftKey=!1,eventjs.altKey=e.altKey=!1})(),e.metaTracker=function(t){var n=t.type==="keydown";t.keyCode===27&&(eventjs.escKey=e.escKey=n),r[t.keyCode]&&(eventjs.metaKey=e.metaKey=n),eventjs.ctrlKey=e.ctrlKey=t.ctrlKey,eventjs.shiftKey=e.shiftKey=t.shiftKey,eventjs.altKey=e.altKey=t.altKey}}(),e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};eventjs.MutationObserver=function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,t=!e&&function(){var e=document.createElement("p"),t=!1,n=function(){t=!0};if(e.addEventListener)e.addEventListener("DOMAttrModified",n,!1);else{if(!e.attachEvent)return!1;e.attachEvent("onDOMAttrModified",n)}return e.setAttribute("id","target"),t}();return function(n,r){if(e){var i={subtree:!1,attributes:!0},s=new e(function(e){e.forEach(function(e){r.call(e.target,e.attributeName)})});s.observe(n,i)}else t?eventjs.add(n,"DOMAttrModified",function(e){r.call(n,e.attrName)}):"onpropertychange"in document.body&&eventjs.add(n,"propertychange",function(e){r.call(n,window.event.propertyName)})}}();if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.click=function(t){t.gesture=t.gesture||"click",t.maxFingers=t.maxFingers||t.fingers||1,t.onPointerDown=function(r){e.pointerStart(r,n,t)&&eventjs.add(t.target,"mouseup",t.onPointerUp)},t.onPointerUp=function(r){if(e.pointerEnd(r,n,t)){eventjs.remove(t.target,"mouseup",t.onPointerUp);var i=r.changedTouches||e.getCoords(r),s=i[0],o=t.bbox,u=e.getBoundingBox(t.target),a=s.pageY-u.scrollBodyTop,f=s.pageX-u.scrollBodyLeft;if(f>o.x1&&a>o.y1&&f<o.x2&&a<o.y2&&o.scrollTop===u.scrollTop){for(var l in t.tracker)break;var c=t.tracker[l];n.x=c.start.x,n.y=c.start.y,t.listener(r,n)}}};var n=e.pointerSetup(t);return n.state="click",eventjs.add(t.target,"mousedown",t.onPointerDown),n},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.click=e.click,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.dbltap=e.dblclick=function(t){t.gesture=t.gesture||"dbltap",t.maxFingers=t.maxFingers||t.fingers||1;var n=700,r,i,s,o,u;t.onPointerDown=function(f){var l=f.changedTouches||e.getCoords(f);r&&!i?(u=l[0],i=(new Date).getTime()-r):(o=l[0],r=(new Date).getTime(),i=0,clearTimeout(s),s=setTimeout(function(){r=0},n)),e.pointerStart(f,a,t)&&(eventjs.add(t.target,"mousemove",t.onPointerMove).listener(f),eventjs.add(t.target,"mouseup",t.onPointerUp))},t.onPointerMove=function(n){if(r&&!i){var a=n.changedTouches||e.getCoords(n);u=a[0]}var f=t.bbox,l=u.pageX-f.x1,c=u.pageY-f.y1;l>0&&l<f.width&&c>0&&c<f.height&&Math.abs(u.pageX-o.pageX)<=25&&Math.abs(u.pageY-o.pageY)<=25||(eventjs.remove(t.target,"mousemove",t.onPointerMove),clearTimeout(s),r=i=0)},t.onPointerUp=function(o){e.pointerEnd(o,a,t)&&(eventjs.remove(t.target,"mousemove",t.onPointerMove),eventjs.remove(t.target,"mouseup",t.onPointerUp));if(r&&i){if(i<=n){a.state=t.gesture;for(var u in t.tracker)break;var f=t.tracker[u];a.x=f.start.x,a.y=f.start.y,t.listener(o,a)}clearTimeout(s),r=i=0}};var a=e.pointerSetup(t);return a.state="dblclick",eventjs.add(t.target,"mousedown",t.onPointerDown),a},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.dbltap=e.dbltap,eventjs.Gesture._gestureHandlers.dblclick=e.dblclick,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.dragElement=function(t,n){e.drag({event:n,target:t,position:"move",listener:function(e,n){t.style.left=n.x+"px",t.style.top=n.y+"px",eventjs.prevent(e)}})},e.drag=function(t){t.gesture="drag",t.onPointerDown=function(r){e.pointerStart(r,n,t)&&(t.monitor||(eventjs.add(t.doc,"mousemove",t.onPointerMove),eventjs.add(t.doc,"mouseup",t.onPointerUp))),t.onPointerMove(r,"down")},t.onPointerMove=function(r,i){if(!t.tracker)return t.onPointerDown(r);var s=t.bbox,o=r.changedTouches||e.getCoords(r),u=o.length;for(var a=0;a<u;a++){var f=o[a],l=f.identifier||Infinity,c=t.tracker[l];if(!c)continue;c.pageX=f.pageX,c.pageY=f.pageY,n.state=i||"move",n.identifier=l,n.start=c.start,n.fingers=t.fingers,t.position==="differenceFromLast"?(n.x=c.pageX-c.offsetX,n.y=c.pageY-c.offsetY,c.offsetX=c.pageX,c.offsetY=c.pageY):(n.x=c.pageX-c.offsetX,n.y=c.pageY-c.offsetY),t.listener(r,n)}},t.onPointerUp=function(r){e.pointerEnd(r,n,t,t.onPointerMove)&&(t.monitor||(eventjs.remove(t.doc,"mousemove",t.onPointerMove),eventjs.remove(t.doc,"mouseup",t.onPointerUp)))};var n=e.pointerSetup(t);return t.event?t.onPointerDown(t.event):(eventjs.add(t.target,"mousedown",t.onPointerDown),t.monitor&&(eventjs.add(t.doc,"mousemove",t.onPointerMove),eventjs.add(t.doc,"mouseup",t.onPointerUp))),n},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.drag=e.drag,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";var t=Math.PI/180,n=function(e,t){var n=0,r=0,i=0;for(var s in t){var o=t[s];if(o.up)continue;n+=o.move.x,r+=o.move.y,i++}return e.x=n/=i,e.y=r/=i,e};return e.gesture=function(r){r.gesture=r.gesture||"gesture",r.minFingers=r.minFingers||r.fingers||2,r.onPointerDown=function(t){var s=r.fingers;e.pointerStart(t,i,r)&&(eventjs.add(r.doc,"mousemove",r.onPointerMove),eventjs.add(r.doc,"mouseup",r.onPointerUp));if(r.fingers===r.minFingers&&s!==r.fingers){i.fingers=r.minFingers,i.scale=1,i.rotation=0,i.state="start";var o="";for(var u in r.tracker)o+=u;i.identifier=parseInt(o),n(i,r.tracker),r.listener(t,i)}},r.onPointerMove=function(s,o){var u=r.bbox,a=r.tracker,f=s.changedTouches||e.getCoords(s),l=f.length;for(var c=0;c<l;c++){var h=f[c],p=h.identifier||Infinity,d=a[p];if(!d)continue;d.move.x=h.pageX-u.x1,d.move.y=h.pageY-u.y1}if(r.fingers<r.minFingers)return;var f=[],v=0,m=0;n(i,a);for(var p in a){var h=a[p];if(h.up)continue;var g=h.start;if(!g.distance){var y=g.x-i.x,b=g.y-i.y;g.distance=Math.sqrt(y*y+b*b),g.angle=Math.atan2(y,b)/t}var y=h.move.x-i.x,b=h.move.y-i.y,w=Math.sqrt(y*y+b*b);v+=w/g.distance;var E=Math.atan2(y,b)/t,S=(g.angle-E+360)%360-180;h.DEG2=h.DEG1,h.DEG1=S>0?S:-S,typeof h.DEG2!="undefined"&&(S>0?h.rotation+=h.DEG1-h.DEG2:h.rotation-=h.DEG1-h.DEG2,m+=h.rotation),f.push(h.move)}i.touches=f,i.fingers=r.fingers,i.scale=v/r.fingers,i.rotation=m/r.fingers,i.state="change",r.listener(s,i)},r.onPointerUp=function(t){var n=r.fingers;e.pointerEnd(t,i,r)&&(eventjs.remove(r.doc,"mousemove",r.onPointerMove),eventjs.remove(r.doc,"mouseup",r.onPointerUp)),n===r.minFingers&&r.fingers<r.minFingers&&(i.fingers=r.fingers,i.state="end",r.listener(t,i))};var i=e.pointerSetup(r);return eventjs.add(r.target,"mousedown",r.onPointerDown),i},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.gesture=e.gesture,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.pointerdown=e.pointermove=e.pointerup=function(t){t.gesture=t.gesture||"pointer";if(t.target.isPointerEmitter)return;var n=!0;t.onPointerDown=function(e){n=!1,r.gesture="pointerdown",t.listener(e,r)},t.onPointerMove=function(e){r.gesture="pointermove",t.listener(e,r,n)},t.onPointerUp=function(e){n=!0,r.gesture="pointerup",t.listener(e,r,!0)};var r=e.pointerSetup(t);return eventjs.add(t.target,"mousedown",t.onPointerDown),eventjs.add(t.target,"mousemove",t.onPointerMove),eventjs.add(t.doc,"mouseup",t.onPointerUp),t.target.isPointerEmitter=!0,r},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.pointerdown=e.pointerdown,eventjs.Gesture._gestureHandlers.pointermove=e.pointermove,eventjs.Gesture._gestureHandlers.pointerup=e.pointerup,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.shake=function(e){var t={gesture:"devicemotion",acceleration:{},accelerationIncludingGravity:{},target:e.target,listener:e.listener,remove:function(){window.removeEventListener("devicemotion",f,!1)}},n=4,r=1e3,i=200,s=3,o=(new Date).getTime(),u={x:0,y:0,z:0},a={x:{count:0,value:0},y:{count:0,value:0},z:{count:0,value:0}},f=function(f){var l=.8,c=f.accelerationIncludingGravity;u.x=l*u.x+(1-l)*c.x,u.y=l*u.y+(1-l)*c.y,u.z=l*u.z+(1-l)*c.z,t.accelerationIncludingGravity=u,t.acceleration.x=c.x-u.x,t.acceleration.y=c.y-u.y,t.acceleration.z=c.z-u.z;if(e.gesture==="devicemotion"){e.listener(f,t);return}var h="xyz",p=(new Date).getTime();for(var d=0,v=h.length;d<v;d++){var m=h[d],g=t.acceleration[m],y=a[m],b=Math.abs(g);if(p-o<r)continue;if(b>n){var w=p*g/b,E=Math.abs(w+y.value);y.value&&E<i?(y.value=w,y.count++,y.count===s&&(e.listener(f,t),o=p,y.value=0,y.count=0)):(y.value=w,y.count=1)}}};if(!window.addEventListener)return;return window.addEventListener("devicemotion",f,!1),t},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.shake=e.shake,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";var t=Math.PI/180;return e.swipe=function(n){n.snap=n.snap||90,n.threshold=n.threshold||1,n.gesture=n.gesture||"swipe",n.onPointerDown=function(t){e.pointerStart(t,r,n)&&(eventjs.add(n.doc,"mousemove",n.onPointerMove).listener(t),eventjs.add(n.doc,"mouseup",n.onPointerUp))},n.onPointerMove=function(t){var r=t.changedTouches||e.getCoords(t),i=r.length;for(var s=0;s<i;s++){var o=r[s],u=o.identifier||Infinity,a=n.tracker[u];if(!a)continue;a.move.x=o.pageX,a.move.y=o.pageY,a.moveTime=(new Date).getTime()}},n.onPointerUp=function(i){if(e.pointerEnd(i,r,n)){eventjs.remove(n.doc,"mousemove",n.onPointerMove),eventjs.remove(n.doc,"mouseup",n.onPointerUp);var s,o,u,a,f={x:0,y:0},l=0,c=0,h=0;for(var p in n.tracker){var d=n.tracker[p],v=d.move.x-d.start.x,m=d.move.y-d.start.y;l+=d.move.x,c+=d.move.y,f.x+=d.start.x,f.y+=d.start.y,h++;var g=Math.sqrt(v*v+m*m),y=d.moveTime-d.startTime,a=Math.atan2(v,m)/t+180,o=y?g/y:0;if(typeof u=="undefined")u=a,s=o;else{if(!(Math.abs(a-u)<=20))return;u=(u+a)/2,s=(s+o)/2}}var b=n.gestureFingers;n.minFingers<=b&&n.maxFingers>=b&&s>n.threshold&&(f.x/=h,f.y/=h,r.start=f,r.x=l/h,r.y=c/h,r.angle=-(((u/n.snap+.5>>0)*n.snap||360)-360),r.velocity=s,r.fingers=b,r.state="swipe",n.listener(i,r))}};var r=e.pointerSetup(n);return eventjs.add(n.target,"mousedown",n.onPointerDown),r},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.swipe=e.swipe,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.longpress=function(t){return t.gesture="longpress",e.tap(t)},e.tap=function(t){t.delay=t.delay||500,t.timeout=t.timeout||250,t.driftDeviance=t.driftDeviance||10,t.gesture=t.gesture||"tap";var n,r;t.onPointerDown=function(s){if(e.pointerStart(s,i,t)){n=(new Date).getTime(),eventjs.add(t.doc,"mousemove",t.onPointerMove).listener(s),eventjs.add(t.doc,"mouseup",t.onPointerUp);if(t.gesture!=="longpress")return;r=setTimeout(function(){if(s.cancelBubble&&++s.cancelBubbleCount>1)return;var e=0;for(var n in t.tracker){var r=t.tracker[n];if(r.end===!0)return;if(t.cancel)return;e++}t.minFingers<=e&&t.maxFingers>=e&&(i.state="start",i.fingers=e,i.x=r.start.x,i.y=r.start.y,t.listener(s,i))},t.delay)}},t.onPointerMove=function(n){var r=t.bbox,i=n.changedTouches||e.getCoords(n),s=i.length;for(var o=0;o<s;o++){var u=i[o],a=u.identifier||Infinity,f=t.tracker[a];if(!f)continue;var l=u.pageX-r.x1,c=u.pageY-r.y1,h=l-f.start.x,p=c-f.start.y,d=Math.sqrt(h*h+p*p);if(!(l>0&&l<r.width&&c>0&&c<r.height&&d<=t.driftDeviance)){eventjs.remove(t.doc,"mousemove",t.onPointerMove),t.cancel=!0;return}}},t.onPointerUp=function(s){if(e.pointerEnd(s,i,t)){clearTimeout(r),eventjs.remove(t.doc,"mousemove",t.onPointerMove),eventjs.remove(t.doc,"mouseup",t.onPointerUp);if(s.cancelBubble&&++s.cancelBubbleCount>1)return;if(t.gesture==="longpress"){i.state==="start"&&(i.state="end",t.listener(s,i));return}if(t.cancel)return;if((new Date).getTime()-n>t.timeout)return;var o=t.gestureFingers;t.minFingers<=o&&t.maxFingers>=o&&(i.state="tap",i.fingers=t.gestureFingers,t.listener(s,i))}};var i=e.pointerSetup(t);return eventjs.add(t.target,"mousedown",t.onPointerDown),i},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.tap=e.tap,eventjs.Gesture._gestureHandlers.longpress=e.longpress,e}(eventjs.proxy);if(typeof eventjs=="undefined")var eventjs={};typeof eventjs.proxy=="undefined"&&(eventjs.proxy={}),eventjs.proxy=function(e){"use strict";return e.wheelPreventElasticBounce=function(e){if(!e)return;typeof e=="string"&&(e=document.querySelector(e)),eventjs.add(e,"wheel",function(e,t){t.preventElasticBounce(),eventjs.stop(e)})},e.wheel=function(e){var t,n=e.timeout||150,r=0,i={gesture:"wheel",state:"start",wheelDelta:0,target:e.target,listener:e.listener,preventElasticBounce:function(e){var t=this.target,n=t.scrollTop,r=n+t.offsetHeight,i=t.scrollHeight;r===i&&this.wheelDelta<=0?eventjs.cancel(e):n===0&&this.wheelDelta>=0&&eventjs.cancel(e),eventjs.stop(e)},add:function(){e.target[o](a,s,!1)},remove:function(){e.target[u](a,s,!1)}},s=function(s){s=s||window.event,i.state=r++?"change":"start",i.wheelDelta=s.detail?s.detail*-20:s.wheelDelta,e.listener(s,i),clearTimeout(t),t=setTimeout(function(){r=0,i.state="end",i.wheelDelta=0,e.listener(s,i)},n)},o=document.addEventListener?"addEventListener":"attachEvent",u=document.removeEventListener?"removeEventListener":"detachEvent",a=eventjs.getEventSupport("mousewheel")?"mousewheel":"DOMMouseScroll";return e.target[o](a,s,!1),i},eventjs.Gesture=eventjs.Gesture||{},eventjs.Gesture._gestureHandlers=eventjs.Gesture._gestureHandlers||{},eventjs.Gesture._gestureHandlers.wheel=e.wheel,e}(eventjs.proxy);if(typeof Event=="undefined")var Event={};typeof Event.proxy=="undefined"&&(Event.proxy={}),Event.proxy=function(e){"use strict";return e.orientation=function(e){var t={gesture:"orientationchange",previous:null,current:window.orientation,target:e.target,listener:e.listener,remove:function(){window.removeEventListener("orientationchange",n,!1)}},n=function(n){t.previous=t.current,t.current=window.orientation;if(t.previous!==null&&t.previous!=t.current){e.listener(n,t);return}};return window.DeviceOrientationEvent&&window.addEventListener("orientationchange",n,!1),t},Event.Gesture=Event.Gesture||{},Event.Gesture._gestureHandlers=Event.Gesture._gestureHandlers||{},Event.Gesture._gestureHandlers.orientation=e.orientation,e}(Event.proxy);(function(){function e(e,t){if(!this.__eventListeners[e])return;t?fabric.util.removeFromArray(this.__eventListeners[e],t):this.__eventListeners[e].length=0}function t(e,t){this.__eventListeners||(this.__eventListeners={});if(arguments.length===1)for(var n in e)this.on(n,e[n]);else this.__eventListeners[e]||(this.__eventListeners[e]=[]),this.__eventListeners[e].push(t);return this}function n(t,n){if(!this.__eventListeners)return;if(arguments.length===0)this.__eventListeners={};else if(arguments.length===1&&typeof arguments[0]=="object")for(var r in t)e.call(this,r,t[r]);else e.call(this,t,n);return this}function r(e,t){if(!this.__eventListeners)return;var n=this.__eventListeners[e];if(!n)return;for(var r=0,i=n.length;r<i;r++)n[r].call(this,t||{});return this}fabric.Observable={observe:t,stopObserving:n,fire:r,on:t,off:n,trigger:r}})();fabric.Collection={add:function(){this._objects.push.apply(this._objects,arguments);for(var e=0,t=arguments.length;e<t;e++)this._onObjectAdded(arguments[e]);return this.renderOnAddRemove&&this.renderAll(),this},insertAt:function(e,t,n){var r=this.getObjects();return n?r[t]=e:r.splice(t,0,e),this._onObjectAdded(e),this.renderOnAddRemove&&this.renderAll(),this},remove:function(){var e=this.getObjects(),t;for(var n=0,r=arguments.length;n<r;n++)t=e.indexOf(arguments[n]),t!==-1&&(e.splice(t,1),this._onObjectRemoved(arguments[n]));return this.renderOnAddRemove&&this.renderAll(),this},forEachObject:function(e,t){var n=this.getObjects(),r=n.length;while(r--)e.call(t,n[r],r,n);return this},getObjects:function(e){return typeof e=="undefined"?this._objects:this._objects.filter(function(t){return t.type===e})},item:function(e){return this.getObjects()[e]},isEmpty:function(){return this.getObjects().length===0},size:function(){return this.getObjects().length},contains:function(e){return this.getObjects().indexOf(e)>-1},complexity:function(){return this.getObjects().reduce(function(e,t){return e+=t.complexity?t.complexity():0,e},0)}};(function(e){var t=Math.sqrt,n=Math.atan2,r=Math.PI/180;fabric.util={removeFromArray:function(e,t){var n=e.indexOf(t);return n!==-1&&e.splice(n,1),e},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},degreesToRadians:function(e){return e*r},radiansToDegrees:function(e){return e/r},rotatePoint:function(e,t,n){var r=Math.sin(n),i=Math.cos(n);e.subtractEquals(t);var s=e.x*i-e.y*r,o=e.x*r+e.y*i;return(new fabric.Point(s,o)).addEquals(t)},transformPoint:function(e,t,n){return n?new fabric.Point(t[0]*e.x+t[2]*e.y,t[1]*e.x+t[3]*e.y):new fabric.Point(t[0]*e.x+t[2]*e.y+t[4],t[1]*e.x+t[3]*e.y+t[5])},invertTransform:function(e){var t=e.slice(),n=1/(e[0]*e[3]-e[1]*e[2]);t=[n*e[3],-n*e[1],-n*e[2],n*e[0],0,0];var r=fabric.util.transformPoint({x:e[4],y:e[5]},t);return t[4]=-r.x,t[5]=-r.y,t},toFixed:function(e,t){return parseFloat(Number(e).toFixed(t))},parseUnit:function(e,t){var n=/\D{0,2}$/.exec(e),r=parseFloat(e);t||(t=fabric.Text.DEFAULT_SVG_FONT_SIZE);switch(n[0]){case"mm":return r*fabric.DPI/25.4;case"cm":return r*fabric.DPI/2.54;case"in":return r*fabric.DPI;case"pt":return r*fabric.DPI/72;case"pc":return r*fabric.DPI/72*12;case"em":return r*t;default:return r}},falseFunction:function(){return!1},getKlass:function(e,t){return e=fabric.util.string.camelize(e.charAt(0).toUpperCase()+e.slice(1)),fabric.util.resolveNamespace(t)[e]},resolveNamespace:function(t){if(!t)return fabric;var n=t.split("."),r=n.length,i=e||fabric.window;for(var s=0;s<r;++s)i=i[n[s]];return i},loadImage:function(e,t,n,r){if(!e){t&&t.call(n,e);return}var i=fabric.util.createImage();i.onload=function(){t&&t.call(n,i),i=i.onload=i.onerror=null},i.onerror=function(){fabric.log("Error loading "+i.src),t&&t.call(n,null,!0),i=i.onload=i.onerror=null},e.indexOf("data")!==0&&typeof r!="undefined"&&(i.crossOrigin=r),i.src=e},enlivenObjects:function(e,t,n,r){function i(){++o===u&&t&&t(s)}e=e||[];var s=[],o=0,u=e.length;if(!u){t&&t(s);return}e.forEach(function(e,t){if(!e||!e.type){i();return}var o=fabric.util.getKlass(e.type,n);o.async?o.fromObject(e,function(n,o){o||(s[t]=n,r&&r(e,s[t])),i()}):(s[t]=o.fromObject(e),r&&r(e,s[t]),i())})},groupSVGElements:function(e,t,n){var r;return r=new fabric.PathGroup(e,t),typeof n!="undefined"&&r.setSourcePath(n),r},populateWithProperties:function(e,t,n){if(n&&Object.prototype.toString.call(n)==="[object Array]")for(var r=0,i=n.length;r<i;r++)n[r]in e&&(t[n[r]]=e[n[r]])},drawDashedLine:function(e,r,i,s,o,u){var a=s-r,f=o-i,l=t(a*a+f*f),c=n(f,a),h=u.length,p=0,d=!0;e.save(),e.translate(r,i),e.moveTo(0,0),e.rotate(c),r=0;while(l>r)r+=u[p++%h],r>l&&(r=l),e[d?"lineTo":"moveTo"](r,0),d=!d;e.restore()},createCanvasElement:function(e){return e||(e=fabric.document.createElement("canvas")),!e.getContext&&typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager.initElement(e),e},createImage:function(){return fabric.isLikelyNode?new(require("canvas").Image):fabric.document.createElement("img")},createAccessors:function(e){var t=e.prototype;for(var n=t.stateProperties.length;n--;){var r=t.stateProperties[n],i=r.charAt(0).toUpperCase()+r.slice(1),s="set"+i,o="get"+i;t[o]||(t[o]=function(e){return new Function('return this.get("'+e+'")')}(r)),t[s]||(t[s]=function(e){return new Function("value",'return this.set("'+e+'", value)')}(r))}},clipContext:function(e,t){t.save(),t.beginPath(),e.clipTo(t),t.clip()},multiplyTransformMatrices:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]},getFunctionBody:function(e){return(String(e).match(/function[^{]*\{([\s\S]*)\}/)||{})[1]},isTransparent:function(e,t,n,r){r>0&&(t>r?t-=r:t=0,n>r?n-=r:n=0);var i=!0,s=e.getImageData(t,n,r*2||1,r*2||1);for(var o=3,u=s.data.length;o<u;o+=4){var a=s.data[o];i=a<=0;if(i===!1)break}return s=null,i}}})(typeof exports!="undefined"?exports:this);(function(){function i(t,n,i,u,a,f,l){var c=r.call(arguments);if(e[c])return e[c];var h=Math.PI,p=l*h/180,d=Math.sin(p),v=Math.cos(p),m=0,g=0;i=Math.abs(i),u=Math.abs(u);var y=-v*t*.5-d*n*.5,b=-v*n*.5+d*t*.5,w=i*i,E=u*u,S=b*b,x=y*y,T=w*E-w*S-E*x,N=0;if(T<0){var C=Math.sqrt(1-T/(w*E));i*=C,u*=C}else N=(a===f?-1:1)*Math.sqrt(T/(w*S+E*x));var k=N*i*b/u,L=-N*u*y/i,A=v*k-d*L+t*.5,O=d*k+v*L+n*.5,M=o(1,0,(y-k)/i,(b-L)/u),_=o((y-k)/i,(b-L)/u,(-y-k)/i,(-b-L)/u);f===0&&_>0?_-=2*h:f===1&&_<0&&(_+=2*h);var D=Math.ceil(Math.abs(_/h*2)),P=[],H=_/D,B=8/3*Math.sin(H/4)*Math.sin(H/4)/Math.sin(H/2),j=M+H;for(var F=0;F<D;F++)P[F]=s(M,j,v,d,i,u,A,O,B,m,g),m=P[F][4],g=P[F][5],M=j,j+=H;return e[c]=P,P}function s(e,n,i,s,o,u,a,f,l,c,h){var p=r.call(arguments);if(t[p])return t[p];var d=Math.cos(e),v=Math.sin(e),m=Math.cos(n),g=Math.sin(n),y=i*o*m-s*u*g+a,b=s*o*m+i*u*g+f,w=c+l*(-i*o*v-s*u*d),E=h+l*(-s*o*v+i*u*d),S=y+l*(i*o*g+s*u*m),x=b+l*(s*o*g-i*u*m);return t[p]=[w,E,S,x,y,b],t[p]}function o(e,t,n,r){var i=Math.atan2(t,e),s=Math.atan2(r,n);return s>=i?s-i:2*Math.PI-(i-s)}function u(e,t,i,s,o,u,a,f){var l=r.call(arguments);if(n[l])return n[l];var c=Math.sqrt,h=Math.min,p=Math.max,d=Math.abs,v=[],m=[[],[]],g,y,b,w,E,S,x,T;y=6*e-12*i+6*o,g=-3*e+9*i-9*o+3*a,b=3*i-3*e;for(var N=0;N<2;++N){N>0&&(y=6*t-12*s+6*u,g=-3*t+9*s-9*u+3*f,b=3*s-3*t);if(d(g)<1e-12){if(d(y)<1e-12)continue;w=-b/y,0<w&&w<1&&v.push(w);continue}x=y*y-4*b*g;if(x<0)continue;T=c(x),E=(-y+T)/(2*g),0<E&&E<1&&v.push(E),S=(-y-T)/(2*g),0<S&&S<1&&v.push(S)}var C,k,L=v.length,A=L,O;while(L--)w=v[L],O=1-w,C=O*O*O*e+3*O*O*w*i+3*O*w*w*o+w*w*w*a,m[0][L]=C,k=O*O*O*t+3*O*O*w*s+3*O*w*w*u+w*w*w*f,m[1][L]=k;m[0][A]=e,m[1][A]=t,m[0][A+1]=a,m[1][A+1]=f;var M=[{x:h.apply(null,m[0]),y:h.apply(null,m[1])},{x:p.apply(null,m[0]),y:p.apply(null,m[1])}];return n[l]=M,M}var e={},t={},n={},r=Array.prototype.join;fabric.util.drawArc=function(e,t,n,r){var s=r[0],o=r[1],u=r[2],a=r[3],f=r[4],l=r[5],c=r[6],h=[[],[],[],[]],p=i(l-t,c-n,s,o,a,f,u);for(var d=0,v=p.length;d<v;d++)h[d][0]=p[d][0]+t,h[d][1]=p[d][1]+n,h[d][2]=p[d][2]+t,h[d][3]=p[d][3]+n,h[d][4]=p[d][4]+t,h[d][5]=p[d][5]+n,e.bezierCurveTo.apply(e,h[d])},fabric.util.getBoundsOfArc=function(e,t,n,r,s,o,a,f,l){var c=0,h=0,p=[],d=[],v=i(f-e,l-t,n,r,o,a,s),m=[[],[]];for(var g=0,y=v.length;g<y;g++)p=u(c,h,v[g][0],v[g][1],v[g][2],v[g][3],v[g][4],v[g][5]),m[0].x=p[0].x+e,m[0].y=p[0].y+t,m[1].x=p[1].x+e,m[1].y=p[1].y+t,d.push(m[0]),d.push(m[1]),c=v[g][4],h=v[g][5];return d},fabric.util.getBoundsOfCurve=u})();(function(){function t(t,n){var r=e.call(arguments,2),i=[];for(var s=0,o=t.length;s<o;s++)i[s]=r.length?t[s][n].apply(t[s],r):t[s][n].call(t[s]);return i}function n(e,t){return i(e,t,function(e,t){return e>=t})}function r(e,t){return i(e,t,function(e,t){return e<t})}function i(e,t,n){if(!e||e.length===0)return;var r=e.length-1,i=t?e[r][t]:e[r];if(t)while(r--)n(e[r][t],i)&&(i=e[r][t]);else while(r--)n(e[r],i)&&(i=e[r]);return i}var e=Array.prototype.slice;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(this===void 0||this===null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:r!==0&&r!==Number.POSITIVE_INFINITY&&r!==Number.NEGATIVE_INFINITY&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)n in this&&e.call(t,this[n],n,this)}),Array.prototype.map||(Array.prototype.map=function(e,t){var n=[];for(var r=0,i=this.length>>>0;r<i;r++)r in this&&(n[r]=e.call(t,this[r],r,this));return n}),Array.prototype.every||(Array.prototype.every=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&!e.call(t,this[n],n,this))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&e.call(t,this[n],n,this))return!0;return!1}),Array.prototype.filter||(Array.prototype.filter=function(e,t){var n=[],r;for(var i=0,s=this.length>>>0;i<s;i++)i in this&&(r=this[i],e.call(t,r,i,this)&&n.push(r));return n}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=this.length>>>0,n=0,r;if(arguments.length>1)r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),fabric.util.array={invoke:t,min:r,max:n}})();(function(){function e(e,t){for(var n in t)e[n]=t[n];return e}function t(t){return e({},t)}fabric.util.object={extend:e,clone:t}})();(function(){function e(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})}function t(e,t){return e.charAt(0).toUpperCase()+(t?e.slice(1):e.slice(1).toLowerCase())}function n(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")}),fabric.util.string={camelize:e,capitalize:t,escapeXml:n}})();(function(){var e=Array.prototype.slice,t=Function.prototype.apply,n=function(){};Function.prototype.bind||(Function.prototype.bind=function(r){var i=this,s=e.call(arguments,1),o;return s.length?o=function(){return t.call(i,this instanceof n?this:r,s.concat(e.call(arguments)))}:o=function(){return t.call(i,this instanceof n?this:r,arguments)},n.prototype=this.prototype,o.prototype=new n,o})})();(function(){function i(){}function s(t){var n=this.constructor.superclass.prototype[t];return arguments.length>1?n.apply(this,e.call(arguments,1)):n.call(this)}function o(){function u(){this.initialize.apply(this,arguments)}var n=null,o=e.call(arguments,0);typeof o[0]=="function"&&(n=o.shift()),u.superclass=n,u.subclasses=[],n&&(i.prototype=n.prototype,u.prototype=new i,n.subclasses.push(u));for(var a=0,f=o.length;a<f;a++)r(u,o[a],n);return u.prototype.initialize||(u.prototype.initialize=t),u.prototype.constructor=u,u.prototype.callSuper=s,u}var e=Array.prototype.slice,t=function(){},n=function(){for(var e in{toString:1})if(e==="toString")return!1;return!0}(),r=function(e,t,r){for(var i in t)i in e.prototype&&typeof e.prototype[i]=="function"&&(t[i]+"").indexOf("callSuper")>-1?e.prototype[i]=function(e){return function(){var n=this.constructor.superclass;this.constructor.superclass=r;var i=t[e].apply(this,arguments);this.constructor.superclass=n;if(e!=="initialize")return i}}(i):e.prototype[i]=t[i],n&&(t.toString!==Object.prototype.toString&&(e.prototype.toString=t.toString),t.valueOf!==Object.prototype.valueOf&&(e.prototype.valueOf=t.valueOf))};fabric.util.createClass=o})();(function(){function t(e){var t=Array.prototype.slice.call(arguments,1),n,r,i=t.length;for(r=0;r<i;r++){n=typeof e[t[r]];if(!/^(?:function|object|unknown)$/.test(n))return!1}return!0}function s(e,t){return{handler:t,wrappedHandler:o(e,t)}}function o(e,t){return function(r){t.call(n(e),r||fabric.window.event)}}function u(e,t){return function(n){if(c[e]&&c[e][t]){var r=c[e][t];for(var i=0,s=r.length;i<s;i++)r[i].call(this,n||fabric.window.event)}}}function d(t,n){t||(t=fabric.window.event);var r=t.target||(typeof t.srcElement!==e?t.srcElement:null),i=fabric.util.getScrollLeftTop(r,n);return{x:v(t)+i.left,y:m(t)+i.top}}function g(e,t,n){var r=e.type==="touchend"?"changedTouches":"touches";return e[r]&&e[r][0]?e[r][0][t]-(e[r][0][t]-e[r][0][n])||e[n]:e[n]}var e="unknown",n,r,i=function(){var e=0;return function(t){return t.__uniqueID||(t.__uniqueID="uniqueID__"+e++)}}();(function(){var e={};n=function(t){return e[t]},r=function(t,n){e[t]=n}})();var a=t(fabric.document.documentElement,"addEventListener","removeEventListener")&&t(fabric.window,"addEventListener","removeEventListener"),f=t(fabric.document.documentElement,"attachEvent","detachEvent")&&t(fabric.window,"attachEvent","detachEvent"),l={},c={},h,p;a?(h=function(e,t,n){e.addEventListener(t,n,!1)},p=function(e,t,n){e.removeEventListener(t,n,!1)}):f?(h=function(e,t,n){var o=i(e);r(o,e),l[o]||(l[o]={}),l[o][t]||(l[o][t]=[]);var u=s(o,n);l[o][t].push(u),e.attachEvent("on"+t,u.wrappedHandler)},p=function(e,t,n){var r=i(e),s;if(l[r]&&l[r][t])for(var o=0,u=l[r][t].length;o<u;o++)s=l[r][t][o],s&&s.handler===n&&(e.detachEvent("on"+t,s.wrappedHandler),l[r][t][o]=null)}):(h=function(e,t,n){var r=i(e);c[r]||(c[r]={});if(!c[r][t]){c[r][t]=[];var s=e["on"+t];s&&c[r][t].push(s),e["on"+t]=u(r,t)}c[r][t].push(n)},p=function(e,t,n){var r=i(e);if(c[r]&&c[r][t]){var s=c[r][t];for(var o=0,u=s.length;o<u;o++)s[o]===n&&s.splice(o,1)}}),fabric.util.addListener=h,fabric.util.removeListener=p;var v=function(t){return typeof t.clientX!==e?t.clientX:0},m=function(t){return typeof t.clientY!==e?t.clientY:0};fabric.isTouchSupported&&(v=function(e){return g(e,"pageX","clientX")},m=function(e){return g(e,"pageY","clientY")}),fabric.util.getPointer=d,fabric.util.object.extend(fabric.util,fabric.Observable)})();(function(){function e(e,t){var n=e.style;if(!n)return e;if(typeof t=="string")return e.style.cssText+=";"+t,t.indexOf("opacity")>-1?s(e,t.match(/opacity:\s*(\d?\.?\d*)/)[1]):e;for(var r in t)if(r==="opacity")s(e,t[r]);else{var i=r==="float"||r==="cssFloat"?typeof n.styleFloat=="undefined"?"cssFloat":"styleFloat":r;n[i]=t[r]}return e}var t=fabric.document.createElement("div"),n=typeof t.style.opacity=="string",r=typeof t.style.filter=="string",i=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,s=function(e){return e};n?s=function(e,t){return e.style.opacity=t,e}:r&&(s=function(e,t){var n=e.style;return e.currentStyle&&!e.currentStyle.hasLayout&&(n.zoom=1),i.test(n.filter)?(t=t>=.9999?"":"alpha(opacity="+t*100+")",n.filter=n.filter.replace(i,t)):n.filter+=" alpha(opacity="+t*100+")",e}),fabric.util.setStyle=e})();(function(){function t(e){return typeof e=="string"?fabric.document.getElementById(e):e}function s(e,t){var n=fabric.document.createElement(e);for(var r in t)r==="class"?n.className=t[r]:r==="for"?n.htmlFor=t[r]:n.setAttribute(r,t[r]);return n}function o(e,t){e&&(" "+e.className+" ").indexOf(" "+t+" ")===-1&&(e.className+=(e.className?" ":"")+t)}function u(e,t,n){return typeof t=="string"&&(t=s(t,n)),e.parentNode&&e.parentNode.replaceChild(t,e),t.appendChild(e),t}function a(e,t){var n,r,i=0,s=0,o=fabric.document.documentElement,u=fabric.document.body||{scrollLeft:0,scrollTop:0};r=e;while(e&&e.parentNode&&!n)e=e.parentNode,e.nodeType===1&&fabric.util.getElementStyle(e,"position")==="fixed"&&(n=e),e.nodeType===1&&r!==t&&fabric.util.getElementStyle(e,"position")==="absolute"?(i=0,s=0):e===fabric.document?(i=u.scrollLeft||o.scrollLeft||0,s=u.scrollTop||o.scrollTop||0):(i+=e.scrollLeft||0,s+=e.scrollTop||0);return{left:i,top:s}}function f(e){var t,n=e&&e.ownerDocument,r={left:0,top:0},i={left:0,top:0},s,o={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!n)return{left:0,top:0};for(var u in o)i[o[u]]+=parseInt(l(e,u),10)||0;return t=n.documentElement,typeof e.getBoundingClientRect!="undefined"&&(r=e.getBoundingClientRect()),s=fabric.util.getScrollLeftTop(e,null),{left:r.left+s.left-(t.clientLeft||0)+i.left,top:r.top+s.top-(t.clientTop||0)+i.top}}var e=Array.prototype.slice,n,r=function(t){return e.call(t,0)};try{n=r(fabric.document.childNodes)instanceof Array}catch(i){}n||(r=function(e){var t=new Array(e.length),n=e.length;while(n--)t[n]=e[n];return t});var l;fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle?l=function(e,t){var n=fabric.document.defaultView.getComputedStyle(e,null);return n?n[t]:undefined}:l=function(e,t){var n=e.style[t];return!n&&e.currentStyle&&(n=e.currentStyle[t]),n},function(){function n(e){return typeof e.onselectstart!="undefined"&&(e.onselectstart=fabric.util.falseFunction),t?e.style[t]="none":typeof e.unselectable=="string"&&(e.unselectable="on"),e}function r(e){return typeof e.onselectstart!="undefined"&&(e.onselectstart=null),t?e.style[t]="":typeof e.unselectable=="string"&&(e.unselectable=""),e}var e=fabric.document.documentElement.style,t="userSelect"in e?"userSelect":"MozUserSelect"in e?"MozUserSelect":"WebkitUserSelect"in e?"WebkitUserSelect":"KhtmlUserSelect"in e?"KhtmlUserSelect":"";fabric.util.makeElementUnselectable=n,fabric.util.makeElementSelectable=r}(),function(){function e(e,t){var n=fabric.document.getElementsByTagName("head")[0],r=fabric.document.createElement("script"),i=!0;r.onload=r.onreadystatechange=function(e){if(i){if(typeof this.readyState=="string"&&this.readyState!=="loaded"&&this.readyState!=="complete")return;i=!1,t(e||fabric.window.event),r=r.onload=r.onreadystatechange=null}},r.src=e,n.appendChild(r)}fabric.util.getScript=e}(),fabric.util.getById=t,fabric.util.toArray=r,fabric.util.makeElement=s,fabric.util.addClass=o,fabric.util.wrapElement=u,fabric.util.getScrollLeftTop=a,fabric.util.getElementOffset=f,fabric.util.getElementStyle=l})();(function(){function e(e,t){return e+(/\?/.test(e)?"&":"?")+t}function n(){}function r(r,i){i||(i={});var s=i.method?i.method.toUpperCase():"GET",o=i.onComplete||function(){},u=t(),a;return u.onreadystatechange=function(){u.readyState===4&&(o(u),u.onreadystatechange=n)},s==="GET"&&(a=null,typeof i.parameters=="string"&&(r=e(r,i.parameters))),u.open(s,r,!0),(s==="POST"||s==="PUT")&&u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.send(a),u}var t=function(){var e=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new XMLHttpRequest}];for(var t=e.length;t--;)try{var n=e[t]();if(n)return e[t]}catch(r){}}();fabric.util.request=r})();fabric.log=function(){},fabric.warn=function(){},typeof console!="undefined"&&["log","warn"].forEach(function(e){typeof console[e]!="undefined"&&typeof console[e].apply=="function"&&(fabric[e]=function(){return console[e].apply(console,arguments)})});(function(e){"use strict";function n(e,t){this.x=e,this.y=t}var t=e.fabric||(e.fabric={});if(t.Point){t.warn("fabric.Point is already defined");return}t.Point=n,n.prototype={constructor:n,add:function(e){return new n(this.x+e.x,this.y+e.y)},addEquals:function(e){return this.x+=e.x,this.y+=e.y,this},scalarAdd:function(e){return new n(this.x+e,this.y+e)},scalarAddEquals:function(e){return this.x+=e,this.y+=e,this},subtract:function(e){return new n(this.x-e.x,this.y-e.y)},subtractEquals:function(e){return this.x-=e.x,this.y-=e.y,this},scalarSubtract:function(e){return new n(this.x-e,this.y-e)},scalarSubtractEquals:function(e){return this.x-=e,this.y-=e,this},multiply:function(e){return new n(this.x*e,this.y*e)},multiplyEquals:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return new n(this.x/e,this.y/e)},divideEquals:function(e){return this.x/=e,this.y/=e,this},eq:function(e){return this.x===e.x&&this.y===e.y},lt:function(e){return this.x<e.x&&this.y<e.y},lte:function(e){return this.x<=e.x&&this.y<=e.y},gt:function(e){return this.x>e.x&&this.y>e.y},gte:function(e){return this.x>=e.x&&this.y>=e.y},lerp:function(e,t){return new n(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t)},distanceFrom:function(e){var t=this.x-e.x,n=this.y-e.y;return Math.sqrt(t*t+n*n)},midPointFrom:function(e){return new n(this.x+(e.x-this.x)/2,this.y+(e.y-this.y)/2)},min:function(e){return new n(Math.min(this.x,e.x),Math.min(this.y,e.y))},max:function(e){return new n(Math.max(this.x,e.x),Math.max(this.y,e.y))},toString:function(){return this.x+","+this.y},setXY:function(e,t){this.x=e,this.y=t},setFromPoint:function(e){this.x=e.x,this.y=e.y},swap:function(e){var t=this.x,n=this.y;this.x=e.x,this.y=e.y,e.x=t,e.y=n}}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";function n(e){this.status=e,this.points=[]}var t=e.fabric||(e.fabric={});if(t.Intersection){t.warn("fabric.Intersection is already defined");return}t.Intersection=n,t.Intersection.prototype={appendPoint:function(e){this.points.push(e)},appendPoints:function(e){this.points=this.points.concat(e)}},t.Intersection.intersectLineLine=function(e,r,i,s){var o,u=(s.x-i.x)*(e.y-i.y)-(s.y-i.y)*(e.x-i.x),a=(r.x-e.x)*(e.y-i.y)-(r.y-e.y)*(e.x-i.x),f=(s.y-i.y)*(r.x-e.x)-(s.x-i.x)*(r.y-e.y);if(f!==0){var l=u/f,c=a/f;0<=l&&l<=1&&0<=c&&c<=1?(o=new n("Intersection"),o.points.push(new t.Point(e.x+l*(r.x-e.x),e.y+l*(r.y-e.y)))):o=new n}else u===0||a===0?o=new n("Coincident"):o=new n("Parallel");return o},t.Intersection.intersectLinePolygon=function(e,t,r){var i=new n,s=r.length;for(var o=0;o<s;o++){var u=r[o],a=r[(o+1)%s],f=n.intersectLineLine(e,t,u,a);i.appendPoints(f.points)}return i.points.length>0&&(i.status="Intersection"),i},t.Intersection.intersectPolygonPolygon=function(e,t){var r=new n,i=e.length;for(var s=0;s<i;s++){var o=e[s],u=e[(s+1)%i],a=n.intersectLinePolygon(o,u,t);r.appendPoints(a.points)}return r.points.length>0&&(r.status="Intersection"),r},t.Intersection.intersectPolygonRectangle=function(e,r,i){var s=r.min(i),o=r.max(i),u=new t.Point(o.x,s.y),a=new t.Point(s.x,o.y),f=n.intersectLinePolygon(s,u,e),l=n.intersectLinePolygon(u,o,e),c=n.intersectLinePolygon(o,a,e),h=n.intersectLinePolygon(a,s,e),p=new n;return p.appendPoints(f.points),p.appendPoints(l.points),p.appendPoints(c.points),p.appendPoints(h.points),p.points.length>0&&(p.status="Intersection"),p}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";function n(e){e?this._tryParsingColor(e):this.setSource([0,0,0,1])}function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var t=e.fabric||(e.fabric={});if(t.Color){t.warn("fabric.Color is already defined.");return}t.Color=n,t.Color.prototype={_tryParsingColor:function(e){var t;e in n.colorNameMap&&(e=n.colorNameMap[e]);if(e==="transparent"){this.setSource([255,255,255,0]);return}t=n.sourceFromHex(e),t||(t=n.sourceFromRgb(e)),t||(t=n.sourceFromHsl(e)),t&&this.setSource(t)},_rgbToHsl:function(e,n,r){e/=255,n/=255,r/=255;var i,s,o,u=t.util.array.max([e,n,r]),a=t.util.array.min([e,n,r]);o=(u+a)/2;if(u===a)i=s=0;else{var f=u-a;s=o>.5?f/(2-u-a):f/(u+a);switch(u){case e:i=(n-r)/f+(n<r?6:0);break;case n:i=(r-e)/f+2;break;case r:i=(e-n)/f+4}i/=6}return[Math.round(i*360),Math.round(s*100),Math.round(o*100)]},getSource:function(){return this._source},setSource:function(e){this._source=e},toRgb:function(){var e=this.getSource();return"rgb("+e[0]+","+e[1]+","+e[2]+")"},toRgba:function(){var e=this.getSource();return"rgba("+e[0]+","+e[1]+","+e[2]+","+e[3]+")"},toHsl:function(){var e=this.getSource(),t=this._rgbToHsl(e[0],e[1],e[2]);return"hsl("+t[0]+","+t[1]+"%,"+t[2]+"%)"},toHsla:function(){var e=this.getSource(),t=this._rgbToHsl(e[0],e[1],e[2]);return"hsla("+t[0]+","+t[1]+"%,"+t[2]+"%,"+e[3]+")"},toHex:function(){var e=this.getSource(),t,n,r;return t=e[0].toString(16),t=t.length===1?"0"+t:t,n=e[1].toString(16),n=n.length===1?"0"+n:n,r=e[2].toString(16),r=r.length===1?"0"+r:r,t.toUpperCase()+n.toUpperCase()+r.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(e){var t=this.getSource();return t[3]=e,this.setSource(t),this},toGrayscale:function(){var e=this.getSource(),t=parseInt((e[0]*.3+e[1]*.59+e[2]*.11).toFixed(0),10),n=e[3];return this.setSource([t,t,t,n]),this},toBlackWhite:function(e){var t=this.getSource(),n=(t[0]*.3+t[1]*.59+t[2]*.11).toFixed(0),r=t[3];return e=e||127,n=Number(n)<Number(e)?0:255,this.setSource([n,n,n,r]),this},overlayWith:function(e){e instanceof n||(e=new n(e));var t=[],r=this.getAlpha(),i=.5,s=this.getSource(),o=e.getSource();for(var u=0;u<3;u++)t.push(Math.round(s[u]*(1-i)+o[u]*i));return t[3]=r,this.setSource(t),this}},t.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,t.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,t.Color.reHex=/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i,t.Color.colorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"},t.Color.fromRgb=function(e){return n.fromSource(n.sourceFromRgb(e))},t.Color.sourceFromRgb=function(e){var t=e.match(n.reRGBa);if(t){var r=parseInt(t[1],10)/(/%$/.test(t[1])?100:1)*(/%$/.test(t[1])?255:1),i=parseInt(t[2],10)/(/%$/.test(t[2])?100:1)*(/%$/.test(t[2])?255:1),s=parseInt(t[3],10)/(/%$/.test(t[3])?100:1)*(/%$/.test(t[3])?255:1);return[parseInt(r,10),parseInt(i,10),parseInt(s,10),t[4]?parseFloat(t[4]):1]}},t.Color.fromRgba=n.fromRgb,t.Color.fromHsl=function(e){return n.fromSource(n.sourceFromHsl(e))},t.Color.sourceFromHsl=function(e){var t=e.match(n.reHSLa);if(!t)return;var i=(parseFloat(t[1])%360+360)%360/360,s=parseFloat(t[2])/(/%$/.test(t[2])?100:1),o=parseFloat(t[3])/(/%$/.test(t[3])?100:1),u,a,f;if(s===0)u=a=f=o;else{var l=o<=.5?o*(s+1):o+s-o*s,c=o*2-l;u=r(c,l,i+1/3),a=r(c,l,i),f=r(c,l,i-1/3)}return[Math.round(u*255),Math.round(a*255),Math.round(f*255),t[4]?parseFloat(t[4]):1]},t.Color.fromHsla=n.fromHsl,t.Color.fromHex=function(e){return n.fromSource(n.sourceFromHex(e))},t.Color.sourceFromHex=function(e){if(e.match(n.reHex)){var t=e.slice(e.indexOf("#")+1),r=t.length===3,i=r?t.charAt(0)+t.charAt(0):t.substring(0,2),s=r?t.charAt(1)+t.charAt(1):t.substring(2,4),o=r?t.charAt(2)+t.charAt(2):t.substring(4,6);return[parseInt(i,16),parseInt(s,16),parseInt(o,16),1]}},t.Color.fromSource=function(e){var t=new n;return t.setSource(e),t}})(typeof exports!="undefined"?exports:this);(function(){"use strict";if(fabric.StaticCanvas){fabric.warn("fabric.StaticCanvas is already defined.");return}var e=fabric.util.object.extend,t=fabric.util.getElementOffset,n=fabric.util.removeFromArray,r=new Error("Could not initialize `canvas` element");fabric.StaticCanvas=fabric.util.createClass({initialize:function(e,t){t||(t={}),this._initStatic(e,t),fabric.StaticCanvas.activeInstance=this},backgroundColor:"",backgroundImage:null,overlayColor:"",overlayImage:null,includeDefaultValues:!0,stateful:!0,renderOnAddRemove:!0,clipTo:null,controlsAboveOverlay:!1,allowTouchScrolling:!1,imageSmoothingEnabled:!0,preserveObjectStacking:!1,viewportTransform:[1,0,0,1,0,0],onBeforeScaleRotate:function(){},_initStatic:function(e,t){this._objects=[],this._createLowerCanvas(e),this._initOptions(t),this._setImageSmoothing(),t.overlayImage&&this.setOverlayImage(t.overlayImage,this.renderAll.bind(this)),t.backgroundImage&&this.setBackgroundImage(t.backgroundImage,this.renderAll.bind(this)),t.backgroundColor&&this.setBackgroundColor(t.backgroundColor,this.renderAll.bind(this)),t.overlayColor&&this.setOverlayColor(t.overlayColor,this.renderAll.bind(this)),this.calcOffset()},calcOffset:function(){return this._offset=t(this.lowerCanvasEl),this},setOverlayImage:function(e,t,n){return this.__setBgOverlayImage("overlayImage",e,t,n)},setBackgroundImage:function(e,t,n){return this.__setBgOverlayImage("backgroundImage",e,t,n)},setOverlayColor:function(e,t){return this.__setBgOverlayColor("overlayColor",e,t)},setBackgroundColor:function(e,t){return this.__setBgOverlayColor("backgroundColor",e,t)},_setImageSmoothing:function(){var e=this.getContext();e.imageSmoothingEnabled=this.imageSmoothingEnabled,e.webkitImageSmoothingEnabled=this.imageSmoothingEnabled,e.mozImageSmoothingEnabled=this.imageSmoothingEnabled,e.msImageSmoothingEnabled=this.imageSmoothingEnabled,e.oImageSmoothingEnabled=this.imageSmoothingEnabled},__setBgOverlayImage:function(e,t,n,r){return typeof t=="string"?fabric.util.loadImage(t,function(t){this[e]=new fabric.Image(t,r),n&&n()},this,r&&r.crossOrigin):(r&&t.setOptions(r),this[e]=t,n&&n()),this},__setBgOverlayColor:function(e,t,n){if(t&&t.source){var r=this;fabric.util.loadImage(t.source,function(i){r[e]=new fabric.Pattern({source:i,repeat:t.repeat,offsetX:t.offsetX,offsetY:t.offsetY}),n&&n()})}else this[e]=t,n&&n();return this},_createCanvasElement:function(){var e=fabric.document.createElement("canvas");e.style||(e.style={});if(!e)throw r;return this._initCanvasElement(e),e},_initCanvasElement:function(e){fabric.util.createCanvasElement(e);if(typeof e.getContext=="undefined")throw r},_initOptions:function(e){for(var t in e)this[t]=e[t];this.width=this.width||parseInt(this.lowerCanvasEl.width,10)||0,this.height=this.height||parseInt(this.lowerCanvasEl.height,10)||0;if(!this.lowerCanvasEl.style)return;this.lowerCanvasEl.width=this.width,this.lowerCanvasEl.height=this.height,this.lowerCanvasEl.style.width=this.width+"px",this.lowerCanvasEl.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice()},_createLowerCanvas:function(e){this.lowerCanvasEl=fabric.util.getById(e)||this._createCanvasElement(),this._initCanvasElement(this.lowerCanvasEl),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(e,t){return this.setDimensions({width:e},t)},setHeight:function(e,t){return this.setDimensions({height:e},t)},setDimensions:function(e,t){var n;t=t||{};for(var r in e)n=e[r],t.cssOnly||(this._setBackstoreDimension(r,e[r]),n+="px"),t.backstoreOnly||this._setCssDimension(r,n);return t.cssOnly||this.renderAll(),this.calcOffset(),this},_setBackstoreDimension:function(e,t){return this.lowerCanvasEl[e]=t,this.upperCanvasEl&&(this.upperCanvasEl[e]=t),this.cacheCanvasEl&&(this.cacheCanvasEl[e]=t),this[e]=t,this},_setCssDimension:function(e,t){return this.lowerCanvasEl.style[e]=t,this.upperCanvasEl&&(this.upperCanvasEl.style[e]=t),this.wrapperEl&&(this.wrapperEl.style[e]=t),this},getZoom:function(){return Math.sqrt(this.viewportTransform[0]*this.viewportTransform[3])},setViewportTransform:function(e){var t=this.getActiveGroup();this.viewportTransform=e,this.renderAll();for(var n=0,r=this._objects.length;n<r;n++)this._objects[n].setCoords();return t&&t.setCoords(),this},zoomToPoint:function(e,t){var n=e;e=fabric.util.transformPoint(e,fabric.util.invertTransform(this.viewportTransform)),this.viewportTransform[0]=t,this.viewportTransform[3]=t;var r=fabric.util.transformPoint(e,this.viewportTransform);this.viewportTransform[4]+=n.x-r.x,this.viewportTransform[5]+=n.y-r.y,this.renderAll();for(var i=0,s=this._objects.length;i<s;i++)this._objects[i].setCoords();return this},setZoom:function(e){return this.zoomToPoint(new fabric.Point(0,0),e),this},absolutePan:function(e){this.viewportTransform[4]=-e.x,this.viewportTransform[5]=-e.y,this.renderAll();for(var t=0,n=this._objects.length;t<n;t++)this._objects[t].setCoords();return this},relativePan:function(e){return this.absolutePan(new fabric.Point(-e.x-this.viewportTransform[4],-e.y-this.viewportTransform[5]))},getElement:function(){return this.lowerCanvasEl},getActiveObject:function(){return null},getActiveGroup:function(){return null},_draw:function(e,t){if(!t)return;e.save();var n=this.viewportTransform;e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._shouldRenderObject(t)&&t.render(e),e.restore(),this.controlsAboveOverlay||t._renderControls(e)},_shouldRenderObject:function(e){return e?e!==this.getActiveGroup()||!this.preserveObjectStacking:!1},_onObjectAdded:function(e){this.stateful&&e.setupState(),e.canvas=this,e.setCoords(),this.fire("object:added",{target:e}),e.fire("added")},_onObjectRemoved:function(e){this.getActiveObject()===e&&(this.fire("before:selection:cleared",{target:e}),this._discardActiveObject(),this.fire("selection:cleared")),this.fire("object:removed",{target:e}),e.fire("removed")},clearContext:function(e){return e.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.discardActiveGroup&&this.discardActiveGroup(),this.discardActiveObject&&this.discardActiveObject(),this.clearContext(this.contextContainer),this.contextTop&&this.clearContext(this.contextTop),this.fire("canvas:cleared"),this.renderAll(),this},renderAll:function(e){var t=this[e===!0&&this.interactive?"contextTop":"contextContainer"],n=this.getActiveGroup();return this.contextTop&&this.selection&&!this._groupSelector&&this.clearContext(this.contextTop),e||this.clearContext(t),this.fire("before:render"),this.clipTo&&fabric.util.clipContext(this,t),this._renderBackground(t),this._renderObjects(t,n),this._renderActiveGroup(t,n),this.clipTo&&t.restore(),this._renderOverlay(t),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render"),this},_renderObjects:function(e,t){var n,r;if(!t||this.preserveObjectStacking)for(n=0,r=this._objects.length;n<r;++n)this._draw(e,this._objects[n]);else for(n=0,r=this._objects.length;n<r;++n)this._objects[n]&&!t.contains(this._objects[n])&&this._draw(e,this._objects[n])},_renderActiveGroup:function(e,t){if(t){var n=[];this.forEachObject(function(e){t.contains(e)&&n.push(e)}),t._set("objects",n),this._draw(e,t)}},_renderBackground:function(e){this.backgroundColor&&(e.fillStyle=this.backgroundColor.toLive?this.backgroundColor.toLive(e):this.backgroundColor,e.fillRect(this.backgroundColor.offsetX||0,this.backgroundColor.offsetY||0,this.width,this.height)),this.backgroundImage&&this._draw(e,this.backgroundImage)},_renderOverlay:function(e){this.overlayColor&&(e.fillStyle=this.overlayColor.toLive?this.overlayColor.toLive(e):this.overlayColor,e.fillRect(this.overlayColor.offsetX||0,this.overlayColor.offsetY||0,this.width,this.height)),this.overlayImage&&this._draw(e,this.overlayImage)},renderTop:function(){var e=this.contextTop||this.contextContainer;this.clearContext(e),this.selection&&this._groupSelector&&this._drawSelection();var t=this.getActiveGroup();return t&&t.render(e),this._renderOverlay(e),this.fire("after:render"),this},getCenter:function(){return{top:this.getHeight()/2,left:this.getWidth()/2}},centerObjectH:function(e){return this._centerObject(e,new fabric.Point(this.getCenter().left,e.getCenterPoint().y)),this.renderAll(),this},centerObjectV:function(e){return this._centerObject(e,new fabric.Point(e.getCenterPoint().x,this.getCenter().top)),this.renderAll(),this},centerObject:function(e){var t=this.getCenter();return this._centerObject(e,new fabric.Point(t.left,t.top)),this.renderAll(),this},_centerObject:function(e,t){return e.setPositionByOrigin(t,"center","center"),this},toDatalessJSON:function(e){return this.toDatalessObject(e)},toObject:function(e){return this._toObjectMethod("toObject",e)},toDatalessObject:function(e){return this._toObjectMethod("toDatalessObject",e)},_toObjectMethod:function(t,n){var r={objects:this._toObjects(t,n)};return e(r,this.__serializeBgOverlay()),fabric.util.populateWithProperties(this,r,n),r},_toObjects:function(e,t){return this.getObjects().map(function(n){return this._toObject(n,e,t)},this)},_toObject:function(e,t,n){var r;this.includeDefaultValues||(r=e.includeDefaultValues,e.includeDefaultValues=!1);var i=this._realizeGroupTransformOnObject(e),s=e[t](n);return this.includeDefaultValues||(e.includeDefaultValues=r),this._unwindGroupTransformOnObject(e,i),s},_realizeGroupTransformOnObject:function(e){var t=["angle","flipX","flipY","height","left","scaleX","scaleY","top","width"];if(e.group&&e.group===this.getActiveGroup()){var n={};return t.forEach(function(t){n[t]=e[t]}),this.getActiveGroup().realizeTransform(e),n}return null},_unwindGroupTransformOnObject:function(e,t){t&&e.set(t)},__serializeBgOverlay:function(){var e={background:this.backgroundColor&&this.backgroundColor.toObject?this.backgroundColor.toObject():this.backgroundColor};return this.overlayColor&&(e.overlay=this.overlayColor.toObject?this.overlayColor.toObject():this.overlayColor),this.backgroundImage&&(e.backgroundImage=this.backgroundImage.toObject()),this.overlayImage&&(e.overlayImage=this.overlayImage.toObject()),e},svgViewportTransformation:!0,toSVG:function(e,t){e||(e={});var n=[];return this._setSVGPreamble(n,e),this._setSVGHeader(n,e),this._setSVGBgOverlayColor(n,"backgroundColor"),this._setSVGBgOverlayImage(n,"backgroundImage"),this._setSVGObjects(n,t),this._setSVGBgOverlayColor(n,"overlayColor"),this._setSVGBgOverlayImage(n,"overlayImage"),n.push("</svg>"),n.join("")},_setSVGPreamble:function(e,t){t.suppressPreamble||e.push('<?xml version="1.0" encoding="',t.encoding||"UTF-8",'" standalone="no" ?>','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},_setSVGHeader:function(e,t){var n,r,i;t.viewBox?(n=t.viewBox.width,r=t.viewBox.height):(n=this.width,r=this.height,this.svgViewportTransformation||(i=this.viewportTransform,n/=i[0],r/=i[3])),e.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',r,'" ',this.backgroundColor&&!this.backgroundColor.toLive?'style="background-color: '+this.backgroundColor+'" ':null,t.viewBox?'viewBox="'+t.viewBox.x+" "+t.viewBox.y+" "+t.viewBox.width+" "+t.viewBox.height+'" ':null,'xml:space="preserve">',"<desc>Created with Fabric.js ",fabric.version,"</desc>","<defs>",fabric.createSVGFontFacesMarkup(this.getObjects()),fabric.createSVGRefElementsMarkup(this),"</defs>")},_setSVGObjects:function(e,t){for(var n=0,r=this.getObjects(),i=r.length;n<i;n++){var s=r[n],o=this._realizeGroupTransformOnObject(s);e.push(s.toSVG(t)),this._unwindGroupTransformOnObject(s,o)}},_setSVGBgOverlayImage:function(e,t){this[t]&&this[t].toSVG&&e.push(this[t].toSVG())},_setSVGBgOverlayColor:function(e,t){this[t]&&this[t].source?e.push('<rect x="',this[t].offsetX,'" y="',this[t].offsetY,'" ','width="',this[t].repeat==="repeat-y"||this[t].repeat==="no-repeat"?this[t].source.width:this.width,'" height="',this[t].repeat==="repeat-x"||this[t].repeat==="no-repeat"?this[t].source.height:this.height,'" fill="url(#'+t+'Pattern)"',"></rect>"):this[t]&&t==="overlayColor"&&e.push('<rect x="0" y="0" ','width="',this.width,'" height="',this.height,'" fill="',this[t],'"',"></rect>")},sendToBack:function(e){return n(this._objects,e),this._objects.unshift(e),this.renderAll&&this.renderAll()},bringToFront:function(e){return n(this._objects,e),this._objects.push(e),this.renderAll&&this.renderAll()},sendBackwards:function(e,t){var r=this._objects.indexOf(e);if(r!==0){var i=this._findNewLowerIndex(e,r,t);n(this._objects,e),this._objects.splice(i,0,e),this.renderAll&&this.renderAll()}return this},_findNewLowerIndex:function(e,t,n){var r;if(n){r=t;for(var i=t-1;i>=0;--i){var s=e.intersectsWithObject(this._objects[i])||e.isContainedWithinObject(this._objects[i])||this._objects[i].isContainedWithinObject(e);if(s){r=i;break}}}else r=t-1;return r},bringForward:function(e,t){var r=this._objects.indexOf(e);if(r!==this._objects.length-1){var i=this._findNewUpperIndex(e,r,t);n(this._objects,e),this._objects.splice(i,0,e),this.renderAll&&this.renderAll()}return this},_findNewUpperIndex:function(e,t,n){var r;if(n){r=t;for(var i=t+1;i<this._objects.length;++i){var s=e.intersectsWithObject(this._objects[i])||e.isContainedWithinObject(this._objects[i])||this._objects[i].isContainedWithinObject(e);if(s){r=i;break}}}else r=t+1;return r},moveTo:function(e,t){return n(this._objects,e),this._objects.splice(t,0,e),this.renderAll&&this.renderAll()},dispose:function(){return this.clear(),this.interactive&&this.removeListeners(),this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): "+"{ objects: "+this.getObjects().length+" }>"}}),e(fabric.StaticCanvas.prototype,fabric.Observable),e(fabric.StaticCanvas.prototype,fabric.Collection),e(fabric.StaticCanvas.prototype,fabric.DataURLExporter),e(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',supports:function(e){var t=fabric.util.createCanvasElement();if(!t||!t.getContext)return null;var n=t.getContext("2d");if(!n)return null;switch(e){case"getImageData":return typeof n.getImageData!="undefined";case"setLineDash":return typeof n.setLineDash!="undefined";case"toDataURL":return typeof t.toDataURL!="undefined";case"toDataURLWithQuality":try{return t.toDataURL("image/jpeg",0),!0}catch(r){}return!1;default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject})();(function(){var e=fabric.util.getPointer,t=fabric.util.degreesToRadians,n=fabric.util.radiansToDegrees,r=Math.atan2,i=Math.abs,s=.5;fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(e,t){t||(t={}),this._initStatic(e,t),this._initInteractive(),this._createCacheCanvas(),fabric.Canvas.activeInstance=this},uniScaleTransform:!1,centeredScaling:!1,centeredRotation:!1,interactive:!0,selection:!0,selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_resetCurrentTransform:function(e){var t=this._currentTransform;t.target.set({scaleX:t.original.scaleX,scaleY:t.original.scaleY,left:t.original.left,top:t.original.top}),this._shouldCenterTransform(e,t.target)?t.action==="rotate"?this._setOriginToCenter(t.target):(t.originX!=="center"&&(t.originX==="right"?t.mouseXSign=-1:t.mouseXSign=1),t.originY!=="center"&&(t.originY==="bottom"?t.mouseYSign=-1:t.mouseYSign=1),t.originX="center",t.originY="center"):(t.originX=t.original.originX,t.originY=t.original.originY)},containsPoint:function(e,t){var n=this.getPointer(e,!0),r=this._normalizePointer(t,n);return t.containsPoint(r)||t._findTargetCorner(n)},_normalizePointer:function(e,t){var n=this.getActiveGroup(),r=t.x,i=t.y,s=n&&e.type!=="group"&&n.contains(e),o;return s&&(o=new fabric.Point(n.left,n.top),o=fabric.util.transformPoint(o,this.viewportTransform,!0),r-=o.x,i-=o.y),{x:r,y:i}},isTargetTransparent:function(e,t,n){var r=e.hasBorders,i=e.transparentCorners;e.hasBorders=e.transparentCorners=!1,this._draw(this.contextCache,e),e.hasBorders=r,e.transparentCorners=i;var s=fabric.util.isTransparent(this.contextCache,t,n,this.targetFindTolerance);return this.clearContext(this.contextCache),s},_shouldClearSelection:function(e,t){var n=this.getActiveGroup(),r=this.getActiveObject();return!t||t&&n&&!n.contains(t)&&n!==t&&!e.shiftKey||t&&!t.evented||t&&!t.selectable&&r&&r!==t},_shouldCenterTransform:function(e,t){if(!t)return;var n=this._currentTransform,r;return n.action==="scale"||n.action==="scaleX"||n.action==="scaleY"?r=this.centeredScaling||t.centeredScaling:n.action==="rotate"&&(r=this.centeredRotation||t.centeredRotation),r?!e.altKey:e.altKey},_getOriginFromCorner:function(e,t){var n={x:e.originX,y:e.originY};if(t==="ml"||t==="tl"||t==="bl")n.x="right";else if(t==="mr"||t==="tr"||t==="br")n.x="left";if(t==="tl"||t==="mt"||t==="tr")n.y="bottom";else if(t==="bl"||t==="mb"||t==="br")n.y="top";return n},_getActionFromCorner:function(e,t){var n="drag";return t&&(n=t==="ml"||t==="mr"?"scaleX":t==="mt"||t==="mb"?"scaleY":t==="mtr"?"rotate":"scale"),n},_setupCurrentTransform:function(e,n){if(!n)return;var r=this.getPointer(e),i=n._findTargetCorner(this.getPointer(e,!0)),s=this._getActionFromCorner(n,i),o=this._getOriginFromCorner(n,i);this._currentTransform={target:n,action:s,scaleX:n.scaleX,scaleY:n.scaleY,offsetX:r.x-n.left,offsetY:r.y-n.top,originX:o.x,originY:o.y,ex:r.x,ey:r.y,left:n.left,top:n.top,theta:t(n.angle),width:n.width*n.scaleX,mouseXSign:1,mouseYSign:1},this._currentTransform.original={left:n.left,top:n.top,scaleX:n.scaleX,scaleY:n.scaleY,originX:o.x,originY:o.y},this._resetCurrentTransform(e)},_translateObject:function(e,t){var n=this._currentTransform.target;n.get("lockMovementX")||n.set("left",e-this._currentTransform.offsetX),n.get("lockMovementY")||n.set("top",t-this._currentTransform.offsetY)},_scaleObject:function(e,t,n){var r=this._currentTransform,i=r.target,s=i.get("lockScalingX"),o=i.get("lockScalingY"),u=i.get("lockScalingFlip");if(s&&o)return;var a=i.translateToOriginPoint(i.getCenterPoint(),r.originX,r.originY),f=i.toLocalPoint(new fabric.Point(e,t),r.originX,r.originY);this._setLocalMouse(f,r),this._setObjectScale(f,r,s,o,n,u),i.setPositionByOrigin(a,r.originX,r.originY)},_setObjectScale:function(e,t,n,r,i,s){var o=t.target,u=!1,a=!1,f=o.stroke?o.strokeWidth:0;t.newScaleX=e.x/(o.width+f/2),t.newScaleY=e.y/(o.height+f/2),s&&t.newScaleX<=0&&t.newScaleX<o.scaleX&&(u=!0),s&&t.newScaleY<=0&&t.newScaleY<o.scaleY&&(a=!0),i==="equally"&&!n&&!r?u||a||this._scaleObjectEqually(e,o,t):i?i==="x"&&!o.get("lockUniScaling")?u||n||o.set("scaleX",t.newScaleX):i==="y"&&!o.get("lockUniScaling")&&(a||r||o.set("scaleY",t.newScaleY)):(u||n||o.set("scaleX",t.newScaleX),a||r||o.set("scaleY",t.newScaleY)),u||a||this._flipObject(t,i)},_scaleObjectEqually:function(e,t,n){var r=e.y+e.x,i=t.stroke?t.strokeWidth:0,s=(t.height+i/2)*n.original.scaleY+(t.width+i/2)*n.original.scaleX;n.newScaleX=n.original.scaleX*r/s,n.newScaleY=n.original.scaleY*r/s,t.set("scaleX",n.newScaleX),t.set("scaleY",n.newScaleY)},_flipObject:function(e,t){e.newScaleX<0&&t!=="y"&&(e.originX==="left"?e.originX="right":e.originX==="right"&&(e.originX="left")),e.newScaleY<0&&t!=="x"&&(e.originY==="top"?e.originY="bottom":e.originY==="bottom"&&(e.originY="top"))},_setLocalMouse:function(e,t){var n=t.target;t.originX==="right"?e.x*=-1:t.originX==="center"&&(e.x*=t.mouseXSign*2,e.x<0&&(t.mouseXSign=-t.mouseXSign)),t.originY==="bottom"?e.y*=-1:t.originY==="center"&&(e.y*=t.mouseYSign*2,e.y<0&&(t.mouseYSign=-t.mouseYSign)),i(e.x)>n.padding?e.x<0?e.x+=n.padding:e.x-=n.padding:e.x=0,i(e.y)>n.padding?e.y<0?e.y+=n.padding:e.y-=n.padding:e.y=0},_rotateObject:function(e,t){var i=this._currentTransform;if(i.target.get("lockRotation"))return;var s=r(i.ey-i.top,i.ex-i.left),o=r(t-i.top,e-i.left),u=n(o-s+i.theta);u<0&&(u=360+u),i.target.angle=u%360},setCursor:function(e){this.upperCanvasEl.style.cursor=e},_resetObjectTransform:function(e){e.scaleX=1,e.scaleY=1,e.setAngle(0)},_drawSelection:function(){var e=this.contextTop,t=this._groupSelector,n=t.left,r=t.top,o=i(n),u=i(r);e.fillStyle=this.selectionColor,e.fillRect(t.ex-(n>0?0:-n),t.ey-(r>0?0:-r),o,u),e.lineWidth=this.selectionLineWidth,e.strokeStyle=this.selectionBorderColor;if(this.selectionDashArray.length>1){var a=t.ex+s-(n>0?0:o),f=t.ey+s-(r>0?0:u);e.beginPath(),fabric.util.drawDashedLine(e,a,f,a+o,f,this.selectionDashArray),fabric.util.drawDashedLine(e,a,f+u-1,a+o,f+u-1,this.selectionDashArray),fabric.util.drawDashedLine(e,a,f,a,f+u,this.selectionDashArray),fabric.util.drawDashedLine(e,a+o-1,f,a+o-1,f+u,this.selectionDashArray),e.closePath(),e.stroke()}else e.strokeRect(t.ex+s-(n>0?0:o),t.ey+s-(r>0?0:u),o,u)},_isLastRenderedObject:function(e){return this.controlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay.visible&&this.containsPoint(e,this.lastRenderedObjectWithControlsAboveOverlay)&&this.lastRenderedObjectWithControlsAboveOverlay._findTargetCorner(this.getPointer(e,!0))},findTarget:function(e,t){if(this.skipTargetFind)return;if(this._isLastRenderedObject(e))return this.lastRenderedObjectWithControlsAboveOverlay;var n=this.getActiveGroup();if(n&&!t&&this.containsPoint(e,n))return n;var r=this._searchPossibleTargets(e);return this._fireOverOutEvents(r),r},_fireOverOutEvents:function(e){e?this._hoveredTarget!==e&&(this.fire("mouse:over",{target:e}),e.fire("mouseover"),this._hoveredTarget&&(this.fire("mouse:out",{target:this._hoveredTarget}),this._hoveredTarget.fire("mouseout")),this._hoveredTarget=e):this._hoveredTarget&&(this.fire("mouse:out",{target:this._hoveredTarget}),this._hoveredTarget.fire("mouseout"),this._hoveredTarget=null)},_checkTarget:function(e,t,n){if(t&&t.visible&&t.evented&&this.containsPoint(e,t)){if(!this.perPixelTargetFind&&!t.perPixelTargetFind||!!t.isEditing)return!0;var r=this.isTargetTransparent(t,n.x,n.y);if(!r)return!0}},_searchPossibleTargets:function(e){var t,n=this.getPointer(e,!0),r=this._objects.length;while(r--)if(!this._objects[r].group&&this._checkTarget(e,this._objects[r],n)){this.relatedTarget=this._objects[r],t=this._objects[r];break}return t},getPointer:function(t,n,r){r||(r=this.upperCanvasEl);var i=e(t,r),s=r.getBoundingClientRect(),o=s.width||0,u=s.height||0,a;if(!o||!u)"top"in s&&"bottom"in s&&(u=Math.abs(s.top-s.bottom)),"right"in s&&"left"in s&&(o=Math.abs(s.right-s.left));return this.calcOffset(),i.x=i.x-this._offset.left,i.y=i.y-this._offset.top,n||(i=fabric.util.transformPoint(i,fabric.util.invertTransform(this.viewportTransform))),o===0||u===0?a={width:1,height:1}:a={width:r.width/o,height:r.height/u},{x:i.x*a.width,y:i.y*a.height}},_createUpperCanvas:function(){var e=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,"");this.upperCanvasEl=this._createCanvasElement(),fabric.util.addClass(this.upperCanvasEl,"upper-canvas "+e),this.wrapperEl.appendChild(this.upperCanvasEl),this._copyCanvasStyle(this.lowerCanvasEl,this.upperCanvasEl),this._applyCanvasStyle(this.upperCanvasEl),this.contextTop=this.upperCanvasEl.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{"class":this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.getWidth()+"px",height:this.getHeight()+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(e){var t=this.getWidth()||e.width,n=this.getHeight()||e.height;fabric.util.setStyle(e,{position:"absolute",width:t+"px",height:n+"px",left:0,top:0}),e.width=t,e.height=n,fabric.util.makeElementUnselectable(e)},_copyCanvasStyle:function(e,t){t.style.cssText=e.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},_setActiveObject:function(e){this._activeObject&&this._activeObject.set("active",!1),this._activeObject=e,e.set("active",!0)},setActiveObject:function(e,t){return this._setActiveObject(e),this.renderAll(),this.fire("object:selected",{target:e,e:t}),e.fire("selected",{e:t}),this},getActiveObject:function(){return this._activeObject},_discardActiveObject:function(){this._activeObject&&this._activeObject.set("active",!1),this._activeObject=null},discardActiveObject:function(e){return this._discardActiveObject(),this.renderAll(),this.fire("selection:cleared",{e:e}),this},_setActiveGroup:function(e){this._activeGroup=e,e&&e.set("active",!0)},setActiveGroup:function(e,t){return this._setActiveGroup(e),e&&(this.fire("object:selected",{target:e,e:t}),e.fire("selected",{e:t})),this},getActiveGroup:function(){return this._activeGroup},_discardActiveGroup:function(){var e=this.getActiveGroup();e&&e.destroy(),this.setActiveGroup(null)},discardActiveGroup:function(e){return this._discardActiveGroup(),this.fire("selection:cleared",{e:e}),this},deactivateAll:function(){var e=this.getObjects(),t=0,n=e.length;for(;t<n;t++)e[t].set("active",!1);return this._discardActiveGroup(),this._discardActiveObject(),this},deactivateAllWithDispatch:function(e){var t=this.getActiveGroup()||this.getActiveObject();return t&&this.fire("before:selection:cleared",{target:t,e:e}),this.deactivateAll(),t&&this.fire("selection:cleared",{e:e}),this},drawControls:function(e){var t=this.getActiveGroup();t?this._drawGroupControls(e,t):this._drawObjectsControls(e)},_drawGroupControls:function(e,t){t._renderControls(e)},_drawObjectsControls:function(e){for(var t=0,n=this._objects.length;t<n;++t){if(!this._objects[t]||!this._objects[t].active)continue;this._objects[t]._renderControls(e),this.lastRenderedObjectWithControlsAboveOverlay=this._objects[t]}}});for(var o in fabric.StaticCanvas)o!=="prototype"&&(fabric.Canvas[o]=fabric.StaticCanvas[o]);fabric.isTouchSupported&&(fabric.Canvas.prototype._setCursorFromEvent=function(){}),fabric.Element=fabric.Canvas})();(function(){var e={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},t=fabric.util.addListener,n=fabric.util.removeListener;fabric.util.object.extend(fabric.Canvas.prototype,{cursorMap:["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],_initEventListeners:function(){this._bindEvents(),t(fabric.window,"resize",this._onResize),t(this.upperCanvasEl,"mousedown",this._onMouseDown),t(this.upperCanvasEl,"mousemove",this._onMouseMove),t(this.upperCanvasEl,"mousewheel",this._onMouseWheel),t(this.upperCanvasEl,"touchstart",this._onMouseDown),t(this.upperCanvasEl,"touchmove",this._onMouseMove),typeof eventjs!="undefined"&&"add"in eventjs&&(eventjs.add(this.upperCanvasEl,"gesture",this._onGesture),eventjs.add(this.upperCanvasEl,"drag",this._onDrag),eventjs.add(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.add(this.upperCanvasEl,"shake",this._onShake),eventjs.add(this.upperCanvasEl,"longpress",this._onLongPress))},_bindEvents:function(){this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this)},removeListeners:function(){n(fabric.window,"resize",this._onResize),n(this.upperCanvasEl,"mousedown",this._onMouseDown),n(this.upperCanvasEl,"mousemove",this._onMouseMove),n(this.upperCanvasEl,"mousewheel",this._onMouseWheel),n(this.upperCanvasEl,"touchstart",this._onMouseDown),n(this.upperCanvasEl,"touchmove",this._onMouseMove),typeof eventjs!="undefined"&&"remove"in eventjs&&(eventjs.remove(this.upperCanvasEl,"gesture",this._onGesture),eventjs.remove(this.upperCanvasEl,"drag",this._onDrag),eventjs.remove(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.remove(this.upperCanvasEl,"shake",this._onShake),eventjs.remove(this.upperCanvasEl,"longpress",this._onLongPress))},_onGesture:function(e,t){this.__onTransformGesture&&this.__onTransformGesture(e,t)},_onDrag:function(e,t){this.__onDrag&&this.__onDrag(e,t)},_onMouseWheel:function(e,t){this.__onMouseWheel&&this.__onMouseWheel(e,t)},_onOrientationChange:function(e,t){this.__onOrientationChange&&this.__onOrientationChange(e,t)},_onShake:function(e,t){this.__onShake&&this.__onShake(e,t)},_onLongPress:function(e,t){this.__onLongPress&&this.__onLongPress(e,t)},_onMouseDown:function(e){this.__onMouseDown(e),t(fabric.document,"touchend",this._onMouseUp),t(fabric.document,"touchmove",this._onMouseMove),n(this.upperCanvasEl,"mousemove",this._onMouseMove),n(this.upperCanvasEl,"touchmove",this._onMouseMove),e.type==="touchstart"?n(this.upperCanvasEl,"mousedown",this._onMouseDown):(t(fabric.document,"mouseup",this._onMouseUp),t(fabric.document,"mousemove",this._onMouseMove))},_onMouseUp:function(e){this.__onMouseUp(e),n(fabric.document,"mouseup",this._onMouseUp),n(fabric.document,"touchend",this._onMouseUp),n(fabric.document,"mousemove",this._onMouseMove),n(fabric.document,"touchmove",this._onMouseMove),t(this.upperCanvasEl,"mousemove",this._onMouseMove),t(this.upperCanvasEl,"touchmove",this._onMouseMove);if(e.type==="touchend"){var r=this;setTimeout(function(){t(r.upperCanvasEl,"mousedown",r._onMouseDown)},400)}},_onMouseMove:function(e){!this.allowTouchScrolling&&e.preventDefault&&e.preventDefault(),this.__onMouseMove(e)},_onResize:function(){this.calcOffset()},_shouldRender:function(e,t){var n=this.getActiveGroup()||this.getActiveObject();return!!(e&&(e.isMoving||e!==n)||!e&&!!n||!e&&!n&&!this._groupSelector||t&&this._previousPointer&&this.selection&&(t.x!==this._previousPointer.x||t.y!==this._previousPointer.y))},__onMouseUp:function(e){var t;if(this.isDrawingMode&&this._isCurrentlyDrawing){this._onMouseUpInDrawingMode(e);return}this._currentTransform?(this._finalizeCurrentTransform(),t=this._currentTransform.target):t=this.findTarget(e,!0);var n=this._shouldRender(t,this.getPointer(e));this._maybeGroupObjects(e),t&&(t.isMoving=!1),n&&this.renderAll(),this._handleCursorAndEvent(e,t)},_handleCursorAndEvent:function(e,t){this._setCursorFromEvent(e,t);var n=this;setTimeout(function(){n._setCursorFromEvent(e,t)},50),this.fire("mouse:up",{target:t,e:e}),t&&t.fire("mouseup",{e:e})},_finalizeCurrentTransform:function(){var e=this._currentTransform,t=e.target;t._scaling&&(t._scaling=!1),t.setCoords(),this.stateful&&t.hasStateChanged()&&(this.fire("object:modified",{target:t}),t.fire("modified")),this._restoreOriginXY(t)},_restoreOriginXY:function(e){if(this._previousOriginX&&this._previousOriginY){var t=e.translateToOriginPoint(e.getCenterPoint(),this._previousOriginX,this._previousOriginY);e.originX=this._previousOriginX,e.originY=this._previousOriginY,e.left=t.x,e.top=t.y,this._previousOriginX=null,this._previousOriginY=null}},_onMouseDownInDrawingMode:function(e){this._isCurrentlyDrawing=!0,this.discardActiveObject(e).renderAll(),this.clipTo&&fabric.util.clipContext(this,this.contextTop);var t=fabric.util.invertTransform(this.viewportTransform),n=fabric.util.transformPoint(this.getPointer(e,!0),t);this.freeDrawingBrush.onMouseDown(n),this.fire("mouse:down",{e:e});var r=this.findTarget(e);typeof r!="undefined"&&r.fire("mousedown",{e:e,target:r})},_onMouseMoveInDrawingMode:function(e){if(this._isCurrentlyDrawing){var t=fabric.util.invertTransform(this.viewportTransform),n=fabric.util.transformPoint(this.getPointer(e,!0),t);this.freeDrawingBrush.onMouseMove(n)}this.setCursor(this.freeDrawingCursor),this.fire("mouse:move",{e:e});var r=this.findTarget(e);typeof r!="undefined"&&r.fire("mousemove",{e:e,target:r})},_onMouseUpInDrawingMode:function(e){this._isCurrentlyDrawing=!1,this.clipTo&&this.contextTop.restore(),this.freeDrawingBrush.onMouseUp(),this.fire("mouse:up",{e:e});var t=this.findTarget(e);typeof t!="undefined"&&t.fire("mouseup",{e:e,target:t})},__onMouseDown:function(e){var t="which"in e?e.which===1:e.button===1;if(!t&&!fabric.isTouchSupported)return;if(this.isDrawingMode){this._onMouseDownInDrawingMode(e);return}if(this._currentTransform)return;var n=this.findTarget(e),r=this.getPointer(e,!0);this._previousPointer=r;var i=this._shouldRender(n,r),s=this._shouldGroup(e,n);this._shouldClearSelection(e,n)?this._clearSelection(e,n,r):s&&(this._handleGrouping(e,n),n=this.getActiveGroup()),n&&n.selectable&&!s&&(this._beforeTransform(e,n),this._setupCurrentTransform(e,n)),i&&this.renderAll(),this.fire("mouse:down",{target:n,e:e}),n&&n.fire("mousedown",{e:e})},_beforeTransform:function(e,t){this.stateful&&t.saveState(),t._findTargetCorner(this.getPointer(e))&&this.onBeforeScaleRotate(t),t!==this.getActiveGroup()&&t!==this.getActiveObject()&&(this.deactivateAll(),this.setActiveObject(t,e))},_clearSelection:function(e,t,n){this.deactivateAllWithDispatch(e),t&&t.selectable?this.setActiveObject(t,e):this.selection&&(this._groupSelector={ex:n.x,ey:n.y,top:0,left:0})},_setOriginToCenter:function(e){this._previousOriginX=this._currentTransform.target.originX,this._previousOriginY=this._currentTransform.target.originY;var t=e.getCenterPoint();e.originX="center",e.originY="center",e.left=t.x,e.top=t.y,this._currentTransform.left=e.left,this._currentTransform.top=e.top},_setCenterToOrigin:function(e){var t=e.translateToOriginPoint(e.getCenterPoint(),this._previousOriginX,this._previousOriginY);e.originX=this._previousOriginX,e.originY=this._previousOriginY,e.left=t.x,e.top=t.y,this._previousOriginX=null,this._previousOriginY=null},__onMouseMove:function(e){var t,n;if(this.isDrawingMode){this._onMouseMoveInDrawingMode(e);return}if(typeof e.touches!="undefined"&&e.touches.length>1)return;var r=this._groupSelector;r?(n=this.getPointer(e,!0),r.left=n.x-r.ex,r.top=n.y-r.ey,this.renderTop()):this._currentTransform?this._transformObject(e):(t=this.findTarget(e),!t||t&&!t.selectable?this.setCursor(this.defaultCursor):this._setCursorFromEvent(e,t)),this.fire("mouse:move",{target:t,e:e}),t&&t.fire("mousemove",{e:e})},_transformObject:function(e){var t=this.getPointer(e),n=this._currentTransform;n.reset=!1,n.target.isMoving=!0,this._beforeScaleTransform(e,n),this._performTransformAction(e,n,t),this.renderAll()},_performTransformAction:function(e,t,n){var r=n.x,i=n.y,s=t.target,o=t.action;o==="rotate"?(this._rotateObject(r,i),this._fire("rotating",s,e)):o==="scale"?(this._onScale(e,t,r,i),this._fire("scaling",s,e)):o==="scaleX"?(this._scaleObject(r,i,"x"),this._fire("scaling",s,e)):o==="scaleY"?(this._scaleObject(r,i,"y"),this._fire("scaling",s,e)):(this._translateObject(r,i),this._fire("moving",s,e),this.setCursor(this.moveCursor))},_fire:function(e,t,n){this.fire("object:"+e,{target:t,e:n}),t.fire(e,{e:n})},_beforeScaleTransform:function(e,t){if(t.action==="scale"||t.action==="scaleX"||t.action==="scaleY"){var n=this._shouldCenterTransform(e,t.target);if(n&&(t.originX!=="center"||t.originY!=="center")||!n&&t.originX==="center"&&t.originY==="center")this._resetCurrentTransform(e),t.reset=!0}},_onScale:function(e,t,n,r){(e.shiftKey||this.uniScaleTransform)&&!t.target.get("lockUniScaling")?(t.currentAction="scale",this._scaleObject(n,r)):(!t.reset&&t.currentAction==="scale"&&this._resetCurrentTransform(e,t.target),t.currentAction="scaleEqually",this._scaleObject(n,r,"equally"))},_setCursorFromEvent:function(e,t){if(!t||!t.selectable)return this.setCursor(this.defaultCursor),!1;var n=this.getActiveGroup(),r=t._findTargetCorner&&(!n||!n.contains(t))&&t._findTargetCorner(this.getPointer(e,!0));return r?this._setCornerCursor(r,t):this.setCursor(t.hoverCursor||this.hoverCursor),!0},_setCornerCursor:function(t,n){if(t in e)this.setCursor(this._getRotatedCornerCursor(t,n));else{if(t!=="mtr"||!n.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1;this.setCursor(this.rotationCursor)}},_getRotatedCornerCursor:function(t,n){var r=Math.round(n.getAngle()%360/45);return r<0&&(r+=8),r+=e[t],r%=8,this.cursorMap[r]}})})();(function(){var e=Math.min,t=Math.max;fabric.util.object.extend(fabric.Canvas.prototype,{_shouldGroup:function(e,t){var n=this.getActiveObject();return e.shiftKey&&(this.getActiveGroup()||n&&n!==t)&&this.selection},_handleGrouping:function(e,t){if(t===this.getActiveGroup()){t=this.findTarget(e,!0);if(!t||t.isType("group"))return}this.getActiveGroup()?this._updateActiveGroup(t,e):this._createActiveGroup(t,e),this._activeGroup&&this._activeGroup.saveCoords()},_updateActiveGroup:function(e,t){var n=this.getActiveGroup();if(n.contains(e)){n.removeWithUpdate(e),this._resetObjectTransform(n),e.set("active",!1);if(n.size()===1){this.discardActiveGroup(t),this.setActiveObject(n.item(0));return}}else n.addWithUpdate(e),this._resetObjectTransform(n);this.fire("selection:created",{target:n,e:t}),n.set("active",!0)},_createActiveGroup:function(e,t){if(this._activeObject&&e!==this._activeObject){var n=this._createGroup(e);n.addWithUpdate(),this.setActiveGroup(n),this._activeObject=null,this.fire("selection:created",{target:n,e:t})}e.set("active",!0)},_createGroup:function(e){var t=this.getObjects(),n=t.indexOf(this._activeObject)<t.indexOf(e),r=n?[this._activeObject,e]:[e,this._activeObject];return new fabric.Group(r,{canvas:this})},_groupSelectedObjects:function(e){var t=this._collectObjects();t.length===1?this.setActiveObject(t[0],e):t.length>1&&(t=new fabric.Group(t.reverse(),{canvas:this}),t.addWithUpdate(),this.setActiveGroup(t,e),t.saveCoords(),this.fire("selection:created",{target:t}),this.renderAll())},_collectObjects:function(){var n=[],r,i=this._groupSelector.ex,s=this._groupSelector.ey,o=i+this._groupSelector.left,u=s+this._groupSelector.top,a=new fabric.Point(e(i,o),e(s,u)),f=new fabric.Point(t(i,o),t(s,u)),l=i===o&&s===u;for(var c=this._objects.length;c--;){r=this._objects[c];if(!r||!r.selectable||!r.visible)continue;if(r.intersectsWithRect(a,f)||r.isContainedWithinRect(a,f)||r.containsPoint(a)||r.containsPoint(f)){r.set("active",!0),n.push(r);if(l)break}}return n},_maybeGroupObjects:function(e){this.selection&&this._groupSelector&&this._groupSelectedObjects(e);var t=this.getActiveGroup();t&&(t.setObjectsCoords().setCoords(),t.isMoving=!1,this.setCursor(this.defaultCursor)),this._groupSelector=null,this._currentTransform=null}})})();fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(e){e||(e={});var t=e.format||"png",n=e.quality||1,r=e.multiplier||1,i={left:e.left,top:e.top,width:e.width,height:e.height};return r!==1?this.__toDataURLWithMultiplier(t,n,i,r):this.__toDataURL(t,n,i)},__toDataURL:function(e,t,n){this.renderAll(!0);var r=this.upperCanvasEl||this.lowerCanvasEl,i=this.__getCroppedCanvas(r,n);e==="jpg"&&(e="jpeg");var s=fabric.StaticCanvas.supports("toDataURLWithQuality")?(i||r).toDataURL("image/"+e,t):(i||r).toDataURL("image/"+e);return this.contextTop&&this.clearContext(this.contextTop),this.renderAll(),i&&(i=null),s},__getCroppedCanvas:function(e,t){var n,r,i="left"in t||"top"in t||"width"in t||"height"in t;return i&&(n=fabric.util.createCanvasElement(),r=n.getContext("2d"),n.width=t.width||this.width,n.height=t.height||this.height,r.drawImage(e,-t.left||0,-t.top||0)),n},__toDataURLWithMultiplier:function(e,t,n,r){var i=this.getWidth(),s=this.getHeight(),o=i*r,u=s*r,a=this.getActiveObject(),f=this.getActiveGroup(),l=this.contextTop||this.contextContainer;r>1&&this.setWidth(o).setHeight(u),l.scale(r,r),n.left&&(n.left*=r),n.top&&(n.top*=r),n.width?n.width*=r:r<1&&(n.width=o),n.height?n.height*=r:r<1&&(n.height=u),f?this._tempRemoveBordersControlsFromGroup(f):a&&this.deactivateAll&&this.deactivateAll(),this.renderAll(!0);var c=this.__toDataURL(e,t,n);return this.width=i,this.height=s,l.scale(1/r,1/r),this.setWidth(i).setHeight(s),f?this._restoreBordersControlsOnGroup(f):a&&this.setActiveObject&&this.setActiveObject(a),this.contextTop&&this.clearContext(this.contextTop),this.renderAll(),c},toDataURLWithMultiplier:function(e,t,n){return this.toDataURL({format:e,multiplier:t,quality:n})},_tempRemoveBordersControlsFromGroup:function(e){e.origHasControls=e.hasControls,e.origBorderColor=e.borderColor,e.hasControls=!0,e.borderColor="rgba(0,0,0,0)",e.forEachObject(function(e){e.origBorderColor=e.borderColor,e.borderColor="rgba(0,0,0,0)"})},_restoreBordersControlsOnGroup:function(e){e.hideControls=e.origHideControls,e.borderColor=e.origBorderColor,e.forEachObject(function(e){e.borderColor=e.origBorderColor,delete e.origBorderColor})}});fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromDatalessJSON:function(e,t,n){return this.loadFromJSON(e,t,n)},loadFromJSON:function(e,t,n){if(!e)return;var r=typeof e=="string"?JSON.parse(e):e;this.clear();var i=this;return this._enlivenObjects(r.objects,function(){i._setBgOverlay(r,t)},n),this},_setBgOverlay:function(e,t){var n=this,r={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1};if(!e.backgroundImage&&!e.overlayImage&&!e.background&&!e.overlay){t&&t();return}var i=function(){r.backgroundImage&&r.overlayImage&&r.backgroundColor&&r.overlayColor&&(n.renderAll(),t&&t())};this.__setBgOverlay("backgroundImage",e.backgroundImage,r,i),this.__setBgOverlay("overlayImage",e.overlayImage,r,i),this.__setBgOverlay("backgroundColor",e.background,r,i),this.__setBgOverlay("overlayColor",e.overlay,r,i),i()},__setBgOverlay:function(e,t,n,r){var i=this;if(!t){n[e]=!0;return}e==="backgroundImage"||e==="overlayImage"?fabric.Image.fromObject(t,function(t){i[e]=t,n[e]=!0,r&&r()}):this["set"+fabric.util.string.capitalize(e,!0)](t,function(){n[e]=!0,r&&r()})},_enlivenObjects:function(e,t,n){var r=this;if(!e||e.length===0){t&&t();return}var i=this.renderOnAddRemove;this.renderOnAddRemove=!1,fabric.util.enlivenObjects(e,function(e){e.forEach(function(e,t){r.insertAt(e,t,!0)}),r.renderOnAddRemove=i,t&&t()},null,n)},_toDataURL:function(e,t){this.clone(function(n){t(n.toDataURL(e))})},_toDataURLWithMultiplier:function(e,t,n){this.clone(function(r){n(r.toDataURLWithMultiplier(e,t))})},clone:function(e,t){var n=JSON.stringify(this.toJSON(t));this.cloneWithoutData(function(t){t.loadFromJSON(n,function(){e&&e(t)})})},cloneWithoutData:function(e){var t=fabric.document.createElement("canvas");t.width=this.getWidth(),t.height=this.getHeight();var n=new fabric.Canvas(t);n.clipTo=this.clipTo,this.backgroundImage?(n.setBackgroundImage(this.backgroundImage.src,function(){n.renderAll(),e&&e(n)}),n.backgroundImageOpacity=this.backgroundImageOpacity,n.backgroundImageStretch=this.backgroundImageStretch):e&&e(n)}});(function(){var e=fabric.util.degreesToRadians,t=fabric.util.radiansToDegrees;fabric.util.object.extend(fabric.Canvas.prototype,{__onTransformGesture:function(e,t){if(this.isDrawingMode||!e.touches||e.touches.length!==2||"gesture"!==t.gesture)return;var n=this.findTarget(e);"undefined"!=typeof n&&(this.__gesturesParams={e:e,self:t,target:n},this.__gesturesRenderer()),this.fire("touch:gesture",{target:n,e:e,self:t})},__gesturesParams:null,__gesturesRenderer:function(){if(this.__gesturesParams===null||this._currentTransform===null)return;var e=this.__gesturesParams.self,t=this._currentTransform;t.action="scale",t.originX=t.originY="center",this._setOriginToCenter(t.target),this._scaleObjectBy(e.scale),e.rotation!==0&&(t.action="rotate",this._rotateObjectByAngle(e.rotation)),this.renderAll(),t.action="drag"},__onDrag:function(e,t){this.fire("touch:drag",{e:e,self:t})},__onOrientationChange:function(e,t){this.fire("touch:orientation",{e:e,self:t})},__onShake:function(e,t){this.fire("touch:shake",{e:e,self:t})},__onLongPress:function(e,t){this.fire("touch:longpress",{e:e,self:t})},_scaleObjectBy:function(e,t){var n=this._currentTransform,r=n.target,i=r.get("lockScalingX"),s=r.get("lockScalingY");if(i&&s)return;r._scaling=!0;var o=r.translateToOriginPoint(r.getCenterPoint(),n.originX,n.originY);t||(n.newScaleX=n.scaleX*e,n.newScaleY=n.scaleY*e,i||r.set("scaleX",n.scaleX*e),s||r.set("scaleY",n.scaleY*e)),r.setPositionByOrigin(o,n.originX,n.originY)},_rotateObjectByAngle:function(n){var r=this._currentTransform;if(r.target.get("lockRotation"))return;r.target.angle=t(e(n)+r.theta)}})})();(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.toFixed,i=t.util.string.capitalize,s=t.util.degreesToRadians,o=t.StaticCanvas.supports("setLineDash");if(t.Object)return;t.Object=t.util.createClass({type:"object",originX:"left",originY:"top",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,cornerSize:12,transparentCorners:!0,hoverCursor:null,padding:0,borderColor:"rgba(102,153,255,0.75)",cornerColor:"rgba(102,153,255,0.5)",centeredScaling:!1,centeredRotation:!0,fill:"rgb(0,0,0)",fillRule:"nonzero",globalCompositeOperation:"source-over",backgroundColor:"",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,transformMatrix:null,minScaleLimit:.01,selectable:!0,evented:!0,visible:!0,hasControls:!0,hasBorders:!0,hasRotatingPoint:!0,rotatingPointOffset:40,perPixelTargetFind:!1,includeDefaultValues:!0,clipTo:null,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockUniScaling:!1,lockScalingFlip:!1,stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill fillRule globalCompositeOperation shadow clipTo visible backgroundColor".split(" "),initialize:function(e){e&&this.setOptions(e)},_initGradient:function(e){e.fill&&e.fill.colorStops&&!(e.fill instanceof t.Gradient)&&this.set("fill",new t.Gradient(e.fill))},_initPattern:function(e){e.fill&&e.fill.source&&!(e.fill instanceof t.Pattern)&&this.set("fill",new t.Pattern(e.fill)),e.stroke&&e.stroke.source&&!(e.stroke instanceof t.Pattern)&&this.set("stroke",new t.Pattern(e.stroke))},_initClipping:function(e){if(!e.clipTo||typeof e.clipTo!="string")return;var n=t.util.getFunctionBody(e.clipTo);typeof n!="undefined"&&(this.clipTo=new Function("ctx",n))},setOptions:function(e){for(var t in e)this.set(t,e[t]);this._initGradient(e),this._initPattern(e),this._initClipping(e)},transform:function(e,t){var n=t?this._getLeftTopCoords():this.getCenterPoint();e.translate(n.x,n.y),e.rotate(s(this.angle)),e.scale(this.scaleX*(this.flipX?-1:1),this.scaleY*(this.flipY?-1:1))},toObject:function(e){var n=t.Object.NUM_FRACTION_DIGITS,i={type:this.type,originX:this.originX,originY:this.originY,left:r(this.left,n),top:r(this.top,n),width:r(this.width,n),height:r(this.height,n),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:r(this.strokeWidth,n),strokeDashArray:this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:r(this.strokeMiterLimit,n),scaleX:r(this.scaleX,n),scaleY:r(this.scaleY,n),angle:r(this.getAngle(),n),flipX:this.flipX,flipY:this.flipY,opacity:r(this.opacity,n),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,clipTo:this.clipTo&&String(this.clipTo),backgroundColor:this.backgroundColor,fillRule:this.fillRule,globalCompositeOperation:this.globalCompositeOperation};return this.includeDefaultValues||(i=this._removeDefaultValues(i)),t.util.populateWithProperties(this,i,e),i},toDatalessObject:function(e){return this.toObject(e)},_removeDefaultValues:function(e){var n=t.util.getKlass(e.type).prototype,r=n.stateProperties;return r.forEach(function(t){e[t]===n[t]&&delete e[t]}),e},toString:function(){return"#<fabric."+i(this.type)+">"},get:function(e){return this[e]},_setObject:function(e){for(var t in e)this._set(t,e[t])},set:function(e,t){return typeof e=="object"?this._setObject(e):typeof t=="function"&&e!=="clipTo"?this._set(e,t(this.get(e))):this._set(e,t),this},_set:function(e,n){var i=e==="scaleX"||e==="scaleY";return i&&(n=this._constrainScale(n)),e==="scaleX"&&n<0?(this.flipX=!this.flipX,n*=-1):e==="scaleY"&&n<0?(this.flipY=!this.flipY,n*=-1):e==="width"||e==="height"?this.minScaleLimit=r(Math.min(.1,1/Math.max(this.width,this.height)),2):e==="shadow"&&n&&!(n instanceof t.Shadow)&&(n=new t.Shadow(n)),this[e]=n,this},toggle:function(e){var t=this.get(e);return typeof t=="boolean"&&this.set(e,!t),this},setSourcePath:function(e){return this.sourcePath=e,this},getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:[1,0,0,1,0,0]},render:function(e,n){if(this.width===0&&this.height===0||!this.visible)return;e.save(),this._setupCompositeOperation(e),n||this.transform(e),this._setStrokeStyles(e),this._setFillStyles(e),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this._setOpacity(e),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e),this._render(e,n),this.clipTo&&e.restore(),this._removeShadow(e),this._restoreCompositeOperation(e),e.restore()},_setOpacity:function(e){this.group&&this.group._setOpacity(e),e.globalAlpha*=this.opacity},_setStrokeStyles:function(e){this.stroke&&(e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e,this):this.stroke)},_setFillStyles:function(e){this.fill&&(e.fillStyle=this.fill.toLive?this.fill.toLive(e,this):this.fill)},_renderControls:function(e,n){if(!this.active||n)return;var r=this.getViewportTransform();e.save();var i;this.group&&(i=t.util.transformPoint(this.group.getCenterPoint(),r),e.translate(i.x,i.y),e.rotate(s(this.group.angle))),i=t.util.transformPoint(this.getCenterPoint(),r,null!=this.group),this.group&&(i.x*=this.group.scaleX,i.y*=this.group.scaleY),e.translate(i.x,i.y),e.rotate(s(this.angle)),this.drawBorders(e),this.drawControls(e),e.restore()},_setShadow:function(e){if(!this.shadow)return;var t=this.canvas&&this.canvas.viewportTransform[0]||1,n=this.canvas&&this.canvas.viewportTransform[3]||1;e.shadowColor=this.shadow.color,e.shadowBlur=this.shadow.blur*(t+n)*(this.scaleX+this.scaleY)/4,e.shadowOffsetX=this.shadow.offsetX*t*this.scaleX,e.shadowOffsetY=this.shadow.offsetY*n*this.scaleY},_removeShadow:function(e){if(!this.shadow)return;e.shadowColor="",e.shadowBlur=e.shadowOffsetX=e.shadowOffsetY=0},_renderFill:function(e){if(!this.fill)return;e.save();if(this.fill.gradientTransform){var t=this.fill.gradientTransform;e.transform.apply(e,t)}this.fill.toLive&&e.translate(-this.width/2+this.fill.offsetX||0,-this.height/2+this.fill.offsetY||0),this.fillRule==="evenodd"?e.fill("evenodd"):e.fill(),e.restore(),this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e)},_renderStroke:function(e){if(!this.stroke||this.strokeWidth===0)return;e.save();if(this.strokeDashArray)1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),o?(e.setLineDash(this.strokeDashArray),this._stroke&&this._stroke(e)):this._renderDashedStroke&&this._renderDashedStroke(e),e.stroke();else{if(this.stroke.gradientTransform){var t=this.stroke.gradientTransform;e.transform.apply(e,t)}this._stroke?this._stroke(e):e.stroke()}this._removeShadow(e),e.restore()},clone:function(e,n){return this.constructor.fromObject?this.constructor.fromObject(this.toObject(n),e):new t.Object(this.toObject(n))},cloneAsImage:function(e){var n=this.toDataURL();return t.util.loadImage(n,function(n){e&&e(new t.Image(n))}),this},toDataURL:function(e){e||(e={});var n=t.util.createCanvasElement(),r=this.getBoundingRect();n.width=r.width,n.height=r.height,t.util.wrapElement(n,"div");var i=new t.StaticCanvas(n);e.format==="jpg"&&(e.format="jpeg"),e.format==="jpeg"&&(i.backgroundColor="#fff");var s={active:this.get("active"),left:this.getLeft(),top:this.getTop()};this.set("active",!1),this.setPositionByOrigin(new t.Point(n.width/2,n.height/2),"center","center");var o=this.canvas;i.add(this);var u=i.toDataURL(e);return this.set(s).setCoords(),this.canvas=o,i.dispose(),i=null,u},isType:function(e){return this.type===e},complexity:function(){return 0},toJSON:function(e){return this.toObject(e)},setGradient:function(e,n){n||(n={});var r={colorStops:[]};r.type=n.type||(n.r1||n.r2?"radial":"linear"),r.coords={x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2};if(n.r1||n.r2)r.coords.r1=n.r1,r.coords.r2=n.r2;for(var i in n.colorStops){var s=new t.Color(n.colorStops[i]);r.colorStops.push({offset:i,color:s.toRgb(),opacity:s.getAlpha()})}return this.set(e,t.Gradient.forObject(this,r))},setPatternFill:function(e){return this.set("fill",new t.Pattern(e))},setShadow:function(e){return this.set("shadow",e?new t.Shadow(e):null)},setColor:function(e){return this.set("fill",e),this},setAngle:function(e){var t=(this.originX!=="center"||this.originY!=="center")&&this.centeredRotation;return t&&this._setOriginToCenter(),this.set("angle",e),t&&this._resetOrigin(),this},centerH:function(){return this.canvas.centerObjectH(this),this},centerV:function(){return this.canvas.centerObjectV(this),this},center:function(){return this.canvas.centerObject(this),this},remove:function(){return this.canvas.remove(this),this},getLocalPointer:function(e,t){t=t||this.canvas.getPointer(e);var n=this.translateToOriginPoint(this.getCenterPoint(),"left","top");return{x:t.x-n.x,y:t.y-n.y}},_setupCompositeOperation:function(e){this.globalCompositeOperation&&(this._prevGlobalCompositeOperation=e.globalCompositeOperation,e.globalCompositeOperation=this.globalCompositeOperation)},_restoreCompositeOperation:function(e){this.globalCompositeOperation&&this._prevGlobalCompositeOperation&&(e.globalCompositeOperation=this._prevGlobalCompositeOperation)}}),t.util.createAccessors(t.Object),t.Object.prototype.rotate=t.Object.prototype.setAngle,n(t.Object.prototype,t.Observable),t.Object.NUM_FRACTION_DIGITS=2,t.Object.__uid=0})(typeof exports!="undefined"?exports:this);(function(){var e=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{translateToCenterPoint:function(t,n,r){var i=t.x,s=t.y,o=this.stroke?this.strokeWidth:0;return n==="left"?i=t.x+(this.getWidth()+o*this.scaleX)/2:n==="right"&&(i=t.x-(this.getWidth()+o*this.scaleX)/2),r==="top"?s=t.y+(this.getHeight()+o*this.scaleY)/2:r==="bottom"&&(s=t.y-(this.getHeight()+o*this.scaleY)/2),fabric.util.rotatePoint(new fabric.Point(i,s),t,e(this.angle))},translateToOriginPoint:function(t,n,r){var i=t.x,s=t.y,o=this.stroke?this.strokeWidth:0;return n==="left"?i=t.x-(this.getWidth()+o*this.scaleX)/2:n==="right"&&(i=t.x+(this.getWidth()+o*this.scaleX)/2),r==="top"?s=t.y-(this.getHeight()+o*this.scaleY)/2:r==="bottom"&&(s=t.y+(this.getHeight()+o*this.scaleY)/2),fabric.util.rotatePoint(new fabric.Point(i,s),t,e(this.angle))},getCenterPoint:function(){var e=new fabric.Point(this.left,this.top);return this.translateToCenterPoint(e,this.originX,this.originY)},getPointByOrigin:function(e,t){var n=this.getCenterPoint();return this.translateToOriginPoint(n,e,t)},toLocalPoint:function(t,n,r){var i=this.getCenterPoint(),s=this.stroke?this.strokeWidth:0,o,u;return n&&r?(n==="left"?o=i.x-(this.getWidth()+s*this.scaleX)/2:n==="right"?o=i.x+(this.getWidth()+s*this.scaleX)/2:o=i.x,r==="top"?u=i.y-(this.getHeight()+s*this.scaleY)/2:r==="bottom"?u=i.y+(this.getHeight()+s*this.scaleY)/2:u=i.y):(o=this.left,u=this.top),fabric.util.rotatePoint(new fabric.Point(t.x,t.y),i,-e(this.angle)).subtractEquals(new fabric.Point(o,u))},setPositionByOrigin:function(e,t,n){var r=this.translateToCenterPoint(e,t,n),i=this.translateToOriginPoint(r,this.originX,this.originY);this.set("left",i.x),this.set("top",i.y)},adjustPosition:function(t){var n=e(this.angle),r=this.getWidth()/2,i=Math.cos(n)*r,s=Math.sin(n)*r,o=this.getWidth(),u=Math.cos(n)*o,a=Math.sin(n)*o;this.originX==="center"&&t==="left"||this.originX==="right"&&t==="center"?(this.left-=i,this.top-=s):this.originX==="left"&&t==="center"||this.originX==="center"&&t==="right"?(this.left+=i,this.top+=s):this.originX==="left"&&t==="right"?(this.left+=u,this.top+=a):this.originX==="right"&&t==="left"&&(this.left-=u,this.top-=a),this.setCoords(),this.originX=t},_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY;var e=this.getCenterPoint();this.originX="center",this.originY="center",this.left=e.x,this.top=e.y},_resetOrigin:function(){var e=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY);this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=e.x,this.top=e.y,this._originalOriginX=null,this._originalOriginY=null},_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","center")}})})();(function(){var e=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{oCoords:null,intersectsWithRect:function(e,t){var n=this.oCoords,r=new fabric.Point(n.tl.x,n.tl.y),i=new fabric.Point(n.tr.x,n.tr.y),s=new fabric.Point(n.bl.x,n.bl.y),o=new fabric.Point(n.br.x,n.br.y),u=fabric.Intersection.intersectPolygonRectangle([r,i,o,s],e,t);return u.status==="Intersection"},intersectsWithObject:function(e){function t(e){return{tl:new fabric.Point(e.tl.x,e.tl.y),tr:new fabric.Point(e.tr.x,e.tr.y),bl:new fabric.Point(e.bl.x,e.bl.y),br:new fabric.Point(e.br.x,e.br.y)}}var n=t(this.oCoords),r=t(e.oCoords),i=fabric.Intersection.intersectPolygonPolygon([n.tl,n.tr,n.br,n.bl],[r.tl,r.tr,r.br,r.bl]);return i.status==="Intersection"},isContainedWithinObject:function(e){var t=e.getBoundingRect(),n=new fabric.Point(t.left,t.top),r=new fabric.Point(t.left+t.width,t.top+t.height);return this.isContainedWithinRect(n,r)},isContainedWithinRect:function(e,t){var n=this.getBoundingRect();return n.left>=e.x&&n.left+n.width<=t.x&&n.top>=e.y&&n.top+n.height<=t.y},containsPoint:function(e){var t=this._getImageLines(this.oCoords),n=this._findCrossPoints(e,t);return n!==0&&n%2===1},_getImageLines:function(e){return{topline:{o:e.tl,d:e.tr},rightline:{o:e.tr,d:e.br},bottomline:{o:e.br,d:e.bl},leftline:{o:e.bl,d:e.tl}}},_findCrossPoints:function(e,t){var n,r,i,s,o,u,a=0,f;for(var l in t){f=t[l];if(f.o.y<e.y&&f.d.y<e.y)continue;if(f.o.y>=e.y&&f.d.y>=e.y)continue;f.o.x===f.d.x&&f.o.x>=e.x?(o=f.o.x,u=e.y):(n=0,r=(f.d.y-f.o.y)/(f.d.x-f.o.x),i=e.y-n*e.x,s=f.o.y-r*f.o.x,o=-(i-s)/(n-r),u=i+n*o),o>=e.x&&(a+=1);if(a===2)break}return a},getBoundingRectWidth:function(){return this.getBoundingRect().width},getBoundingRectHeight:function(){return this.getBoundingRect().height},getBoundingRect:function(){this.oCoords||this.setCoords();var e=[this.oCoords.tl.x,this.oCoords.tr.x,this.oCoords.br.x,this.oCoords.bl.x],t=fabric.util.array.min(e),n=fabric.util.array.max(e),r=Math.abs(t-n),i=[this.oCoords.tl.y,this.oCoords.tr.y,this.oCoords.br.y,this.oCoords.bl.y],s=fabric.util.array.min(i),o=fabric.util.array.max(i),u=Math.abs(s-o);return{left:t,top:s,width:r,height:u}},getWidth:function(){return this.width*this.scaleX},getHeight:function(){return this.height*this.scaleY},_constrainScale:function(e){return Math.abs(e)<this.minScaleLimit?e<0?-this.minScaleLimit:this.minScaleLimit:e},scale:function(e){return e=this._constrainScale(e),e<0&&(this.flipX=!this.flipX,this.flipY=!this.flipY,e*=-1),this.scaleX=e,this.scaleY=e,this.setCoords(),this},scaleToWidth:function(e){var t=this.getBoundingRectWidth()/this.getWidth();return this.scale(e/this.width/t)},scaleToHeight:function(e){var t=this.getBoundingRectHeight()/this.getHeight();return this.scale(e/this.height/t)},setCoords:function(){var t=e(this.angle),n=this.getViewportTransform(),r=function(e){return fabric.util.transformPoint(e,n)},i=this._calculateCurrentDimensions(!1),s=i.x,o=i.y;s<0&&(s=Math.abs(s));var u=Math.sqrt(Math.pow(s/2,2)+Math.pow(o/2,2)),a=Math.atan(isFinite(o/s)?o/s:0),f=Math.cos(a+t)*u,l=Math.sin(a+t)*u,c=Math.sin(t),h=Math.cos(t),p=this.getCenterPoint(),d=new fabric.Point(s,o),v=new fabric.Point(p.x-f,p.y-l),m=new fabric.Point(v.x+d.x*h,v.y+d.x*c),g=r(new fabric.Point(v.x-d.y*c,v.y+d.y*h)),y=r(new fabric.Point(m.x-d.y*c,m.y+d.y*h)),b=r(v),w=r(m),E=new fabric.Point((b.x+g.x)/2,(b.y+g.y)/2),S=new fabric.Point((w.x+b.x)/2,(w.y+b.y)/2),x=new fabric.Point((y.x+w.x)/2,(y.y+w.y)/2),T=new fabric.Point((y.x+g.x)/2,(y.y+g.y)/2),N=new fabric.Point(S.x+c*this.rotatingPointOffset,S.y-h*this.rotatingPointOffset);return this.oCoords={tl:b,tr:w,br:y,bl:g,ml:E,mt:S,mr:x,mb:T,mtr:N},this._setCornerCoords&&this._setCornerCoords(),this}})})();fabric.util.object.extend(fabric.Object.prototype,{sendToBack:function(){return this.group?fabric.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?fabric.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas.bringToFront(this),this},sendBackwards:function(e){return this.group?fabric.StaticCanvas.prototype.sendBackwards.call(this.group,this,e):this.canvas.sendBackwards(this,e),this},bringForward:function(e){return this.group?fabric.StaticCanvas.prototype.bringForward.call(this.group,this,e):this.canvas.bringForward(this,e),this},moveTo:function(e){return this.group?fabric.StaticCanvas.prototype.moveTo.call(this.group,this,e):this.canvas.moveTo(this,e),this}});fabric.util.object.extend(fabric.Object.prototype,{getSvgStyles:function(){var e=this.fill?this.fill.toLive?"url(#SVGID_"+this.fill.id+")":this.fill:"none",t=this.fillRule,n=this.stroke?this.stroke.toLive?"url(#SVGID_"+this.stroke.id+")":this.stroke:"none",r=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):"",s=this.strokeLineCap?this.strokeLineCap:"butt",o=this.strokeLineJoin?this.strokeLineJoin:"miter",u=this.strokeMiterLimit?this.strokeMiterLimit:"4",a=typeof this.opacity!="undefined"?this.opacity:"1",f=this.visible?"":" visibility: hidden;",l=this.shadow?"filter: url(#SVGID_"+this.shadow.id+");":"";return["stroke: ",n,"; ","stroke-width: ",r,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",s,"; ","stroke-linejoin: ",o,"; ","stroke-miterlimit: ",u,"; ","fill: ",e,"; ","fill-rule: ",t,"; ","opacity: ",a,";",l,f].join("")},getSvgTransform:function(){if(this.group&&this.group.type==="path-group")return"";var e=fabric.util.toFixed,t=this.getAngle(),n=!this.canvas||this.canvas.svgViewportTransformation?this.getViewportTransform():[1,0,0,1,0,0],r=fabric.util.transformPoint(this.getCenterPoint(),n),i=fabric.Object.NUM_FRACTION_DIGITS,s=this.type==="path-group"?"":"translate("+e(r.x,i)+" "+e(r.y,i)+")",o=t!==0?" rotate("+e(t,i)+")":"",u=this.scaleX===1&&this.scaleY===1&&n[0]===1&&n[3]===1?"":" scale("+e(this.scaleX*n[0],i)+" "+e(this.scaleY*n[3],i)+")",a=this.type==="path-group"?this.width*n[0]:0,f=this.flipX?" matrix(-1 0 0 1 "+a+" 0) ":"",l=this.type==="path-group"?this.height*n[3]:0,c=this.flipY?" matrix(1 0 0 -1 0 "+l+")":"";return[s,o,u,f,c].join("")},getSvgTransformMatrix:function(){return this.transformMatrix?" matrix("+this.transformMatrix.join(" ")+") ":""},_createBaseSVGMarkup:function(){var e=[];return this.fill&&this.fill.toLive&&e.push(this.fill.toSVG(this,!1)),this.stroke&&this.stroke.toLive&&e.push(this.stroke.toSVG(this,!1)),this.shadow&&e.push(this.shadow.toSVG(this)),e}});fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(){return this.stateProperties.some(function(e){return this.get(e)!==this.originalState[e]},this)},saveState:function(e){return this.stateProperties.forEach(function(e){this.originalState[e]=this.get(e)},this),e&&e.stateProperties&&e.stateProperties.forEach(function(e){this.originalState[e]=this.get(e)},this),this},setupState:function(){return this.originalState={},this.saveState(),this}});(function(){var e=fabric.util.degreesToRadians,t=function(){return typeof G_vmlCanvasManager!="undefined"};fabric.util.object.extend(fabric.Object.prototype,{_controlsVisibility:null,_findTargetCorner:function(e){if(!this.hasControls||!this.active)return!1;var t=e.x,n=e.y,r,i;for(var s in this.oCoords){if(!this.isControlVisible(s))continue;if(s==="mtr"&&!this.hasRotatingPoint)continue;if(!(!this.get("lockUniScaling")||s!=="mt"&&s!=="mr"&&s!=="mb"&&s!=="ml"))continue;i=this._getImageLines(this.oCoords[s].corner),r=this._findCrossPoints({x:t,y:n},i);if(r!==0&&r%2===1)return this.__corner=s,s}return!1},_setCornerCoords:function(){var t=this.oCoords,n=e(45-this.angle),r=Math.sqrt(2*Math.pow(this.cornerSize,2))/2,i=r*Math.cos(n),s=r*Math.sin(n),o,u;for(var a in t)o=t[a].x,u=t[a].y,t[a].corner={tl:{x:o-s,y:u-i},tr:{x:o+i,y:u-s},bl:{x:o-i,y:u+s},br:{x:o+s,y:u+i}}},_calculateCurrentDimensions:function(e){var t=this.getViewportTransform(),n=this.strokeWidth,r=this.width,i=this.height,s=this.strokeLineCap==="round"||this.strokeLineCap==="square",o=this.type==="line"&&this.width===0,u=this.type==="line"&&this.height===0,a=o||u,f=s&&u||!a,l=s&&o||!a;return o?r=n:u&&(i=n),f&&(r+=r<0?-n:n),l&&(i+=i<0?-n:n),r=r*this.scaleX+2*this.padding,i=i*this.scaleY+2*this.padding,e?fabric.util.transformPoint(new fabric.Point(r,i),t,!0):{x:r,y:i}},drawBorders:function(e){if(!this.hasBorders)return this;e.save(),e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,e.strokeStyle=this.borderColor,e.lineWidth=1/this.borderScaleFactor;var t=this._calculateCurrentDimensions(!0),n=t.x,r=t.y;this.group&&(n*=this.group.scaleX,r*=this.group.scaleY),e.strokeRect(~~-(n/2)-.5,~~-(r/2)-.5,~~n+1,~~r+1);if(this.hasRotatingPoint&&this.isControlVisible("mtr")&&!this.get("lockRotation")&&this.hasControls){var i=-r/2;e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-this.rotatingPointOffset),e.closePath(),e.stroke()}return e.restore(),this},drawControls:function(e){if(!this.hasControls)return this;var t=this._calculateCurrentDimensions(!0),n=t.x,r=t.y,i=-(n/2),s=-(r/2),o=this.cornerSize/2,u=this.transparentCorners?"strokeRect":"fillRect";return e.save(),e.lineWidth=1,e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,e.strokeStyle=e.fillStyle=this.cornerColor,this._drawControl("tl",e,u,i-o,s-o),this._drawControl("tr",e,u,i+n-o,s-o),this._drawControl("bl",e,u,i-o,s+r-o),this._drawControl("br",e,u,i+n-o,s+r-o),this.get("lockUniScaling")||(this._drawControl("mt",e,u,i+n/2-o,s-o),this._drawControl("mb",e,u,i+n/2-o,s+r-o),this._drawControl("mr",e,u,i+n-o,s+r/2-o),this._drawControl("ml",e,u,i-o,s+r/2-o)),this.hasRotatingPoint&&this._drawControl("mtr",e,u,i+n/2-o,s-this.rotatingPointOffset-o),e.restore(),this},_drawControl:function(e,n,r,i,s){if(!this.isControlVisible(e))return;var o=this.cornerSize;t()||this.transparentCorners||n.clearRect(i,s,o,o),n[r](i,s,o,o)},isControlVisible:function(e){return this._getControlsVisibility()[e]},setControlVisible:function(e,t){return this._getControlsVisibility()[e]=t,this},setControlsVisibility:function(e){e||(e={});for(var t in e)this.setControlVisible(t,e[t]);return this},_getControlsVisibility:function(){return this._controlsVisibility||(this._controlsVisibility={tl:!0,tr:!0,br:!0,bl:!0,ml:!0,mt:!0,mr:!0,mb:!0,mtr:!0}),this._controlsVisibility}})})();(function(e){"use strict";function s(e,t){var n=e.origin,r=e.axis1,i=e.axis2,s=e.dimension,o=t.nearest,u=t.center,a=t.farthest;return function(){switch(this.get(n)){case o:return Math.min(this.get(r),this.get(i));case u:return Math.min(this.get(r),this.get(i))+.5*this.get(s);case a:return Math.max(this.get(r),this.get(i))}}}var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r={x1:1,x2:1,y1:1,y2:1},i=t.StaticCanvas.supports("setLineDash");if(t.Line){t.warn("fabric.Line is already defined");return}t.Line=t.util.createClass(t.Object,{type:"line",x1:0,y1:0,x2:0,y2:0,initialize:function(e,t){t=t||{},e||(e=[0,0,0,0]),this.callSuper("initialize",t),this.set("x1",e[0]),this.set("y1",e[1]),this.set("x2",e[2]),this.set("y2",e[3]),this._setWidthHeight(t)},_setWidthHeight:function(e){e||(e={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in e?e.left:this._getLeftToOriginX(),this.top="top"in e?e.top:this._getTopToOriginY()},_set:function(e,t){return this.callSuper("_set",e,t),typeof r[e]!="undefined"&&this._setWidthHeight(),this},_getLeftToOriginX:s({origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{nearest:"left",center:"center",farthest:"right"}),_getTopToOriginY:s({origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{nearest:"top",center:"center",farthest:"bottom"}),_render:function(e,t){e.beginPath();if(t){var n=this.getCenterPoint();e.translate(n.x-this.strokeWidth/2,n.y-this.strokeWidth/2)}if(!this.strokeDashArray||this.strokeDashArray&&i){var r=this.calcLinePoints();e.moveTo(r.x1,r.y1),e.lineTo(r.x2,r.y2)}e.lineWidth=this.strokeWidth;var s=e.strokeStyle;e.strokeStyle=this.stroke||e.fillStyle,this.stroke&&this._renderStroke(e),e.strokeStyle=s},_renderDashedStroke:function(e){var n=this.calcLinePoints();e.beginPath(),t.util.drawDashedLine(e,n.x1,n.y1,n.x2,n.y2,this.strokeDashArray),e.closePath()},toObject:function(e){return n(this.callSuper("toObject",e),this.calcLinePoints())},calcLinePoints:function(){var e=this.x1<=this.x2?-1:1,t=this.y1<=this.y2?-1:1,n=e*this.width*.5,r=t*this.height*.5,i=e*this.width*-0.5,s=t*this.height*-0.5;return{x1:n,x2:i,y1:r,y2:s}},toSVG:function(e){var t=this._createBaseSVGMarkup(),n={x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2};if(!this.group||this.group.type!=="path-group")n=this.calcLinePoints();return t.push("<line ",'x1="',n.x1,'" y1="',n.y1,'" x2="',n.x2,'" y2="',n.y2,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),e?e(t.join("")):t.join("")},complexity:function(){return 1}}),t.Line.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),t.Line.fromElement=function(e,r){var i=t.parseAttributes(e,t.Line.ATTRIBUTE_NAMES),s=[i.x1||0,i.y1||0,i.x2||0,i.y2||0];return new t.Line(s,n(i,r))},t.Line.fromObject=function(e){var n=[e.x1,e.y1,e.x2,e.y2];return new t.Line(n,e)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";function i(e){return"radius"in e&&e.radius>=0}var t=e.fabric||(e.fabric={}),n=Math.PI,r=t.util.object.extend;if(t.Circle){t.warn("fabric.Circle is already defined.");return}t.Circle=t.util.createClass(t.Object,{type:"circle",radius:0,startAngle:0,endAngle:n*2,initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("radius",e.radius||0),this.startAngle=e.startAngle||this.startAngle,this.endAngle=e.endAngle||this.endAngle},_set:function(e,t){return this.callSuper("_set",e,t),e==="radius"&&this.setRadius(t),this},toObject:function(e){return r(this.callSuper("toObject",e),{radius:this.get("radius"),startAngle:this.startAngle,endAngle:this.endAngle})},toSVG:function(e){var t=this._createBaseSVGMarkup(),r=0,i=0,s=(this.endAngle-this.startAngle)%(2*n);if(s===0)this.group&&this.group.type==="path-group"&&(r=this.left+this.radius,i=this.top+this.radius),t.push("<circle ",'cx="'+r+'" cy="'+i+'" ','r="',this.radius,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n');else{var o=Math.cos(this.startAngle)*this.radius,u=Math.sin(this.startAngle)*this.radius,a=Math.cos(this.endAngle)*this.radius,f=Math.sin(this.endAngle)*this.radius,l=s>n?"1":"0";t.push('<path d="M '+o+" "+u," A "+this.radius+" "+this.radius," 0 ",+l+" 1"," "+a+" "+f,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n')}return e?e(t.join("")):t.join("")},_render:function(e,t){e.beginPath(),e.arc(t?this.left+this.radius:0,t?this.top+this.radius:0,this.radius,this.startAngle,this.endAngle,!1),this._renderFill(e),this._renderStroke(e)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(e){this.radius=e,this.set("width",e*2).set("height",e*2)},complexity:function(){return 1}}),t.Circle.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),t.Circle.fromElement=function(e,n){n||(n={});var s=t.parseAttributes(e,t.Circle.ATTRIBUTE_NAMES);if(!i(s))throw new Error("value of `r` attribute is required and can not be negative");s.left=s.left||0,s.top=s.top||0;var o=new t.Circle(r(s,n));return o.left-=o.radius,o.top-=o.radius,o},t.Circle.fromObject=function(e){return new t.Circle(e)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Triangle){t.warn("fabric.Triangle is already defined");return}t.Triangle=t.util.createClass(t.Object,{type:"triangle",initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("width",e.width||100).set("height",e.height||100)},_render:function(e){var t=this.width/2,n=this.height/2;e.beginPath(),e.moveTo(-t,n),e.lineTo(0,-n),e.lineTo(t,n),e.closePath(),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n=this.width/2,r=this.height/2;e.beginPath(),t.util.drawDashedLine(e,-n,r,0,-r,this.strokeDashArray),t.util.drawDashedLine(e,0,-r,n,r,this.strokeDashArray),t.util.drawDashedLine(e,n,r,-n,r,this.strokeDashArray),e.closePath()},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=this.width/2,r=this.height/2,i=[-n+" "+r,"0 "+ -r,n+" "+r].join(",");return t.push("<polygon ",'points="',i,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),e?e(t.join("")):t.join("")},complexity:function(){return 1}}),t.Triangle.fromObject=function(e){return new t.Triangle(e)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=Math.PI*2,r=t.util.object.extend;if(t.Ellipse){t.warn("fabric.Ellipse is already defined.");return}t.Ellipse=t.util.createClass(t.Object,{type:"ellipse",rx:0,ry:0,initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("rx",e.rx||0),this.set("ry",e.ry||0)},_set:function(e,t){this.callSuper("_set",e,t);switch(e){case"rx":this.rx=t,this.set("width",t*2);break;case"ry":this.ry=t,this.set("height",t*2)}return this},getRx:function(){return this.get("rx")*this.get("scaleX")},getRy:function(){return this.get("ry")*this.get("scaleY")},toObject:function(e){return r(this.callSuper("toObject",e),{rx:this.get("rx"),ry:this.get("ry")})},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=0,r=0;return this.group&&this.group.type==="path-group"&&(n=this.left+this.rx,r=this.top+this.ry),t.push("<ellipse ",'cx="',n,'" cy="',r,'" ','rx="',this.rx,'" ry="',this.ry,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),e?e(t.join("")):t.join("")},_render:function(e,t){e.beginPath(),e.save(),e.transform(1,0,0,this.ry/this.rx,0,0),e.arc(t?this.left+this.rx:0,t?(this.top+this.ry)*this.rx/this.ry:0,this.rx,0,n,!1),e.restore(),this._renderFill(e),this._renderStroke(e)},complexity:function(){return 1}}),t.Ellipse.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),t.Ellipse.fromElement=function(e,n){n||(n={});var i=t.parseAttributes(e,t.Ellipse.ATTRIBUTE_NAMES);i.left=i.left||0,i.top=i.top||0;var s=new t.Ellipse(r(i,n));return s.top-=s.ry,s.left-=s.rx,s},t.Ellipse.fromObject=function(e){return new t.Ellipse(e)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;if(t.Rect){console.warn("fabric.Rect is already defined");return}var r=t.Object.prototype.stateProperties.concat();r.push("rx","ry","x","y"),t.Rect=t.util.createClass(t.Object,{stateProperties:r,type:"rect",rx:0,ry:0,strokeDashArray:null,initialize:function(e){e=e||{},this.callSuper("initialize",e),this._initRxRy()},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(e,t){if(this.width===1&&this.height===1){e.fillRect(0,0,1,1);return}var n=this.rx?Math.min(this.rx,this.width/2):0,r=this.ry?Math.min(this.ry,this.height/2):0,i=this.width,s=this.height,o=t?this.left:-this.width/2,u=t?this.top:-this.height/2,a=n!==0||r!==0,f=.4477152502;e.beginPath(),e.moveTo(o+n,u),e.lineTo(o+i-n,u),a&&e.bezierCurveTo(o+i-f*n,u,o+i,u+f*r,o+i,u+r),e.lineTo(o+i,u+s-r),a&&e.bezierCurveTo(o+i,u+s-f*r,o+i-f*n,u+s,o+i-n,u+s),e.lineTo(o+n,u+s),a&&e.bezierCurveTo(o+f*n,u+s,o,u+s-f*r,o,u+s-r),e.lineTo(o,u+r),a&&e.bezierCurveTo(o,u+f*r,o+f*n,u,o+n,u),e.closePath(),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n=-this.width/2,r=-this.height/2,i=this.width,s=this.height;e.beginPath(),t.util.drawDashedLine(e,n,r,n+i,r,this.strokeDashArray),t.util.drawDashedLine(e,n+i,r,n+i,r+s,this.strokeDashArray),t.util.drawDashedLine(e,n+i,r+s,n,r+s,this.strokeDashArray),t.util.drawDashedLine(e,n,r+s,n,r,this.strokeDashArray),e.closePath()},toObject:function(e){var t=n(this.callSuper("toObject",e),{rx:this.get("rx")||0,ry:this.get("ry")||0});return this.includeDefaultValues||this._removeDefaultValues(t),t},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=this.left,r=this.top;if(!this.group||this.group.type!=="path-group")n=-this.width/2,r=-this.height/2;return t.push("<rect ",'x="',n,'" y="',r,'" rx="',this.get("rx"),'" ry="',this.get("ry"),'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),e?e(t.join("")):t.join("")},complexity:function(){return 1}}),t.Rect.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),t.Rect.fromElement=function(e,r){if(!e)return null;r=r||{};var i=t.parseAttributes(e,t.Rect.ATTRIBUTE_NAMES);i.left=i.left||0,i.top=i.top||0;var s=new t.Rect(n(r?t.util.object.clone(r):{},i));return s.visible=s.width>0&&s.height>0,s},t.Rect.fromObject=function(e){return new t.Rect(e)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Polyline){t.warn("fabric.Polyline is already defined");return}t.Polyline=t.util.createClass(t.Object,{type:"polyline",points:null,minX:0,minY:0,initialize:function(e,n){return t.Polygon.prototype.initialize.call(this,e,n)},_calcDimensions:function(){return t.Polygon.prototype._calcDimensions.call(this)},_applyPointOffset:function(){return t.Polygon.prototype._applyPointOffset.call(this)},toObject:function(e){return t.Polygon.prototype.toObject.call(this,e)},toSVG:function(e){return t.Polygon.prototype.toSVG.call(this,e)},_render:function(e){if(!t.Polygon.prototype.commonRender.call(this,e))return;this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n,r;e.beginPath();for(var i=0,s=this.points.length;i<s;i++)n=this.points[i],r=this.points[i+1]||n,t.util.drawDashedLine(e,n.x,n.y,r.x,r.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),t.Polyline.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(),t.Polyline.fromElement=function(e,n){if(!e)return null;n||(n={});var r=t.parsePointsAttribute(e.getAttribute("points")),i=t.parseAttributes(e,t.Polyline.ATTRIBUTE_NAMES);return new t.Polyline(r,t.util.object.extend(i,n))},t.Polyline.fromObject=function(e){var n=e.points;return new t.Polyline(n,e,!0)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.min,i=t.util.array.max,s=t.util.toFixed;if(t.Polygon){t.warn("fabric.Polygon is already defined");return}t.Polygon=t.util.createClass(t.Object,{type:"polygon",points:null,minX:0,minY:0,initialize:function(e,t){t=t||{},this.points=e||[],this.callSuper("initialize",t),this._calcDimensions(),"top"in t||(this.top=this.minY),"left"in t||(this.left=this.minX)},_calcDimensions:function(){var e=this.points,t=r(e,"x"),n=r(e,"y"),s=i(e,"x"),o=i(e,"y");this.width=s-t||0,this.height=o-n||0,this.minX=t||0,this.minY=n||0},_applyPointOffset:function(){this.points.forEach(function(e){e.x-=this.minX+this.width/2,e.y-=this.minY+this.height/2},this)},toObject:function(e){return n(this.callSuper("toObject",e),{points:this.points.concat()})},toSVG:function(e){var t=[],n=this._createBaseSVGMarkup();for(var r=0,i=this.points.length;r<i;r++)t.push(s(this.points[r].x,2),",",s(this.points[r].y,2)," ");return n.push("<",this.type," ",'points="',t.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n'),e?e(n.join("")):n.join("")},_render:function(e){if(!this.commonRender(e))return;this._renderFill(e);if(this.stroke||this.strokeDashArray)e.closePath(),this._renderStroke(e)},commonRender:function(e){var t,n=this.points.length;if(!n||isNaN(this.points[n-1].y))return!1;e.beginPath(),this._applyPointOffset&&((!this.group||this.group.type!=="path-group")&&this._applyPointOffset(),this._applyPointOffset=null),e.moveTo(this.points[0].x,this.points[0].y);for(var r=0;r<n;r++)t=this.points[r],e.lineTo(t.x,t.y);return!0},_renderDashedStroke:function(e){t.Polyline.prototype._renderDashedStroke.call(this,e),e.closePath()},complexity:function(){return this.points.length}}),t.Polygon.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(),t.Polygon.fromElement=function(e,r){if(!e)return null;r||(r={});var i=t.parsePointsAttribute(e.getAttribute("points")),s=t.parseAttributes(e,t.Polygon.ATTRIBUTE_NAMES);return new t.Polygon(i,n(s,r))},t.Polygon.fromObject=function(e){return new t.Polygon(e.points,e,!0)}})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.array.min,r=t.util.array.max,i=t.util.object.extend,s=Object.prototype.toString,o=t.util.drawArc,u={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},a={m:"l",M:"L"};if(t.Path){t.warn("fabric.Path is already defined");return}t.Path=t.util.createClass(t.Object,{type:"path",path:null,minX:0,minY:0,initialize:function(e,t){t=t||{},this.setOptions(t);if(!e)throw new Error("`path` argument is required");var n=s.call(e)==="[object Array]";this.path=n?e:e.match&&e.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);if(!this.path)return;n||(this.path=this._parsePath()),this._setPositionDimensions(),t.sourcePath&&this.setSourcePath(t.sourcePath)},_setPositionDimensions:function(){var e=this._parseDimensions();this.minX=e.left,this.minY=e.top,this.width=e.width,this.height=e.height,e.left+=this.originX==="center"?this.width/2:this.originX==="right"?this.width:0,e.top+=this.originY==="center"?this.height/2:this.originY==="bottom"?this.height:0,this.top=this.top||e.top,this.left=this.left||e.left,this.pathOffset=this.pathOffset||{x:this.minX+this.width/2,y:this.minY+this.height/2}},_render:function(e){var t,n=null,r=0,i=0,s=0,u=0,a=0,f=0,l,c,h=-this.pathOffset.x,p=-this.pathOffset.y;this.group&&this.group.type==="path-group"&&(h=0,p=0),e.beginPath();for(var d=0,v=this.path.length;d<v;++d){t=this.path[d];switch(t[0]){case"l":s+=t[1],u+=t[2],e.lineTo(s+h,u+p);break;case"L":s=t[1],u=t[2],e.lineTo(s+h,u+p);break;case"h":s+=t[1],e.lineTo(s+h,u+p);break;case"H":s=t[1],e.lineTo(s+h,u+p);break;case"v":u+=t[1],e.lineTo(s+h,u+p);break;case"V":u=t[1],e.lineTo(s+h,u+p);break;case"m":s+=t[1],u+=t[2],r=s,i=u,e.moveTo(s+h,u+p);break;case"M":s=t[1],u=t[2],r=s,i=u,e.moveTo(s+h,u+p);break;case"c":l=s+t[5],c=u+t[6],a=s+t[3],f=u+t[4],e.bezierCurveTo(s+t[1]+h,u+t[2]+p,a+h,f+p,l+h,c+p),s=l,u=c;break;case"C":s=t[5],u=t[6],a=t[3],f=t[4],e.bezierCurveTo(t[1]+h,t[2]+p,a+h,f+p,s+h,u+p);break;case"s":l=s+t[3],c=u+t[4],n[0].match(/[CcSs]/)===null?(a=s,f=u):(a=2*s-a,f=2*u-f),e.bezierCurveTo(a+h,f+p,s+t[1]+h,u+t[2]+p,l+h,c+p),a=s+t[1],f=u+t[2],s=l,u=c;break;case"S":l=t[3],c=t[4],n[0].match(/[CcSs]/)===null?(a=s,f=u):(a=2*s-a,f=2*u-f),e.bezierCurveTo(a+h,f+p,t[1]+h,t[2]+p,l+h,c+p),s=l,u=c,a=t[1],f=t[2];break;case"q":l=s+t[3],c=u+t[4],a=s+t[1],f=u+t[2],e.quadraticCurveTo(a+h,f+p,l+h,c+p),s=l,u=c;break;case"Q":l=t[3],c=t[4],e.quadraticCurveTo(t[1]+h,t[2]+p,l+h,c+p),s=l,u=c,a=t[1],f=t[2];break;case"t":l=s+t[1],c=u+t[2],n[0].match(/[QqTt]/)===null?(a=s,f=u):(a=2*s-a,f=2*u-f),e.quadraticCurveTo(a+h,f+p,l+h,c+p),s=l,u=c;break;case"T":l=t[1],c=t[2],n[0].match(/[QqTt]/)===null?(a=s,f=u):(a=2*s-a,f=2*u-f),e.quadraticCurveTo(a+h,f+p,l+h,c+p),s=l,u=c;break;case"a":o(e,s+h,u+p,[t[1],t[2],t[3],t[4],t[5],t[6]+s+h,t[7]+u+p]),s+=t[6],u+=t[7];break;case"A":o(e,s+h,u+p,[t[1],t[2],t[3],t[4],t[5],t[6]+h,t[7]+p]),s=t[6],u=t[7];break;case"z":case"Z":s=r,u=i,e.closePath()}n=t}this._renderFill(e),this._renderStroke(e)},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(e){var t=i(this.callSuper("toObject",e),{path:this.path.map(function(e){return e.slice()}),pathOffset:this.pathOffset});return this.sourcePath&&(t.sourcePath=this.sourcePath),this.transformMatrix&&(t.transformMatrix=this.transformMatrix),t},toDatalessObject:function(e){var t=this.toObject(e);return this.sourcePath&&(t.path=this.sourcePath),delete t.sourcePath,t},toSVG:function(e){var t=[],n=this._createBaseSVGMarkup(),r="";for(var i=0,s=this.path.length;i<s;i++)t.push(this.path[i].join(" "));var o=t.join(" ");if(!this.group||this.group.type!=="path-group")r=" translate("+ -this.pathOffset.x+", "+ -this.pathOffset.y+") ";return n.push("<path ",'d="',o,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),r,this.getSvgTransformMatrix(),'" stroke-linecap="round" ',"/>\n"),e?e(n.join("")):n.join("")},complexity:function(){return this.path.length},_parsePath:function(){var e=[],t=[],n,r,i=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/ig,s,o;for(var f=0,l,c=this.path.length;f<c;f++){n=this.path[f],o=n.slice(1).trim(),t.length=0;while(s=i.exec(o))t.push(s[0]);l=[n.charAt(0)];for(var h=0,p=t.length;h<p;h++)r=parseFloat(t[h]),isNaN(r)||l.push(r);var d=l[0],v=u[d.toLowerCase()],m=a[d]||d;if(l.length-1>v)for(var g=1,y=l.length;g<y;g+=v)e.push([d].concat(l.slice(g,g+v))),d=m;else e.push(l)}return e},_parseDimensions:function(){var e=[],i=[],s,o=null,u=0,a=0,f=0,l=0,c=0,h=0,p,d,v;for(var m=0,g=this.path.length;m<g;++m){s=this.path[m];switch(s[0]){case"l":f+=s[1],l+=s[2],v=[];break;case"L":f=s[1],l=s[2],v=[];break;case"h":f+=s[1],v=[];break;case"H":f=s[1],v=[];break;case"v":l+=s[1],v=[];break;case"V":l=s[1],v=[];break;case"m":f+=s[1],l+=s[2],u=f,a=l,v=[];break;case"M":f=s[1],l=s[2],u=f,a=l,v=[];break;case"c":p=f+s[5],d=l+s[6],c=f+s[3],h=l+s[4],v=t.util.getBoundsOfCurve(f,l,f+s[1],l+s[2],c,h,p,d),f=p,l=d;break;case"C":f=s[5],l=s[6],c=s[3],h=s[4],v=t.util.getBoundsOfCurve(f,l,s[1],s[2],c,h,f,l);break;case"s":p=f+s[3],d=l+s[4],o[0].match(/[CcSs]/)===null?(c=f,h=l):(c=2*f-c,h=2*l-h),v=t.util.getBoundsOfCurve(f,l,c,h,f+s[1],l+s[2],p,d),c=f+s[1],h=l+s[2],f=p,l=d;break;case"S":p=s[3],d=s[4],o[0].match(/[CcSs]/)===null?(c=f,h=l):(c=2*f-c,h=2*l-h),v=t.util.getBoundsOfCurve(f,l,c,h,s[1],s[2],p,d),f=p,l=d,c=s[1],h=s[2];break;case"q":p=f+s[3],d=l+s[4],c=f+s[1],h=l+s[2],v=t.util.getBoundsOfCurve(f,l,c,h,c,h,p,d),f=p,l=d;break;case"Q":c=s[1],h=s[2],v=t.util.getBoundsOfCurve(f,l,c,h,c,h,s[3],s[4]),f=s[3],l=s[4];break;case"t":p=f+s[1],d=l+s[2],o[0].match(/[QqTt]/)===null?(c=f,h=l):(c=2*f-c,h=2*l-h),v=t.util.getBoundsOfCurve(f,l,c,h,c,h,p,d),f=p,l=d;break;case"T":p=s[1],d=s[2],o[0].match(/[QqTt]/)===null?(c=f,h=l):(c=2*f-c,h=2*l-h),v=t.util.getBoundsOfCurve(f,l,c,h,c,h,p,d),f=p,l=d;break;case"a":v=t.util.getBoundsOfArc(f,l,s[1],s[2],s[3],s[4],s[5],s[6]+f,s[7]+l),f+=s[6],l+=s[7];break;case"A":v=t.util.getBoundsOfArc(f,l,s[1],s[2],s[3],s[4],s[5],s[6],s[7]),f=s[6],l=s[7];break;case"z":case"Z":f=u,l=a}o=s,v.forEach(function(t){e.push(t.x),i.push(t.y)}),e.push(f),i.push(l)}var y=n(e),b=n(i),w=r(e),E=r(i),S=w-y,x=E-b,T={left:y,top:b,width:S,height:x};return T}}),t.Path.fromObject=function(e,n){typeof e.path=="string"?t.loadSVGFromURL(e.path,function(r){var i=r[0],s=e.path;delete e.path,t.util.object.extend(i,e),i.setSourcePath(s),n(i)}):n(new t.Path(e.path,e))},t.Path.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(["d"]),t.Path.fromElement=function(e,n,r){var s=t.parseAttributes(e,t.Path.ATTRIBUTE_NAMES);n&&n(new t.Path(s.d,i(s,r)))},t.Path.async=!0})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.invoke,i=t.Object.prototype.toObject;if(t.PathGroup){t.warn("fabric.PathGroup is already defined");return}t.PathGroup=t.util.createClass(t.Path,{type:"path-group",fill:"",initialize:function(e,t){t=t||{},this.paths=e||[];for(var n=this.paths.length;n--;)this.paths[n].group=this;t.toBeParsed&&(this.parseDimensionsFromPaths(t),delete t.toBeParsed),this.setOptions(t),this.setCoords(),t.sourcePath&&this.setSourcePath(t.sourcePath)},parseDimensionsFromPaths:function(e){var n,r,i=[],s=[],o,u,a,f=this.transformMatrix;for(var l=this.paths.length;l--;){o=this.paths[l],u=o.height+o.strokeWidth,a=o.width+o.strokeWidth,n=[{x:o.left,y:o.top},{x:o.left+a,y:o.top},{x:o.left,y:o.top+u},{x:o.left+a,y:o.top+u}];for(var c=0;c<n.length;c++)r=n[c],f&&(r=t.util.transformPoint(r,f,!1)),i.push(r.x),s.push(r.y)}e.width=Math.max.apply(null,i),e.height=Math.max.apply(null,s)},render:function(e){if(!this.visible)return;e.save(),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this.transform(e),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e),e.translate(-this.width/2,-this.height/2);for(var n=0,r=this.paths.length;n<r;++n)this.paths[n].render(e,!0);this.clipTo&&e.restore(),this._removeShadow(e),e.restore()},_set:function(e,t){if(e==="fill"&&t&&this.isSameColor()){var n=this.paths.length;while(n--)this.paths[n]._set(e,t)}return this.callSuper("_set",e,t)},toObject:function(e){var t=n(i.call(this,e),{paths:r(this.getObjects(),"toObject",e)});return this.sourcePath&&(t.sourcePath=this.sourcePath),t},toDatalessObject:function(e){var t=this.toObject(e);return this.sourcePath&&(t.paths=this.sourcePath),t},toSVG:function(e){var t=this.getObjects(),n=this.getPointByOrigin("left","top"),r="translate("+n.x+" "+n.y+")",i=["<g ",'style="',this.getSvgStyles(),'" ','transform="',this.getSvgTransformMatrix(),r,this.getSvgTransform(),'" ',">\n"];for(var s=0,o=t.length;s<o;s++)i.push(t[s].toSVG(e));return i.push("</g>\n"),e?e(i.join("")):i.join("")},toString:function(){return"#<fabric.PathGroup ("+this.complexity()+"): { top: "+this.top+", left: "+this.left+" }>"},isSameColor:function(){var e=(this.getObjects()[0].get("fill")||"").toLowerCase();return this.getObjects().every(function(t){return(t.get("fill")||"").toLowerCase()===e})},complexity:function(){return this.paths.reduce(function(e,t){return e+(t&&t.complexity?t.complexity():0)},0)},getObjects:function(){return this.paths}}),t.PathGroup.fromObject=function(e,n){typeof e.paths=="string"?t.loadSVGFromURL(e.paths,function(r){var i=e.paths;delete e.paths;var s=t.util.groupSVGElements(r,e,i);n(s)}):t.util.enlivenObjects(e.paths,function(r){delete e.paths,n(new t.PathGroup(r,e))})},t.PathGroup.async=!0})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.min,i=t.util.array.max,s=t.util.array.invoke;if(t.Group)return;var o={lockMovementX:!0,lockMovementY:!0,lockRotation:!0,lockScalingX:!0,lockScalingY:!0,lockUniScaling:!0};t.Group=t.util.createClass(t.Object,t.Collection,{type:"group",initialize:function(e,t){t=t||{},this._objects=e||[];for(var n=this._objects.length;n--;)this._objects[n].group=this;this.originalState={},this.callSuper("initialize"),t.originX&&(this.originX=t.originX),t.originY&&(this.originY=t.originY),this._calcBounds(),this._updateObjectsCoords(),this.callSuper("initialize",t),this.setCoords(),this.saveCoords()},_updateObjectsCoords:function(){this.forEachObject(this._updateObjectCoords,this)},_updateObjectCoords:function(e){var t=e.getLeft(),n=e.getTop(),r=this.getCenterPoint();e.set({originalLeft:t,originalTop:n,left:t-r.x,top:n-r.y}),e.setCoords(),e.__origHasControls=e.hasControls,e.hasControls=!1},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},addWithUpdate:function(e){return this._restoreObjectsState(),e&&(this._objects.push(e),e.group=this),this.forEachObject(this._setObjectActive,this),this._calcBounds(),this._updateObjectsCoords(),this},_setObjectActive:function(e){e.set("active",!0),e.group=this},removeWithUpdate:function(e){return this._moveFlippedObject(e),this._restoreObjectsState(),this.forEachObject(this._setObjectActive,this),this.remove(e),this._calcBounds(),this._updateObjectsCoords(),this},_onObjectAdded:function(e){e.group=this},_onObjectRemoved:function(e){delete e.group,e.set("active",!1)},delegatedProperties:{fill:!0,opacity:!0,fontFamily:!0,fontWeight:!0,fontSize:!0,fontStyle:!0,lineHeight:!0,textDecoration:!0,textAlign:!0,backgroundColor:!0},_set:function(e,t){if(e in this.delegatedProperties){var n=this._objects.length;while(n--)this._objects[n].set(e,t)}this.callSuper("_set",e,t)},toObject:function(e){return n(this.callSuper("toObject",e),{objects:s(this._objects,"toObject",e)})},render:function(e){if(!this.visible)return;e.save(),this.clipTo&&t.util.clipContext(this,e),this.transform(e);for(var n=0,r=this._objects.length;n<r;n++)this._renderObject(this._objects[n],e);this.clipTo&&e.restore(),e.restore()},_renderControls:function(e,t){this.callSuper("_renderControls",e,t);for(var n=0,r=this._objects.length;n<r;n++)this._objects[n]._renderControls(e)},_renderObject:function(e,t){var n=e.hasRotatingPoint;if(!e.visible)return;e.hasRotatingPoint=!1,e.render(t),e.hasRotatingPoint=n},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},realizeTransform:function(e){return this._moveFlippedObject(e),this._setObjectPosition(e),e},_moveFlippedObject:function(e){var t=e.get("originX"),n=e.get("originY"),r=e.getCenterPoint();e.set({originX:"center",originY:"center",left:r.x,top:r.y}),this._toggleFlipping(e);var i=e.getPointByOrigin(t,n);return e.set({originX:t,originY:n,left:i.x,top:i.y}),this},_toggleFlipping:function(e){this.flipX&&(e.toggle("flipX"),e.set("left",-e.get("left")),e.setAngle(-e.getAngle())),this.flipY&&(e.toggle("flipY"),e.set("top",-e.get("top")),e.setAngle(-e.getAngle()))},_restoreObjectState:function(e){return this._setObjectPosition(e),e.setCoords(),e.hasControls=e.__origHasControls,delete e.__origHasControls,e.set("active",!1),e.setCoords(),delete e.group,this},_setObjectPosition:function(e){var t=this.getCenterPoint(),n=this._getRotatedLeftTop(e);e.set({angle:e.getAngle()+this.getAngle(),left:t.x+n.left,top:t.y+n.top,scaleX:e.get("scaleX")*this.get("scaleX"),scaleY:e.get("scaleY")*this.get("scaleY")})},_getRotatedLeftTop:function(e){var t=this.getAngle()*(Math.PI/180);return{left:-Math.sin(t)*e.getTop()*this.get("scaleY")+Math.cos(t)*e.getLeft()*this.get("scaleX"),top:Math.cos(t)*e.getTop()*this.get("scaleY")+Math.sin(t)*e.getLeft()*this.get("scaleX")}},destroy:function(){return this._objects.forEach(this._moveFlippedObject,this),this._restoreObjectsState()},saveCoords:function(){return this._originalLeft=this.get("left"),this._originalTop=this.get("top"),this},hasMoved:function(){return this._originalLeft!==this.get("left")||this._originalTop!==this.get("top")},setObjectsCoords:function(){return this.forEachObject(function(e){e.setCoords()}),this},_calcBounds:function(e){var t=[],n=[],r,i,s=["tr","br","bl","tl"];for(var o=0,u=this._objects.length;o<u;++o){r=this._objects[o],r.setCoords();for(var a=0;a<s.length;a++)i=s[a],t.push(r.oCoords[i].x),n.push(r.oCoords[i].y)}this.set(this._getBounds(t,n,e))},_getBounds:function(e,n,s){var o=t.util.invertTransform(this.getViewportTransform()),u=t.util.transformPoint(new t.Point(r(e),r(n)),o),a=t.util.transformPoint(new t.Point(i(e),i(n)),o),f={width:a.x-u.x||0,height:a.y-u.y||0};return s||(f.left=u.x||0,f.top=u.y||0,this.originX==="center"&&(f.left+=f.width/2),this.originX==="right"&&(f.left+=f.width),this.originY==="center"&&(f.top+=f.height/2),this.originY==="bottom"&&(f.top+=f.height)),f},toSVG:function(e){var t=["<g ",'transform="',this.getSvgTransform(),'">\n'];for(var n=0,r=this._objects.length;n<r;n++)t.push(this._objects[n].toSVG(e));return t.push("</g>\n"),e?e(t.join("")):t.join("")},get:function(e){if(e in o){if(this[e])return this[e];for(var t=0,n=this._objects.length;t<n;t++)if(this._objects[t][e])return!0;return!1}return e in this.delegatedProperties?this._objects[0]&&this._objects[0].get(e):this[e]}}),t.Group.fromObject=function(e,n){t.util.enlivenObjects(e.objects,function(r){delete e.objects,n&&n(new t.Group(r,e))})},t.Group.async=!0})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=fabric.util.object.extend;e.fabric||(e.fabric={});if(e.fabric.Image){fabric.warn("fabric.Image is already defined.");return}fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",crossOrigin:"",alignX:"none",alignY:"none",meetOrSlice:"meet",_lastScaleX:1,_lastScaleY:1,initialize:function(e,t){t||(t={}),this.filters=[],this.resizeFilters=[],this.callSuper("initialize",t),this._initElement(e,t),this._initConfig(t),t.filters&&(this.filters=t.filters,this.applyFilters())},getElement:function(){return this._element},setElement:function(e,t,n){return this._element=e,this._originalElement=e,this._initConfig(n),this.filters.length!==0?this.applyFilters(t):t&&t(),this},setCrossOrigin:function(e){return this.crossOrigin=e,this._element.crossOrigin=e,this},getOriginalSize:function(){var e=this.getElement();return{width:e.width,height:e.height}},_stroke:function(e){e.save(),this._setStrokeStyles(e),e.beginPath(),e.strokeRect(-this.width/2,-this.height/2,this.width,this.height),e.closePath(),e.restore()},_renderDashedStroke:function(e){var t=-this.width/2,n=-this.height/2,r=this.width,i=this.height;e.save(),this._setStrokeStyles(e),e.beginPath(),fabric.util.drawDashedLine(e,t,n,t+r,n,this.strokeDashArray),fabric.util.drawDashedLine(e,t+r,n,t+r,n+i,this.strokeDashArray),fabric.util.drawDashedLine(e,t+r,n+i,t,n+i,this.strokeDashArray),fabric.util.drawDashedLine(e,t,n+i,t,n,this.strokeDashArray),e.closePath(),e.restore()},toObject:function(e){return t(this.callSuper("toObject",e),{src:this._originalElement.src||this._originalElement._src,filters:this.filters.map(function(e){return e&&e.toObject()}),crossOrigin:this.crossOrigin,alignX:this.alignX,alignY:this.alignY,meetOrSlice:this.meetOrSlice})},toSVG:function(e){var t=[],n=-this.width/2,r=-this.height/2,i="none";this.group&&this.group.type==="path-group"&&(n=this.left,r=this.top),this.alignX!=="none"&&this.alignY!=="none"&&(i="x"+this.alignX+"Y"+this.alignY+" "+this.meetOrSlice),t.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n','<image xlink:href="',this.getSvgSrc(),'" x="',n,'" y="',r,'" style="',this.getSvgStyles(),'" width="',this.width,'" height="',this.height,'" preserveAspectRatio="',i,'"',"></image>\n");if(this.stroke||this.strokeDashArray){var s=this.fill;this.fill=null,t.push("<rect ",'x="',n,'" y="',r,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'),this.fill=s}return t.push("</g>\n"),e?e(t.join("")):t.join("")},getSrc:function(){if(this.getElement())return this.getElement().src||this.getElement()._src},setSrc:function(e,t,n){fabric.util.loadImage(e,function(e){return this.setElement(e,t,n)},this,n&&n.crossOrigin)},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},clone:function(e,t){this.constructor.fromObject(this.toObject(t),e)},applyFilters:function(e,t,n,r){t=t||this.filters,n=n||this._originalElement;if(!n)return;var i=n,s=fabric.util.createCanvasElement(),o=fabric.util.createImage(),u=this;return s.width=i.width,s.height=i.height,s.getContext("2d").drawImage(i,0,0,i.width,i.height),t.length===0?(this._element=n,e&&e(),s):(t.forEach(function(e){e&&e.applyTo(s,e.scaleX||u.scaleX,e.scaleY||u.scaleY),!r&&e&&e.type==="Resize"&&(u.width*=e.scaleX,u.height*=e.scaleY)}),o.width=s.width,o.height=s.height,fabric.isLikelyNode?(o.src=s.toBuffer(undefined,fabric.Image.pngCompression),u._element=o,!r&&(u._filteredEl=o),e&&e()):(o.onload=function(){u._element=o,!r&&(u._filteredEl=o),e&&e(),o.onload=s=i=null},o.src=s.toDataURL("image/png")),s)},_render:function(e,t){var n,r,i=this._findMargins(),s;n=t?this.left:-this.width/2,r=t?this.top:-this.height/2,this.meetOrSlice==="slice"&&(e.beginPath(),e.rect(n,r,this.width,this.height),e.clip()),this.isMoving===!1&&this.resizeFilters.length&&this._needsResize()?(this._lastScaleX=this.scaleX,this._lastScaleY=this.scaleY,s=this.applyFilters(null,this.resizeFilters,this._filteredEl||this._originalElement,!0)):s=this._element,s&&e.drawImage(s,n+i.marginX,r+i.marginY,i.width,i.height),this._renderStroke(e)},_needsResize:function(){return this.scaleX!==this._lastScaleX||this.scaleY!==this._lastScaleY},_findMargins:function(){var e=this.width,t=this.height,n,r,i=0,s=0;if(this.alignX!=="none"||this.alignY!=="none")n=[this.width/this._element.width,this.height/this._element.height],r=this.meetOrSlice==="meet"?Math.min.apply(null,n):Math.max.apply(null,n),e=this._element.width*r,t=this._element.height*r,this.alignX==="Mid"&&(i=(this.width-e)/2),this.alignX==="Max"&&(i=this.width-e),this.alignY==="Mid"&&(s=(this.height-t)/2),this.alignY==="Max"&&(s=this.height-t);return{width:e,height:t,marginX:i,marginY:s}},_resetWidthHeight:function(){var e=this.getElement();this.set("width",e.width),this.set("height",e.height)},_initElement:function(e){this.setElement(fabric.util.getById(e)),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(e){e||(e={}),this.setOptions(e),this._setWidthHeight(e),this._element&&this.crossOrigin&&(this._element.crossOrigin=this.crossOrigin)},_initFilters:function(e,t){e.filters&&e.filters.length?fabric.util.enlivenObjects(e.filters,function(e){t&&t(e)},"fabric.Image.filters"):t&&t()},_setWidthHeight:function(e){this.width="width"in e?e.width:this.getElement()?this.getElement().width||0:0,this.height="height"in e?e.height:this.getElement()?this.getElement().height||0:0},complexity:function(){return 1}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(e,t){fabric.util.loadImage(e.src,function(n){fabric.Image.prototype._initFilters.call(e,e,function(r){e.filters=r||[];var i=new fabric.Image(n,e);t&&t(i)})},null,e.crossOrigin)},fabric.Image.fromURL=function(e,t,n){fabric.util.loadImage(e,function(e){t&&t(new fabric.Image(e,n))},null,n&&n.crossOrigin)},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href".split(" ")),fabric.Image.fromElement=function(e,n,r){var i=fabric.parseAttributes(e,fabric.Image.ATTRIBUTE_NAMES),s="xMidYMid",o="meet",u,a,f;i.preserveAspectRatio&&(f=i.preserveAspectRatio.split(" ")),f&&f.length&&(o=f.pop(),o!=="meet"&&o!=="slice"?(s=o,o="meet"):f.length&&(s=f.pop())),u=s!=="none"?s.slice(1,4):"none",a=s!=="none"?s.slice(5,8):"none",i.alignX=u,i.alignY=a,i.meetOrSlice=o,fabric.Image.fromURL(i["xlink:href"],n,t(r?fabric.util.object.clone(r):{},i))},fabric.Image.async=!0,fabric.Image.pngCompression=1})(typeof exports!="undefined"?exports:this);(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.object.clone,i=t.util.toFixed,s=t.StaticCanvas.supports("setLineDash");if(t.Text){t.warn("fabric.Text is already defined");return}var o=t.Object.prototype.stateProperties.concat();o.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor"),t.Text=t.util.createClass(t.Object,{_dimensionAffectingProps:{fontSize:!0,fontWeight:!0,fontFamily:!0,fontStyle:!0,lineHeight:!0,stroke:!0,strokeWidth:!0,text:!0,textAlign:!0},_reNewline:/\r?\n/,type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",textDecoration:"",textAlign:"left",fontStyle:"",lineHeight:1.16,textBackgroundColor:"",stateProperties:o,stroke:null,shadow:null,_fontSizeFraction:.25,_fontSizeMult:1.13,initialize:function(e,t){t=t||{},this.text=e,this.__skipDimension=!0,this.setOptions(t),this.__skipDimension=!1,this._initDimensions()},_initDimensions:function(e){if(this.__skipDimension)return;e||(e=t.util.createCanvasElement().getContext("2d"),this._setTextStyles(e)),this._textLines=this.text.split(this._reNewline),this._clearCache();var n=this.textAlign;this.textAlign="left",this.width=this._getTextWidth(e),this.textAlign=n,this.height=this._getTextHeight(e)},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_render:function(e){this.clipTo&&t.util.clipContext(this,e),this._renderTextBackground(e),this._renderText(e),this._renderTextDecoration(e),this.clipTo&&e.restore()},_renderText:function(e){e.save(),this._translateForTextAlign(e),this._setOpacity(e),this._setShadow(e),this._setupCompositeOperation(e),this._renderTextFill(e),this._renderTextStroke(e),this._restoreCompositeOperation(e),this._removeShadow(e),e.restore()},_translateForTextAlign:function(e){this.textAlign!=="left"&&this.textAlign!=="justify"&&e.translate(this.textAlign==="center"?this.width/2:this.width,0)},_setTextStyles:function(e){e.textBaseline="alphabetic",this.skipTextAlign||(e.textAlign=this.textAlign),e.font=this._getFontDeclaration()},_getTextHeight:function(){return this._textLines.length*this._getHeightOfLine()},_getTextWidth:function(e){var t=this._getLineWidth(e,0);for(var n=1,r=this._textLines.length;n<r;n++){var i=this._getLineWidth(e,n);i>t&&(t=i)}return t},_renderChars:function(e,t,n,r,i){t[e](n,r,i)},_renderTextLine:function(e,t,n,r,i,s){i-=this.fontSize*this._fontSizeFraction;if(this.textAlign!=="justify"){this._renderChars(e,t,n,r,i,s);return}var o=this._getLineWidth(t,s),u=this.width;if(u>=o){var a=n.split(/\s+/),f=this._getWidthOfWords(t,n,s),l=u-f,c=a.length-1,h=l/c,p=0;for(var d=0,v=a.length;d<v;d++)this._renderChars(e,t,a[d],r+p,i,s),p+=t.measureText(a[d]).width+h}else this._renderChars(e,t,n,r,i,s)},_getWidthOfWords:function(e,t){return e.measureText(t.replace(/\s+/g,"")).width},_getLeftOffset:function(){return-this.width/2},_getTopOffset:function(){return-this.height/2},_renderTextFill:function(e){if(!this.fill&&!this._skipFillStrokeCheck)return;var t=0;for(var n=0,r=this._textLines.length;n<r;n++){var i=this._getHeightOfLine(e,n),s=i/this.lineHeight;this._renderTextLine("fillText",e,this._textLines[n],this._getLeftOffset(),this._getTopOffset()+t+s,n),t+=i}this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e)},_renderTextStroke:function(e){if((!this.stroke||this.strokeWidth===0)&&!this._skipFillStrokeCheck)return;var t=0;e.save(),this.strokeDashArray&&(1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),s&&e.setLineDash(this.strokeDashArray)),e.beginPath();for(var n=0,r=this._textLines.length;n<r;n++){var i=this._getHeightOfLine(e,n),o=i/this.lineHeight;this._renderTextLine("strokeText",e,this._textLines[n],this._getLeftOffset(),this._getTopOffset()+t+o,n),t+=i}e.closePath(),e.restore()},_getHeightOfLine:function(){return this.fontSize*this._fontSizeMult*this.lineHeight},_renderTextBackground:function(e){this._renderTextBoxBackground(e),this._renderTextLinesBackground(e)},_renderTextBoxBackground:function(e){if(!this.backgroundColor)return;e.save(),e.fillStyle=this.backgroundColor,e.fillRect(this._getLeftOffset(),this._getTopOffset(),this.width,this.height),e.restore()},_renderTextLinesBackground:function(e){var t=0,n=this._getHeightOfLine();if(!this.textBackgroundColor)return;e.save(),e.fillStyle=this.textBackgroundColor;for(var r=0,i=this._textLines.length;r<i;r++){if(this._textLines[r]!==""){var s=this._getLineWidth(e,r),o=this._getLineLeftOffset(s);e.fillRect(this._getLeftOffset()+o,this._getTopOffset()+t,s,this.fontSize*this._fontSizeMult)}t+=n}e.restore()},_getLineLeftOffset:function(e){return this.textAlign==="center"?(this.width-e)/2:this.textAlign==="right"?this.width-e:0},_clearCache:function(){this.__lineWidths=[],this.__lineHeights=[],this.__lineOffsets=[]},_shouldClearCache:function(){var e=!1;for(var t in this._dimensionAffectingProps)this["__"+t]!==this[t]&&(this["__"+t]=this[t],e=!0);return e},_getLineWidth:function(e,t){return this.__lineWidths[t]?this.__lineWidths[t]:(this.__lineWidths[t]=e.measureText(this._textLines[t]).width,this.__lineWidths[t])},_renderTextDecoration:function(e){function i(r){var i,s=0,o,u,a;for(i=0,o=n._textLines.length;i<o;i++){var f=n._getLineWidth(e,i),l=n._getLineLeftOffset(f),c=n._getHeightOfLine(e,i);for(u=0,a=r.length;u<a;u++)e.fillRect(n._getLeftOffset()+l,s+(n._fontSizeMult-1+r[u])*n.fontSize-t,f,n.fontSize/15);s+=c}}if(!this.textDecoration)return;var t=this.height/2,n=this,r=[];this.textDecoration.indexOf("underline")>-1&&r.push(.85),this.textDecoration.indexOf("line-through")>-1&&r.push(.43),this.textDecoration.indexOf("overline")>-1&&r.push(-0.12),r.length>0&&i(r)},_getFontDeclaration:function(){return[t.isLikelyNode?this.fontWeight:this.fontStyle,t.isLikelyNode?this.fontStyle:this.fontWeight,this.fontSize+"px",t.isLikelyNode?'"'+this.fontFamily+'"':this.fontFamily].join(" ")},render:function(e,t){if(!this.visible)return;e.save(),this._setTextStyles(e),this._shouldClearCache()&&this._initDimensions(e),t||this.transform(e),this._setStrokeStyles(e),this._setFillStyles(e),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this.group&&this.group.type==="path-group"&&e.translate(this.left,this.top),this._render(e),e.restore()},toObject:function(e){var t=n(this.callSuper("toObject",e),{text:this.text,fontSize:this.fontSize,fontWeight:this.fontWeight,fontFamily:this.fontFamily,fontStyle:this.fontStyle,lineHeight:this.lineHeight,textDecoration:this.textDecoration,textAlign:this.textAlign,textBackgroundColor:this.textBackgroundColor});return this.includeDefaultValues||this._removeDefaultValues(t),t},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=this._getSVGLeftTopOffsets(this.ctx),r=this._getSVGTextAndBg(n.textTop,n.textLeft);return this._wrapSVGTextAndBg(t,r),e?e(t.join("")):t.join("")},_getSVGLeftTopOffsets:function(e){var t=this._getHeightOfLine(e,0),n=-this.width/2,r=0;return{textLeft:n+(this.group&&this.group.type==="path-group"?this.left:0),textTop:r+(this.group&&this.group.type==="path-group"?-this.top:0),lineTop:t}},_wrapSVGTextAndBg:function(e,t){e.push('	<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n',t.textBgRects.join(""),"		<text ",this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",this.textDecoration?'text-decoration="'+this.textDecoration+'" ':"",'style="',this.getSvgStyles(),'" >',t.textSpans.join(""),"</text>\n","	</g>\n")},_getSVGTextAndBg:function(e,t){var n=[],r=[],i=0;this._setSVGBg(r);for(var s=0,o=this._textLines.length;s<o;s++)this.textBackgroundColor&&this._setSVGTextLineBg(r,s,t,e,i),this._setSVGTextLineText(s,n,i,t,e,r),i+=this._getHeightOfLine(this.ctx,s);return{textSpans:n,textBgRects:r}},_setSVGTextLineText:function(e,n,r,s,o){var u=this.fontSize*(this._fontSizeMult-this._fontSizeFraction)-o+r-this.height/2;n.push('<tspan x="',i(s+this._getLineLeftOffset(this.__lineWidths[e]),4),'" ','y="',i(u,4),'" ',this._getFillAttributes(this.fill),">",t.util.string.escapeXml(this._textLines[e]),"</tspan>")},_setSVGTextLineBg:function(e,t,n,r,s){e.push("		<rect ",this._getFillAttributes(this.textBackgroundColor),' x="',i(n+this._getLineLeftOffset(this.__lineWidths[t]),4),'" y="',i(s-this.height/2,4),'" width="',i(this.__lineWidths[t],4),'" height="',i(this._getHeightOfLine(this.ctx,t)/this.lineHeight,4),'"></rect>\n')},_setSVGBg:function(e){this.backgroundColor&&e.push("		<rect ",this._getFillAttributes(this.backgroundColor),' x="',i(-this.width/2,4),'" y="',i(-this.height/2,4),'" width="',i(this.width,4),'" height="',i(this.height,4),'"></rect>\n')},_getFillAttributes:function(e){var n=e&&typeof e=="string"?new t.Color(e):"";return!n||!n.getSource()||n.getAlpha()===1?'fill="'+e+'"':'opacity="'+n.getAlpha()+'" fill="'+n.setAlpha(1).toRgb()+'"'},_set:function(e,t){this.callSuper("_set",e,t),e in this._dimensionAffectingProps&&(this._initDimensions(),this.setCoords())},complexity:function(){return 1}}),t.Text.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")),t.Text.DEFAULT_SVG_FONT_SIZE=16,t.Text.fromElement=function(e,n){if(!e)return null;var r=t.parseAttributes(e,t.Text.ATTRIBUTE_NAMES);n=t.util.object.extend(n?t.util.object.clone(n):{},r),n.top=n.top||0,n.left=n.left||0,"dx"in r&&(n.left+=r.dx),"dy"in r&&(n.top+=r.dy),"fontSize"in n||(n.fontSize=t.Text.DEFAULT_SVG_FONT_SIZE),n.originX||(n.originX="left");var i=e.textContent.replace(/^\s+|\s+$|\n+/g,"").replace(/\s+/g," "),s=new t.Text(i,n),o=0;return s.originX==="left"&&(o=s.getWidth()/2),s.originX==="right"&&(o=-s.getWidth()/2),s.set({left:s.getLeft()+o,top:s.getTop()-s.getHeight()/2+s.fontSize*(.18+s._fontSizeFraction)}),s},t.Text.fromObject=function(e){return new t.Text(e.text,r(e))},t.util.createAccessors(t.Text)})(typeof exports!="undefined"?exports:this);
/*!
 * VERSION: 0.2.0
 * DATE: 2016-10-20
 * GIT: https://github.com/shrekshrek/orienter
 * @author: Shrek.wang
 **/

(function (factory) {

    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports) {
            window.Orienter = factory(exports);
        });
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        window.Orienter = factory({});
    }

}(function (Orienter) {

    Orienter = function () {
        this.initialize.apply(this, arguments);
    };

    Orienter.prototype = {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: '',
        initialize: function (config) {
            var _config = config || {};

            this.onOrient = _config.onOrient || function(){};
            this.onChange = _config.onChange || function(){};

            this._orient = this._orient.bind(this);
            this._change = this._change.bind(this);

            this.lon = 0;
            this.lat = 0;
            this.direction = window.orientation || 0;

            switch (this.direction) {
                case 0:
                    this.fix = 0;
                    break;
                case 90:
                    this.fix = -270;
                    break;
                case -90:
                    this.fix = -90;
                    break;
            }

            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                this.os = 'ios';
            } else {
                this.os = (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux')) ? 'android' : '';
            }
        },

        init: function () {
            window.addEventListener('deviceorientation', this._orient, false);
            window.addEventListener('orientationchange', this._change, false);
        },

        destroy: function () {
            window.removeEventListener('deviceorientation', this._orient, false);
            window.removeEventListener('orientationchange', this._change, false);
        },

        _change: function (event) {
            this.direction = window.orientation;

            this.onChange(this.direction);
        },

        changeDirectionTo: function (n) {
            this.direction = n;
        },

        _orient: function (event) {
            switch (this.os) {
                case 'ios':
                    switch (this.direction) {
                        case 0:
                            this.lon = event.alpha + event.gamma;
                            if (event.beta > 0) this.lat = event.beta - 90;
                            break;
                        case 90:
                            if (event.gamma < 0) {
                                this.lon = event.alpha - 90;
                            } else {
                                this.lon = event.alpha - 270;
                            }
                            if (event.gamma > 0) {
                                this.lat = 90 - event.gamma;
                            } else {
                                this.lat = -90 - event.gamma;
                            }
                            break;
                        case -90:
                            if (event.gamma < 0) {
                                this.lon = event.alpha - 90;
                            } else {
                                this.lon = event.alpha - 270;
                            }
                            if (event.gamma < 0) {
                                this.lat = 90 + event.gamma;
                            } else {
                                this.lat = -90 + event.gamma;
                            }
                            break;
                    }
                    break;
                case 'android':
                    switch (this.direction) {
                        case 0:
                            this.lon = event.alpha + event.gamma + 30;
                            if (event.gamma > 90) {
                                this.lat = 90 - event.beta;
                            } else {
                                this.lat = event.beta - 90;
                            }
                            break;
                        case 90:
                            this.lon = event.alpha - 230;
                            if (event.gamma > 0) {
                                this.lat = 270 - event.gamma;
                            } else {
                                this.lat = -90 - event.gamma;
                            }
                            break;
                        case -90:
                            this.lon = event.alpha - 180;
                            this.lat = -90 + event.gamma;
                            break;
                    }
                    break;
            }

            this.lon += this.fix;
            this.lon %= 360;
            if (this.lon < 0) this.lon += 360;

            this.lon = Math.round(this.lon);
            this.lat = Math.round(this.lat);

            this.onOrient({
                a: Math.round(event.alpha),
                b: Math.round(event.beta),
                g: Math.round(event.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            });
        }

    };

    return Orienter;
}));
(function(doc, win) {
    var docEl = doc.documentElement,
    isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
    dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
    scale = 1 / dpr,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    //fix iphone plus bug
    if(dpr == 3){
        scale=1;
        dpr = 2;
    }
    docEl.dataset.dpr = dpr;
    //var metaEl = doc.createElement('meta');
    //metaEl.name = 'viewport';
    //metaEl.content = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale;
    //docEl.firstElementChild.appendChild(metaEl);
    var recalc = function () {
        var width = docEl.clientWidth,
			height = docEl.clientHeight;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
				if(width/height>750/1207){
					docEl.style.fontSize = 100 * (height / 1207) + 'px';

				}else{
					docEl.style.fontSize = 100 * (width / 750) + 'px';
				}
      };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		gotoPin:function(num){
			$('.wrapper .pin').removeClass('current');
			$('.wrapper .pin').eq(num).addClass('current');
		},
		getParameterByName:function(name){
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
			var results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		setParameterByName:function(name,value){
			var query = location.search.substring(1,location.search.length);
			result = query;
			var queryArr = query.split('&');
			//update arr
			var newQuery = '';
			for(var i=0;i<queryArr.length;i++){
				if(queryArr[i].indexOf(name)>-1){
					queryArr[i] = name + '=' + value;
				}
				newQuery = newQuery+queryArr[i]+'&';
			};

			return '?'+newQuery;
		},
		msgBox:{
			add:function(msg,long){
				if(long){
					$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
				}else{
					$('body').append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+msg+'</div></div>');
				}
			},
			remove:function(){
				$('.ajaxpop').remove();
			}
		},
		errorMsg : {
			add:function(ele,msg){

				for(var i in ele.childNodes){
					if(ele.childNodes[i].className == 'error'){
						ele.childNodes[i].textContent = msg;
						return true;
					}else{
						if(i==ele.childNodes.length-1){
							var newDiv = document.createElement('div');
							newDiv.textContent = msg;
							newDiv.className = 'error';
							ele.appendChild(newDiv);
						}
					}
				}
			},
			remove:function(ele){

				for(var i in ele.childNodes){
					if(ele.childNodes[i].className == 'error'){
						ele.childNodes[i].parentNode.removeChild(ele.childNodes[i]);
						return;
					}
				}
			}
		},
		alertBox:{
			add:function(msg){
				$('body').append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+msg+'</div><div class="btn-alert-ok">关闭</div></div></div>');
			},
			remove:function(){
				$('.alertpop').remove();
			}
		},
		overscroll: function(el){
			el.addEventListener('touchstart', function() {
				var top = el.scrollTop
					, totalScroll = el.scrollHeight
					, currentScroll = top + el.offsetHeight
				//If we're at the top or the bottom of the containers
				//scroll, push up or down one pixel.
				//
				//this prevents the scroll from "passing through" to
				//the body.
				console.log(currentScroll);
				if(top === 0) {
					el.scrollTop = 1
				} else if(currentScroll === totalScroll) {
					el.scrollTop = top - 1
				}
			})
			el.addEventListener('touchmove', function(evt) {
				//if the content is actually scrollable, i.e. the content is long enough
				//that scrolling can occur
				if(el.offsetHeight < el.scrollHeight)
					evt._isScroller = true
			})
		},


	};


	this.Common = Common;

}).call(this);

$(document).ready(function(){

//	close alert pop
	$('body').on('touchstart','.btn-alert-ok',function(){
		$(this).parent().parent('.alertpop').remove();
	});

	//Common.overscroll(document.querySelector('.wrapper'));




});




/*All the api collection*/
Api = {

    isLogin:function(callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/islogin',
            type:'POST',
            dataType:'json',
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
                //status=1 有库存
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //})


    },
    //
    //answer answer1-5
    //status =1  msg = 分享id
    answer:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/answer',
            type:'POST',
            data:obj,
            dataType:'json',
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
                //status=1 有库存
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //})


    },

    //rank list
    rankList:function(callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/list',
            type:'POST',
            dataType:'json',
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //});


    },
    //submit form
    // name  info
    submitInfo:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/submit',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //});


    },
    // id
    getlistbyid:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/getlistbyid',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    avatar:'/src/images/qr-1.png',
        //    score:'100'
        //});


    },
///api/getlistbyid


};
//;(function(){
//
//    this.weixinshare = weixinshare;
//}).call(this);
function weixinshare(obj){
    $.ajax({
        url:'/jssdk?url='+encodeURIComponent(location.href.split('#')[0]),
        type:'GET',
        dataType:'json',
        success:function(data){
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function(){

                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                wx.onMenuShareAppMessage({
                    title: obj.title1,
                    desc: obj.des,
                    link: obj.link,
                    imgUrl: obj.img,
                    type: '',
                    dataUrl: '',
                    success: function () {
                        _hmt.push(['_trackEvent', 'buttons', 'click', 'onMenuShareAppMessage']);
                        callback();

                    },
                    cancel: function () {

                    }
                });
                wx.onMenuShareTimeline({
                    title: obj.title1,
                    link: obj.link,
                    imgUrl: obj.img,
                    success: function () {
                        _hmt.push(['_trackEvent', 'buttons', 'click', 'onMenuShareTimeline']);
                        callback();
                    },
                    cancel: function () {

                    }
                });
            });




        }
    });
};

$(document).ready(function(){
    console.log(1);
    weixinshare({
        title1: '亮出身份，用分数标榜态度，LYNK & CO邀你来做CEO!',
        des: '用实力让情怀落地，用分数为自己说话',
        link: window.location.href,
        img: window.location.origin+'/src/images/share.jpg'
    },function(){

    });

});
/*For join page
 * Inclue two function, one is load new qr for each person, another is show rule popup
 * */
;(function(){
    var controller = function(){
        //each answer has relative score
        this.questionScore = {
            q1:16,
            q2:[20,20,20],
            q3:12, //用秒来计时，时间不一样，对应的分值也不同,默认分值是12
            q4:[16,16,20],
            q5:[16,20,16]
        };
        //default deleted option
        this.selectedOption = {
            q1:0,
            q1Text:'test',
            q2:0,
            q3:0,
            q4:0,
            q5:0
        };

        var ArrLength=48;
        this.loadingImg = [];
        var newstring1 = '';
        for(var i=1;i<ArrLength;i=i+2){
            if(i<10){
                newstring1='/src/images/'+'loading/loading_0000'+i+'.jpg';
            }else if(i>9 && i<100){
                newstring1='/src/images/'+'loading/loading_000'+i+'.jpg';
            }else{
                newstring1='/src/images/'+'loading/loading_00'+i+'.jpg';
            }
            this.loadingImg.push(newstring1);
        };

        //init the canvas
        this.canvas = new fabric.Canvas('c');
        this.canvas.setWidth($(window).width()*607/750);
        this.canvas.setHeight($(window).width()*859/750);

    };
    //init
    controller.prototype.init = function(){
        var self = this;

        var baseurl = ''+'/src/images/';
        var imagesArray = [
            baseurl + 'logo.png',
            baseurl + 'bg.jpg',
            baseurl + 'p1-t1.png',
            baseurl + 'p2-1.jpg',
            baseurl + 'question-1.jpg',
            baseurl + 'q2-a.png',
            baseurl + 'q2-b.png',
            baseurl + 'q2-c.png',
            baseurl + 'q2-content.png',
            baseurl + 'question-3.jpg',
            baseurl + 'upload-bg.jpg',
            baseurl + 'q4-a.png',
            baseurl + 'q4-b.png',
            baseurl + 'q4-c.png',
            baseurl + 'q4-content.png',
            baseurl + 'q5-a.png',
            baseurl + 'q5-b.png',
            baseurl + 'q5-c.png',
            baseurl + 'q5-content.png',
            baseurl + 'btn-upload.png',
            baseurl + 'image-overlay1.png',
            baseurl + 'image-overlay2.png',
            baseurl + 'image-overlay3.png',
            baseurl + 'image-overlay4.png',
            baseurl + 'bg-3.jpg',
            baseurl + 'final-share.png',
            baseurl + 'tips-upload.png',
        ];
        imagesArray = imagesArray.concat(self.loadingImg);
        var i = 0,j=0;
        new preLoader(imagesArray, {
            onProgress: function(){
                i++;
                //var progress = parseInt(i/imagesArray.length*100);
                //console.log(progress);
                //$('.preload .v-content').html(''+progress+'%');
                //console.log(i+'i');
            },
            onComplete: function(){
                $('.preload').remove();
                $('.wrapper').addClass('fadein');
                self.doGenerateAni();
                
                //Common.gotoPin(7);

                //bind events
                self.bindEvent();

                //set all img element width
                for(var k=0;k<document.getElementsByTagName('img').length;k++){
                    document.getElementsByTagName('img')[k].style.width = document.getElementsByTagName('img')[k].naturalWidth / 100 + 'rem';
                    document.getElementsByTagName('img')[k].style.height = document.getElementsByTagName('img')[k].naturalHeight / 100 + 'rem';
                };
            }
        });


    };

    //bind Events
    controller.prototype.bindEvent = function(){
        var self = this;

        //from landing page to next page
        $('#pin-landing .btn-gonext').on('touchstart',function(){
            $('.logo').addClass('hide');
            Common.gotoPin(1);

            var goQuePage = setTimeout(function(){
                Common.gotoPin(2);
                $('.logo').removeClass('hide');
            },2000);
        });

        //select question 1
        $('#pin-question-1 .q-lists .item').on('touchstart',function(){
            var curIndex = $(this).index();
            //clear text content
            $('#self-evaluation').val('');
            $(this).addClass('active').siblings().removeClass('active');
            self.selectedOption.q1 = curIndex;
        });

        $('#pin-question-1 .btn-next').on('click',function(){
            if($('#pin-question-1 .q-lists .active').length || $('#self-evaluation').val()){
                Common.gotoPin(3);
                self.selectedOption.q1 = ($('#pin-question-1 .q-lists .active').index()>-1)?$('#pin-question-1 .q-lists .active').index():$('#self-evaluation').val().toString();
                self.questionScore.q1 = ($('#pin-question-1 .q-lists .active').index()>-1)?16:20;
            }else{
                Common.alertBox.add('请选择一个标签或输入自己的答案');
            }
        });

        //focus input, lose list active
        $('#self-evaluation').on('focus',function(){
            $('#pin-question-1 .q-lists .active').removeClass('active');
        });

        //select question 2
        $('#pin-question-2 .q-lists .btn-selected-overlay').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q2 = curIndex;
            Common.gotoPin(4);
            //count down
            self.countDown();
        });

        //select question 3,倒计时中
        $('#pin-question-3 .btn-time').on('click',function(){
            //记录倒计时的时间和对应的分值
            //15-13==>20
            //12-10==>18
            //9-7==>16
            //6-4==>14
            //3-0==>12

            var curTime = parseInt($('#countdown').html());
            if(curTime<15 && curTime >= 13){
                self.questionScore.q3 = 12+8;
            }else if(curTime<13 && curTime >= 10){
                self.questionScore.q3 = 12+6;
            }else if(curTime<10 && curTime >= 7){
                self.questionScore.q3 = 12+4;
            }else if(curTime<7 && curTime >= 4){
                self.questionScore.q3 = 12+2;
            }else{
                self.questionScore.q3 = 12;
            }
            Common.gotoPin(5);
        });

        //select question 4
        $('#pin-question-4 .q-lists .btn-selected-overlay').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q4 = curIndex;
            Common.gotoPin(6);
        });

        //select question 5
        $('#pin-question-5 .q-lists .btn-selected-overlay').on('click',function(){
            var curIndex = $(this).parent().index();
            self.selectedOption.q5 = curIndex;
            Common.gotoPin(7);
        });


    //    shake the device
        var o = new Orienter();
        o.onOrient = function (obj) {
            if($('.pin-question.current .canshake').length){
                var leftWith = $('.pin.current .q-lists .item-a').width();
                var rightWith = -$('.pin.current .q-lists .item-b').width();
                var bottomHeight = $('.pin.current .q-lists .item-c').height();
                if(obj.g<-30){
                    $('.pin-question.current .question-wrap').css('left',leftWith);

                }else if(obj.g>30){
                    $('.pin-question.current .question-wrap').css('left',rightWith);
                }else{
                    $('.pin-question.current .question-wrap').css('left','0%');
                }

                if(obj.b>60){
                    $('.pin-question.current .question-wrap').css('bottom',bottomHeight);
                }else{
                    $('.pin-question.current .question-wrap').css('bottom','0');
                }
            }else{
                console.log('can not shake');
            }
            //console.log(obj);
        };
        o.init();


        //$('.btn-upload').on('touchstart', function(e){
        //
        //});

    //    upload img
        var enableGenerate = false;
        //input file change
        $('#capture').on('change', function(e){
            $('#capture').addClass('hide');
            $('.tips').addClass('hide');
            $('.buttons').removeClass('hide');
            var canvaswidth = $('.upload-wrap').width();
            self.uploadPhoto(e.target,canvaswidth);
            $('.btn-upload').addClass('hide');
            enableGenerate = true;

        });
        //input file change
        $('#capture2').on('change', function(e){
            //clear canvas first
            var canvaswidth = $('.upload-wrap').width();
            self.canvas.clear();
            self.uploadPhoto(e.target,canvaswidth);
            $('.btn-upload').addClass('hide');
            enableGenerate = true;
        });

        //btn-again == capture2
        //btn-ok
        $('#pin-upload .btn-ok').on('click',function(){
            //render new picture
            if(!enableGenerate){
                Common.alertBox.add('请上传图片');
                return;
            }

            var totalScore = self.questionScore.q1+self.questionScore.q2[self.selectedOption.q2]+self.questionScore.q3+self.questionScore.q4[self.selectedOption.q4]+self.questionScore.q5[self.selectedOption.q5];
            //console.log(totalScore);
            var imgSrc = '/src/images/image-overlay1.png';
            if(totalScore>95 && totalScore<101){
                // 颜值爆表
                imgSrc = '/src/images/image-overlay1.png';
            }else if(totalScore>90 && totalScore<96){
                //  差一步
                imgSrc = '/src/images/image-overlay2.png';
            }else if(totalScore>85 && totalScore<91){
                // 就知道你是潜力股
                imgSrc = '/src/images/image-overlay4.png';
            }else{
                // 这一定不是你的 <85
                imgSrc = '/src/images/image-overlay3.png';
            }
            //console.log(imgSrc);
            fabric.Image.fromURL(imgSrc,function(imgobj){
                var radio = $(window).width()/750;
                imgobj.scale(radio);
                imgobj.set({
                    selectable:false,
                    hasControls:false,
                    hasBorders:false
                });
                //console.log(self.canvas);
                self.canvas.add(imgobj);
                //console.log(self.questionScore);
                //console.log(self.selectedOption);
                var text = new fabric.Text(totalScore.toString(), {
                    //font:'#fe335d',
                    fontFamily:'Heiti',
                    fontSize: parseInt(160*$(window).width()/750),
                    //fontWeight: 'bold',
                    //fontColor:'#fe335d',
                    color:'#fe335d',
                    left: (totalScore==100)?parseInt(310*$(window).width()/750):parseInt(390*$(window).width()/750),
                    top: parseInt(480*$(window).width()/750),
                    stroke: '#fe335d',
                    strokeWidth: 3,
                    fill: '#fe335d',
                });
                self.canvas.add(text);



                var renderPic = self.canvas.toDataURL({
                    format: 'png',
                    quality: 1
                });
                //
                $('.upload-wrap>img').attr('src',renderPic);
                $('.buttons').addClass('shownext');
                $('.canvas-container').addClass('hide');

                //Api
                Api.answer({
                    answer1:self.selectedOption.q1,
                    answer2:self.selectedOption.q2,
                    answer3:self.questionScore.q3,
                    answer4:self.selectedOption.q4,
                    answer5:self.selectedOption.q5,
                    total:totalScore,
                    image:renderPic
                },function(data){
                    //console.log(data);
                    if(data.status==1){
                        //override share link
                        weixinshare({
                            title1: '看我CEO测试高达'+totalScore+'分，实力碾压你的双商！',
                            des: '用实力让情怀落地，用分数为自己说话',
                            link: window.location.origin+'/rank?id='+data.msg,
                            img: window.location.origin+'/src/images/share.jpg'
                        },function(){

                        });
                    }else{
                        Common.alertBox.add(data.msg);
                    }
                });

            });

        });

    //    btn-share
        $('.btn-share').on('touchstart',function(){
            $('.share-pop').addClass('show');
        });
        //share-pop
        $('.share-pop').on('touchstart',function(){
            $('.share-pop').removeClass('show');
        });
        //排行榜
        $('.btn-scorelists').on('touchstart',function(){
            Common.gotoPin(8);
            Api.isLogin(function(data){
                if(data.info){
                    $('#form-contact').addClass('hasinfo');
                }
            });
        //    get ranklist
            Api.rankList(function(data){
                if(data.status==1){
                    console.log(data);
                    var listHtml = '';
                    for(var z=0;z<data.list.length;z++){
                        listHtml = listHtml+'<li class="item">'+
                            '<span class="num">'+(z+1)+'/</span>'+
                            '<span class="name">'+data.list[z].nickname+'</span>'+
                            '<span class="score">'+data.list[z].total+'</span>'+
                            '</li>';
                    }
                    $('.result-lists').html(listHtml);
                }else{
                    Common.alertBox.add(data.msg);
                }
            });
        });

    //    submit form
        $('#form-contact .btn-submit').on('touchstart', function(){
            if($('#input-name').val() && $('#input-mobile').val()){
                Api.submitInfo({
                    name:$('#input-name').val(),
                    info:$('#input-mobile').val()
                },function(data){
                    if(data.status==1){
                        //Common.alertBox.add('提交成功');
                        $('#form-contact').addClass('hasinfo');

                    }else{
                        Common.alertBox.add(data.msg);
                    }
                });
            }else{
                Common.alertBox.add('请完善表单');
            }
        });


    //    close the ranklist page
        $('#pin-result-lists .btn-close').on('touchstart',function(){
            Common.gotoPin(7);
        });

    //    play again
        $('#pin-upload .btn-playagain').on('touchstart',function(){
            self.playAgain();
        });


    };

    //play again, reset all step
    controller.prototype.playAgain = function(){
        window.location.reload();
    };

    //count down
    //millisecond
    controller.prototype.countDown = function(){
        var millisecond = 15000;
        var p = document.getElementById("countdown");
        var set = setInterval(function() {
            //time--;
            millisecond = millisecond - 100;
            var seconds = (millisecond / 1000).toFixed(2) + 's';
            p.innerHTML = seconds;
            if(millisecond < 100) {
                p.innerHTML = "0.00s";
                clearInterval(set);
            }
        }, 100);
    };

    controller.prototype.doGenerateAni = function () {
        var self = this;
        var i= 0,j=0;
        //background-size
        var doGenerateAni;
        var increase = true,showWord = false;
        var imgSrc='';
        var doAni = new reqAnimate($('.bg img'),{
            fps: 6,
            totalFrames: 24,
            time: 1,
            processAnimation: function(){
                //console.log(self.loadingImg[j]);
                //$('.preload').css('background-image','url("'+self.loadingImg[j]+'")');
                $('.bg img').attr('src',self.loadingImg[j]);
                if(increase){
                    j++;
                    if(j>self.loadingImg.length-2){
                        increase=false;
                    }
                }else{
                    j--;
                    if(j<3){
                        increase=true;
                    }
                }
                //console.log(j);

            },
            doneAnimation: function(){

                //show box and letter
                //callback();
                //$('.bg').remove();
                $('.container').addClass('fadein');
                $('.bg img').attr('src',self.loadingImg[0]);
                Common.gotoPin(0);
            }
        });
        doAni.start();


    };

    controller.prototype.uploadPhoto = function(ele,canvaswidth){
        var self = this;

        lrz(ele.files[0],{width:canvaswidth*2},{quality:1})
            .then(function (rst) {
                // 处理成功会执行
                //step=1;
                fabric.Image.fromURL(rst.base64,function(imgobj){
                    imgobj.scale(0.5);
                    imgobj.set({
                        selectable:true,
                        hasControls:false,
                        hasBorders:false
                    });
                    console.log(self.canvas);
                    self.canvas.add(imgobj);

                });
                $('.btn-camera').addClass('hide');
            })
            .catch(function (err) {
                // 处理失败会执行
            })
            .always(function () {
                // 不管是成功失败，都会执行
            });

    },

    $(document).ready(function(){
//    show form
        var exchange = new controller();
        exchange.init();

    });

})();



