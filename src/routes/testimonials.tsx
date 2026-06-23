import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { TESTIMONIALS } from "@/data/site";
import { CTASection } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — What Our Clients Say | Emmastrons" },
      { name: "description", content: "Read what homeowners, hotel directors, and businesses say about working with Emmastrons." },
      { property: "og:title", content: "Testimonials — Emmastrons" },
      { property: "og:description", content: "Stories from clients who trusted us with their spaces." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const ALL = [...TESTIMONIALS, ...TESTIMONIALS.map((t) => ({ ...t, name: t.name + " " }))];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by clients across Nigeria."
        subtitle="Real stories from homeowners, hospitality leaders, and businesses we've had the privilege to serve."
        image="/heroTwo.jpg"
      />

      <section className="py-24 container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6">
          {ALL.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.55 }}
              className="relative bg-card border border-border rounded-2xl p-10 hover:border-gold hover:shadow-luxury transition-all"
            >
              <Quote className="absolute top-6 right-6 text-gold/20" size={56} />
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed text-lg italic">"{t.text}"</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="font-display font-bold text-navy text-lg">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
