(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{107:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},109:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(105),s=a(3),o=a(103),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=u({},a,{backgroundColor:null}),l};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==l&&(r.style=void 0!==r.style?u({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(o))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,s=u({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(s.style=void 0!==s.style?u({},s.style,l):l),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s})),m(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),s=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,s=0,o=[],c=[o];s>-1;){for(;(r=n[s]++)<l[s];){var i=void 0,m=t[s],u=a[s][r];if("string"==typeof u?(m=s>0?m:["plain"],i=u):(m=g(m,u.type),u.alias&&(m=g(m,u.alias)),i=u.content),"string"==typeof i){var h=i.split(p),y=h.length;o.push({types:m,content:h[0]});for(var b=1;b<y;b++)d(o),c.push(o=[]),o.push({types:m,content:h[b]})}else s++,t.push(m),a.push(i),n.push(0),l.push(i.length)}s--,t.pop(),a.pop(),n.pop(),l.pop()}return d(o),c}(void 0!==s?this.tokenize(t,n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var f=a(107),v=a.n(f),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=a(111),j=a(102);var N=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(E.a)(),a=e.theme||k,n=e.darkTheme||a;return t?n:a},T=a(104),O=a(56),w=a.n(O);const P=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)};function C({children:e,className:t,metastring:a,title:r}){const{prism:c}=Object(j.useThemeConfig)(),[m,u]=Object(n.useState)(!1),[p,d]=Object(n.useState)(!1);Object(n.useEffect)((()=>{d(!0)}),[]);const g=Object(j.parseCodeBlockTitle)(a)||r,h=Object(n.useRef)(null);let y=[];const f=N(),k=Array.isArray(e)?e.join(""):e;if(a&&P.test(a)){const e=a.match(P)[1];y=v()(e).filter((e=>e>0))}let E=t&&t.replace(/language-/,"");!E&&c.defaultLanguage&&(E=c.defaultLanguage);let O=k.replace(/\n$/,"");if(0===y.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(E),a=k.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const r=l+1,s=a[l].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(l,1)}else l+=1}y=v()(e),O=a.join("\n")}const C=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus()}(O),u(!0),setTimeout((()=>u(!1)),2e3)};return l.a.createElement(b,Object(s.a)({},i,{key:String(p),theme:f,code:O,language:E}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>l.a.createElement("div",{className:w.a.codeBlockContainer},g&&l.a.createElement("div",{style:t,className:w.a.codeBlockTitle},g),l.a.createElement("div",{className:Object(o.a)(w.a.codeBlockContent,E)},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:g})},l.a.createElement("div",{className:w.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(s.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(s.a)({key:t},r({token:e,key:t}))))))})))),l.a.createElement("button",{ref:h,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(o.a)(w.a.copyButton),onClick:C},m?l.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(57);var _=a(58),L=a.n(_);var B=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(j.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",{[L.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(T.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.a.createElement(e,a)};const $={code:e=>{const{children:t}=e;return Object(n.isValidElement)(t)?t:t.includes("\n")?l.a.createElement(C,e):l.a.createElement("code",e)},a:e=>l.a.createElement(r.a,e),pre:e=>{var t;const{children:a}=e;return Object(n.isValidElement)(null==a||null===(t=a.props)||void 0===t?void 0:t.children)?null==a?void 0:a.props.children:l.a.createElement(C,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=$},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n),r=a(103),s=a(105),o=a(59),c=a.n(o);function i({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:Object(r.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},117:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(103),s=a(106),o=a(104),c=a(105),i=a(109),m=a(116),u=a(61),p=a.n(u),d=a(102);t.a=function(e){const t=function(){const{selectMessage:e}=Object(d.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(o.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:u,truncated:g,isBlogPostPage:h=!1}=e,{date:y,formattedDate:b,permalink:f,tags:v,readingTime:k}=u,{author:E,title:j,image:N,keywords:T}=n,O=n.author_url||n.authorURL,w=n.author_title||n.authorTitle,P=n.author_image_url||n.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{keywords:T,image:N}),l.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return l.a.createElement("header",null,l.a.createElement(e,{className:Object(r.a)("margin-bottom--sm",p.a.blogPostTitle)},h?j:l.a.createElement(c.a,{to:f},j)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:y,className:p.a.blogPostDate},b,k&&l.a.createElement(l.a.Fragment,null," \xb7 ",t(k)))),l.a.createElement("div",{className:"avatar margin-vert--md"},P&&l.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:O},l.a.createElement("img",{src:P,alt:E})),l.a.createElement("div",{className:"avatar__intro"},E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(c.a,{href:O},E)),l.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),l.a.createElement("div",{className:"markdown"},l.a.createElement(s.a,{components:i.a},a)),(v.length>0||g)&&l.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(o.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((({label:e,permalink:t})=>l.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),g&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(c.a,{to:u.permalink,"aria-label":`Read more about ${j}`},l.a.createElement("strong",null,l.a.createElement(o.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(108),s=a(117),o=a(105),c=a(112),i=a(104),m=a(102);function u({tagName:e,count:t}){const a=function(){const{selectMessage:e}=Object(m.usePluralForm)();return t=>e(t,Object(i.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return l.a.createElement(i.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:a(t),tagName:e}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{allTagsPath:p,name:d,count:g}=t;return l.a.createElement(r.a,{title:`Posts tagged "${d}"`,description:`Blog | Tagged "${d}"`,wrapperClassName:m.ThemeClassNames.wrapper.blogPages,pageClassName:m.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:n})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(u,{count:g,tagName:d})),l.a.createElement(o.a,{href:p},l.a.createElement(i.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>l.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null)))))))))}}}]);