(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),c=n.n(l),u=n(8),i=n(6),o=n(12),m=n(25),s=n(10);n(33);var E=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var d=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},v=n(11),f=n.n(v),g={getEvents:function(){return f.a.get("/api/Events")},getEvent:function(e){return f.a.get("/api/Events/"+e)},deleteEvent:function(e){return f.a.delete("/api/Events/"+e)},saveEvent:function(e){return f.a.post("/api/events",e)}};function h(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function p(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function b(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(52);function O(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function j(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function N(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function z(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function y(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var w=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)({}),i=Object(s.a)(c,2),v=i[0],f=i[1];function w(){g.getEvents().then(function(e){return l(e.data)}).catch(function(e){return console.log(e)})}function k(e){var t=e.target,n=t.name,a=t.value;f(Object(m.a)({},v,Object(o.a)({},n,a)))}return Object(a.useEffect)(function(){w()},[]),r.a.createElement(h,{fluid:!0},r.a.createElement(p,null,r.a.createElement(b,{size:"md-6"},r.a.createElement(d,null,r.a.createElement("h1",null,"What Events Should I Read?")),r.a.createElement("form",null,r.a.createElement(N,{onChange:k,name:"Event",placeholder:"Event (required)"}),r.a.createElement(N,{onChange:k,name:"Organizer",placeholder:"Organizer (required)"}),r.a.createElement(z,{onChange:k,name:"Purpose",placeholder:"Purpose (Optional)"}),r.a.createElement(y,{disabled:!(v.Organizer&&v.Event),onClick:function(e){e.preventDefault(),v.Event&&v.Organizer&&g.saveEvent({Event:v.Event,Organizer:v.Organizer,Purpose:v.Purpose}).then(function(e){return w()}).catch(function(e){return console.log(e)})}},"Submit Event"))),r.a.createElement(b,{size:"md-6 sm-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Events On My List")),n.length?r.a.createElement(O,null,n.map(function(e){return r.a.createElement(j,{key:e._id},r.a.createElement(u.b,{to:"/Events/"+e._id},r.a.createElement("strong",null,e.Event," by ",e.Organizer)),r.a.createElement(E,{onClick:function(){return t=e._id,void g.deleteEvent(t).then(function(e){return w()}).catch(function(e){return console.log(e)});var t}}))})):r.a.createElement("h3",null,"No Results to Display"))))};var k=function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),l=n[0],c=n[1],o=Object(i.f)().id;return Object(a.useEffect)(function(){g.getEvent(o).then(function(e){return c(e.data)}).catch(function(e){return console.log(e)})},[]),r.a.createElement(h,{fluid:!0},r.a.createElement(p,null,r.a.createElement(b,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,l.Event," by ",l.Organizer)))),r.a.createElement(p,null,r.a.createElement(b,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Purpose"),r.a.createElement("p",null,l.Purpose)))),r.a.createElement(p,null,r.a.createElement(b,{size:"md-2"},r.a.createElement(u.b,{to:"/"},"\u2190 Back to Organizers"))))};var x=function(){return r.a.createElement(h,{fluid:!0},r.a.createElement(p,null,r.a.createElement(b,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var P=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var C=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/Events"]},r.a.createElement(w,null)),r.a.createElement(i.a,{exact:!0,path:"/Events/:id"},r.a.createElement(k,null)),r.a.createElement(i.a,null,r.a.createElement(x,null)))))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1a6ecabc.chunk.js.map