import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageHero } from "./PageHero-C663baqH.mjs";
import { m as LoaderCircle, X } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CLOUDINARY_URL = "https://res.cloudinary.com/dkhigmasd/image/list/imagess.json";
const CLOUD_NAME = "dkhigmasd";
const ITEMS_PER_PAGE = 50;
function Portfolio() {
  const [lightbox, setLightbox] = reactExports.useState(null);
  const [loadedItems, setLoadedItems] = reactExports.useState(/* @__PURE__ */ new Set());
  const [isMounted, setIsMounted] = reactExports.useState(false);
  const [itemsToShow, setItemsToShow] = reactExports.useState(ITEMS_PER_PAGE);
  const {
    data: portfolio,
    isLoading,
    error
  } = useQuery({
    queryKey: ["cloudinary-portfolio"],
    queryFn: async () => {
      console.log("Fetching from:", CLOUDINARY_URL);
      const response = await fetch(CLOUDINARY_URL);
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error(`Failed to fetch portfolio data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Cloudinary data:", data);
      if (!data.resources || data.resources.length === 0) {
        throw new Error("No resources found in Cloudinary response");
      }
      return data.resources.map((resource, index) => {
        const isVideo = ["mp4", "mov", "avi", "webm"].includes(resource.format.toLowerCase());
        const displayFormat = ["heic"].includes(resource.format.toLowerCase()) ? "jpg" : resource.format.toLowerCase();
        const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${displayFormat}`;
        return {
          id: resource.public_id,
          image: url,
          title: `Project ${index + 1}`,
          category: "Interior",
          type: isVideo ? "video" : "image"
        };
      });
    }
  });
  const displayedItems = reactExports.useMemo(() => {
    return portfolio?.slice(0, itemsToShow) || [];
  }, [portfolio, itemsToShow]);
  const hasMoreItems = portfolio && portfolio.length > itemsToShow;
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + ITEMS_PER_PAGE);
  };
  reactExports.useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleLoad = (id) => {
    setLoadedItems((prev) => new Set(prev).add(id));
  };
  const lightboxItem = portfolio?.find((p) => p.image === lightbox);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Portfolio", title: "Where craft becomes character.", subtitle: "A curated selection of our recent interior and exterior projects across Nigeria.", image: "/portfolioFive.jpg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 container-px mx-auto max-w-7xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 text-gold animate-spin" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-navy", children: "Failed to load portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: error instanceof Error ? error.message : "Please try again later." })
    ] }) : portfolio?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-navy", children: "No projects found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Check back later for updates!" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-2 lg:columns-3 gap-6 space-y-6", children: displayedItems.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { initial: isMounted ? {
        opacity: 0,
        y: 30
      } : false, animate: isMounted ? {
        opacity: 1,
        y: 0
      } : {}, transition: {
        duration: 0.45,
        delay: i * 0.05
      }, onClick: () => setLightbox(p.image), className: "group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-card", children: [
        !loadedItems.has(p.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-navy-deep/30 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-gold animate-spin" }) }),
        p.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: p.image, autoPlay: true, loop: true, muted: true, playsInline: true, loading: "lazy", onLoadedData: () => handleLoad(p.id), onError: () => handleLoad(p.id), className: "w-full h-auto transition-transform duration-700 group-hover:scale-110" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", onLoad: () => handleLoad(p.id), onError: () => handleLoad(p.id), className: "w-full h-auto transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold text-xs tracking-[0.25em] uppercase font-semibold", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-xl font-display font-bold mt-1", children: p.title })
        ] })
      ] }, p.id)) }),
      hasMoreItems && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLoadMore, className: "group inline-flex items-center gap-2 bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 hover:shadow-luxury transition-all duration-300", children: [
        "Load More",
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 group-hover:animate-spin" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightbox && lightboxItem && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, onClick: () => setLightbox(null), className: "fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) }),
      lightboxItem.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.video, { initial: {
        scale: 0.9
      }, animate: {
        scale: 1
      }, src: lightbox, autoPlay: true, loop: true, muted: true, playsInline: true, className: "max-h-[90vh] max-w-[92vw] rounded-2xl shadow-luxury object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        scale: 0.9
      }, animate: {
        scale: 1
      }, src: lightbox, alt: "", className: "max-h-[90vh] max-w-[92vw] rounded-2xl shadow-luxury object-contain" })
    ] }) })
  ] });
}
export {
  Portfolio as component
};
