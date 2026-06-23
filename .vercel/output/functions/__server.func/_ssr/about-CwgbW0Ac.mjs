import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C663baqH.mjs";
import { a as SectionTitle, b as StatsBar } from "./HomeSections-CJCm2s3F.mjs";
import { T as Target, E as Eye, p as Heart } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "./router-uaDXSJiF.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const values = [{
  icon: Target,
  title: "Our Mission",
  text: "To transform every space we touch into a refined expression of our client's vision — through craftsmanship, creativity, and uncompromising standards."
}, {
  icon: Eye,
  title: "Our Vision",
  text: "To become Africa's most trusted name in luxury interior and exterior design — known for elegance, innovation, and enduring quality."
}, {
  icon: Heart,
  title: "Our Values",
  text: "Integrity in every transaction. Excellence in every detail. Respect for every client. A culture of continuous craft and learning."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About", title: "A studio built on craft, taste, and trust.", subtitle: "For over a decade, Emmastrons has shaped homes, offices, and hotels across Nigeria — pairing classical elegance with contemporary discipline.", image: "/heroOne.jpg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 container-px mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Our story", title: "Where vision meets craftsmanship." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Emmastrons was founded on a simple conviction: that every space — no matter its size or budget — deserves to be designed with intention. What began as a small decoration studio has grown into one of Nigeria's most trusted names in interior and exterior design." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, our team of designers, project managers, and master craftsmen collaborate on residences, offices, hospitality projects, and commercial spaces — bringing together classical proportion, contemporary materiality, and locally-sourced craft." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We believe great design is invisible at first — and unforgettable forever. Every project is a conversation, a collaboration, and a commitment." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { center: true, eyebrow: "What guides us", title: "Mission, vision, and the values we live by." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: values.map((v, i) => {
        const Icon = v.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.1,
          duration: 0.55
        }, className: "bg-card border border-border rounded-2xl p-10 hover:border-gold hover:shadow-luxury transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-gradient-gold grid place-items-center text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-2xl font-display font-bold text-navy", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: v.text })
        ] }, v.title);
      }) })
    ] })
  ] });
}
export {
  About as component
};
