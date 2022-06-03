import{C as P,r as i,g as h,B as b,lg as L,bf as R,A as G,fP as M,t as _}from"./GISSearch.9df35164.js";import{a as B}from"./quat.328e2803.js";import{r as D}from"./vec4f64.a3e91e77.js";import{m as j,c as k,p as q,f as z}from"./meshFeatureSet.ad8e6e56.js";import{T as Q,i as S,c as N,x as O,u as V,L as H,O as F,E as J}from"./BufferView.2b4bca5e.js";import{a as K,f as U,g as W,r as X,c as Y,h as Z}from"./vec33.bd6ea806.js";import{n as tt,a as et,r as w,o as ot,b as rt,t as E,d as nt,m as st,e as at,g as it,p as ct,i as lt,j as ut,k as ft,q as mt}from"./DefaultMaterial_COLOR_GAMMA.8d59dada.js";import{b as pt}from"./georeference.fcd6c25d.js";import{E as T,D as C}from"./enums.457e23f9.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./earcut.91e104de.js";import"./deduplicate.84ebdadf.js";import"./types.1febf5bf.js";import"./Version.e74fefad.js";async function qt(t,e,r){const s=new tt(dt(r)),o=(await et(s,e,r,!0)).model,f=o.lods.shift(),l=new Map,c=new Map;o.textures.forEach(($,A)=>l.set(A,$t($))),o.materials.forEach(($,A)=>c.set(A,ht($,l)));const a=xt(f);for(const $ of a.parts)bt(a,$,c);const{position:d,normal:u,tangent:n,color:m,texCoord0:p}=a.vertexAttributes,x={position:d.typedBuffer,normal:i(u)?u.typedBuffer:null,tangent:i(n)?n.typedBuffer:null,uv:i(p)?p.typedBuffer:null,color:i(m)?m.typedBuffer:null},v=pt(x,t,r);return{transform:v.transform,components:a.components,spatialReference:t.spatialReference,vertexAttributes:new q({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function dt(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,r,s)=>{const o=t.resolveFile(e);return(await P(o,{responseType:r==="image"?"image":r==="binary"?"array-buffer":"json",signal:i(s)?s.signal:null})).data}}:null}function y(t,e){if(_(t))return"-";const r=t.typedBuffer;return`${L(e,r.buffer,()=>e.size)}/${r.byteOffset}/${r.byteLength}`}function gt(t){return i(t)?t.toString():"-"}function xt(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,o=new Map,f=[];for(const l of t.parts){const{attributes:{position:c,normal:a,color:d,tangent:u,texCoord0:n}}=l,m=`
      ${y(c,s)}/
      ${y(a,s)}/
      ${y(d,s)}/
      ${y(u,s)}/
      ${y(n,s)}/
      ${gt(l.transform)}
    `;let p=!1;const x=L(o,m,()=>(p=!0,{start:e,length:c.count}));p&&(e+=c.count),a&&(r.normal=!0),d&&(r.color=!0),u&&(r.tangent=!0),n&&(r.texCoord0=!0),f.push({gltf:l,writeVertices:p,region:x})}return{vertexAttributes:{position:w(Q,e),normal:r.normal?w(S,e):null,tangent:r.tangent?w(N,e):null,color:r.color?w(O,e):null,texCoord0:r.texCoord0?w(V,e):null},parts:f,components:[]}}function $t(t){return new j({data:t.data,wrap:At(t.parameters.wrap)})}function ht(t,e){const r=new R(Et(t.color,t.opacity)),s=t.emissiveFactor?new R(Tt(t.emissiveFactor)):null;return new k({color:r,colorTexture:h(b(t.textureColor,o=>e.get(o))),normalTexture:h(b(t.textureNormal,o=>e.get(o))),emissiveColor:s,emissiveTexture:h(b(t.textureEmissive,o=>e.get(o))),occlusionTexture:h(b(t.textureOcclusion,o=>e.get(o))),alphaMode:vt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(b(t.textureMetallicRoughness,o=>e.get(o)))})}function bt(t,e,r){e.writeVertices&&wt(t,e);const s=e.gltf,o=yt(s.indices||s.attributes.position.count,s.primitiveType),f=e.region.start;if(f)for(let l=0;l<o.length;l++)o[l]+=f;t.components.push(new z({faces:o,material:r.get(s.material),trustSourceNormals:!0}))}function wt(t,e){const{position:r,normal:s,tangent:o,color:f,texCoord0:l}=t.vertexAttributes,c=e.region.start,{attributes:a,transform:d}=e.gltf,u=a.position.count;if(K(r.slice(c,u),a.position,d),i(a.normal)&&i(s)){const n=M(B(),d);U(s.slice(c,u),a.normal,n)}else i(s)&&W(s,0,0,1,{dstIndex:c,count:u});if(i(a.tangent)&&i(o)){const n=M(B(),d);rt(o.slice(c,u),a.tangent,n)}else i(o)&&E(o,0,0,1,1,{dstIndex:c,count:u});if(i(a.texCoord0)&&i(l)?nt(l.slice(c,u),a.texCoord0):i(l)&&st(l,0,0,{dstIndex:c,count:u}),i(a.color)&&i(f)){const n=a.color,m=f.slice(c,u);if(n.elementCount===4)n instanceof N?at(m,n,255):n instanceof O?it(m,n):n instanceof H&&ct(m,n,8);else{E(m,255,255,255,255);const p=F.fromTypedArray(m.typedBuffer,m.typedBufferStride);n instanceof S?X(p,n,255):n instanceof F?Y(p,n):n instanceof J&&Z(p,n,8)}}else i(f)&&E(f.slice(c,u),255,255,255,255)}function yt(t,e){switch(e){case T.TRIANGLES:return ft(t,mt);case T.TRIANGLE_STRIP:return ut(t);case T.TRIANGLE_FAN:return lt(t)}}function vt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function At(t){return{horizontal:I(t.s),vertical:I(t.t)}}function I(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function g(t){return t**(1/ot)*255}function Et(t,e){return D(g(t[0]),g(t[1]),g(t[2]),e)}function Tt(t){return G(g(t[0]),g(t[1]),g(t[2]))}export{qt as loadGLTFMesh};
