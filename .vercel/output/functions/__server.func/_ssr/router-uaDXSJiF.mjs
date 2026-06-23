import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { H as House, I as Info, B as Briefcase, a as Image, M as Mail, F as Facebook, b as Instagram, L as Linkedin, S as Sofa, c as Building2, d as Hammer, C as ClipboardList, P as Phone, e as MapPin, U as Users, f as Sparkles, A as Award, g as Clock, h as Palette, i as HeartHandshake } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BdnuRPgc.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const CONTACT = {
  phone1: "07042054107",
  phone2: "09033290425",
  email: "emmastrons@gmail.com",
  whatsapp: "2347042054107",
  address: "Lagos, Nigeria — available nationwide & worldwide",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM"
};
const NAV = [
  { to: "/", label: "Home", icon: House },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/portfolio", label: "Portfolio", icon: Image },
  { to: "/contact", label: "Contact", icon: Mail }
];
const SERVICES = [
  {
    icon: Sofa,
    title: "Interior Decoration",
    description: "Living rooms, bedrooms, offices — refined spaces designed around how you live.",
    items: ["Living Room Design", "Bedroom Design", "Office Decoration", "Ceiling Designs", "Lighting Design"]
  },
  {
    icon: Building2,
    title: "Exterior Decoration",
    description: "Striking facades and beautifully finished exteriors that make a statement.",
    items: ["Building Facade Design", "Exterior Finishing", "Landscape Enhancement", "Outdoor Beautification"]
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Full home and commercial remodels — modern, durable, expertly executed.",
    items: ["Home Remodeling", "Commercial Renovation", "Space Transformation"]
  },
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "Expert guidance from concept to completion, tailored to your vision and budget.",
    items: ["Design Consultation", "Project Planning", "Decoration Guidance"]
  }
];
const WHY_US = [
  { icon: Users, title: "Professional Team", desc: "Seasoned designers, craftsmen, and project managers under one roof." },
  { icon: Sparkles, title: "Quality Materials", desc: "We source only premium, durable finishes that stand the test of time." },
  { icon: Award, title: "Affordable Pricing", desc: "Luxury results with transparent quotes — no hidden surprises." },
  { icon: Clock, title: "Timely Delivery", desc: "Disciplined schedules. We respect your timeline as much as you do." },
  { icon: Palette, title: "Creative Designs", desc: "Original concepts crafted for your space — never templated." },
  { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Your delight is the benchmark. Every detail, signed off by you." }
];
const TESTIMONIALS = [
  {
    name: "Adaeze Okafor",
    role: "Homeowner, Lagos",
    image: "/client-1.jpg",
    rating: 5,
    text: "Emmastrons transformed our home into something we never imagined possible. The attention to detail, the gold accents, the ceiling — it all feels like a five-star hotel. Truly world-class."
  },
  {
    name: "Chinedu Ibe",
    role: "Hotel Director, Lagos",
    image: "/client-2.jpg",
    rating: 5,
    text: "Professional, punctual, and incredibly creative. They redesigned our lobby on schedule and on budget. Our guests now comment on the design every single day."
  },
  {
    name: "Mrs. Funmi Bello",
    role: "Restaurant Owner",
    image: "/client-3.jpg",
    rating: 5,
    text: "From the first consultation to the final walkthrough, Emmastrons listened, advised, and delivered. The renovation exceeded all my expectations."
  },
  {
    name: "Tunde Adebayo",
    role: "Office Manager, Abuja",
    image: "/client-1.jpg",
    rating: 5,
    text: "Our office space went from drab to fab in record time. The team was professional, creative, and incredibly detail-oriented. Highly recommend!"
  },
  {
    name: "Amaka Nwankwo",
    role: "Event Planner, Port Harcourt",
    image: "/client-2.jpg",
    rating: 5,
    text: "Emmastrons helped us create the perfect event space. Their design ideas were fresh and innovative, and they stayed within our budget."
  },
  {
    name: "Emeka Okafor",
    role: "Real Estate Developer",
    image: "/client-3.jpg",
    rating: 5,
    text: "We've worked with Emmastrons on multiple projects, and they always deliver exceptional quality. Their work speaks for itself."
  },
  {
    name: "Zainab Abdullahi",
    role: "Homeowner, Kano",
    image: "/client-1.jpg",
    rating: 5,
    text: "From start to finish, the experience was seamless. The team understood our vision and brought it to life beautifully."
  },
  {
    name: "Olumide Osinowo",
    role: "Interior Design Enthusiast",
    image: "/client-2.jpg",
    rating: 5,
    text: "Incredible attention to detail and a real passion for design. Emmastrons turned our house into a home we're proud of."
  }
];
const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Expert Craftsmen" }
];
const PROJECTS = [
  {
    title: "Luxury Villa in Lagos",
    location: "Lekki, Lagos",
    description: "A complete transformation of a 5-bedroom villa, featuring custom ceiling designs, premium furniture, and curated art pieces throughout the space.",
    services: ["Interior Decoration", "Renovation", "Consultation"],
    image: "/portfolioTwo.jpg"
  },
  {
    title: "Modern Office Complex",
    location: "Victoria Island, Lagos",
    description: "Designed and executed a contemporary office space for 50+ employees with open floor plan, ergonomic furniture, and biophilic elements.",
    services: ["Interior Decoration", "Consultation"],
    image: "/portfolioThree.jpg"
  },
  {
    title: "Boutique Hotel Lobby",
    location: "Ikoyi, Lagos",
    description: "A stunning lobby design featuring marble floors, gold accents, and custom lighting fixtures that create an unforgettable first impression.",
    services: ["Interior Decoration", "Renovation"],
    image: "/portfolioFour.jpg"
  },
  {
    title: "Residential Apartment",
    location: "Abuja, Nigeria",
    description: "Complete renovation and decoration of a 3-bedroom apartment with a focus on functionality, comfort, and timeless design.",
    services: ["Interior Decoration", "Renovation"],
    image: "/portfolioFive.jpg"
  }
];
function Logo({ variant = "dark", size = "md", iconOnly = false }) {
  const sizes = {
    sm: { icon: "h-7 w-7", title: "text-lg", sub: "text-[9px]" },
    md: { icon: "h-10 w-10", title: "text-2xl", sub: "text-[10px]" },
    lg: { icon: "h-14 w-14", title: "text-4xl", sub: "text-xs" }
  }[size];
  const titleColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/80" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/logo.png",
        alt: "Emmastrons",
        className: `${sizes.icon} object-contain`,
        width: 56,
        height: 56
      }
    ),
    !iconOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-display font-bold tracking-wide ${sizes.title} ${titleColor}`, children: [
        "EMMA",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "STRONS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `tracking-[0.2em] uppercase font-medium ${sizes.sub} ${subColor}`, children: "Interiors & Exteriors" })
    ] })
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: scrolled ? "dark" : "light", size: "md" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: `relative px-4 py-2 text-sm font-medium transition-colors group ${scrolled ? "text-foreground" : "text-white"} hover:text-gold`,
            activeProps: { className: "text-gold [&>span]:scale-x-100" },
            activeOptions: { exact: true },
            children: [
              item.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gold origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" })
            ]
          },
          item.to
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "bg-gradient-gold text-navy font-semibold px-6 py-3 rounded-full text-sm shadow-gold hover:shadow-luxury transition-all hover:-translate-y-0.5",
            children: "Get a Quote"
          }
        ) })
      ] })
    }
  );
}
function BottomNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: "lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]",
      style: { paddingBottom: "env(safe-area-inset-bottom)" },
      "aria-label": "Mobile navigation",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-center justify-around h-16", children: NAV.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            activeProps: { className: "text-gold [&>span.indicator]:scale-x-100" },
            activeOptions: { exact: true },
            className: "relative flex flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium text-muted-foreground hover:text-gold transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "indicator absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-gold rounded-full origin-center scale-x-0 transition-transform duration-300" })
            ]
          }
        ) }, item.to);
      }) })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep text-white/80 pt-20 pb-8 mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light", size: "md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm leading-relaxed text-white/70", children: "Transforming spaces into stunning masterpieces — interior and exterior decoration crafted with elegance and precision." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6", children: [Facebook, Instagram, Linkedin].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-gold hover:text-navy hover:border-gold transition-all",
            "aria-label": "Social link",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-lg font-display mb-5", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "hover:text-gold transition-colors", children: n.label }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-lg font-display mb-5", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-gold transition-colors", children: s.title }) }, s.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-lg font-display mb-5", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              CONTACT.phone1,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              CONTACT.phone2
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT.email}`, className: "hover:text-gold break-all", children: CONTACT.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: CONTACT.address })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Emmastrons Interiors & Exterior Decorations. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with elegance." })
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-hero text-white flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-8xl font-display font-bold text-gradient-gold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/75", children: "The page you're looking for doesn't exist or has moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "mt-8 inline-flex items-center bg-gradient-gold text-navy font-semibold px-6 py-3 rounded-full", children: "Return Home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-navy", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try again or return home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "bg-gradient-gold text-navy font-semibold px-5 py-2.5 rounded-full",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "border border-border px-5 py-2.5 rounded-full font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Emmastrons — Interior & Exterior Decorations" },
      { name: "description", content: "Premium interior and exterior decoration in Nigeria. Designing elegant homes, offices, and commercial spaces." },
      { name: "author", content: "Emmastrons" },
      { property: "og:site_name", content: "Emmastrons" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Emmastrons — Interior & Exterior Decorations" },
      { name: "twitter:title", content: "Emmastrons — Interior & Exterior Decorations" },
      { property: "og:description", content: "Premium interior and exterior decoration in Nigeria. Designing elegant homes, offices, and commercial spaces." },
      { name: "twitter:description", content: "Premium interior and exterior decoration in Nigeria. Designing elegant homes, offices, and commercial spaces." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0b0cb672-1079-49a3-9d6b-109a58ba83b1/id-preview-ed436c5b--bd1edf0a-ecfb-443a-97d4-768ac25c62ed.lovable.app-1781050689443.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0b0cb672-1079-49a3-9d6b-109a58ba83b1/id-preview-ed436c5b--bd1edf0a-ecfb-443a-97d4-768ac25c62ed.lovable.app-1781050689443.png" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pb-16 lg:pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./testimonials-DA6K_k9j.mjs");
const Route$7 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Testimonials — What Our Clients Say | Emmastrons"
    }, {
      name: "description",
      content: "Read what homeowners, hotel directors, and businesses say about working with Emmastrons."
    }, {
      property: "og:title",
      content: "Testimonials — Emmastrons"
    }, {
      property: "og:description",
      content: "Stories from clients who trusted us with their spaces."
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const paths = ["/", "/about", "/services", "/portfolio", "/projects", "/testimonials", "/contact"];
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./services-Cpid7dTh.mjs");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Interior, Exterior, Renovation & Consultation | Emmastrons"
    }, {
      name: "description",
      content: "Explore Emmastrons' full range of services: interior decoration, exterior design, renovation, and expert consultation."
    }, {
      property: "og:title",
      content: "Our Services — Emmastrons"
    }, {
      property: "og:description",
      content: "Comprehensive interior and exterior decoration services across Nigeria."
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./projects-CcXmPdPe.mjs");
const Route$4 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Featured Projects — Emmastrons"
    }, {
      name: "description",
      content: "A closer look at signature projects delivered by Emmastrons across residential and commercial spaces."
    }, {
      property: "og:title",
      content: "Featured Projects — Emmastrons"
    }, {
      property: "og:description",
      content: "Signature interior and exterior projects."
    }],
    links: [{
      rel: "canonical",
      href: "/projects"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio-BwxRwMdv.mjs");
const Route$3 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio — Recent Interior & Exterior Projects | Emmastrons"
    }, {
      name: "description",
      content: "Browse our curated portfolio of luxury interiors, exteriors, residential and commercial projects."
    }, {
      property: "og:title",
      content: "Portfolio — Emmastrons"
    }, {
      property: "og:description",
      content: "A showcase of our recent design and decoration projects."
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-8JHCpWvK.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Emmastrons — Get a Free Consultation"
    }, {
      name: "description",
      content: `Get in touch with Emmastrons. Call ${CONTACT.phone1} or email ${CONTACT.email} for a free design consultation.`
    }, {
      property: "og:title",
      content: "Contact Emmastrons"
    }, {
      property: "og:description",
      content: "Book a free interior or exterior design consultation today."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CwgbW0Ac.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Emmastrons — Our Story, Mission & Values"
    }, {
      name: "description",
      content: "Learn about Emmastrons — Nigeria's premium interior & exterior decoration studio. Our story, mission, vision, and the values driving our craft."
    }, {
      property: "og:title",
      content: "About Emmastrons"
    }, {
      property: "og:description",
      content: "A studio built on craft, taste, and trust."
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B0fNJ3MC.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Emmastrons — Transforming Spaces Into Stunning Masterpieces"
    }, {
      name: "description",
      content: "Premium interior & exterior decoration services in Nigeria. Elegance, beauty, and functionality for every space."
    }, {
      property: "og:title",
      content: "Emmastrons — Premium Interior & Exterior Decorations"
    }, {
      property: "og:description",
      content: "Transforming spaces into stunning masterpieces across Nigeria."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$7.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const ProjectsRoute = Route$4.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$8
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ProjectsRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  TestimonialsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CONTACT as C,
  PROJECTS as P,
  SERVICES as S,
  TESTIMONIALS as T,
  WHY_US as W,
  STATS as a,
  router as r
};
