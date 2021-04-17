(this["webpackJsonpportfolio-website-spa"]=this["webpackJsonpportfolio-website-spa"]||[]).push([[0],{40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},48:function(e,t,i){},53:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(16),a=i.n(c),o=(i(40),i(8)),s=(i(41),i(2)),r=(i(42),i(9)),l=i(0),d=Object(n.createContext)(),b=function(e){var t=e.children,i=Object(n.useState)({active:!1}),c=Object(o.a)(i,2),a=c[0],s=c[1];return Object(l.jsx)(d.Provider,{value:[a,s],children:t})},j=function(e){var t=e.children,i=Object(n.useContext)(d),c=Object(o.a)(i,2)[1],a=Object(n.useCallback)((function(){c((function(e){return{active:!e.active}}))}));return Object(l.jsx)("div",{onMouseEnter:a,onMouseLeave:a,children:t})},u=function(){return Object(l.jsx)("section",{className:"home-container",children:Object(l.jsxs)("div",{className:"home-text-container","data-aos":"fade-up","data-aos-duration":"1000",children:[Object(l.jsxs)("div",{children:["Hello, I am ",Object(l.jsx)("span",{className:"photo-container",children:"Elena"})," a Full Stack developer with a multidisciplinary design background. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," Oh! and I am based in Berlin"]}),Object(l.jsx)(j,{children:Object(l.jsx)(r.b,{exact:!0,className:"nav-item nav-item-extra",activeClassName:"active",to:"/about",children:Object(l.jsx)("div",{children:"my story_____"})})})]})})},h=(i(48),i(35)),m=i.n(h),p=function(){var e=[{title:"",textContent:[],styles:{width:"100px",height:"100px",borderRadius:"50%",backgroundImage:'url("https://media.giphy.com/media/WRshFdOvxJzQsL9XK5/giphy.gif")',backgroundSize:"cover"}},{title:"",textContent:["My story starts right after my masters degree in Architecture and Engineering. ","While working as an architect I founded the creative studio \u2018We are still bold and beautiful\u2019 specialized in graphic design and street-wear fashion.","In 2017 I moved to Berlin where I worked as a Project Manager for a SaaS company. This is when I fell for UI/UX and developed solid digital design skills.","Since 2020 I truly dedicated my efforts to become a Full-stack developer. My main goal is to join an amazing team in order to share my experience and expand my knowledge."],styles:{width:"400px",textAlign:"left",left:"35%",background:"linear-gradient(180deg, rgba(152, 197, 200, 1) 38%, rgba(243, 233, 155, 1) 100%)"}},{title:"Technologies",textContent:["HTML","CSS","JavaScript","Typescript","React.js","React Native","MongoDB","Express.js","Node.js"],styles:{width:"240px",textAlign:"center",left:"25%",top:"10%",background:"linear-gradient(180deg, rgba(255, 162, 117, 1) 38%, rgba(210, 85, 239, 1) 100%)"}},{title:"Skills",textContent:["Front-end development","Mobile Apps","Wireframing","Prototyping","Graphic Design","Branding"],styles:{width:"160px",textAlign:"center",left:"35%",top:"40%",background:"linear-gradient(180deg, rgba(152, 216, 141, 1) 8%, rgba(0, 235, 207, 1) 100%)"}},{title:"Tools",textContent:["Figma","Sketch","Adobe Suite","Invision","Treejack"],styles:{width:"100px",textAlign:"center",left:"55%",top:"20%",background:"linear-gradient(180deg, rgba(255, 0, 68, 1) 8%, rgba(255, 222, 132, 1) 100%)"}}].map((function(e,t){var i=e.textContent.map((function(e){return Object(l.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-anchor-placement":"top-bottom",children:e})}));return Object(l.jsx)(m.a,{children:Object(l.jsxs)("div",{className:"about-item-card",style:e.styles,children:[Object(l.jsx)("h4",{className:"about-item-title",children:e.title}),Object(l.jsx)("p",{children:i})]},t)})}));return Object(l.jsxs)("section",{className:"about-container",children:[e,Object(l.jsx)(j,{children:Object(l.jsx)("div",{className:"cv-link",children:Object(l.jsx)("a",{href:"https://drive.google.com/file/d/1VEWZ5UL7Wqn-GEq2iurkVL9Avp4Dvxoq/view?usp=sharing",target:"blank",children:"my full CV_____"})})})]})},x=(i(53),i(12)),g=Object(x.makeResponsive)(Object(x.measureItems)(x.CSSGrid),{maxWidth:1920,minPadding:100}),f=function(e){var t=e.displayProjects;return console.log(t),Object(l.jsx)(g,{className:"grid-inner",component:"div",columns:2,columnWidth:600,gutterWidth:80,gutterHeight:80,layout:x.layout.pinterest,duration:800,easing:"ease-out",children:t})},v=i(26),O=(i(77),function(e){var t=e.projectName,i=e.imgLink,n=e.infoText,c=e.technologiesUsed,a=e.gitHubLink,o=e.websiteLink,s=e.key,r=e.itemHeight,d=e.category;return Object(l.jsxs)("div",{className:"project-card","data-aos":"fade-up","data-aos-duration":"1000",itemHeight:r,children:[Object(l.jsx)("div",{className:"img-container",style:{backgroundImage:"url(".concat(i,")")}}),Object(l.jsx)("div",{className:"banner",style:{backgroundColor:"".concat(function(e){var t;switch(e){case"web-dev":t="#C4C4C4";break;case"branding":t="white";break;case"UI/UX":t="#A67C52";break;default:t="black"}return t}(d))},children:d}),Object(l.jsxs)("div",{className:"info-container",children:[Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsx)("div",{children:t}),Object(l.jsx)("div",{children:n}),Object(l.jsx)("div",{children:c})]}),Object(l.jsxs)("div",{className:"links-container",children:[Object(l.jsx)(j,{children:Object(l.jsx)("a",{href:a,target:"blank",children:Object(l.jsx)(v.a,{className:"fa-icon"})})}),Object(l.jsx)(j,{children:Object(l.jsx)("a",{href:o,target:"blank",children:Object(l.jsx)(v.b,{className:"fa-icon"})})})]})]})]},s)}),k=function(){var e=[{id:"01",imgLink:"https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",projectName:"Time-tracker",infoText:"A simple, handy and colorful app to keep track of your projects",technologiesUsed:"HTML, CSS, JavaScript, React",gitHubLink:"https://github.com/",websiteLink:"https://github.com/",itemHeight:"600",category:"web-dev"},{id:"02",imgLink:"https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",projectName:"Time-tracker",infoText:"A simple, handy and colorful app to keep track of your projects",technologiesUsed:"HTML, CSS, JavaScript, React",gitHubLink:"https://github.com/",websiteLink:"https://github.com/",itemHeight:"600",category:"web-dev"},{id:"03",imgLink:"https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",projectName:"Time-tracker",infoText:"A simple, handy and colorful app to keep track of your projects",technologiesUsed:"HTML, CSS, JavaScript, React",gitHubLink:"https://github.com/",websiteLink:"https://github.com/",itemHeight:"600",category:"UI/UX"},{id:"04",imgLink:"https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",projectName:"Time-tracker",infoText:"A simple, handy and colorful app to keep track of your projects",technologiesUsed:"HTML, CSS, JavaScript, React",gitHubLink:"https://github.com/",websiteLink:"https://github.com/",itemHeight:"600",category:"web-dev"},{id:"05",imgLink:"https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",projectName:"Time-tracker",infoText:"A simple, handy and colorful app to keep track of your projects",technologiesUsed:"HTML, CSS, JavaScript, React",gitHubLink:"https://github.com/",websiteLink:"https://github.com/",itemHeight:"600",category:"branding"},{id:"06",imgLink:"https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",projectName:"Time-tracker",infoText:"A simple, handy and colorful app to keep track of your projects",technologiesUsed:"HTML, CSS, JavaScript, React",gitHubLink:"https://github.com/",websiteLink:"https://github.com/",itemHeight:"600",category:"web-dev"}].map((function(e){return console.log(e.id,e.projectName),Object(l.jsx)("div",{className:"new-card",children:Object(l.jsx)(O,{imgLink:e.imgLink,projectName:e.projectName,infoText:e.infoText,technologiesUsed:e.technologiesUsed,gitHubLink:e.gitHubLink,websiteLink:e.websiteLink,itemHeight:e.itemHeight,category:e.category})},e.id)}));return Object(l.jsx)("section",{className:"projects-container",children:Object(l.jsx)("div",{className:"grid-container",children:Object(l.jsx)(f,{displayProjects:e})})})},y=(i(78),function(){return Object(l.jsxs)("nav",{className:"navbar-container",children:[Object(l.jsx)(j,{children:Object(l.jsx)(r.b,{exact:!0,className:"nav-item",activeClassName:"active",to:"/projects",children:"PROJECTS"})}),Object(l.jsx)(j,{children:Object(l.jsx)(r.b,{exact:!0,className:"nav-item",activeClassName:"active",to:"/about",children:"ABOUT"})})]})}),w=(i(79),function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("div",{className:"footer-links-container",children:[Object(l.jsx)(j,{children:Object(l.jsx)("a",{target:"blank",href:"mailto:elenatsapaki@gmail.com",children:"email____"})}),Object(l.jsx)(j,{children:Object(l.jsx)("a",{target:"blank",href:"https://github.com/ElenaTsap/",children:"github____"})}),Object(l.jsx)(j,{children:Object(l.jsx)("a",{target:"blank",href:"https://www.behance.net/elenatsapaki",children:"behance____"})}),Object(l.jsx)(j,{children:Object(l.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/elena-tsapaki-77424a34/",children:"linkedin____"})})]}),Object(l.jsx)(j,{children:Object(l.jsx)(r.b,{exact:!0,className:"nav-item bottom-nav",activeClassName:"active",to:"/",children:"Home"})})]})}),L=function(){var e=Object(n.useState)({clientX:0,clientY:0}),t=Object(o.a)(e,2),i=t[0],c=t[1],a=function(e){e.pageX,e.pageY;var t=e.clientX,i=e.clientY;c({clientX:t,clientY:i})};return Object(n.useEffect)((function(){return document.addEventListener("mousemove",a,!1),document.addEventListener("mouseenter",a,!1),function(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseenter",a)}}),[]),i},H=function(){var e=L(),t=e.clientX,i=e.clientY,c=Object(n.useContext)(d),a=Object(o.a)(c,1)[0],s=Object(n.useState)(!1),r=Object(o.a)(s,2),b=r[0],j=r[1];return Object(n.useEffect)((function(){var e=function(){return j(!0)},t=function(){return j(!1)};return document.body.addEventListener("mouseenter",e),document.body.addEventListener("mouseleave",t),function(){document.body.removeEventListener("mouseenter",e),document.body.removeEventListener("mouseleave",t)}}),[]),Object(l.jsx)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:9999,pointerEvents:"none"},children:Object(l.jsx)("svg",{width:50,height:50,viewBox:"0 0 50 50",style:{position:"absolute",pointerEvents:"none",left:t,top:i,transform:"translate(-50%, -50%) scale(".concat(a.active?2.5:1,")"),stroke:(a.active,"black"),strokeWidth:1,fill:a.active?"black":"black ",transition:"transform .2s ease-in-out",opacity:b&&t>1?1:0},children:Object(l.jsx)("circle",{cx:"25",cy:"25",r:"8"})})})},N=(i(80),function(){return Object(l.jsxs)("div",{className:"spinner-container",style:{overflow:"hidden"},children:[Object(l.jsx)("div",{className:"sun-element"}),Object(l.jsx)("div",{className:"moon-element"})]})}),S=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){document.body.style.overflow="hidden",setTimeout((function(){c(!1),document.body.style.overflowY="scroll"}),3600)}),[]),Object(l.jsxs)(b,{children:[Object(l.jsx)(H,{}),i?Object(l.jsx)(N,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsx)(s.a,{exact:!0,path:"/projects",children:Object(l.jsx)(k,{})}),Object(l.jsx)(s.a,{exact:!0,path:"/about",children:Object(l.jsx)(p,{})})]}),Object(l.jsx)(w,{})]})]})},T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,82)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),a(e),o(e)}))};a.a.render(Object(l.jsx)(r.a,{basename:"/elenatsap.github.io/react-portfolio",children:Object(l.jsx)(S,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.947e8b67.chunk.js.map