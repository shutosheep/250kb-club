var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e,n,r,o,i,a){const l=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,i);if(l){const o=s(e,n,r,a);t.p(o,l)}}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function W(t,e,n){t.classList[n?"add":"remove"](e)}let y;function b(t){y=t}const w=[],v=[],_=[],k=[],z=Promise.resolve();let T=!1;function j(t){_.push(t)}let E=!1;const C=new Set;function S(){if(!E){E=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),L(e.$$)}for(b(null),w.length=0;v.length;)v.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];C.has(e)||(C.add(e),e())}_.length=0}while(w.length);for(;k.length;)k.pop()();T=!1,E=!1,C.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const M=new Set;let A;function H(){A={r:0,c:[],p:A}}function N(){A.r||r(A.c),A=A.p}function B(t,e){t&&t.i&&(M.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),A.c.push((()=>{M.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function O(t){t&&t.c()}function P(t,n,i){const{fragment:s,on_mount:a,on_destroy:l,after_update:c}=t.$$;s&&s.m(n,i),j((()=>{const n=a.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),c.forEach(j)}function q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(w.push(t),T||(T=!0,z.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,o,i,s,a,l,c=[-1]){const h=y;b(e);const f=o.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:c,skip_bound:!1};let g=!1;if(p.ctx=i?i(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),g&&D(e,t)),n})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&B(e.$$.fragment),P(e,o.target,o.anchor),S()}b(h)}class F{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t){let e,n;const r=t[2].default,o=function(t,e,n,r){if(t){const o=s(t,e,n,r);return t[0](o)}}(r,t,t[1],null);return{c(){e=f("a"),o&&o.c(),m(e,"href",t[0]),m(e,"rel","noopener"),m(e,"target","_blank")},m(t,r){c(t,e,r),o&&o.m(e,null),n=!0},p(t,[i]){o&&o.p&&2&i&&a(o,r,t,t[1],i,null,null),(!n||1&i)&&m(e,"href",t[0])},i(t){n||(B(o,t),n=!0)},o(t){I(o,t),n=!1},d(t){t&&u(e),o&&o.d(t)}}}function U(t,e,n){let{$$slots:r={},$$scope:o}=e,{href:i}=e;return t.$$set=t=>{"href"in t&&n(0,i=t.href),"$$scope"in t&&n(1,o=t.$$scope)},[i,o,r]}class G extends F{constructor(t){super(),R(this,t,U,J,i,{href:0})}}function K(t){let e;return{c(){e=p("Phantomas")},m(t,n){c(t,e,n)},d(t){t&&u(e)}}}function Q(t){let e,n,r,o,i,s,a,h,d,$,x,W,y,b;return h=new G({props:{href:"https://github.com/macbre/phantomas",$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){e=f("article"),n=f("header"),n.innerHTML="<h1>Technical Details</h1>",r=g(),o=f("p"),o.textContent="The values shown in the list are URL, Total Weight, Content Ratio.",i=g(),s=f("p"),a=p("Websites listed here are downloaded and analyzed with\n    "),O(h.$$.fragment),d=p(".\n    The total weight is counted and then the size of actual content is measured\n    and shown as a ratio."),$=g(),x=f("p"),x.textContent="For example: If a website has a total weight of 100kb and 60kb are the\n    documents structure, text, images, videos and so on, then the content ratio\n    is 60%. The rest are extras like CSS, JavaScript and so on. It is hard to\n    say what a good ratio is but my gut feeling is that everything above 20% is\n    pretty good already.",W=g(),y=f("p"),y.innerHTML="<strong>Disclaimer:</strong> Currently, inline scripts and styles are\n    measured as content due to technical limitations of Phantomas. This will\n    hopefully be fixed soon.",m(e,"id","info-popup")},m(t,u){c(t,e,u),l(e,n),l(e,r),l(e,o),l(e,i),l(e,s),l(s,a),P(h,s,null),l(s,d),l(e,$),l(e,x),l(e,W),l(e,y),b=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),h.$set(n)},i(t){b||(B(h.$$.fragment,t),b=!0)},o(t){I(h.$$.fragment,t),b=!1},d(t){t&&u(e),q(h)}}}class V extends F{constructor(t){super(),R(this,t,null,Q,i,{})}}var X=[{url:"https://koehr.in",contentWeight:23078,extraWeight:66537,stamp:1606004545427},{url:"https://koehr.tech",contentWeight:4964,extraWeight:20108,stamp:1606004547391},{url:"https://sjmulder.nl",contentWeight:2361,extraWeight:0,stamp:1606004663706},{url:"http://cyberia.host",contentWeight:1191,extraWeight:0,stamp:1606004664417},{url:"https://text.npr.org",contentWeight:2760,extraWeight:0,stamp:1606004665037},{url:"https://playerone.kevincox.ca",contentWeight:1904,extraWeight:42661,stamp:1606004665881},{url:"https://dotfilehub.com",contentWeight:961,extraWeight:1281,stamp:1606004667422},{url:"https://manpages.bsd.lv",contentWeight:7045,extraWeight:1346,stamp:1606004669823},{url:"https://danluu.com",contentWeight:2895,extraWeight:0,stamp:1606004670441},{url:"https://gtf.io",contentWeight:2040,extraWeight:2752,stamp:1606004671103},{url:"http://minid.net",contentWeight:4110,extraWeight:0,stamp:1606004672171},{url:"https://250kb.club",contentWeight:1682,extraWeight:8330,stamp:1606070901151},{url:"https://subreply.com",contentWeight:6713,extraWeight:52472,stamp:1606070902296},{url:"https://seirdy.one",contentWeight:1554,extraWeight:1951,stamp:1606070903577},{url:"https://richj.co",contentWeight:2119,extraWeight:1840,stamp:1606070904708},{url:"https://mkws.sh/",contentWeight:75059,extraWeight:7051,stamp:1606070907275},{url:"https://porkbrain.com",contentWeight:89742,extraWeight:1941,stamp:1606070908242},{url:"https://pgjones.dev",contentWeight:15979,extraWeight:187928,stamp:1606070910182},{url:"https://jaime.gomezobregon.com",contentWeight:21100,extraWeight:71592,stamp:1606070911329},{url:"https://lawzava.com",contentWeight:2324,extraWeight:2267,stamp:1606070912369},{url:"https://www.cleanpython.com/",contentWeight:7781,extraWeight:126068,stamp:1606070914335},{url:"https://monokai.nl",contentWeight:4823,extraWeight:85479,stamp:1606070915137},{url:"https://flatpackapps.com",contentWeight:41219,extraWeight:1262,stamp:1606070917537},{url:"https://frontaid.io",contentWeight:59536,extraWeight:103859,stamp:1606070918722},{url:"https://worldti.me",contentWeight:3099,extraWeight:39571,stamp:1606070920657},{url:"https://sneak.berlin",contentWeight:187882,extraWeight:1257173,stamp:1606070922342},{url:"https://plumebio.com",contentWeight:1994,extraWeight:1598,stamp:1606070924010},{url:"https://jeremysarber.com",contentWeight:2522,extraWeight:0,stamp:1606070925135}];function Y(t,e,n){const r=t.slice();return r[7]=e[n],r}function Z(t,e,n){const r=t.slice();return r[10]=e[n],r}function tt(e){let n,r,o,i,s=e[10]+"";return{c(){n=f("option"),r=p("content-"),o=p(s),n.__value=i=e[10],n.value=n.__value},m(t,e){c(t,n,e),l(n,r),l(n,o)},p:t,d(t){t&&u(n)}}}function et(t){let e,n;return e=new V({}),{c(){O(e.$$.fragment)},m(t,r){P(e,t,r),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function nt(t){let e,n=ct(t[7].url)+"";return{c(){e=p(n)},m(t,n){c(t,e,n)},p(t,r){4&r&&n!==(n=ct(t[7].url)+"")&&$(e,n)},d(t){t&&u(e)}}}function rt(t){let e,n,r,o,i,s,a,h,d,x,y,b,w,v,_,k,z,T,j,E=t[7].size+"",C=t[7].ratio+"";return o=new G({props:{href:t[7].url,$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){e=f("li"),n=f("div"),r=f("span"),O(o.$$.fragment),i=g(),s=f("span"),a=p(E),h=p("kb"),d=g(),x=f("span"),y=p(C),b=p("%"),w=g(),v=f("div"),_=g(),k=f("div"),z=g(),m(r,"class","url"),m(s,"class","size"),m(x,"class","ratio"),m(n,"class","entry"),m(v,"class","entry-size-bar"),W(v,"highlighted","size"===t[0]),W(v,"yellow",t[7].size>it),W(v,"red",t[7].size>st),m(k,"class","entry-ratio-bar"),W(k,"highlighted","ratio"===t[0]),W(k,"yellow",t[7].ratio>at),W(k,"red",t[7].ratio>lt),m(e,"style",T=`--size:${t[7].size};--ratio:${t[7].ratio}%`)},m(t,u){c(t,e,u),l(e,n),l(n,r),P(o,r,null),l(n,i),l(n,s),l(s,a),l(s,h),l(n,d),l(n,x),l(x,y),l(x,b),l(e,w),l(e,v),l(e,_),l(e,k),l(e,z),j=!0},p(t,n){const r={};4&n&&(r.href=t[7].url),8196&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r),(!j||4&n)&&E!==(E=t[7].size+"")&&$(a,E),(!j||4&n)&&C!==(C=t[7].ratio+"")&&$(y,C),1&n&&W(v,"highlighted","size"===t[0]),4&n&&W(v,"yellow",t[7].size>it),4&n&&W(v,"red",t[7].size>st),1&n&&W(k,"highlighted","ratio"===t[0]),4&n&&W(k,"yellow",t[7].ratio>at),4&n&&W(k,"red",t[7].ratio>lt),(!j||4&n&&T!==(T=`--size:${t[7].size};--ratio:${t[7].ratio}%`))&&m(e,"style",T)},i(t){j||(B(o.$$.fragment,t),j=!0)},o(t){I(o.$$.fragment,t),j=!1},d(t){t&&u(e),q(o)}}}function ot(t){let e,n,o,i,s,a,W,y,b,w,v,_,k=t[1]?"x":"How does this work?",z=t[3],T=[];for(let e=0;e<z.length;e+=1)T[e]=tt(Z(t,z,e));let E=t[1]&&et(),C=t[2],S=[];for(let e=0;e<C.length;e+=1)S[e]=rt(Y(t,C,e));const L=t=>I(S[t],1,1,(()=>{S[t]=null}));return{c(){e=f("header"),n=p("Sort by:\n  "),o=f("select");for(let t=0;t<T.length;t+=1)T[t].c();i=g(),s=f("button"),a=p(k),W=g(),E&&E.c(),y=g(),b=f("ol");for(let t=0;t<S.length;t+=1)S[t].c();void 0===t[0]&&j((()=>t[5].call(o))),m(s,"class","float-right")},m(r,u){c(r,e,u),l(e,n),l(e,o);for(let t=0;t<T.length;t+=1)T[t].m(o,null);x(o,t[0]),l(e,i),l(e,s),l(s,a),c(r,W,u),E&&E.m(r,u),c(r,y,u),c(r,b,u);for(let t=0;t<S.length;t+=1)S[t].m(b,null);w=!0,v||(_=[d(o,"change",t[5]),d(s,"click",t[4])],v=!0)},p(t,[e]){if(8&e){let n;for(z=t[3],n=0;n<z.length;n+=1){const r=Z(t,z,n);T[n]?T[n].p(r,e):(T[n]=tt(r),T[n].c(),T[n].m(o,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=z.length}if(9&e&&x(o,t[0]),(!w||2&e)&&k!==(k=t[1]?"x":"How does this work?")&&$(a,k),t[1]?E?2&e&&B(E,1):(E=et(),E.c(),B(E,1),E.m(y.parentNode,y)):E&&(H(),I(E,1,1,(()=>{E=null})),N()),5&e){let n;for(C=t[2],n=0;n<C.length;n+=1){const r=Y(t,C,n);S[n]?(S[n].p(r,e),B(S[n],1)):(S[n]=rt(r),S[n].c(),B(S[n],1),S[n].m(b,null))}for(H(),n=C.length;n<S.length;n+=1)L(n);N()}},i(t){if(!w){B(E);for(let t=0;t<C.length;t+=1)B(S[t]);w=!0}},o(t){I(E),S=S.filter(Boolean);for(let t=0;t<S.length;t+=1)I(S[t]);w=!1},d(t){t&&u(e),h(T,t),t&&u(W),E&&E.d(t),t&&u(y),t&&u(b),h(S,t),v=!1,r(_)}}}const it=200,st=225,at=50,lt=25;function ct(t){return t.replaceAll(/(^https?:\/\/|\/$)/g,"")}function ut(t,e,n){const r=X.map((t=>{const e=t.contentWeight+t.extraWeight,n=Math.round(e/1024),r=Math.round(100*t.contentWeight/e);return{url:t.url,size:n,ratio:r}})),o=["size","ratio"];let i,s=o[0],a=!1;return t.$$.update=()=>{1&t.$$.dirty&&n(2,i=r.sort(((t,e)=>"size"===s?t.size-e.size:e.ratio-t.ratio)))},[s,a,i,o,function(){n(1,a=!a)},function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,s),n(3,o)}]}return new class extends F{constructor(t){super(),R(this,t,ut,ot,i,{})}}({target:document.getElementById("members-table")})}();
//# sourceMappingURL=bundle.js.map
