(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,o=n(2648).Z,r=n(1598).Z,l=n(7273).Z,a=r(n(7294)),s=o(n(3121)),c=n(2675),d=n(139),u=n(8730);n(7238);var f=o(n(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,o,r,l,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&l(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;o.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let y=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:r,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:h,loading:p,srcString:y,config:v,unoptimized:w,loader:b,onLoadRef:x,onLoadingCompleteRef:S,setBlurComplete:j,setShowAltText:_,onLoad:C,onError:E}=e,k=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},k,n,{width:r,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:p,style:i({},d,u),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,y,h,x,S,j,w))},[y,h,x,S,j,E,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,y,h,x,S,j,w)},onError:e=>{_(!0),"blur"===h&&j(!0),E&&E(e)}})))}),v=a.forwardRef((e,t)=>{let n,o;var r,{src:m,sizes:v,unoptimized:w=!1,priority:b=!1,loading:x,className:S,quality:j,width:_,height:C,fill:E,style:k,onLoad:z,onLoadingComplete:O,placeholder:P="empty",blurDataURL:I,layout:R,objectFit:D,objectPosition:N,lazyBoundary:T,lazyRoot:F}=e,A=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=a.useContext(u.ImageConfigContext),M=a.useMemo(()=>{let e=g||L||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[L]),W=A,B=W.loader||f.default;delete W.loader;let V="__next_img_default"in B;if(V){if("custom"===M.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let q=B;B=e=>{let{config:t}=e,n=l(e,["config"]);return q(n)}}if(R){"fill"===R&&(E=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];Z&&(k=i({},k,Z));let G={responsive:"100vw",fill:"100vw"}[R];G&&!v&&(v=G)}let J="",U=p(_),K=p(C);if("object"==typeof(r=m)&&(h(r)||void 0!==r.src)){let X=h(m)?m.default:m;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(n=X.blurWidth,o=X.blurHeight,I=I||X.blurDataURL,J=X.src,!E){if(U||K){if(U&&!K){let H=U/X.width;K=Math.round(X.height*H)}else if(!U&&K){let $=K/X.height;U=Math.round(X.width*$)}}else U=X.width,K=X.height}}let Q=!b&&("lazy"===x||void 0===x);((m="string"==typeof m?m:J).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,Q=!1),M.unoptimized&&(w=!0),V&&m.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(w=!0);let[Y,ee]=a.useState(!1),[et,en]=a.useState(!1),ei=p(j),eo=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:N}:{},et?{}:{color:"transparent"},k),er="blur"===P&&I&&!Y?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:K,blurWidth:n,blurHeight:o,blurDataURL:I}),'")')}:{},el=function(e){let{config:t,src:n,unoptimized:i,width:o,quality:r,sizes:l,loader:a}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:o}=e;if(n){let r=/(^|\s)(1?\d?\d)vw/g,l=[];for(let a;a=r.exec(n);a)l.push(parseInt(a[2]));if(l.length){let s=.01*Math.min(...l);return{widths:o.filter(e=>e>=i[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:c,kind:"x"}}(t,o,l),d=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,i)=>"".concat(a({config:t,src:n,quality:r,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:a({config:t,src:n,quality:r,width:s[d]})}}({config:M,src:m,unoptimized:w,width:U,quality:ei,sizes:v,loader:B}),ea=m,es={imageSrcSet:el.srcSet,imageSizes:el.sizes,crossOrigin:W.crossOrigin},ec=a.useRef(z);a.useEffect(()=>{ec.current=z},[z]);let ed=a.useRef(O);a.useEffect(()=>{ed.current=O},[O]);let eu=i({isLazy:Q,imgAttributes:el,heightInt:K,widthInt:U,qualityInt:ei,className:S,imgStyle:eo,blurStyle:er,loading:x,config:M,fill:E,unoptimized:w,placeholder:P,loader:B,srcString:ea,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:en},W);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,Object.assign({},eu,{ref:t})),b?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+el.src+el.srcSet+el.sizes,rel:"preload",as:"image",href:el.srcSet?void 0:el.src},es))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:o,blurDataURL:r}=e,l=i||t,a=o||n,s=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),o=n(5536),r=n.n(o),l=n(7294),a=n(9008),s=n.n(a);n(5675);var c=n(1645),d=n(7072),u=n(1163);function f(){console.log("Logging");let e=l.useContext(d.Z),{user:t,checkUserLoggedIn:n}=e,o=(0,u.useRouter)();t&&o.push("/Landing");let[a,f]=l.useState(null),[g,h]=l.useState(!1),[p,m]=l.useState(null),[y,v]=l.useState(!1),[w,b]=l.useState(null),[x,S]=l.useState(null);l.useEffect(()=>{//!otp ? (document.querySelector('input').value = '') : null
console.log("I am in the useEffect"),console.log("User's value is: ",t),t&&o.push("/Landing")},[t]);let j=async e=>{h(!0),f(!1),m(null);let t=document.querySelector("input").value;console.log(t),await fetch("".concat(c.T5,"/api/otp/sendotp"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:t})}).then(e=>e.json()).then(e=>{console.log(e),m(null==e?void 0:e.message),h(!1),(null==e?void 0:e.error)||null==e.error?v(!1):v(!0),(null==e?void 0:e.error)||null==e.error?f(!0):f(!1)}).catch(e=>{console.log(e),m(e.message),f(!0),h(!1)})},_=async e=>{h(!0),await fetch("".concat(c.T5,"/api/otp/verifyotp"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({otp:w,phone:x})}).then(e=>e.json()).then(e=>{m(e.message),console.log(e),h(!1),e.error||null==e.error?f(!0):f(!1),e.error||n()}).catch(e=>{console.log("Error occured while verifying OTP"),console.log(e),m(data.message),h(!1),data.error||null==data.error?f(!0):f(!1)})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Cloud App"}),(0,i.jsx)("meta",{name:"description",content:"cloud app to manage content"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("section",{children:(0,i.jsx)("form",{onSubmit:e=>{e.preventDefault(),h(!0),j(e)},children:(0,i.jsxs)("div",{style:{display:"flex",gap:"1rem",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"80vh"},children:[(0,i.jsx)("h1",{children:"Welcome to SMS App!"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontFamily:r(),fontSize:"1.5rem"},children:"+91-"}),(0,i.jsx)("input",{type:"text",style:{display:"block",fontFamily:r(),fontSize:"1.5rem",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"0.5rem",outline:"none",width:"60%",maxWidth:"160px",margin:"0 auto"},disabled:y,onKeyDown:e=>{console.log(e.key),"Backspace"===e.key||"Delete"===e.key||/[0-9]/.test(e.key)||e.preventDefault()},onChange:e=>{S(e.target.value)}})]}),g&&!y?(0,i.jsx)("div",{children:"Sending SMS..."}):null,g&&y?(0,i.jsx)("div",{children:"Verifying OTP..."}):null,p?(0,i.jsx)("div",{style:a?{color:"red",fontSize:"small"}:{color:"green",fontSize:"small"},children:p}):null,y?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)("span",{children:"Verify OTP"}),(0,i.jsx)("input",{type:"text",style:{display:"block",fontFamily:r(),fontSize:"1.5rem",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"0.5rem",outline:"none",width:"30%",maxWidth:"100px",margin:"0 auto"},onChange:e=>{b(e.target.value)},disabled:!1,onKeyDown:e=>{console.log(e.key),"Backspace"===e.key||"Delete"===e.key||/[0-9]/.test(e.key)||e.preventDefault()}})]}),(0,i.jsx)("button",{style:{fontFamily:r(),fontSize:"1.5rem",padding:"0.5rem",width:"30%",maxWidth:"100px",margin:"0 auto"},type:"button",onClick:e=>{e.preventDefault(),console.log("verify"),_(e)},children:"Verify"})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{style:{fontFamily:r(),fontSize:"1.5rem",padding:"0.5rem",width:"50%",maxWidth:"150px",margin:"0 auto"},type:"submit",children:"Send OTP"})})]})})})]})}},5536:function(e){e.exports={style:{fontFamily:"'__Inter_9c9965', '__Inter_Fallback_9c9965'",fontStyle:"normal"},className:"__className_9c9965"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){n(9749)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);