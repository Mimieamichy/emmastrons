import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { P as PageHero } from "./PageHero-C663baqH.mjs";
import { C as CONTACT } from "./router-uaDXSJiF.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { P as Phone, M as Mail, e as MapPin, g as Clock, n as MessageCircle, o as Send } from "../_libs/lucide-react.mjs";
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
function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Quote request:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Let's design something extraordinary.", subtitle: "Tell us about your project. We'll get back to you within one business day.", image: "/portfolioTwo.jpg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-hero text-white rounded-2xl p-8 shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Get in touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mb-8", children: "Reach out via phone, email, or WhatsApp. We're here to help." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-white/60", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${CONTACT.phone1}`, className: "block hover:text-gold", children: CONTACT.phone1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${CONTACT.phone2}`, className: "block hover:text-gold", children: CONTACT.phone2 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-white/60", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT.email}`, className: "hover:text-gold break-all", children: CONTACT.email })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-white/60", children: "Office" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: CONTACT.address })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-white/60", children: "Hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: CONTACT.hours })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${CONTACT.whatsapp}`, target: "_blank", rel: "noreferrer", className: "mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-navy font-semibold py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
            " Chat on WhatsApp"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border h-64 bg-secondary relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Office location", src: "https://www.openstreetmap.org/export/embed.html?bbox=7.45%2C9.05%2C7.55%2C9.10&layer=mapnik", className: "absolute inset-0 w-full h-full", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-luxury", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold tracking-[0.3em] uppercase text-xs font-semibold", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-navy mt-2 mb-8", children: "Request a free quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "grid gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("name", {
              required: "Name is required"
            }), className: inputCls, placeholder: "Your name" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", error: errors.phone?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("phone", {
              required: "Phone is required"
            }), className: inputCls, placeholder: "+234..." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", ...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email"
            }
          }), className: inputCls, placeholder: "you@example.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service Needed", error: errors.service?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("service", {
            required: "Select a service"
          }), className: inputCls, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select a service —" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Interior Decoration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Exterior Decoration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Renovation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Please add a bit more detail"
            }
          }), rows: 5, className: inputCls, placeholder: "Tell us about your project, space, and goals." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60", children: isSubmitting ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Send Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
          ] }) }),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "text-center text-green-700 bg-green-50 border border-green-200 rounded-lg p-3", children: "✓ Thank you — we'll be in touch within one business day." })
        ] })
      ] })
    ] })
  ] });
}
const inputCls = "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all text-foreground";
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-semibold text-navy mb-2", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-destructive mt-1", children: error })
  ] });
}
export {
  Contact as component
};
