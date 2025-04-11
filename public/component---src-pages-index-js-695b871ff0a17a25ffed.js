(self["webpackChunkgatsby_starter_hello_world"] = self["webpackChunkgatsby_starter_hello_world"] || []).push([[293],{

/***/ 2729:
/***/ (function(module) {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 2532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ ce; },
/* harmony export */   L: function() { return /* binding */ G; },
/* harmony export */   M: function() { return /* binding */ K; },
/* harmony export */   P: function() { return /* binding */ Z; },
/* harmony export */   _: function() { return /* binding */ u; },
/* harmony export */   a: function() { return /* binding */ h; },
/* harmony export */   b: function() { return /* binding */ P; },
/* harmony export */   c: function() { return /* binding */ _; },
/* harmony export */   g: function() { return /* binding */ A; },
/* harmony export */   h: function() { return /* binding */ W; }
/* harmony export */ });
/* unused harmony exports S, d, e, f, i, j, w */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2729);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},h.apply(this,arguments);}function u(e,t){if(null==e)return{};var a,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(a=r[i])>=0||(s[a]=e[a]);return s;}const g=(/* unused pure expression or super */ null && ([.25,.5,1,2])),p=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),m=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),f=800,w=800,y=(/* unused pure expression or super */ null && (4/3)),b=e=>console.warn(e),v=(e,t)=>e-t,E=(e,t)=>{switch(t){case"constrained":return`(min-width: ${e}px) ${e}px, 100vw`;case"fixed":return`${e}px`;case"fullWidth":return"100vw";default:return;}},k=e=>e.map(e=>`${e.src} ${e.width}w`).join(",\n");function S(e){const t=e.lastIndexOf(".");if(-1!==t){const a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function M(e){let{layout:t="constrained",width:a,height:i,sourceMetadata:s,breakpoints:r,aspectRatio:n,formats:o=["auto","webp"]}=e;return o=o.map(e=>e.toLowerCase()),t=l(t),a&&i?h({},e,{formats:o,layout:t,aspectRatio:a/i}):(s.width&&s.height&&!n&&(n=s.width/s.height),"fullWidth"===t?(a=a||s.width||r[r.length-1],i=i||Math.round(a/(n||y))):(a||(a=i&&n?i*n:s.width?s.width:i?Math.round(i/y):w),n&&!i?i=Math.round(a/n):n||(n=a/i)),h({},e,{width:a,height:i,aspectRatio:n,layout:t,formats:o}));}function N(e,t){if(t===void 0){t=20;}var a;e=M(e);const{generateImageSource:i,filename:s,aspectRatio:r}=e;return null==(a=i(s,t,Math.round(t/r),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function $(e){e=M(e);let{pluginName:t,sourceMetadata:a,generateImageSource:i,layout:s,fit:r,options:n,width:o,height:l,filename:d,reporter:c={warn:b},backgroundColor:u,placeholderURL:m}=e;if(t||c.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof i)throw new Error("generateImageSource must be a function");var f;a&&(a.width||a.height)?a.format||(a.format=S(d)):a={width:o,height:l,format:(null==(f=a)?void 0:f.format)||S(d)||"auto"};const y=new Set(e.formats);(0===y.size||y.has("auto")||y.has(""))&&(y.delete("auto"),y.delete(""),y.add(a.format)),y.has("jpg")&&y.has("png")&&(c.warn(`[${t}] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead`),y.delete("jpg"===a.format?"png":"jpg"));const v=function(e){const{width:t,height:a,filename:i,layout:s="constrained",sourceMetadata:r,reporter:n={warn:b},breakpoints:o=p}=e,l=Object.entries({width:t,height:a}).filter(_ref=>{let[e,t]=_ref;return"number"==typeof t&&t<1;});if(l.length)throw new Error(`Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are ${l.map(e=>e.join(": ")).join(", ")}`);return"fixed"===s?function(_ref2){let{filename:e,sourceMetadata:t,width:a,height:i,fit:s="cover",outputPixelDensities:r=g,reporter:n={warn:b}}=_ref2;let o=t.width/t.height;const l=I(r);if(a&&i){const e=j(t,{width:a,height:i,fit:s});a=e.width,i=e.height,o=e.aspectRatio;}a?i||(i=Math.round(a/o)):a=i?Math.round(i*o):w;const d=a;if(t.width<a||t.height<i){const s=t.width<a?"width":"height";n.warn(`\nThe requested ${s} "${"width"===s?a:i}px" for the image ${e} was larger than the actual image ${s} of ${t[s]}px. If possible, replace the current image with a larger one.`),"width"===s?(a=t.width,i=Math.round(a/o)):a=(i=t.height)*o;}return{sizes:l.filter(e=>e>=1).map(e=>Math.round(e*a)).filter(e=>e<=t.width),aspectRatio:o,presentationWidth:d,presentationHeight:Math.round(d/o),unscaledWidth:a};}(e):"constrained"===s?x(e):"fullWidth"===s?x(h({breakpoints:o},e)):(n.warn(`No valid layout was provided for the image at ${i}. Valid image layouts are fixed, fullWidth, and constrained. Found ${s}`),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(h({},e,{sourceMetadata:a})),N={sources:[]};let $=e.sizes;$||($=E(v.presentationWidth,s)),y.forEach(e=>{const a=v.sizes.map(a=>{const s=i(d,a,Math.round(a/v.aspectRatio),e,r,n);if(null!=s&&s.width&&s.height&&s.src&&s.format)return s;c.warn(`[${t}] The resolver for image ${d} returned an invalid value.`);}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){const e=a.find(e=>e.width===v.unscaledWidth)||a[0];e&&(N.fallback={src:e.src,srcSet:k(a),sizes:$});}else{var s;null==(s=N.sources)||s.push({srcSet:k(a),sizes:$,type:`image/${e}`});}});const L={images:N,layout:s,backgroundColor:u};switch(m&&(L.placeholder={fallback:m}),s){case"fixed":L.width=v.presentationWidth,L.height=v.presentationHeight;break;case"fullWidth":L.width=1,L.height=1/v.aspectRatio;break;case"constrained":L.width=e.width||v.presentationWidth||1,L.height=(L.width||1)/v.aspectRatio;}return L;}const I=e=>Array.from(new Set([1].concat(_toConsumableArray(e)))).sort(v);function x(_ref3){let{sourceMetadata:e,width:t,height:a,fit:i="cover",outputPixelDensities:s=g,breakpoints:r,layout:n}=_ref3;let o,l=e.width/e.height;const d=I(s);if(t&&a){const s=j(e,{width:t,height:a,fit:i});t=s.width,a=s.height,l=s.aspectRatio;}t=t&&Math.min(t,e.width),a=a&&Math.min(a,e.height),t||a||(a=(t=Math.min(f,e.width))/l),t||(t=a*l);const c=t;return(e.width<t||e.height<a)&&(t=e.width,a=e.height),t=Math.round(t),(null==r?void 0:r.length)>0?(o=r.filter(t=>t<=e.width),o.length<r.length&&!o.includes(e.width)&&o.push(e.width)):(o=d.map(e=>Math.round(e*t)),o=o.filter(t=>t<=e.width)),"constrained"!==n||o.includes(t)||o.push(t),o=o.sort(v),{sizes:o,aspectRatio:l,presentationWidth:c,presentationHeight:Math.round(c/l),unscaledWidth:t};}function j(e,t){const a=e.width/e.height;let i=t.width,s=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,s=t.height?t.height:e.height;break;case"inside":{const e=t.width?t.width:Number.MAX_SAFE_INTEGER,r=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(e,Math.round(r*a)),s=Math.min(r,Math.round(e/a));break;}case"outside":{const e=t.width?t.width:0,r=t.height?t.height:0;i=Math.max(e,Math.round(r*a)),s=Math.max(r,Math.round(e/a));break;}default:t.width&&!t.height&&(i=t.width,s=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),s=t.height);}return{width:i,height:s,aspectRatio:i/s};}const L=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),T=(/* unused pure expression or super */ null && (["images","placeholder"])),W=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function R(){return true&&true;}const _=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},C=e=>{var t,a,i;return null==(t=_(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},O=e=>{var t,a,i;return null==(t=_(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function z(e,t,a){const i={};let s="gatsby-image-wrapper";return R()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(R()||(i.display="inline-block",i.verticalAlign="top"),s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:i};}function D(e){var t;let{baseUrl:a,urlBuilder:i,sourceWidth:s,sourceHeight:r,pluginName:n="getImageData",formats:o=["auto"],breakpoints:l,options:d}=e,c=u(e,L);return null!=(t=l)&&t.length||"fullWidth"!==c.layout&&"FULL_WIDTH"!==c.layout||(l=m),$(h({},c,{pluginName:n,generateImageSource:(e,t,a,s)=>({width:t,height:a,format:s,src:i({baseUrl:e,width:t,height:a,options:d,format:s})}),filename:a,formats:o,breakpoints:l,sourceMetadata:{width:s,height:r,format:"auto"}}));}function P(e,t,a,i,s){if(s===void 0){s={};}return R()||(s=h({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},s)),h({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:h({},s,{opacity:t?1:0})});}function A(e,t,a,i,s,r,n,o){const l={};r&&(l.backgroundColor=r,"fixed"===a?(l.width=i,l.height=s,l.backgroundColor=r,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),n&&(l.objectFit=n),o&&(l.objectPosition=o);const d=h({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return R()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}function q(e,t){var _s$images$sources2,_r$sources;const{images:a,placeholder:i}=e,s=h({},u(e,T),{images:h({},a,{sources:[]}),placeholder:i&&h({},i,{sources:[]})});var r;return t.forEach(_ref4=>{var _s$images$sources;let{media:t,image:a}=_ref4;t?(a.layout!==e.layout&&"development"==="production"&&0,(_s$images$sources=s.images.sources).push.apply(_s$images$sources,_toConsumableArray(a.images.sources.map(e=>h({},e,{media:t}))).concat([{media:t,srcSet:a.images.fallback.srcSet}])),s.placeholder&&s.placeholder.sources.push({media:t,srcSet:a.placeholder.fallback})): false&&0;}),(_s$images$sources2=s.images.sources).push.apply(_s$images$sources2,_toConsumableArray(a.sources)),null!=i&&i.sources&&(null==(r=s.placeholder)||(_r$sources=r.sources).push.apply(_r$sources,_toConsumableArray(i.sources))),s;}const H=["children"],F=function(_ref5){let{layout:t,width:a,height:i}=_ref5;return"fullWidth"===t?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{maxWidth:a,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${i}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null;},G=function(a){let{children:i}=a,s=u(a,H);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,h({},s)),i,null);},V=["src","srcSet","loading","alt","shouldLoad"],B=["fallback","sources","shouldLoad"],U=function(t){let{src:a,srcSet:i,loading:s,alt:r="",shouldLoad:n}=t,o=u(t,V);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",h({},o,{decoding:"async",loading:s,src:n?a:void 0,"data-src":n?void 0:a,srcSet:n?i:void 0,"data-srcset":n?void 0:i,alt:r}));},Y=function(t){let{fallback:a,sources:i=[],shouldLoad:s=!0}=t,r=u(t,B);const n=r.sizes||(null==a?void 0:a.sizes),o=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(U,h({},r,a,{sizes:n,shouldLoad:s}));return i.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture",null,i.map(_ref6=>{let{media:t,srcSet:a,type:i}=_ref6;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:n});}),o):o;};var X;U.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},Y.displayName="Picture",Y.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};const J=["fallback"],Z=function(t){let{fallback:a}=t,i=u(t,J);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,h({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",h({},i));};Z.displayName="Placeholder",Z.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(X=Y.propTypes)?void 0:X.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null;}};const K=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,h({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,h({},t,{shouldLoad:!0}))));};K.displayName="MainImage",K.propTypes=Y.propTypes;const Q=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],ee=["style","className"],te=e=>e.replace(/\n/g,""),ae=function(e,t,a){for(var _len=arguments.length,i=new Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){i[_key-3]=arguments[_key];}return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat(i)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`);},ie={image:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,alt:ae},se=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],re=["style","className"],ne=new Set();let oe,le;const de=function(e){let{as:t="div",image:a,style:l,backgroundColor:d,className:c,class:g,onStartLoad:p,onLoad:m,onError:f}=e,w=u(e,se);const{width:y,height:b,layout:v}=a,E=z(y,b,v),{style:k,className:S}=E,M=u(E,re),N=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),$=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>JSON.stringify(a.images),[a.images]);g&&(c=g);const I=function(e,t,a){let i="";return"fullWidth"===e&&(i=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(i=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),i;}(v,y,b);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{oe||(oe=__webpack_require__.e(/* import() */ 108).then(__webpack_require__.bind(__webpack_require__, 1108)).then(_ref7=>{let{renderImageToString:e,swapPlaceholderImage:t}=_ref7;return le=e,{renderImageToString:e,swapPlaceholderImage:t};}));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&W())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr");},0)):(null==p||p({wasCached:!0}),e.addEventListener("load",function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr");},0);})),void ne.add($);if(le&&ne.has($))return;let t,i;return oe.then(_ref8=>{let{renderImageToString:e,swapPlaceholderImage:s}=_ref8;N.current&&(N.current.innerHTML=e(h({isLoading:!0,isLoaded:ne.has($),image:a},w)),ne.has($)||(t=requestAnimationFrame(()=>{N.current&&(i=s(N.current,$,ne,l,p,m,f));})));}),()=>{t&&cancelAnimationFrame(t),i&&i();};},[a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{ne.has($)&&le&&(N.current.innerHTML=le(h({isLoading:ne.has($),isLoaded:ne.has($),image:a},w)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}));},[a]),/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t,h({},M,{style:h({},k,l,{backgroundColor:d}),className:`${S}${c?` ${c}`:""}`,ref:N,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}));},ce=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(e){return e.image?(R()||"development"!=="production"||0,/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(de,e)):( false&&0,null);});ce.propTypes=ie,ce.displayName="GatsbyImage";const he=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function ue(t){return function(a){let{src:i,__imageData:s,__error:r}=a,n=u(a,he);return r&&console.warn(r),s?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(t,h({image:s},n)):(console.warn("Image not loaded",i),r||"development"!=="production"||0,null);};}const ge=ue(function(t){let{as:a="div",className:i,class:s,style:r,image:n,loading:o="lazy",imgClassName:l,imgStyle:d,backgroundColor:c,objectFit:g,objectPosition:p}=t,m=u(t,Q);if(!n)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(i=s),d=h({objectFit:g,objectPosition:p,backgroundColor:c},d);const{width:f,height:w,layout:y,images:b,placeholder:v,backgroundColor:E}=n,k=z(f,w,y),{style:S,className:M}=k,N=u(k,ee),$={fallback:void 0,sources:[]};return b.fallback&&($.fallback=h({},b.fallback,{srcSet:b.fallback.srcSet?te(b.fallback.srcSet):void 0})),b.sources&&($.sources=b.sources.map(e=>h({},e,{srcSet:te(e.srcSet)}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(a,h({},N,{style:h({},S,r,{backgroundColor:c}),className:`${M}${i?` ${i}`:""}`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(G,{layout:y,width:f,height:w},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Z,h({},A(v,!1,y,f,w,E,g,p))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,h({"data-gatsby-image-ssr":"",className:l},m,P("eager"===o,!1,$,o,d)))));}),pe=function(e,t){for(var _len2=arguments.length,a=new Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){a[_key2-2]=arguments[_key2];}return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`);},me=new Set(["fixed","fullWidth","constrained"]),fe={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,alt:ae,width:pe,height:pe,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:e=>{if(void 0!==e.layout&&!me.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`);}};ge.displayName="StaticImage",ge.propTypes=fe;const we=ue(ce);we.displayName="StaticImage",we.propTypes=fe;

/***/ }),

/***/ 2992:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(8154);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 9 modules
var gatsby_browser_entry = __webpack_require__(4794);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
"use client";




const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/react.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const {
  Consumer,
  Provider
} = ThemeContext;
function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  minBreakpoint = DEFAULT_MIN_BREAKPOINT,
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: {
      ...prefixes
    },
    breakpoints,
    minBreakpoint,
    dir
  }), [prefixes, breakpoints, minBreakpoint, dir]);
  return /*#__PURE__*/_jsx(Provider, {
    value: contextValue,
    children: children
  });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,react.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0,react.useContext)(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = (0,react.useContext)(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}
function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent;
  // If it's a functional component make sure we don't break it with a ref
  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({
    ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_jsx(Component, {
      ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}

/* harmony default export */ var esm_ThemeProvider = ((/* unused pure expression or super */ null && (ThemeProvider)));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Container.js
"use client";





const Container = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
/* harmony default export */ var esm_Container = (Container);
// EXTERNAL MODULE: ./node_modules/react-reveal/Fade.js
var Fade = __webpack_require__(5438);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade);
// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(6848);
;// CONCATENATED MODULE: ./src/context/context.js
const PortfolioContext=/*#__PURE__*/react.createContext();const PortfolioProvider=PortfolioContext.Provider;const PortfolioConsumer=PortfolioContext.Consumer;/* harmony default export */ var context = (PortfolioContext);
;// CONCATENATED MODULE: ./src/components/Hero/Hero.jsx
const Header=()=>{const{hero,footer}=(0,react.useContext)(context);const{title,name,subtitle}=hero;const{networks}=footer;const{0:isDesktop,1:setIsDesktop}=(0,react.useState)(false);const{0:isMobile,1:setIsMobile}=(0,react.useState)(false);(0,react.useEffect)(()=>{if(window.innerWidth>769){setIsDesktop(true);setIsMobile(false);}else{setIsMobile(true);setIsDesktop(false);}},[]);return/*#__PURE__*/react.createElement("section",{id:"hero",className:"jumbotron"},/*#__PURE__*/react.createElement("nav",null,networks&&networks.map(network=>{const{id,name:networkName,url}=network;return/*#__PURE__*/react.createElement("a",{key:id,href:url||'https://github.com/cobidev/gatsby-simplefolio',rel:"noopener noreferrer",target:"_blank","aria-label":networkName},/*#__PURE__*/react.createElement("i",{className:`fa fa-${networkName||'refresh'} fa-inverse`}));})),/*#__PURE__*/react.createElement(esm_Container,null,/*#__PURE__*/react.createElement((Fade_default()),{left:isDesktop,bottom:isMobile,duration:1000,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("h1",{className:"hero-title"},title||'Hi, my name is',' ',/*#__PURE__*/react.createElement("span",{className:"text-color-main"},name||'Your Name'),/*#__PURE__*/react.createElement("br",null),subtitle||"I'm the Unknown Developer.")),/*#__PURE__*/react.createElement((Fade_default()),{left:isDesktop,bottom:isMobile,duration:1000,delay:1000,distance:"30px"},/*#__PURE__*/react.createElement("p",{className:"hero-cta"},/*#__PURE__*/react.createElement("span",{className:"cta-btn cta-btn--hero"},/*#__PURE__*/react.createElement(modules/* Link */.N_,{to:"skills",smooth:true,duration:1000},"Skills")),/*#__PURE__*/react.createElement("span",{className:"cta-btn cta-btn--hero"},/*#__PURE__*/react.createElement(modules/* Link */.N_,{to:"projects",smooth:true,duration:1000},"Projects")),/*#__PURE__*/react.createElement("span",{className:"cta-btn cta-btn--hero"},/*#__PURE__*/react.createElement(modules/* Link */.N_,{to:"about",smooth:true,duration:1000},"About")),/*#__PURE__*/react.createElement("span",{className:"cta-btn cta-btn--hero"},/*#__PURE__*/react.createElement(modules/* Link */.N_,{to:"contact",smooth:true,duration:1000},"Contact"))))));};/* harmony default export */ var Hero = (Header);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Row.js
"use client";





const Row = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
/* harmony default export */ var esm_Row = (Row);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Col.js
"use client";





function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: classnames_default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/react.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...colProps,
    ref: ref,
    className: classnames_default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ var esm_Col = (Col);
;// CONCATENATED MODULE: ./src/components/Title/Title.jsx
const Title=_ref=>{let{title}=_ref;return/*#__PURE__*/react.createElement((Fade_default()),{bottom:true,duration:1000,delay:300,distance:"0px"},/*#__PURE__*/react.createElement("h2",{className:"section-title"},title));};/* harmony default export */ var Title_Title = (Title);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/index.browser-006c3456.js
var index_browser_006c3456 = __webpack_require__(2532);
;// CONCATENATED MODULE: ./src/components/Image/AltAboutImg.jsx
const BurgerImg=_ref=>{let{filename,alt}=_ref;return/*#__PURE__*/react.createElement(gatsby_browser_entry.StaticQuery,{query:"1431383945",render:data=>{const image=data.images.edges.find(n=>n.node.relativePath.includes(filename));if(!image){return null;}const imageData=(0,index_browser_006c3456.c)(image.node.childImageSharp.gatsbyImageData);return/*#__PURE__*/react.createElement(index_browser_006c3456.G,{alt:alt,image:imageData});}});};/* harmony default export */ var AltAboutImg = (BurgerImg);
;// CONCATENATED MODULE: ./src/components/About/About.jsx
// import AboutImg from '../Image/AboutImg';
const About=()=>{const{about}=(0,react.useContext)(context);const{img,paragraphOne,paragraphTwo,paragraphThree,resume,linkedin,github,leetcode}=about;const{0:isDesktop,1:setIsDesktop}=(0,react.useState)(false);const{0:isMobile,1:setIsMobile}=(0,react.useState)(false);(0,react.useEffect)(()=>{if(window.innerWidth>769){setIsDesktop(true);setIsMobile(false);}else{setIsMobile(true);setIsDesktop(false);}},[]);return/*#__PURE__*/react.createElement("section",{id:"about"},/*#__PURE__*/react.createElement(esm_Container,null,/*#__PURE__*/react.createElement(Title_Title,{title:"About"}),/*#__PURE__*/react.createElement(esm_Row,{className:"about-wrapper"},/*#__PURE__*/react.createElement(esm_Col,{md:6,sm:12},/*#__PURE__*/react.createElement((Fade_default()),{bottom:true,duration:750,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"about-wrapper__image"},/*#__PURE__*/react.createElement(AltAboutImg,{alt:"profile picture",filename:img})))),/*#__PURE__*/react.createElement(esm_Col,{md:6,sm:12},/*#__PURE__*/react.createElement((Fade_default()),{left:isDesktop,bottom:isMobile,duration:750,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"about-wrapper__info"},/*#__PURE__*/react.createElement("p",{className:"about-wrapper__info-text"},paragraphOne),/*#__PURE__*/react.createElement("p",{className:"about-wrapper__info-text"},paragraphTwo),/*#__PURE__*/react.createElement("p",{className:"about-wrapper__info-text"},paragraphThree),/*#__PURE__*/react.createElement("div",{className:"d-flex flex-row justify-content-left"},resume&&/*#__PURE__*/react.createElement("span",{className:"mx-2"},/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:resume},"Resume")),linkedin&&/*#__PURE__*/react.createElement("span",{className:"mx-2"},/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:linkedin},"LinkedIn")),github&&/*#__PURE__*/react.createElement("span",{className:"mx-2"},/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:github},"Github")),leetcode&&/*#__PURE__*/react.createElement("span",{className:"mx-2"},/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:leetcode},"Leetcode")))))))));};/* harmony default export */ var About_About = (About);
;// CONCATENATED MODULE: ./node_modules/react-tilt/dist/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.tsx


