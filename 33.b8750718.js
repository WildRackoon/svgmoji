(window.webpackJsonp=window.webpackJsonp||[]).push([[33,34],{101:function(e,t,n){"use strict";n.r(t);var a=n(104),c=n(0),o=n(108),r=n(23),s=n(26),i=n(111),l=n(8),u=n(106),d=n(105),b=n(127),p=n(132),h=n(133),j=n(131),m=n(107),f=n(116),y=n(135),g=n(3),O=function(e){return Object(g.jsx)("svg",Object(a.a)(Object(a.a)({width:"20",height:"20",role:"img"},e),{},{children:Object(g.jsxs)("g",{fill:"#7a7a7a",children:[Object(g.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),Object(g.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))},v=n(134),k=n(76),x=n.n(k),N=["item","onItemClick","collapsible","activePath"],C=["item","onItemClick","activePath","collapsible"];var S=function e(t,n){return"link"===t.type?Object(d.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function _(e){var t,n,o,r=e.item,s=e.onItemClick,i=e.collapsible,d=e.activePath,b=Object(l.a)(e,N),p=r.items,h=r.label,j=S(r,d),m=(n=j,o=Object(c.useRef)(n),Object(c.useEffect)((function(){o.current=n}),[n]),o.current),f=Object(c.useState)((function(){return!!i&&(!j&&r.collapsed)})),y=f[0],O=f[1],v=Object(c.useRef)(null),k=Object(c.useState)(void 0),C=k[0],_=k[1],T=function(e){var t;void 0===e&&(e=!0),_(e?"".concat(null===(t=v.current)||void 0===t?void 0:t.scrollHeight,"px"):void 0)};Object(c.useEffect)((function(){j&&!m&&y&&O(!1)}),[j,m,y]);var w=Object(c.useCallback)((function(e){e.preventDefault(),C||T(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[C]);return 0===p.length?null:Object(g.jsxs)("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":y}),children:[Object(g.jsx)("a",Object(a.a)(Object(a.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&j},t[x.a.menuLinkText]=!i,t)),onClick:i?w:void 0,href:i?"#!":void 0},b),{},{children:h})),Object(g.jsx)("ul",{className:"menu__list",ref:v,style:{height:C},onTransitionEnd:function(){y||T(!1)},children:p.map((function(e){return Object(g.jsx)(P,{tabIndex:y?"-1":"0",item:e,onItemClick:s,collapsible:i,activePath:d},e.label)}))})]},h)}function T(e){var t=e.item,n=e.onItemClick,c=e.activePath,o=(e.collapsible,Object(l.a)(e,C)),r=t.href,s=t.label,i=S(t,c);return Object(g.jsx)("li",{className:"menu__list-item",children:Object(g.jsx)(m.a,Object(a.a)(Object(a.a)(Object(a.a)({className:Object(u.a)("menu__link",{"menu__link--active":i}),to:r},Object(f.a)(r)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"}),o),{},{children:s}))},s)}function P(e){switch(e.item.type){case"category":return Object(g.jsx)(_,Object(a.a)({},e));case"link":default:return Object(g.jsx)(T,Object(a.a)({},e))}}var w=function(e){var t,n,a=e.path,o=e.sidebar,r=e.sidebarCollapsible,s=void 0===r||r,i=e.onCollapse,l=e.isHidden,m=Object(c.useState)(!1),f=m[0],k=m[1],N=Object(d.useThemeConfig)(),C=N.navbar.hideOnScroll,S=N.hideableSidebar,_=Object(b.a)().isAnnouncementBarClosed,T=Object(j.a)().scrollY;Object(p.a)(f);var w=Object(h.a)();return Object(c.useEffect)((function(){w===h.b.desktop&&k(!1)}),[w]),Object(g.jsxs)("div",{className:Object(u.a)(x.a.sidebar,(t={},t[x.a.sidebarWithHideableNavbar]=C,t[x.a.sidebarHidden]=l,t)),children:[C&&Object(g.jsx)(y.a,{tabIndex:-1,className:x.a.sidebarLogo}),Object(g.jsxs)("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",x.a.menu,(n={"menu--show":f},n[x.a.menuWithAnnouncementBar]=!_&&0===T,n)),children:[Object(g.jsx)("button",{"aria-label":f?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!f)},children:f?Object(g.jsx)("span",{className:Object(u.a)(x.a.sidebarMenuIcon,x.a.sidebarMenuCloseIcon),children:"\xd7"}):Object(g.jsx)(v.a,{className:x.a.sidebarMenuIcon,height:24,width:24})}),Object(g.jsx)("ul",{className:"menu__list",children:o.map((function(e){return Object(g.jsx)(P,{item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:s,activePath:a},e.label)}))})]}),S&&Object(g.jsx)("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",x.a.collapseSidebarButton),onClick:i,children:Object(g.jsx)(O,{className:x.a.collapseSidebarButtonIcon})})]})},I=n(121),L=n(123),B=n(112),D=n(77),E=n.n(D);function M(e){var t,n,a,s,l=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=Object(r.default)(),j=h.siteConfig,m=h.isClient,f=b.pluginId,y=b.permalinkToSidebar,v=b.docsSidebars,k=b.version,x=y[l.path],N=v[x],C=Object(c.useState)(!1),S=C[0],_=C[1],T=Object(c.useState)(!1),P=T[0],L=T[1],B=Object(c.useCallback)((function(){P&&L(!1),_(!S)}),[P]);return Object(g.jsx)(i.a,{searchMetadatas:{version:k,tag:Object(d.docVersionSearchTag)(f,k)},children:Object(g.jsxs)("div",{className:E.a.docPage,children:[N&&Object(g.jsxs)("div",{className:Object(u.a)(E.a.docSidebarContainer,(t={},t[E.a.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(E.a.docSidebarContainer)&&S&&L(!0)},role:"complementary",children:[Object(g.jsx)(w,{sidebar:N,path:l.path,sidebarCollapsible:null===(n=null===(a=j.themeConfig)||void 0===a?void 0:a.sidebarCollapsible)||void 0===n||n,onCollapse:B,isHidden:P},x),P&&Object(g.jsx)("div",{className:E.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:B,onClick:B,children:Object(g.jsx)(O,{})})]}),Object(g.jsx)("main",{className:E.a.docMainContainer,children:Object(g.jsx)("div",{className:Object(u.a)("container padding-vert--lg",E.a.docItemWrapper,(s={},s[E.a.docItemWrapperEnhanced]=S,s)),children:Object(g.jsx)(o.a,{components:I.a,children:p})})})]})},m)}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,c=e.location,o=t.find((function(e){return Object(B.matchPath)(c.pathname,e)}));return o?Object(g.jsx)(M,{currentDocRoute:o,versionMetadata:n,children:Object(s.a)(t)}):Object(g.jsx)(L.default,Object(a.a)({},e))}},118:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const c=document.getSelection();let o=!1;c.rangeCount>0&&(o=c.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(s){}return n.remove(),o&&(c.removeAllRanges(),c.addRange(o)),a&&a.focus(),r};e.exports=a,e.exports.default=a},119:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,c,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==c&&".."!==c&&"\u2025"!==c||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},121:function(e,t,n){"use strict";var a=n(104),c=n(0),o=n(107),r=n(106),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(24).a,theme:s};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,a=Object.create(null),c=e.styles.reduce((function(e,n){var a=n.languages,c=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],c);e[t]=n})),e}),a);return c.root=n,c.plain=u({},n,{backgroundColor:null}),c};function j(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,c=e.style,o=u({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==c&&(o.style=void 0!==o.style?u({},o.style,c):c),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,c=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===c&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===c&&!a)return o[n[0]];var r=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(s))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,c=e.style,o=e.token,r=u({},j(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==c&&(r.style=void 0!==r.style?u({},r.style,c):c),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),l(this,"tokenize",(function(e,t,n,a){var c={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",c);var o=c.tokens=e.tokenize(c.code,c.grammar,c.language);return e.hooks.run("after-tokenize",c),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,c=e.children,o=this.getThemeDict(this.props),r=t.languages[n];return c({tokens:function(e){for(var t=[[]],n=[e],a=[0],c=[e.length],o=0,r=0,s=[],i=[s];r>-1;){for(;(o=a[r]++)<c[r];){var l=void 0,u=t[r],h=n[r][o];if("string"==typeof h?(u=r>0?u:["plain"],l=h):(u=p(u,h.type),h.alias&&(u=p(u,h.alias)),l=h.content),"string"==typeof l){var j=l.split(d),m=j.length;s.push({types:u,content:j[0]});for(var f=1;f<m;f++)b(s),i.push(s=[]),s.push({types:u,content:j[f]})}else r++,t.push(u),n.push(l),a.push(0),c.push(l.length)}r--,t.pop(),n.pop(),a.pop(),c.pop()}return b(s),i}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(c.Component),f=n(118),y=n.n(f),g=n(119),O=n.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=n(115),x=n(105),N=function(){var e=Object(x.useThemeConfig)().prism,t=Object(k.a)().isDarkTheme,n=e.theme||v,a=e.darkTheme||n;return t?a:n},C=n(59),S=n.n(C),_=n(3),T=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:".concat(t[e].start,"\\s*(").concat(n,")\\s*").concat(t[e].end,")")})).join("|");return new RegExp("^\\s*(?:".concat(a,")\\s*$"))},w=/(?:title=")(.*)(?:")/,I=function(e){var t=e.children,n=e.className,o=e.metastring,s=Object(x.useThemeConfig)().prism,l=Object(c.useState)(!1),u=l[0],d=l[1],b=Object(c.useState)(!1),p=b[0],h=b[1];Object(c.useEffect)((function(){h(!0)}),[]);var j=Object(c.useRef)(null),f=[],g="",v=N(),k=Array.isArray(t)?t.join(""):t;if(o&&T.test(o)){var C=o.match(T)[1];f=O()(C).filter((function(e){return e>0}))}o&&w.test(o)&&(g=o.match(w)[1]);var I=n&&n.replace(/language-/,"");!I&&s.defaultLanguage&&(I=s.defaultLanguage);var L=k.replace(/\n$/,"");if(0===f.length&&void 0!==I){for(var B,D="",E=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(I),M=k.replace(/\n$/,"").split("\n"),R=0;R<M.length;){var A=R+1,z=M[R].match(E);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+="".concat(A,",");break;case"highlight-start":B=A;break;case"highlight-end":D+="".concat(B,"-").concat(A-1,",")}M.splice(R,1)}else R+=1}f=O()(D),L=M.join("\n")}var H=function(){y()(L),d(!0),setTimeout((function(){return d(!1)}),2e3)};return Object(c.createElement)(m,Object(a.a)(Object(a.a)({},i),{},{key:String(p),theme:v,code:L,language:I}),(function(e){var t,n=e.className,c=e.style,o=e.tokens,s=e.getLineProps,i=e.getTokenProps;return Object(_.jsxs)(_.Fragment,{children:[g&&Object(_.jsx)("div",{style:c,className:S.a.codeBlockTitle,children:g}),Object(_.jsxs)("div",{className:S.a.codeBlockContent,children:[Object(_.jsx)("div",{tabIndex:0,className:Object(r.a)(n,S.a.codeBlock,"thin-scrollbar",(t={},t[S.a.codeBlockWithTitle]=g,t)),children:Object(_.jsx)("div",{className:S.a.codeBlockLines,style:c,children:o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return f.includes(t+1)&&(n.className="".concat(n.className," docusaurus-highlight-code-line")),Object(_.jsx)("div",Object(a.a)(Object(a.a)({},n),{},{children:e.map((function(e,t){return Object(_.jsx)("span",Object(a.a)({},i({token:e,key:t})),t)}))}),t)}))})}),Object(_.jsx)("button",{ref:j,type:"button","aria-label":"Copy code to clipboard",className:Object(r.a)(S.a.copyButton),onClick:H,children:u?"Copied":"Copy"})]})]})}))},L=n(8),B=(n(60),n(61)),D=n.n(B),E=["id"],M=function(e){return function(t){var n,c=t.id,o=Object(L.a)(t,E),s=Object(x.useThemeConfig)().navbar.hideOnScroll;return c?Object(_.jsxs)(e,Object(a.a)(Object(a.a)({},o),{},{children:[Object(_.jsx)("a",{"aria-hidden":"true",tabIndex:-1,className:Object(r.a)("anchor",(n={},n[D.a.enhancedAnchor]=!s,n)),id:c}),o.children,Object(_.jsx)("a",{className:"hash-link",href:"#".concat(c),title:"Direct link to heading",children:"#"})]})):Object(_.jsx)(e,Object(a.a)({},o))}},R=n(62),A=n.n(R),z={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?Object(_.jsx)(I,Object(a.a)({},e)):Object(_.jsx)("code",Object(a.a)({},e)):t},a:function(e){return Object(_.jsx)(o.a,Object(a.a)({},e))},pre:function(e){return Object(_.jsx)("div",Object(a.a)({className:A.a.mdxCodeBlock},e))},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")};t.a=z},123:function(e,t,n){"use strict";n.r(t);n(0);var a=n(111),c=n(3);t.default=function(){return Object(c.jsx)(a.a,{title:"Page Not Found",children:Object(c.jsx)("main",{className:"container margin-vert--xl",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col col--6 col--offset-3",children:[Object(c.jsx)("h1",{className:"hero__title",children:"Page Not Found"}),Object(c.jsx)("p",{children:"We could not find what you were looking for."}),Object(c.jsx)("p",{children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})]})})})})}}}]);