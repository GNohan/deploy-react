(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Some Blog 1","category":"Web Dev","date":"00/00/000","textFilePath":"../Data/blogone","summary":"This is a short summary of the blog."},{"title":"Another One","category":"Web Dev","date":"00/00/000","textFilePath":"../Data/blogone","summary":"This is a short summary of the blog."},{"title":"Another One","category":"Web Dev","date":"00/00/000","textFilePath":"../Data/blogone","summary":"This is a short summary of the blog."},{"title":"Final","category":"Web Dev","date":"00/00/000","textFilePath":"../Data/blogone","summary":"This is a short summary of the blog."}]')},function(e){e.exports=JSON.parse('[{"title":"Testing","category":"Web Dev","date":"00/00/000","summary":"This is a short summary of the project."},{"title":"Some","category":"Software Dev","date":"00/00/000","summary":"This is a short summary of the project."},{"title":"Shit","category":"Game Dev","date":"00/00/000","summary":"This is a short summary of the project."},{"title":"Okay","category":"Web Dev","date":"00/00/000","summary":"This is a short summary of the project."}]')},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),c=(a(16),a(17),a(1)),i=a(2),s=a(4),m=a(3),u=a(6),h=a(5),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.onPageChange(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"nav-bar"},l.a.createElement("div",{className:"navButton",onClick:this.handleClick.bind(this,"main")},l.a.createElement("h4",null,"Projects")),l.a.createElement("div",{className:"navButton",onClick:this.handleClick.bind(this,"blog")},l.a.createElement("h4",null,"Blog")),l.a.createElement("div",{className:"navButton",onClick:this.handleClick.bind(this,"contact")},l.a.createElement("h4",null,"Contact")))}}]),t}(l.a.Component),p=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).blogClose=function(e){a.props.onBlogClose(e)},a.state={blogClass:"blogClosed"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"animEnd",value:function(e){"open"===e?(this.props.blogOpen="",this.setState({blogClass:"blogOpen"})):"closed"===e&&(this.props.blogOpen="",this.setState({blogClass:"blogClosed"}))}},{key:"render",value:function(){var e=this,t=this.props.blogOpen,a=this.props.currentBlog;return l.a.createElement("div",{className:this.props.blogOpen+this.state.blogClass,onAnimationEnd:function(){return e.animEnd(t)}},l.a.createElement("div",{className:"backButton",onClick:this.blogClose.bind(this,"closed ")},"Back"),l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,null!=a&&a.title),l.a.createElement("img",null),l.a.createElement("p",null,null!=a&&a.date)),l.a.createElement("div",{className:"textArea"}))}}]),t}(n.Component)),d=(a(19),a(20),a(9)),b=a(10),v=(a(21),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"liveLink"},"Project"),l.a.createElement("div",{className:"githubLink"},"Code")),a=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"readBlog"},"Insert blog name here"));return e="blog"===this.props.type,l.a.createElement("div",{onClick:this.props.clickAction,className:"item "+(e?"blogItem":this.props.type)},l.a.createElement("img",{src:"",alt:"Project/Blog view"}),e?a:t)}}]),t}(l.a.Component)),f=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).openBlog=function(e){a.setState({clickedBlog:e,blogOpen:"open "}),console.log(a.state)},a.handleBlogClose=function(e){a.setState({clickedBlog:null,blogOpen:e})},a.state={clickedBlog:"",blogOpen:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.title;function n(t){return e.filter((function(e){return e.category===t}))}function o(t){for(var a=0;a<e.length;a++)if(e[a].category===t)return!0;return!1}return e="blog"===a?d:"main"===a?b:null,l.a.createElement("div",{className:"topPage"},null!=e?l.a.createElement("div",{className:"spawnBox"},l.a.createElement("div",{className:"sections"},o("Web Dev")?l.a.createElement("div",{className:"section "},l.a.createElement("div",{className:"headerBox"},l.a.createElement("h2",null,"Web Dev")),n("Web Dev").map((function(e,a){return l.a.createElement(v,{clickAction:"blog"===t.props.title?function(){return t.openBlog(e)}:null,key:a,title:e.title,category:e.category,date:e.date,summary:e.summary,type:t.props.title})}))):null,o("Software Dev")?l.a.createElement("div",{className:"section "},l.a.createElement("div",{className:"headerBox"},l.a.createElement("h2",null,"Software Dev")),n("Software Dev").map((function(e,a){return l.a.createElement(v,{clickAction:"blog"===t.props.title?function(){return t.openBlog(e)}:null,key:a,title:e.title,category:e.category,date:e.date,summary:e.summary,type:t.props.title})}))):null,o("Game Dev")?l.a.createElement("div",{className:"section "},l.a.createElement("div",{className:"headerBox"},l.a.createElement("h2",null,"Game Dev")),n("Game Dev").map((function(e,a){return l.a.createElement(v,{clickAction:"blog"===t.props.title?function(){return t.openBlog(e)}:null,key:a,title:e.title,category:e.category,date:e.date,summary:e.summary,type:t.props.title})}))):null),l.a.createElement(p,{onBlogClose:this.handleBlogClose,blogOpen:this.state.blogOpen,currentBlog:this.state.clickedBlog})):null)}}]),t}(l.a.Component)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handlePageChange=function(e){a.setState({page:e})},a.handlePageChange=a.handlePageChange.bind(Object(u.a)(a)),a.state={page:"main"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(g,{page:"main",onPageChange:this.handlePageChange}),l.a.createElement(f,{title:this.state.page}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.e285cde5.chunk.js.map