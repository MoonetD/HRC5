var Oi=Object.defineProperty,Pi=Object.defineProperties;var Ei=Object.getOwnPropertyDescriptors;var rr=Object.getOwnPropertySymbols;var Ri=Object.prototype.hasOwnProperty,Ii=Object.prototype.propertyIsEnumerable;var ir=(t,e,r)=>e in t?Oi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,te=(t,e)=>{for(var r in e||(e={}))Ri.call(e,r)&&ir(t,r,e[r]);if(rr)for(var r of rr(e))Ii.call(e,r)&&ir(t,r,e[r]);return t},Ye=(t,e)=>Pi(t,Ei(e));import{eh as Or,a3 as V,A as Vt,fH as Di,kZ as Nt,k_ as Li,gu as Ni,t as W,c5 as $i,s as lt,f as vt,z as Fi,jM as or,k$ as zi,gM as Ze,l0 as Qe,r as g,k as ar,l1 as Bi,v as Gi,m as Vi,fs as nr,gt as Pr,e as Er,e$ as Ui,ea as Me,hl as Hi,l2 as ki,dJ as Wi,T as qi,a4 as He,l3 as ji,l4 as Xi,fn as $t,fi as _t,fh as ke,a6 as Le,fm as Ut,fq as K,fo as Rr,a5 as me,fW as Ki,fl as tt,ix as Yi,fz as ze,fr as Zi,l5 as Qi,l6 as sr,l7 as Ir,fx as Dr,iw as Ot,d as Ji,l8 as he,l9 as eo,c as lr,Z as E,fN as to,la as gt,cF as Lr,C as ro,g as io,aU as Nr,lb as cr,lc as $r,bD as oo,eI as ao,fP as dr,fy as no,ld as ur}from"./GISSearch.9df35164.js";import{a as Fr}from"./quat.328e2803.js";import{e as zr,a as so,f as lo,r as mr,c as co}from"./vec33.bd6ea806.js";import{c as Ft,x as nt,u as Br,i as Be,L as uo,O as hr,E as mo}from"./BufferView.2b4bca5e.js";import{l as pr,u as ho,h as po,s as fo,c as Ne,f as vo,a as go,n as xo,o as $e,r as Pe,b as bo,d as To,e as fr,g as _o,t as Co,i as So,j as Ao,k as yo}from"./DefaultMaterial_COLOR_GAMMA.8d59dada.js";import{r as Gr}from"./Version.e74fefad.js";import{c as pt,l as Pt,t as Vr,C as H,i as zt,r as Mo,a as ge,n as xe,O as Ge,N as ct,W as wo,b as Oo,E as Po,h as Eo,d as Ro,e as Io,f as Do,g as Lo,_ as No}from"./requestImageUtils.9b862383.js";import{n as $o,r as Ct}from"./vec4f64.a3e91e77.js";import{O as p}from"./VertexAttribute.ebaf629c.js";import{_ as Ht}from"./index.ec19e11e.js";import{t as ue,P as Oe,L as Re,C as ie,F as Fo,D as Fe,M as vr,G as gr,Y as zo,V as Bo,E as rt,I as be,O as Z}from"./enums.457e23f9.js";import{u as ve,n as Go,a as Vo,c as Uo}from"./Texture.4f2b846f.js";import{_ as Ho,f as ko,c as Wo,D as qo,n as jo}from"./VertexArrayObject.61e2646f.js";import{t as oe}from"./VertexElementDescriptor.0406f2d4.js";import{T as Ur}from"./InterleavedLayout.31e9f266.js";import{A as Et,E as ut}from"./RenderSlot.f9644924.js";import{t as Xo}from"./vec3f32.8179e08f.js";class Ko{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function X(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new Ko(e)}class kt{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this.center=V(),X(e.length>=1),X(i.length%this._numIndexPerPrimitive==0),X(i.length>=e.length*this._numIndexPerPrimitive),X(o.size===3||o.size===4);const{data:a,size:s}=o,c=e.length;let d=s*i[this._numIndexPerPrimitive*e[0]];we.clear(),we.push(d),this.bbMin=Vt(a[d],a[d+1],a[d+2]),this.bbMax=Di(this.bbMin);for(let u=0;u<c;++u){const f=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){d=s*i[f+m],we.push(d);let x=a[d];this.bbMin[0]=Math.min(x,this.bbMin[0]),this.bbMax[0]=Math.max(x,this.bbMax[0]),x=a[d+1],this.bbMin[1]=Math.min(x,this.bbMin[1]),this.bbMax[1]=Math.max(x,this.bbMax[1]),x=a[d+2],this.bbMin[2]=Math.min(x,this.bbMin[2]),this.bbMax[2]=Math.max(x,this.bbMax[2])}}Nt(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let u=0;u<we.length;++u){d=we.getItemAt(u);const f=a[d]-this.center[0],m=a[d+1]-this.center[1],x=a[d+2]-this.center[2],h=f*f+m*m+x*x;if(h<=l)continue;const _=Math.sqrt(h),C=.5*(_-this.radius);this.radius=this.radius+C,l=this.radius*this.radius;const T=C/_;this.center[0]+=f*T,this.center[1]+=m*T,this.center[2]+=x*T}we.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Li(this.bbMin,this.bbMax)>1){const e=Nt(V(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let l=0;l<8;++l)o[l]=0;const{data:a,size:s}=this.position;for(let l=0;l<r;++l){let u=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[l];let m=s*this.indices[f],x=a[m],h=a[m+1],_=a[m+2];for(let C=1;C<this._numIndexPerPrimitive;++C){m=s*this.indices[f+C];const T=a[m],G=a[m+1],w=a[m+2];T<x&&(x=T),G<h&&(h=G),w<_&&(_=w)}x<e[0]&&(u|=1),h<e[1]&&(u|=2),_<e[2]&&(u|=4),i[l]=u,++o[u]}let c=0;for(let l=0;l<8;++l)o[l]>0&&++c;if(c<2)return;const d=new Array(8);for(let l=0;l<8;++l)d[l]=o[l]>0?new Uint32Array(o[l]):void 0;for(let l=0;l<8;++l)o[l]=0;for(let l=0;l<r;++l){const u=i[l];d[u][o[u]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)d[l]!==void 0&&(this._children[l]=new kt(d[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){we.prune()}}const we=new Or({deallocator:null});class Wt{constructor(){this.id=Ni()}unload(){}}var st;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(st||(st={}));class St extends Wt{constructor(e,r=[],i=pt.Triangle,o=-1){super(),this._primitiveType=i,this.edgeIndicesLength=o,this.type=st.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,s]of e)s&&this._vertexAttributes.set(a,te({},s));if(r==null||r.length===0){const a=Yo(this._vertexAttributes),s=pr(a);this.edgeIndicesLength=this.edgeIndicesLength<0?a:this.edgeIndicesLength;for(const c of this._vertexAttributes.keys())this._indices.set(c,s)}else for(const[a,s]of r)s&&(this._indices.set(a,Zo(s)),a===p.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}cloneShallow(){const e=new St([],void 0,this._primitiveType,void 0),{_vertexAttributes:r,_indices:i}=e;return this._vertexAttributes.forEach((o,a)=>{r.set(a,o)}),this._indices.forEach((o,a)=>{i.set(a,o)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return W(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===pt.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(p.POSITION),i=this.vertexAttributes.get(p.POSITION);return ho(i,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(p.POSITION),i=this.vertexAttributes.get(p.POSITION);return po(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(p.POSITION);if(e.length===0)return null;const r=this.primitiveType===pt.Triangle?3:1;X(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=pr(e.length/r),o=this.vertexAttributes.get(p.POSITION);return new kt(i,r,e,o)}}function Yo(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function Zo(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function Qo(){if(W(Rt)){const t=e=>$i(`esri/libs/basisu/${e}`);Rt=Ht(()=>import("./basis_transcoder.7c1fff7f.js"),["assets/basis_transcoder.7c1fff7f.js","assets/_commonjsHelpers.3de59df3.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Rt}let Rt;var Ee;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ee||(Ee={}));let ae=null,mt=null;async function Hr(){return W(mt)&&(mt=Qo(),ae=await mt),mt}function Jo(t,e){if(W(ae))return t.byteLength;const r=new ae.BasisFile(new Uint8Array(t)),i=Wr(r)?kr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function ea(t,e){if(W(ae))return t.byteLength;const r=new ae.KTX2File(new Uint8Array(t)),i=qr(r)?kr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function kr(t,e,r,i,o){const a=Ho(e?ue.COMPRESSED_RGBA8_ETC2_EAC:ue.COMPRESSED_RGB8_ETC2),s=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*s)}function Wr(t){return t.getNumImages()>=1&&!t.isUASTC()}function qr(t){return t.getFaces()>=1&&t.isETC1S()}async function ta(t,e,r){W(ae)&&(ae=await Hr());const i=new ae.BasisFile(new Uint8Array(r));if(!Wr(i))return null;i.startTranscoding();const o=jr(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,s)=>i.getImageTranscodedSizeInBytes(0,a,s),(a,s,c)=>i.transcodeImage(c,0,a,s,0,0));return i.close(),i.delete(),o}async function ra(t,e,r){W(ae)&&(ae=await Hr());const i=new ae.KTX2File(new Uint8Array(r));if(!qr(i))return null;i.startTranscoding();const o=jr(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,s)=>i.getImageTranscodedSizeInBytes(a,0,0,s),(a,s,c)=>i.transcodeImage(c,a,0,0,s,0,-1,-1));return i.close(),i.delete(),o}function jr(t,e,r,i,o,a,s,c){const{compressedTextureETC:d,compressedTextureS3TC:l}=t.capabilities,[u,f]=d?i?[Ee.ETC2_RGBA,ue.COMPRESSED_RGBA8_ETC2_EAC]:[Ee.ETC1_RGB,ue.COMPRESSED_RGB8_ETC2]:l?i?[Ee.BC3_RGBA,ue.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ee.BC1_RGB,ue.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ee.RGBA32,Oe.RGBA],m=e.hasMipmap?r:Math.min(1,r),x=[];for(let T=0;T<m;T++)x.push(new Uint8Array(s(T,u))),c(T,u,x[T]);const h=x.length>1,_=h?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,C=Ye(te({},e),{samplingMode:_,hasMipmap:h,internalFormat:f,width:o,height:a});return new ve(t,C,{type:"compressed",levels:x})}const Je=lt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ia=542327876,oa=131072,aa=4;function qt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function na(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const sa=qt("DXT1"),la=qt("DXT3"),ca=qt("DXT5"),da=31,ua=0,ma=1,ha=2,pa=3,fa=4,va=7,ga=20,xa=21;function ba(t,e,r){const{textureData:i,internalFormat:o,width:a,height:s}=Ta(r,e.hasMipmap);return e.samplingMode=i.levels.length>1?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=a,e.height=s,new ve(t,e,i)}function Ta(t,e){const r=new Int32Array(t,0,da);if(r[ua]!==ia)return Je.error("Invalid magic number in DDS header"),null;if(!(r[ga]&aa))return Je.error("Unsupported format, must contain a FourCC code"),null;const i=r[xa];let o,a;switch(i){case sa:o=8,a=ue.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case la:o=16,a=ue.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ca:o=16,a=ue.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Je.error("Unsupported FourCC code:",na(i)),null}let s=1,c=r[fa],d=r[pa];(3&c)==0&&(3&d)==0||(Je.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,d=d+3&-4);const l=c,u=d;let f,m;r[ha]&oa&&e!==!1&&(s=Math.max(1,r[va])),s===1||vt(c)&&vt(d)||(Je.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let x=r[ma]+4;const h=[];for(let _=0;_<s;++_)m=(c+3>>2)*(d+3>>2)*o,f=new Uint8Array(t,x,m),h.push(f),x+=m,c=Math.max(1,c>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:l,height:u}}const At=new Map([[p.POSITION,0],[p.NORMAL,1],[p.UV0,2],[p.COLOR,3],[p.SIZE,4],[p.TANGENT,4],[p.AUXPOS1,5],[p.SYMBOLCOLOR,5],[p.AUXPOS2,6],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.MODEL,8],[p.MODELNORMAL,12],[p.MODELORIGINHI,11],[p.MODELORIGINLO,15]]);new oe(p.POSITION,3,ie.FLOAT,0,12);new oe(p.POSITION,3,ie.FLOAT,0,20),new oe(p.UV0,2,ie.FLOAT,12,20);new oe(p.POSITION,3,ie.FLOAT,0,32),new oe(p.NORMAL,3,ie.FLOAT,12,32),new oe(p.UV0,2,ie.FLOAT,24,32);new oe(p.POSITION,3,ie.FLOAT,0,16),new oe(p.COLOR,4,ie.UNSIGNED_BYTE,12,16);const _a=[new oe(p.POSITION,2,ie.FLOAT,0,8)],Ca=[new oe(p.POSITION,2,ie.FLOAT,0,16),new oe(p.UV0,2,ie.FLOAT,8,16)];function Sa(t,e=_a,r=At,i=-1,o=1){let a=null;return e===Ca?a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):a=new Float32Array([i,i,o,i,i,o,o,o]),new ko(t,r,{geometry:e},{geometry:Wo.createVertex(t,Fo.STATIC_DRAW,a)})}class k extends Wt{constructor(e,r){super(),this.data=e,this.type=st.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Fi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Fe.REPEAT,t:Fe.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Pt.STRETCH,this.estimatedTexMemRequired=k._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;W(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){or(e.src)||e.preload==="auto"&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){zi(e.src)||or(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(W(e))return 0;if(Ze(e)||Qe(e))return r.encoding===k.KTX2_ENCODING?ea(e,r.mipmap):r.encoding===k.BASIS_ENCODING?Jo(e,r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?k._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:vr.TEXTURE_2D,pixelFormat:Oe.RGBA,dataType:gr.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const i=this.data;return W(i)?(this._glTexture=new ve(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(Ze(i)||Qe(i))&&this.params.encoding===k.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):(Ze(i)||Qe(i))&&this.params.encoding===k.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):(Ze(i)||Qe(i))&&this.params.encoding===k.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):Qe(i)?this._loadFromPixelData(e,i):Ze(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this.data instanceof HTMLVideoElement)||W(this._glTexture)||this.data.readyState<it.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this._drawStretchedTexture(e,r,o,a,s,this._glTexture)}else{const{width:o,height:a}=this.data,{width:s,height:c}=this._glTexture.descriptor;o!==s||a!==c?this._glTexture.updateData(0,0,0,Math.min(o,s),Math.min(a,c),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,r){return this._glTexture=ba(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>ra(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>ta(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){X(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?Oe.LUMINANCE:this.params.components===3?Oe.RGB:Oe.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new ve(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async o=>{const a=await Vr(i,{signal:o});return ar(o),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async o=>{const a=await Bi(i,i.src,!1,o);return ar(o),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=it.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(o=>new Promise((a,s)=>{const c=()=>{i.removeEventListener("loadeddata",d),i.removeEventListener("error",l),Ui(u)},d=()=>{i.readyState>=it.HAVE_CURRENT_DATA&&(c(),a(this._loadFromImage(e,i,r)))},l=f=>{c(),s(f||new Er("Failed to load video"))};i.addEventListener("loadeddata",d),i.addEventListener("error",l);const u=Gi(o,()=>l(Vi()))}))}_loadFromImage(e,r,i){const o=k._getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?Oe.RGB:Oe.RGBA,!this._requiresPowerOfTwo(e,a)||vt(o.width)&&vt(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new ve(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,o,a,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}_requiresPowerOfTwo(e,r){const i=Fe.CLAMP_TO_EDGE,o=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return!Go(e.gl)&&(r.hasMipmap||!o)}_makePowerOfTwoTexture(e,r,i,o,a){const{width:s,height:c}=i,d=nr(s),l=nr(c);let u;switch(o.width=d,o.height=l,this.params.powerOfTwoResizeMode){case Pt.PAD:o.textureCoordinateScaleFactor=[s/d,c/l],u=new ve(e,o),u.updateData(0,0,0,s,c,r);break;case Pt.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,o,a());break;default:Pr(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,o){const a=new ve(e,i),s=new qo(e,{colorTarget:zo.TEXTURE,depthStencilTarget:Bo.NONE},a),c=new ve(e,{target:vr.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:gr.UNSIGNED_BYTE,wrapMode:Fe.CLAMP_TO_EDGE,samplingMode:Re.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),d=Sa(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,o,s,d,c,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:c,framebuffer:s}:(d.dispose(!0),c.dispose(),s.detachColorTexture(),s.dispose()),e.bindFramebuffer(l),a}_drawStretchedTexture(e,r,i,o,a,s){e.bindFramebuffer(i);const c=e.getViewport();e.setViewport(0,0,s.descriptor.width,s.descriptor.height);const d=e.useTechnique(r);d.setUniform4f("uColor",1,1,1,1),d.bindTexture(a,"tex"),e.bindVAO(o),e.drawArrays(rt.TRIANGLE_STRIP,0,jo(o,"geometry")),e.bindFramebuffer(null),e.setViewport(c.x,c.y,c.width,c.height)}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var it;k.DDS_ENCODING="image/vnd-ms.dds",k.KTX2_ENCODING="image/ktx2",k.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(it||(it={}));var b;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.Highlight=4]="Highlight",t[t.Draped=5]="Draped",t[t.Occlusion=6]="Occlusion",t[t.Alpha=7]="Alpha",t[t.COUNT=8]="COUNT"})(b||(b={}));function n(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(n||(n={}));function Aa(t,e){const r=t.fragment;switch(r.code.add(n`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case j.None:r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case j.View:r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case j.WindingOrder:r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Pr(e.doubleSidedMode);case j.COUNT:}}var j;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(j||(j={}));const ya=.1,jt=.001;function Ie(t,e){const r=t.fragment;switch(e.alphaDiscardMode){case H.Blend:r.code.add(n`
        #define discardOrAdjustAlpha(color) { if (color.a < ${n.float(jt)}) { discard; } }
      `);break;case H.Opaque:r.code.add(n`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case H.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(n`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case H.MaskBlend:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(n`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}class Ma{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,r),this._technique),this._technique}ensureResources(e){return zt.LOADED}}class wa extends Ma{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Me(this._texture),this._textureNormal=Me(this._textureNormal),this._textureEmissive=Me(this._textureEmissive),this._textureOcclusion=Me(this._textureOcclusion),this._textureMetallicRoughness=Me(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?zt.LOADED:zt.LOADING}updateTexture(e){(W(this._texture)||e!==this._texture.id)&&(this._texture=Me(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}bindTextures(e){g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const r=g(this._texture)?this._texture.glTexture:null;g(r)&&r.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,r){if(W(e))return void r(null);const i=this._textureRepository.acquire(e);if(Hi(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Me(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}}function Oa(t){return Math.abs(t*t*t)}function Pa(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return et.scale=Math.min(i.divisor/(e-i.offset),1),et.factor=Oa(t),et.minPixelSize=i.minPixelSize,et.paddingPixels=o,et}function Ea(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Ra(t,e){return Math.max(ki(t*e.scale,t,e.factor),Ea(t,e))}function Ia(t,e,r,i){return Ra(t,Pa(e,r,i))}const et={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Da(t){return!!g(t)&&!t.visible}const ht=Wi();function La(t,e,r,i,o,a,s){if(!Da(e))if(t.boundingInfo){X(t.primitiveType===pt.Triangle);const c=r.tolerance;Xr(t.boundingInfo,i,o,c,a,s)}else{const c=t.indices.get(p.POSITION),d=t.vertexAttributes.get(p.POSITION);Yr(i,o,0,c.length/3,c,d,void 0,a,s)}}const Na=V();function Xr(t,e,r,i,o,a){if(W(t))return;const s=Fa(e,r,Na);if(ji(ht,t.getBBMin()),Xi(ht,t.getBBMax()),g(o)&&o.applyToAabb(ht),za(ht,e,s,i)){const{primitiveIndices:c,indices:d,position:l}=t,u=c?c.length:d.length/3;if(u>ka){const f=t.getChildren();if(f!==void 0){for(let m=0;m<8;++m)f[m]!==void 0&&Xr(f[m],e,r,i,o,a);return}}Yr(e,r,0,u,d,l,c,o,a)}}const Kr=V();function Yr(t,e,r,i,o,a,s,c,d){if(s)return $a(t,e,r,i,o,a,s,c,d);const l=a.data,u=a.stride||a.size,f=t[0],m=t[1],x=t[2],h=e[0]-f,_=e[1]-m,C=e[2]-x;for(let T=r,G=3*r;T<i;++T){let w=u*o[G++],M=l[w++],D=l[w++],S=l[w];w=u*o[G++];let A=l[w++],P=l[w++],v=l[w];w=u*o[G++];let y=l[w++],N=l[w++],$=l[w];g(c)&&([M,D,S]=c.applyToVertex(M,D,S,T),[A,P,v]=c.applyToVertex(A,P,v,T),[y,N,$]=c.applyToVertex(y,N,$,T));const I=A-M,z=P-D,F=v-S,B=y-M,J=N-D,se=$-S,_e=_*se-J*C,qe=C*B-se*h,je=h*J-B*_,ee=I*_e+z*qe+F*je;if(Math.abs(ee)<=Number.EPSILON)continue;const Y=f-M,Ce=m-D,Se=x-S,ne=Y*_e+Ce*qe+Se*je;if(ee>0){if(ne<0||ne>ee)continue}else if(ne>0||ne<ee)continue;const le=Ce*F-z*Se,Xe=Se*I-F*Y,Ke=Y*z-I*Ce,Ae=h*le+_*Xe+C*Ke;if(ee>0){if(Ae<0||ne+Ae>ee)continue}else if(Ae>0||ne+Ae<ee)continue;const ye=(B*le+J*Xe+se*Ke)/ee;ye>=0&&d(ye,Zr(I,z,F,B,J,se,Kr),T,!1)}}function $a(t,e,r,i,o,a,s,c,d){const l=a.data,u=a.stride||a.size,f=t[0],m=t[1],x=t[2],h=e[0]-f,_=e[1]-m,C=e[2]-x;for(let T=r;T<i;++T){const G=s[T];let w=3*G,M=u*o[w++],D=l[M++],S=l[M++],A=l[M];M=u*o[w++];let P=l[M++],v=l[M++],y=l[M];M=u*o[w];let N=l[M++],$=l[M++],I=l[M];g(c)&&([D,S,A]=c.applyToVertex(D,S,A,T),[P,v,y]=c.applyToVertex(P,v,y,T),[N,$,I]=c.applyToVertex(N,$,I,T));const z=P-D,F=v-S,B=y-A,J=N-D,se=$-S,_e=I-A,qe=_*_e-se*C,je=C*J-_e*h,ee=h*se-J*_,Y=z*qe+F*je+B*ee;if(Math.abs(Y)<=Number.EPSILON)continue;const Ce=f-D,Se=m-S,ne=x-A,le=Ce*qe+Se*je+ne*ee;if(Y>0){if(le<0||le>Y)continue}else if(le>0||le<Y)continue;const Xe=Se*B-F*ne,Ke=ne*z-B*Ce,Ae=Ce*F-z*Se,ye=h*Xe+_*Ke+C*Ae;if(Y>0){if(ye<0||le+ye>Y)continue}else if(ye>0||le+ye<Y)continue;const tr=(J*Xe+se*Ke+_e*Ae)/Y;tr>=0&&d(tr,Zr(z,F,B,J,se,_e,Kr),G,!1)}}const xr=V(),br=V();function Zr(t,e,r,i,o,a,s){return He(xr,t,e,r),He(br,i,o,a),$t(s,xr,br),_t(s,s),s}function Fa(t,e,r){return He(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function za(t,e,r,i){return Ba(t,e,r,i,1/0)}function Ba(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],s=(t[3]+i-e[0])*r[0];let c=Math.min(a,s),d=Math.max(a,s);const l=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(l,u)),d<0||(c=Math.max(c,Math.min(l,u)),c>d))return!1;const f=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(f,m)),!(d<0)&&(c=Math.max(c,Math.min(f,m)),!(c>d)&&c<o)}function Ga(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;o&&(a=Ia(a,i,e,o));const s=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return qi(s*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Va(t,e,r){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;e.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}function Qr(t,e){const r=e?Qr(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=Ha(o)),o==null&&i in r||(r[i]=o)}return r}function Ua(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(r=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o)}return r}function Ha(t){const e=[];return t.forEach(r=>e.push(r)),e}const Tr={multiply:1,ignore:2,replace:3,tint:4},ka=1e3;class Wa extends Wt{constructor(e,r){super(),this.type=st.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=At,this._parameters=Qr(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Ua(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}var Bt;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(Bt||(Bt={}));const qa={renderOccluded:Bt.Occlude};var Ve;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(Ve||(Ve={}));function ja(t,e,r){const i=Ut(t.direction,K(r,e,t.origin));return ke(r,t.origin,Le(r,t.direction,i)),r}function Xa(){return{origin:null,direction:null}}new fo(Xa);function Ka(t,e){const r=Ut(t,e)/(me(t)*me(e));return-Rr(r)}const Ya=lt.getLogger("esri.geometry.support.sphere");function Xt(){return $o()}function Jr(t,e=Xt()){return Ki(e,t)}function Za(t,e){return Ct(t[0],t[1],t[2],e)}function Qa(t){return t}function Ja(t){t[0]=t[1]=t[2]=t[3]=0}function en(t){return t}function Kt(t){return Array.isArray(t)?t[3]:t}function Te(t){return Array.isArray(t)?t:un}function tn(t,e,r,i){return Ct(t,e,r,i)}function rn(t,e,r){return t!==r&&tt(r,t),r[3]=t[3]+e,r}function on(t,e,r){return Ya.error("sphere.setExtent is not yet supported"),t===r?r:Jr(t,r)}function yt(t,e,r){if(W(e))return!1;const{origin:i,direction:o}=e,a=an;a[0]=i[0]-t[0],a[1]=i[1]-t[1],a[2]=i[2]-t[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),d=c*c-4*s*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-t[3]*t[3]);if(d<0)return!1;const l=Math.sqrt(d);let u=(-c-l)/(2*s);const f=(-c+l)/(2*s);return(u<0||f<u&&f>0)&&(u=f),!(u<0)&&(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),!0)}const an=V();function nn(t,e){return yt(t,e,null)}function sn(t,e,r){if(yt(t,e,r))return r;const i=ei(t,e,Ne.get());return ke(r,e.origin,Le(Ne.get(),e.direction,Zi(e.origin,i)/me(e.direction))),r}function ei(t,e,r){const i=Ne.get(),o=vo.get();$t(i,e.origin,e.direction);const a=Kt(t);$t(r,i,e.origin),Le(r,r,1/me(r)*a);const s=ri(t,e.origin),c=Ka(e.origin,r);return Yi(o,c+s,i),ze(r,r,o),r}function ln(t,e,r){return yt(t,e,r)?r:(ja(e,Te(t),r),ti(t,r,r))}function ti(t,e,r){const i=K(Ne.get(),e,Te(t)),o=Le(Ne.get(),i,t[3]/me(i));return ke(r,o,Te(t))}function cn(t,e){const r=K(Ne.get(),e,Te(t)),i=Qi(r),o=t[3]*t[3];return Math.sqrt(Math.abs(i-o))}function ri(t,e){const r=K(Ne.get(),e,Te(t)),i=me(r),o=Kt(t),a=o+Math.abs(o-i);return Rr(o/a)}const It=V();function ii(t,e,r,i){const o=K(It,e,Te(t));switch(r){case Ve.X:{const a=sr(o,It)[2];return He(i,-Math.sin(a),Math.cos(a),0)}case Ve.Y:{const a=sr(o,It),s=a[1],c=a[2],d=Math.sin(s);return He(i,-d*Math.cos(c),-d*Math.sin(c),Math.cos(s))}case Ve.Z:return _t(i,o);default:return}}function oi(t,e){const r=K(Gt,e,Te(t));return me(r)-t[3]}function dn(t,e,r,i){const o=oi(t,e),a=ii(t,e,Ve.Z,Gt),s=Le(Gt,a,r-o);return ke(i,e,s)}const un=V(),Gt=V();Object.freeze({__proto__:null,create:Xt,copy:Jr,fromCenterAndRadius:Za,wrap:Qa,clear:Ja,fromRadius:en,getRadius:Kt,getCenter:Te,fromValues:tn,elevate:rn,setExtent:on,intersectRay:yt,intersectsRay:nn,intersectRayClosestSilhouette:sn,closestPointOnSilhouette:ei,closestPoint:ln,projectPoint:ti,distanceToSilhouette:cn,angleToSilhouette:ri,axisAt:ii,altitudeAt:oi,setAltitudeAt:dn});class mn{constructor(e=0){this.offset=e,this.sphere=Xt(),this.tmpVertex=V()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*r+o[8]*i+o[12],s=o[1]*e+o[5]*r+o[9]*i+o[13],c=o[2]*e+o[6]*r+o[10]*i+o[14];const d=this.offset/Math.sqrt(a*a+s*s+c*c);a+=a*d,s+=s*d,c+=c*d;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*a+l[4]*s+l[8]*c+l[12],this.tmpVertex[1]=l[1]*a+l[5]*s+l[9]*c+l[13],this.tmpVertex[2]=l[2]*a+l[6]*s+l[10]*c+l[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const _r=new mn;function hn(t){return g(t)?(_r.offset=t,_r):null}function pn(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,s=t.length;i*=a;for(let c=0;c<s;++c){const d=2*t[c];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function ai(t,e,r,i,o){const a=r.typedBuffer,s=r.typedBufferStride,c=t.length;if(i*=s,o==null||o===1)for(let d=0;d<c;++d){const l=3*t[d];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=s}else for(let d=0;d<c;++d){const l=3*t[d];for(let u=0;u<o;++u)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=s}}function fn(t,e,r,i,o=1){const a=r.typedBuffer,s=r.typedBufferStride,c=t.length;if(i*=s,o===1)for(let d=0;d<c;++d){const l=4*t[d];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=s}else for(let d=0;d<c;++d){const l=4*t[d];for(let u=0;u<o;++u)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=s}}function vn(t,e,r,i,o,a=1){if(!r)return void ai(t,e,i,o,a);const s=i.typedBuffer,c=i.typedBufferStride,d=t.length,l=r[0],u=r[1],f=r[2],m=r[4],x=r[5],h=r[6],_=r[8],C=r[9],T=r[10],G=r[12],w=r[13],M=r[14];if(o*=c,a===1)for(let D=0;D<d;++D){const S=3*t[D],A=e[S],P=e[S+1],v=e[S+2];s[o]=l*A+m*P+_*v+G,s[o+1]=u*A+x*P+C*v+w,s[o+2]=f*A+h*P+T*v+M,o+=c}else for(let D=0;D<d;++D){const S=3*t[D],A=e[S],P=e[S+1],v=e[S+2],y=l*A+m*P+_*v+G,N=u*A+x*P+C*v+w,$=f*A+h*P+T*v+M;for(let I=0;I<a;++I)s[o]=y,s[o+1]=N,s[o+2]=$,o+=c}}function gn(t,e,r,i,o,a=1){if(!r)return void ai(t,e,i,o,a);const s=r,c=i.typedBuffer,d=i.typedBufferStride,l=t.length,u=s[0],f=s[1],m=s[2],x=s[4],h=s[5],_=s[6],C=s[8],T=s[9],G=s[10],w=!Ir(s),M=1e-6,D=1-M;if(o*=d,a===1)for(let S=0;S<l;++S){const A=3*t[S],P=e[A],v=e[A+1],y=e[A+2];let N=u*P+x*v+C*y,$=f*P+h*v+T*y,I=m*P+_*v+G*y;if(w){const z=N*N+$*$+I*I;if(z<D&&z>M){const F=1/Math.sqrt(z);N*=F,$*=F,I*=F}}c[o+0]=N,c[o+1]=$,c[o+2]=I,o+=d}else for(let S=0;S<l;++S){const A=3*t[S],P=e[A],v=e[A+1],y=e[A+2];let N=u*P+x*v+C*y,$=f*P+h*v+T*y,I=m*P+_*v+G*y;if(w){const z=N*N+$*$+I*I;if(z<D&&z>M){const F=1/Math.sqrt(z);N*=F,$*=F,I*=F}}for(let z=0;z<a;++z)c[o+0]=N,c[o+1]=$,c[o+2]=I,o+=d}}function xn(t,e,r,i,o,a=1){if(!r)return void fn(t,e,i,o,a);const s=r,c=i.typedBuffer,d=i.typedBufferStride,l=t.length,u=s[0],f=s[1],m=s[2],x=s[4],h=s[5],_=s[6],C=s[8],T=s[9],G=s[10],w=!Ir(s),M=1e-6,D=1-M;if(o*=d,a===1)for(let S=0;S<l;++S){const A=4*t[S],P=e[A],v=e[A+1],y=e[A+2],N=e[A+3];let $=u*P+x*v+C*y,I=f*P+h*v+T*y,z=m*P+_*v+G*y;if(w){const F=$*$+I*I+z*z;if(F<D&&F>M){const B=1/Math.sqrt(F);$*=B,I*=B,z*=B}}c[o+0]=$,c[o+1]=I,c[o+2]=z,c[o+3]=N,o+=d}else for(let S=0;S<l;++S){const A=4*t[S],P=e[A],v=e[A+1],y=e[A+2],N=e[A+3];let $=u*P+x*v+C*y,I=f*P+h*v+T*y,z=m*P+_*v+G*y;if(w){const F=$*$+I*I+z*z;if(F<D&&F>M){const B=1/Math.sqrt(F);$*=B,I*=B,z*=B}}for(let F=0;F<a;++F)c[o+0]=$,c[o+1]=I,c[o+2]=z,c[o+3]=N,o+=d}}function Cr(t,e,r,i,o,a=1){const s=i.typedBuffer,c=i.typedBufferStride,d=t.length;if(o*=c,a===1){if(r===4)for(let l=0;l<d;++l){const u=4*t[l];s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=e[u+3],o+=c}else if(r===3)for(let l=0;l<d;++l){const u=3*t[l];s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=255,o+=c}}else if(r===4)for(let l=0;l<d;++l){const u=4*t[l];for(let f=0;f<a;++f)s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=e[u+3],o+=c}else if(r===3)for(let l=0;l<d;++l){const u=3*t[l];for(let f=0;f<a;++f)s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=255,o+=c}}function bn(t,e,r,i,o,a){for(const s of e.fieldNames){const c=t.vertexAttributes.get(s),d=t.indices.get(s);if(c&&d)switch(s){case p.POSITION:{X(c.size===3);const l=o.getField(s,Be);l&&vn(d,c.data,r,l,a);break}case p.NORMAL:{X(c.size===3);const l=o.getField(s,Be);l&&gn(d,c.data,i,l,a);break}case p.UV0:{X(c.size===2);const l=o.getField(s,Br);l&&pn(d,c.data,l,a);break}case p.COLOR:{X(c.size===3||c.size===4);const l=o.getField(s,nt);l&&Cr(d,c.data,c.size,l,a);break}case p.SYMBOLCOLOR:{X(c.size===3||c.size===4);const l=o.getField(s,nt);l&&Cr(d,c.data,c.size,l,a);break}case p.TANGENT:{X(c.size===4);const l=o.getField(s,Ft);l&&xn(d,c.data,i,l,a);break}}}}function De(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=n`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=n`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.sliceHighlightDisabled?n`#define highlightSlice(_color_, _pos_) (_color_)`:n`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(o)}else{const r=n`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r)}}function Tn(t,e,r,i){if(e.slicePlaneEnabled)if(g(r)){if(tt(ce,r.origin),tt(pe,r.basis1),tt(fe,r.basis2),g(i)&&g(i.origin)&&K(ce,r.origin,i.origin),g(i)&&g(i.view)){const o=g(i.origin)?Dr(_n,i.view,i.origin):i.view;ke(pe,pe,ce),ke(fe,fe,ce),ze(ce,ce,o),ze(pe,pe,o),ze(fe,fe,o),K(pe,pe,ce),K(fe,fe,ce)}t.setUniform3fv("slicePlaneOrigin",ce),t.setUniform3fv("slicePlaneBasis1",pe),t.setUniform3fv("slicePlaneBasis2",fe)}else t.setUniform3fv("slicePlaneBasis1",Ot),t.setUniform3fv("slicePlaneBasis2",Ot),t.setUniform3fv("slicePlaneOrigin",Ot)}const ce=V(),pe=V(),fe=V(),_n=zr();function ni({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(n`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(n`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function si(t){return!!Ji("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}function li(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(p.MODELORIGINHI,"vec3"),t.attributes.add(p.MODELORIGINLO,"vec3"),t.attributes.add(p.MODEL,"mat3"),t.attributes.add(p.MODELNORMAL,"mat3")),e.instancedDoublePrecision&&(t.vertex.include(ni,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const r=[n`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?n`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangents?n`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n``];t.vertex.code.add(r[0]),t.vertex.code.add(r[1]),t.vertex.code.add(r[2]),e.output===b.Normal&&t.vertex.code.add(r[3]),t.vertex.code.add(r[4])}function Cn(t,e){Mo(e,Sr,Ar,3),t.setUniform3fv("viewOriginHi",Sr),t.setUniform3fv("viewOriginLo",Ar)}const Sr=V(),Ar=V();function Sn(t){const e=n`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function Mt(t,e){e.normalType===q.Attribute&&(t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(n`vec3 normalModel() {
return normal;
}`)),e.normalType===q.CompressedAttribute&&(t.include(Sn),t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(n`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===q.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var q;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(q||(q={}));function Ue(t,e){e.attributeTextureCoordinates===Q.Default&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(n`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),e.attributeTextureCoordinates===Q.Atlas&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(n`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),e.attributeTextureCoordinates===Q.None&&t.vertex.code.add(n`void forwardTextureCoordinates() {}`)}var Q;(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.COUNT=3]="COUNT"})(Q||(Q={}));function An(t){t.vertex.code.add(n`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(n`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(n`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(n`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(n`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(n`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(n`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function ci(t,e){const r=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(An),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(n`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode===he.Global?n`vec3 worldNormal = normalize(worldPos + localOrigin);`:n`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?n`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(n`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function yn(t,e,r){if(!e.verticalOffset)return;const i=Mn(e.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;t.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}function Mn(t,e,r,i=wn){return i.screenLength=t.screenLength,i.perDistance=Math.tan(.5*e)/(.5*r),i.minWorldLength=t.minWorldLength,i.maxWorldLength=t.maxWorldLength,i}const wn={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},On=Ct(1,1,0,1),Pn=Ct(1,0,1,1);function En(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",On).add("unoccludedHighlightFlag","vec4",Pn),t.fragment.code.add(n`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function Rn(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function xt(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("nearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(n`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function In(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}function Dn(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function di(t,e){t.include(Ue,e),t.fragment.code.add(n`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.attributeTextureCoordinates===Q.Default&&t.fragment.code.add(n`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),e.attributeTextureCoordinates===Q.Atlas&&(t.include(Dn),t.fragment.code.add(n`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}Xo(0,.6,.2);var L;function ui(t,e){const r=t.fragment,i=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;e.pbrMode===L.Normal&&i&&t.include(di,e),e.pbrMode!==L.Schematic?(e.pbrMode===L.Disabled&&r.code.add(n`float getBakedOcclusion() { return 1.0; }`),e.pbrMode===L.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(n`vec3 mrr;
vec3 emission;
float occlusion;`),e.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(n`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(n`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(n`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(n`float getBakedOcclusion() { return 1.0; }`),r.code.add(n`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(n`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Ln(t,e,r=!1){r||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))}(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(L||(L={}));function Yt(t){t.code.add(n`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Zt(t){t.fragment.include(Yt),t.fragment.uniforms.add("shadowMapTex","sampler2D"),t.fragment.uniforms.add("numCascades","int"),t.fragment.uniforms.add("cascadeDistances","vec4"),t.fragment.uniforms.add("shadowMapMatrix","mat4",4),t.fragment.uniforms.add("depthHalfPixelSz","float"),t.fragment.code.add(n`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function Nn(t,e,r){e.shadowMappingEnabled&&e.shadowMap.bindView(t,r)}function ot(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(n`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(n`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?n`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(n`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(n`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?n`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(n`vec4 vvColor() { return vec4(1.0); }`)}function $n(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function Fn(t,e){$n(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}function zn(t,e,r){t.setUniform3f("cameraPosition",r[3]-e[0],r[7]-e[1],r[11]-e[2])}function Bn(t,e){t.setUniformMatrix4fv("proj",e)}function Gn(t,e,r){Dr(yr,r,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",yr)}const yr=eo();class mi{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Vn{constructor(e,r,i){this.release=i,r&&(this._config=r.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=lr(this._program),this._pipeline=this._config=null}reload(e){lr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,r){}bindMaterial(e,r){}bindDraw(e){}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return rt.TRIANGLES}getPipelineState(e,r){return this._pipeline}}class Un{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function R(t={}){return(e,r)=>{var i,o;e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r);const a=e._parameterNames.length-1,s=t.count||2,c=Math.ceil(Math.log2(s)),d=(o=e._parameterBits)!=null?o:[0];let l=0;for(;d[l]+c>16;)l++,l>=d.length&&d.push(0);e._parameterBits=d;const u=d[l],f=(1<<c)-1<<u;d[l]+=c,Object.defineProperty(e,r,{get(){return this[a]},set(m){if(this[a]!==m&&(this[a]=m,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~f|+m<<u&f,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof m}})}}class hi{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Or({deallocator:null}),this._glProgram=e.programCache.acquire(r.generateSource("vertex"),r.generateSource("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=Vo()?r.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2f(e,r,i){this._glProgram.setUniform2f(e,r,i)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3f(e,r,i,o){this._glProgram.setUniform3f(e,r,i,o)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4f(e,r,i,o,a){this._glProgram.setUniform4f(e,r,i,o,a)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(W(e)||e.glName==null){const o=this._textures.get(r);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(r)),null}let i=this._textures.get(r);return i==null?(i=this._allocTextureUnit(e),this._textures.set(r,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if((e.type==="sampler2D"||e.type==="samplerCube")&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}be.LESS;be.ALWAYS;const Hn={mask:255},kn={function:{func:be.ALWAYS,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:Z.KEEP,zFail:Z.KEEP,zPass:Z.ZERO}},Wn={function:{func:be.ALWAYS,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:Z.KEEP,zFail:Z.KEEP,zPass:Z.REPLACE}};be.EQUAL,ge.OutlineVisualElementMask,ge.OutlineVisualElementMask,Z.KEEP,Z.KEEP,Z.KEEP;be.NOTEQUAL,ge.OutlineVisualElementMask,ge.OutlineVisualElementMask,Z.KEEP,Z.KEEP,Z.KEEP;function pi(t,e){e.output===b.Color&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(n`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===b.Depth||e.output===b.Shadow?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("nearFar","vec2"),t.vertex.code.add(n`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(n`void forwardLinearDepth() {}`)}function fi(t){t.vertex.code.add(n`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function at(t,e){const r=te({hasModelTransformation:!1},e);if(r.hasModelTransformation)return r.linearDepth?void t.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void t.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?t.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Qt(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(n`vec3 positionModel() { return position; }`)}var re;(function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"})(re||(re={}));function qn(t){t.vertex.code.add(n`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.int(re.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.int(re.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.int(re.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.int(re.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function vi(t,e){e.symbolColor?(t.include(qn),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?t.vertex.code.add(n`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):t.vertex.code.add(n`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function gi(t,e){e.attributeColor?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(n`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(n`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(n`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function jn(t,e){t.include(Qt),t.vertex.include(ni,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("transformWorldFromModelRS","mat3"),t.vertex.uniforms.add("transformWorldFromModelTH","vec3"),t.vertex.uniforms.add("transformWorldFromModelTL","vec3"),t.vertex.uniforms.add("transformWorldFromViewTH","vec3"),t.vertex.uniforms.add("transformWorldFromViewTL","vec3"),t.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),t.vertex.uniforms.add("transformProjFromView","mat4"),t.vertex.code.add(n`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.uniforms.add("transformWorldFromViewTL","vec3"),t.fragment.code.add(n`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function xi(t,e){e.normalType===q.Attribute||e.normalType===q.CompressedAttribute?(t.include(Mt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),t.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),t.vertex.code.add(n`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===q.Ground?(t.include(jn,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(n`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode===he.Global?n`normalize(vPositionWorldCameraRelative);`:n`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(n`void forwardNormal() {}`)}function Xn(t,e){t.fragment.include(Yt),e.output===b.Shadow?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===b.Depth&&t.fragment.code.add(n`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function bi(t,e){const r=t.vertex.code,i=t.fragment.code,o=e.hasModelTransformation;e.output!==b.Depth&&e.output!==b.Shadow||(t.include(at,{linearDepth:!0,hasModelTransformation:o}),t.include(Ue,e),t.include(ot,e),t.include(Xn,e),t.include(De,e),t.vertex.uniforms.add("nearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(n`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),t.include(Ie,e),i.add(n`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===b.Normal&&(t.include(at,{linearDepth:!1,hasModelTransformation:o}),t.include(Mt,e),t.include(xi,e),t.include(Ue,e),t.include(ot,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),r.add(n`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===q.Attribute?n`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(De,e),t.include(Ie,e),i.add(n`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===q.ScreenDerivative?n`
            vec3 normal = screenDerivativeNormal(vPositionView);`:n`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===b.Highlight&&(t.include(at,{linearDepth:!1,hasModelTransformation:o}),t.include(Ue,e),t.include(ot,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(n`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(De,e),t.include(Ie,e),t.include(En),i.add(n`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function bt(t){t.include(Yt),t.code.add(n`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Kn(t,e){const r=t.fragment;e.vertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===j.WindingOrder?r.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(n`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.attributeTextureCoordinates!==Q.None&&(t.include(di,e),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(n`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Jt(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(n`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(n`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function Yn(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||r.code.add(n`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function Zn(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.uniforms.add("lightingSpecularStrength","float"),e.uniforms.add("lightingEnvironmentStrength","float"),e.code.add(n`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Qn(t){const e=t.fragment.code;e.add(n`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(n`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(n`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ti(t){t.vertex.code.add(n`const float PI = 3.141592653589793;`),t.fragment.code.add(n`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function er(t,e){const r=t.fragment.code;t.include(Ti),e.pbrMode===L.Water||e.pbrMode===L.WaterOnIntegratedMesh?(r.add(n`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(n`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(n`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(n`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(n`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(t.include(Qn),r.add(n`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(n`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(n`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(n`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(n`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(n`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function _i(t,e){const r=t.fragment;t.include(Zn),t.include(Jt,e),e.pbrMode!==L.Disabled&&t.include(er,e),t.include(Yn,e),e.receiveShadows&&t.include(Zt,e),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),t.include(Ti),r.code.add(n`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===L.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(n`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode===he.Global?n`normalize(vPosWorld)`:n`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(n`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===L.Disabled||e.pbrMode===L.WaterOnIntegratedMesh?r.code.add(n`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(r.code.add(n`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(n`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(n`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(n`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(n`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===L.Schematic?n`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:n`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Jn(t,e){const r=n`
  /*
  *  ${e.name}
  *  ${e.output===b.Color?"RenderOutput: Color":e.output===b.Depth?"RenderOutput: Depth":e.output===b.Shadow?"RenderOutput: Shadow":e.output===b.Normal?"RenderOutput: Normal":e.output===b.Highlight?"RenderOutput: Highlight":""}
  */
  `;Uo()&&(t.fragment.code.add(r),t.vertex.code.add(r))}function es(t){t.code.add(n`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Tt(t){t.include(es),t.code.add(n`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.int(re.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${n.int(re.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${n.int(re.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.int(re.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${n.int(re.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const ts=lt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Ci{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&ts.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class Si extends Ci{constructor(){super(...arguments),this.vertex=new Mr,this.fragment=new Mr,this.attributes=new os,this.varyings=new as,this.extensions=new We,this.constants=new U}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,s=a.uniforms.generateSource(),c=a.code.generateSource(),d=e==="vertex"?ss:ns,l=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${l.join(`
`)}

${s.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${c.join(`
`)}`}}class rs{constructor(){this._entries=new Map}add(e,r,i){const o=`${e}_${r}_${i}`;return this._entries.set(o,{name:e,type:r,arraySize:i}),this}generateSource(){const e=r=>r?`[${r}]`:"";return Array.from(this._entries.values()).map(r=>`uniform ${r.type} ${r.name}${e(r.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class is{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Mr extends Ci{constructor(){super(...arguments),this.uniforms=new rs,this.code=new is,this.constants=new U}get builder(){return this}}class os{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class as{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class We{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?We.ALLOWLIST_VERTEX:We.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}We.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],We.ALLOWLIST_VERTEX=[];class U{constructor(){this._entries=[]}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=U._numberToFloatStr(i);break;case"int":o=U._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${U._numberToFloatStr(i[0])},                            ${U._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${U._numberToFloatStr(i[0])},                            ${U._numberToFloatStr(i[1])},                            ${U._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${U._numberToFloatStr(i[0])},                            ${U._numberToFloatStr(i[1])},                            ${U._numberToFloatStr(i[2])},                            ${U._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${U._numberToIntStr(i[0])},                             ${U._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${U._numberToIntStr(i[0])},                             ${U._numberToIntStr(i[1])},                             ${U._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${U._numberToIntStr(i[0])},                             ${U._numberToIntStr(i[1])},                             ${U._numberToIntStr(i[2])},                             ${U._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>U._numberToFloatStr(a)).join(", ")})`}return this._entries.push(`const ${r} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ns=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,ss=`precision highp float;
precision highp sampler2D;`;function ls(t){const e=new Si,r=e.vertex.code,i=e.fragment.code;e.include(Jn,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const o=t.hasModelTransformation;return o&&e.vertex.uniforms.add("model","mat4"),e.include(Qt),e.varyings.add("vpos","vec3"),e.include(ot,t),e.include(li,t),e.include(ci,t),t.output!==b.Color&&t.output!==b.Alpha||(e.include(Mt,t),e.include(at,{linearDepth:!1,hasModelTransformation:o}),t.normalType===q.Attribute&&t.offsetBackfaces&&e.include(fi),e.include(Kn,t),e.include(xi,t),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("localvpos","vec3"),e.include(Ue,t),e.include(pi,t),e.include(vi,t),e.include(gi,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),r.add(n`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n.float(jt)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===q.Attribute?n`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
          ${t.normalType===q.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===b.Alpha&&(e.include(De,t),e.include(Ie,t),t.multipassTerrainEnabled&&(e.fragment.include(bt),e.include(xt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Tt),i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?n`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===b.Color&&(e.include(De,t),e.include(_i,t),e.include(Jt,t),e.include(Ie,t),t.receiveShadows&&e.include(Zt,t),t.multipassTerrainEnabled&&(e.fragment.include(bt),e.include(xt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(ui,t),e.include(er,t),e.fragment.include(Tt),e.include(Aa,t),i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===q.ScreenDerivative?n`
        vec3 normal = screenDerivativeNormal(localvpos);`:n`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===he.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?n`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?n`
              mat3 tangentSpace = ${t.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===he.Global?n`vec3 normalGround = normalize(vpos + localOrigin);`:n`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:n``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(bi,t),e}const cs=Object.freeze({__proto__:null,build:ls}),ds=lt.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class dt extends Vn{initializeProgram(e){const r=dt.shader.get(),i=this.configuration,o=r.build({oitEnabled:i.transparencyPassType===Ge.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?L.Schematic:L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,hasModelTransformation:i.hasModelTransformation,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?q.ScreenDerivative:q.Attribute,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?Q.Default:Q.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:si(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new hi(e.rctx,o,At)}bindPass(e,r){var i,o;Bn(this.program,r.camera.projectionMatrix);const a=this.configuration.output;this.configuration.hasModelTransformation&&(g(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):ds.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===b.Depth||r.multipassTerrainEnabled||a===b.Shadow)&&this.program.setUniform2fv("nearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),In(this.program,r)),a===b.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Tr[e.colorMixMode])),a===b.Color?(r.lighting.setUniforms(this.program,!1,r.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Tr[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Ln(this.program,e,this.configuration.isSchematic)):a===b.Highlight&&Rn(this.program,r),Fn(this.program,e),yn(this.program,e,r),Va(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==H.Mask&&e.textureAlphaMode!==H.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),(i=r.shadowMap)==null||i.bind(this.program),(o=r.ssaoHelper)==null||o.bind(this.program,r.camera)}bindDraw(e){const r=this.configuration.instancedDoublePrecision?Vt(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Gn(this.program,r,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===b.Color||this.configuration.output===b.Alpha||this.configuration.output===b.Depth&&this.configuration.screenSizePerspective||this.configuration.output===b.Normal&&this.configuration.screenSizePerspective||this.configuration.output===b.Highlight&&this.configuration.screenSizePerspective)&&zn(this.program,r,e.camera.viewInverseTransposeMatrix),this.configuration.output===b.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Cn(this.program,r),Tn(this.program,this.configuration,e.slicePlane,{origin:r}),this.configuration.output===b.Color&&Nn(this.program,e,r)}_convertDepthTestFunction(e){return e===ct.Lequal?be.LEQUAL:be.LESS}_setPipeline(e,r){const i=this.configuration,o=e===Ge.NONE,a=e===Ge.FrontFace;return wo({blending:i.output!==b.Color&&i.output!==b.Alpha||!i.transparent?null:o?Oo:Po(e),culling:us(i)&&Eo(i.cullFace),depthTest:{func:Ro(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:o||a?i.writeDepth&&Io:null,colorWrite:Do,stencilWrite:i.sceneHasOcludees?Hn:null,stencilTest:i.sceneHasOcludees?r?Wn:kn:null,polygonOffset:o||a?null:Lo(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function us(t){return t.cullFace?t.cullFace!==xe.None:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}dt.shader=new mi(cs,()=>Ht(()=>import("./DefaultMaterial.glsl.32508753.js"),["assets/DefaultMaterial.glsl.32508753.js","assets/GISSearch.9df35164.js","assets/GISSearch.2dbd3ab5.css","assets/index.ec19e11e.js","assets/index.140a46ab.css","assets/ProjectWeberRenew.dc78a7b0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vec33.bd6ea806.js","assets/VertexAttribute.ebaf629c.js","assets/quat.328e2803.js","assets/vec4f64.a3e91e77.js","assets/requestImageUtils.9b862383.js","assets/enums.457e23f9.js","assets/Texture.4f2b846f.js","assets/BufferView.2b4bca5e.js","assets/DefaultMaterial_COLOR_GAMMA.8d59dada.js","assets/types.1febf5bf.js","assets/Version.e74fefad.js","assets/VertexArrayObject.61e2646f.js","assets/VertexElementDescriptor.0406f2d4.js","assets/InterleavedLayout.31e9f266.js","assets/RenderSlot.f9644924.js","assets/vec3f32.8179e08f.js"]));class O extends Un{constructor(){super(...arguments),this.output=b.Color,this.alphaDiscardMode=H.Opaque,this.doubleSidedMode=j.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=xe.None,this.transparencyPassType=Ge.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=ct.Less}}E([R({count:b.COUNT})],O.prototype,"output",void 0),E([R({count:H.COUNT})],O.prototype,"alphaDiscardMode",void 0),E([R({count:j.COUNT})],O.prototype,"doubleSidedMode",void 0),E([R()],O.prototype,"isSchematic",void 0),E([R()],O.prototype,"vertexColors",void 0),E([R()],O.prototype,"offsetBackfaces",void 0),E([R()],O.prototype,"symbolColors",void 0),E([R()],O.prototype,"vvSize",void 0),E([R()],O.prototype,"vvColor",void 0),E([R()],O.prototype,"verticalOffset",void 0),E([R()],O.prototype,"receiveShadows",void 0),E([R()],O.prototype,"slicePlaneEnabled",void 0),E([R()],O.prototype,"sliceHighlightDisabled",void 0),E([R()],O.prototype,"receiveAmbientOcclusion",void 0),E([R()],O.prototype,"screenSizePerspective",void 0),E([R()],O.prototype,"textureAlphaPremultiplied",void 0),E([R()],O.prototype,"hasColorTexture",void 0),E([R()],O.prototype,"usePBR",void 0),E([R()],O.prototype,"hasMetalnessAndRoughnessTexture",void 0),E([R()],O.prototype,"hasEmissionTexture",void 0),E([R()],O.prototype,"hasOcclusionTexture",void 0),E([R()],O.prototype,"hasNormalTexture",void 0),E([R()],O.prototype,"instanced",void 0),E([R()],O.prototype,"instancedColor",void 0),E([R()],O.prototype,"instancedDoublePrecision",void 0),E([R()],O.prototype,"vertexTangents",void 0),E([R()],O.prototype,"normalsTypeDerivate",void 0),E([R()],O.prototype,"writeDepth",void 0),E([R()],O.prototype,"sceneHasOcludees",void 0),E([R()],O.prototype,"transparent",void 0),E([R()],O.prototype,"enableOffset",void 0),E([R({count:xe.COUNT})],O.prototype,"cullFace",void 0),E([R({count:Ge.COUNT})],O.prototype,"transparencyPassType",void 0),E([R()],O.prototype,"multipassTerrainEnabled",void 0),E([R()],O.prototype,"cullAboveGround",void 0),E([R()],O.prototype,"hasModelTransformation",void 0),E([R({count:ct.COUNT})],O.prototype,"customDepthTest",void 0);function ms(t){const e=new Si,r=e.vertex.code,i=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),e.include(Qt),e.varyings.add("vpos","vec3"),e.include(ot,t),e.include(li,t),e.include(ci,t),t.output!==b.Color&&t.output!==b.Alpha||(e.include(Mt,t),e.include(at,{linearDepth:!1}),t.offsetBackfaces&&e.include(fi),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.include(Ue,t),e.include(pi,t),e.include(vi,t),e.include(gi,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),r.add(n`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n.float(jt)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassTerrainEnabled?n`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===b.Alpha&&(e.include(De,t),e.include(Ie,t),t.multipassTerrainEnabled&&(e.fragment.include(bt),e.include(xt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Tt),i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?n`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?n`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===b.Color&&(e.include(De,t),e.include(_i,t),e.include(Jt,t),e.include(Ie,t),t.receiveShadows&&e.include(Zt,t),t.multipassTerrainEnabled&&(e.fragment.include(bt),e.include(xt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(ui,t),e.include(er,t),e.fragment.include(Tt),i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?n`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===he.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?n`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${n`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===he.Global?n`vec3 normalGround = normalize(vpos + localOrigin);`:n`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:n``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(bi,t),e}const hs=Object.freeze({__proto__:null,build:ms});class wt extends dt{initializeProgram(e){const r=wt.shader.get(),i=this.configuration,o=r.build({oitEnabled:i.transparencyPassType===Ge.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:q.Attribute,doubleSidedMode:j.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?Q.Default:Q.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:si(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new hi(e.rctx,o,At)}}wt.shader=new mi(hs,()=>Ht(()=>import("./RealisticTree.glsl.c4d86070.js"),["assets/RealisticTree.glsl.c4d86070.js","assets/GISSearch.9df35164.js","assets/GISSearch.2dbd3ab5.css","assets/index.ec19e11e.js","assets/index.140a46ab.css","assets/ProjectWeberRenew.dc78a7b0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vec33.bd6ea806.js","assets/VertexAttribute.ebaf629c.js","assets/quat.328e2803.js","assets/vec4f64.a3e91e77.js","assets/requestImageUtils.9b862383.js","assets/enums.457e23f9.js","assets/BufferView.2b4bca5e.js","assets/DefaultMaterial_COLOR_GAMMA.8d59dada.js","assets/types.1febf5bf.js","assets/Version.e74fefad.js","assets/Texture.4f2b846f.js","assets/VertexArrayObject.61e2646f.js","assets/VertexElementDescriptor.0406f2d4.js","assets/InterleavedLayout.31e9f266.js","assets/RenderSlot.f9644924.js","assets/vec3f32.8179e08f.js"]));class Ai extends Wa{constructor(e){super(e,fs),this.supportsEdges=!0,this.techniqueConfig=new O,this.vertexBufferLayout=gs(this.parameters),this.instanceBufferLayout=e.instanced?xs(this.parameters):null}isVisibleInPass(e){return e!==Et.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Et.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Et.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const r=e.instanced,i=e.vertexColors,o=e.symbolColors,a=!!r&&r.indexOf("color")>-1,s=e.vvColorEnabled,c=e.colorMixMode==="replace",d=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(a||s||o)?!!c||d:i?c?l:d:a||s||o?!!c||d:c?l:d}getTechniqueConfig(e,r){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=this.parameters.verticalOffset!==null,this.techniqueConfig.screenSizePerspective=this.parameters.screenSizePerspective!==null,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate=this.parameters.normals==="screenDerivative",this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,g(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?xe.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=r.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=r.cullAboveGround,this.techniqueConfig.hasModelTransformation=g(this.parameters.modelTransformation),e!==b.Color&&e!==b.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=j.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?j.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?j.WindingOrder:j.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!r.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=r.transparencyPassType,this.techniqueConfig.enableOffset=r.camera.relativeElevation<No),this.techniqueConfig}intersect(e,r,i,o,a,s,c){if(this.parameters.verticalOffset!==null){const d=o.camera;He(Lt,i[12],i[13],i[14]);let l=null;switch(o.viewingMode){case he.Global:l=_t(wr,Lt);break;case he.Local:l=tt(wr,_s)}let u=0;if(this.parameters.verticalOffset!==null){const f=K(Cs,Lt,d.eye),m=me(f),x=Le(f,f,1/m);let h=null;this.parameters.screenSizePerspective&&(h=Ut(l,x)),u+=Ga(d,m,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective)}Le(l,l,u),to(Dt,l,o.transform.inverseRotation),a=K(bs,a,Dt),s=K(Ts,s,Dt)}La(e,r,o,a,s,hn(o.verticalOffset),c)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?ut.TRANSPARENT_MATERIAL:ut.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ut.OPAQUE_MATERIAL)||e===ut.DRAPED_MATERIAL}createGLMaterial(e){return e.output===b.Color||e.output===b.Alpha||e.output===b.Depth||e.output===b.Normal||e.output===b.Shadow||e.output===b.Highlight?new ps(e):null}createBufferWriter(){return new vs(this.vertexBufferLayout,this.instanceBufferLayout)}}class ps extends wa{constructor(e){super(te(te({},e),e.material.parameters))}updateParameters(e){const r=this._material.parameters;return this.updateTexture(r.textureId),this.ensureTechnique(r.treeRendering?wt:dt,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==b.Color&&this._output!==b.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,r){r.bindPass(this._material.parameters,e),this.bindTextures(r.program)}}const fs=te({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:xe.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Fr(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:ct.Less,textureAlphaMode:H.Blend,textureAlphaCutoff:ya,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},qa);class vs{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,r,i,o){bn(r,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,o)}}function gs(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=Ur().vec3f(p.POSITION).vec3f(p.NORMAL);return t.vertexTangents&&r.vec4f(p.TANGENT),e&&r.vec2f(p.UV0),t.vertexColors&&r.vec4u8(p.COLOR),t.symbolColors&&r.vec4u8(p.SYMBOLCOLOR),r}function xs(t){let e=Ur();return e=t.instancedDoublePrecision?e.vec3f(p.MODELORIGINHI).vec3f(p.MODELORIGINLO).mat3f(p.MODEL).mat3f(p.MODELNORMAL):e.mat4f(p.MODEL).mat4f(p.MODELNORMAL),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f(p.INSTANCECOLOR)),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f(p.INSTANCEFEATUREATTRIBUTE)),e}const bs=V(),Ts=V(),_s=Vt(0,0,1),wr=V(),Dt=V(),Lt=V(),Cs=V(),de=lt.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ss(t,e){const r=await As(t,e);return{resource:r,textures:await Ps(r.textureDefinitions,e)}}async function As(t,e){const r=g(e)&&e.streamDataRequester;if(r)return ys(t,r,e);const i=await Lr(ro(t,io(e)));if(i.ok===!0)return i.value.data;Nr(i.error),yi(i.error)}async function ys(t,e,r){const i=await Lr(e.request(t,"json",r));if(i.ok===!0)return i.value;Nr(i.error),yi(i.error.details.url)}function yi(t){throw new Er("",`Request for object resource failed: ${t}`)}function Ms(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(de.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const s in e.vertexAttributes){const c=a[s];c&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(de.warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),i=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(de.warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),i=!1)):(de.warn(`Indexed geometry does not specify face indices for '${s}' attribute`),i=!1)}}else de.warn("Indexed geometries must specify faces"),i=!1;break}default:de.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(de.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(de.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function ws(t,e){const r=[],i=[],o=[],a=[],s=t.resource,c=Gr.parse(s.version||"1.0","wosr");Rs.validate(c);const d=s.model.name,l=s.model.geometries,u=s.materialDefinitions,f=t.textures;let m=0;const x=new Map;for(let h=0;h<l.length;h++){const _=l[h];if(!Ms(_))continue;const C=Es(_),T=_.params.vertexAttributes,G=[];for(const v in T){const y=T[v],N=y.values;G.push([v,{data:N,size:y.valuesPerElement,exclusive:!0}])}const w=[];if(_.params.topology!=="PerAttributeArray"){const v=_.params.faces;for(const y in v)w.push([y,new Uint32Array(v[y].values)])}const M=f&&f[C.texture];if(M&&!x.has(C.texture)){const{image:v,params:y}=M,N=new k(v,y);a.push(N),x.set(C.texture,N)}const D=x.get(C.texture),S=D?D.id:void 0;let A=o[C.material]?o[C.material][C.texture]:null;if(!A){const v=u[C.material.substring(C.material.lastIndexOf("/")+1)].params;v.transparency===1&&(v.transparency=0);const y=M&&M.alphaChannelUsage,N=v.transparency>0||y==="transparency"||y==="maskAndTransparency",$=M?Mi(M.alphaChannelUsage):void 0,I={ambient:cr(v.diffuse),diffuse:cr(v.diffuse),opacity:1-(v.transparency||0),transparent:N,textureAlphaMode:$,textureAlphaCutoff:.33,textureId:S,initTextureTransparent:!0,doubleSided:!0,cullFace:xe.None,colorMixMode:v.externalColorMixMode||"tint",textureAlphaPremultiplied:!!M&&!!M.params.preMultiplyAlpha};g(e)&&e.materialParamsMixin&&Object.assign(I,e.materialParamsMixin),A=new Ai(I),o[C.material]||(o[C.material]={}),o[C.material][C.texture]=A}i.push(A);const P=new St(G,w);m+=w.position?w.position.length:0,r.push(P)}return{name:d,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:Os(r),numberOfVertices:m,lodThreshold:null}}function Os(t){const e=$r();return t.forEach(r=>{const i=r.boundingInfo;g(i)&&(gt(e,i.getBBMin()),gt(e,i.getBBMax()))}),e}async function Ps(t,e){const r=[];for(const a in t){const s=t[a],c=s.images[0].data;if(!c){de.warn("Externally referenced texture data is not yet supported");continue}const d=s.encoding+";base64,"+c,l="/textureDefinitions/"+a,u=s.channels==="rgba"?s.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Fe.REPEAT,t:Fe.REPEAT},preMultiplyAlpha:Mi(u)!==H.Opaque},m=g(e)&&e.disableTextures?Promise.resolve(null):Vr(d,e);r.push(m.then(x=>({refId:l,image:x,params:f,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Mi(t){switch(t){case"mask":return H.Mask;case"maskAndTransparency":return H.MaskBlend;case"none":return H.Opaque;default:return H.Blend}}function Es(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Rs=new Gr(1,2,"wosr");async function Is(t,e){const r=wi(oo(t));if(r.fileType==="wosr"){const d=await(e.cache?e.cache.loadWOSR(r.url,e):Ss(r.url,e)),l=ws(d,e);return{lods:[l],referenceBoundingBox:l.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:d.remove}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):go(new xo(e.streamDataRequester),r.url,e,e.usePBR)),o=ao(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&g(o)&&i.meta.uri.indexOf("/RealisticTrees/")!==-1&&Ns(i,o);const a=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},s=Ye(te({},e.materialParamsMixin),{treeRendering:i.customMeta.esriTreeRendering});if(r.specifiedLodIndex!=null){const d=ft(i,a,s,r.specifiedLodIndex);let l=d[0].boundingBox;return r.specifiedLodIndex!==0&&(l=ft(i,a,s,0)[0].boundingBox),{lods:d,referenceBoundingBox:l,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const c=ft(i,a,s);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function wi(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function ft(t,e,r,i){const o=t.model,a=Fr(),s=new Array,c=new Map,d=new Map;return o.lods.forEach((l,u)=>{if(i!==void 0&&u!==i)return;const f={name:l.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:g(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:$r()};s.push(f),l.parts.forEach(m=>{const x=m.material+(m.attributes.normal?"_normal":"")+(m.attributes.color?"_color":"")+(m.attributes.texCoord0?"_texCoord0":"")+(m.attributes.tangent?"_tangent":""),h=o.materials.get(m.material),_=g(m.attributes.texCoord0),C=g(m.attributes.normal),T=Ds(h.alphaMode);if(!c.has(x)){if(_){if(g(h.textureColor)&&!d.has(h.textureColor)){const B=o.textures.get(h.textureColor),J=Ye(te({},B.parameters),{preMultiplyAlpha:T!==H.Opaque});d.set(h.textureColor,new k(B.data,J))}if(g(h.textureNormal)&&!d.has(h.textureNormal)){const B=o.textures.get(h.textureNormal);d.set(h.textureNormal,new k(B.data,B.parameters))}if(g(h.textureOcclusion)&&!d.has(h.textureOcclusion)){const B=o.textures.get(h.textureOcclusion);d.set(h.textureOcclusion,new k(B.data,B.parameters))}if(g(h.textureEmissive)&&!d.has(h.textureEmissive)){const B=o.textures.get(h.textureEmissive);d.set(h.textureEmissive,new k(B.data,B.parameters))}if(g(h.textureMetallicRoughness)&&!d.has(h.textureMetallicRoughness)){const B=o.textures.get(h.textureMetallicRoughness);d.set(h.textureMetallicRoughness,new k(B.data,B.parameters))}}const v=h.color[0]**(1/$e),y=h.color[1]**(1/$e),N=h.color[2]**(1/$e),$=h.emissiveFactor[0]**(1/$e),I=h.emissiveFactor[1]**(1/$e),z=h.emissiveFactor[2]**(1/$e),F=g(h.textureColor)&&_?d.get(h.textureColor):null;c.set(x,new Ai(te(Ye(te({},e),{transparent:T===H.Blend,customDepthTest:ct.Lequal,textureAlphaMode:T,textureAlphaCutoff:h.alphaCutoff,diffuse:[v,y,N],ambient:[v,y,N],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?xe.None:xe.Back,vertexColors:!!m.attributes.color,vertexTangents:!!m.attributes.tangent,normals:C?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:g(F)?F.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:g(h.textureNormal)&&_?d.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:g(F)&&!!F.params.preMultiplyAlpha,occlusionTextureId:g(h.textureOcclusion)&&_?d.get(h.textureOcclusion).id:void 0,emissiveTextureId:g(h.textureEmissive)&&_?d.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:g(h.textureMetallicRoughness)&&_?d.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[$,I,z],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1}),r)))}const G=Ls(m.indices||m.attributes.position.count,m.primitiveType),w=m.attributes.position.count,M=Pe(Be,w);so(M,m.attributes.position,m.transform);const D=[[p.POSITION,{data:M.typedBuffer,size:M.elementCount,exclusive:!0}]],S=[[p.POSITION,G]];if(g(m.attributes.normal)){const v=Pe(Be,w);dr(a,m.transform),lo(v,m.attributes.normal,a),D.push([p.NORMAL,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),S.push([p.NORMAL,G])}if(g(m.attributes.tangent)){const v=Pe(Ft,w);dr(a,m.transform),bo(v,m.attributes.tangent,a),D.push([p.TANGENT,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),S.push([p.TANGENT,G])}if(g(m.attributes.texCoord0)){const v=Pe(Br,w);To(v,m.attributes.texCoord0),D.push([p.UV0,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),S.push([p.UV0,G])}if(g(m.attributes.color)){const v=Pe(nt,w);if(m.attributes.color.elementCount===4)m.attributes.color instanceof Ft?fr(v,m.attributes.color,255):m.attributes.color instanceof nt?_o(v,m.attributes.color):m.attributes.color instanceof uo&&fr(v,m.attributes.color,1/256);else{Co(v,255,255,255,255);const y=new hr(v.buffer,0,4);m.attributes.color instanceof Be?mr(y,m.attributes.color,255):m.attributes.color instanceof hr?co(y,m.attributes.color):m.attributes.color instanceof mo&&mr(y,m.attributes.color,1/256)}D.push([p.COLOR,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),S.push([p.COLOR,G])}const A=new St(D,S);f.stageResources.geometries.push(A),f.stageResources.materials.push(c.get(x)),_&&(g(h.textureColor)&&f.stageResources.textures.push(d.get(h.textureColor)),g(h.textureNormal)&&f.stageResources.textures.push(d.get(h.textureNormal)),g(h.textureOcclusion)&&f.stageResources.textures.push(d.get(h.textureOcclusion)),g(h.textureEmissive)&&f.stageResources.textures.push(d.get(h.textureEmissive)),g(h.textureMetallicRoughness)&&f.stageResources.textures.push(d.get(h.textureMetallicRoughness))),f.numberOfVertices+=w;const P=A.boundingInfo;g(P)&&(gt(f.boundingBox,P.getBBMin()),gt(f.boundingBox,P.getBBMax()))})}),s}function Ds(t){switch(t){case"BLEND":return H.Blend;case"MASK":return H.Mask;case"OPAQUE":case null:case void 0:return H.Opaque}}function Ls(t,e){switch(e){case rt.TRIANGLES:return yo(t);case rt.TRIANGLE_STRIP:return Ao(t);case rt.TRIANGLE_FAN:return So(t)}}function Ns(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];t.customMeta.esriTreeRendering=!0;for(const o of i.parts){const a=o.attributes.normal;if(W(a))return;const s=o.attributes.position,c=s.count,d=V(),l=V(),u=V(),f=Pe(nt,c),m=Pe(Be,c),x=no(zr(),o.transform);for(let h=0;h<c;h++){s.getVec(h,l),a.getVec(h,d),ze(l,l,o.transform),K(u,l,e.center),ur(u,u,e.radius);const _=u[2],C=me(u),T=Math.min(.45+.55*C*C,1);ur(u,u,e.radius),ze(u,u,x),_t(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&Nt(u,u,d,_>-1?.2:Math.min(-4*_-3.8,1)),m.setVec(h,u),f.set(h,0,255*T),f.set(h,1,255*T),f.set(h,2,255*T),f.set(h,3,255)}o.attributes.normal=m,o.attributes.color=f}}}var el=Object.freeze(Object.defineProperty({__proto__:null,fetch:Is,gltfToEngineResources:ft,parseUrl:wi},Symbol.toStringTag,{value:"Module"}));export{ls as $,ms as _,el as o};
