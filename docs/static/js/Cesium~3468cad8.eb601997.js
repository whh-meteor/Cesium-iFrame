(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~3468cad8"],{"4dc8":function(t,a,e){"use strict";var n=e("be18"),o=e("a561"),r=e("2384"),i=e("535a"),s=e("2f63"),c=e("93da"),u=e("52f0");function f(t){t=Object(i["a"])(t,i["a"].EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=Object(i["a"])(t.near,1),this._near=this.near,this.far=Object(i["a"])(t.far,5e8),this._far=this.far,this._cullingVolume=new r["a"],this._perspectiveMatrix=new u["a"],this._infinitePerspective=new u["a"]}function h(t){const a=t.top,e=t.bottom,n=t.right,o=t.left,r=t.near,i=t.far;a===t._top&&e===t._bottom&&o===t._left&&n===t._right&&r===t._near&&i===t._far||(t._left=o,t._right=n,t._top=a,t._bottom=e,t._near=r,t._far=i,t._perspectiveMatrix=u["a"].computePerspectiveOffCenter(o,n,e,a,r,i,t._perspectiveMatrix),t._infinitePerspective=u["a"].computeInfinitePerspectiveOffCenter(o,n,e,a,r,t._infinitePerspective))}Object.defineProperties(f.prototype,{projectionMatrix:{get:function(){return h(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return h(this),this._infinitePerspective}}});const l=new n["a"],_=new n["a"],p=new n["a"],d=new n["a"];f.prototype.computeCullingVolume=function(t,a,e){const r=this._cullingVolume.planes,i=this.top,c=this.bottom,u=this.right,f=this.left,h=this.near,m=this.far,R=n["a"].cross(a,e,l),C=_;n["a"].multiplyByScalar(a,h,C),n["a"].add(t,C,C);const O=p;n["a"].multiplyByScalar(a,m,O),n["a"].add(t,O,O);const b=d;n["a"].multiplyByScalar(R,f,b),n["a"].add(C,b,b),n["a"].subtract(b,t,b),n["a"].normalize(b,b),n["a"].cross(b,e,b),n["a"].normalize(b,b);let P=r[0];return Object(s["a"])(P)||(P=r[0]=new o["a"]),P.x=b.x,P.y=b.y,P.z=b.z,P.w=-n["a"].dot(b,t),n["a"].multiplyByScalar(R,u,b),n["a"].add(C,b,b),n["a"].subtract(b,t,b),n["a"].cross(e,b,b),n["a"].normalize(b,b),P=r[1],Object(s["a"])(P)||(P=r[1]=new o["a"]),P.x=b.x,P.y=b.y,P.z=b.z,P.w=-n["a"].dot(b,t),n["a"].multiplyByScalar(e,c,b),n["a"].add(C,b,b),n["a"].subtract(b,t,b),n["a"].cross(R,b,b),n["a"].normalize(b,b),P=r[2],Object(s["a"])(P)||(P=r[2]=new o["a"]),P.x=b.x,P.y=b.y,P.z=b.z,P.w=-n["a"].dot(b,t),n["a"].multiplyByScalar(e,i,b),n["a"].add(C,b,b),n["a"].subtract(b,t,b),n["a"].cross(b,R,b),n["a"].normalize(b,b),P=r[3],Object(s["a"])(P)||(P=r[3]=new o["a"]),P.x=b.x,P.y=b.y,P.z=b.z,P.w=-n["a"].dot(b,t),P=r[4],Object(s["a"])(P)||(P=r[4]=new o["a"]),P.x=a.x,P.y=a.y,P.z=a.z,P.w=-n["a"].dot(a,C),n["a"].negate(a,b),P=r[5],Object(s["a"])(P)||(P=r[5]=new o["a"]),P.x=b.x,P.y=b.y,P.z=b.z,P.w=-n["a"].dot(b,O),this._cullingVolume},f.prototype.getPixelDimensions=function(t,a,e,n,o){h(this);const r=1/this.near;let i=this.top*r;const s=2*n*e*i/a;i=this.right*r;const c=2*n*e*i/t;return o.x=c,o.y=s,o},f.prototype.clone=function(t){return Object(s["a"])(t)||(t=new f),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},f.prototype.equals=function(t){return Object(s["a"])(t)&&t instanceof f&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},f.prototype.equalsEpsilon=function(t,a,e){return t===this||Object(s["a"])(t)&&t instanceof f&&c["a"].equalsEpsilon(this.right,t.right,a,e)&&c["a"].equalsEpsilon(this.left,t.left,a,e)&&c["a"].equalsEpsilon(this.top,t.top,a,e)&&c["a"].equalsEpsilon(this.bottom,t.bottom,a,e)&&c["a"].equalsEpsilon(this.near,t.near,a,e)&&c["a"].equalsEpsilon(this.far,t.far,a,e)},a["a"]=f},"4e1a":function(t,a,e){"use strict";var n=e("535a"),o=e("2f63"),r=e("93da"),i=e("4dc8");function s(t){t=Object(n["a"])(t,n["a"].EMPTY_OBJECT),this._offCenterFrustum=new i["a"],this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=Object(n["a"])(t.near,1),this._near=this.near,this.far=Object(n["a"])(t.far,5e8),this._far=this.far,this.xOffset=Object(n["a"])(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=Object(n["a"])(t.yOffset,0),this._yOffset=this.yOffset}function c(t){const a=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,a.top=t.near*Math.tan(.5*t._fovy),a.bottom=-a.top,a.right=t.aspectRatio*a.top,a.left=-a.right,a.near=t.near,a.far=t.far,a.right+=t.xOffset,a.left+=t.xOffset,a.top+=t.yOffset,a.bottom+=t.yOffset)}s.packedLength=6,s.pack=function(t,a,e){return e=Object(n["a"])(e,0),a[e++]=t.fov,a[e++]=t.aspectRatio,a[e++]=t.near,a[e++]=t.far,a[e++]=t.xOffset,a[e]=t.yOffset,a},s.unpack=function(t,a,e){return a=Object(n["a"])(a,0),Object(o["a"])(e)||(e=new s),e.fov=t[a++],e.aspectRatio=t[a++],e.near=t[a++],e.far=t[a++],e.xOffset=t[a++],e.yOffset=t[a],e},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return c(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return c(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return c(this),this._fovy}},sseDenominator:{get:function(){return c(this),this._sseDenominator}}}),s.prototype.computeCullingVolume=function(t,a,e){return c(this),this._offCenterFrustum.computeCullingVolume(t,a,e)},s.prototype.getPixelDimensions=function(t,a,e,n,o){return c(this),this._offCenterFrustum.getPixelDimensions(t,a,e,n,o)},s.prototype.clone=function(t){return Object(o["a"])(t)||(t=new s),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},s.prototype.equals=function(t){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},s.prototype.equalsEpsilon=function(t,a,e){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),r["a"].equalsEpsilon(this.fov,t.fov,a,e)&&r["a"].equalsEpsilon(this.aspectRatio,t.aspectRatio,a,e)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,a,e))},a["a"]=s},"713f":function(t,a,e){"use strict";var n=e("535a"),o=e("2f63"),r=e("93da"),i=e("c34a");function s(t){t=Object(n["a"])(t,n["a"].EMPTY_OBJECT),this._offCenterFrustum=new i["a"],this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=Object(n["a"])(t.near,1),this._near=this.near,this.far=Object(n["a"])(t.far,5e8),this._far=this.far}function c(t){const a=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;const e=1/t.aspectRatio;a.right=.5*t.width,a.left=-a.right,a.top=e*a.right,a.bottom=-a.top,a.near=t.near,a.far=t.far}}s.packedLength=4,s.pack=function(t,a,e){return e=Object(n["a"])(e,0),a[e++]=t.width,a[e++]=t.aspectRatio,a[e++]=t.near,a[e]=t.far,a},s.unpack=function(t,a,e){return a=Object(n["a"])(a,0),Object(o["a"])(e)||(e=new s),e.width=t[a++],e.aspectRatio=t[a++],e.near=t[a++],e.far=t[a],e},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return c(this),this._offCenterFrustum.projectionMatrix}}}),s.prototype.computeCullingVolume=function(t,a,e){return c(this),this._offCenterFrustum.computeCullingVolume(t,a,e)},s.prototype.getPixelDimensions=function(t,a,e,n,o){return c(this),this._offCenterFrustum.getPixelDimensions(t,a,e,n,o)},s.prototype.clone=function(t){return Object(o["a"])(t)||(t=new s),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},s.prototype.equals=function(t){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},s.prototype.equalsEpsilon=function(t,a,e){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),r["a"].equalsEpsilon(this.width,t.width,a,e)&&r["a"].equalsEpsilon(this.aspectRatio,t.aspectRatio,a,e)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,a,e))},a["a"]=s},"78e5":function(t,a,e){"use strict";var n=e("cef5"),o=e("670c"),r=e("be18"),i=e("bef8"),s=e("535a"),c=e("2f63"),u=e("c52f"),f=e("a3bd"),h=e("66bf"),l=e("017a"),_=e("93da"),p=e("df07"),d=e("52f0"),m=e("188e"),R=e("eace");function C(t,a){this.center=r["a"].clone(Object(s["a"])(t,r["a"].ZERO)),this.halfAxes=p["a"].clone(Object(s["a"])(a,p["a"].ZERO))}C.packedLength=r["a"].packedLength+p["a"].packedLength,C.pack=function(t,a,e){return e=Object(s["a"])(e,0),r["a"].pack(t.center,a,e),p["a"].pack(t.halfAxes,a,e+r["a"].packedLength),a},C.unpack=function(t,a,e){return a=Object(s["a"])(a,0),Object(c["a"])(e)||(e=new C),r["a"].unpack(t,a,e.center),p["a"].unpack(t,a+r["a"].packedLength,e.halfAxes),e};const O=new r["a"],b=new r["a"],P=new r["a"],T=new r["a"],y=new r["a"],B=new r["a"],E=new p["a"],A={unitary:new p["a"],diagonal:new p["a"]};C.fromPoints=function(t,a){if(Object(c["a"])(a)||(a=new C),!Object(c["a"])(t)||0===t.length)return a.halfAxes=p["a"].ZERO,a.center=r["a"].ZERO,a;let e;const n=t.length,o=r["a"].clone(t[0],O);for(e=1;e<n;e++)r["a"].add(o,t[e],o);const i=1/n;r["a"].multiplyByScalar(o,i,o);let s,u=0,f=0,h=0,l=0,_=0,d=0;for(e=0;e<n;e++)s=r["a"].subtract(t[e],o,b),u+=s.x*s.x,f+=s.x*s.y,h+=s.x*s.z,l+=s.y*s.y,_+=s.y*s.z,d+=s.z*s.z;u*=i,f*=i,h*=i,l*=i,_*=i,d*=i;const m=E;m[0]=u,m[1]=f,m[2]=h,m[3]=f,m[4]=l,m[5]=_,m[6]=h,m[7]=_,m[8]=d;const R=p["a"].computeEigenDecomposition(m,A),w=p["a"].clone(R.unitary,a.halfAxes);let g=p["a"].getColumn(w,0,T),x=p["a"].getColumn(w,1,y),M=p["a"].getColumn(w,2,B),G=-Number.MAX_VALUE,N=-Number.MAX_VALUE,j=-Number.MAX_VALUE,S=Number.MAX_VALUE,v=Number.MAX_VALUE,D=Number.MAX_VALUE;for(e=0;e<n;e++)s=t[e],G=Math.max(r["a"].dot(g,s),G),N=Math.max(r["a"].dot(x,s),N),j=Math.max(r["a"].dot(M,s),j),S=Math.min(r["a"].dot(g,s),S),v=Math.min(r["a"].dot(x,s),v),D=Math.min(r["a"].dot(M,s),D);g=r["a"].multiplyByScalar(g,.5*(S+G),g),x=r["a"].multiplyByScalar(x,.5*(v+N),x),M=r["a"].multiplyByScalar(M,.5*(D+j),M);const V=r["a"].add(g,x,a.center);r["a"].add(V,M,V);const L=P;return L.x=G-S,L.y=N-v,L.z=j-D,r["a"].multiplyByScalar(L,.5,L),p["a"].multiplyByScale(a.halfAxes,L,a.halfAxes),a};const w=new r["a"],g=new r["a"];function x(t,a,e,n,o,i,s,u,f,h,l){Object(c["a"])(l)||(l=new C);const _=l.halfAxes;p["a"].setColumn(_,0,a,_),p["a"].setColumn(_,1,e,_),p["a"].setColumn(_,2,n,_);let d=w;d.x=(o+i)/2,d.y=(s+u)/2,d.z=(f+h)/2;const m=g;m.x=(i-o)/2,m.y=(u-s)/2,m.z=(h-f)/2;const R=l.center;return d=p["a"].multiplyByVector(_,d,d),r["a"].add(t,d,R),p["a"].multiplyByScale(_,m,_),l}const M=new i["a"],G=new r["a"],N=new i["a"],j=new i["a"],S=new i["a"],v=new i["a"],D=new i["a"],V=new r["a"],L=new r["a"],z=new r["a"],I=new r["a"],F=new r["a"],U=new o["a"],X=new o["a"],q=new o["a"],H=new o["a"],k=new o["a"],W=new r["a"],Y=new r["a"],J=new r["a"],Z=new r["a"],K=new o["a"],Q=new r["a"],$=new r["a"],tt=new r["a"],at=new m["a"](r["a"].UNIT_X,0);C.fromRectangle=function(t,a,e,n,o){let c,h,l,p,d,C,O;if(a=Object(s["a"])(a,0),e=Object(s["a"])(e,0),n=Object(s["a"])(n,u["a"].WGS84),t.width<=_["a"].PI){const r=R["a"].center(t,M),s=n.cartographicToCartesian(r,G),u=new f["a"](s,n);O=u.plane;const _=r.longitude,b=t.south<0&&t.north>0?0:r.latitude,P=i["a"].fromRadians(_,t.north,e,N),T=i["a"].fromRadians(t.west,t.north,e,j),y=i["a"].fromRadians(t.west,b,e,S),B=i["a"].fromRadians(t.west,t.south,e,v),E=i["a"].fromRadians(_,t.south,e,D),A=n.cartographicToCartesian(P,V);let w=n.cartographicToCartesian(T,L);const g=n.cartographicToCartesian(y,z);let W=n.cartographicToCartesian(B,I);const Y=n.cartographicToCartesian(E,F),J=u.projectPointToNearestOnPlane(A,U),Z=u.projectPointToNearestOnPlane(w,X),K=u.projectPointToNearestOnPlane(g,q),Q=u.projectPointToNearestOnPlane(W,H),$=u.projectPointToNearestOnPlane(Y,k);return c=Math.min(Z.x,K.x,Q.x),h=-c,p=Math.max(Z.y,J.y),l=Math.min(Q.y,$.y),T.height=B.height=a,w=n.cartographicToCartesian(T,L),W=n.cartographicToCartesian(B,I),d=Math.min(m["a"].getPointDistance(O,w),m["a"].getPointDistance(O,W)),C=e,x(u.origin,u.xAxis,u.yAxis,u.zAxis,c,h,l,p,d,C,o)}const b=t.south>0,P=t.north<0,T=b?t.south:P?t.north:0,y=R["a"].center(t,M).longitude,B=r["a"].fromRadians(y,T,e,n,W);B.z=0;const E=Math.abs(B.x)<_["a"].EPSILON10&&Math.abs(B.y)<_["a"].EPSILON10,A=E?r["a"].UNIT_X:r["a"].normalize(B,Y),w=r["a"].UNIT_Z,g=r["a"].cross(A,w,J);O=m["a"].fromPointNormal(B,A,at);const et=r["a"].fromRadians(y+_["a"].PI_OVER_TWO,T,e,n,Z);h=r["a"].dot(m["a"].projectPointOntoPlane(O,et,K),g),c=-h,p=r["a"].fromRadians(0,t.north,P?a:e,n,Q).z,l=r["a"].fromRadians(0,t.south,b?a:e,n,$).z;const nt=r["a"].fromRadians(t.east,T,e,n,tt);return d=m["a"].getPointDistance(O,nt),C=0,x(B,g,w,A,c,h,l,p,d,C,o)},C.fromTransformation=function(t,a){return Object(c["a"])(a)||(a=new C),a.center=d["a"].getTranslation(t,a.center),a.halfAxes=d["a"].getMatrix3(t,a.halfAxes),a.halfAxes=p["a"].multiplyByScalar(a.halfAxes,.5,a.halfAxes),a},C.clone=function(t,a){if(Object(c["a"])(t))return Object(c["a"])(a)?(r["a"].clone(t.center,a.center),p["a"].clone(t.halfAxes,a.halfAxes),a):new C(t.center,t.halfAxes)},C.intersectPlane=function(t,a){const e=t.center,n=a.normal,o=t.halfAxes,i=n.x,s=n.y,c=n.z,u=Math.abs(i*o[p["a"].COLUMN0ROW0]+s*o[p["a"].COLUMN0ROW1]+c*o[p["a"].COLUMN0ROW2])+Math.abs(i*o[p["a"].COLUMN1ROW0]+s*o[p["a"].COLUMN1ROW1]+c*o[p["a"].COLUMN1ROW2])+Math.abs(i*o[p["a"].COLUMN2ROW0]+s*o[p["a"].COLUMN2ROW1]+c*o[p["a"].COLUMN2ROW2]),f=r["a"].dot(n,e)+a.distance;return f<=-u?h["a"].OUTSIDE:f>=u?h["a"].INSIDE:h["a"].INTERSECTING};const et=new r["a"],nt=new r["a"],ot=new r["a"],rt=new r["a"],it=new r["a"],st=new r["a"];C.distanceSquaredTo=function(t,a){const e=r["a"].subtract(a,t.center,w),n=t.halfAxes;let o=p["a"].getColumn(n,0,et),i=p["a"].getColumn(n,1,nt),s=p["a"].getColumn(n,2,ot);const c=r["a"].magnitude(o),u=r["a"].magnitude(i),f=r["a"].magnitude(s);let h=!0,l=!0,d=!0;c>0?r["a"].divideByScalar(o,c,o):h=!1,u>0?r["a"].divideByScalar(i,u,i):l=!1,f>0?r["a"].divideByScalar(s,f,s):d=!1;const m=!h+!l+!d;let R,C,O;if(1===m){let t=o;R=i,C=s,l?d||(t=s,C=o):(t=i,R=o),O=r["a"].cross(R,C,it),t===o?o=O:t===i?i=O:t===s&&(s=O)}else if(2===m){R=o,l?R=i:d&&(R=s);let t=r["a"].UNIT_Y;t.equalsEpsilon(R,_["a"].EPSILON3)&&(t=r["a"].UNIT_X),C=r["a"].cross(R,t,rt),r["a"].normalize(C,C),O=r["a"].cross(R,C,it),r["a"].normalize(O,O),R===o?(i=C,s=O):R===i?(s=C,o=O):R===s&&(o=C,i=O)}else 3===m&&(o=r["a"].UNIT_X,i=r["a"].UNIT_Y,s=r["a"].UNIT_Z);const b=st;b.x=r["a"].dot(e,o),b.y=r["a"].dot(e,i),b.z=r["a"].dot(e,s);let P,T=0;return b.x<-c?(P=b.x+c,T+=P*P):b.x>c&&(P=b.x-c,T+=P*P),b.y<-u?(P=b.y+u,T+=P*P):b.y>u&&(P=b.y-u,T+=P*P),b.z<-f?(P=b.z+f,T+=P*P):b.z>f&&(P=b.z-f,T+=P*P),T};const ct=new r["a"],ut=new r["a"];C.computePlaneDistances=function(t,a,e,n){Object(c["a"])(n)||(n=new l["a"]);let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;const s=t.center,u=t.halfAxes,f=p["a"].getColumn(u,0,et),h=p["a"].getColumn(u,1,nt),_=p["a"].getColumn(u,2,ot),d=r["a"].add(f,h,ct);r["a"].add(d,_,d),r["a"].add(d,s,d);const m=r["a"].subtract(d,a,ut);let R=r["a"].dot(e,m);return o=Math.min(R,o),i=Math.max(R,i),r["a"].add(s,f,d),r["a"].add(d,h,d),r["a"].subtract(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),r["a"].add(s,f,d),r["a"].subtract(d,h,d),r["a"].add(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),r["a"].add(s,f,d),r["a"].subtract(d,h,d),r["a"].subtract(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),r["a"].subtract(s,f,d),r["a"].add(d,h,d),r["a"].add(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),r["a"].subtract(s,f,d),r["a"].add(d,h,d),r["a"].subtract(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),r["a"].subtract(s,f,d),r["a"].subtract(d,h,d),r["a"].add(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),r["a"].subtract(s,f,d),r["a"].subtract(d,h,d),r["a"].subtract(d,_,d),r["a"].subtract(d,a,m),R=r["a"].dot(e,m),o=Math.min(R,o),i=Math.max(R,i),n.start=o,n.stop=i,n};const ft=new r["a"],ht=new r["a"],lt=new r["a"];C.computeCorners=function(t,a){Object(c["a"])(a)||(a=[new r["a"],new r["a"],new r["a"],new r["a"],new r["a"],new r["a"],new r["a"],new r["a"]]);const e=t.center,n=t.halfAxes,o=p["a"].getColumn(n,0,ft),i=p["a"].getColumn(n,1,ht),s=p["a"].getColumn(n,2,lt);return r["a"].clone(e,a[0]),r["a"].subtract(a[0],o,a[0]),r["a"].subtract(a[0],i,a[0]),r["a"].subtract(a[0],s,a[0]),r["a"].clone(e,a[1]),r["a"].subtract(a[1],o,a[1]),r["a"].subtract(a[1],i,a[1]),r["a"].add(a[1],s,a[1]),r["a"].clone(e,a[2]),r["a"].subtract(a[2],o,a[2]),r["a"].add(a[2],i,a[2]),r["a"].subtract(a[2],s,a[2]),r["a"].clone(e,a[3]),r["a"].subtract(a[3],o,a[3]),r["a"].add(a[3],i,a[3]),r["a"].add(a[3],s,a[3]),r["a"].clone(e,a[4]),r["a"].add(a[4],o,a[4]),r["a"].subtract(a[4],i,a[4]),r["a"].subtract(a[4],s,a[4]),r["a"].clone(e,a[5]),r["a"].add(a[5],o,a[5]),r["a"].subtract(a[5],i,a[5]),r["a"].add(a[5],s,a[5]),r["a"].clone(e,a[6]),r["a"].add(a[6],o,a[6]),r["a"].add(a[6],i,a[6]),r["a"].subtract(a[6],s,a[6]),r["a"].clone(e,a[7]),r["a"].add(a[7],o,a[7]),r["a"].add(a[7],i,a[7]),r["a"].add(a[7],s,a[7]),a};const _t=new p["a"];C.computeTransformation=function(t,a){Object(c["a"])(a)||(a=new d["a"]);const e=t.center,n=p["a"].multiplyByUniformScale(t.halfAxes,2,_t);return d["a"].fromRotationTranslation(n,e,a)};const pt=new n["a"];C.isOccluded=function(t,a){const e=n["a"].fromOrientedBoundingBox(t,pt);return!a.isBoundingSphereVisible(e)},C.prototype.intersectPlane=function(t){return C.intersectPlane(this,t)},C.prototype.distanceSquaredTo=function(t){return C.distanceSquaredTo(this,t)},C.prototype.computePlaneDistances=function(t,a,e){return C.computePlaneDistances(this,t,a,e)},C.prototype.computeCorners=function(t){return C.computeCorners(this,t)},C.prototype.computeTransformation=function(t){return C.computeTransformation(this,t)},C.prototype.isOccluded=function(t){return C.isOccluded(this,t)},C.equals=function(t,a){return t===a||Object(c["a"])(t)&&Object(c["a"])(a)&&r["a"].equals(t.center,a.center)&&p["a"].equals(t.halfAxes,a.halfAxes)},C.prototype.clone=function(t){return C.clone(this,t)},C.prototype.equals=function(t){return C.equals(this,t)},a["a"]=C},c2eb:function(t,a,e){"use strict";var n=e("abab"),o=e("535a"),r=e("2f63");function i(t,a,e){t=Object(o["a"])(t,0),a=Object(o["a"])(a,0),e=Object(o["a"])(e,0),this.value=new Float32Array([t,a,e])}Object.defineProperties(i.prototype,{componentDatatype:{get:function(){return n["a"].FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),i.fromCartesian3=function(t){return new i(t.x,t.y,t.z)},i.toValue=function(t,a){return Object(r["a"])(a)||(a=new Float32Array([t.x,t.y,t.z])),a[0]=t.x,a[1]=t.y,a[2]=t.z,a},a["a"]=i},c34a:function(t,a,e){"use strict";var n=e("be18"),o=e("a561"),r=e("2384"),i=e("535a"),s=e("2f63"),c=e("93da"),u=e("52f0");function f(t){t=Object(i["a"])(t,i["a"].EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=Object(i["a"])(t.near,1),this._near=this.near,this.far=Object(i["a"])(t.far,5e8),this._far=this.far,this._cullingVolume=new r["a"],this._orthographicMatrix=new u["a"]}function h(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=u["a"].computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}Object.defineProperties(f.prototype,{projectionMatrix:{get:function(){return h(this),this._orthographicMatrix}}});const l=new n["a"],_=new n["a"],p=new n["a"],d=new n["a"];f.prototype.computeCullingVolume=function(t,a,e){const r=this._cullingVolume.planes,i=this.top,c=this.bottom,u=this.right,f=this.left,h=this.near,m=this.far,R=n["a"].cross(a,e,l);n["a"].normalize(R,R);const C=_;n["a"].multiplyByScalar(a,h,C),n["a"].add(t,C,C);const O=p;n["a"].multiplyByScalar(R,f,O),n["a"].add(C,O,O);let b=r[0];return Object(s["a"])(b)||(b=r[0]=new o["a"]),b.x=R.x,b.y=R.y,b.z=R.z,b.w=-n["a"].dot(R,O),n["a"].multiplyByScalar(R,u,O),n["a"].add(C,O,O),b=r[1],Object(s["a"])(b)||(b=r[1]=new o["a"]),b.x=-R.x,b.y=-R.y,b.z=-R.z,b.w=-n["a"].dot(n["a"].negate(R,d),O),n["a"].multiplyByScalar(e,c,O),n["a"].add(C,O,O),b=r[2],Object(s["a"])(b)||(b=r[2]=new o["a"]),b.x=e.x,b.y=e.y,b.z=e.z,b.w=-n["a"].dot(e,O),n["a"].multiplyByScalar(e,i,O),n["a"].add(C,O,O),b=r[3],Object(s["a"])(b)||(b=r[3]=new o["a"]),b.x=-e.x,b.y=-e.y,b.z=-e.z,b.w=-n["a"].dot(n["a"].negate(e,d),O),b=r[4],Object(s["a"])(b)||(b=r[4]=new o["a"]),b.x=a.x,b.y=a.y,b.z=a.z,b.w=-n["a"].dot(a,C),n["a"].multiplyByScalar(a,m,O),n["a"].add(t,O,O),b=r[5],Object(s["a"])(b)||(b=r[5]=new o["a"]),b.x=-a.x,b.y=-a.y,b.z=-a.z,b.w=-n["a"].dot(n["a"].negate(a,d),O),this._cullingVolume},f.prototype.getPixelDimensions=function(t,a,e,n,o){h(this);const r=this.right-this.left,i=this.top-this.bottom,s=n*r/t,c=n*i/a;return o.x=s,o.y=c,o},f.prototype.clone=function(t){return Object(s["a"])(t)||(t=new f),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},f.prototype.equals=function(t){return Object(s["a"])(t)&&t instanceof f&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},f.prototype.equalsEpsilon=function(t,a,e){return t===this||Object(s["a"])(t)&&t instanceof f&&c["a"].equalsEpsilon(this.right,t.right,a,e)&&c["a"].equalsEpsilon(this.left,t.left,a,e)&&c["a"].equalsEpsilon(this.top,t.top,a,e)&&c["a"].equalsEpsilon(this.bottom,t.bottom,a,e)&&c["a"].equalsEpsilon(this.near,t.near,a,e)&&c["a"].equalsEpsilon(this.far,t.far,a,e)},a["a"]=f},c630:function(t,a,e){"use strict";var n=e("be18"),o=e("2f63"),r=e("ee94"),i=e("eace"),s=e("d4ed");function c(t){this._url=s["a"].createIfNeeded(t),this._url.appendForwardSlash()}Object.defineProperties(c.prototype,{url:{get:function(){return this._url}}}),c.prototype.geocode=function(t,a){const e=this._url.getDerivedResource({url:a===r["a"].AUTOCOMPLETE?"autocomplete":"search",queryParameters:{text:t}});return e.fetchJson().then((function(t){return t.features.map((function(t){let a;const e=t.bbox;if(Object(o["a"])(e))a=i["a"].fromDegrees(e[0],e[1],e[2],e[3]);else{const e=t.geometry.coordinates[0],o=t.geometry.coordinates[1];a=n["a"].fromDegrees(e,o)}return{displayName:t.properties.label,destination:a}}))}))},a["a"]=c},e42d:function(t,a,e){"use strict";var n=e("6ef5"),o=e("daa2");const r={DEPTH_COMPONENT:o["a"].DEPTH_COMPONENT,DEPTH_STENCIL:o["a"].DEPTH_STENCIL,ALPHA:o["a"].ALPHA,RGB:o["a"].RGB,RGBA:o["a"].RGBA,LUMINANCE:o["a"].LUMINANCE,LUMINANCE_ALPHA:o["a"].LUMINANCE_ALPHA,RGB_DXT1:o["a"].COMPRESSED_RGB_S3TC_DXT1_EXT,RGBA_DXT1:o["a"].COMPRESSED_RGBA_S3TC_DXT1_EXT,RGBA_DXT3:o["a"].COMPRESSED_RGBA_S3TC_DXT3_EXT,RGBA_DXT5:o["a"].COMPRESSED_RGBA_S3TC_DXT5_EXT,RGB_PVRTC_4BPPV1:o["a"].COMPRESSED_RGB_PVRTC_4BPPV1_IMG,RGB_PVRTC_2BPPV1:o["a"].COMPRESSED_RGB_PVRTC_2BPPV1_IMG,RGBA_PVRTC_4BPPV1:o["a"].COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,RGBA_PVRTC_2BPPV1:o["a"].COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,RGBA_ASTC:o["a"].COMPRESSED_RGBA_ASTC_4x4_WEBGL,RGB_ETC1:o["a"].COMPRESSED_RGB_ETC1_WEBGL,RGB8_ETC2:o["a"].COMPRESSED_RGB8_ETC2,RGBA8_ETC2_EAC:o["a"].COMPRESSED_RGBA8_ETC2_EAC,RGBA_BC7:o["a"].COMPRESSED_RGBA_BPTC_UNORM,componentsLength:function(t){switch(t){case r.RGB:return 3;case r.RGBA:return 4;case r.LUMINANCE_ALPHA:return 2;case r.ALPHA:case r.LUMINANCE:return 1;default:return 1}},validate:function(t){return t===r.DEPTH_COMPONENT||t===r.DEPTH_STENCIL||t===r.ALPHA||t===r.RGB||t===r.RGBA||t===r.LUMINANCE||t===r.LUMINANCE_ALPHA||t===r.RGB_DXT1||t===r.RGBA_DXT1||t===r.RGBA_DXT3||t===r.RGBA_DXT5||t===r.RGB_PVRTC_4BPPV1||t===r.RGB_PVRTC_2BPPV1||t===r.RGBA_PVRTC_4BPPV1||t===r.RGBA_PVRTC_2BPPV1||t===r.RGBA_ASTC||t===r.RGB_ETC1||t===r.RGB8_ETC2||t===r.RGBA8_ETC2_EAC||t===r.RGBA_BC7},isColorFormat:function(t){return t===r.ALPHA||t===r.RGB||t===r.RGBA||t===r.LUMINANCE||t===r.LUMINANCE_ALPHA},isDepthFormat:function(t){return t===r.DEPTH_COMPONENT||t===r.DEPTH_STENCIL},isCompressedFormat:function(t){return t===r.RGB_DXT1||t===r.RGBA_DXT1||t===r.RGBA_DXT3||t===r.RGBA_DXT5||t===r.RGB_PVRTC_4BPPV1||t===r.RGB_PVRTC_2BPPV1||t===r.RGBA_PVRTC_4BPPV1||t===r.RGBA_PVRTC_2BPPV1||t===r.RGBA_ASTC||t===r.RGB_ETC1||t===r.RGB8_ETC2||t===r.RGBA8_ETC2_EAC||t===r.RGBA_BC7},isDXTFormat:function(t){return t===r.RGB_DXT1||t===r.RGBA_DXT1||t===r.RGBA_DXT3||t===r.RGBA_DXT5},isPVRTCFormat:function(t){return t===r.RGB_PVRTC_4BPPV1||t===r.RGB_PVRTC_2BPPV1||t===r.RGBA_PVRTC_4BPPV1||t===r.RGBA_PVRTC_2BPPV1},isASTCFormat:function(t){return t===r.RGBA_ASTC},isETC1Format:function(t){return t===r.RGB_ETC1},isETC2Format:function(t){return t===r.RGB8_ETC2||t===r.RGBA8_ETC2_EAC},isBC7Format:function(t){return t===r.RGBA_BC7},compressedTextureSizeInBytes:function(t,a,e){switch(t){case r.RGB_DXT1:case r.RGBA_DXT1:case r.RGB_ETC1:case r.RGB8_ETC2:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case r.RGBA_DXT3:case r.RGBA_DXT5:case r.RGBA_ASTC:case r.RGBA8_ETC2_EAC:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case r.RGB_PVRTC_4BPPV1:case r.RGBA_PVRTC_4BPPV1:return Math.floor((Math.max(a,8)*Math.max(e,8)*4+7)/8);case r.RGB_PVRTC_2BPPV1:case r.RGBA_PVRTC_2BPPV1:return Math.floor((Math.max(a,16)*Math.max(e,8)*2+7)/8);case r.RGBA_BC7:return Math.ceil(a/4)*Math.ceil(e/4)*16;default:return 0}},textureSizeInBytes:function(t,a,e,o){let i=r.componentsLength(t);return n["a"].isPacked(a)&&(i=1),i*n["a"].sizeInBytes(a)*e*o},alignmentInBytes:function(t,a,e){const n=r.textureSizeInBytes(t,a,e,1)%4;return 0===n?4:2===n?2:1},createTypedArray:function(t,a,e,o){let i;const s=n["a"].sizeInBytes(a);i=s===Uint8Array.BYTES_PER_ELEMENT?Uint8Array:s===Uint16Array.BYTES_PER_ELEMENT?Uint16Array:s===Float32Array.BYTES_PER_ELEMENT&&a===n["a"].FLOAT?Float32Array:Uint32Array;const c=r.componentsLength(t)*e*o;return new i(c)},flipY:function(t,a,e,n,o){if(1===o)return t;const i=r.createTypedArray(a,e,n,o),s=r.componentsLength(a),c=n*s;for(let r=0;r<o;++r){const a=r*n*s,e=(o-r-1)*n*s;for(let n=0;n<c;++n)i[e+n]=t[a+n]}return i},toInternalFormat:function(t,a,e){if(!e.webgl2)return t;if(t===r.DEPTH_STENCIL)return o["a"].DEPTH24_STENCIL8;if(t===r.DEPTH_COMPONENT){if(a===n["a"].UNSIGNED_SHORT)return o["a"].DEPTH_COMPONENT16;if(a===n["a"].UNSIGNED_INT)return o["a"].DEPTH_COMPONENT24}if(a===n["a"].FLOAT)switch(t){case r.RGBA:return o["a"].RGBA32F;case r.RGB:return o["a"].RGB32F;case r.RG:return o["a"].RG32F;case r.R:return o["a"].R32F}if(a===n["a"].HALF_FLOAT)switch(t){case r.RGBA:return o["a"].RGBA16F;case r.RGB:return o["a"].RGB16F;case r.RG:return o["a"].RG16F;case r.R:return o["a"].R16F}return t}};a["a"]=Object.freeze(r)}}]);