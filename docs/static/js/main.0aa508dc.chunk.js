(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),l=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2?e((function(t){return[r].concat(Object(s.a)(t))})):console.log("Input vacio"),u("")},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(t){u(t.target.value)}})})};l.prototype={setCategories:o.a.func.isRequired};var p=n(11),d=n(6),f=n.n(d),b=n(9),h=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=K5PJw2aMS4kwUW7vlijtElIXhX4Xf3YV"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"cajaImg animate__animated animate__fadeInDown",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{children:e})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:e}),r&&Object(j.jsx)("p",{className:"animate__flash",children:"'Cargando...'"}),Object(j.jsx)("div",{className:"caja",children:c.map((function(t){return Object(j.jsx)(O,Object(p.a)({},t),t.id)}))})]})},x=function(){var t=Object(a.useState)(["Flash"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(l,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(m,{category:t},t)}))})]})};n(20);r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0aa508dc.chunk.js.map