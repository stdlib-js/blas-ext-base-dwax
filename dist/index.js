"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var y=c(function(J,j){
var g=require('@stdlib/blas-base-dcopy/dist').ndarray,o=5;function k(i,r,u,t,q,e,f,m){var n,a,s,v;if(i<=0)return e;if(r===1)return g(i,u,t,q,e,f,m);if(n=q,a=m,t===1&&f===1){if(s=i%o,s>0)for(v=0;v<s;v++)e[a]=r*u[n],n+=t,a+=f;if(i<o)return e;for(v=s;v<i;v+=o)e[a]=r*u[n],e[a+1]=r*u[n+1],e[a+2]=r*u[n+2],e[a+3]=r*u[n+3],e[a+4]=r*u[n+4],n+=o,a+=o;return e}for(v=0;v<i;v++)e[a]=r*u[n],n+=t,a+=f;return e}j.exports=k
});var _=c(function(K,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(i,r,u,t,q,e){return z(i,r,u,t,x(i,t),q,e,x(i,e))}R.exports=A
});var O=c(function(L,M){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=y();B(E,"ndarray",C);M.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),d,b=F(D(__dirname,"./native.js"));G(b)?d=H:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
