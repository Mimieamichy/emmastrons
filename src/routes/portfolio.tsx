import { useState, useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

const CLOUDINARY_URL = "https://res.cloudinary.com/dkhigmasd/image/list/porfolio.json";
const CLOUD_NAME = "dkhigmasd";
const ITEMS_PER_PAGE = 50;

// Define types for Cloudinary resource
interface CloudinaryResource {
  public_id: string;
  format: string;
  [key: string]: unknown;
}

interface CloudinaryResponse {
  resources: CloudinaryResource[];
}

// Define portfolio item type
interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  category: string;
  type: "image" | "video";
}

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Recent Interior & Exterior Projects | Emmastrons" },
      { name: "description", content: "Browse our curated portfolio of luxury interiors, exteriors, residential and commercial projects." },
      { property: "og:title", content: "Portfolio — Emmastrons" },
      { property: "og:description", content: "A showcase of our recent design and decoration projects." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [loadedItems, setLoadedItems] = useState<Set<string>>(new Set());
  const [isMounted, setIsMounted] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);

  const { data: portfolio, isLoading, error } = useQuery({
    queryKey: ["cloudinary-portfolio"],
    queryFn: async (): Promise<PortfolioItem[]> => {
      console.log("Fetching from:", CLOUDINARY_URL);
      const response = await fetch(CLOUDINARY_URL);
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error(`Failed to fetch portfolio data: ${response.status} ${response.statusText}`);
      }
      const data: CloudinaryResponse = await response.json();
      console.log("Cloudinary data:", data);

      if (!data.resources || data.resources.length === 0) {
        throw new Error("No resources found in Cloudinary response");
      }

      // Transform Cloudinary resources to portfolio items
      return data.resources.map((resource, index) => {
        const isVideo = ["mp4", "mov", "avi", "webm"].includes(resource.format.toLowerCase());
        // Convert HEIC to JPG for better browser support
        const displayFormat = ["heic"].includes(resource.format.toLowerCase()) ? "jpg" : resource.format.toLowerCase();
        // Construct the Cloudinary URL
        const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${displayFormat}`;
        return {
          id: resource.public_id,
          image: url,
          title: `Project ${index + 1}`,
          category: "Interior",
          type: isVideo ? "video" : "image",
        };
      });
    },
  });

  const displayedItems = useMemo(() => {
    return portfolio?.slice(0, itemsToShow) || [];
  }, [portfolio, itemsToShow]);

  const hasMoreItems = portfolio && portfolio.length > itemsToShow;

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + ITEMS_PER_PAGE);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoad = (id: string) => {
    setLoadedItems((prev) => new Set(prev).add(id));
  };

  const lightboxItem = portfolio?.find((p) => p.image === lightbox);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Where craft becomes character."
        subtitle="A curated selection of our recent interior and exterior projects across Nigeria."
        image="/portfolioFive.jpg"
      />

      <section className="py-20 container-px mx-auto max-w-7xl">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-gold animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-navy">Failed to load portfolio</h2>
            <p className="text-muted-foreground mt-2">{error instanceof Error ? error.message : "Please try again later."}</p>
          </div>
        ) : portfolio?.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-navy">No projects found</h2>
            <p className="text-muted-foreground mt-2">Check back later for updates!</p>
          </div>
        ) : (
          <>
            <div className="columns-2 lg:columns-3 gap-6 space-y-6">
              {displayedItems.map((p, i) => (
                <motion.figure
                  key={p.id}
                  initial={isMounted ? { opacity: 0, y: 30 } : false}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  onClick={() => setLightbox(p.image)}
                  className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-card"
                >
                  {!loadedItems.has(p.id) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/30 z-10">
                      <Loader2 className="w-8 h-8 text-gold animate-spin" />
                    </div>
                  )}
                  {p.type === "video" ? (
                    <video
                      src={p.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      loading="lazy"
                      onLoadedData={() => handleLoad(p.id)}
                      onError={() => handleLoad(p.id)}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onLoad={() => handleLoad(p.id)}
                      onError={() => handleLoad(p.id)}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">{p.category}</p>
                    <h3 className="text-white text-xl font-display font-bold mt-1">{p.title}</h3>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            {hasMoreItems && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="group inline-flex items-center gap-2 bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 hover:shadow-luxury transition-all duration-300"
                >
                  Load More
                  <Loader2 className="w-5 h-5 group-hover:animate-spin" />
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <AnimatePresence>
        {lightbox && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            {lightboxItem.type === "video" ? (
              <motion.video
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={lightbox}
                autoPlay
                loop
                muted
                playsInline
                className="max-h-[90vh] max-w-[92vw] rounded-2xl shadow-luxury object-contain"
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={lightbox}
                alt=""
                className="max-h-[90vh] max-w-[92vw] rounded-2xl shadow-luxury object-contain"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
