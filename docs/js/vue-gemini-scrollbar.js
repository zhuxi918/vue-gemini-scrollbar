!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,i){"use strict";var n=i(1),r=i.n(n),l=i(5),s=(i.n(l),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}),o=void 0;t.a={name:"GeminiScrollbar",props:{autoCreate:{type:Boolean,default:!0},autoshow:{type:Boolean,default:!1},createElements:{type:Boolean,default:!1},forceGemini:{type:Boolean,default:!1},minThumbSize:{type:Number,default:20}},mounted:function(){var e=this;o=new r.a(s({element:this.$refs.geminiScrollbar,createElements:!1,onResize:function(){e.$emit("resize")}},this.$props)),this.autoCreate&&o.create(),this.$emit("create",o)},updated:function(){o.update()},beforeDestroy:function(){o&&o.destroy(),o=null}}},function(e,t,i){/**
 * gemini-scrollbar
 * @version 1.5.3
 * @link http://noeldelgado.github.io/gemini-scrollbar/
 * @license MIT
 */
!function(){function t(){var e,t=document.createElement("div");return t.style.position="absolute",t.style.top="-9999px",t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}function i(e,t){if(e.classList)return t.forEach(function(t){e.classList.add(t)});e.className+=" "+t.join(" ")}function n(e,t){if(e.classList)return t.forEach(function(t){e.classList.remove(t)});e.className=e.className.replace(new RegExp("(^|\\b)"+t.join("|")+"(\\b|$)","gi")," ")}function r(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}function l(e){this.element=null,this.autoshow=!1,this.createElements=!0,this.forceGemini=!1,this.onResize=null,this.minThumbSize=20,Object.keys(e||{}).forEach(function(t){this[t]=e[t]},this),s=t(),o=0===s&&!1===this.forceGemini,this._cache={events:{}},this._created=!1,this._cursorDown=!1,this._prevPageX=0,this._prevPageY=0,this._document=null,this._viewElement=this.element,this._scrollbarVerticalElement=null,this._thumbVerticalElement=null,this._scrollbarHorizontalElement=null,this._scrollbarHorizontalElement=null}var s,o,a;a={element:"gm-scrollbar-container",verticalScrollbar:"gm-scrollbar -vertical",horizontalScrollbar:"gm-scrollbar -horizontal",thumb:"thumb",view:"gm-scroll-view",autoshow:"gm-autoshow",disable:"gm-scrollbar-disable-selection",prevented:"gm-prevented",resizeTrigger:"gm-resize-trigger"},l.prototype.create=function(){if(o){if(i(this.element,[a.prevented]),this.onResize){if(!0===this.createElements){for(this._viewElement=document.createElement("div");this.element.childNodes.length>0;)this._viewElement.appendChild(this.element.childNodes[0]);this.element.appendChild(this._viewElement)}else this._viewElement=this.element.querySelector("."+a.view);i(this.element,[a.element]),i(this._viewElement,[a.view]),this._createResizeTrigger()}return this}if(!0===this._created)return console.warn("calling on a already-created object"),this;if(this.autoshow&&i(this.element,[a.autoshow]),this._document=document,!0===this.createElements){for(this._viewElement=document.createElement("div"),this._scrollbarVerticalElement=document.createElement("div"),this._thumbVerticalElement=document.createElement("div"),this._scrollbarHorizontalElement=document.createElement("div"),this._thumbHorizontalElement=document.createElement("div");this.element.childNodes.length>0;)this._viewElement.appendChild(this.element.childNodes[0]);this._scrollbarVerticalElement.appendChild(this._thumbVerticalElement),this._scrollbarHorizontalElement.appendChild(this._thumbHorizontalElement),this.element.appendChild(this._scrollbarVerticalElement),this.element.appendChild(this._scrollbarHorizontalElement),this.element.appendChild(this._viewElement)}else this._viewElement=this.element.querySelector("."+a.view),this._scrollbarVerticalElement=this.element.querySelector("."+a.verticalScrollbar.split(" ").join(".")),this._thumbVerticalElement=this._scrollbarVerticalElement.querySelector("."+a.thumb),this._scrollbarHorizontalElement=this.element.querySelector("."+a.horizontalScrollbar.split(" ").join(".")),this._thumbHorizontalElement=this._scrollbarHorizontalElement.querySelector("."+a.thumb);return i(this.element,[a.element]),i(this._viewElement,[a.view]),i(this._scrollbarVerticalElement,a.verticalScrollbar.split(/\s/)),i(this._scrollbarHorizontalElement,a.horizontalScrollbar.split(/\s/)),i(this._thumbVerticalElement,[a.thumb]),i(this._thumbHorizontalElement,[a.thumb]),this._scrollbarVerticalElement.style.display="",this._scrollbarHorizontalElement.style.display="",this._createResizeTrigger(),this._created=!0,this._bindEvents().update()},l.prototype._createResizeTrigger=function(){var e=document.createElement("object");i(e,[a.resizeTrigger]),e.type="text/html",e.setAttribute("tabindex","-1");var t=this._resizeHandler.bind(this);e.onload=function(){e.contentDocument.defaultView.addEventListener("resize",t)},r()||(e.data="about:blank"),this.element.appendChild(e),r()&&(e.data="about:blank"),this._resizeTriggerElement=e},l.prototype.update=function(){return o?this:!1===this._created?(console.warn("calling on a not-yet-created object"),this):(this._viewElement.style.width=(this.element.offsetWidth+s).toString()+"px",this._viewElement.style.height=(this.element.offsetHeight+s).toString()+"px",this._naturalThumbSizeX=this._scrollbarHorizontalElement.clientWidth/this._viewElement.scrollWidth*this._scrollbarHorizontalElement.clientWidth,this._naturalThumbSizeY=this._scrollbarVerticalElement.clientHeight/this._viewElement.scrollHeight*this._scrollbarVerticalElement.clientHeight,this._scrollTopMax=this._viewElement.scrollHeight-this._viewElement.clientHeight,this._scrollLeftMax=this._viewElement.scrollWidth-this._viewElement.clientWidth,this._naturalThumbSizeY<this.minThumbSize?this._thumbVerticalElement.style.height=this.minThumbSize+"px":this._scrollTopMax?this._thumbVerticalElement.style.height=this._naturalThumbSizeY+"px":this._thumbVerticalElement.style.height="0px",this._naturalThumbSizeX<this.minThumbSize?this._thumbHorizontalElement.style.width=this.minThumbSize+"px":this._scrollLeftMax?this._thumbHorizontalElement.style.width=this._naturalThumbSizeX+"px":this._thumbHorizontalElement.style.width="0px",this._thumbSizeY=this._thumbVerticalElement.clientHeight,this._thumbSizeX=this._thumbHorizontalElement.clientWidth,this._trackTopMax=this._scrollbarVerticalElement.clientHeight-this._thumbSizeY,this._trackLeftMax=this._scrollbarHorizontalElement.clientWidth-this._thumbSizeX,this._scrollHandler(),this)},l.prototype.destroy=function(){if(this._resizeTriggerElement&&(this.element.removeChild(this._resizeTriggerElement),this._resizeTriggerElement=null),o)return this;if(!1===this._created)return console.warn("calling on a not-yet-created object"),this;if(this._unbinEvents(),n(this.element,[a.element,a.autoshow]),!0===this.createElements){for(this.element.removeChild(this._scrollbarVerticalElement),this.element.removeChild(this._scrollbarHorizontalElement);this._viewElement.childNodes.length>0;)this.element.appendChild(this._viewElement.childNodes[0]);this.element.removeChild(this._viewElement)}else this._viewElement.style.width="",this._viewElement.style.height="",this._scrollbarVerticalElement.style.display="none",this._scrollbarHorizontalElement.style.display="none";return this._created=!1,this._document=null,null},l.prototype.getViewElement=function(){return this._viewElement},l.prototype._bindEvents=function(){return this._cache.events.scrollHandler=this._scrollHandler.bind(this),this._cache.events.clickVerticalTrackHandler=this._clickVerticalTrackHandler.bind(this),this._cache.events.clickHorizontalTrackHandler=this._clickHorizontalTrackHandler.bind(this),this._cache.events.clickVerticalThumbHandler=this._clickVerticalThumbHandler.bind(this),this._cache.events.clickHorizontalThumbHandler=this._clickHorizontalThumbHandler.bind(this),this._cache.events.mouseUpDocumentHandler=this._mouseUpDocumentHandler.bind(this),this._cache.events.mouseMoveDocumentHandler=this._mouseMoveDocumentHandler.bind(this),this._viewElement.addEventListener("scroll",this._cache.events.scrollHandler),this._scrollbarVerticalElement.addEventListener("mousedown",this._cache.events.clickVerticalTrackHandler),this._scrollbarHorizontalElement.addEventListener("mousedown",this._cache.events.clickHorizontalTrackHandler),this._thumbVerticalElement.addEventListener("mousedown",this._cache.events.clickVerticalThumbHandler),this._thumbHorizontalElement.addEventListener("mousedown",this._cache.events.clickHorizontalThumbHandler),this._document.addEventListener("mouseup",this._cache.events.mouseUpDocumentHandler),this},l.prototype._unbinEvents=function(){return this._viewElement.removeEventListener("scroll",this._cache.events.scrollHandler),this._scrollbarVerticalElement.removeEventListener("mousedown",this._cache.events.clickVerticalTrackHandler),this._scrollbarHorizontalElement.removeEventListener("mousedown",this._cache.events.clickHorizontalTrackHandler),this._thumbVerticalElement.removeEventListener("mousedown",this._cache.events.clickVerticalThumbHandler),this._thumbHorizontalElement.removeEventListener("mousedown",this._cache.events.clickHorizontalThumbHandler),this._document.removeEventListener("mouseup",this._cache.events.mouseUpDocumentHandler),this._document.removeEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this},l.prototype._scrollHandler=function(){var e=this._viewElement.scrollLeft*this._trackLeftMax/this._scrollLeftMax||0,t=this._viewElement.scrollTop*this._trackTopMax/this._scrollTopMax||0;this._thumbHorizontalElement.style.msTransform="translateX("+e+"px)",this._thumbHorizontalElement.style.webkitTransform="translate3d("+e+"px, 0, 0)",this._thumbHorizontalElement.style.transform="translate3d("+e+"px, 0, 0)",this._thumbVerticalElement.style.msTransform="translateY("+t+"px)",this._thumbVerticalElement.style.webkitTransform="translate3d(0, "+t+"px, 0)",this._thumbVerticalElement.style.transform="translate3d(0, "+t+"px, 0)"},l.prototype._resizeHandler=function(){this.update(),this.onResize&&this.onResize()},l.prototype._clickVerticalTrackHandler=function(e){if(e.target===e.currentTarget){var t=e.offsetY-.5*this._naturalThumbSizeY,i=100*t/this._scrollbarVerticalElement.clientHeight;this._viewElement.scrollTop=i*this._viewElement.scrollHeight/100}},l.prototype._clickHorizontalTrackHandler=function(e){if(e.target===e.currentTarget){var t=e.offsetX-.5*this._naturalThumbSizeX,i=100*t/this._scrollbarHorizontalElement.clientWidth;this._viewElement.scrollLeft=i*this._viewElement.scrollWidth/100}},l.prototype._clickVerticalThumbHandler=function(e){this._startDrag(e),this._prevPageY=this._thumbSizeY-e.offsetY},l.prototype._clickHorizontalThumbHandler=function(e){this._startDrag(e),this._prevPageX=this._thumbSizeX-e.offsetX},l.prototype._startDrag=function(e){this._cursorDown=!0,i(document.body,[a.disable]),this._document.addEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this._document.onselectstart=function(){return!1}},l.prototype._mouseUpDocumentHandler=function(){this._cursorDown=!1,this._prevPageX=this._prevPageY=0,n(document.body,[a.disable]),this._document.removeEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this._document.onselectstart=null},l.prototype._mouseMoveDocumentHandler=function(e){if(!1!==this._cursorDown){var t,i;if(this._prevPageY)return t=e.clientY-this._scrollbarVerticalElement.getBoundingClientRect().top,i=this._thumbSizeY-this._prevPageY,void(this._viewElement.scrollTop=this._scrollTopMax*(t-i)/this._trackTopMax);this._prevPageX&&(t=e.clientX-this._scrollbarHorizontalElement.getBoundingClientRect().left,i=this._thumbSizeX-this._prevPageX,this._viewElement.scrollLeft=this._scrollLeftMax*(t-i)/this._trackLeftMax)}},e.exports=l}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),r=i(1),l=i.n(r),s=function(e){e.component(n.a.name,n.a),e.prototype.$geminiScrollbar=e.$geminiScrollbar=l.a};"undefined"!=typeof window&&window.Vue&&(s(window.Vue),window.Vue.prototype.$geminiScrollbar=window.Vue.$geminiScrollbar=l.a),t.default={install:s,GeminiScrollbar:n.a}},function(e,t,i){"use strict";var n=i(0),r=i(10),l=i(4),s=l(n.a,r.a,!1,null,null,null);t.a=s.exports},function(e,t){e.exports=function(e,t,i,n,r,l){var s,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId=r);var h;if(l?(h=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=h):n&&(h=n),h){var m=c.functional,u=m?c.render:c.beforeCreate;m?(c._injectStyles=h,c.render=function(e,t){return h.call(t),u(e,t)}):c.beforeCreate=u?[].concat(u,h):[h]}return{esModule:s,exports:o,options:c}}},function(e,t,i){var n=i(6);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(8)("17f27651",n,!0)},function(e,t,i){t=e.exports=i(7)(!1),t.push([e.i,".gm-scrollbar-disable-selection{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gm-prevented{-webkit-overflow-scrolling:touch}.gm-prevented>.gm-scrollbar{display:none}.gm-scrollbar-container{position:relative;overflow:hidden!important;width:100%;height:100%}.gm-scrollbar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:3px}.gm-scrollbar.-vertical{width:6px;top:2px}.gm-scrollbar.-horizontal{height:6px;left:2px}.gm-scrollbar .thumb{position:relative;display:block;width:0;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(0,0,0,.2);transform:translateZ(0)}.gm-scrollbar .thumb:active,.gm-scrollbar .thumb:hover{background-color:rgba(0,0,0,.3)}.gm-scrollbar.-vertical .thumb{width:100%}.gm-scrollbar.-horizontal .thumb{height:100%}.gm-scrollbar-container .gm-scroll-view{width:100%;height:100%;overflow:scroll;transform:translateZ(0);-webkit-overflow-scrolling:touch}.gm-scrollbar-container.gm-autoshow .gm-scrollbar{opacity:0;transition:opacity .12s ease-out}.gm-scrollbar-container.gm-autoshow:active>.gm-scrollbar,.gm-scrollbar-container.gm-autoshow:focus>.gm-scrollbar,.gm-scrollbar-container.gm-autoshow:hover>.gm-scrollbar{opacity:1;transition:opacity .34s ease-out}.gm-resize-trigger{position:absolute;display:block;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0}",""])},function(e,t){function i(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var l=n(r);return[i].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([l]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(n[l]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=h[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(l(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(l(i.parts[r]));h[i.id]={id:i.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",m.appendChild(e),e}function l(e){var t,i,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(p)return _;n.parentNode.removeChild(n)}if(v){var l=d++;n=u||(u=r()),t=s.bind(null,n,l,!1),i=s.bind(null,n,l,!0)}else n=r(),t=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function s(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var l=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(l,s[t]):e.appendChild(l)}}function o(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(9),h={},m=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,p=!1,_=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){p=i;var r=c(e,t);return n(r),function(t){for(var i=[],l=0;l<r.length;l++){var s=r[l],o=h[s.id];o.refs--,i.push(o)}t?(r=c(e,t),n(r)):r=[];for(var l=0;l<i.length;l++){var o=i[l];if(0===o.refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete h[o.id]}}}};var f=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],n={},r=0;r<t.length;r++){var l=t[r],s=l[0],o=l[1],a=l[2],c=l[3],h={id:e+":"+r,css:o,media:a,sourceMap:c};n[s]?n[s].parts.push(h):i.push(n[s]={id:s,parts:[h]})}return i}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"geminiScrollbar"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"gm-scroll-view"},[e._t("default")],2)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gm-scrollbar -vertical"},[i("div",{staticClass:"thumb"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gm-scrollbar -horizontal"},[i("div",{staticClass:"thumb"})])}],l={render:n,staticRenderFns:r};t.a=l}]);
//# sourceMappingURL=vue-gemini-scrollbar.js.map