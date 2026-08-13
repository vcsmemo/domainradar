globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_BaRpBLsC.mjs';
import './chunks/astro-designed-error-pages_DUYI7mRv.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B6_8em9S.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/johntian/Alternative/","cacheDir":"file:///Users/johntian/Alternative/node_modules/.astro/","outDir":"file:///Users/johntian/Alternative/dist/","srcDir":"file:///Users/johntian/Alternative/src/","publicDir":"file:///Users/johntian/Alternative/public/","buildClientDir":"file:///Users/johntian/Alternative/dist/","buildServerDir":"file:///Users/johntian/Alternative/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"sitemap.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_._5g8gO5S.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/johntian/Alternative/src/pages/domain/[id].astro",{"propagation":"none","containsHead":true}],["/Users/johntian/Alternative/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/domain/[id]@_@astro":"pages/domain/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DSAiUKJX.mjs","/Users/johntian/Alternative/node_modules/.pnpm/unstorage@1.17.5/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/johntian/Alternative/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.XYVgyWrN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/johntian/Alternative/src/pages/index.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"btn-masked\"),n=document.getElementById(\"btn-unlocked\"),c=document.querySelectorAll(\".domain-name\"),o=document.querySelectorAll(\".btn-action\"),i=document.getElementById(\"admin-badge\"),l=document.getElementById(\"checkout-modal\"),m=document.getElementById(\"close-modal\"),u=document.querySelectorAll(\".open-checkout\"),r=document.getElementById(\"selected-plan\"),g=document.getElementById(\"owner-pass-btn\");let f=localStorage.getItem(\"isOwnerMode\")===\"true\";function d(s){s?(n?.classList.add(\"bg-emerald-500\",\"text-slate-950\"),n?.classList.remove(\"text-slate-400\"),a?.classList.remove(\"bg-emerald-500\",\"text-slate-950\"),a?.classList.add(\"text-slate-400\"),i?.classList.remove(\"hidden\"),c.forEach(e=>{const t=e.getAttribute(\"data-full\");t&&(e.textContent=t)}),o.forEach(e=>{const t=e.querySelector(\".action-text\");t&&(t.textContent=\"Full Unlocked 🔓\"),e.classList.add(\"text-emerald-300\")})):(a?.classList.add(\"bg-emerald-500\",\"text-slate-950\"),a?.classList.remove(\"text-slate-400\"),n?.classList.remove(\"bg-emerald-500\",\"text-slate-950\"),n?.classList.add(\"text-slate-400\"),i?.classList.add(\"hidden\"),c.forEach(e=>{const t=e.getAttribute(\"data-masked\");t&&(e.textContent=t)}),o.forEach(e=>{const t=e.querySelector(\".action-text\");t&&(t.textContent=\"Unlock Name 🔒\")}))}f&&d(!0);a?.addEventListener(\"click\",()=>{localStorage.setItem(\"isOwnerMode\",\"false\"),d(!1)});n?.addEventListener(\"click\",()=>{localStorage.setItem(\"isOwnerMode\",\"true\"),d(!0)});u.forEach(s=>{s.addEventListener(\"click\",()=>{const e=s.getAttribute(\"data-plan\")||\"Pro Membership\";r&&(r.textContent=e),l?.classList.remove(\"hidden\")})});o.forEach(s=>{s.addEventListener(\"click\",()=>{if(localStorage.getItem(\"isOwnerMode\")===\"true\"){const e=s.getAttribute(\"data-[#domain-full]\")||\"\";alert(`🔓 Owner Pass Active!\nFull Domain: ${e}\nStatus: Verified Clean (DR 38+)`)}else l?.classList.remove(\"hidden\")})});m?.addEventListener(\"click\",()=>{l?.classList.add(\"hidden\")});g?.addEventListener(\"click\",()=>{localStorage.setItem(\"isOwnerMode\",\"true\"),d(!0),l?.classList.add(\"hidden\"),alert(\"🔐 Owner Pass Enabled! You now have full unmasked access to all domains.\")});"]],"assets":["/_astro/_id_._5g8gO5S.css","/robots.txt","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_astro/_id_._5g8gO5S.css","/_worker.js/chunks/Layout_BMEjgPke.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_UpMFtt7g.mjs","/_worker.js/chunks/astro-designed-error-pages_DUYI7mRv.mjs","/_worker.js/chunks/astro_zQNQgnPS.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/domains_BbWRkBsS.mjs","/_worker.js/chunks/noop-middleware_B6_8em9S.mjs","/_worker.js/chunks/render-context_BlqVl8nm.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/sitemap.xml.astro.mjs","/_worker.js/chunks/astro/server_BaRpBLsC.mjs","/_worker.js/pages/domain/_id_.astro.mjs","/sitemap.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"PfCiCnI9nzF8ePVRpPP2oH3h0sMwKeQOcEK4aBlqDSg=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
