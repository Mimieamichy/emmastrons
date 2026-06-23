import {
  Sofa, Building2, Hammer, Lightbulb, Trees, ClipboardList,
  Award, Users, Sparkles, Clock, Palette, HeartHandshake,
  Home, Info, Briefcase, Image as ImageIcon, Mail as MailIcon,
} from "lucide-react";

export const CONTACT = {
  phone1: "07042054107",
  phone2: "09033290425",
  email: "emmastrons@gmail.com",
  whatsapp: "2347042054107",
  address: "Lagos, Nigeria — available nationwide & worldwide",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
};

export const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/portfolio", label: "Portfolio", icon: ImageIcon },
  { to: "/contact", label: "Contact", icon: MailIcon },
] as const;

export const SERVICES = [
  {
    icon: Sofa,
    title: "Interior Decoration",
    description: "Living rooms, bedrooms, offices — refined spaces designed around how you live.",
    items: ["Living Room Design", "Bedroom Design", "Office Decoration", "Ceiling Designs", "Lighting Design"],
  },
  {
    icon: Building2,
    title: "Exterior Decoration",
    description: "Striking facades and beautifully finished exteriors that make a statement.",
    items: ["Building Facade Design", "Exterior Finishing", "Landscape Enhancement", "Outdoor Beautification"],
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Full home and commercial remodels — modern, durable, expertly executed.",
    items: ["Home Remodeling", "Commercial Renovation", "Space Transformation"],
  },
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "Expert guidance from concept to completion, tailored to your vision and budget.",
    items: ["Design Consultation", "Project Planning", "Decoration Guidance"],
  },
];

export const WHY_US = [
  { icon: Users, title: "Professional Team", desc: "Seasoned designers, craftsmen, and project managers under one roof." },
  { icon: Sparkles, title: "Quality Materials", desc: "We source only premium, durable finishes that stand the test of time." },
  { icon: Award, title: "Affordable Pricing", desc: "Luxury results with transparent quotes — no hidden surprises." },
  { icon: Clock, title: "Timely Delivery", desc: "Disciplined schedules. We respect your timeline as much as you do." },
  { icon: Palette, title: "Creative Designs", desc: "Original concepts crafted for your space — never templated." },
  { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Your delight is the benchmark. Every detail, signed off by you." },
];





export const TESTIMONIALS = [
  {
    name: "Adaeze Okafor",
    role: "Homeowner, Lagos",
    image: "/client-1.jpg",
    rating: 5,
    text: "Emmastrons transformed our home into something we never imagined possible. The attention to detail, the gold accents, the ceiling — it all feels like a five-star hotel. Truly world-class.",
  },
  {
    name: "Chinedu Ibe",
    role: "Hotel Director, Lagos",
    image: "/client-2.jpg",
    rating: 5,
    text: "Professional, punctual, and incredibly creative. They redesigned our lobby on schedule and on budget. Our guests now comment on the design every single day.",
  },
  {
    name: "Mrs. Funmi Bello",
    role: "Restaurant Owner",
    image: "/client-3.jpg",
    rating: 5,
    text: "From the first consultation to the final walkthrough, Emmastrons listened, advised, and delivered. The renovation exceeded all my expectations.",
  },
  {
    name: "Tunde Adebayo",
    role: "Office Manager, Abuja",
    image: "/client-1.jpg",
    rating: 5,
    text: "Our office space went from drab to fab in record time. The team was professional, creative, and incredibly detail-oriented. Highly recommend!",
  },
  {
    name: "Amaka Nwankwo",
    role: "Event Planner, Port Harcourt",
    image: "/client-2.jpg",
    rating: 5,
    text: "Emmastrons helped us create the perfect event space. Their design ideas were fresh and innovative, and they stayed within our budget.",
  },
  {
    name: "Emeka Okafor",
    role: "Real Estate Developer",
    image: "/client-3.jpg",
    rating: 5,
    text: "We've worked with Emmastrons on multiple projects, and they always deliver exceptional quality. Their work speaks for itself.",
  },
  {
    name: "Zainab Abdullahi",
    role: "Homeowner, Kano",
    image: "/client-1.jpg",
    rating: 5,
    text: "From start to finish, the experience was seamless. The team understood our vision and brought it to life beautifully.",
  },
  {
    name: "Olumide Osinowo",
    role: "Interior Design Enthusiast",
    image: "/client-2.jpg",
    rating: 5,
    text: "Incredible attention to detail and a real passion for design. Emmastrons turned our house into a home we're proud of.",
  },
];

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Expert Craftsmen" },
];

export const PROJECTS = [
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
