(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{103:function(e,t,n){"use strict";n.r(t);n(0);var a=n(111),c=n(120),i=n(107),s=n(3);var r=function(e){var t=e.nextItem,n=e.prevItem;return Object(s.jsxs)("nav",{className:"pagination-nav","aria-label":"Blog post page navigation",children:[Object(s.jsx)("div",{className:"pagination-nav__item",children:n&&Object(s.jsxs)(i.a,{className:"pagination-nav__link",to:n.permalink,children:[Object(s.jsx)("div",{className:"pagination-nav__sublabel",children:"Newer Post"}),Object(s.jsxs)("div",{className:"pagination-nav__label",children:["\xab ",n.title]})]})}),Object(s.jsx)("div",{className:"pagination-nav__item pagination-nav__item--next",children:t&&Object(s.jsxs)(i.a,{className:"pagination-nav__link",to:t.permalink,children:[Object(s.jsx)("div",{className:"pagination-nav__sublabel",children:"Older Post"}),Object(s.jsxs)("div",{className:"pagination-nav__label",children:[t.title," \xbb"]})]})})]})},l=n(114),o=n(122),d=n(117);t.default=function(e){var t=e.content,n=e.sidebar,i=t.frontMatter,j=t.metadata,b=j.title,m=j.description,v=j.nextItem,u=j.prevItem,h=j.editUrl,O=i.hide_table_of_contents;return Object(s.jsx)(a.a,{title:b,description:m,wrapperClassName:"blog-wrapper",children:t&&Object(s.jsx)("div",{className:"container margin-vert--lg",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col col--2",children:Object(s.jsx)(l.a,{sidebar:n})}),Object(s.jsxs)("main",{className:"col col--8",children:[Object(s.jsx)(c.a,{frontMatter:i,metadata:j,isBlogPostPage:!0,children:Object(s.jsx)(t,{})}),Object(s.jsx)("div",{children:h&&Object(s.jsxs)("a",{href:h,target:"_blank",rel:"noreferrer noopener",children:[Object(s.jsx)(d.a,{}),"Edit this page"]})}),(v||u)&&Object(s.jsx)("div",{className:"margin-vert--xl",children:Object(s.jsx)(r,{nextItem:v,prevItem:u})})]}),!O&&t.toc&&Object(s.jsx)("div",{className:"col col--2",children:Object(s.jsx)(o.a,{toc:t.toc})})]})})})}},117:function(e,t,n){"use strict";var a=n(104),c=n(8),i=(n(0),n(106)),s=n(58),r=n.n(s),l=n(3),o=["className"];t.a=function(e){var t=e.className,n=Object(c.a)(e,o);return Object(l.jsx)("svg",Object(a.a)(Object(a.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(r.a.iconEdit,t)},n),{},{children:Object(l.jsx)("g",{children:Object(l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}},122:function(e,t,n){"use strict";var a=n(0),c=n(106);var i=function(e,t,n){var c=Object(a.useState)(void 0),i=c[0],s=c[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var c=0,r=!1,l=document.getElementsByClassName(e);c<l.length&&!r;){var o=l[c],d=o.href,j=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===j&&(i&&i.classList.remove(t),o.classList.add(t),s(o),r=!0),c+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},s=n(57),r=n.n(s),l=n(3),o="table-of-contents__link";function d(e){var t=e.toc,n=e.isChild;return t.length?Object(l.jsx)("ul",{className:n?"":"table-of-contents table-of-contents__left-border",children:t.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("a",{href:"#".concat(e.id),className:o,dangerouslySetInnerHTML:{__html:e.value}}),Object(l.jsx)(d,{isChild:!0,toc:e.children})]},e.id)}))}):null}t.a=function(e){var t=e.toc;return i(o,"table-of-contents__link--active",100),Object(l.jsx)("div",{className:Object(c.a)(r.a.tableOfContents,"thin-scrollbar"),children:Object(l.jsx)(d,{toc:t})})}}}]);