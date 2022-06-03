var v=Object.defineProperty,E=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var u=(i,e,s)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,y=(i,e)=>{for(var s in e||(e={}))g.call(e,s)&&u(i,s,e[s]);if(f)for(var s of f(e))x.call(e,s)&&u(i,s,e[s]);return i},T=(i,e)=>E(i,O(e));import{Z as C,a0 as M,bV as b,r as I,B as w}from"./GISSearch.9df35164.js";import{r as R}from"./heatmapUtils.4b55b0e1.js";import{p as D}from"./enums.84480fc7.js";import{p as V}from"./BaseProcessor.19c0e009.js";import{l as o}from"./tileUtils.98353ba9.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";class n{constructor(e,s){this.offset=e,this.extent=s}}function z(i){const e=i.key,s=new Map,r=256,t=D,a=i.tileInfoView.tileInfo.isWrappable;return s.set(o(e,-1,-1,a).id,new n([-t,-t],[t-r,t-r,t,t])),s.set(o(e,0,-1,a).id,new n([0,-t],[0,t-r,t,t])),s.set(o(e,1,-1,a).id,new n([t,-t],[0,t-r,r,t])),s.set(o(e,-1,0,a).id,new n([-t,0],[t-r,0,t,t])),s.set(o(e,1,0,a).id,new n([t,0],[0,0,r,t])),s.set(o(e,-1,1,a).id,new n([-t,t],[t-r,0,t,r])),s.set(o(e,0,1,a).id,new n([0,t],[0,0,t,r])),s.set(o(e,1,1,a).id,new n([t,t],[0,0,r,r])),s}let p=class extends V{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(i,e){const s=e.schema.processors[0];s.type==="heatmap"&&b(this._schema,s)&&(i.mesh=!0,this._schema=s)}onTileUpdate(i){for(const e of i.removed)this._tileKeyToFeatureSets.delete(e.key.id)}onTileClear(i){const e={clear:!0};return this._tileKeyToFeatureSets.delete(i.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:i.id,data:e})}async onTileMessage(i,e,s){this._tileKeyToFeatureSets.has(i.key.id)||this._tileKeyToFeatureSets.set(i.key.id,new Map);const r=this._tileKeyToFeatureSets.get(i.key.id);if(I(e.addOrUpdate)&&e.addOrUpdate.hasFeatures&&r.set(e.addOrUpdate.instance,e),e.end){const t=[],a=z(i);this._tileKeyToFeatureSets.forEach((m,d)=>{if(d===i.key.id)m.forEach(l=>w(l.addOrUpdate,h=>t.push(h)));else if(a.has(d)){const l=a.get(d),[h,_]=l.offset;m.forEach(F=>w(F.addOrUpdate,S=>{const U=S.transform(h,_,1,1);t.push(U)}))}});const c=R(t,this._schema.mesh,512,512),k={tileKey:i.key.id,intensityInfo:c},K=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",k,T(y({},s),{transferList:K}))}}onTileError(i,e,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:i.id,error:e},s)}};p=C([M("esri.views.2d.layers.features.processors.HeatmapProcessor")],p);const G=p;export{G as default};
