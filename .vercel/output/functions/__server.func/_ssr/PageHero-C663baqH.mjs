import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function PageHero({ eyebrow, title, subtitle, image }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[480px] flex items-end overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-px mx-auto max-w-7xl pb-20 pt-32 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:underline", children: "Home" }),
            " / ",
            eyebrow
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-white/80 leading-relaxed", children: subtitle })
        ]
      }
    ) })
  ] });
}
export {
  PageHero as P
};
