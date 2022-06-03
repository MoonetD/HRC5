var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var N=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&N(e,r,t[r]);if(k)for(var r of k(t))se.call(t,r)&&N(e,r,t[r]);return e},v=(e,t)=>ee(e,te(t));import{s as ie,bz as T,dF as oe,C as x,e as q,k as z,bp as F,j as le,b3 as b,jK as K,eH as D,dI as I,cp as J,q as j,e2 as W,ko as ae,k6 as G,eD as X,iv as ne,kp as Y,dg as E,iy as ue,iz as pe,e6 as ce,e7 as ye,e8 as he,j7 as de,iN as fe,e9 as me,ed as ge,aU as M,aQ as C,al as Ae,Z as c,_ as y,aT as Se,bJ as ve,dZ as we,a0 as xe}from"./GISSearch.9df35164.js";import{s as _e}from"./ArcGISCachedService.b6019e87.js";import{n as Ue,z as Ie}from"./TilemapCache.58ed7b3b.js";import{o as be}from"./jsonContext.99b1e783.js";import{l as Te}from"./StyleRepository.49c6be64.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./StyleDefinition.809d5a5e.js";import"./enums.84480fc7.js";import"./enums.1ba846bb.js";import"./enums.457e23f9.js";import"./VertexElementDescriptor.0406f2d4.js";import"./GeometryUtils.e53da643.js";import"./Geometry.e891c191.js";let $=null;function Re(e){if($)return $;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return $=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),$}const Pe=ie.getLogger("esri.layers.support.SpriteSource"),$e=1.15;class Q{constructor(t,r,s,i){this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=s,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(t){this._isRetina=this.devicePixelRatio>$e;const r=T(this.baseURL),s=r.query?"?"+oe(r.query):"",i=this._isRetina?"@2x":"",o=`${r.path}${i}.${this._spriteImageFormat}${s}`,l=`${r.path}${i}.json${s}`;return Promise.all([x(l,t),x(o,h({responseType:"image"},t))]).then(([a,n])=>{const u=Object.keys(a.data);if(!u||u.length===0||u.length===1&&u[0]==="_ssl"||!n||!n.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=a.data;const d=n.data,S=Math.max(this.maxTextureSize,4096);if(d.width>S||d.height>S){const A=`Sprite resource for style ${r.path} is bigger than the maximum allowed of ${S} pixels}`;throw Pe.error(A),new q("SpriteSource",A)}this.width=d.width,this.height=d.height;const f=document.createElement("canvas"),m=f.getContext("2d");f.width=d.width,f.height=d.height,m.drawImage(d,0,0,d.width,d.height);const R=m.getImageData(0,0,d.width,d.height),g=new Uint8Array(R.data);let P;for(let A=0;A<g.length;A+=4)P=g[A+3]/255,g[A]=g[A]*P,g[A+1]=g[A+1]*P,g[A+2]=g[A+2]*P;this.image=g})}}class Oe{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=x(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return z(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new F(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let o,l,a=t,n=s.pop();if(a===1)return n;for(;s.length;)if(o=s.pop(),l=(1&o.col)+((1&o.row)<<1),a){if(a[l]===0){n=null;break}if(a[l]===1){n=o;break}n=o,a=a[l]}return n}}class Le{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=x(this._tileIndexUrl,{query:h({},t==null?void 0:t.query)}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:o}=t,l=new F(t);return this._tilemap.fetchAvailabilityUpsample(s,i,o,l,r).then(()=>(l.world=t.world,l)).catch(a=>{if(le(a))throw a;return null})}}const O=new Map;function Me(e,t,r,s,i){return Be(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function Be(e,t){const r=O.get(e);if(r)return r.then(i=>b(i));const s=x(e,h({responseType:"array-buffer"},t)).then(({data:i})=>(O.delete(e),i)).catch(i=>{throw O.delete(e),i});return O.set(e,s),s}class De{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=T(this.sourceUrl),o=b(s),l=o.tiles;if(i)for(let f=0;f<l.length;f++){const m=T(l[f]);m&&(K(m.path)||(m.path=D(i.path,m.path)),l[f]=I(m.path,h(h({},i.query),m.query)))}this.tileServers=l;const a=s.capabilities&&s.capabilities.split(",").map(f=>f.toLowerCase().trim()),n=(s==null?void 0:s.exportTilesAllowed)===!0,u=(a==null?void 0:a.includes("tilemap"))===!0,d=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+d}:null},this.tileInfo=Ue(o.tileInfo,o,null,{ignoreMinMaxLOD:!0});const S=s.tileMap?I(D(i.path,s.tileMap),i.query):null;u?(this.type="vector-tile",this.tilemap=new Le(new Ie({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),S)):S&&(this.tilemap=new Oe(S)),this.fullExtent=J.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){var s,i;return(s=(i=this.tilemap)==null?void 0:i.dataKey(t,r))!=null?s:t}requestTile(t,r,s,i){const o=this.tileServers[r%this.tileServers.length];return Me(o,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let a=0;a<l;a++){const n=i[a],u=o[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const B=j.defaults&&j.defaults.io.corsEnabledServers;async function Ee(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await w(r,"esri",e,i,t);const o={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&U(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&U(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return _(o.spriteUrl),_(o.glyphsUrl),o}function _(e){if(!e)return;const t=ae(e);B&&!B.includes(t)&&B.push(t)}function U(...e){let t;for(let r=0;r<e.length;++r)G(e[r])?t&&(t=t.split("://")[0]+":"+e[r].trim()):t=K(e[r])?e[r]:D(t,e[r]);return W(t)}async function w(e,t,r,s,i){let o,l,a;if(z(i),typeof r=="string"){const u=X(r);_(u),a=await x(u,v(h({},i),{responseType:"json",query:h({f:"json"},i==null?void 0:i.query)})),a.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=u,l=u}else a={data:r},o=r.jsonUrl||null,l=s;const n=a.data;return H(n)?(e.styleUrl=o||null,Ne(e,n,l,i)):ke(n)?e.sourceUrl?V(e,n,l,!1,t,i):(e.sourceUrl=o||null,V(e,n,l,!0,t,i)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function H(e){return!!e.sources}function ke(e){return!H(e)}async function Ne(e,t,r,s){const i=r?ne(r):Y();e.styleBase=i,e.style=t,e.styleUrl&&_(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await w(e,"esri",U(i,l.url),void 0,s):o.push(w(e,"esri",l,i,s))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(w(e,l,U(i,t.sources[l].url),void 0,s)):t.sources[l].tiles&&o.push(w(e,l,t.sources[l],i,s)));await Promise.all(o)}async function V(e,t,r,s,i,o){const l=r?W(r)+"/":Y(),a=je(t,l),n=new De(i,I(l,o==null?void 0:o.query),a);if(!s&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(n))return Promise.resolve();n.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(n.fullExtent):u.fullExtent=n.fullExtent.clone()),u.tileInfo.lods.length<n.tileInfo.lods.length&&(u.tileInfo=n.tileInfo)}if(s?(e.sourceBase=l,e.source=t,e.validatedSource=a,e.primarySourceName=i,e.sourceUrl&&_(e.sourceUrl)):_(l),e.sourceNameToSource[i]=n,!e.style)return t.defaultStyles==null?Promise.reject():typeof t.defaultStyles=="string"?w(e,"",U(l,t.defaultStyles,"root.json"),void 0,o):w(e,"",t.defaultStyles,U(l,"root.json"),o)}function je(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,o=2958287637957775e-7;const l=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let u=0;u<=n;u++)u>=a&&l.push({level:u,scale:o,resolution:i}),i/=2,o/=2;for(const u of e.tiles)_(U(t,u));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}const L=1e-6;function Ce(e,t){if(e===t)return!0;if(!e&&t!=null||e!=null&&!t||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=L||Math.abs(r.y-s.y)>=L)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-L;l/=2)if(Math.abs(l-o.lods[0].scale)<L)return!0;return!1}function Qe(e,t){if(e===t)return e;if(!e&&t!=null)return t;if(e!=null&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,o={x:e.origin.x,y:e.origin.y},l=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,d=a.resolution,S=n.scale,f=[];let m=u,R=d,g=0;for(;m>S;)f.push({level:g,resolution:R,scale:m}),g++,m/=2,R/=2;return new E({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:f,spatialReference:l})}let p=class extends ue(pe(_e(ce(ye(he(de(fe(me(ge))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?h({url:e},t):e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e==null||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(M).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await x(r,v(h({},e),{query:v(h({f:"json"},this.customParameters),{token:this.apiKey})}))).data&&this.read({url:r},be(this.portalItem))}).catch(M).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&T(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?I(r,v(h({},this.customParameters),{token:this.apiKey})):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?T(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&G(e)&&(e=`https:${e}`),t.styleUrl=e}get tileInfo(){var e;const t=[];for(const s in this.sourceNameToSource)t.push(this.sourceNameToSource[s]);let r=((e=this.primarySource)==null?void 0:e.tileInfo)||new E;if(t.length>1)for(let s=0;s<t.length;s++)Ce(r,t[s].tileInfo)&&(r=Qe(r,t[s].tileInfo));return r}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){var r;const s=C().maxTextureSize,i=(r=this.currentStyleInfo)!=null&&r.spriteUrl?I(this.currentStyleInfo.spriteUrl,v(h({},this.customParameters),{token:this.apiKey})):null,o=new Q(i,e,s,this.currentStyleInfo.spriteFormat);await o.load(t),this._spriteSourceMap.set(e,o)}return Promise.resolve(this._spriteSourceMap.get(e))}async setSpriteSource(e,t="png",r=1,s){const i=C().maxTextureSize,o=e?I(e,v(h({},this.customParameters),{token:this.apiKey})):null;if(!o)return null;const l=new Q(o,r,i,t);try{return await l.load(s),this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,l),this.currentStyleInfo.spriteUrl=o,this.emit("spriteSource-change",{spriteSource:l}),l}catch(a){M(a)}return null}async loadStyle(e,t){var r;const s=e||this.style||this.url;return this._loadingTask&&typeof s=="string"&&this.url===s||((r=this._loadingTask)==null||r.abort(),this._loadingTask=Ae(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(s,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return b(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return b(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return b(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new q("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Ee(e,v(h({},t),{query:v(h({},this.customParameters),{token:this.apiKey})}));r.spriteFormat==="webp"&&(await Re("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",h({},r)),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Te(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return X(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(e){var t,r;return(t=(r=this._loadingTask)==null?void 0:r.promise)!=null?t:this.loadStyle(null,e)}};c([y({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([y({type:["show","hide"]})],p.prototype,"listMode",void 0),c([y({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([y({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([y({json:{read:!1},readOnly:!0,type:J})],p.prototype,"fullExtent",null),c([y()],p.prototype,"style",void 0),c([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([y({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([y({readOnly:!0})],p.prototype,"parsedUrl",null),c([y({readOnly:!0})],p.prototype,"serviceUrl",null),c([y({type:Se,readOnly:!0})],p.prototype,"spatialReference",null),c([y({readOnly:!0})],p.prototype,"styleRepository",void 0),c([y({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([y({readOnly:!0})],p.prototype,"primarySource",void 0),c([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([ve(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:E})],p.prototype,"tileInfo",null),c([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([y({readOnly:!0})],p.prototype,"version",void 0),c([we("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([y({type:Boolean})],p.prototype,"symbolCollisionBoxesVisible",void 0),c([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([xe("esri.layers.VectorTileLayer")],p);const it=p;export{it as default};
