import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: "150+", label: "Brands Elevated" },
    { number: "3M+", label: "Social Impressions" },
    { number: "98%", label: "Client Retention" },
    { number: "500+", label: "Campaigns Delivered" }
  ];

  const services = [
    { num: "01", title: "Social Media Design", desc: "Scroll-stopping visuals crafted for every platform. We design carousels, reels, and posts that feel authentic to your brand voice." },
    { num: "02", title: "Branding Content", desc: "From logo systems to brand kits, we build the visual DNA that makes your business instantly recognizable and deeply trusted." },
    { num: "03", title: "Digital Marketing", desc: "Data-informed campaigns that pair human creativity with strategic execution. Real engagement, real conversions." }
  ];

  const portfolio = [
    { title: "Brew & Bean Co.", category: "Social Media Redesign", size: "lg" },
    { title: "FitVibe Athletics", category: "Brand Kit & Content", size: "sm" },
    { title: "Luna Skincare", category: "Full Digital Campaign", size: "sm" },
    { title: "UrbanNest Interiors", category: "Social Media Strategy", size: "lg" },
    { title: "GreenLeaf Foods", category: "Brand Identity", size: "md" },
    { title: "Apex Consulting", category: "LinkedIn Campaign", size: "md" }
  ];

  const testimonials = [
    { name: "Sarah Mitchell", role: "Founder, Brew & Bean Co.", quote: "Nexova completely transformed how our audience perceives us. Our engagement tripled in just two months. They truly understand the human side of branding." },
    { name: "James Rodriguez", role: "CMO, FitVibe Athletics", quote: "Working with Nexova felt like having an in-house creative team that genuinely cared about our mission. The results speak for themselves." },
    { name: "Priya Patel", role: "CEO, Luna Skincare", quote: "They don't just design graphics — they craft stories. Our Instagram following grew 240% and every piece of content feels authentically us." }
  ];

  const process = [
    { step: "01", title: "Discovery Call", desc: "We learn about your brand story, audience, goals, and the voice that makes you unique." },
    { step: "02", title: "Strategy & Moodboard", desc: "Our team presents a tailored creative direction with moodboards, color studies, and content pillars." },
    { step: "03", title: "Design & Create", desc: "Handcrafted visuals and copy that feel organic, intentional, and unmistakably yours." },
    { step: "04", title: "Launch & Optimize", desc: "We publish, monitor performance, and iterate together to maximize impact across channels." }
  ];

  return (
    <div>
      {/* Hero — Full-bleed editorial style */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 max-w-[1400px] mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-6">Social Media Design & Brand Kits</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[0.95] mb-8">
              We Design
              <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">
                For Humans
              </em>
            </h1>
            <p className="text-lg text-brand-darkBlue/70 max-w-md leading-relaxed mb-10">
              Authentic digital marketing, creative branding content, and engaging social experiences. No synthetic tropes — just real connections that convert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-brand-darkBlue text-white px-8 py-4 font-semibold hover:bg-brand-darkBlue/90 transition">
                Start a Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/product" className="inline-flex items-center gap-2 border-2 border-brand-darkBlue/20 text-brand-darkBlue px-8 py-4 font-semibold hover:border-brand-darkBlue transition">
                View Packages
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-brand-darkBlue/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBlue/30 to-transparent flex items-end p-8">
                <span className="text-white/60 font-heading italic text-lg">[ Creative Team Photography ]</span>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border-l-4 border-brand-lightBlue">
              <p className="text-4xl font-heading font-bold">150+</p>
              <p className="text-sm text-brand-darkBlue/60">Brands Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee-style trusted brands */}
      <section className="border-y border-brand-darkBlue/10 py-8 overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap px-6">
          {["Brew & Bean", "FitVibe", "Luna Skincare", "UrbanNest", "GreenLeaf", "Apex", "Brew & Bean", "FitVibe", "Luna Skincare", "UrbanNest"].map((brand, i) => (
            <span key={i} className="font-heading italic text-2xl text-brand-darkBlue/20 shrink-0">{brand}</span>
          ))}
        </div>
      </section>

      {/* Stats — Horizontal strip */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-4xl md:text-5xl font-heading font-bold text-brand-lightBlue mb-1">{stat.number}</p>
              <p className="text-sm opacity-50 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — Horizontal accordion style */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Core Capabilities</h2>
          </div>
          <Link to="/services" className="text-sm uppercase tracking-wider font-semibold text-brand-darkBlue/60 hover:text-brand-darkBlue flex items-center gap-2 transition">
            All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-brand-darkBlue/10">
          {services.map((s, i) => (
            <div key={i} className="group py-10 flex flex-col md:flex-row gap-6 md:gap-16 items-start hover:bg-white/50 px-6 -mx-6 transition-colors cursor-pointer">
              <span className="text-brand-lightBlue/40 font-heading text-5xl font-bold shrink-0">{s.num}</span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:text-brand-lightBlue transition">{s.title}</h3>
                <p className="text-brand-darkBlue/60 max-w-lg leading-relaxed">{s.desc}</p>
              </div>
              <ArrowUpRight size={24} className="text-brand-darkBlue/20 group-hover:text-brand-darkBlue transition shrink-0 mt-2" />
            </div>
          ))}
        </div>
      </section>

      {/* Process — Timeline style */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">How We Bring Brands to Life</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {process.map((item, i) => (
              <div key={i} className="relative p-8 border-l-2 border-brand-lightBlue/20 lg:border-l-0 lg:border-t-2 lg:pt-10">
                <div className="absolute top-0 left-0 lg:top-[-9px] lg:left-8 w-4 h-4 bg-brand-lightBlue rounded-full -translate-x-[9px] lg:translate-x-0"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold">Step {item.step}</span>
                <h3 className="text-xl font-heading font-bold mt-3 mb-3">{item.title}</h3>
                <p className="text-sm text-brand-darkBlue/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio — Masonry-ish grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Work</h2>
          </div>
          <Link to="/product" className="text-sm uppercase tracking-wider font-semibold text-brand-darkBlue/60 hover:text-brand-darkBlue flex items-center gap-2 transition">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.map((item, i) => (
            <div key={i} className={`group relative overflow-hidden cursor-pointer bg-brand-darkBlue/5 ${
              item.size === 'lg' ? 'md:row-span-2 min-h-[300px] md:min-h-[500px]' :
              item.size === 'md' ? 'min-h-[250px]' : 'min-h-[250px]'
            }`}>
              <div className="absolute inset-0 bg-brand-darkBlue/0 group-hover:bg-brand-darkBlue/80 transition-all duration-500 flex items-end">
                <div className="p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-brand-lightBlue text-xs uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-white text-2xl font-heading font-bold">{item.title}</h3>
                </div>
              </div>
              <div className="absolute bottom-6 left-8 group-hover:opacity-0 transition-opacity">
                <p className="text-brand-darkBlue/30 text-xs uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-brand-darkBlue/50 font-heading font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — Large quote style */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-12 text-center">What Clients Say</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="border-t border-white/10 pt-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, si) => <Star key={si} size={14} className="text-brand-lightBlue fill-brand-lightBlue" />)}
                </div>
                <blockquote className="text-lg leading-relaxed opacity-80 italic font-heading mb-8">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs opacity-50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — Minimal strip */}
      <section className="border-b border-brand-darkBlue/10 py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-heading font-bold mb-2">Stay Inspired</h2>
            <p className="text-brand-darkBlue/60 text-sm">Weekly design tips, branding insights, and social media strategies.</p>
          </div>
          <div className="flex gap-0 w-full md:w-auto">
            <input type="email" placeholder="you@company.com" className="flex-1 md:w-72 px-5 py-4 border-2 border-brand-darkBlue/10 border-r-0 focus:outline-none focus:border-brand-lightBlue bg-white" />
            <button className="bg-brand-darkBlue text-white px-6 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-brand-darkBlue/90 transition shrink-0">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}