"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{92:function(e,t){t.Z="e0c9e70823fc3aecb2aebaf743b1938c"},29:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,c=n(439),a=n(689),o=n(791),i=n(168),p=n(444).ZP.ul(r||(r=(0,i.Z)(["\ndisplay: flex;\n    flex-wrap: wrap;\n    gap: 25px;"]))),s=n(138),f=n(92),u=n(184),h=function(){var e=(0,a.UO)().movieId,t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],i=n[1],h="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(f.Z);return(0,o.useEffect)((function(){fetch(h).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 "))})).then((function(e){i(e.cast)}))}),[h,e]),0===r.length?(0,u.jsx)("p",{children:"No information about actors"}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(p,{children:r.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w300/".concat(e.profile_path):s,alt:e.profile_path}),(0,u.jsx)("h3",{children:e.name})]},e.id)}))})})}},138:function(e,t,n){e.exports=n.p+"static/media/error.32c2dc14180a9412f2d0.png"}}]);
//# sourceMappingURL=29.02a50d3b.chunk.js.map