var Ie=Object.defineProperty,Re=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var re=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))Fe.call(t,r)&&re(e,r,t[r]);if(te)for(var r of te(t))$e.call(t,r)&&re(e,r,t[r]);return e},ne=(e,t)=>Re(e,Ue(t));import{Z as a,_ as o,dZ as I,cf as Le,a0 as fe,iB as Ae,ak as _e,cp as $,ew as Pe,ch as z,t as Me,e as je,aT as R,bz as Te,cd as qe,W as Ce,iy as Ve,j9 as Be,iA as ke,iz as We,e7 as De,e8 as Ge,e9 as He,ed as Xe,iO as Je,r as W,aU as ze,jU as se,C as ie,dI as Qe,dh as Ye,ck as Ze,kr as Ke,bm as et,k5 as tt,q as ae,b3 as rt,bJ as D,j1 as nt,gO as st,ks as it,ec as at}from"./GISSearch.9df35164.js";import{o as X}from"./crsUtils.0f345635.js";import{l as le}from"./ExportWMSImageParameters.f1f6dce5.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";var q;let lt=0,h=q=class extends Ae{constructor(e){super(e),this._sublayersHandles=new _e,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?$.fromJSON(e):null}get id(){const e=this._get("id");return e==null?lt++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(r=>{r.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null})])),this._set("sublayers",e)}castSublayers(e){return Pe(z.ofType(q),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(t=>t.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([o()],h.prototype,"description",null),a([o({readOnly:!0})],h.prototype,"dimensions",void 0),a([o({value:null})],h.prototype,"fullExtent",null),a([I("fullExtent",["extent"])],h.prototype,"readExtent",null),a([o()],h.prototype,"fullExtents",void 0),a([o()],h.prototype,"featureInfoFormat",void 0),a([o()],h.prototype,"featureInfoUrl",void 0),a([o({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([o({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([I(["web-document"],"legendUrl")],h.prototype,"readLegendUrl",null),a([o({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([o({value:null})],h.prototype,"layer",null),a([o()],h.prototype,"maxScale",void 0),a([o()],h.prototype,"minScale",void 0),a([o({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([o({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],h.prototype,"name",null),a([o()],h.prototype,"parent",void 0),a([o({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([o({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([o()],h.prototype,"sublayers",null),a([Le("sublayers")],h.prototype,"castSublayers",null),a([o({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([o({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),a([o({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=q=a([fe("esri.layers.support.WMSSublayer")],h);const J=h,T={84:4326,83:4269,27:4267};function ot(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const g=Array.prototype.slice.call(r.childNodes).map(v=>v.textContent).join(`\r
`);throw new je("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",g)}const n=x("Capability",r),s=x("Service",r),u=x("Request",n);if(!n||!s||!u)return null;const i=x("Layer",n);if(!i)return null;const d=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",b=S("Title",s,"")||S("Name",s,""),l=S("AccessConstraints",s,""),m=S("Abstract",s,""),y=parseInt(S("MaxWidth",s,"5000"),10),c=parseInt(S("MaxHeight",s,"5000"),10),w=ue(u,"GetMap"),N=oe(u,"GetMap"),f=P(i,d,t);let U,L=0;if(Array.prototype.slice.call(n.childNodes).forEach(g=>{g.nodeName==="Layer"&&(L===0?U=g:(L===1&&f.name&&(f.name="",f.sublayers.push(P(U,d,t))),f.sublayers.push(P(g,d,t))),L++)}),!f)return null;let O,M;const ve=f.fullExtents;if(O=f.sublayers,O||(O=[]),O.length===0&&O.push(f),M=f.extent,!M){const g=new $(O[0].extent);f.extent=g.toJSON(),M=f.extent}const Ee=f.spatialReferences.length>0?f.spatialReferences:ge(f),Q=oe(u,"GetFeatureInfo");let j;if(Q){const g=ue(u,"GetFeatureInfo");g.indexOf("text/html")>-1?j="text/html":g.indexOf("text/plain")>-1&&(j="text/plain")}if(!j){const g=function(v){v&&(v.queryable=!1,v.sublayers&&v.sublayers.forEach(B=>{g(B)}))};g(f)}const Y=be(O),Se=f.minScale||0,Ne=f.maxScale||0,Z=f.dimensions,Oe=Y.reduce((g,v)=>g.concat(v.dimensions),[]),K=Z.concat(Oe).filter(we);let ee=null;if(K.length>0){let g=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;K.forEach(B=>{const{extent:k}=B;dt(k)?k.forEach(A=>{g=Math.min(g,A.getTime()),v=Math.max(v,A.getTime())}):k.forEach(A=>{g=Math.min(g,A.min.getTime()),v=Math.max(v,A.max.getTime())})}),ee={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[g,v]}}return{copyright:l,description:m,dimensions:Z,extent:M,fullExtents:ve,featureInfoFormat:j,featureInfoUrl:Q,mapUrl:N,maxWidth:y,maxHeight:c,maxScale:Ne,minScale:Se,layers:Y,spatialReferences:Ee,supportedImageFormatTypes:w,timeInfo:ee,title:b,version:d}}function ut(e){return e.length?e.filter(t=>t.popupEnabled&&t.name&&t.queryable).map(t=>t.name).join(","):""}function ge(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ge(t);if(r.length>0)return r}return[]}function be(e){let t=[];return e.forEach(r=>{t.push(r),r.sublayers&&r.sublayers.length&&(t=t.concat(be(r.sublayers)),delete r.sublayers)}),t}function C(e,t,r){var n;return(n=t.getAttribute(e))!=null?n:r}function pt(e,t,r,n){const s=x(e,r);return s?C(t,s,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(xe(n)&&n.nodeName===e)return n}return null}function V(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];xe(s)&&s.nodeName===e&&r.push(s)}return r}function S(e,t,r){const n=x(e,t);return n?n.textContent:r}function _(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),u=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let d,b,l,m;r?(d=isNaN(s)?-Number.MAX_VALUE:s,b=isNaN(n)?-Number.MAX_VALUE:n,l=isNaN(i)?Number.MAX_VALUE:i,m=isNaN(u)?Number.MAX_VALUE:u):(d=isNaN(n)?-Number.MAX_VALUE:n,b=isNaN(s)?-Number.MAX_VALUE:s,l=isNaN(u)?Number.MAX_VALUE:u,m=isNaN(i)?Number.MAX_VALUE:i);const y=new R({wkid:t});return new $({xmin:d,ymin:b,xmax:l,ymax:m,spatialReference:y})}function oe(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const u=x("Get",s);if(u){let i=pt("OnlineResource","xlink:href",u,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),mt(i,["service","request"])}}}}return null}function ue(e,t){const r=V("Operation",e);if(r.length===0)return V("Format",x(t,e)).map(s=>s.textContent);const n=[];return r.forEach(s=>{s.getAttribute("name")===t&&V("Format",s).forEach(u=>{n.push(u.textContent)})}),n}function pe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const u=Number(s);return isNaN(u)?r:u}function P(e,t,r){var n;if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},u=x("LatLonBoundingBox",e),i=x("EX_GeographicBoundingBox",e);let d=null;u&&(d=_(u,4326)),i&&(d=new $(0,0,0,0,new R({wkid:4326})),d.xmin=parseFloat(S("westBoundLongitude",i,"0")),d.ymin=parseFloat(S("southBoundLatitude",i,"0")),d.xmax=parseFloat(S("eastBoundLongitude",i,"0")),d.ymax=parseFloat(S("northBoundLatitude",i,"0"))),u||i||(d=new $(-180,-90,180,90,new R({wkid:4326}))),s.minScale=pe(e,"MaxScaleDenominator",0),s.maxScale=pe(e,"MinScaleDenominator",0);const b=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(l=>{if(l.nodeName==="Name")s.name=l.textContent||"";else if(l.nodeName==="Title")s.title=l.textContent||"";else if(l.nodeName==="Abstract")s.description=l.textContent||"";else if(l.nodeName==="BoundingBox"){const m=l.getAttribute(b);if(m&&m.indexOf("EPSG:")===0){const c=parseInt(m.substring(5),10);c===0||isNaN(c)||d||(d=t==="1.3.0"?_(l,c,X(c)):_(l,c))}const y=m&&m.indexOf(":");if(y&&y>-1){let c=parseInt(m.substring(y+1,m.length),10);c===0||isNaN(c)||(c=T[c]?T[c]:c);const w=t==="1.3.0"?_(l,c,X(c)):_(l,c);s.fullExtents.push(w)}}else if(l.nodeName===b)l.textContent.split(" ").forEach(m=>{const y=m.includes(":")?parseInt(m.split(":")[1],10):parseInt(m,10);if(y!==0&&!isNaN(y)){const c=T[y]?T[y]:y;s.spatialReferences.includes(c)||s.spatialReferences.push(c)}});else if(l.nodeName!=="Style"||s.legendURL){if(l.nodeName==="Layer"){const m=P(l,t,r);m&&(m.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(m))}}else{const m=x("LegendURL",l);if(m){const y=x("OnlineResource",m);y&&(s.legendURL=y.getAttribute("xlink:href"))}}}),s.extent=(n=d)==null?void 0:n.toJSON(),s.dimensions=V("Dimension",e).filter(l=>l.getAttribute("name")&&l.getAttribute("units")&&l.textContent).map(l=>{const m=l.getAttribute("name"),y=l.getAttribute("units"),c=l.textContent,w=l.getAttribute("unitSymbol"),N=l.getAttribute("default"),f=C("default",l,"0")!=="0",U=C("nearestValue",l,"0")!=="0",L=C("current",l,"0")!=="0";return we({name:m,units:y})?{name:"time",units:"ISO8601",extent:me(c),default:me(N),multipleValues:f,nearestValue:U,current:L}:ct({name:m,units:y})?{name:"elevation",units:y,extent:de(c),unitSymbol:w,default:de(N),multipleValues:f,nearestValue:U}:{name:m,units:y,extent:ce(c),unitSymbol:w,default:ce(N),multipleValues:f,nearestValue:U}}),s}function dt(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function xe(e){return e.nodeType===Node.ELEMENT_NODE}function ct(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function we(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function mt(e,t){const r=[],n=Te(e);for(const s in n.query)n.query.hasOwnProperty(s)&&t.indexOf(s.toLowerCase())===-1&&r.push(s+"="+n.query[s]);return n.path+(r.length?"?"+r.join("&"):"")}function de(e){if(!e)return null;const t=e.indexOf("/")!==-1,r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function ce(e){if(!e)return null;const t=e.indexOf("/")!==-1,r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(n=>n):r}function me(e){if(!e)return null;const t=e.indexOf("/")!==-1,r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&s[2]!=="0"?yt(s[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function yt(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,r=e.match(t);return r?{years:F(r[1]),months:F(r[2]),days:F(r[3]),hours:F(r[4]),minutes:F(r[5]),seconds:F(r[6])}:null}function F(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function G(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ye=new Set([102100,3857,102113,900913]),ht=new Set([3395,54004]);function ft(e,t){let r=e.wkid;return Me(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>ht.has(n))||102100:r)}const H=new qe({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let p=class extends Ce(Ve(Be(ke(We(De(Ge(He(Xe)))))))){constructor(...e){super(...e),this.allSublayers=new Je({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",(t,r)=>{if(r){for(const n of r)n.layer=null;this.handles.remove("wms-sublayer")}if(t){for(const n of t)n.parent=this,n.layer=this;this.handles.add([t.on("after-add",({item:n})=>{n.parent=this,n.layer=this}),t.on("after-remove",({item:n})=>{n.parent=null,n.layer=null})],"wms-sublayer")}},!0)}normalizeCtorArgs(e,t){return typeof e=="string"?E({url:e},t):e}load(e){const t=W(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(ze).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new $({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new R(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return he(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return he(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,u=e.flatten(({sublayers:i})=>i&&i.toArray()).toArray();u.forEach(i=>{typeof i.parent.id=="number"&&(s.has(i.parent.id)?s.get(i.parent.id).push(i.id):s.set(i.parent.id,[i.id]))}),u.forEach(i=>{const d=E({sublayer:i},n),b=i.write({parentLayerId:typeof i.parent.id=="number"?i.parent.id:-1},d);if(s.has(i.id)&&(b.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const l=i.write({},d);delete l.id,t.layers.push(l)}}),t.visibleLayers=u.filter(i=>i.visible&&!i.sublayers).map(i=>i.name)}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,u=se({extent:e,width:t})*s,i=new le({layer:this,scale:u}),{xmin:d,ymin:b,xmax:l,ymax:m,spatialReference:y}=e,c=ft(y,this.spatialReferences),w=this.version==="1.3.0"&&X(c)?`${b},${d},${m},${l}`:`${d},${b},${l},${m}`,N=i.toJSON();return E({bbox:w,[this.version==="1.3.0"?"crs":"srs"]:isNaN(c)?void 0:"EPSG:"+c},N)}async fetchImage(e,t,r,n){var s,u;const i=this.mapUrl,d=this.createExportImageParameters(e,t,r,n);if(!d.layers){const c=document.createElement("canvas");return c.width=t,c.height=r,c}const b=n==null||(s=n.timeExtent)==null?void 0:s.start,l=n==null||(u=n.timeExtent)==null?void 0:u.end,m=W(b)&&W(l)?b.getTime()===l.getTime()?G(b):`${G(b)}/${G(l)}`:void 0,y={responseType:"image",query:this._mixCustomParameters(E(ne(E({width:t,height:r},d),{time:m}),this.refreshParameters)),signal:n==null?void 0:n.signal};return ie(i,y).then(c=>c.data)}fetchFeatureInfo(e,t,r,n,s){const u=se({extent:e,width:t}),i=new le({layer:this,scale:u}),d=ut(i.visibleSublayers);if(!this.featureInfoUrl||!d)return null;const b=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},l=E({query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},b),m=E(E({},this.createExportImageParameters(e,t,r)),l),y=this._mixCustomParameters(m),c=Qe(this.featureInfoUrl,y),w=document.createElement("iframe");w.src=c,w.style.border="none",w.style.margin="0",w.style.width="100%",w.setAttribute("sandbox","");const N=new Ye({title:this.title,content:w});return new Ze({sourceLayer:this,popupTemplate:N})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return Ke(this.url)||this.spatialReferences.some(t=>{const r=t===900913?R.WebMercator:new R({wkid:t});return et(r,e)})}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await ie(this.parsedUrl.path,{query:E(E({SERVICE:"WMS",REQUEST:"GetCapabilities"},this.parsedUrl.query),this.customParameters),responseType:"xml",signal:e});this.resourceInfo=ot(t.data)}if(this.parsedUrl){const t=new tt(this.parsedUrl.path);t.scheme!=="https"||t.port&&t.port!=="443"||ae.request.httpsDomains.indexOf(t.host)!==-1||ae.request.httpsDomains.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t=E(E({},this.customParameters),this.customLayerParameters);for(const r in t)e[r.toLowerCase()]=t[r];return e}};function gt(e,t){return e.some(r=>{for(const n in r)if(it(r,n,null,t))return!0;return!1})}function he(e,t,r){const n=new Map;e.every(u=>u.id==null)&&(e=rt(e)).forEach((u,i)=>u.id=i);for(const u of e){const i=new J;i.read(u,t),(r==null?void 0:r.indexOf(i.name))===-1&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const u of e){const i=n.get(u.id);if(u.parentLayerId!=null&&u.parentLayerId>=0){const d=n.get(u.parentLayerId);d.sublayers||(d.sublayers=new z),d.sublayers.unshift(i)}else s.unshift(i)}return s}a([o({readOnly:!0})],p.prototype,"allSublayers",void 0),a([o({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),a([o({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),a([o({type:String,json:{write:!0}})],p.prototype,"copyright",void 0),a([o()],p.prototype,"description",void 0),a([o({readOnly:!0})],p.prototype,"dimensions",void 0),a([o({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],p.prototype,"fullExtent",void 0),a([I(["web-document","portal-item"],"fullExtent",["extent"])],p.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],p.prototype,"writeFullExtent",null),a([o()],p.prototype,"fullExtents",void 0),a([o({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoFormat",void 0),a([o({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoUrl",void 0),a([o({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],p.prototype,"imageFormat",void 0),a([I("imageFormat",["supportedImageFormatTypes"])],p.prototype,"readImageFormat",null),a([o({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],p.prototype,"imageMaxHeight",void 0),a([o({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],p.prototype,"imageMaxWidth",void 0),a([o()],p.prototype,"imageTransparency",void 0),a([o(nt)],p.prototype,"legendEnabled",void 0),a([o({type:["show","hide","hide-children"]})],p.prototype,"listMode",void 0),a([o({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"mapUrl",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),a([o({type:["WMS"]})],p.prototype,"operationalLayerType",void 0),a([o()],p.prototype,"resourceInfo",void 0),a([o({type:R,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],p.prototype,"spatialReference",void 0),a([I(["web-document","portal-item"],"spatialReference",["spatialReferences"])],p.prototype,"readSpatialReferenceFromItemOrDocument",null),a([o({type:[st],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],p.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],p.prototype,"writeSpatialReferences",null),a([o({type:z.ofType(J),json:{write:{target:"layers",overridePolicy(e,t,r){if(gt(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),a([I(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],p.prototype,"readSublayersFromItemOrMap",null),a([I("service","sublayers",["layers"])],p.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[J]},visibleLayers:{type:[String]}})],p.prototype,"writeSublayers",null),a([o({json:{read:!1},readOnly:!0,value:"wms"})],p.prototype,"type",void 0),a([o(at)],p.prototype,"url",void 0),a([o({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"version",void 0),p=a([fe("esri.layers.WMSLayer")],p);const Ot=p;export{Ot as default};
