const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/SwupA11yPlugin.D84kWg1p.js","_astro/Swup.T76dPaas.js","_astro/index.modern.CkIAsQri.js","_astro/SwupPreloadPlugin.CnFDLkk0.js","_astro/SwupScrollPlugin.CPHDirUY.js","_astro/SwupBodyClassPlugin.CW89z22S.js","_astro/SwupHeadPlugin.BKT_SVYP.js","_astro/SwupScriptsPlugin.o5PkFIdr.js","_astro/SwupFadeTheme.CYyxYGy0.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper.CLcXU_4U.js";function r(n){return JSON.parse(n,l)}function l(n,t){if(Array.isArray(t)&&t.length===2&&typeof t[1]=="string"){const o=t[0];if(t=t[1],o===":regex:"){const u=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(u[1],u[2]||"")}if(o===":function:")return new Function(`return (${t}).apply(this, arguments);`)}return t}function _(n,{timeoutFallback:t=1e3}={}){"requestIdleCallback"in window?window.requestIdleCallback(()=>n()):setTimeout(()=>n(),t)}function w(n){document.readyState==="complete"?setTimeout(()=>n(),0):window.addEventListener("load",()=>n())}function f(n,{delayAfterLoad:t=0}={}){w(()=>{t>0?setTimeout(()=>_(n),t):_(n)})}async function m(){const[n,t,o,u,s,d,a,p]=await Promise.all([i(()=>import("./Swup.T76dPaas.js").then(e=>e.S),[]).then(e=>e.default),i(()=>import("./SwupA11yPlugin.D84kWg1p.js"),__vite__mapDeps([0,1,2])).then(e=>e.default),i(()=>import("./SwupPreloadPlugin.CnFDLkk0.js"),__vite__mapDeps([3,2,1])).then(e=>e.default),i(()=>import("./SwupScrollPlugin.CPHDirUY.js"),__vite__mapDeps([4,2,1])).then(e=>e.default),i(()=>import("./SwupBodyClassPlugin.CW89z22S.js"),__vite__mapDeps([5,2])).then(e=>e.default),i(()=>import("./SwupHeadPlugin.BKT_SVYP.js"),__vite__mapDeps([6,2])).then(e=>e.default),i(()=>import("./SwupScriptsPlugin.o5PkFIdr.js"),__vite__mapDeps([7,2])).then(e=>e.default),i(()=>import("./SwupFadeTheme.CYyxYGy0.js"),__vite__mapDeps([8,2])).then(e=>e.default)]);new n({animationSelector:'[class*="transition-"]',containers:["#swup"],cache:!0,plugins:[new t(r("{}")),new o(r('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),new u(r("{}")),new s(r("{}")),new d(r('{"awaitAssets":true}')),new a(r("{}")),new p(r('{"mainElement":"#swup"}'))]})}f(m);
