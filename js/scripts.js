var lscache=function(){function a(){var a="__lscachetest__",b=a;if(void 0!==i)return i;try{f(a,b),g(a),i=!0}catch(c){i=!1}return i}function b(){return void 0===j&&(j=null!=window.JSON),j}function c(a){return a+l}function d(){return Math.floor((new Date).getTime()/n)}function e(a){return localStorage.getItem(k+p+a)}function f(a,b){localStorage.removeItem(k+p+a),localStorage.setItem(k+p+a,b)}function g(a){localStorage.removeItem(k+p+a)}function h(a,b){q&&(!1 in window||"function"!=typeof window.console.warn||(window.console.warn("lscache - "+a),b&&window.console.warn("lscache - The error was: "+b.message)))
}var i,j,k="lscache-",l="-cacheexpiration",m=10,n=6e4,o=Math.floor(864e13/n),p="",q=!1;return{set:function(i,j,n){if(a()){if("string"!=typeof j){if(!b())return;try{j=JSON.stringify(j)}catch(q){return}}try{f(i,j)}catch(q){if("QUOTA_EXCEEDED_ERR"!==q.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==q.name&&"QuotaExceededError"!==q.name)return h("Could not add item with key '"+i+"'",q),void 0;for(var r,s=[],t=0;t<localStorage.length;t++)if(r=localStorage.key(t),0===r.indexOf(k+p)&&r.indexOf(l)<0){var u=r.substr((k+p).length),v=c(u),w=e(v);
w=w?parseInt(w,m):o,s.push({key:u,size:(e(u)||"").length,expiration:w})}s.sort(function(a,b){return b.expiration-a.expiration});for(var x=(j||"").length;s.length&&x>0;)r=s.pop(),h("Cache is full, removing item with key '"+i+"'"),g(r.key),g(c(r.key)),x-=r.size;try{f(i,j)}catch(q){return h("Could not add item with key '"+i+"', perhaps it's too big?",q),void 0}}n?f(c(i),(d()+n).toString(m)):g(c(i))}},get:function(f){if(!a())return null;var h=c(f),i=e(h);if(i){var j=parseInt(i,m);if(d()>=j)return g(f),g(h),null
}var k=e(f);if(!k||!b())return k;try{return JSON.parse(k)}catch(l){return k}},remove:function(b){return a()?(g(b),g(c(b)),void 0):null},supported:function(){return a()},flush:function(){if(a())for(var b=localStorage.length-1;b>=0;--b){var c=localStorage.key(b);0===c.indexOf(k+p)&&localStorage.removeItem(c)}},setBucket:function(a){p=a},resetBucket:function(){p=""},enableWarnings:function(a){q=a}}}();!function(){function a(a){function d(){for(;h=k<j.length&&a>l;){var b=k++,d=j[b],f=c.call(d,1);f.push(e(b)),++l,d[0].apply(null,f)
}}function e(a){return function(b,c){--l,null==n&&(null!=b?(n=b,k=m=0/0,f()):(j[a]=c,--m?h||d():f()))}}function f(){null!=n?o(n):i?o(n,j):o.apply(null,[n].concat(j))}var g,h,i,j=[],k=0,l=0,m=0,n=null,o=b;return a||(a=1/0),g={defer:function(){return n||(j.push(arguments),++m,d()),g},await:function(a){return o=a,i=!1,m||f(),g},awaitAll:function(a){return o=a,i=!0,m||f(),g}}}function b(){}"undefined"==typeof module?self.queue=a:module.exports=a,a.version="1.0.4";var c=[].slice}(),function(a){var b=[],c=function(){},d={defaultPath:"/",before:c,on:c,notfound:c},e={current:null,previous:null,config:function(a){for(var b in a)a.hasOwnProperty(b)&&(d[b]=a[b]);
return e},add:function(a,c,d){return a&&c&&("function"==typeof c&&(d=c,c=null),b.push({path:a,name:c,fn:d||function(){}})),e},go:function(a){return location.hash=a,e},back:function(a){return e.previous?(history.back(),e.previous=null):a&&(location.hash=a),e}},f=function(){var a=location.hash.slice(1),c=!1,f=e.current;a||(a=d.defaultPath),f&&f!=e.previous&&(e.previous=f),e.current=a;for(var g=0,h=b.length;h>g&&!c;g++){var i=b[g],j=i.path,k=i.name,l=i.fn;if("string"==typeof j)j.toLowerCase()==a.toLowerCase()&&(d.before.call(e,j,k),l.call(e),d.on.call(e,j,k),c=!0);
else{var m=a.match(j);m&&(d.before.call(e,j,k,m),l.apply(e,m),d.on.call(e,j,k,m),c=!0)}}return c||d.notfound.call(e),e};e.init=function(){return a.addEventListener("hashchange",f),f()},e.reload=f,a.ruto=e}(window);var Yokuto=function(){var a=function(a,b){if(!a||1!==a.nodeType)return!1;var c=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.oMatchesSelector||a.msMatchesSelector;return c.call(a,b)},b=function(b,c){var d=!1;do d=a(b,c);while(!d&&(b=b.parentNode)&&b.ownerDocument);
return d?b:!1},c=function(a,b){if(!a)return this;b||(b=document);var c;"string"!=typeof a?(this.selector="",c=[a]):(this.selector=a,c=[].slice.call(b.querySelectorAll(a)));for(var d=this.length=c.length,e=0;d>e;e++)this[e]=c[e];return this};return c.prototype={each:function(a){for(var b=this.length,c=0;b>c;c++){var d=this[c];a.call(d,d,c)}return this},on:function(a,c,d,e){return"string"!=typeof c?(e=d,d=c,this.each(function(b){b.addEventListener(a,d,e||!1)})):this.each(function(f){f.addEventListener(a,function(a){var e=b(a.target,c);
e&&d.call(e,a)},e||!1)}),this},trigger:function(a){var b=this[0],c=document.createEvent("MouseEvents"),d="dblclick"==a?2:1,e="contextmenu"==a?2:0;return c.initEvent(a,!0,!0,document.defaultView,d,0,0,0,0,!1,!1,!1,!1,e,b),b.dispatchEvent(c),this},find:function(a){return new c(a,this[0])},parent:function(){var a=this[0];return new c(a.parentElement||a.parentNode)},next:function(){var a=this[0];return new c(a.nextElementSibling||a.nextSibling)},prev:function(){var a=this[0];return new c(a.previousElementSibling||a.previousSibling)
},addClass:function(a){return this.each(function(b){b.classList.add(a)}),this},removeClass:function(a){return this.each(function(b){b.classList.remove(a)}),this},toggleClass:function(a){return this.each(function(b){b.classList.toggle(a)}),this},html:function(a){return this.length?a?(this[0].innerHTML=a,this):this[0].innerHTML:this},attr:function(a){return this.length?this[0].getAttribute(a):""},data:function(a){return this.length?this[0].getAttribute("data-"+a):void 0},text:function(a){if(!this.length)return"";
var b=this[0];return a?(b.textContent=a,this):b.textContent},focus:function(){return this.length&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur(),this}},function(a){return new c(a)}}();"$"in window||(window.$=Yokuto);
/*
//@ sourceMappingURL=scripts.js.map
*/