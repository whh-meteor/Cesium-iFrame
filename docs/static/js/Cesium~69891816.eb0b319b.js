(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~69891816"],{"161a":function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r("535a"),s=r("2f63"),a=r("e856"),o=r("974b"),c=r("166e"),i=r("d4ed"),u=r("555f"),f=r("0523"),l=r("9937"),d=r("89f5"),b=r("2c8f"),p=r("bc46"),_=r("aa13"),h=r("2773");function O(e){e=Object(n["a"])(e,n["a"].EMPTY_OBJECT);const t=e.resourceCache,r=e.gltfResource,s=e.baseResource,a=e.typedArray,o=e.gltfJson,c=e.cacheKey;this._resourceCache=t,this._gltfResource=r,this._baseResource=s,this._typedArray=a,this._gltfJson=o,this._cacheKey=c,this._gltf=void 0,this._bufferLoaders=[],this._state=h["a"].UNLOADED,this._promise=void 0}function m(e){return e._fetchGltf().then((function(t){if(e.isDestroyed())return;const r=new Uint8Array(t);return A(e,r)}))}function y(e,t){e.unload(),e._state=h["a"].FAILED;const r="Failed to load glTF: "+e._gltfResource.url;return Promise.reject(e.getError(r,t))}function j(e,t){if("2.0"===t.asset.version)return Promise.resolve();const r=[];return l["a"].buffer(t,(function(t){if(!Object(s["a"])(t.extras._pipeline.source)&&Object(s["a"])(t.uri)){const n=e._baseResource.getDerivedResource({url:t.uri}),s=e._resourceCache,a=s.loadExternalBuffer({resource:n});e._bufferLoaders.push(a),r.push(a.promise.then((function(e){t.extras._pipeline.source=e.typedArray})))}})),Promise.all(r).then((function(){Object(p["a"])(t)}))}function T(e){const t=[];return l["a"].buffer(e,(function(e){const r=e.uri;!Object(s["a"])(e.extras._pipeline.source)&&Object(s["a"])(r)&&Object(c["a"])(r)&&(delete e.uri,t.push(i["a"].fetchArrayBuffer(r).then((function(t){e.extras._pipeline.source=new Uint8Array(t)}))))})),Promise.all(t)}function x(e,t){const r=[];return l["a"].buffer(t,(function(t,n){const a=t.extras._pipeline.source;if(Object(s["a"])(a)&&!Object(s["a"])(t.uri)){const t=e._resourceCache,s=t.loadEmbeddedBuffer({parentResource:e._gltfResource,bufferId:n,typedArray:a});e._bufferLoaders.push(s),r.push(s.promise)}})),Promise.all(r)}function g(e,t){return Object(f["a"])(t),T(t).then((function(){return j(e,t)})).then((function(){return Object(u["a"])(t),x(e,t)})).then((function(){return Object(b["a"])(t),t}))}function A(e,t){let r;return r="glTF"===Object(o["a"])(t)?Object(d["a"])(t):Object(a["a"])(t),g(e,r)}Object(s["a"])(Object.create)&&(O.prototype=Object.create(_["a"].prototype),O.prototype.constructor=O),Object.defineProperties(O.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){return this._cacheKey}},gltf:{get:function(){return this._gltf}}}),O.prototype.load=function(){let e;this._state=h["a"].LOADING,e=Object(s["a"])(this._gltfJson)?g(this,this._gltfJson):Object(s["a"])(this._typedArray)?A(this,this._typedArray):m(this);const t=this;return this._promise=e.then((function(e){if(!t.isDestroyed())return t._gltf=e,t._state=h["a"].READY,t})).catch((function(e){if(!t.isDestroyed())return y(t,e)})),this._promise},O.prototype.unload=function(){const e=this._bufferLoaders,t=e.length;for(let r=0;r<t;++r)this._resourceCache.unload(e[r]);this._bufferLoaders.length=0,this._gltf=void 0},O.prototype._fetchGltf=function(){return this._gltfResource.fetchArrayBuffer()}},2453:function(e,t,r){"use strict";r.d(t,"a",(function(){return Q}));var n=r("3102"),s=r("1da3"),a=r("b08e"),o=r("be18"),c=r("a561"),i=r("abab"),u=r("8dfe"),f=r("535a"),l=r("2f63"),d=r("5e57"),b=r("c293"),p=r("917f"),_=r("4b18"),h=r("3f80"),O=r("990a"),m=r("13e7"),y=r("52f0"),j=r("8bde"),T=r("cd8b"),x=r("8586"),g=r("0260"),A=r("17a9"),I=r("aa13"),E=r("6c84"),R=r("3334"),w=r("a141");const L=j["a"].Attribute,P=j["a"].Indices,S=j["a"].FeatureIdAttribute,D=j["a"].FeatureIdTexture,C=j["a"].FeatureIdImplicitRange,F=j["a"].MorphTarget,N=j["a"].Primitive,v=j["a"].Instances,M=j["a"].Skin,B=j["a"].Node,J=j["a"].AnimatedPropertyType,G=j["a"].AnimationSampler,V=j["a"].AnimationTarget,Y=j["a"].AnimationChannel,k=j["a"].Animation,U=j["a"].ArticulationStage,X=j["a"].Articulation,K=j["a"].Asset,z=j["a"].Scene,H=j["a"].Components,W=j["a"].MetallicRoughness,q=j["a"].SpecularGlossiness,Z=j["a"].Material,$={NOT_LOADED:0,LOADING:1,LOADED:2,PROCESSING:3,POST_PROCESSING:4,PROCESSED:5,READY:6,FAILED:7,UNLOADED:8};function Q(e){e=Object(f["a"])(e,f["a"].EMPTY_OBJECT);const t=e.gltfResource;let r=e.baseResource;const n=e.typedArray,s=Object(f["a"])(e.releaseGltfJson,!1),o=Object(f["a"])(e.asynchronous,!0),c=Object(f["a"])(e.incrementallyLoadTextures,!0),i=Object(f["a"])(e.upAxis,a["a"].Y),u=Object(f["a"])(e.forwardAxis,a["a"].Z),d=Object(f["a"])(e.loadAttributesAsTypedArray,!1),b=Object(f["a"])(e.loadAttributesFor2D,!1),p=Object(f["a"])(e.loadIndicesForWireframe,!1),_=Object(f["a"])(e.loadPrimitiveOutline,!0),h=Object(f["a"])(e.renameBatchIdSemantic,!1);r=Object(l["a"])(r)?r:t.clone(),this._gltfJson=e.gltfJson,this._gltfResource=t,this._baseResource=r,this._typedArray=n,this._releaseGltfJson=s,this._asynchronous=o,this._incrementallyLoadTextures=c,this._upAxis=i,this._forwardAxis=u,this._loadAttributesAsTypedArray=d,this._loadAttributesFor2D=b,this._loadIndicesForWireframe=p,this._loadPrimitiveOutline=_,this._renameBatchIdSemantic=h,this._sortedPropertyTableIds=void 0,this._sortedFeatureTextureIds=void 0,this._gltfJsonLoader=void 0,this._state=$.NOT_LOADED,this._textureState=$.NOT_LOADED,this._promise=void 0,this._texturesLoadedPromise=void 0,this._process=function(e,t){},this._processTextures=function(e,t){},this._primitiveLoadPlans=[],this._loaderPromises=[],this._textureLoaders=[],this._texturesPromises=[],this._bufferViewLoaders=[],this._geometryLoaders=[],this._structuralMetadataLoader=void 0,this._postProcessBuffers=[],this._components=void 0}function ee(e,t){e.unload();const r="Failed to load glTF";return t=e.getError(r,t),Promise.reject(t)}function te(e,t){const r=e._bufferViewLoaders,n=r.length;for(let o=0;o<n;++o)r[o].process(t);const s=e._geometryLoaders,a=s.length;for(let o=0;o<a;++o)s[o].process(t);Object(l["a"])(e._structuralMetadataLoader)&&e._structuralMetadataLoader.process(t)}function re(e,t){const r=e._primitiveLoadPlans,n=r.length;for(let s=0;s<n;s++){const n=r[s];n.postProcess(t),n.needsOutlines&&ne(e,n)}}function ne(e,t){const r=e._postProcessBuffers,n=t.primitive,s=n.outlineCoordinates;Object(l["a"])(s)&&r.push(s.buffer);const a=n.attributes,o=a.length;for(let i=0;i<o;i++){const e=a[i];Object(l["a"])(e.buffer)&&r.push(e.buffer)}const c=n.indices;Object(l["a"])(c)&&Object(l["a"])(c.buffer)&&r.push(c.buffer)}function se(e,t,r,n,s,a,o,c){const i=t.accessors[r],u=i.bufferView,f=A["a"].loadVertexBuffer({gltf:t,gltfResource:e._gltfResource,baseResource:e._baseResource,bufferViewId:u,draco:s,attributeSemantic:n,accessorId:r,asynchronous:e._asynchronous,dequantize:a,loadBuffer:o,loadTypedArray:c});return e._geometryLoaders.push(f),f}function ae(e,t,r,n,s,a){const o=A["a"].loadIndexBuffer({gltf:t,accessorId:r,gltfResource:e._gltfResource,baseResource:e._baseResource,draco:n,asynchronous:e._asynchronous,loadBuffer:s,loadTypedArray:a});return e._geometryLoaders.push(o),o}function oe(e,t,r){const n=A["a"].loadBufferView({gltf:t,bufferViewId:r,gltfResource:e._gltfResource,baseResource:e._baseResource});return e._bufferViewLoaders.push(n),n}function ce(e,t,r){let n=t.byteOffset;const s=Object(b["a"])(e,t),a=t.count,o=Object(x["a"])(t.type),c=t.componentType,u=i["a"].getSizeInBytes(c),f=u*o,l=a*o;if(s===f)return r=new Uint8Array(r),i["a"].createArrayBufferView(c,r.buffer,r.byteOffset+n,l);const d=i["a"].createTypedArray(c,l),_=new DataView(r.buffer),h=new Array(o),O=Object(p["a"])(t.componentType);n=r.byteOffset+n;for(let i=0;i<a;++i){O(_,n,o,u,h);for(let e=0;e<o;++e)d[i*o+e]=h[e];n+=s}return d}function ie(e,t){const r=e.type;if(r===s["a"].SCALAR)return t.fill(0);const n=s["a"].getMathType(r);return t.fill(n.clone(n.ZERO))}function ue(e,t,r,n){const a=e.type,o=e.count;if(a===s["a"].SCALAR)for(let s=0;s<o;s++)r[s]=t[s];else if(a===s["a"].VEC4&&n)for(let s=0;s<o;s++)r[s]=g["a"].unpack(t,4*s);else{const e=s["a"].getMathType(a),n=s["a"].getNumberOfComponents(a);for(let s=0;s<o;s++)r[s]=e.unpack(t,s*n)}return r}function fe(e,t,r,n){const s=t.accessors[r],a=s.count,o=new Array(a),c=s.bufferView;if(Object(l["a"])(c)){const r=oe(e,t,c),a=r.promise.then((function(r){if(e.isDestroyed())return;const a=r.typedArray,c=ce(t,s,a);n=Object(f["a"])(n,!1),ue(s,c,o,n)}));return e._loaderPromises.push(a),o}return ie(s,o)}function le(e,t){if(Object(l["a"])(t))return e===Number?t[0]:e.unpack(t)}function de(e){return e===Number?0:new e}function be(e,t,r,n,a){const o=e.accessors[t],c=s["a"].getMathType(o.type),i=new L;return i.name=r,i.semantic=n,i.setIndex=a,i.constant=de(c),i.componentDatatype=o.componentType,i.normalized=Object(f["a"])(o.normalized,!1),i.count=o.count,i.type=o.type,i.min=le(c,o.min),i.max=le(c,o.max),i.byteOffset=o.byteOffset,i.byteStride=Object(b["a"])(e,o),i}function pe(e){const t=/^\w+_(\d+)$/,r=t.exec(e);if(null!==r)return parseInt(r[1])}Object(l["a"])(Object.create)&&(Q.prototype=Object.create(I["a"].prototype),Q.prototype.constructor=Q),Object.defineProperties(Q.prototype,{promise:{get:function(){return this._promise}},cacheKey:{get:function(){}},components:{get:function(){return this._components}},texturesLoadedPromise:{get:function(){return this._texturesLoadedPromise}}}),Q.prototype.load=function(){const e=A["a"].loadGltfJson({gltfResource:this._gltfResource,baseResource:this._baseResource,typedArray:this._typedArray,gltfJson:this._gltfJson});this._gltfJsonLoader=e,this._state=$.LOADING,this._textureState=$.LOADING;const t=this;let r;const n=new Promise((function(e,n){r=new Promise((function(r,s){t._process=function(t,r){if(d["a"].supportsWebP.initialized){if(t._state===$.LOADED){t._state=$.PROCESSING;const e=new R["a"]({webp:d["a"].supportsWebP(),basis:r.context.supportsBasis});let a;a=Object(l["a"])(t._gltfJsonLoader)?t._gltfJsonLoader.gltf:t._gltfJson,rt(t,a,e,r,n,s),Object(l["a"])(t._gltfJsonLoader)&&t._releaseGltfJson&&(A["a"].unload(t._gltfJsonLoader),t._gltfJsonLoader=void 0)}t._state===$.PROCESSING&&te(t,r),t._state===$.POST_PROCESSING&&(re(t,r.context),t._state=$.PROCESSED),t._state===$.PROCESSED&&(st(t),t._state=$.READY,e(t))}else d["a"].supportsWebP.initialize()},t._processTextures=function(e,t){if(e._textureState===$.LOADED&&(e._textureState=$.PROCESSING),e._textureState===$.PROCESSING){let r;const n=e._textureLoaders,s=n.length;for(r=0;r<s;++r)n[r].process(t)}e._textureState===$.PROCESSED&&(e._textureState=$.READY,r(e))}}))}));return this._promise=e.promise.then((function(){if(!t.isDestroyed())return t._state=$.LOADED,t._textureState=$.LOADED,n})).catch((function(e){if(!t.isDestroyed())return t._state=$.FAILED,t._textureState=$.FAILED,ee(t,e)})),this._texturesLoadedPromise=r.catch((function(e){if(!t.isDestroyed())return t._textureState=$.FAILED,ee(t,e)})),this._promise},Q.prototype.process=function(e){this._process(this,e),this._processTextures(this,e)};const _e={gltfSemantic:void 0,renamedSemantic:void 0,modelSemantic:void 0};function he(e,t,r){let n=r;!e._renameBatchIdSemantic||"_BATCHID"!==r&&"BATCHID"!==r||(n="_FEATURE_ID_0");const s=t.fromGltfSemantic(n),a=_e;return a.gltfSemantic=r,a.renamedSemantic=n,a.modelSemantic=s,a}function Oe(e,t,r,n){e.byteOffset=0,e.byteStride=void 0,e.quantization=t.quantization,r&&(e.buffer=t.buffer),n&&(e.typedArray=i["a"].createArrayBufferView(t.quantization.componentDatatype,t.typedArray.buffer))}function me(e,t,r,n,s,a){if(s&&(r.buffer=n.buffer),a){const s=n.typedArray;r.typedArray=ce(e,t,s),r.byteOffset=0,r.byteStride=void 0}}function ye(e,t,r,n,s,a,o,c){const i=t.accessors[r],u=i.bufferView,f=n.gltfSemantic,d=n.renamedSemantic,b=n.modelSemantic,p=Object(l["a"])(b)?pe(d):void 0,_=f,h=be(t,r,_,b,p);if(!Object(l["a"])(s)&&!Object(l["a"])(u))return h;const O=se(e,t,r,f,s,a,o,c),m=O.promise.then((function(r){e.isDestroyed()||(Object(l["a"])(s)&&Object(l["a"])(s.attributes)&&Object(l["a"])(s.attributes[f])?Oe(h,r,o,c):me(t,i,h,r,o,c))}));return e._loaderPromises.push(m),h}function je(e,t,r,n,s,a,o,c){const i=he(e,w["a"],n),u=i.modelSemantic,f=u===w["a"].POSITION,l=f&&!a&&e._loadAttributesFor2D&&!c.scene3DOnly,d=e._loadAttributesAsTypedArray,b=!d,p=d||l,_=!o&&b,h=!!o||p,O=ye(e,t,r,i,s,!1,_,h),m=new T["a"].AttributeLoadPlan(O);return m.loadBuffer=b,m.loadTypedArray=p,m}function Te(e,t,r,n,s,a){const o=Object(l["a"])(n.ROTATION),c=Object(l["a"])(n.TRANSLATION)&&Object(l["a"])(t.accessors[n.TRANSLATION].min)&&Object(l["a"])(t.accessors[n.TRANSLATION].max),i=he(e,O["a"],s),u=i.modelSemantic,f=u===O["a"].TRANSLATION||u===O["a"].ROTATION||u===O["a"].SCALE,d=u===O["a"].TRANSLATION,b=d&&e._loadAttributesFor2D&&!a.scene3DOnly;let p=e._loadAttributesAsTypedArray||(o||!c)&&f||u===O["a"].FEATURE_ID||!a.context.instancedArrays;const _=!p;return p=p||b,ye(e,t,r,i,void 0,!0,_,p)}function xe(e,t,r,n,s,a){const o=t.accessors[r],c=o.bufferView;if(!Object(l["a"])(n)&&!Object(l["a"])(c))return;const i=new P;i.count=o.count;const u=e._loadAttributesAsTypedArray,f=e._loadIndicesForWireframe&&!a.context.webgl2,d=!u,b=u||f,p=!s&&d,_=!!s||b,h=ae(e,t,r,n,p,_),O=h.promise.then((function(t){e.isDestroyed()||(i.indexDatatype=t.indexDatatype,i.buffer=t.buffer,i.typedArray=t.typedArray)}));e._loaderPromises.push(O);const m=new T["a"].IndicesLoadPlan(i);return m.loadBuffer=d,m.loadTypedArray=b,m}function ge(e,t,r,n,s){const a=_["a"].getImageIdFromTexture({gltf:t,textureId:r.index,supportedImageFormats:n});if(!Object(l["a"])(a))return;const o=A["a"].loadTexture({gltf:t,textureInfo:r,gltfResource:e._gltfResource,baseResource:e._baseResource,supportedImageFormats:n,asynchronous:e._asynchronous});e._textureLoaders.push(o);const c=_["a"].createModelTextureReader({textureInfo:r}),i=o.promise.then((function(t){e.isUnloaded()||e.isDestroyed()||(c.texture=t.texture,Object(l["a"])(s)&&(c.texture.sampler=s))}));return e._texturesPromises.push(i),c}function Ae(e,t,r,n){const s=new Z,a=Object(f["a"])(r.extensions,f["a"].EMPTY_OBJECT),i=a.KHR_materials_pbrSpecularGlossiness,u=r.pbrMetallicRoughness;if(s.unlit=Object(l["a"])(a.KHR_materials_unlit),Object(l["a"])(i)){const r=new q;s.specularGlossiness=r,Object(l["a"])(i.diffuseTexture)&&(r.diffuseTexture=ge(e,t,i.diffuseTexture,n)),Object(l["a"])(i.specularGlossinessTexture)&&Object(l["a"])(i.specularGlossinessTexture)&&(r.specularGlossinessTexture=ge(e,t,i.specularGlossinessTexture,n)),r.diffuseFactor=le(c["a"],i.diffuseFactor),r.specularFactor=le(o["a"],i.specularFactor),r.glossinessFactor=i.glossinessFactor,s.pbrSpecularGlossiness=i}else if(Object(l["a"])(u)){const r=new W;Object(l["a"])(u.baseColorTexture)&&(r.baseColorTexture=ge(e,t,u.baseColorTexture,n)),Object(l["a"])(u.metallicRoughnessTexture)&&(r.metallicRoughnessTexture=ge(e,t,u.metallicRoughnessTexture,n)),r.baseColorFactor=le(c["a"],u.baseColorFactor),r.metallicFactor=u.metallicFactor,r.roughnessFactor=u.roughnessFactor,s.metallicRoughness=r}return Object(l["a"])(r.emissiveTexture)&&(s.emissiveTexture=ge(e,t,r.emissiveTexture,n)),Object(l["a"])(r.normalTexture)&&(s.normalTexture=ge(e,t,r.normalTexture,n)),Object(l["a"])(r.occlusionTexture)&&(s.occlusionTexture=ge(e,t,r.occlusionTexture,n)),s.emissiveFactor=le(o["a"],r.emissiveFactor),s.alphaMode=r.alphaMode,s.alphaCutoff=r.alphaCutoff,s.doubleSided=r.doubleSided,s}function Ie(e,t){const r=new S;return r.featureCount=e.featureCount,r.nullFeatureId=e.nullFeatureId,r.propertyTableId=e.propertyTable,r.setIndex=e.attribute,r.label=e.label,r.positionalLabel=t,r}function Ee(e,t,r,n){const s=new S,a=e.featureIds;return s.featureCount=r,s.propertyTableId=t,s.setIndex=pe(a.attribute),s.positionalLabel=n,s}function Re(e,t){const r=new C;return r.propertyTableId=e.propertyTable,r.featureCount=e.featureCount,r.nullFeatureId=e.nullFeatureId,r.label=e.label,r.positionalLabel=t,r.offset=0,r.repeat=1,r}function we(e,t,r,n){const s=new C,a=e.featureIds;s.propertyTableId=t,s.featureCount=r,s.offset=Object(f["a"])(a.constant,0);const o=Object(f["a"])(a.divisor,0);return s.repeat=0===o?void 0:o,s.positionalLabel=n,s}function Le(e,t,r,n,s){const a=new D;a.featureCount=r.featureCount,a.nullFeatureId=r.nullFeatureId,a.propertyTableId=r.propertyTable,a.label=r.label,a.positionalLabel=s;const o=r.texture;a.textureReader=ge(e,t,o,n,E["a"].NEAREST);const c=Object(l["a"])(o.channels)?o.channels:[0],i=c.map((function(e){return"rgba".charAt(e)})).join("");return a.textureReader.channels=i,a}function Pe(e,t,r,n,s,a,o){const c=new D,i=r.featureIds,u=i.texture;return c.featureCount=a,c.propertyTableId=n,c.textureReader=ge(e,t,u,s,E["a"].NEAREST),c.textureReader.channels=i.channels,c.positionalLabel=o,c}function Se(e,t,r,n,s,a){const o=new F,c=void 0,i=!1;for(const u in r)if(r.hasOwnProperty(u)){const f=r[u],l=je(e,t,f,u,c,i,n,a);o.attributes.push(l.attribute),s.attributePlans.push(l)}return o}function De(e,t,r,n,s,a){const o=new N,c=new T["a"](o);e._primitiveLoadPlans.push(c);const i=r.material;Object(l["a"])(i)&&(o.material=Ae(e,t,t.materials[i],s));const u=Object(f["a"])(r.extensions,f["a"].EMPTY_OBJECT);let d=!1;const b=u.CESIUM_primitive_outline;e._loadPrimitiveOutline&&Object(l["a"])(b)&&(d=!0,c.needsOutlines=!0,c.outlineIndices=Ce(e,t,b,c));const p=u.KHR_draco_mesh_compression,_=r.attributes;if(Object(l["a"])(_))for(const f in _)if(_.hasOwnProperty(f)){const r=_[f],s=je(e,t,r,f,p,n,d,a);c.attributePlans.push(s),o.attributes.push(s.attribute)}const h=r.targets;if(Object(l["a"])(h)){const r=h.length;for(let n=0;n<r;++n)o.morphTargets.push(Se(e,t,h[n],d,c,a))}const O=r.indices;if(Object(l["a"])(O)){const r=xe(e,t,O,p,d,a);Object(l["a"])(r)&&(c.indicesPlan=r,o.indices=r.indices)}const m=u.EXT_structural_metadata,y=u.EXT_mesh_features,j=u.EXT_feature_metadata,x=Object(l["a"])(j);return Object(l["a"])(y)?Fe(e,t,o,y,s):x&&Ne(e,t,o,j,s),Object(l["a"])(m)?ve(o,m):x&&Me(e,o,j),o.primitiveType=r.mode,o}function Ce(e,t,r){const n=r.indices,s=!1;return fe(e,t,n,s)}function Fe(e,t,r,n,s){let a;a=Object(l["a"])(n)&&Object(l["a"])(n.featureIds)?n.featureIds:[];for(let o=0;o<a.length;o++){const n=a[o],c="featureId_"+o;let i;i=Object(l["a"])(n.texture)?Le(e,t,n,s,c):Object(l["a"])(n.attribute)?Ie(n,c):Re(n,c),r.featureIds.push(i)}}function Ne(e,t,r,n,s){const a=t.extensions.EXT_feature_metadata.featureTables;let o=0;const c=n.featureIdAttributes;if(Object(l["a"])(c)){const t=c.length;for(let n=0;n<t;++n){const t=c[n],s=t.featureTable,i=e._sortedPropertyTableIds.indexOf(s),u=a[s].count,f="featureId_"+o;let d;o++,d=Object(l["a"])(t.featureIds.attribute)?Ee(t,i,u,f):we(t,i,u,f),r.featureIds.push(d)}}const i=n.featureIdTextures;if(Object(l["a"])(i)){const n=i.length;for(let c=0;c<n;++c){const n=i[c],u=n.featureTable,f=e._sortedPropertyTableIds.indexOf(u),l=a[u].count,d="featureId_"+o;o++;const b=Pe(e,t,n,f,s,l,d);r.featureIds.push(b)}}}function ve(e,t){Object(l["a"])(t)&&(Object(l["a"])(t.propertyTextures)&&(e.propertyTextureIds=t.propertyTextures),Object(l["a"])(t.propertyAttributes)&&(e.propertyAttributeIds=t.propertyAttributes))}function Me(e,t,r){Object(l["a"])(r.featureTextures)&&(t.propertyTextureIds=r.featureTextures.map((function(t){return e._sortedFeatureTextureIds.indexOf(t)})))}function Be(e,t,r,n){const s=r.EXT_mesh_gpu_instancing,a=new v,o=s.attributes;if(Object(l["a"])(o))for(const f in o)if(o.hasOwnProperty(f)){const r=o[f];a.attributes.push(Te(e,t,r,o,f,n))}const c=Object(f["a"])(s.extensions,f["a"].EMPTY_OBJECT),i=r.EXT_instance_features,u=c.EXT_feature_metadata;return Object(l["a"])(i)?Je(a,i):Object(l["a"])(u)&&Ge(t,a,u,e._sortedPropertyTableIds),a}function Je(e,t){const r=t.featureIds;for(let n=0;n<r.length;n++){const t=r[n],s="instanceFeatureId_"+n;let a;a=Object(l["a"])(t.attribute)?Ie(t,s):Re(t,s),e.featureIds.push(a)}}function Ge(e,t,r,n){const s=e.extensions.EXT_feature_metadata.featureTables,a=r.featureIdAttributes;if(Object(l["a"])(a)){const e=a.length;for(let r=0;r<e;++r){const e=a[r],o=e.featureTable,c=n.indexOf(o),i=s[o].count,u="instanceFeatureId_"+r;let f;f=Object(l["a"])(e.featureIds.attribute)?Ee(e,c,i,u):we(e,c,i,u),t.featureIds.push(f)}}}function Ve(e,t,r,n,s){const a=new B;a.name=r.name,a.matrix=le(y["a"],r.matrix),a.translation=le(o["a"],r.translation),a.rotation=le(g["a"],r.rotation),a.scale=le(o["a"],r.scale);const c=Object(f["a"])(r.extensions,f["a"].EMPTY_OBJECT),i=c.EXT_mesh_gpu_instancing,u=c.AGI_articulations;Object(l["a"])(i)&&(a.instances=Be(e,t,c,s)),Object(l["a"])(u)&&(a.articulationName=u.articulationName);const d=r.mesh;if(Object(l["a"])(d)){const o=t.meshes[d],c=o.primitives,i=c.length;for(let r=0;r<i;++r)a.primitives.push(De(e,t,c[r],Object(l["a"])(a.instances),n,s));const u=Object(f["a"])(r.weights,o.weights),b=a.primitives[0].morphTargets,p=b.length;a.morphWeights=Object(l["a"])(u)?u.slice():new Array(p).fill(0)}return a}function Ye(e,t,r,n){let s,a;const o=t.nodes.length,c=new Array(o);for(s=0;s<o;++s){const a=Ve(e,t,t.nodes[s],r,n);a.index=s,c[s]=a}for(s=0;s<o;++s){const e=t.nodes[s].children;if(Object(l["a"])(e)){const t=e.length;for(a=0;a<t;++a)c[s].children.push(c[e[a]])}}return c}function ke(e,t,r,n){const s=new M,a=r.joints,o=a.length,c=new Array(o);for(let u=0;u<o;++u)c[u]=n[a[u]];s.joints=c;const i=r.inverseBindMatrices;return Object(l["a"])(i)?s.inverseBindMatrices=fe(e,t,i):s.inverseBindMatrices=new Array(o).fill(y["a"].IDENTITY),s}function Ue(e,t,r){let n;const s=t.skins;if(!Object(l["a"])(s))return[];const a=t.skins.length,o=new Array(a);for(n=0;n<a;++n){const s=ke(e,t,t.skins[n],r);s.index=n,o[n]=s}const c=r.length;for(n=0;n<c;++n){const e=t.nodes[n].skin;Object(l["a"])(e)&&(r[n].skin=o[e])}return o}function Xe(e,t,r,n,s){const a=new h["a"]({gltf:t,extension:r,extensionLegacy:n,gltfResource:e._gltfResource,baseResource:e._baseResource,supportedImageFormats:s,asynchronous:e._asynchronous});return a.load(),e._structuralMetadataLoader=a,a}function Ke(e,t,r){const n=new G,s=r.input;n.input=fe(e,t,s);const a=r.interpolation;n.interpolation=Object(f["a"])(m["a"][a],m["a"].LINEAR);const o=r.output;return n.output=fe(e,t,o,!0),n}function ze(e,t){const r=new V,n=e.node;if(!Object(l["a"])(n))return;r.node=t[n];const s=e.path.toUpperCase();return r.path=J[s],r}function He(e,t,r){const n=new Y,s=e.sampler;return n.sampler=t[s],n.target=ze(e.target,r),n}function We(e,t,r,n){let s;const a=new k;a.name=r.name;const o=r.samplers,c=o.length,i=new Array(c);for(s=0;s<c;s++){const r=Ke(e,t,o[s]);r.index=s,i[s]=r}const u=r.channels,f=u.length,l=new Array(f);for(s=0;s<f;s++)l[s]=He(u[s],i,n);return a.samplers=i,a.channels=l,a}function qe(e,t,r){let n;const s=t.animations;if(!Object(l["a"])(s))return[];const a=t.animations.length,o=new Array(a);for(n=0;n<a;++n){const s=We(e,t,t.animations[n],r);s.index=n,o[n]=s}return o}function Ze(e){const t=new U;t.name=e.name;const r=e.type.toUpperCase();return t.type=n["a"][r],t.minimumValue=e.minimumValue,t.maximumValue=e.maximumValue,t.initialValue=e.initialValue,t}function $e(e){const t=new X;t.name=e.name;const r=e.stages,n=r.length,s=new Array(n);for(let a=0;a<n;a++){const e=Ze(r[a]);s[a]=e}return t.stages=s,t}function Qe(e){const t=Object(f["a"])(e.extensions,f["a"].EMPTY_OBJECT),r=t.AGI_articulations;if(!Object(l["a"])(r))return[];const n=r.articulations;if(!Object(l["a"])(n))return[];const s=n.length,a=new Array(s);for(let o=0;o<s;o++){const e=$e(n[o]);a[o]=e}return a}function et(e){let t;return Object(l["a"])(e.scenes)&&Object(l["a"])(e.scene)&&(t=e.scenes[e.scene].nodes),t=Object(f["a"])(t,e.nodes),t=Object(l["a"])(t)?t:[],t}function tt(e,t){const r=new z,n=et(e);return r.nodes=n.map((function(e){return t[e]})),r}function rt(e,t,r,n,s,a){const o=Object(f["a"])(t.extensions,f["a"].EMPTY_OBJECT),c=o.EXT_structural_metadata,i=o.EXT_feature_metadata;if(Object(l["a"])(i)){const t=i.featureTables,r=i.featureTextures,n=Object(l["a"])(t)?t:[],s=Object(l["a"])(r)?r:[];e._sortedPropertyTableIds=Object.keys(n).sort(),e._sortedFeatureTextureIds=Object.keys(s).sort()}const d=Ye(e,t,r,n),b=Ue(e,t,d),p=qe(e,t,d),_=Qe(t),h=tt(t,d),O=new H,m=new K,y=t.asset.copyright;if(Object(l["a"])(y)){const e=y.split(";").map((function(e){return new u["a"](e.trim())}));m.credits=e}if(O.asset=m,O.scene=h,O.nodes=d,O.skins=b,O.animations=p,O.articulations=_,O.upAxis=e._upAxis,O.forwardAxis=e._forwardAxis,e._components=O,Object(l["a"])(c)||Object(l["a"])(i)){const n=Xe(e,t,c,i,r),s=n.promise.then((function(t){e.isDestroyed()||(O.structuralMetadata=t.structuralMetadata)}));e._loaderPromises.push(s)}const j=[];j.push.apply(j,e._loaderPromises),e._incrementallyLoadTextures||j.push.apply(j,e._texturesPromises),Promise.all(j).then((function(){e.isDestroyed()||(e._state=$.POST_PROCESSING)})).catch(s),Promise.all(e._texturesPromises).then((function(){e.isDestroyed()||(e._textureState=$.PROCESSED)})).catch(a)}function nt(e){const t=e._textureLoaders,r=t.length;for(let n=0;n<r;++n)A["a"].unload(t[n]);e._textureLoaders.length=0}function st(e){const t=e._bufferViewLoaders,r=t.length;for(let n=0;n<r;++n)A["a"].unload(t[n]);e._bufferViewLoaders.length=0}function at(e){const t=e._geometryLoaders,r=t.length;for(let n=0;n<r;++n)A["a"].unload(t[n]);e._geometryLoaders.length=0}function ot(e){const t=e._postProcessBuffers,r=t.length;for(let n=0;n<r;n++){const e=t[n];e.isDestroyed()||e.destroy()}t.length=0}function ct(e){Object(l["a"])(e._structuralMetadataLoader)&&(e._structuralMetadataLoader.destroy(),e._structuralMetadataLoader=void 0)}Q.prototype.isUnloaded=function(){return this._state===$.UNLOADED},Q.prototype.unload=function(){Object(l["a"])(this._gltfJsonLoader)&&A["a"].unload(this._gltfJsonLoader),this._gltfJsonLoader=void 0,nt(this),st(this),at(this),ot(this),ct(this),this._components=void 0,this._state=$.UNLOADED}},"4b18":function(e,t,r){"use strict";var n=r("670c"),s=r("535a"),a=r("2f63"),o=r("df07"),c=r("6c84"),i=r("3022"),u=r("03f1"),f=r("23b6"),l=r("8bde");const d={getImageIdFromTexture:function(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);const t=e.gltf,r=e.textureId,n=e.supportedImageFormats,o=t.textures[r],c=o.extensions;if(Object(a["a"])(c)){if(n.webp&&Object(a["a"])(c.EXT_texture_webp))return c.EXT_texture_webp.source;if(n.basis&&Object(a["a"])(c.KHR_texture_basisu))return c.KHR_texture_basisu.source}return o.source},createSampler:function(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);const t=e.gltf,r=e.textureInfo,n=Object(s["a"])(e.compressedTextureNoMipmap,!1);let o=f["a"].REPEAT,l=f["a"].REPEAT,d=u["a"].LINEAR,b=i["a"].LINEAR;const p=r.index,_=t.textures[p],h=_.sampler;if(Object(a["a"])(h)){const e=t.samplers[h];o=Object(s["a"])(e.wrapS,o),l=Object(s["a"])(e.wrapT,l),d=Object(s["a"])(e.minFilter,d),b=Object(s["a"])(e.magFilter,b)}let O=!1;const m=r.extensions;return Object(a["a"])(m)&&Object(a["a"])(m.KHR_texture_transform)&&(O=!0),(n||O)&&d!==u["a"].LINEAR&&d!==u["a"].NEAREST&&(d=d===u["a"].NEAREST_MIPMAP_NEAREST||d===u["a"].NEAREST_MIPMAP_LINEAR?u["a"].NEAREST:u["a"].LINEAR),new c["a"]({wrapS:o,wrapT:l,minificationFilter:d,magnificationFilter:b})}},b=new n["a"](1,1);d.createModelTextureReader=function(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);const t=e.textureInfo,r=e.channels,c=e.texture;let i,u=Object(s["a"])(t.texCoord,0);const f=Object(s["a"])(t.extensions,s["a"].EMPTY_OBJECT).KHR_texture_transform;if(Object(a["a"])(f)){u=Object(s["a"])(f.texCoord,u);const e=Object(a["a"])(f.offset)?n["a"].unpack(f.offset):n["a"].ZERO;let t=Object(s["a"])(f.rotation,0);const r=Object(a["a"])(f.scale)?n["a"].unpack(f.scale):b;t=-t,i=new o["a"](Math.cos(t)*r.x,-Math.sin(t)*r.y,e.x,Math.sin(t)*r.x,Math.cos(t)*r.y,e.y,0,0,1)}const d=new l["a"].TextureReader;return d.index=t.index,d.texture=c,d.texCoord=u,d.transform=i,d.channels=r,d},t["a"]=d}}]);