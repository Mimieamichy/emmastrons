import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AboutTeaser, b as StatsBar, S as ServicesGrid, W as WhyUsSection, T as TestimonialsCarousel, C as CTASection } from "./HomeSections-CJCm2s3F.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { k as ArrowRight, q as Play } from "../_libs/lucide-react.mjs";
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
const slides = [
  { img: "/heroOne.jpg", alt: "Luxury living room interior" },
  { img: "/heroTwo.jpg", alt: "Premium home exterior at dusk" },
  { img: "/heroThree.jpg", alt: "Elegant master bedroom" }
];
function HomeHero() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[600px] md:min-h-[700px] h-[100svh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.img,
      {
        src: slides[i].img,
        alt: slides[i].alt,
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.4, ease: "easeOut" },
        className: "absolute inset-0 w-full h-full object-cover"
      },
      i
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-deep/65 to-navy/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,_var(--gold)_20%,_transparent)_0%,_transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, -20, 0] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        className: "absolute top-1/4 right-[8%] w-32 h-32 border border-gold/30 rounded-full hidden lg:block"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, 20, 0] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        className: "absolute bottom-1/3 left-[6%] w-20 h-20 border-2 border-gold/40 rotate-45 hidden lg:block"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full container-px mx-auto max-w-7xl flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl text-white pt-24 pb-28 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.6 },
          className: "text-gold tracking-[0.35em] uppercase text-sm font-semibold mb-6",
          children: "⸺ Premium Interior & Exterior Decor"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.35, duration: 0.8 },
          className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-balance",
          children: [
            "Transforming Spaces Into",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold italic", children: "Stunning" }),
            " Masterpieces"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.55, duration: 0.7 },
          className: "mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed",
          children: "Professional interior & exterior decoration services designed to bring elegance, beauty, and functionality to every space."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.75, duration: 0.7 },
          className: "mt-10 flex flex-wrap gap-3 md:gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "group bg-gradient-gold text-navy font-semibold px-5 py-2.5 text-sm md:text-base md:px-8 md:py-4 rounded-full shadow-gold hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2",
                children: [
                  "Get Free Consultation",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "md:w-[18px] md:h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/portfolio",
                className: "group border-2 border-white/30 backdrop-blur-sm bg-white/5 text-white font-semibold px-5 py-2.5 text-sm md:text-base md:px-8 md:py-4 rounded-full hover:bg-white hover:text-navy transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 14, className: "md:w-4 md:h-4 fill-current transition-transform duration-300 group-hover:scale-125" }),
                  "View Projects"
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setI(idx),
        className: `h-1 rounded-full transition-all duration-500 hover:scale-y-[2] ${idx === i ? "bg-gold w-12" : "bg-white/40 w-6 hover:bg-white/70"}`,
        "aria-label": `Slide ${idx + 1}`
      },
      idx
    )) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  Home as component
};
