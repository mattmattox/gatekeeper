(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[653],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),y=o,m=f["".concat(u,".").concat(y)]||f[y]||s[y]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3741:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),c=["components"],a={id:"security",title:"Security"},u=void 0,l={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security",description:"Please report vulnerabilities by email to open-policy-agent-security.",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/gatekeeper/website/docs/security",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/security.md",version:"current",frontMatter:{id:"security",title:"Security"},sidebar:"docs",previous:{title:"Want to help?",permalink:"/gatekeeper/website/docs/help"}},p=[],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Please report vulnerabilities by email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:open-policy-agent-security@googlegroups.com"},"open-policy-agent-security"),".\nWe will send a confirmation message to acknowledge that we have received the\nreport and then we will send additional messages to follow up once the issue\nhas been investigated."),(0,i.kt)("p",null,"For details on the security release process please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/opa/blob/master/SECURITY.md"},"open-policy-agent/opa/SECURITY.md")," file."))}f.isMDXComponent=!0}}]);