(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[11],{103:function(e,t,o){},104:function(e,t,o){var n={"./About":[70,0,4],"./About.jsx":[70,0,4],"./Education":[66,10,5],"./Education.jsx":[66,10,5],"./Experience":[67,0,2,6],"./Experience.jsx":[67,0,2,6],"./FallbackSpinner":[25],"./FallbackSpinner.jsx":[25],"./Header":[63,8],"./Header.jsx":[63,8],"./Home":[36],"./Home.jsx":[36],"./NavBar":[33],"./NavBar.jsx":[33],"./Projects":[68,0,3],"./Projects.jsx":[68,0,3],"./Social":[37],"./Social.jsx":[37],"./ThemeToggler":[69,1,9],"./ThemeToggler.jsx":[69,1,9],"./projects/ProjectCard":[65,0,7],"./projects/ProjectCard.jsx":[65,0,7]};function r(e){if(!o.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(r)}))}r.keys=function(){return Object.keys(n)},r.id=104,e.exports=r},105:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(13),c=o.n(a),i=(o(75),o(64),o(76),o(28)),l=o(20),s=o(54),d=o(53),j=o(5),h=o(25),b=o(33),u=o(36),f=o(19),m=o(1);var p,x=function(){const[e,t]=Object(n.useState)(null);return Object(n.useEffect)((()=>{fetch(f.a.routes,{method:"GET"}).then((e=>e.json())).then((e=>t(e))).catch((e=>e))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(b.default,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(j.c,{children:Object(m.jsxs)(n.Suspense,{fallback:Object(m.jsx)(h.default,{}),children:[Object(m.jsx)(j.a,{exact:!0,path:"/",component:u.default}),e&&e.sections.map((e=>{const t=r.a.lazy((()=>o(104)("./"+e.component)));return Object(m.jsx)(j.a,{path:e.path,component:()=>Object(m.jsx)(t,{header:e.headerTitle})},e.headerTitle)}))]})})})]})},v=o(29);var g=Object(l.c)(p||(p=Object(v.a)(["\n   body {\n    background-image: ",";\n    background-size: 50%;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n  }\n"])),(e=>{let{theme:t}=e;return t.background_image}));const O={color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},k={color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var C=function(){window.matchMedia=null;const e=Object(s.a)(!0);return Object(m.jsx)(d.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(l.b,{theme:e.value?k:O,children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(i.a,{children:Object(m.jsx)(x,{})})})]})})};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))},19:function(e,t,o){"use strict";t.a={navbar:"/portfolio/profile/navbar.json",routes:"/portfolio/profile/routes.json",home:"/portfolio/profile/home.json",social:"/portfolio/profile/social.json",about:"/portfolio/profile/about.json",education:"/portfolio/profile/education.json",experiences:"/portfolio/profile/experiences.json",projects:"/portfolio/profile/projects.json"}},25:function(e,t,o){"use strict";o.r(t);o(0);var n=o(106),r=o(1);const a={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};t.default=function(){return Object(r.jsx)("div",{style:a.spinnerContainerStyle,children:Object(r.jsx)(n.a,{animation:"grow"})})}},33:function(e,t,o){"use strict";o.r(t);var n,r,a=o(29),c=o(40),i=o(107),l=o(62),s=o(0),d=o(5),j=o(28),h=o(20),b=o(19),u=(o(78),o(1));const f={logoStyle:{width:50,height:40},navBarToggle:{color:"rgb(24, 24, 24)"}},m=h.d.a(n||(n=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(e=>e.theme.navbarTheme.linkColor),(e=>e.theme.navbarTheme.linkHoverColor),(e=>e.theme.accentColor)),p=Object(h.d)(j.b)(r||(r=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(e=>e.theme.navbarTheme.linkColor),(e=>e.theme.navbarTheme.linkHoverColor),(e=>e.theme.accentColor),(e=>e.theme.navbarTheme.linkActiveColor)),x=Object(d.f)((()=>{var e,t,o,n,r,a;const d=Object(s.useContext)(h.a),[j,x]=Object(s.useState)(null),[v,g]=Object(s.useState)(!1),[O,k]=Object(s.useState)(!0),[C,y]=Object(s.useState)(0),_=()=>{const e=window.scrollY;k(!(e>C)),y(e)};return Object(s.useEffect)((()=>(fetch(b.a.navbar,{method:"GET"}).then((e=>e.json())).then((e=>x(e))).catch((e=>e)),window.addEventListener("scroll",_),()=>{window.removeEventListener("scroll",_)})),[]),Object(u.jsx)(c.a,{fixed:"top",expand:"md",className:"navbar-custom && ".concat(O?"navVisible":"navHidden"),variant:"dark",expanded:v,children:Object(u.jsxs)(i.a,{children:[(null===j||void 0===j?void 0:j.logo)&&Object(u.jsx)(c.a.Brand,{href:"/",children:Object(u.jsx)("img",{src:null===j||void 0===j||null===(e=j.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==j&&void 0!==j&&null!==(t=j.logo)&&void 0!==t&&t.height&&null!==j&&void 0!==j&&null!==(o=j.logo)&&void 0!==o&&o.width?{height:null===j||void 0===j||null===(n=j.logo)||void 0===n?void 0:n.height,width:null===j||void 0===j||null===(r=j.logo)||void 0===r?void 0:r.width}:f.logoStyle})}),Object(u.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:()=>g(!v)}),Object(u.jsxs)(c.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsx)(l.a,{className:"me-auto"}),Object(u.jsx)(l.a,{children:j&&(null===(a=j.sections)||void 0===a?void 0:a.map(((e,t)=>"link"===(null===e||void 0===e?void 0:e.type)?Object(u.jsx)(m,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:()=>g(!1),className:"navbar__link",theme:d,children:e.title},e.title):Object(u.jsx)(p,{onClick:()=>g(!1),exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title))))})]})]})})}));t.default=x},36:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(59),a=o.n(r),c=o(48),i=o.n(c),l=o(108),s=o(19),d=o(37),j=o(25),h=(o(103),o(1));const b={buttonStyle:{display:"inline-block",margin:"15px",outline:"0",border:"0",cursor:"pointer",backgroundColor:"#28486a",borderRadius:"4px",padding:"8px 16px",fontSize:"16px",borderBottom:"4px solid #1a2e44",fontWeight:"700",color:"white",lineHeight:"26px"},nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},showMoreStyle:{margin:"25px",fontWeight:"bold",padding:"12px 48px",borderRadius:"25px"}};t.default=function(){const[e,t]=Object(n.useState)(null);return Object(n.useEffect)((()=>{fetch(s.a.home,{method:"GET"}).then((e=>e.json())).then((e=>t(e))).catch((e=>e))}),[]),e?Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{style:b.mainContainer,children:[Object(h.jsxs)("h1",{className:"jt --debug",children:[Object(h.jsx)("span",{className:"jt__row",children:Object(h.jsx)("span",{className:"jt__text",children:"Zeerak Babar"})}),Object(h.jsx)("span",{className:"jt__row jt__row--sibling","aria-hidden":"true",children:Object(h.jsx)("span",{className:"jt__text",children:"Zeerak Babar"})}),Object(h.jsx)("span",{className:"jt__row jt__row--sibling","aria-hidden":"true",children:Object(h.jsx)("span",{className:"jt__text",children:"Zeerak Babar"})}),Object(h.jsx)("span",{className:"jt__row jt__row--sibling","aria-hidden":"true",children:Object(h.jsx)("span",{className:"jt__text",children:"Zeerak Babar"})})]}),Object(h.jsxs)("div",{style:{flexDirection:"row"},children:[Object(h.jsx)("h2",{style:b.inlineChild,children:"I'm\xa0"}),Object(h.jsx)(a.a,{textStyle:{fontWeight:500,fontSize:"1.5em"},options:{loop:!0,autoStart:!0,strings:null===e||void 0===e?void 0:e.roles}})]}),Object(h.jsx)(d.default,{}),Object(h.jsx)(l.a,{style:b.showMoreStyle,href:"https://drive.google.com/file/d/1L_DQrEttChd8E7dD-Z82oRc4pTDa7AKx/view?usp=sharing",variant:"outline-primary",children:"View Resume"})]})}):Object(h.jsx)(j.default,{})}},37:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(60),a=o(19),c=o(1);const i={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10},iconStyleHover:{marginBottom:"1.5%"}};t.default=function(){const[e,t]=Object(n.useState)(null);return Object(n.useEffect)((()=>{fetch(a.a.social,{method:"GET"}).then((e=>e.json())).then((e=>t(e))).catch((e=>e))}),[]),Object(c.jsx)("div",{className:"social",children:e?e.social.map((e=>Object(c.jsx)(r.SocialIcon,{style:i.iconStyle,url:e.href,network:e.network,target:"_blank",rel:"noopener"},e.network))):null})}},53:function(e,t,o){"use strict";var n=o(0);const r=o.n(n).a.createContext();t.a=r},64:function(e,t,o){},75:function(e,t,o){},78:function(e,t,o){}},[[105,12,13]]]);
//# sourceMappingURL=main.d628257c.chunk.js.map