var Tilt = class extends react.Component {
  constructor(props) {
    super(props);
    this.ref = react.createRef();
    this.state = {
      style: {}
    };
    const defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1e3,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: "1.1",
      speed: "1000",
      transition: true,
      axis: null,
      reset: true
    };
    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.transitionTimeout = null;
    this.updateCall = null;
    this.element = null;
    this.settings = Object.assign({}, defaultSettings, this.props.options);
    this.reverse = this.settings.reverse ? -1 : 1;
    this.onMouseEnter = this.onMouseEnter.bind(this, this.props.onMouseEnter);
    this.onMouseMove = this.onMouseMove.bind(this, this.props.onMouseMove);
    this.onMouseLeave = this.onMouseLeave.bind(this, this.props.onMouseLeave);
  }
  componentDidMount() {
    this.element = this.ref.current;
    setTimeout(() => {
      if (this.element.parentElement.querySelector(":hover") === this.element) {
        this.onMouseEnter();
      }
    }, 0);
  }
  componentWillUnmount() {
    clearTimeout(this.transitionTimeout);
    cancelAnimationFrame(this.updateCall);
  }
  onMouseEnter(cb = () => {
  }, e) {
    this.updateElementPosition();
    this.setState(Object.assign({}, this.state, {
      style: __spreadProps(__spreadValues({}, this.state.style), {
        willChange: "transform"
      })
    }));
    this.setTransition();
    return cb(e);
  }
  reset() {
    window.requestAnimationFrame(() => {
      this.setState(Object.assign({}, this.state, {
        style: __spreadProps(__spreadValues({}, this.state.style), {
          transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        })
      }));
    });
  }
  onMouseMove(cb = () => {
  }, e) {
    e.persist();
    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall);
    }
    this.event = e;
    this.updateCall = requestAnimationFrame(this.update.bind(this, e));
    return cb(e);
  }
  setTransition() {
    clearTimeout(this.transitionTimeout);
    this.setState(Object.assign({}, this.state, {
      style: __spreadProps(__spreadValues({}, this.state.style), {
        transition: `${this.settings.speed}ms ${this.settings.easing}`
      })
    }));
    this.transitionTimeout = setTimeout(() => {
      this.setState(Object.assign({}, this.state, {
        style: __spreadProps(__spreadValues({}, this.state.style), {
          transition: ""
        })
      }));
    }, this.settings.speed);
  }
  onMouseLeave(cb = () => {
  }, e) {
    this.setTransition();
    if (this.settings.reset) {
      this.reset();
    }
    return cb(e);
  }
  getValues(e) {
    const x = (e.nativeEvent.clientX - this.left) / this.width;
    const y = (e.nativeEvent.clientY - this.top) / this.height;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);
    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);
    const percentageX = _x * 100;
    const percentageY = _y * 100;
    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY
    };
  }
  updateElementPosition() {
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }
  update(e) {
    const values = this.getValues(e);
    this.setState(Object.assign({}, this.state, {
      style: __spreadProps(__spreadValues({}, this.state.style), {
        transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === "x" ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === "y" ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`
      })
    }));
    this.updateCall = null;
  }
  render() {
    const style = Object.assign({}, this.props.style, this.state.style);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "div",
      {
        style,
        ref: this.ref,
        className: this.props.className,
        onMouseEnter: this.onMouseEnter,
        onMouseMove: this.onMouseMove,
        onMouseLeave: this.onMouseLeave,
        children: this.props.children
      }
    );
  }
};


;// CONCATENATED MODULE: ./src/components/Projects/Projects.jsx
const Projects=()=>{const{projects}=(0,react.useContext)(context);const{0:isDesktop,1:setIsDesktop}=(0,react.useState)(false);const{0:isMobile,1:setIsMobile}=(0,react.useState)(false);(0,react.useEffect)(()=>{if(window.innerWidth>769){setIsDesktop(true);setIsMobile(false);}else{setIsMobile(true);setIsDesktop(false);}},[]);// Responsive on App Refresh only
const videoOpts={height:isMobile?'202':'360',width:isMobile?'360':'640'};return/*#__PURE__*/react.createElement("section",{id:"projects"},/*#__PURE__*/react.createElement(esm_Container,null,/*#__PURE__*/react.createElement("div",{className:"project-wrapper"},/*#__PURE__*/react.createElement(Title_Title,{title:"Projects"}),projects.map(project=>{const{title,info,info2,info3,info4,url,awsdepo,frontrepo,awstdepo,backrepo,frontdepo,backdepo,imageUrl,imageAlt,id,contributors,stack,note}=project;return/*#__PURE__*/react.createElement(esm_Row,{key:id},/*#__PURE__*/react.createElement(esm_Col,{lg:4,sm:12},/*#__PURE__*/react.createElement((Fade_default()),{left:isDesktop,bottom:isMobile,duration:750,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"project-wrapper__text"},/*#__PURE__*/react.createElement("h3",{className:"project-wrapper__text-title"},title),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:"tech-stack"},stack.map(tech=>{return/*#__PURE__*/react.createElement("div",{className:"tech",key:`stack-${tech}`},tech);})),/*#__PURE__*/react.createElement("p",{className:"bold"},contributors?'Collaborators: ':'Solo Project',/*#__PURE__*/react.createElement("span",{className:"italics"},contributors&&contributors)),/*#__PURE__*/react.createElement("p",null,info),/*#__PURE__*/react.createElement("p",{className:"bold italics"},info2),info3&&/*#__PURE__*/react.createElement("p",{dangerouslySetInnerHTML:{__html:info3}}),info4&&/*#__PURE__*/react.createElement("p",{dangerouslySetInnerHTML:{__html:info4}}),note&&/*#__PURE__*/react.createElement("p",{className:"italics note"},"Note: ",note)),url&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:url},"See Live"),frontrepo&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:frontrepo},"Frontend Source Code"),backrepo&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:backrepo},"Backend Source Code"),awsdepo&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:awsdepo},"AWS Terraform Code"),awstdepo&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:awstdepo},"AWS Terraform Traditional Approach Code"),frontdepo&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:frontdepo},"Frontend Deployment Code"),backdepo&&/*#__PURE__*/react.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:backdepo},"Backend Deployment Code")))),/*#__PURE__*/react.createElement(esm_Col,{lg:8,sm:12},/*#__PURE__*/react.createElement((Fade_default()),{right:isDesktop,bottom:isMobile,duration:750,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"project-wrapper__image"},/*#__PURE__*/react.createElement(Tilt,{options:{reverse:false,max:8,perspective:1000,scale:1,speed:300,transition:true,axis:null,reset:true,easing:'cubic-bezier(.03,.98,.52,.99)'}},/*#__PURE__*/react.createElement("div",{"data-tilt":true,className:"thumbnail rounded"},/*#__PURE__*/react.createElement("img",{src:imageUrl,alt:imageAlt,className:"project-image"})))))));}))));};/* harmony default export */ var Projects_Projects = (Projects);
;// CONCATENATED MODULE: ./src/components/Contact/Contact.jsx
const Contact=()=>{return/*#__PURE__*/react.createElement("section",{id:"contact"},/*#__PURE__*/react.createElement(esm_Container,null,/*#__PURE__*/react.createElement(Title_Title,{title:"Contact"}),/*#__PURE__*/react.createElement((Fade_default()),{bottom:true,duration:750,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"contact-wrapper"},/*#__PURE__*/react.createElement("form",{name:"contact",method:"POST","data-netlify":"true",attribute:"netlify-honeypot='bot-field'"},/*#__PURE__*/react.createElement("input",{type:"hidden",name:"bot-field"}),/*#__PURE__*/react.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),/*#__PURE__*/react.createElement("input",{className:"form-input input",type:"text",name:"name",required:true,placeholder:"Name"}),/*#__PURE__*/react.createElement("input",{required:true,type:"email",name:"email",className:" input",placeholder:"Email"}),/*#__PURE__*/react.createElement("textarea",{required:true,name:"message",rows:"6",className:" input",placeholder:"Message"}),/*#__PURE__*/react.createElement("button",{className:"cta-btn cta-btn--hero",type:"submit"},"Send"))))));};/* harmony default export */ var Contact_Contact = (Contact);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.jsx
// import GithubButtons from '../GithubButtons/GithubButtons';
// import { githubButtons } from '../../mock/data';
const Footer=()=>{const{footer}=(0,react.useContext)(context);const{networks}=footer;// const { isEnabled } = githubButtons;
return/*#__PURE__*/react.createElement("footer",{className:"footer navbar-static-bottom"},/*#__PURE__*/react.createElement(esm_Container,null,/*#__PURE__*/react.createElement("span",{className:"back-to-top"},/*#__PURE__*/react.createElement(modules/* Link */.N_,{to:"hero",smooth:true,duration:1000},/*#__PURE__*/react.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"}))),/*#__PURE__*/react.createElement("div",{className:"social-links"},networks&&networks.map(network=>{const{id,name,url}=network;return/*#__PURE__*/react.createElement("a",{key:id,href:url||'https://github.com/cobidev/gatsby-simplefolio',rel:"noopener noreferrer",target:"_blank","aria-label":name},/*#__PURE__*/react.createElement("i",{className:`fa fa-${name||'refresh'} fa-inverse`}));}))));};/* harmony default export */ var Footer_Footer = (Footer);// Link+Badge to follow a GitHub
// https://img.shields.io/github/followers/{username}.svg?style=social&label=Follow&maxAge=2592000
;// CONCATENATED MODULE: ./src/components/Image/Icon.jsx
const Icon=_ref=>{let{filename,alt}=_ref;return/*#__PURE__*/react.createElement(gatsby_browser_entry.StaticQuery,{query:"267782867",render:data=>{const image=data.images.edges.find(n=>n.node.relativePath.includes(filename));if(!image){return null;}const imageData=(0,index_browser_006c3456.c)(image.node.childImageSharp.gatsbyImageData);return/*#__PURE__*/react.createElement(index_browser_006c3456.G,{alt:alt,image:imageData});}});};/* harmony default export */ var Image_Icon = (Icon);
;// CONCATENATED MODULE: ./src/components/Skills/SkillList.jsx
const SkillList=_ref=>{let{skills}=_ref;return/*#__PURE__*/react.createElement("div",{className:"skill-list"},skills.map((skill,idx)=>/*#__PURE__*/react.createElement("div",{className:"ind-skill",key:idx},/*#__PURE__*/react.createElement("div",{className:"skill-img-container"},/*#__PURE__*/react.createElement(Image_Icon,{filename:skill.img,alt:skill.name})),skill.name)));};/* harmony default export */ var Skills_SkillList = (SkillList);
;// CONCATENATED MODULE: ./src/components/Image/BurgerImg.jsx
const BurgerImg_BurgerImg=_ref=>{let{filename,alt}=_ref;return/*#__PURE__*/react.createElement(gatsby_browser_entry.StaticQuery,{query:"2136078258",render:data=>{const image=data.images.edges.find(n=>n.node.relativePath.includes(filename));if(!image){return null;}const imageData=(0,index_browser_006c3456.c)(image.node.childImageSharp.gatsbyImageData);return/*#__PURE__*/react.createElement(index_browser_006c3456.G,{alt:alt,image:imageData});}});};/* harmony default export */ var Image_BurgerImg = (BurgerImg_BurgerImg);
;// CONCATENATED MODULE: ./src/components/Skills/Skills.jsx
const defaultSkills={title:'None',stacks:[],burger:'burger_blank.png'};const Skills=()=>{const{skills}=(0,react.useContext)(context);const{frontEnd,backEnd,tools}=skills;const{0:isDesktop,1:setIsDesktop}=(0,react.useState)(false);const{0:isMobile,1:setIsMobile}=(0,react.useState)(false);const{0:hoverLayer,1:setHoverLayer}=(0,react.useState)(null);const{0:clickLayer,1:setClickLayer}=(0,react.useState)(null);const{0:activeLayer,1:setActiveLayer}=(0,react.useState)(defaultSkills);const{0:burger,1:setBurger}=(0,react.useState)(defaultSkills.burger);(0,react.useEffect)(()=>{if(window.innerWidth>769){setIsDesktop(true);setIsMobile(false);}else{setIsMobile(true);setIsDesktop(false);}},[]);// Load the burger image once skills load
(0,react.useEffect)(()=>{setBurger(activeLayer.burger);},[skills,activeLayer]);const clickBurger=lay=>{setClickLayer(lay);};const hoverBurger=lay=>{setHoverLayer(lay);};// clickLayer takes priority over hoverLayer
(0,react.useEffect)(()=>{const layer=clickLayer||hoverLayer;if(!layer)setActiveLayer(defaultSkills);else setActiveLayer(layer);},[hoverLayer,clickLayer]);return/*#__PURE__*/react.createElement("section",{id:"skills"},/*#__PURE__*/react.createElement(esm_Container,null,/*#__PURE__*/react.createElement(Title_Title,{title:"Skills"}),/*#__PURE__*/react.createElement(esm_Row,{className:"skills-wrapper"},/*#__PURE__*/react.createElement(esm_Col,{md:6,sm:12},/*#__PURE__*/react.createElement((Fade_default()),{bottom:true,duration:750,delay:500,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"skills-wrapper__image"},/*#__PURE__*/react.createElement("div",{className:"burger-wrapper"},/*#__PURE__*/react.createElement("div",{className:"burger-overlay"},/*#__PURE__*/react.createElement("div",{onClick:()=>clickBurger(frontEnd),onMouseEnter:()=>hoverBurger(frontEnd),onMouseLeave:()=>hoverBurger(defaultSkills),className:"top-overlay"}),/*#__PURE__*/react.createElement("div",{onClick:()=>clickBurger(tools),onMouseEnter:()=>hoverBurger(tools),onMouseLeave:()=>hoverBurger(defaultSkills),className:"mid-overlay"}),/*#__PURE__*/react.createElement("div",{onClick:()=>clickBurger(backEnd),onMouseEnter:()=>hoverBurger(backEnd),onMouseLeave:()=>hoverBurger(defaultSkills),className:"bot-overlay"})),/*#__PURE__*/react.createElement(Image_BurgerImg,{alt:`image of ${burger}`,filename:burger}))))),/*#__PURE__*/react.createElement(esm_Col,{md:6,sm:12},activeLayer.title==='None'&&/*#__PURE__*/react.createElement((Fade_default()),{left:isDesktop,bottom:isMobile,duration:500,delay:250,distance:"30px"},/*#__PURE__*/react.createElement("div",{className:"skills-wrapper__info"},/*#__PURE__*/react.createElement("h3",{className:"skills-wrapper__info-text"},"\"Apps are like burgers. They've got layers.\"   - Shrek ",/*#__PURE__*/react.createElement("span",{className:"small"},"(rumored)")),/*#__PURE__*/react.createElement("p",{className:"skills-wrapper__info-text"},"Select a layer on the burger to show stack skills."))),activeLayer.title==='Front End'&&/*#__PURE__*/react.createElement((Fade_default()),{right:isDesktop,bottom:isMobile,duration:500,delay:250,distance:"60px"},/*#__PURE__*/react.createElement("div",{className:"skills-wrapper__info"},/*#__PURE__*/react.createElement("h3",{className:"skills-wrapper__info-text__center"},"Front End"),/*#__PURE__*/react.createElement(Skills_SkillList,{skills:frontEnd.stacks}))),activeLayer.title==='Back End'&&/*#__PURE__*/react.createElement((Fade_default()),{right:isDesktop,bottom:isMobile,duration:500,delay:250,distance:"60px"},/*#__PURE__*/react.createElement("div",{className:"skills-wrapper__info"},/*#__PURE__*/react.createElement("h3",{className:"skills-wrapper__info-text__center"},"Back End"),/*#__PURE__*/react.createElement(Skills_SkillList,{skills:backEnd.stacks}))),activeLayer.title==='Tools'&&/*#__PURE__*/react.createElement((Fade_default()),{right:isDesktop,bottom:isMobile,duration:500,delay:250,distance:"60px"},/*#__PURE__*/react.createElement("div",{className:"skills-wrapper__info"},/*#__PURE__*/react.createElement("h3",{className:"skills-wrapper__info-text__center"},"Tools"),/*#__PURE__*/react.createElement(Skills_SkillList,{skills:tools.stacks})))))));};/* harmony default export */ var Skills_Skills = (Skills);
// EXTERNAL MODULE: ./src/mock/data.js + 2 modules
var mock_data = __webpack_require__(3527);
;// CONCATENATED MODULE: ./src/components/App.jsx
function App(){const{0:hero,1:setHero}=(0,react.useState)({});const{0:skills,1:setSkills}=(0,react.useState)({});const{0:about,1:setAbout}=(0,react.useState)({});const{0:projects,1:setProjects}=(0,react.useState)([]);const{0:contact,1:setContact}=(0,react.useState)({});const{0:footer,1:setFooter}=(0,react.useState)({});(0,react.useEffect)(()=>{setHero({...mock_data/* heroData */.l4});setSkills({...mock_data/* skillsData */.rw});setAbout({...mock_data/* aboutData */.Wx});setProjects((0,toConsumableArray/* default */.A)(mock_data/* projectsData */.F9));setContact({...mock_data/* contactData */.FJ});setFooter({...mock_data/* footerData */.aH});},[]);return/*#__PURE__*/react.createElement(PortfolioProvider,{value:{hero,about,projects,contact,footer,skills}},/*#__PURE__*/react.createElement(Hero,null),/*#__PURE__*/react.createElement(Skills_Skills,null),/*#__PURE__*/react.createElement(Projects_Projects,null),/*#__PURE__*/react.createElement(About_About,null),/*#__PURE__*/react.createElement(Contact_Contact,null),/*#__PURE__*/react.createElement(Footer_Footer,null));}/* harmony default export */ var components_App = (App);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>{const{title,lang,description}=mock_data/* headData */.Rb;const data=(0,gatsby_browser_entry.useStaticQuery)("755668908");return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Helmet/* Helmet */.m,null,/*#__PURE__*/react.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react.createElement("title",null,title),/*#__PURE__*/react.createElement("html",{lang:lang}),/*#__PURE__*/react.createElement("meta",{name:"description",content:description}),/*#__PURE__*/react.createElement("meta",{name:"keywords",content:"Full, Stack, Fullstack, Web, Software, Developer, Engineer, Programmer, React, Javascript, Node, Portfolio"}),/*#__PURE__*/react.createElement("meta",{name:"robots",content:"index, follow"}),/*#__PURE__*/react.createElement("meta",{name:"language",content:"English"}),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:"Franklin Burger | Dev"}),/*#__PURE__*/react.createElement("meta",{property:"og:description",content:"Full Stack Software Mobile and Web Developer"}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:"https://www.franklin-burger.dev/screen_shot.png"}),/*#__PURE__*/react.createElement("meta",{property:"og:url",content:"https://www.franklin-burger.dev/"})),data.heroImage&&/*#__PURE__*/react.createElement("img",{src:data.heroImage.publicURL,alt:"Hero",style:{maxWidth:'100%',height:'auto'}}),/*#__PURE__*/react.createElement(components_App,null));};/* harmony default export */ var pages = (IndexPage);

/***/ }),

/***/ 5858:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ 5438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5]}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0"}return lookup[_]=(0,_globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?_globals.defaults.duration:a,i=o.delay,u=void 0===i?_globals.defaults.delay:i,n=o.count,s=void 0===n?_globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0,_wrap2.default)(d,_,_,r):_}Object.defineProperty(exports, "__esModule", ({value:!0}));var _propTypes=__webpack_require__(5556),_globals=__webpack_require__(3546),_wrap=__webpack_require__(3032),_wrap2=_interopRequireDefault(_wrap),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,distance:_propTypes.string,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Fade.propTypes=propTypes,exports["default"]=Fade,module.exports=exports.default;

/***/ }),

/***/ 4448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports, "__esModule", ({value:!0}));var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(){function e(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),_react=__webpack_require__(6540),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(5556),_globals=__webpack_require__(3546),inOut=(0,_propTypes.shape)({make:_propTypes.func,duration:_propTypes.number.isRequired,delay:_propTypes.number.isRequired,forever:_propTypes.bool,count:_propTypes.number.isRequired,style:_propTypes.object.isRequired,reverse:_propTypes.bool}),propTypes={collapse:_propTypes.bool,collapseEl:_propTypes.element,cascade:_propTypes.bool,wait:_propTypes.number,force:_propTypes.bool,disabled:_propTypes.bool,appear:_propTypes.bool,enter:_propTypes.bool,exit:_propTypes.bool,fraction:_propTypes.number,refProp:_propTypes.string,innerRef:_propTypes.func,onReveal:_propTypes.func,unmountOnExit:_propTypes.bool,mountOnEnter:_propTypes.bool,inEffect:inOut.isRequired,outEffect:(0,_propTypes.oneOfType)([inOut,(0,_propTypes.oneOf)([!1])]).isRequired,ssrReveal:_propTypes.bool,collapseOnly:_propTypes.bool,ssrFadeout:_propTypes.bool},defaultProps={fraction:.2,refProp:"ref"},contextTypes={transitionGroup:_propTypes.object},RevealBase=function(e){function t(e,i){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return s.isOn=void 0===e.when||!!e.when,s.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:s.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},s.savedChild=!1,s.isShown=!1,_globals.observerMode?s.handleObserve=s.handleObserve.bind(s):(s.revealHandler=s.makeHandler(s.reveal),s.resizeHandler=s.makeHandler(s.resize)),s.saveRef=s.saveRef.bind(s),s}return _inherits(t,e),_createClass(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?_extends({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!_globals.observerMode&&this.props.collapse&&window.document.dispatchEvent(_globals.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var s=this,o=i.forever,n=i.count,r=i.delay,a=i.duration;if(!o){var l=function(){s&&s.el&&(s.animationEndTimeout=void 0,e.call(s))};this.animationEndTimeout=window.setTimeout(l,r+(a+(t?a:0)*n))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var s=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,n=void 0,r=void 0;if(t.collapseOnly)n=i.duration/3,r=i.delay;else{var a=s>>2,l=a>>1;n=a,r=i.delay+(this.isOn?0:s-a-l),e.style.animationDuration=s-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+n+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],s="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(s=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:_extends({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:s}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=_react2.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),_globals.ssr&&(0,_globals.disableSsr)()}},{key:"handleObserve",value:function(e,t){_slicedToArray(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&_globals.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_globals.globalHide||(0,_globals.hideAll)(),this&&this.el&&(e||(e=this.props),_globals.ssr&&(0,_globals.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):_globals.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,s=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!s||_globals.ssr&&!_globals.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):_globals.ssr&&(_globals.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return _react2.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):_react2.default.Children.toArray(e);var s=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=s.duration,n=s.reverse,r=i.length,a=2*o;this.props.collapse&&(a=parseInt(this.state.style.animationDuration,10),o=a/2);var l=n?r:0;return i=i.map(function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e?_react2.default.cloneElement(e,{style:_extends({},e.props.style,t.state.style,{animationDuration:Math.round((0,_globals.cascade)(n?l--:l++,0,r,o,a))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===_typeof(this.props.children)){var e=_react2.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:_react2.default.createElement("div",null,e)}return _react2.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,s=t.props,o=s.style,n=s.className,r=s.children,a=this.props.disabled?n:(this.props.outEffect?_globals.namespace:"")+(this.state.className?" "+this.state.className:"")+(n?" "+n:"")||void 0,l=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),l=_extends({},o,{opacity:1})):l=this.props.disabled?o:_extends({},o,this.state.style);var p=_extends({},this.props.props,_defineProperty({className:a,style:l},this.props.refProp,this.saveRef)),h=_react2.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?_react2.default.cloneElement(this.props.collapseEl,{style:_extends({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):_react2.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,_globals.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,s=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(_globals.globalHide?e.fraction:0);return s>o-window.innerHeight&&s<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){_globals.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!_globals.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(_react2.default.Component);RevealBase.propTypes=propTypes,RevealBase.defaultProps=defaultProps,RevealBase.contextTypes=contextTypes,RevealBase.displayName="RevealBase",exports["default"]=RevealBase,module.exports=exports.default;

/***/ }),

/***/ 3546:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
function insertRule(e){try{return sheet.insertRule(e,sheet.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function cascade(e,n,t,o,r){var s=Math.log(o),i=Math.log(r),a=(i-s)/(t-n);return Math.exp(s+a*(e-n))}function animation(e){if(!sheet)return"";var n="@keyframes "+(name+counter)+"{"+e+"}",t=effectMap[e];return t?""+name+t:(sheet.insertRule(n,sheet.cssRules.length),effectMap[e]=counter,""+name+counter++)}function hideAll(){globalHide||(exports.globalHide=globalHide=!0,window.removeEventListener("scroll",hideAll,!0),insertRule("."+namespace+" { opacity: 0; }"),window.removeEventListener("orientationchange",hideAll,!0),window.document.removeEventListener("visibilitychange",hideAll))}function config(e){var n=e.ssrFadeout;exports.fadeOutEnabled=fadeOutEnabled=n}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.insertRule=insertRule,exports.cascade=cascade,exports.animation=animation,exports.hideAll=hideAll,exports["default"]=config;var namespace=exports.namespace="react-reveal",defaults=exports.defaults={duration:1e3,delay:0,count:1},ssr=exports.ssr=!0,observerMode=exports.observerMode=!1,raf=exports.raf=function(e){return window.setTimeout(e,66)},disableSsr=exports.disableSsr=function(){return exports.ssr=ssr=!1},fadeOutEnabled=exports.fadeOutEnabled=!1,ssrFadeout=exports.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return exports.fadeOutEnabled=fadeOutEnabled=e},globalHide=exports.globalHide=!1,ie10=exports.ie10=!1,collapseend=exports.collapseend=void 0,counter=1,effectMap={},sheet=!1,name=namespace+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){exports.observerMode=observerMode="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),exports.raf=raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||raf,exports.ssr=ssr=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(exports.ie10=ie10=!0),ssr&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(exports.ssr=ssr=!1),ssr&&window.setTimeout(disableSsr,1500),observerMode||(exports.collapseend=collapseend=document.createEvent("Event"),collapseend.initEvent("collapseend",!0,!0));var element=document.createElement("style");document.head.appendChild(element),element.sheet&&element.sheet.cssRules&&element.sheet.insertRule&&(sheet=element.sheet,window.addEventListener("scroll",hideAll,!0),window.addEventListener("orientationchange",hideAll,!0),window.document.addEventListener("visibilitychange",hideAll))}

/***/ }),

/***/ 3032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function wrap(e,t,a,r){return"in"in e&&(e.when=e.in),_react2.default.Children.count(r)<2?_react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r})):(r=_react2.default.Children.map(r,function(r){return _react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r}))}),"Fragment"in _react2.default?_react2.default.createElement(_react2.default.Fragment,null,r):_react2.default.createElement("span",null,r))}Object.defineProperty(exports, "__esModule", ({value:!0}));var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};exports["default"]=wrap;var _react=__webpack_require__(6540),_react2=_interopRequireDefault(_react),_RevealBase=__webpack_require__(4448),_RevealBase2=_interopRequireDefault(_RevealBase);module.exports=exports.default;

/***/ }),

/***/ 173:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6540);

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(5303);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports["default"] = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ 3845:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6540);

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(9679);

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(5556);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` and `name` from props
      var newProps = _extends({}, this.props);
      delete newProps.name;
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports["default"] = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ 9365:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(6540);

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(5303);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports["default"] = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ 6848:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.N_ = undefined;

var _Link = __webpack_require__(9365);

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(173);

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(3845);

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(649);

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(1290);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(4177);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(7384);

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(5303);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(9679);

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(1038);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.N_ = _Link2.default;
__webpack_unused_export__ = _Button2.default;
__webpack_unused_export__ = _Element2.default;
__webpack_unused_export__ = _scroller2.default;
__webpack_unused_export__ = _scrollEvents2.default;
__webpack_unused_export__ = _scrollSpy2.default;
__webpack_unused_export__ = _animateScroll2.default;
__webpack_unused_export__ = _scrollLink2.default;
__webpack_unused_export__ = _scrollElement2.default;
__webpack_unused_export__ = _Helpers2.default;
__webpack_unused_export__ = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ 1038:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(6540);
var ReactDOM = __webpack_require__(961);

var utils = __webpack_require__(2906);
var scrollSpy = __webpack_require__(4177);
var defaultScroller = __webpack_require__(649);
var PropTypes = __webpack_require__(5556);
var scrollHash = __webpack_require__(3367);

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool,
  spyThrottle: PropTypes.number
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer, this.props.spyThrottle);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.name !== prevProps.name) {
            this.registerElems(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ 7384:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(2906);

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(8373);

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(951);

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(1290);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionX = function currentPositionX(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollLeft;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  }
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerWidth = function scrollContainerWidth(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollWidth - containerElement.offsetWidth;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.delta = Math.round(data.targetPosition - data.startPosition);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    if (options.horizontal) {
      data.containerElement.scrollLeft = data.currentPosition;
    } else {
      data.containerElement.scrollTop = data.currentPosition;
    }
  } else {
    if (options.horizontal) {
      window.scrollTo(data.currentPosition, 0);
    } else {
      window.scrollTo(0, data.currentPosition);
    }
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPosition);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(scrollOffset, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  var setCancel = function setCancel() {
    options.data.cancel = true;
  };
  _cancelEvents2.default.subscribe(setCancel);

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;

  if (options.data.startPosition === options.data.targetPosition) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPosition);
    }
    return;
  }

  options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);

  options.data.duration = functionWrapper(options.duration)(options.data.delta);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toPosition, options) {
  animateTopScroll(toPosition, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toPosition, options) {
  options = proceedOptions(options);
  setContainer(options);
  var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  animateTopScroll(toPosition + currentPosition, options);
};

exports["default"] = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ 951:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _passiveEventListeners = __webpack_require__(3999);

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports["default"] = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ 3999:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var listenerName = listener.name;
  if (!listenerName) {
    listenerName = eventName;
    console.warn('Listener must be a named function.');
  }

  if (!attachedListeners.has(eventName)) attachedListeners.set(eventName, new Set());
  var listeners = attachedListeners.get(eventName);
  if (listeners.has(listenerName)) return;

  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
  listeners.add(listenerName);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
  attachedListeners.get(eventName).delete(listener.name || eventName);
};

var attachedListeners = new Map();

/***/ }),

