(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(14),s=n(0),c=n(6),a=n.n(c),o=n(2),i=n(3),h=n(5),b=n(4),l=n(7),u=n(1),d=function(e){var t=e.name,n=e.email,r=e.id,s=e.phone,c=e.website;return Object(u.jsxs)("div",{className:"bg-light-yellow br1 pa3 ma2 grow bw2 shadow-5 tc card",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:""}),Object(u.jsxs)("div",{className:"br1 shadow-1 infobox overlay",children:[Object(u.jsx)("h2",{className:"text nameplate",children:t}),Object(u.jsx)("p",{className:"text m",children:n}),Object(u.jsx)("p",{className:"text m",children:s}),Object(u.jsx)("p",{className:"text m",children:c})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{className:"grid-container",children:t.map((function(e,n){return Object(u.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email,phone:t[n].phone,website:t[n].website},n)}))})},p=function(e){e.searchfield;var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2 searchbox",children:Object(u.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){return Object(u.jsx)("div",{className:"scrollbox",children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops. An Error has occured."}):this.props.children}}]),n}(s.Component),m=(n(24),n(12),"CHANGE_SEARCH_FIELD"),v="REQUEST_ROBOTS_PENDING",g="REQUEST_ROBOTS_SUCCESS",x="REQUEST_ROBOTS_FAILED",y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return Object(u.jsx)("h1",{className:"blanka4 white",children:"RoboFriends"})}}]),n}(s.Component),R=y,E=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,s=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?Object(u.jsx)("h1",{className:"tc",children:"Loading..."}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)(R,{}),Object(u.jsx)("div",{className:"divider"}),Object(u.jsx)(p,{searchChange:n}),Object(u.jsx)(O,{children:Object(u.jsx)(f,{children:Object(u.jsx)(j,{robots:c})})})]})}}]),n}(s.Component),N=Object(l.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:v}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:g,payload:t})})).catch((function(t){return e({type:x,payload:t})}))}))}}}))(E),C=n(8),w=n(13),S=(n(25),{searchField:""}),k={isPending:!1,robots:[],error:""},F=(n(27),Object(C.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===m?Object.assign({},e,{searchField:t.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{isPending:!0});case g:return Object.assign({},e,{robots:t.payload,isPending:!1});case x:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),P=Object(C.c)(F,C.a.apply(void 0,[w.a].concat(Object(r.a)([]))));a.a.render(Object(u.jsx)(l.a,{store:P,children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f4b304fd.chunk.js.map