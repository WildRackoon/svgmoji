(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{102:function(a,e,t){"use strict";t.r(e);t(0);var n=t(23),i=t(111),c=t(120),s=t(107),r=t(3);var l=function(a){var e=a.metadata,t=e.previousPage,n=e.nextPage;return Object(r.jsxs)("nav",{className:"pagination-nav","aria-label":"Blog list page navigation",children:[Object(r.jsx)("div",{className:"pagination-nav__item",children:t&&Object(r.jsx)(s.a,{className:"pagination-nav__link",to:t,children:Object(r.jsx)("div",{className:"pagination-nav__label",children:"\xab Newer Entries"})})}),Object(r.jsx)("div",{className:"pagination-nav__item pagination-nav__item--next",children:n&&Object(r.jsx)(s.a,{className:"pagination-nav__link",to:n,children:Object(r.jsx)("div",{className:"pagination-nav__label",children:"Older Entries \xbb"})})})]})},d=t(114);e.default=function(a){var e=a.metadata,t=a.items,s=a.sidebar,o=Object(n.default)().siteConfig.title,j=e.blogDescription,m=e.blogTitle,b="/"===e.permalink?o:m;return Object(r.jsx)(i.a,{title:b,description:j,wrapperClassName:"blog-wrapper",children:Object(r.jsx)("div",{className:"container margin-vert--lg",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col col--2",children:Object(r.jsx)(d.a,{sidebar:s})}),Object(r.jsxs)("main",{className:"col col--8",children:[t.map((function(a){var e=a.content;return Object(r.jsx)(c.a,{frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated,children:Object(r.jsx)(e,{})},e.metadata.permalink)})),Object(r.jsx)(l,{metadata:e})]})]})})})}}}]);