/***/ 9679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6540);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(961);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(649);

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(5556);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports["default"] = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
          this.registerElems(this.props.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ 1290:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports["default"] = Events;

/***/ }),

/***/ 3367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _passiveEventListeners = __webpack_require__(3999);

var _utils = __webpack_require__(2906);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to, saveHashHistory) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.updateHash(to, saveHashHistory);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports["default"] = scrollHash;

/***/ }),

/***/ 5303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6540);

var _react2 = _interopRequireDefault(_react);

var _scrollSpy = __webpack_require__(4177);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(649);

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(5556);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(3367);

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  spy: _propTypes2.default.bool,
  horizontal: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool,
  saveHashHistory: _propTypes2.default.bool,
  spyThrottle: _propTypes2.default.number
};

exports["default"] = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer, this.props.spyThrottle);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var style = {};

        if (this.state && this.state.active) {
          style = _extends({}, this.props.style, this.props.activeStyle);
        } else {
          style = _extends({}, this.props.style);
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.style = style;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (x, y) {
      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var horizontal = _this2.props.horizontal;

      var to = _this2.props.to;
      var element = null;
      var isInside = void 0;
      var isOutside = void 0;

      if (horizontal) {
        var elemLeftBound = 0;
        var elemRightBound = 0;
        var containerLeft = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerLeft = containerCords.left;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemLeftBound = cords.left - containerLeft + x;
          elemRightBound = elemLeftBound + cords.width;
        }

        var offsetX = x - _this2.props.offset;
        isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
        isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
      } else {
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var _containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = _containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var _cords = element.getBoundingClientRect();
          elemTopBound = _cords.top - containerTop + y;
          elemBottomBound = elemTopBound + _cords.height;
        }

        var offsetY = y - _this2.props.offset;
        isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      }

      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          var _props$saveHashHistor = _this2.props.saveHashHistory,
              saveHashHistory = _props$saveHashHistor === undefined ? false : _props$saveHashHistor;

          _scrollHash2.default.changeHash("", saveHashHistory);
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        var _props$saveHashHistor2 = _this2.props.saveHashHistory,
            _saveHashHistory = _props$saveHashHistor2 === undefined ? false : _props$saveHashHistor2;

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ 4177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _lodash = __webpack_require__(5858);

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(3999);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps by default
var eventThrottler = function eventThrottler(eventHandler) {
  var throttleAmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 66;
  return (0, _lodash2.default)(eventHandler, throttleAmount);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer, throttle) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      }, throttle);
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionX: function currentPositionX(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageYOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else {
      return scrollSpyContainer.scrollLeft;
    }
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.indexOf(spyHandler) > -1 && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length && scrollSpy.spySetState.indexOf(stateHandler) > -1) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports["default"] = scrollSpy;

