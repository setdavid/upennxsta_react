(this.webpackJsonpupennxsta_react=this.webpackJsonpupennxsta_react||[]).push([[0],{50:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e){e.exports=JSON.parse("{}")},88:function(e){e.exports=JSON.parse("{}")},89:function(e){e.exports=JSON.parse("{}")},90:function(e){e.exports=JSON.parse("{}")},91:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),r=c.n(s),i=c(14),a=c.n(i),l=(c(50),c(9)),o=c(3),d="data_loaded",j="data_not_loaded",b={dataLoaded:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{dataLoaded:!0});case j:return Object(o.a)(Object(o.a)({},e),{},{dataLoaded:!1});default:return e}},h=c(40),x=c.n(h),O=["1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0","1ZN7dcgboL7HMCYf_e0PtCOzKOH566y8dF8kaHvt330s","1VJZMvqzQNqxfa2Ud49ruTx-2lidEJts-DC4wge2mFzI","1SfnXN6scMUBBJkGZNu7w35FBtDLzL-4OI5MZ34-LBiI"],m=new Array(O.length),v=function e(t,c,n,s){n<t.length?x.a.init({key:t[n],simpleSheet:!0}).then((function(r){c[n]=r,f(r),e(t,c,n+1,s)})):(console.log("done_data_retrieval"),s())},f=function(e){e.forEach((function(e){if(0!=e.images.length){var t=e.images;e.images=t.split(";")}}))},g=function(e,t,c){var s=-1;return e.map((function(e){return s++,Object(n.jsx)(t,Object(o.a)({id:c+"-"+s},e),s)}))},p="open_slider",N="close_slider",w=function(){return{type:N,payload:{}}},y={opened:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(o.a)(Object(o.a)({},e),{},{opened:!0});case N:return Object(o.a)(Object(o.a)({},e),{},{opened:!1});default:return e}},C=c(7),S=function(e){if(e&&null!=e){var t=document.querySelector(e);if(null!=t){var c=t.getBoundingClientRect().top-document.querySelector("#main-content").getBoundingClientRect().top-H;console.log("".concat(e,": ").concat(t.getBoundingClientRect().top)),window.scrollTo({top:c,left:0,behavior:"smooth"})}}},z=function(){window.scrollTo({top:0,behavior:"smooth"})},E=c(41),H=82,T=function(e){return e({type:p,payload:{}})},A=function(e,t){return e?function(e){return e(w())}(t):T(t)},L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navslider.opened})),c=Object(l.c)((function(e){return e.navbar.transparent})),s={minHeight:H,height:H};return c&&(s=Object(o.a)(Object(o.a)({},s),{backgroundColor:"transparent",boxShadow:"none",color:"white"})),Object(n.jsx)("nav",{style:s,className:"navbar navbar-expand-md container-fluid d-flex align-items-center",children:Object(n.jsx)("div",{className:"navbar-container container",children:Object(n.jsx)("div",{className:"row navbar-row",children:Object(n.jsxs)("div",{className:"navbar-col col-12 d-flex justify-content-between align-items-center",children:[Object(n.jsx)("div",{className:"navbar-brand-container d-flex align-items-center",children:Object(n.jsx)(C.b,{onClick:z,to:"/",className:"navbar-brand h1",children:"UPENN\xa0\xd7\xa0STA"})}),Object(n.jsx)("div",{className:"d-none d-md-block",children:Object(n.jsxs)("div",{className:"navTo-group d-flex align-items-center",children:[Object(n.jsx)("div",{children:Object(n.jsx)(C.b,{onClick:z,to:"/about-us",children:"About Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(C.b,{onClick:z,to:"/what-weve-done",children:"What We've Done"})}),Object(n.jsx)("div",{children:Object(n.jsx)(C.b,{onClick:z,to:"/recent-updates",children:"Recent Updates"})})]})}),Object(n.jsx)(E.a,{size:"2rem",style:{cursor:"pointer",opacity:t?"0":"1"},className:"navbar-toggler d-block d-md-none",onClick:function(){return A(t,e)}})]})})})})},R=function(){return Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"container",style:{textAlign:"center",fontSize:"100px"},children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{style:{marginTop:H},className:"col-12",children:"LOADING!"})})})})},_=(c(73),c(74),c(75),c(76),c(77),c(78),c(79),c(80),c(81),c(82),c(83),c(84),c(85),c(86),c(22)),P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navslider.opened})),c=document.body.style;c.overflowY=t?"hidden":"visible";var s=function(){e(w()),z()};return Object(n.jsxs)("div",{style:t?{width:"100%",opacity:"1"}:{width:"0",opacity:"0"},id:"nav-slider",className:"nav-slider d-flex flex-column",children:[Object(n.jsx)("div",{className:"nav-slider-item",children:Object(n.jsx)(_.b,{size:"2rem",style:{cursor:"pointer",color:"white"},className:"navbar-toggler d-block",onClick:function(){return A(t,e)}})}),Object(n.jsx)("div",{className:"nav-slider-item",children:Object(n.jsx)(C.b,{onClick:s,style:{fontWeight:500,fontSize:"1.5rem"},to:"/",children:"UPENN\xa0\xd7\xa0STA"})}),Object(n.jsx)("div",{className:"nav-slider-item",children:Object(n.jsx)(C.b,{onClick:s,to:"/about-us",children:"About Us"})}),Object(n.jsx)("div",{className:"nav-slider-item",children:Object(n.jsx)(C.b,{onClick:s,to:"/what-weve-done",children:"What We've Done"})}),Object(n.jsx)("div",{className:"nav-slider-item",children:Object(n.jsx)(C.b,{onClick:s,to:"/recent-updates",children:"Recent Updates"})})]})},F=c(5),U=function(e){var t=e.url,c=e.minHeight,s=e.backgroundSize,r=e.roundedCorners,i=e.float,a=e.styles,l=e.classes,d=e.children,j={minHeight:c,backgroundImage:"url(".concat(t,")"),backgroundSize:s};return i&&(j=Object(o.a)(Object(o.a)({},j),{},{maxHeight:c})),Object(n.jsx)("div",{style:Object(o.a)(Object(o.a)({},j),a),className:"".concat(l||""," ").concat(r?"rounded-corners":""," \n        ").concat(i?"responsive-image-float":"","\n        ").concat("left"===i?"float-left-margin float-md-left":"right"===i?"float-right-margin float-md-right":""," responsive-image"),children:d})},I=c(15),B=function(e){var t=e.styles,c=e.classes,r=e.children,i=Object(s.useRef)(),a=Object(s.useState)(1),l=Object(I.a)(a,2),d=l[0],j=l[1],b=function(){if(null!=i.current){var e=1*H,t=i.current.getBoundingClientRect(),c=t.height,n=t.top,s=t.bottom;n<=e&&s>=e?j(1*(s-e)/c):n>=e&&s>=e?j(1):n<=e&&s<=e&&j(0)}};return Object(s.useEffect)((function(){return window.addEventListener("scroll",b),function(){return window.removeEventListener("scroll",b)}}),[i.current]),Object(n.jsx)("div",{className:"".concat(c||""),ref:i,style:Object(o.a)({width:"100%",zIndex:"1000",transition:"opacity 0.01s",opacity:"".concat(d)},t),children:r})},D=function(e){var t=e.text,c=e.subtext,s=e.textFont,r=e.subtextFont,i=e.textSize,a=e.subtextSize,l=e.isJumbotron,o=e.fadePassNavbar,d=e.roundedCorners,j=e.styles,b=e.classes,u=e.children,h=Object(n.jsx)("div",{style:{fontFamily:s,fontSize:i},className:"text-over ".concat(l&&"text-over-jumbotron"),children:t}),x=Object(n.jsx)("div",{style:{fontFamily:r,fontSize:a},className:"subtext-over ".concat(l&&"subtext-over-jumbotron"),children:c});return Object(n.jsxs)("div",{style:j,className:"image-frame ".concat(b||""," ").concat(d?"rounded-corners":""),children:[Object(n.jsx)("div",{className:"img-tint"}),u,Object(n.jsxs)("div",{className:"text-container",children:[o?Object(n.jsx)(B,{children:h}):h,o?Object(n.jsx)(B,{children:x}):x]})]})},M=c(93),W=c(92),J=c(28),q=function(e){var t=e.urls,c=e.minHeight,r=e.auto,i=e.styles,a=e.classes,l=e.children,d=function(e){var t=e.leftButton,c="30%";return Object(n.jsx)("div",{style:{width:c},className:"slideshow-scroll-button d-flex align-items-center justify-content-".concat(t?"start":"end"),children:t?Object(n.jsx)(J.a,{onClick:t?p:g,size:c}):Object(n.jsx)(J.b,{onClick:t?p:g,size:c})})},j=[];if(t&&t.length>0){for(var b=0;b<t.length;b++)j[b]={id:b,url:t[b],prev:null,next:null};for(var u=0;u<j.length;u++)u+1<j.length?j[u].next=j[u+1]:u+1===j.length&&(j[u].next=j[0]),u-1>=0?j[u].prev=j[u-1]:u-1===-1&&(j[u].prev=j[j.length-1])}var h=Object(s.useRef)(j),x=Object(s.useState)(0),O=Object(I.a)(x,2),m=O[0],v=O[1];Object(s.useEffect)((function(){var e=null;return t&&t.length>0&&h.current.length>0&&r&&(e=setTimeout((function(){console.log("next"),g()}),6e3)),function(){return r&&null!=e&&f(e)}}),[m]);var f=function(e){console.log("auto slideshow image unmount"),clearTimeout(e)},g=function(){console.log("next image"),v(h.current[m].next.id)},p=function(){v(h.current[m].prev.id)};return Object(n.jsxs)("div",{style:Object(o.a)(Object(o.a)({},i),{},{minHeight:c}),className:"".concat(a||""," slideshow d-flex align-items-center"),children:[Object(n.jsx)(M.a,{children:Object(n.jsx)(W.a,{timeout:r?2e3:500,classNames:"fade",children:function(){if(t&&t.length>0&&h.current.length>0)return Object(n.jsx)(U,{styles:{transitionDuration:"".concat(r?2e3:500,"ms")},url:h.current[m].url,minHeight:c,backgroundSize:"cover",classes:"slideshow-image"})}()},h.current[m].id)}),!r&&Object(n.jsxs)("div",{style:{position:"absolute",height:"100%",width:"100%"},className:"d-flex justify-content-between",children:[Object(n.jsx)(d,{leftButton:!0}),Object(n.jsx)(d,{})]}),l]})},G="transparentize_navbar",V="fill_navbar",Y={transparent:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(o.a)(Object(o.a)({},e),{},{transparent:!0});case V:return Object(o.a)(Object(o.a)({},e),{},{transparent:!1});default:return e}},Z=function(e){var t=e.styles,c=e.classes,r=e.children,i=Object(s.useRef)(),a=Object(l.b)(),o=function(){if(null!=i.current){var e=i.current.getBoundingClientRect(),t=e.top,c=e.bottom;a(t<=H&&c>=H?{type:G,payload:{}}:{type:V,payload:{}})}};Object(s.useEffect)((function(){return o(),window.addEventListener("scroll",o),d}),[i.current]);var d=function(){console.log("setNavbarTrans unmount"),window.removeEventListener("scroll",o)};return Object(n.jsx)("div",{ref:i,style:t,className:"".concat(c||""),children:r})},X=function(e){var t=e.text,c=e.subtext,s=e.height,r=e.styles,i=e.classes,a=e.children,l={minHeight:s,height:s},d={minHeight:"calc(".concat(s," - ").concat(H,"px)"),height:"calc(".concat(s," - ").concat(H,"px)")},j=Object(o.a)({},l);return ue&&(j=Object(o.a)(Object(o.a)({},l),d)),Object(n.jsx)("div",{style:Object(o.a)(Object(o.a)({},j),r),className:"".concat(i||""," fixed-background jumbotron"),children:Object(n.jsx)(Z,{children:Object(n.jsx)(D,{text:t,subtext:c,isJumbotron:!0,fadePassNavbar:!0,children:a})})})},Q=function(e){var t=e.color,c=e.roundedCorners,s=e.styles,r=e.classes,i=e.children;return Object(n.jsx)("div",{style:Object(o.a)(Object(o.a)({},s),{},{backgroundColor:t}),className:"colored-card off-white-background ".concat(r||""," ").concat(c?"rounded-corners":""),children:i})},$=function(e){var t=e.id,c=e.styles,s=e.classes,r=e.children,i=e.onClick;return Object(n.jsx)("div",{id:t,onClick:i,style:Object(o.a)({},c),className:"rounded-button ".concat(s||""),children:r})},ee=c(42),te=function(e){var t=e.id,c=e.title,s=e.subtitle,r=e.date,i=e.text,a=e.images,l=e.noHr;return Object(n.jsxs)("div",{id:t||"",className:"ruc pb-0",children:[l?"":Object(n.jsx)("hr",{className:"mar-bot-1p5rem"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 pb-0",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 pad-bot-1p5rem",children:[Object(n.jsx)("div",{className:"h3",children:c}),Object(n.jsx)("div",{className:"h6",children:s}),Object(n.jsxs)("div",{style:{fontSize:"0.75rem"},className:"p mb-0",children:[Object(n.jsx)(ee.a,{}),"\xa0\xa0",r]})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 pad-bot-1p5rem",children:[a&&a.length>0?Object(n.jsx)(U,{url:a[0],minHeight:"300px",backgroundSize:"contain",float:"right"}):"",Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:i},style:{textIndent:"48px"}})]})})]})})]})},ce=(c(87),c(17)),ne=c(20),se="img/college-students.jpg",re=function(e){var t=e.text,c=e.url;return Object(n.jsx)(D,{text:t,textFont:"inherit",textSize:"2rem",roundedCorners:!0,children:Object(n.jsx)(U,{url:c,minHeight:"300px",backgroundSize:"cover"})})},ie=function(e){return console.log(e),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)(X,{text:"COMMUNITY POWERED",subtext:"A community based research group centered in Philadelphia",height:"100vh",children:[Object(n.jsx)(q,{urls:["img/group_picture2.jpg","img/group_meeting1.jpg","img/group_picture3.jpg","img/group_meeting2.jpg"],minHeight:"100vh",auto:!0}),Object(n.jsx)(B,{classes:"scroll-learn-more fadePassNavbar bobbing-anim",children:Object(n.jsxs)("div",{style:{cursor:"pointer"},onClick:function(){return S("#container-1")},children:["Learn more",Object(n.jsx)("br",{}),Object(n.jsx)(ce.a,{size:"2rem"})]})})]}),Object(n.jsx)("div",{id:"container-1",className:"container-fluid",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12 h1 text-center theme-1-text",children:"STRIVING TO MAKE A DIFFERENCE ONE STEP AT A TIME"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-md-6 order-md-2",children:Object(n.jsx)(U,{url:"img/group_picture1.jpg",minHeight:"300px",backgroundSize:"cover",roundedCorners:!0})}),Object(n.jsxs)("div",{className:"col-12 col-md-6 order-md-1",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h4",{children:"Who we are"}),Object(n.jsx)("p",{children:"We are a research group stemming from a partnership between the University of Pennsylvania Graduate School of Education (Penn GSE) and the Saint Thomas Aquinas Church (STA). We discuss issues of educational equity and center our projects around this important issue."})]})}),Object(n.jsxs)("div",{id:"symbol-group",className:"row d-flex align-items-center justify-content-center",children:[Object(n.jsx)("div",{className:"col-3 p-0",children:Object(n.jsx)(U,{url:"img/upenn-symbol.png",minHeight:"150px",backgroundSize:"contain"})}),Object(n.jsx)("div",{className:"col-3 p-0 text-center",children:Object(n.jsx)(ce.d,{size:"3rem"})}),Object(n.jsx)("div",{className:"col-3 p-0",children:Object(n.jsx)(U,{url:"img/sta-symbol-trans.png",minHeight:"150px",backgroundSize:"contain"})})]})]})]})]})}),Object(n.jsxs)("div",{id:"container-2",className:"container-fluid off-white-background",children:[Object(n.jsx)("div",{id:"container-2-background-2"}),Object(n.jsx)("div",{id:"container-2-background-1"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12 h1 text-center theme-1-text",children:"WE ARE..."})}),Object(n.jsxs)("div",{id:"we-are-1",className:"we-are row",children:[Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(re,{text:"Middle Schoolers",url:"img/middle-schoolers.JPG"})}),Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(re,{text:"High Schoolers",url:se})}),Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(re,{text:"College Students",url:se})})]}),Object(n.jsxs)("div",{id:"we-are-2",className:"we-are row",children:[Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(re,{text:"Educators",url:"img/educators1.JPG"})}),Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(re,{text:"Parents",url:"img/parents1.jpg"})})]}),Object(n.jsx)("div",{id:"we-are-3",className:"we-are row",children:Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(re,{text:"A Community",url:"img/park_group1.jpg"})})})]})]}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{id:"container-3",className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-md-4 d-flex align-items-stretch",children:Object(n.jsxs)(Q,{roundedCorners:!0,classes:"d-flex flex-column justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(ce.e,{size:"4rem"}),Object(n.jsx)("br",{}),Object(n.jsx)("h4",{children:"Learn more about us"}),Object(n.jsx)("p",{children:"Our group started as a way to teach students about using research to answer questions that interested them. However, through the years, our focus has gradually shifted."})]}),Object(n.jsxs)($,{children:["Learn more\xa0",Object(n.jsx)(ne.a,{size:"1.5rem"})]})]})}),Object(n.jsx)("div",{className:"col-12 col-md-4 d-flex align-items-stretch",children:Object(n.jsxs)(Q,{roundedCorners:!0,classes:"d-flex flex-column justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(ce.c,{size:"4rem"}),Object(n.jsx)("br",{}),Object(n.jsx)("h4",{children:"Conferences"}),Object(n.jsx)("p",{children:"Our group has presented various research projects at several conferences."})]}),Object(n.jsx)(C.b,{to:{pathname:"/what-weve-done",hash:"conferences"},children:Object(n.jsxs)($,{children:["Learn more\xa0",Object(n.jsx)(ne.a,{size:"1.5rem"})]})})]})}),Object(n.jsx)("div",{className:"col-12 col-md-4 d-flex align-items-stretch",children:Object(n.jsxs)(Q,{roundedCorners:!0,classes:"d-flex flex-column justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(ce.b,{size:"4rem"}),Object(n.jsx)("br",{}),Object(n.jsx)("h4",{children:"Publications"}),Object(n.jsx)("p",{children:"Many members of our group have published pieces in academic journals."})]}),Object(n.jsxs)($,{children:["Learn more\xa0",Object(n.jsx)(ne.a,{size:"1.5rem"})]})]})})]})})}),Object(n.jsx)("div",{className:"container-fluid off-white-background",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12 text-center",children:Object(n.jsx)("h1",{children:"Most Recent Update"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 ",children:[Object(n.jsx)(te,Object(o.a)(Object(o.a)({},m[3][0]),{},{noHr:!0})),Object(n.jsx)(C.b,{to:"/recent-updates",children:Object(n.jsxs)($,{id:"rb-past-updates",styles:{backgroundColor:"black"},children:["Past updates \xa0",Object(n.jsx)(ne.a,{size:"1.5rem"})]})})]})})]})})]})},ae=function(e){return console.log(e),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("div",{style:{height:"1000vh"},children:"about us hellow"}),Object(n.jsx)("div",{id:"target",style:{backgroundColor:"red"}})]})},le=function(e){var t=e.id,c=e.title,r=e.subtitle,i=e.text,a=e.images,l=e.backgroundColor,o=1e3,d=Object(s.useRef)(),j=Object(s.useRef)(0),b=Object(s.useState)(!1),u=Object(I.a)(b,2),h=u[0],x=u[1];Object(s.useEffect)((function(){return j.current=d.current.getBoundingClientRect().height,x(!1),x(!1)}),[]);return Object(n.jsx)("div",{id:t||"",className:"wwdc",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("div",{style:{backgroundColor:l},className:"row wwdc-title-row",children:Object(n.jsxs)("div",{className:"col-12 wwdc-title",children:[Object(n.jsx)("div",{className:"h5",children:c}),Object(n.jsx)("div",{className:"p mb-0",children:r})]})}),Object(n.jsx)("div",{className:"row off-white-background wwdc-content",children:Object(n.jsx)("div",{style:{transitionDuration:"".concat(o,"ms"),maxHeight:h?"".concat(2*j.current,"px"):"0"},className:"col-12 pb-0",children:Object(n.jsxs)("div",{ref:d,children:[Object(n.jsx)("div",{className:"row pad-top-1p5rem",children:Object(n.jsx)("div",{style:{transitionDuration:"".concat(o,"ms"),left:h?"0":"-100%"},className:"col-12 wwdc-paragraphs",dangerouslySetInnerHTML:{__html:i}})}),a&&a.length>0?Object(n.jsx)("div",{className:"row d-flex justify-content-center",children:Object(n.jsx)("div",{style:{transitionDuration:"".concat(o,"ms"),left:h?"0":"100%"},className:"col-12 col-md-10 wwdc-slideshow",children:a.length>1?Object(n.jsx)(q,{urls:a,minHeight:"350px"}):Object(n.jsx)(U,{url:a[0],minHeight:"350px",backgroundSize:"cover"})})}):""]})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{onClick:function(){S("#".concat(t)),x(!h)},style:{backgroundColor:l},className:"col-12 wwdc-read-more",children:[Object(n.jsx)("h6",{children:h?"Collapse":"Read More"}),Object(n.jsx)("div",{style:{transitionDuration:"".concat(o,"ms"),transform:h?"rotate(180deg)":""},className:"wwdc-chevron",children:Object(n.jsx)(_.a,{color:"white",size:"2rem"})})]})})]})})})},oe=(c(88),c(89),c(90),function(e){var t=function(e){var t=e.backgroundColor,c={marginLeft:"10px"};return e.left||(c={marginRight:"10px"}),Object(n.jsx)("div",{style:Object(o.a)(Object(o.a)({},c),{},{height:"5rem",width:"10px",backgroundColor:t}),className:"d-none d-lg-block"})};return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(X,{text:"WHAT WE'VE DONE",subtext:"An overview of our works over the years",height:"85vh",children:Object(n.jsx)(U,{url:"img/community.jpg",minHeight:"85vh",backgroundSize:"cover"})}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-lg-4",children:Object(n.jsxs)("div",{id:"conferences",className:" h1 text-center d-flex justify-content-center align-items-center",children:["CONFERENCES ",Object(n.jsx)(t,{backgroundColor:"var(--theme-color-1)",left:!0})]})}),Object(n.jsx)("div",{className:"col-12 col-lg-8",children:g(m[0],(function(e){return Object(n.jsx)(le,Object(o.a)(Object(o.a)({},e),{},{backgroundColor:"var(--theme-color-1)"}))}),"conf")})]})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-lg-8 order-2 order-lg-1",children:g(m[1],(function(e){return Object(n.jsx)(le,Object(o.a)(Object(o.a)({},e),{},{backgroundColor:"var(--theme-color-2)"}))}),"publ")}),Object(n.jsx)("div",{className:"col-12 col-lg-4 order-1 order-lg-2",children:Object(n.jsxs)("div",{id:"publications",className:" h1 text-center d-flex justify-content-center align-items-center",children:[Object(n.jsx)(t,{backgroundColor:"var(--theme-color-2)"})," PUBLICATIONS"]})})]})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-lg-4",children:Object(n.jsxs)("div",{id:"other-works",className:" h1 text-center d-flex justify-content-center align-items-center",children:["OTHER WORKS ",Object(n.jsx)(t,{backgroundColor:"black",left:!0})]})}),Object(n.jsx)("div",{className:"col-12 col-lg-8",children:g(m[2],(function(e){return Object(n.jsx)(le,Object(o.a)(Object(o.a)({},e),{},{backgroundColor:"black"}))}),"other")})]})})]})]})}),de=function(e){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(X,{text:"RECENT UPDATES",subtext:"Read about our most recent projects",height:"85vh",children:Object(n.jsx)(U,{url:"img/wall_art1.jpg",minHeight:"85vh",backgroundSize:"cover"})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:g(m[3],te,"ru")})})})]})},je=function(){return Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"container",style:{textAlign:"center",fontSize:"100px"},children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{style:{marginTop:H},className:"col-12",children:"PAGE NOT FOUND!"})})})})},be=function(){var e=Object(l.b)(),t=Object(F.f)();return Object(s.useEffect)((function(){e(w()),z()}),[t]),Object(n.jsxs)(F.c,{children:[Object(n.jsx)(F.a,{exact:!0,path:"/",component:ie}),Object(n.jsx)(F.a,{path:"/about-us",component:ae}),Object(n.jsx)(F.a,{path:"/what-weve-done",component:oe}),Object(n.jsx)(F.a,{path:"/recent-updates",component:de}),Object(n.jsx)(F.a,{path:"",component:je})]})},ue=!1,he=function(){return Object(n.jsx)("div",{style:ue?{marginTop:H}:{},id:"main-content",children:Object(n.jsx)(be,{})})},xe=function(){return Object(n.jsx)("div",{id:"footer",className:"container-fluid",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"footer-section col-12 col-md-4 d-flex-column justify-content-start",children:[Object(n.jsx)("h5",{children:"Quick Links"}),Object(n.jsx)("div",{children:Object(n.jsx)(C.b,{to:"/about-us",children:"About Us"})}),Object(n.jsx)("div",{children:Object(n.jsx)(C.b,{to:"/what-weve-done",children:"What We've Done"})}),Object(n.jsx)("div",{children:Object(n.jsx)(C.b,{to:"/recent-updates",children:"Recent Updates"})})]}),Object(n.jsxs)("div",{className:"footer-section col-12 col-md-4 d-flex-column justify-content-start",children:[Object(n.jsx)("h5",{children:"Contact Us"}),Object(n.jsx)("div",{children:"sainthomas@sas.upenn.edu"})]}),Object(n.jsxs)("div",{className:"footer-section col-12 col-md-4 d-flex-column justify-content-start",children:[Object(n.jsx)("h5",{children:"Our Vision"}),Object(n.jsx)("p",{children:"Merry Christmas and a Happy New Year! This is filler text"})]})]}),Object(n.jsx)("div",{style:{minHeight:"10rem",height:"10rem"},className:"row"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{style:{fontSize:"0.75rem"},className:"col-12 d-flex justify-content-center align-items-center",children:"\xa9 UPennXSTA"})})]})})};var Oe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.dataLoad.dataLoaded}));return Object(s.useEffect)((function(){v(O,m,0,(function(){e({type:d,payload:{}})})),console.log("here is the data"),console.log(m)}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:t?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(L,{}),Object(n.jsx)(P,{}),Object(n.jsx)(he,{}),Object(n.jsx)(xe,{})]}):Object(n.jsx)(R,{})})})},me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))},ve=c(19),fe=Object(ve.b)({navslider:k,navbar:K,dataLoad:u}),ge=Object(ve.c)(fe);a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(C.a,{children:Object(n.jsx)(l.a,{store:ge,children:Object(n.jsx)(Oe,{})})})}),document.getElementById("root")),me()}},[[91,1,2]]]);
//# sourceMappingURL=main.1a3cf7c0.chunk.js.map