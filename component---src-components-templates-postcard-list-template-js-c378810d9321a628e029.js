(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{oQmu:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),r=t("Bl7J"),o=t("vOnD"),l=t("Wbzz");function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  line-height: 1.3;\n  box-shadow: inset 0 0 0 1px #e0e0e0;\n  border-radius: 10px;\n  box-sizing: border-box;\n  position: relative;\n  width: calc((100% - 20px * 5) / 4);\n  margin-left: 20px;\n  margin-top: 40px;\n  @media screen and (max-width: 1600px) {\n    width: calc((100% - 20px * 4) / 3);\n    margin-left: 20px;\n  }\n  @media screen and (max-width: 1300px) {\n    width: calc((100% - 20px * 3) / 2);\n    margin-left: 20px;\n  }\n  @media screen and (max-width: 700px) {\n    width: calc(100% - 3% * 2);\n    margin-left: 3%;\n  }\n  &:hover {\n    .thumbnail-wrapper:before {\n      content: '';\n      background: black;\n      opacity: 0.2;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 999;\n    }\n  }\n  a {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  }\n  .thumbnail-wrapper {\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n    position: relative;\n    display: block;\n  }\n  .contents-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 15px 20px;\n    box-sizing: border-box;\n    flex: 1;\n  }\n  .thumbnail {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n  }\n  .title {\n    font-size: 2rem;\n    color: #222;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .desc {\n    font-size: 16px;\n    height: 72px;\n    color: #888;\n    line-height: 1.5;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .date {\n    color: #777;\n    opacity: 0.5;\n    font-size: 12px;\n    text-align: right;\n    margin: 3% 0 5%;\n    word-break: break-all;\n  }\n"]);return c=function(){return n},n}var p=o.a.div(c()),d=function(n){var e=n.data,t=e.frontmatter,a=t.path,r=t.title,o=t.date,c=e.excerpt;return i.a.createElement(p,null,i.a.createElement(l.Link,{to:a},i.a.createElement("div",{className:"thumbnail-wrapper"},i.a.createElement("img",{src:"https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png",className:"thumbnail",alt:""})),i.a.createElement("div",{className:"contents-wrapper"},i.a.createElement("p",{className:"title"},r),i.a.createElement("p",{className:"date"},o),i.a.createElement("p",{className:"desc"},c))))};function s(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  padding: 50px 0;\n  width: 100%;\n  margin-top: -40px;\n  @media screen and (max-width: 1500px) {\n  }\n"]);return s=function(){return n},n}var m=o.a.div(s()),u=function(n){var e=n.posts;return i.a.createElement(m,null,e.map((function(n,e){return i.a.createElement(d,{key:e,data:n.node})})))};t.d(e,"query",(function(){return x}));var x="4121720223";e.default=function(n){var e=n.data.allMarkdownRemark.edges;return i.a.createElement(r.a,null,i.a.createElement(u,{posts:e}))}}}]);
//# sourceMappingURL=component---src-components-templates-postcard-list-template-js-c378810d9321a628e029.js.map