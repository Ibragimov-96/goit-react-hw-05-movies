"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[481],{92:function(e,n){n.Z="e0c9e70823fc3aecb2aebaf743b1938c"},481:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r,c,i=t(439),o=t(791),a=t(92),s=t(168),u=t(444),d=t(87),l=u.ZP.ol(r||(r=(0,s.Z)(["\ndisplay:grid;\ngap:15px;"]))),f=(0,u.ZP)(d.rU)(c||(c=(0,s.Z)(["\ncolor:black;\nfont-size: 20px;\n"]))),h=t(184),p=function(){var e=(0,o.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],c="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a.Z);return(0,o.useEffect)((function(){fetch(c).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 "))})).then((function(e){r(e.results)}))}),[c]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Tranding to day"}),(0,h.jsx)(l,{children:t.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(f,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})})}}}]);
//# sourceMappingURL=481.ea2795cc.chunk.js.map