/***/ }),

/***/ 649:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(2906);

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(7384);

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(1290);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports["default"] = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    props.absolute = true;

    var horizontal = props.horizontal;
    var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](to, target);
      }

      if (containerElement === document) {
        if (props.horizontal) {
          window.scrollTo(scrollOffset, 0);
        } else {
          window.scrollTo(0, scrollOffset);
        }
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ 8373:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ 2906:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var updateHash = function updateHash(hash, historyUpdate) {
  var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
  var hashToUpdate = hashVal ? "#" + hashVal : "";
  var curLoc = window && window.location;
  var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
  historyUpdate ? history.pushState(history.state, "", urlToPush) : history.replaceState(history.state, "", urlToPush);
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, "");
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var isPositioned = function isPositioned(element) {
  return getComputedStyle(element).position !== "static";
};

var getElementOffsetInfoUntil = function getElementOffsetInfoUntil(element, predicate) {
  var offsetTop = element.offsetTop;
  var currentOffsetParent = element.offsetParent;

  while (currentOffsetParent && !predicate(currentOffsetParent)) {
    offsetTop += currentOffsetParent.offsetTop;
    currentOffsetParent = currentOffsetParent.offsetParent;
  }

  return { offsetTop: offsetTop, offsetParent: currentOffsetParent };
};

var scrollOffset = function scrollOffset(c, t, horizontal) {
  if (horizontal) {
    return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
  } else {
    if (c === document) {
      return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    }

    // The offsetParent of an element, according to MDN, is its nearest positioned
    // (an element whose position is anything other than static) ancestor. The offsetTop
    // of an element is taken with respect to its offsetParent which may not neccessarily
    // be its parentElement except the parent itself is positioned.

    // So if containerElement is positioned, then it must be an offsetParent somewhere
    // If it happens that targetElement is a descendant of the containerElement, and there
    // is not intermediate positioned element between the two of them, i.e.
    // targetElement"s offsetParent is the same as the containerElement, then the
    // distance between the two will be the offsetTop of the targetElement.
    // If, on the other hand, there are intermediate positioned elements between the
    // two entities, the distance between the targetElement and the containerElement
    // will be the accumulation of the offsetTop of the element and that of its
    // subsequent offsetParent until the containerElement is reached, since it
    // will also be an offsetParent at some point due to the fact that it is positioned.

    // If the containerElement is not positioned, then it can"t be an offsetParent,
    // which means that the offsetTop of the targetElement would not be with respect to it.
    // However, if the two of them happen to have the same offsetParent, then
    // the distance between them will be the difference between their offsetTop
    // since they are both taken with respect to the same entity.
    // The last resort would be to accumulate their offsetTop until a common
    // offsetParent is reached (usually the document) and taking the difference
    // between the accumulated offsetTops

    if (isPositioned(c)) {
      if (t.offsetParent !== c) {
        var isContainerElementOrDocument = function isContainerElementOrDocument(e) {
          return e === c || e === document;
        };

        var _getElementOffsetInfo = getElementOffsetInfoUntil(t, isContainerElementOrDocument),
            offsetTop = _getElementOffsetInfo.offsetTop,
            offsetParent = _getElementOffsetInfo.offsetParent;

        if (offsetParent !== c) {
          throw new Error("Seems containerElement is not an ancestor of the Element");
        }

        return offsetTop;
      }

      return t.offsetTop;
    }

    if (t.offsetParent === c.offsetParent) {
      return t.offsetTop - c.offsetTop;
    }

    var isDocument = function isDocument(e) {
      return e === document;
    };
    return getElementOffsetInfoUntil(t, isDocument).offsetTop - getElementOffsetInfoUntil(c, isDocument).offsetTop;
  }
};

exports["default"] = {
  updateHash: updateHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ 6942:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-695b871ff0a17a25ffed.js.map