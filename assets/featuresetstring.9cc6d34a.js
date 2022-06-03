import{a as f}from"./arcadeUtils.9c737062.js";import{hf as i,hI as d,hL as p,h9 as u,hb as m,hM as v,hP as c,kW as l,hK as h,hN as T,kX as b,hO as w,kY as A,h3 as g,hh as x,hJ as F}from"./GISSearch.9df35164.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";function y(e){return e&&e.domain?e.domain.type==="coded-value"||e.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:v[e.field.type],codedValues:e.domain.codedValues.map(t=>({name:t.name,code:t.code}))}):f.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:v[e.field.type],min:e.domain.min,max:e.domain.max}):null}function j(e){e.mode==="async"&&(e.functions.domain=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,2,3),d(n[0]))return y(p(n[0],m(n[1]),n[2]===void 0?void 0:u(n[2])));if(c(n[0]))return n[0]._ensureLoaded().then(()=>y(l(m(n[1]),n[0],null,n[2]===void 0?void 0:u(n[2]))));throw new Error("Invalid Parameter")})},e.functions.subtypes=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,1),d(n[0])){const r=h(n[0]);return r?f.convertObjectToArcadeDictionary(r):null}if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const r=n[0].subtypes();return r?f.convertObjectToArcadeDictionary(r):null});throw new Error("Invalid Parameter")})},e.functions.domainname=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,2,4),d(n[0]))return T(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const r=l(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return b(r,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,2,4),d(n[0]))return w(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const r=l(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return A(r,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,2),!c(n[0]))return g(n[0],n[1]);{const r=x(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",a.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",a.abortSignal)}})},e.functions.gdbversion=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,1),d(n[0]))return n[0].gdbVersion();if(c(n[0]))return n[0].load().then(r=>r.gdbVersion);throw new Error("Invalid Parameter")})},e.functions.schema=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,1),c(n[0]))return n[0].load().then(()=>f.convertObjectToArcadeDictionary(n[0].schema()));if(d(n[0])){const r=F(n[0]);return r?f.convertObjectToArcadeDictionary(r):null}throw new Error("Invalid Parameter")})}}export{j as registerFunctions};
