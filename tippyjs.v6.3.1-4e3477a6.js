var e="top",t="bottom",n="right",r="left",o=[e,t,n,r],i=o.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),a=[].concat(o,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),s=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function c(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof u(e).Element||e instanceof Element}function f(e){return e instanceof u(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!=typeof ShadowRoot&&(e instanceof u(e).ShadowRoot||e instanceof ShadowRoot)}var l={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&c(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function m(e){return e.split("-")[0]}var v=Math.round;function h(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(f(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=n.width/a||1),i>0&&(o=n.height/i||1)}return{width:v(n.width/r),height:v(n.height/o),top:v(n.top/o),right:v(n.right/r),bottom:v(n.bottom/o),left:v(n.left/r),x:v(n.left/r),y:v(n.top/o)}}function g(e){var t=h(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function y(e){return u(e).getComputedStyle(e)}function w(e){return["table","td","th"].indexOf(c(e))>=0}function x(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||x(e)}function E(e){return f(e)&&"fixed"!==y(e).position?e.offsetParent:null}function T(e){for(var t=u(e),n=E(e);n&&w(n)&&"static"===y(n).position;)n=E(n);return n&&("html"===c(n)||"body"===c(n)&&"static"===y(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&f(e)&&"fixed"===y(e).position)return null;for(var n=O(e);f(n)&&["html","body"].indexOf(c(n))<0;){var r=y(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function A(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var D=Math.max,j=Math.min,L=Math.round;function k(e,t,n){return D(e,j(t,n))}function C(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function M(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function S(e){return e.split("-")[1]}var H={top:"auto",right:"auto",bottom:"auto",left:"auto"};function V(o){var i,a=o.popper,s=o.popperRect,c=o.placement,p=o.variation,f=o.offsets,d=o.position,l=o.gpuAcceleration,m=o.adaptive,v=o.roundOffsets,h=!0===v?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:L(L(t*r)/r)||0,y:L(L(n*r)/r)||0}}(f):"function"==typeof v?v(f):f,g=h.x,b=void 0===g?0:g,w=h.y,O=void 0===w?0:w,E=f.hasOwnProperty("x"),A=f.hasOwnProperty("y"),D=r,j=e,k=window;if(m){var C=T(a),M="clientHeight",S="clientWidth";C===u(a)&&"static"!==y(C=x(a)).position&&"absolute"===d&&(M="scrollHeight",S="scrollWidth"),C=C,c!==e&&(c!==r&&c!==n||"end"!==p)||(j=t,O-=C[M]-s.height,O*=l?1:-1),c!==r&&(c!==e&&c!==t||"end"!==p)||(D=n,b-=C[S]-s.width,b*=l?1:-1)}var V,W=Object.assign({position:d},m&&H);return l?Object.assign({},W,((V={})[j]=A?"0":"",V[D]=E?"0":"",V.transform=(k.devicePixelRatio||1)<=1?"translate("+b+"px, "+O+"px)":"translate3d("+b+"px, "+O+"px, 0)",V)):Object.assign({},W,((i={})[j]=A?O+"px":"",i[D]=E?b+"px":"",i.transform="",i))}var W={passive:!0};var B={left:"right",right:"left",bottom:"top",top:"bottom"};function P(e){return e.replace(/left|right|bottom|top/g,(function(e){return B[e]}))}var R={start:"end",end:"start"};function I(e){return e.replace(/start|end/g,(function(e){return R[e]}))}function N(e){var t=u(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function q(e){return h(x(e)).left+N(e).scrollLeft}function U(e){var t=y(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function _(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:f(e)&&U(e)?e:_(O(e))}function F(e,t){var n;void 0===t&&(t=[]);var r=_(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=u(r),a=o?[i].concat(i.visualViewport||[],U(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(F(O(a)))}function $(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function z(e,t){return"viewport"===t?$(function(e){var t=u(e),n=x(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+q(e),y:s}}(e)):f(t)?function(e){var t=h(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):$(function(e){var t,n=x(e),r=N(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=D(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=D(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+q(e),c=-r.scrollTop;return"rtl"===y(o||n).direction&&(s+=D(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(x(e)))}function X(e,t,n){var r="clippingParents"===t?function(e){var t=F(O(e)),n=["absolute","fixed"].indexOf(y(e).position)>=0&&f(e)?T(e):e;return p(n)?t.filter((function(e){return p(e)&&b(e,n)&&"body"!==c(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=z(e,n);return t.top=D(r.top,t.top),t.right=j(r.right,t.right),t.bottom=j(r.bottom,t.bottom),t.left=D(r.left,t.left),t}),z(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Y(o){var i,a=o.reference,s=o.element,c=o.placement,u=c?m(c):null,p=c?S(c):null,f=a.x+a.width/2-s.width/2,d=a.y+a.height/2-s.height/2;switch(u){case e:i={x:f,y:a.y-s.height};break;case t:i={x:f,y:a.y+a.height};break;case n:i={x:a.x+a.width,y:d};break;case r:i={x:a.x-s.width,y:d};break;default:i={x:a.x,y:a.y}}var l=u?A(u):null;if(null!=l){var v="y"===l?"height":"width";switch(p){case"start":i[l]=i[l]-(a[v]/2-s[v]/2);break;case"end":i[l]=i[l]+(a[v]/2-s[v]/2)}}return i}function J(r,i){void 0===i&&(i={});var a=i,s=a.placement,c=void 0===s?r.placement:s,u=a.boundary,f=void 0===u?"clippingParents":u,d=a.rootBoundary,l=void 0===d?"viewport":d,m=a.elementContext,v=void 0===m?"popper":m,g=a.altBoundary,b=void 0!==g&&g,y=a.padding,w=void 0===y?0:y,O=C("number"!=typeof w?w:M(w,o)),E="popper"===v?"reference":"popper",T=r.rects.popper,A=r.elements[b?E:v],D=X(p(A)?A:A.contextElement||x(r.elements.popper),f,l),j=h(r.elements.reference),L=Y({reference:j,element:T,strategy:"absolute",placement:c}),k=$(Object.assign({},T,L)),S="popper"===v?k:j,H={top:D.top-S.top+O.top,bottom:S.bottom-D.bottom+O.bottom,left:D.left-S.left+O.left,right:S.right-D.right+O.right},V=r.modifiersData.offset;if("popper"===v&&V){var W=V[c];Object.keys(H).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";H[r]+=W[i]*o}))}return H}function G(e,t){void 0===t&&(t={});var n=t,r=n.placement,s=n.boundary,c=n.rootBoundary,u=n.padding,p=n.flipVariations,f=n.allowedAutoPlacements,d=void 0===f?a:f,l=S(r),v=l?p?i:i.filter((function(e){return S(e)===l})):o,h=v.filter((function(e){return d.indexOf(e)>=0}));0===h.length&&(h=v);var g=h.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:s,rootBoundary:c,padding:u})[m(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}function K(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Q(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}function Z(e,t,n){void 0===n&&(n=!1);var r,o,i=f(t),a=f(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),s=x(t),p=h(e,a),d={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==c(t)||U(s))&&(d=(r=t)!==u(r)&&f(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:N(r)),f(t)?((l=h(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=q(s))),{x:p.left+d.scrollLeft-l.x,y:p.top+d.scrollTop-l.y,width:p.width,height:p.height}}function ee(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?te:o;return function(e,t,n){void 0===n&&(n=i);var o,a,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],f=!1,d={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n;l(),c.options=Object.assign({},i,c.options,o),c.scrollParents={reference:p(e)?F(e):e.contextElement?F(e.contextElement):[],popper:F(t)};var a,f,m=function(e){var t=ee(e);return s.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,c.options.modifiers),f=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))));return c.orderedModifiers=m.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:d,options:r}),a=function(){};u.push(i||a)}})),d.update()},forceUpdate:function(){if(!f){var e=c.elements,t=e.reference,n=e.popper;if(ne(t,n)){c.rects={reference:Z(t,T(n),"fixed"===c.options.strategy),popper:g(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:d})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){d.forceUpdate(),e(c)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),f=!0}};if(!ne(e,t))return d;function l(){u.forEach((function(e){return e()})),u=[]}return d.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),d}}var oe=re({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=u(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,W)})),s&&c.addEventListener("resize",n.update,W),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,W)})),s&&c.removeEventListener("resize",n.update,W)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:m(t.placement),variation:S(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,V(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,V(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},l,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,s=t.name,c=i.offset,u=void 0===c?[0,0]:c,p=a.reduce((function(t,i){return t[i]=function(t,o,i){var a=m(t),s=[r,e].indexOf(a)>=0?-1:1,c="function"==typeof i?i(Object.assign({},o,{placement:t})):i,u=c[0],p=c[1];return u=u||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:u}:{x:u,y:p}}(i,o.rects,u),t}),{}),f=p[o.placement],d=f.x,l=f.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=d,o.modifiersData.popperOffsets.y+=l),o.modifiersData[s]=p}},{name:"flip",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,s=o.name;if(!i.modifiersData[s]._skip){for(var c=a.mainAxis,u=void 0===c||c,p=a.altAxis,f=void 0===p||p,d=a.fallbackPlacements,l=a.padding,v=a.boundary,h=a.rootBoundary,g=a.altBoundary,b=a.flipVariations,y=void 0===b||b,w=a.allowedAutoPlacements,x=i.options.placement,O=m(x),E=d||(O===x||!y?[P(x)]:function(e){if("auto"===m(e))return[];var t=P(e);return[I(e),t,I(t)]}(x)),T=[x].concat(E).reduce((function(e,t){return e.concat("auto"===m(t)?G(i,{placement:t,boundary:v,rootBoundary:h,padding:l,flipVariations:y,allowedAutoPlacements:w}):t)}),[]),A=i.rects.reference,D=i.rects.popper,j=new Map,L=!0,k=T[0],C=0;C<T.length;C++){var M=T[C],H=m(M),V="start"===S(M),W=[e,t].indexOf(H)>=0,B=W?"width":"height",R=J(i,{placement:M,boundary:v,rootBoundary:h,altBoundary:g,padding:l}),N=W?V?n:r:V?t:e;A[B]>D[B]&&(N=P(N));var q=P(N),U=[];if(u&&U.push(R[H]<=0),f&&U.push(R[N]<=0,R[q]<=0),U.every((function(e){return e}))){k=M,L=!1;break}j.set(M,U)}if(L)for(var _=function(e){var t=T.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},F=y?3:1;F>0;F--){if("break"===_(F))break}i.placement!==k&&(i.modifiersData[s]._skip=!0,i.placement=k,i.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,s=o.name,c=a.mainAxis,u=void 0===c||c,p=a.altAxis,f=void 0!==p&&p,d=a.boundary,l=a.rootBoundary,v=a.altBoundary,h=a.padding,b=a.tether,y=void 0===b||b,w=a.tetherOffset,x=void 0===w?0:w,O=J(i,{boundary:d,rootBoundary:l,padding:h,altBoundary:v}),E=m(i.placement),L=S(i.placement),C=!L,M=A(E),H="x"===M?"y":"x",V=i.modifiersData.popperOffsets,W=i.rects.reference,B=i.rects.popper,P="function"==typeof x?x(Object.assign({},i.rects,{placement:i.placement})):x,R={x:0,y:0};if(V){if(u||f){var I="y"===M?e:r,N="y"===M?t:n,q="y"===M?"height":"width",U=V[M],_=V[M]+O[I],F=V[M]-O[N],$=y?-B[q]/2:0,z="start"===L?W[q]:B[q],X="start"===L?-B[q]:-W[q],Y=i.elements.arrow,G=y&&Y?g(Y):{width:0,height:0},K=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[I],Z=K[N],ee=k(0,W[q],G[q]),te=C?W[q]/2-$-ee-Q-P:z-ee-Q-P,ne=C?-W[q]/2+$+ee+Z+P:X+ee+Z+P,re=i.elements.arrow&&T(i.elements.arrow),oe=re?"y"===M?re.clientTop||0:re.clientLeft||0:0,ie=i.modifiersData.offset?i.modifiersData.offset[i.placement][M]:0,ae=V[M]+te-ie-oe,se=V[M]+ne-ie;if(u){var ce=k(y?j(_,ae):_,U,y?D(F,se):F);V[M]=ce,R[M]=ce-U}if(f){var ue="x"===M?e:r,pe="x"===M?t:n,fe=V[H],de=fe+O[ue],le=fe-O[pe],me=k(y?j(de,ae):de,fe,y?D(le,se):le);V[H]=me,R[H]=me-fe}}i.modifiersData[s]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(i){var a,s=i.state,c=i.name,u=i.options,p=s.elements.arrow,f=s.modifiersData.popperOffsets,d=m(s.placement),l=A(d),v=[r,n].indexOf(d)>=0?"height":"width";if(p&&f){var h=function(e,t){return C("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:M(e,o))}(u.padding,s),b=g(p),y="y"===l?e:r,w="y"===l?t:n,x=s.rects.reference[v]+s.rects.reference[l]-f[l]-s.rects.popper[v],O=f[l]-s.rects.reference[l],E=T(p),D=E?"y"===l?E.clientHeight||0:E.clientWidth||0:0,j=x/2-O/2,L=h[y],S=D-b[v]-h[w],H=D/2-b[v]/2+j,V=k(L,H,S),W=l;s.modifiersData[c]=((a={})[W]=V,a.centerOffset=V-H,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&b(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),c=K(a,r),u=K(s,o,i),p=Q(c),f=Q(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),ie='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',ae={passive:!0,capture:!0};function se(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ce(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ue(e,t){return"function"==typeof e?e.apply(void 0,t):e}function pe(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function fe(e){return[].concat(e)}function de(e,t){-1===e.indexOf(t)&&e.push(t)}function le(e){return[].slice.call(e)}function me(){return document.createElement("div")}function ve(e){return["Element","Fragment"].some((function(t){return ce(e,t)}))}function he(e){return ve(e)?[e]:function(e){return ce(e,"NodeList")}(e)?le(e):Array.isArray(e)?e:le(document.querySelectorAll(e))}function ge(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function be(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function ye(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var we={isTouch:!1},xe=0;function Oe(){we.isTouch||(we.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ee))}function Ee(){var e=performance.now();e-xe<20&&(we.isTouch=!1,document.removeEventListener("mousemove",Ee)),xe=e}function Te(){var e,t=document.activeElement;if((e=t)&&e._tippy&&e._tippy.reference===e){var n=t._tippy;t.blur&&!n.state.isVisible&&t.blur()}}var Ae="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",De=/MSIE |Trident\//.test(Ae),je=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Le=Object.keys(je);function ke(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},t)}function Ce(e,t){var n=Object.assign({},t,{content:ue(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(ke(Object.assign({},je,{plugins:t}))):Le).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},je.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Me(e,t){e.innerHTML=t}function Se(e){var t=me();return!0===e?t.className="tippy-arrow":(t.className="tippy-svg-arrow",ve(e)?t.appendChild(e):Me(t,e)),t}function He(e,t){ve(t.content)?(Me(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Me(e,t.content):e.textContent=t.content)}function Ve(e){var t=e.firstElementChild,n=le(t.children);return{box:t,content:n.find((function(e){return e.classList.contains("tippy-content")})),arrow:n.find((function(e){return e.classList.contains("tippy-arrow")||e.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function We(e){var t=me(),n=me();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=me();function o(n,r){var o=Ve(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||He(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(Se(r.arrow))):i.appendChild(Se(r.arrow)):s&&i.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),He(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}We.$$tippy=!0;var Be=1,Pe=[],Re=[];function Ie(e,t){var n,r,o,i,a,s,c,u,p,f=Ce(e,Object.assign({},je,{},ke((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],g=pe(Y,f.interactiveDebounce),b=Be++,y=(p=f.plugins).filter((function(e,t){return p.indexOf(e)===t})),w={id:b,reference:e,popper:me(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){if(w.state.isDestroyed)return;V("onBeforeUpdate",[w,t]),z();var n=w.props,r=Ce(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,$(),n.interactiveDebounce!==r.interactiveDebounce&&(P(),g=pe(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?fe(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");B(),H(),E&&E(n,r);w.popperInstance&&(Q(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));V("onAfterUpdate",[w,t])},setContent:function(e){w.setProps({content:e})},show:function(){var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=we.isTouch&&!w.props.touch,o=se(w.props.duration,0,je.duration);if(e||t||n||r)return;if(k().hasAttribute("disabled"))return;if(V("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,L()&&(O.style.visibility="visible");H(),q(),w.state.isMounted||(O.style.transition="none");if(L()){var i=M(),a=i.box,s=i.content;ge([a,s],0)}c=function(){var e;if(w.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=w.props.moveTransition,L()&&w.props.animation){var t=M(),n=t.box,r=t.content;ge([n,r],o),be([n,r],"visible")}W(),B(),de(Re,w),null==(e=w.popperInstance)||e.forceUpdate(),w.state.isMounted=!0,V("onMount",[w]),w.props.animation&&L()&&function(e,t){_(e,t)}(o,(function(){w.state.isShown=!0,V("onShown",[w])}))}},function(){var e,t=w.props.appendTo,n=k();e=w.props.interactive&&t===je.appendTo||"parent"===t?n.parentNode:ue(t,[n]);e.contains(O)||e.appendChild(O);Q()}()},hide:function(){var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=se(w.props.duration,1,je.duration);if(e||t||n)return;if(V("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,v=!1,d=!1,L()&&(O.style.visibility="hidden");if(P(),U(),H(),L()){var o=M(),i=o.box,a=o.content;w.props.animation&&(ge([i,a],r),be([i,a],"hidden"))}W(),B(),w.props.animation?L()&&function(e,t){_(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,w.unmount):w.unmount()},hideWithInteractivity:function(e){C().addEventListener("mousemove",g),de(Pe,g),g(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Z(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);Re=Re.filter((function(e){return e!==w})),w.state.isMounted=!1,V("onHidden",[w])},destroy:function(){if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),z(),delete e._tippy,w.state.isDestroyed=!0,V("onDestroy",[w])}};if(!f.render)return w;var x=f.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var T=y.map((function(e){return e.fn(w)})),A=e.hasAttribute("aria-expanded");return $(),B(),H(),V("onCreate",[w]),f.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(C().addEventListener("mousemove",g),g(e))})),w;function D(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===D()[0]}function L(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){var e,t,n=k().parentNode;return n?(null==(t=fe(n)[0])||null==(e=t.ownerDocument)?void 0:e.body)?t.ownerDocument:document:document}function M(){return Ve(O)}function S(e){return w.state.isMounted&&!w.state.isVisible||we.isTouch||a&&"focus"===a.type?0:se(w.props.delay,e?0:1,je.delay)}function H(){O.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",O.style.zIndex=""+w.props.zIndex}function V(e,t,n){var r;(void 0===n&&(n=!0),T.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function W(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;fe(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function B(){!A&&w.props.aria.expanded&&fe(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function P(){C().removeEventListener("mousemove",g),Pe=Pe.filter((function(e){return e!==g}))}function R(e){if(!(we.isTouch&&(m||"mousedown"===e.type)||w.props.interactive&&O.contains(e.target))){if(k().contains(e.target)){if(we.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),l=!0,setTimeout((function(){l=!1})),w.state.isMounted||U())}}function I(){m=!0}function N(){m=!1}function q(){var e=C();e.addEventListener("mousedown",R,!0),e.addEventListener("touchend",R,ae),e.addEventListener("touchstart",N,ae),e.addEventListener("touchmove",I,ae)}function U(){var e=C();e.removeEventListener("mousedown",R,!0),e.removeEventListener("touchend",R,ae),e.removeEventListener("touchstart",N,ae),e.removeEventListener("touchmove",I,ae)}function _(e,t){var n=M().box;function r(e){e.target===n&&(ye(n,"remove",r),t())}if(0===e)return t();ye(n,"remove",s),ye(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),fe(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function $(){var e;j()&&(F("touchstart",X,{passive:!0}),F("touchend",J,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",J);break;case"focus":F(De?"focusout":"blur",G);break;case"focusin":F("focusout",G)}}))}function z(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),h=[]}function X(e){var t,n=!1;if(w.state.isEnabled&&!K(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,B(),!w.state.isVisible&&ce(e,"MouseEvent")&&Pe.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||d)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=k().contains(t)||O.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=o.placement.split("-")[0],s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+p>i,v=n-t.right-f>i;return d||l||m||v}))}(ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean),e)&&(P(),ne(e))}function J(e){K(e)||w.props.trigger.indexOf("click")>=0&&d||(w.props.interactive?w.hideWithInteractivity(e):ne(e))}function G(e){w.props.trigger.indexOf("focusin")<0&&e.target!==k()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function K(e){return!!we.isTouch&&j()!==e.type.indexOf("touch")>=0}function Q(){Z();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=L()?Ve(O).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e,p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=M().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];L()&&s&&p.push({name:"arrow",options:{element:s,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),w.popperInstance=oe(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:p}))}function Z(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ee(){return le(O.querySelectorAll("[data-tippy-root]"))}function te(e){w.clearDelayTimeouts(),e&&V("onTrigger",[w,e]),q();var t=S(!0),n=D(),o=n[0],i=n[1];we.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){w.show()}),t):w.show()}function ne(e){if(w.clearDelayTimeouts(),V("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=S(!1);t?o=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else U()}}function Ne(e,t){void 0===t&&(t={});var n=je.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Oe,ae),window.addEventListener("blur",Te);var r=Object.assign({},t,{plugins:n}),o=he(e).reduce((function(e,t){var n=t&&Ie(t,r);return n&&e.push(n),e}),[]);return ve(e)?o[0]:o}Ne.defaultProps=je,Ne.setDefaultProps=function(e){Object.keys(e).forEach((function(t){je[t]=e[t]}))},Ne.currentInput=we,Object.assign({},l,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});var qe={mouseover:"mouseenter",focusin:"focus",click:"click"};function Ue(e,t){var n,r,o,i=[],a=[],s=!1,c=t.target,u=(n=t,r=["target"],o=Object.assign({},n),r.forEach((function(e){delete o[e]})),o),p=Object.assign({},u,{trigger:"manual",touch:!1}),f=Object.assign({},u,{showOnCreate:!0}),d=Ne(e,p);function l(e){if(e.target&&!s){var n=e.target.closest(c);if(n){var r=n.getAttribute("data-tippy-trigger")||t.trigger||je.trigger;if(!n._tippy&&!("touchstart"===e.type&&"boolean"==typeof f.touch||"touchstart"!==e.type&&r.indexOf(qe[e.type])<0)){var o=Ne(n,f);o&&(a=a.concat(o))}}}}function m(e,t,n,r){void 0===r&&(r=!1),e.addEventListener(t,n,r),i.push({node:e,eventType:t,handler:n,options:r})}return fe(d).forEach((function(e){var t=e.destroy,n=e.enable,r=e.disable;e.destroy=function(e){void 0===e&&(e=!0),e&&a.forEach((function(e){e.destroy()})),a=[],i.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),i=[],t()},e.enable=function(){n(),a.forEach((function(e){return e.enable()})),s=!1},e.disable=function(){r(),a.forEach((function(e){return e.disable()})),s=!0},function(e){var t=e.reference;m(t,"touchstart",l,ae),m(t,"mouseover",l),m(t,"focusin",l),m(t,"click",l)}(e)})),d}var _e={name:"animateFill",defaultValue:!1,fn:function(e){var t;if(!(null==(t=e.props.render)?void 0:t.$$tippy))return{};var n=Ve(e.popper),r=n.box,o=n.content,i=e.props.animateFill?function(){var e=me();return e.className="tippy-backdrop",be([e],"hidden"),e}():null;return{onCreate:function(){i&&(r.insertBefore(i,r.firstElementChild),r.setAttribute("data-animatefill",""),r.style.overflow="hidden",e.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var e=r.style.transitionDuration,t=Number(e.replace("ms",""));o.style.transitionDelay=Math.round(t/10)+"ms",i.style.transitionDuration=e,be([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&be([i],"hidden")}}}};Ne.setDefaultProps({render:We});export{ie as R,_e as a,Ue as d,Ne as t};
