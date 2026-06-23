import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C663baqH.mjs";
import { T as TESTIMONIALS } from "./router-uaDXSJiF.mjs";
import { C as CTASection } from "./HomeSections-CJCm2s3F.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { Q as Quote, j as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ALL = [...TESTIMONIALS, ...TESTIMONIALS.map((t) => ({
  ...t,
  name: t.name + " "
}))];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Testimonials", title: "Trusted by clients across Nigeria.", subtitle: "Real stories from homeowners, hospitality leaders, and businesses we've had the privilege to serve.", image: "/heroTwo.jpg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: ALL.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i % 3 * 0.1,
      duration: 0.55
    }, className: "relative bg-card border border-border rounded-2xl p-10 hover:border-gold hover:shadow-luxury transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 text-gold/20", size: 56 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold mb-4", children: Array.from({
        length: t.rating
      }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, fill: "currentColor" }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-foreground/85 leading-relaxed text-lg italic", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 pt-6 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-navy text-lg", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: t.role })
      ] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  Testimonials as component
};
