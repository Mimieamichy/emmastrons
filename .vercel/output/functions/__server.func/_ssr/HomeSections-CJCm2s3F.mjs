import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SERVICES, W as WHY_US, a as STATS, T as TESTIMONIALS } from "./router-uaDXSJiF.mjs";
import { k as ArrowRight, l as CircleCheck } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionTitle({ eyebrow, title, subtitle, center, light }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: `${center ? "text-center mx-auto" : ""} max-w-3xl mb-14`,
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 ${center ? "" : ""}`, children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-3xl md:text-5xl font-display font-bold text-balance ${light ? "text-white" : "text-navy"}`, children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`, children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-6 h-[3px] w-20 bg-gradient-gold ${center ? "mx-auto" : ""}` })
      ]
    }
  );
}
function AboutTeaser() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/portfolioTwo.jpg",
              alt: "Interior desgn",
              className: "rounded-2xl shadow-luxury w-full aspect-[4/5] object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-8 -right-8 bg-gradient-gold text-navy p-8 rounded-2xl shadow-gold hidden md:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-display font-bold", children: "12+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-wider font-semibold", children: "Years of Craft" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "About Emmastrons",
          title: "A studio built on craft, taste, and trust.",
          subtitle: "For over a decade, Emmastrons has shaped homes, offices, hotels, and public spaces across Nigeria — pairing classical elegance with contemporary discipline."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 mb-8", children: [
        "Award-winning design philosophy",
        "End-to-end project management",
        "Premium materials & expert craftsmen",
        "Transparent pricing, on-time delivery"
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-gold mt-0.5 shrink-0", size: 20 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/about",
          className: "group inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 hover:text-gold-deep transition-all duration-300",
          children: [
            "Learn more about us ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "transition-transform duration-300 group-hover:translate-x-1" })
          ]
        }
      )
    ] })
  ] }) });
}
function StatsBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep text-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: i * 0.1, duration: 0.5 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl md:text-6xl font-display font-bold text-gradient-gold", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm md:text-base text-white/70 uppercase tracking-wider", children: s.label })
      ]
    },
    s.label
  )) }) });
}
function ServicesGrid({ heading = true }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 container-px mx-auto max-w-7xl", children: [
    heading && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        center: true,
        eyebrow: "What we do",
        title: "Comprehensive design & decoration services",
        subtitle: "From a single room refresh to a full architectural transformation — every service delivered with the same uncompromising standard."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: SERVICES.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08, duration: 0.55 },
          className: "group relative bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-luxury transition-all duration-500 hover:-translate-y-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-xl bg-navy-deep grid place-items-center text-gold group-hover:bg-gradient-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-display font-bold text-navy", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: s.items.slice(0, 3).map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-gold" }),
              " ",
              it
            ] }, it)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-deep hover:gap-2 transition-all duration-300",
                children: [
                  "Learn More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "transition-transform duration-300 group-hover:translate-x-1" })
                ]
              }
            )
          ]
        },
        s.title
      );
    }) })
  ] });
}
function WhyUsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        center: true,
        eyebrow: "Why choose us",
        title: "The Emmastrons difference",
        subtitle: "Six commitments that have made us the trusted partner for hundreds of clients."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: WHY_US.map((w, i) => {
      const Icon = w.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06, duration: 0.5 },
          className: "bg-card p-8 rounded-2xl border border-border hover:border-gold hover:-translate-y-1 hover:shadow-luxury transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gold/10 grid place-items-center text-gold-deep group-hover:bg-gradient-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-display font-bold text-navy", children: w.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: w.desc })
          ]
        },
        w.title
      );
    }) })
  ] }) });
}
function TestimonialsCarousel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-hero text-white py-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,_var(--gold)_15%,_transparent)_0%,_transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          center: true,
          light: true,
          eyebrow: "Client Stories",
          title: "Loved by homeowners and businesses alike"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsMarquee, {})
    ] })
  ] });
}
function TestimonialsMarquee() {
  const TestimonialCard = ({ testimonial }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[280px] md:min-w-[320px] lg:min-w-[340px] max-w-[340px] mx-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:border-gold/50 transition-all h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-gold mb-3 text-sm", children: Array.from({ length: testimonial.rating }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" }, k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-white/85 leading-relaxed italic text-sm", children: testimonial.text }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 pt-4 border-t border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white text-sm", children: testimonial.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60 mt-1", children: testimonial.role })
    ] })
  ] }) });
  const Marquee = ({ children, direction = "left" }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`,
        children: [
          children,
          children
        ]
      }
    ) });
  };
  const firstHalf = TESTIMONIALS.slice(0, 4);
  const secondHalf = TESTIMONIALS.slice(4, 8);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        /* Pause on hover */
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { direction: "left", children: firstHalf.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { testimonial: t }, `left-${idx}`)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { direction: "right", children: secondHalf.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { testimonial: t }, `right-${idx}`)) }) })
  ] });
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-20 text-center text-white shadow-luxury", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-72 h-72 bg-gold/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4", children: "Ready to begin?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-display font-bold text-balance max-w-3xl mx-auto", children: "Let's bring your dream space to life." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/75 max-w-xl mx-auto", children: "Book a free consultation today. Our designers will visit, listen, and craft a proposal tailored to you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          className: "group mt-8 inline-flex items-center gap-2 bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 hover:shadow-luxury transition-all duration-300",
          children: [
            "Get a Free Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "transition-transform duration-300 group-hover:translate-x-1.5" })
          ]
        }
      )
    ] })
  ] }) });
}
export {
  AboutTeaser as A,
  CTASection as C,
  ServicesGrid as S,
  TestimonialsCarousel as T,
  WhyUsSection as W,
  SectionTitle as a,
  StatsBar as b
};
