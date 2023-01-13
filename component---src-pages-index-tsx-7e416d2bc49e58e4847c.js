"use strict";(self.webpackChunkfeatured_collection=self.webpackChunkfeatured_collection||[]).push([[691],{8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return C},S:function(){return F},_:function(){return i},a:function(){return l},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(g,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],C=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};C.displayName="Placeholder",C.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],O=new Set;let I,A;const _=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,j);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:C,className:E}=v,k=i(v,T),x=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{I||(I=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(N);if(A&&O.has(N))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;x.current&&(x.current.innerHTML=a(l({isLoading:!0,isLoaded:O.has(N),image:n},h)),O.has(N)||(t=requestAnimationFrame((()=>{x.current&&(r=i(x.current,N,O,s,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(N)&&A&&(x.current.innerHTML=A(l({isLoading:O.has(N),isLoaded:O.has(N),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},C,s,{backgroundColor:d}),className:E+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},z=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));z.propTypes=L,z.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,R);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=q((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:S,layout:L,images:j,placeholder:T,backgroundColor:O}=o,I=c(v,S,L),{style:A,className:_}=I,z=i(I,x),R={fallback:void 0,sources:[]};return j.fallback&&(R.fallback=l({},j.fallback,{srcSet:j.fallback.srcSet?N(j.fallback.srcSet):void 0})),j.sources&&(R.sources=j.sources.map((e=>l({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,l({},z,{style:l({},A,s,{backgroundColor:h}),className:_+(a?" "+a:"")}),r.createElement(p,{layout:L,width:v,height:S},r.createElement(C,l({},u(T,!1,L,v,S,O,y,b))),r.createElement(E,l({"data-gatsby-image-ssr":"",className:g},w,d("eager"===m,!1,R,m,f)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),M={src:s().string.isRequired,alt:S,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=M;const F=q(z);F.displayName="StaticImage",F.propTypes=M},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3181:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return m}});var r=a(7294),n=a(8032);function s(e){let{text:t,className:a,...n}=e;return r.createElement("button",Object.assign({className:["border-b pb-1 text-button font-black leading-button hover:opacity-60 active:opacity-40",a].join(" ")},n),r.createElement("p",null,t))}function l(e){let{color:t,name:a,defaultChecked:n}=e;const s={borderColor:t,background:t};return r.createElement("label",{className:"radio",style:{color:t}},r.createElement("input",{type:"radio",name:a,defaultChecked:n}),r.createElement("div",{className:"circle",style:s}))}function i(){return r.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z",fill:"black"}))}function o(e){let{onClick:t}=e;return r.createElement("button",{onClick:t,className:"absolute right-12 top-auto flex h-10 w-10 items-center justify-center border border-light hover:opacity-50"},r.createElement(i,null))}const c=[{name:"365 Signature Hoodie",price:"€33.95",image:"./hoodie.png",colors:["#99C3CC","#CC9999","#CB99CC","#A6CC99"]},{name:"Organic Skinny High Waist Jeans",price:"€33.95",image:"./jeans.png",colors:["#99C3CC","#CC9999","#CB99CC","#A6CC99"]},{name:"Organic Skinny High Waist Jeans 2",price:"€33.95",image:"./jeans2.png",colors:["#99C3CC","#CC9999","#CB99CC","#A6CC99"]}];function d(e){let{colors:t}=e;const a=Math.random().toString();return r.createElement("ul",{className:"grid grid-flow-col gap-2"},t.map(((e,t)=>r.createElement("li",{key:a+t},r.createElement(l,{color:e,name:a,defaultChecked:0===t})))))}function u(){const e=(0,r.useRef)();return r.createElement("div",{className:"flex items-center"},r.createElement("ul",{ref:e,className:"flex-r o scrolling ml-6 flex overflow-x-auto overflow-y-hidden scroll-smooth transition-all sm:ml-12 xl:ml-30"},c.map((e=>{let{name:t,image:a,price:n,colors:s}=e;return r.createElement("li",{key:t,className:"mr-8 flex-none"},r.createElement("img",{className:"h-72 w-56 object-cover hover:cursor-pointer hover:opacity-75",src:a,alt:t}),r.createElement("div",{className:"mt-3 text-small"},r.createElement("p",null,t),r.createElement("div",{className:"mt-1 flex items-center justify-between"},r.createElement("span",{className:"font-semibold"},n),r.createElement(d,{colors:s}))))}))),r.createElement(o,{onClick:()=>{e.current.scrollLeft+=35}}))}var m=()=>r.createElement("main",null,r.createElement("div",{className:"grid grid-cols-1 sm:min-h-screen sm:grid-cols-2"},r.createElement(n.S,{className:"h-full object-cover",src:"../images/life-style.png",alt:"Life Style Image",__imageData:a(1988)}),r.createElement("div",{className:"z-10 -mt-60 sm:mt-0"},r.createElement("div",{className:"p-8 pl-6 sm:p-12 xl:pt-24 xl:pl-30 xl:pr-36"},r.createElement("h4",{className:"font-title text-titleSm font-bold leading-mid text-white sm:text-title sm:leading-large sm:text-black"},"Everyday items, we have something to suit every occasion."),r.createElement("p",{className:"hidden pt-3 leading-normal text-light sm:block"},"At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus."),r.createElement(s,{text:"Shop All Everyday Items",className:"mt-8 border-white text-white  sm:text-black"})),r.createElement(u,null))));const g=()=>r.createElement("title",null,"Home Page")},1988:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d89808","images":{"fallback":{"src":"/featured-collection/static/736981f8619879020d29a5c56106c225/5958b/life-style.png","srcSet":"/featured-collection/static/736981f8619879020d29a5c56106c225/56685/life-style.png 360w,\\n/featured-collection/static/736981f8619879020d29a5c56106c225/7a55a/life-style.png 720w,\\n/featured-collection/static/736981f8619879020d29a5c56106c225/5958b/life-style.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/featured-collection/static/736981f8619879020d29a5c56106c225/a7b71/life-style.webp 360w,\\n/featured-collection/static/736981f8619879020d29a5c56106c225/67c47/life-style.webp 720w,\\n/featured-collection/static/736981f8619879020d29a5c56106c225/28bb0/life-style.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1728}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7e416d2bc49e58e4847c.js.map