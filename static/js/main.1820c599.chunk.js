(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var s=r(14),n=r(0),o=r(6),c=r.n(o),a=r(7),i=r(8),h=(r(23),r(13)),l=(r(25),r(2)),d=r(3),b=r(5),u=r(4),j=r(1),p=function(e){Object(b.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).onEnter=function(t){e.setState({timeoutID:setTimeout((function(){e.setState({isHovered:!0})}),1e3)})},e.resetCard=function(t){clearTimeout(e.state.timeoutID),e.setState({timeoutID:0,isHovered:!1})},e.state={isHovered:!1,timeoutID:0},e}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.email,s=e.id,n=e.phone,o=e.website;return this.state.isHovered?Object(j.jsx)("div",{className:"bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc grid-item",onMouseLeave:this.resetCard,children:Object(j.jsxs)("div",{className:"br2 shadow-1 infobox",children:[Object(j.jsx)("h2",{className:"",children:t}),Object(j.jsx)("p",{className:"",children:r}),Object(j.jsx)("p",{className:"",children:n}),Object(j.jsx)("p",{className:"",children:o})]})}):Object(j.jsxs)("div",{className:"bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc grid-item",onMouseEnter:this.onEnter,onMouseLeave:this.resetCard,children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(s,"?200x200"),alt:""}),Object(j.jsxs)("div",{className:"br2 shadow-1 infobox",children:[Object(j.jsx)("h2",{className:"",children:t}),Object(j.jsx)("p",{className:"",children:r})]})]})}}]),r}(n.Component),O=function(e){var t=e.robots;return Object(j.jsx)("div",{className:"grid-container",children:t.map((function(e,r){return Object(j.jsx)(p,{id:t[r].id,name:t[r].name,email:t[r].email,phone:t[r].phone,website:t[r].website},r)}))})},m=function(e){e.searchfield;var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue code searchbox",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(j.jsx)("div",{className:"scrollbox",style:{overflowY:"scroll"},children:e.children})},v=function(e){Object(b.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(l.a)(this,r),(s=t.call(this,e)).state={hasError:!1},s}return Object(d.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Oops. An Error has occured."}):this.props.children}}]),r}(n.Component),g=(r(27),r(12),"CHANGE_SEARCH_FIELD"),x="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS",N="REQUEST_ROBOTS_FAILED",E=function(e){Object(b.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,r=e.onSearchChange,s=e.robots,n=e.isPending,o=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n?Object(j.jsx)("h1",{className:"tc",children:"Loading..."}):Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"blanka4",children:"RoboFriends"}),Object(j.jsx)("div",{className:"divider"}),Object(j.jsx)(m,{searchChange:r}),Object(j.jsx)(f,{children:Object(j.jsx)(v,{children:Object(j.jsx)(O,{robots:o})})})]})}}]),r}(n.Component),w=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((r=t.target.value,{type:g,payload:r}));var r},onRequestRobots:function(){return e((function(e){e({type:x}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:y,payload:t})})).catch((function(t){return e({type:N,payload:t})}))}))}}}))(E),C={searchField:""},R={isPending:!1,robots:[],error:""},S=Object(i.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===g?Object.assign({},e,{searchField:t.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{robots:t.payload,isPending:!1});case N:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),D=Object(i.c)(S,i.a.apply(void 0,[h.a].concat(Object(s.a)([]))));c.a.render(Object(j.jsx)(a.a,{store:D,children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1820c599.chunk.js.map