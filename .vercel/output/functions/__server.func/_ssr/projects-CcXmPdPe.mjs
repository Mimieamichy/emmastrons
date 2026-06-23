import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C663baqH.mjs";
import { P as PROJECTS } from "./router-uaDXSJiF.mjs";
import { C as CTASection } from "./HomeSections-CJCm2s3F.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as MapPin } from "../_libs/lucide-react.mjs";
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
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Projects", title: "Signature projects, delivered.", subtitle: "A closer look at recent work across residences, hospitality, and commercial spaces.", image: "/portfolioThree.jpg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 container-px mx-auto max-w-7xl space-y-24", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-100px"
    }, transition: {
      duration: 0.7
    }, className: `grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-gradient-gold text-navy px-6 py-3 rounded-full font-display font-bold shadow-gold", children: [
          "Project ",
          String(i + 1).padStart(2, "0")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-3", children: "Case Study" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-display font-bold text-navy text-balance", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-gold" }),
          " ",
          p.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed text-lg", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-navy mb-3", children: "Services Provided" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-secondary border border-border px-4 py-1.5 rounded-full text-sm text-navy", children: s }, s)) })
        ] })
      ] })
    ] }, p.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  Projects as component
};
