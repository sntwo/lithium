(this.webpackJsonpli=this.webpackJsonpli||[]).push([[0],{131:function(e,t,a){e.exports=a(376)},136:function(e,t,a){},137:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=(a(136),a(19)),o=(a(137),a(47)),s=a(417),u=a(418),m=a(421),p=a(422),h=a(415),d=a(37),f=a(420),g=a(419),E=a(118),b=a(113),y=a.n(b),x=a(111),v=a.n(x),w=a(112),j=a.n(w),O=a(116),k=a.n(O),_=a(413),M=a(115),S=a.n(M),C=a(114),L=a.n(C),T=a(43),B=a(428),D=a(103),I=a(28),F=a.n(I),z=a(53),N=a(380),R=a(104),A=a.n(R),G=a(381),W=a(108),q=a.n(W),H=a(44),P=a.n(H),V=(a(97),a(72)),$=a.n(V),J=a(12),U={"getting-started":"https://raw.githubusercontent.com/matt-42/lithium/master/docs/getting_started.md",sql:"https://raw.githubusercontent.com/matt-42/lithium/master/docs/sql.cc","http-server":"https://raw.githubusercontent.com/matt-42/lithium/master/docs/http_server.cc",json:"https://raw.githubusercontent.com/matt-42/lithium/master/docs/json.cc"};function Z(e){return e.toLowerCase().replace("c++","cpp").replace(/[^a-zA-Z0-9]/g,"-")}var K=function(e){for(var t=[],a=e;a;)t.unshift(a.text),a=a.parent;return"#"+t.map(Z).join("/")},Q=function(e){return"/"+K(e)},X=function(e){for(var t=[],a=e;a;)t.unshift(a.text),a=a.parent;return t.join(" / ")};function Y(e,t,a){var n=e.depth-1,r=e.depth-2;if(e.depth>1){for(;r>0&&!a[r];)r--;var l=a[r];l||(console.log(a),console.log(e)),l.children[e.text]={text:e.text,depth:e.depth,children:{},parent:l},a.length=n+1,a[n]=l.children[e.text]}else t[e.text]={text:e.text,depth:e.depth,children:{},parent:null},a.length=n+1,a[0]=t[e.text];return a[n]}var ee={},te=[],ae={code:function(e,t,a){return'<pre><code class="hljs cpp c++">'.concat(P.a.highlight("c++",e).value,"</code></pre>")},heading:function(e,t){var a=Y({text:e,depth:t},ee,te);Z(e);return'\n    <a name="'.concat(K(a).substring(1),'" class="anchor" href="').concat(K(a),'" style="top: -90px; display: block;\n    position: relative;\n    top: -60px;\n    visibility: hidden;">\n    <h').concat(t,' class="MuiTypography-root MuiTypography-h').concat(t,'" style="margin-bottom: ').concat(10*(6-t),"px; margin-top: ").concat(10*(6-t),'px">\n    <span class="header-link"></span>\n    </a>\n    ').concat(e.toLowerCase(),"\n    </h").concat(t,">")},paragraph:function(e){return'<p class="MuiTypography-root MuiTypography-body1">'.concat(e,"</p>")}};function ne(e){var t="__documentation_starts_here__",a=e.indexOf(t);return-1!=a&&(e=e.substring(a+t.length)),e=(e="```c++\n"+(e=(e=e.replace(/\n[\s]*\/\*/g,"\n```\n")).replace(/\n[\s]*\*\//g,"\n```c++\n"))+"```\n").replace(/```c\+\+[\n ]*```/,"")}function re(){return(re=Object(z.a)(F.a.mark((function e(){var t,a,n,r,l,i,c,o,s,u,m,p;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a={},n=0,r=Object.values(U);case 3:if(!(n<r.length)){e.next=15;break}return l=r[n],e.next=7,fetch(l).then((function(e){return e.text()}));case 7:i=e.sent,c=Object(V.lexer)("md"==l.split(".").pop()?i:ne(i)),o=[],s=Object(D.a)(c);try{for(s.s();!(u=s.n()).done;)"heading"===(m=u.value).type?(p=m.depth-1,Y(m,a,o),t.push({text:m.text||"",section:o[p]})):o.length&&t.push({text:m.text||"",section:o[o.length-1]})}catch(h){s.e(h)}finally{s.f()}case 12:n++,e.next=3;break;case 15:return e.abrupt("return",[a,t]);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=function(){return re.apply(this,arguments)}();function ie(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(z.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $.a.use({renderer:ae}),e.next=3,fetch(t).then((function(e){return e.text()}));case 3:return a=e.sent,e.abrupt("return",$()("md"==t.split(".").pop()?a:ne(a)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}for(var oe={},se=0,ue=Object.keys(U);se<ue.length;se++){var me=ue[se];oe[me]=ie(U[me])}var pe=function(e){Object(J.d)();var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(null),s=Object(c.a)(o,2),u=s[0],m=s[1],p=Object(n.useState)(""),h=Object(c.a)(p,2),d=h[0],f=h[1];function g(e){return e?r.a.createElement(A.a,{disablePadding:!0},Object.values(e).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{key:e.text,button:!0,component:"a",href:Q(e),style:{paddingLeft:"".concat(10*e.depth,"px")}},e.parent?r.a.createElement(q.a,null,e.text):r.a.createElement("span",{style:{fontFamily:"Major Mono Display"}},e.text.toLowerCase())),g(e.children))}))):r.a.createElement(r.a.Fragment,null)}return Object(n.useEffect)((function(){Object(z.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g,e.next=3,le;case 3:e.t1=e.sent[0],t=(0,e.t0)(e.t1),m(t);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(z.a)(F.a.mark((function t(){var a,n,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.hash.split("/"),(n=a[0].substring(1))!=d){t.next=4;break}return t.abrupt("return");case 4:if(console.log("load ",n),f(n),oe[n]){t.next=10;break}i(n+": Section not found"),t.next=12;break;case 10:return t.next=12,oe[n].then((function(e){return i(e)}));case 12:r=window.location.hash,window.location.hash="",window.location.hash=r;case 15:case"end":return t.stop()}}),t)})))()}),[e.hash]),r.a.createElement("div",null,r.a.createElement(_.a,{style:{paddingLeft:"240px",position:"relative",paddingTop:"100px"}},r.a.createElement("div",{className:"docMenu",style:{position:"fixed",width:"220px",top:"100px",marginLeft:"-240px",height:"100%",overflow:"scroll"}},u),r.a.createElement(G.a,{style:{flexGrow:1,textAlign:"left",padding:"20px"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}))))},he=a(430),de=a(429),fe=Object(he.a)({matchFrom:"any",ignoreAccents:!0,ignoreCase:!0,stringify:function(e){return e.text}}),ge=function(){var e=Object(J.d)(),t=Object(n.useState)(null),a=Object(c.a)(t,2),l=a[0],i=a[1];Object(n.useEffect)((function(){le.then((function(e){console.log(e[1]),i(e[1])}))}),[]);Object(T.a)();return l?r.a.createElement(de.a,{id:"doc_search_bar",options:l,style:{width:600},renderInput:function(e){return r.a.createElement(B.a,Object.assign({},e,{label:"Search documentation",variant:"outlined"}))},filterOptions:fe,onChange:function(t,a){if(console.log("selected!"),console.log(a),a){var n=Q(null===a||void 0===a?void 0:a.section),r=new URL("http://test.com"+n),l=r.pathname,i=r.hash;window.location.pathname!=l?e.push(n.toString()):window.location.hash=i}},getOptionLabel:function(e){return""},renderOption:function(e,t){console.log(t.inputValue);var a=e.text.toLowerCase().indexOf(t.inputValue.toLowerCase()),n=e.text.substring(Math.max(a-50,0),Math.min(a+50,e.text.length));return n=n.replace(t.inputValue,"<u><b>".concat(t.inputValue,"</b></u>")),r.a.createElement("div",{key:X(e.section)+e.text,style:{display:"flex",flexDirection:"column",borderLeft:"1px solid #999999",paddingLeft:"10px"}},e.section.parent?r.a.createElement("div",null,r.a.createElement(d.a,{variant:"caption"},X(e.section))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h6"},e.section.text)),r.a.createElement("div",null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))}}):r.a.createElement(r.a.Fragment,null)},Ee=Object(s.a)((function(e){var t;return Object(u.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={display:"none",fontFamily:"Major Mono Display"},Object(o.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(o.a)(t,"textDecoration","none"),t),inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function be(){Object(J.d)();var e=Ee(),t=r.a.useState(null),a=Object(c.a)(t,2),n=a[0],l=a[1],i=r.a.useState(null),o=Object(c.a)(i,2),s=o[0],u=o[1],b=Boolean(n),x=Boolean(s),w=function(){u(null)},O=function(){l(null),w()},M=r.a.createElement(E.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:O},r.a.createElement(g.a,{onClick:O},"Profile"),r.a.createElement(g.a,{onClick:O},"My account")),C=r.a.createElement(E.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:w},r.a.createElement(g.a,null,r.a.createElement(h.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(f.a,{badgeContent:4,color:"secondary"},r.a.createElement(v.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(g.a,null,r.a.createElement(h.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(f.a,{badgeContent:11,color:"secondary"},r.a.createElement(j.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(g.a,{onClick:function(e){l(e.currentTarget)}},r.a.createElement(h.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(y.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(m.a,{position:"fixed",color:"default"},r.a.createElement(_.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{src:"https://raw.githubusercontent.com/matt-42/lithium/master/images/lithium_logo_white.png",width:"40",style:{paddingRight:"15px"}}),r.a.createElement(d.a,{color:"inherit",className:e.title,variant:"h6",noWrap:!0},r.a.createElement(L.a,{className:e.title,underline:"none",href:"#"},"lithium")),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",null,r.a.createElement(ge,null)),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(h.a,{href:"https://github.com/matt-42/lithium",target:"_blank","aria-label":"Github",color:"inherit"},r.a.createElement(S.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(h.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(k.a,null)))))),C,M)}var ye=a(117),xe=a(412),ve=a(426),we=a(424),je=a(425),Oe='"Droid Sans Mono", monospace, monospace, "Droid Sans Fallback"',ke=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&P.a.highlightBlock(t.current)}),[null!==t.current]),r.a.createElement("pre",null,r.a.createElement("code",{ref:t,className:"shell"},e.children))},_e=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&P.a.highlightBlock(t.current)}),[null!==t.current]),r.a.createElement("pre",null,r.a.createElement("code",{ref:t,className:"c++"},e.children))},Me=function(e){return r.a.createElement("span",{style:{fontFamily:Oe,fontWeight:"bold"}},e.children)},Se=a(416),Ce=a(427),Le=a(423),Te=function(){Object(J.d)();var e=Object(Le.a)("(min-width:700px)");return r.a.createElement(_.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:e?"row":"column",justifyContent:"center",paddingTop:"100px"}},r.a.createElement("img",{src:"https://raw.githubusercontent.com/matt-42/lithium/master/images/lithium_logo_white.png",width:"300",style:{marginRight:"30px"}}),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h1"},"lithium"),r.a.createElement(d.a,{style:{fontSize:"22px"}},"Build high performance C++ HTTP servers without being a C++ expert."),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},r.a.createElement(we.a,{variant:"outlined",color:"primary",style:{marginRight:"45px"},href:"#getting-started"},"Get Started"),r.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=matt-42&repo=lithium&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}),r.a.createElement("a",{href:"https://twitter.com/share",className:"twitter-share-button",style:{float:"left",marginLeft:"-37px",paddingTop:"10px"},"data-size":"large"},"Tweet")))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"100px"}},r.a.createElement(G.a,{style:{flex:1,marginBottom:"20px",padding:"20px",width:e?"700px":"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(je.a,null,"get_app"),r.a.createElement("div",{style:{flexBasis:"10px"}}),r.a.createElement(d.a,{variant:"h6"}," Installation")),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(d.a,null,"The simplest way to use Lithium is to download the cli in your path. It compiles and runs the server's code inside a docker container. The only requirements are Docker and Python>=3.6."),r.a.createElement(ke,null,"$ wget https://raw.githubusercontent.com/matt-42/lithium/master/cli/li\n$ chmod +x ./li"),r.a.createElement(d.a,null,"Lithium can also run locally. ",r.a.createElement(ve.a,{href:"#getting-started"},r.a.createElement("u",null,"Check the install guide for more info")),".")),r.a.createElement(G.a,{style:{flex:1,padding:"20px",width:e?"700px":"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(je.a,null,"api"),r.a.createElement("div",{style:{flexBasis:"10px"}}),r.a.createElement(d.a,{variant:"h6"},"Hello World")),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(d.a,null,"Write your first ",r.a.createElement(Me,null,"hello_world")," Lithium server."),r.a.createElement(_e,null,'// main.cc \n#include <lithium_http_server.hh>\n            \nint main() {\n  http_api my_api;\n              \n  my_api.get("/hello_world") = \n  [&](http_request& request, http_response& response) {\n    response.write("hello world.");\n  };\n  http_serve(my_api, 8080);\n}\n'),", history",r.a.createElement(d.a,null,"And run it:"),r.a.createElement(ke,null,"$ li run ./main.cc"),r.a.createElement(d.a,null,"Behind the scene, ",r.a.createElement(Me,null,"li")," will build a lithium docker image, compile and run the server."),r.a.createElement("p",{style:{textAlign:"right"}},r.a.createElement(we.a,{variant:"outlined",color:"primary",href:"#getting-started"},"Read the docs"))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{borderTop:"1px solid #4a4a4a",borderBottom:"1px solid #222222",width:"70%"}}),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(d.a,{variant:"h4"},"Lithium's Sponsors"),r.a.createElement(Se.a,null,r.a.createElement(N.a,{button:!0,component:"a",target:"_blank",href:"https://github.com/Burnett01"},r.a.createElement(Ce.a,{primary:"Steven Agyekum (Burnett01)"}))),"If you find this project helpful and want to support it, give a star to lithium or buy me a coffee!",r.a.createElement(ve.a,{target:"_blank",href:"https://github.com/sponsors/matt-42"},r.a.createElement("u",null,"More info on my github sponsor page ",r.a.createElement(je.a,{style:{color:"pink"}},"favorite_border"))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{borderTop:"1px solid #4a4a4a",borderBottom:"1px solid #222222",width:"70%"}}),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(d.a,{style:{padding:"30px"}},"Released under the MIT License. Copyright \xa9 2020 Matthieu Garrigues.")))},Be=a(40),De=Object(ye.a)({palette:{type:"dark",primary:{main:"#f5f5f5"}},typography:{h1:{fontFamily:"Major Mono Display",fontSize:"50px"},h2:{fontFamily:"Major Mono Display",fontSize:"30px"},h3:{fontFamily:"Major Mono Display",fontSize:"20px"}}});var Ie=function(){var e=Object(n.useState)(window.location.hash),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){window.onhashchange=function(){return l(window.location.hash)}}),[]),r.a.createElement(Be.a,{basename:"/lithium"},r.a.createElement(xe.a,{theme:De},r.a.createElement(be,null),""==a?r.a.createElement(Te,null):r.a.createElement(pe,{hash:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.7108cd4e.chunk.js.map