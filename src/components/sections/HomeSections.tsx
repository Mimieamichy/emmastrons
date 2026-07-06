import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui-custom/SectionTitle";
import { SERVICES, WHY_US, STATS, TESTIMONIALS } from "@/data/site";

export function AboutTeaser() {
  return (
    <section className="py-24 container-px mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="/home3.jpeg"
            alt="Interior desgn"
            className="rounded-2xl shadow-luxury w-full aspect-[4/5] object-cover"

          />
          <div className="absolute -bottom-8 -right-8 bg-gradient-gold text-navy p-8 rounded-2xl shadow-gold hidden md:block">
            <p className="text-5xl font-display font-bold">12+</p>
            <p className="text-sm uppercase tracking-wider font-semibold">Years of Craft</p>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            eyebrow="About Emmastrons"
            title="A studio built on craft, taste, and trust."
            subtitle="For over a decade, Emmastrons has shaped homes, offices, hotels, and public spaces across Nigeria — pairing classical elegance with contemporary discipline."
          />
          <ul className="space-y-4 mb-8">
            {[
              "Award-winning design philosophy",
              "End-to-end project management",
              "Premium materials & expert craftsmen",
              "Transparent pricing, on-time delivery",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 hover:text-gold-deep transition-all duration-300"
          >
            Learn more about us <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="bg-navy-deep text-white py-16">
      <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-4xl md:text-6xl font-display font-bold text-gradient-gold">{s.value}</p>
            <p className="mt-2 text-sm md:text-base text-white/70 uppercase tracking-wider">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid({ heading = true, showLearnMore = true }: { heading?: boolean; showLearnMore?: boolean }) {
  return (
    <section className="py-24 container-px mx-auto max-w-7xl">
      {heading && (
        <SectionTitle
          center
          eyebrow="What we do"
          title="Comprehensive design & decoration services"
          subtitle="From a single room refresh to a full architectural transformation — every service delivered with the same uncompromising standard."
        />
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
              <div className="h-14 w-14 rounded-xl bg-navy-deep grid place-items-center text-gold group-hover:bg-gradient-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-display font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.items.slice(0, 3).map((it) => (
                  <li key={it} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" /> {it}
                  </li>
                ))}
              </ul>
              {showLearnMore && (
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-deep hover:gap-2 transition-all duration-300"
                >
                  Learn More <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          center
          eyebrow="Why choose us"
          title="The Emmastrons difference"
          subtitle="Six commitments that have made us the trusted partner for hundreds of clients."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {WHY_US.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-card p-4 sm:p-8 rounded-2xl border border-border hover:border-gold hover:-translate-y-1 hover:shadow-luxury transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-gold/10 grid place-items-center text-gold-deep group-hover:bg-gradient-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-display font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsCarousel() {
  return (
    <section className="bg-gradient-hero text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,_var(--gold)_15%,_transparent)_0%,_transparent_70%)]" />
      <div className="container-px mx-auto max-w-7xl relative">
        <SectionTitle
          center
          light
          eyebrow="Client Stories"
          title="Loved by homeowners and businesses alike"
        />
        <TestimonialsMarquee />
      </div>
    </section>
  );
}

function TestimonialsMarquee() {
  const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
    <div className="min-w-[280px] md:min-w-[320px] lg:min-w-[340px] max-w-[340px] mx-2 flex-shrink-0">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:border-gold/50 transition-all h-full">
        <div className="flex text-gold mb-3 text-sm">
          {Array.from({ length: testimonial.rating }).map((_, k) => <span key={k}>★</span>)}
        </div>
        <blockquote className="text-white/85 leading-relaxed italic text-sm">{testimonial.text}</blockquote>
        <figcaption className="mt-4 pt-4 border-t border-white/10">
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-white/60 mt-1">{testimonial.role}</p>
        </figcaption>
      </div>
    </div>
  );

  const Marquee = ({ children, direction = "left" }: { children: React.ReactNode; direction?: "left" | "right" }) => {
    return (
      <div className="relative overflow-hidden py-4">
        <div
          className={`flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        >
          {children}
          {children}
        </div>
      </div>
    );
  };

  // Split testimonials into two groups
  const firstHalf = TESTIMONIALS.slice(0, 4);
  const secondHalf = TESTIMONIALS.slice(4, 8);

  return (
    <div className="mt-8 space-y-6">
      <style>{`
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
      `}</style>
      <div className="group">
        <Marquee direction="left">
          {firstHalf.map((t, idx) => (
            <TestimonialCard key={`left-${idx}`} testimonial={t} />
          ))}
        </Marquee>
      </div>
      <div className="group">
        <Marquee direction="right">
          {secondHalf.map((t, idx) => (
            <TestimonialCard key={`right-${idx}`} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}



export function CTASection() {
  return (
    <section className="py-24 container-px mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-20 text-center text-white shadow-luxury">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Ready to begin?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-balance max-w-3xl mx-auto">
            Let's bring your dream space to life.
          </h2>
          <p className="mt-5 text-white/75 max-w-xl mx-auto">
            Book a free consultation today. Our designers will visit, listen, and craft a proposal tailored to you.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 hover:shadow-luxury transition-all duration-300"
          >
            Get a Free Quote <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
